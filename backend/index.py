from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import httpx


# Load environment variables
ROOT_DIR = Path(__file__).parent
if (ROOT_DIR / '.env').exists():
    load_dotenv(ROOT_DIR / '.env')

# Deployment trigger - Updated for Vercel deployment

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection with connection pooling for serverless
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'test_database')

# Global client variable for connection reuse
db_client = None

def get_database():
    """Get or create MongoDB connection (singleton pattern for serverless)"""
    global db_client
    if db_client is None:
        db_client = AsyncIOMotorClient(
            mongo_url,
            maxPoolSize=1,  # Limit pool size for serverless
            minPoolSize=0,
            maxIdleTimeMS=5000,  # Close idle connections quickly
            serverSelectionTimeoutMS=5000
        )
    return db_client[db_name]

# Create the main app without a prefix
app = FastAPI()

# Add CORS middleware FIRST - Critical for Vercel serverless
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],  # Allow all origins
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactFormSubmission(BaseModel):
    fullName: str
    phone: str
    email: EmailStr
    appointmentDate: str
    streetAddress: str
    city: Optional[str] = ""
    state: Optional[str] = ""
    serviceNeeded: Optional[str] = ""
    hasSolarPanels: bool = False
    hasGutterGuards: bool = False
    propertyType: str = "Residential"
    additionalConcerns: Optional[str] = ""

# Add OPTIONS handler for CORS preflight
@app.options("/{path:path}")
async def options_handler(path: str):
    return {"message": "OK"}

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    db = get_database()
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    db = get_database()
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact-test")
async def test_contact_form(form_data: ContactFormSubmission):
    """Simple test endpoint to check if form data reaches backend"""
    logger.info(f"TEST: Received form from {form_data.fullName}")
    return {"success": True, "message": "Test successful", "name": form_data.fullName}

@api_router.post("/contact")
async def submit_contact_form(form_data: ContactFormSubmission):
    try:
        logger.info(f"Received contact form submission from {form_data.fullName}")
        
        # 1. Store in database FIRST
        try:
            db = get_database()
            form_dict = form_data.dict()
            form_dict['id'] = str(uuid.uuid4())
            form_dict['submitted_at'] = datetime.utcnow().isoformat()
            form_dict['email_sent'] = False
            await db.contact_submissions.insert_one(form_dict)
            logger.info(f"Form saved to database for {form_data.fullName}")
        except Exception as db_error:
            logger.error(f"Database storage error (non-critical): {str(db_error)}")
        
        # 2. Try to send email via Resend (non-critical)
        email_sent = False
        resend_api_key = os.environ.get('RESEND_API_KEY')
        
        if resend_api_key:
            try:
                additional_concerns_html = f"""<div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #92400e; margin-top: 0;">Additional Concerns</h3>
                        <p>{form_data.additionalConcerns}</p>
                    </div>""" if form_data.additionalConcerns else ""
                
                email_html = f"""
                <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #2563eb;">New Contact Form Submission - CF Gutters</h2>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1f2937; margin-top: 0;">Customer Information</h3>
                        <p><strong>Name:</strong> {form_data.fullName}</p>
                        <p><strong>Phone:</strong> {form_data.phone}</p>
                        <p><strong>Email:</strong> {form_data.email}</p>
                        <p><strong>Preferred Appointment Date:</strong> {form_data.appointmentDate}</p>
                    </div>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1f2937; margin-top: 0;">Property Details</h3>
                        <p><strong>Street Address:</strong> {form_data.streetAddress}</p>
                        <p><strong>City:</strong> {form_data.city or 'Not provided'}</p>
                        <p><strong>State:</strong> {form_data.state or 'Not provided'}</p>
                        <p><strong>Property Type:</strong> {form_data.propertyType}</p>
                    </div>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1f2937; margin-top: 0;">Service Details</h3>
                        <p><strong>Service Needed:</strong> {form_data.serviceNeeded or 'Not specified'}</p>
                        <p><strong>Has Solar Panels:</strong> {'Yes' if form_data.hasSolarPanels else 'No'}</p>
                        <p><strong>Has Gutter Guards:</strong> {'Yes' if form_data.hasGutterGuards else 'No'}</p>
                    </div>
                    
                    {additional_concerns_html}
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 30px;">
                        This email was sent from the CF Gutters contact form at {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')} UTC
                    </p>
                </body>
                </html>
                """
                
                # Send only to account owner until domain is verified in Resend
                async with httpx.AsyncClient() as http_client:
                    response = await http_client.post(
                        "https://api.resend.com/emails",
                        headers={
                            "Authorization": f"Bearer {resend_api_key}",
                            "Content-Type": "application/json",
                        },
                        json={
                            "from": "CF Gutters <onboarding@resend.dev>",
                            "to": ["louis@cfgutters.com"],
                            "subject": f"New Quote Request from {form_data.fullName}",
                            "html": email_html,
                        },
                    )
                    
                    if response.status_code == 200:
                        email_sent = True
                        logger.info(f"Email sent successfully for {form_data.fullName}")
                        # Update DB record
                        try:
                            db = get_database()
                            await db.contact_submissions.update_one(
                                {"id": form_dict['id']},
                                {"$set": {"email_sent": True}}
                            )
                        except Exception:
                            pass
                    else:
                        logger.error(f"Resend API error (status {response.status_code}): {response.text}")
            except Exception as email_error:
                logger.error(f"Failed to send email for {form_data.fullName}: {str(email_error)}")
        else:
            logger.warning("RESEND_API_KEY not found. Form data saved but email not sent.")
        
        return {
            "success": True, 
            "message": "Form submitted successfully! We'll get back to you shortly.",
            "email_sent": email_sent
        }
        
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

# Ensure MongoDB connection is closed on shutdown (optional for serverless)
@app.on_event("shutdown")
async def shutdown_db_client():
    global db_client
    if db_client:
        db_client.close()

# For Vercel, we need to export the app
handler = app
