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


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

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

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact")
async def submit_contact_form(form_data: ContactFormSubmission):
    try:
        # Get Resend API key from environment
        resend_api_key = os.environ.get('RESEND_API_KEY')
        
        if not resend_api_key:
            # If no API key, just log and return success (fallback mode)
            logger.warning("RESEND_API_KEY not found. Form data logged but email not sent.")
            logger.info(f"Contact form submission: {form_data.dict()}")
            return {"success": True, "message": "Form submitted successfully"}
        
        # Prepare email content
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
        
        # Send email via Resend API
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.resend.com/emails",
                headers={
                    "Authorization": f"Bearer {resend_api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "from": "CF Gutters <onboarding@resend.dev>",
                    "to": ["louis@cfgutters.com", "connor@cfgutters.com"],
                    "subject": f"New Quote Request from {form_data.fullName}",
                    "html": email_html,
                },
            )
            
            if response.status_code != 200:
                logger.error(f"Resend API error: {response.text}")
                raise HTTPException(status_code=500, detail="Failed to send email")
        
        # Store in database for records
        form_dict = form_data.dict()
        form_dict['id'] = str(uuid.uuid4())
        form_dict['submitted_at'] = datetime.utcnow()
        await db.contact_submissions.insert_one(form_dict)
        
        logger.info(f\"Contact form submitted and email sent for {form_data.fullName}\")
        return {\"success\": True, \"message\": \"Form submitted successfully\"}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f\"Error processing contact form: {str(e)}\")
        raise HTTPException(status_code=500, detail=\"An error occurred processing your request\")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
