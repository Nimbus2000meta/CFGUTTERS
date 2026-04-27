from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
from typing import Dict, Any
import json
import os
from datetime import datetime
import urllib.request
import urllib.parse
import urllib.error

app = FastAPI()

@app.middleware("http")
async def add_cors_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response

@app.options("/{path:path}")
async def options_handler(path: str):
    return JSONResponse(
        content={"message": "OK"},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    )

@app.get("/")
async def root():
    return {"message": "CF Gutters Backend API", "status": "running"}

@app.get("/api/")
async def api_root():
    return {"message": "Hello World"}

@app.post("/api/contact")
async def submit_contact_form(request: Request):
    email_status = {"attempted": False, "success": False, "error": None}
    
    try:
        data = await request.json()
        
        # Get Resend API key
        resend_api_key = os.environ.get('RESEND_API_KEY')
        
        if resend_api_key:
            email_status["attempted"] = True
            try:
                # Prepare email content
                additional_concerns = data.get('additionalConcerns', '')
                additional_html = f"""<div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #92400e; margin-top: 0;">Additional Concerns</h3>
                    <p>{additional_concerns}</p>
                </div>""" if additional_concerns else ""
                
                email_html = f"""
                <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #2563eb;">New Contact Form Submission - CF Gutters</h2>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1f2937; margin-top: 0;">Customer Information</h3>
                        <p><strong>Name:</strong> {data.get('fullName', 'N/A')}</p>
                        <p><strong>Phone:</strong> {data.get('phone', 'N/A')}</p>
                        <p><strong>Email:</strong> {data.get('email', 'N/A')}</p>
                        <p><strong>Preferred Appointment Date:</strong> {data.get('appointmentDate', 'N/A')}</p>
                    </div>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1f2937; margin-top: 0;">Property Details</h3>
                        <p><strong>Street Address:</strong> {data.get('streetAddress', 'N/A')}</p>
                        <p><strong>City:</strong> {data.get('city', 'Not provided')}</p>
                        <p><strong>State:</strong> {data.get('state', 'Not provided')}</p>
                        <p><strong>Property Type:</strong> {data.get('propertyType', 'Residential')}</p>
                    </div>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1f2937; margin-top: 0;">Service Details</h3>
                        <p><strong>Service Needed:</strong> {data.get('serviceNeeded', 'Not specified')}</p>
                        <p><strong>Has Solar Panels:</strong> {'Yes' if data.get('hasSolarPanels') else 'No'}</p>
                        <p><strong>Has Gutter Guards:</strong> {'Yes' if data.get('hasGutterGuards') else 'No'}</p>
                    </div>
                    
                    {additional_html}
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 30px;">
                        This email was sent from the CF Gutters contact form at {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')} UTC
                    </p>
                </body>
                </html>
                """
                
                # Send to all team members via verified domain
                email_payload = json.dumps({
                    "from": "CF Gutters <noreply@cfgutters.com>",
                    "to": ["louis@cfgutters.com", "connor@cfgutters.com", "connorfogarty52@gmail.com", "cfgutters02@gmail.com"],
                    "subject": f"New Quote Request from {data.get('fullName', 'Unknown')}",
                    "html": email_html
                }).encode('utf-8')
                
                req = urllib.request.Request(
                    "https://api.resend.com/emails",
                    data=email_payload,
                    headers={
                        "Authorization": f"Bearer {resend_api_key}",
                        "Content-Type": "application/json",
                        "User-Agent": "CFGutters-Backend/1.0"
                    },
                    method="POST"
                )
                
                with urllib.request.urlopen(req, timeout=10) as response:
                    if response.status == 200:
                        email_status["success"] = True
                    else:
                        email_status["error"] = f"HTTP {response.status}"
            except urllib.error.HTTPError as http_err:
                error_body = http_err.read().decode('utf-8', errors='replace')
                email_status["error"] = f"HTTP {http_err.code}: {error_body}"
            except Exception as email_error:
                email_status["error"] = str(email_error)
        
        # Always return success - form data reached the server
        return {
            "success": True, 
            "message": "Form submitted successfully",
            "email_sent": email_status["success"]
        }
    except Exception as e:
        return {"success": False, "message": str(e)}

@app.post("/api/contact-test")
async def test_contact_form(request: Request):
    try:
        data = await request.json()
        return {"success": True, "message": "Test successful", "name": data.get("fullName", "Unknown")}
    except Exception as e:
        return {"success": False, "message": str(e)}
