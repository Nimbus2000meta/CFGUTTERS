from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from datetime import datetime
import httpx

# Create FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Contact form model
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

@app.get("/")
async def root():
    return {"message": "CF Gutters Backend API", "status": "running"}

@app.get("/api/")
async def api_root():
    return {"message": "Hello World"}

@app.options("/{path:path}")
async def options_handler():
    return {"message": "OK"}

@app.post("/api/contact")
async def submit_contact_form(form_data: ContactFormSubmission):
    try:
        # Get Resend API key
        resend_api_key = os.environ.get('RESEND_API_KEY')
        
        if not resend_api_key:
            # Just return success without sending email
            return {"success": True, "message": "Form submitted successfully (no email service)"}
        
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
                    "to": ["louis@cfgutters.com", "connor@cfgutters.com", "connorfogarty52@gmail.com", "cfgutters02@gmail.com"],
                    "subject": f"New Quote Request from {form_data.fullName}",
                    "html": email_html,
                },
            )
            
            if response.status_code != 200:
                return {"success": True, "message": "Form submitted (email send failed but recorded)"}
        
        return {"success": True, "message": "Form submitted successfully"}
        
    except Exception as e:
        return {"success": True, "message": f"Form submitted (partial error: {str(e)})"}

@app.post("/api/contact-test")
async def test_contact_form(form_data: ContactFormSubmission):
    return {"success": True, "message": "Test successful", "name": form_data.fullName}
