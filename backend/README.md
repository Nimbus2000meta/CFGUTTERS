# CF Gutters Backend - FastAPI

## Overview
FastAPI backend for CF Gutters contact form and services.

## Files

### For Vercel Deployment:
- `index.py` - Serverless entry point (optimized for Vercel)
- `vercel.json` - Vercel configuration
- `requirements.txt` - Python dependencies
- `.vercelignore` - Files to exclude from deployment

### For Local Development:
- `server.py` - Local development server
- `.env` - Local environment variables

## Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

## Vercel Deployment

See [VERCEL_DEPLOYMENT_GUIDE.md](../VERCEL_DEPLOYMENT_GUIDE.md) for complete deployment instructions.

### Quick Deploy

1. **Set up MongoDB Atlas** (get connection string)
2. **Deploy to Vercel:**
   ```bash
   vercel
   ```
3. **Add environment variables in Vercel dashboard:**
   - `MONGO_URL` - Your MongoDB Atlas connection string
   - `DB_NAME` - Database name (e.g., cfgutters_production)
   - `RESEND_API_KEY` - Your Resend API key

## Environment Variables

### Required:
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name
- `RESEND_API_KEY` - Resend API key for sending emails

## API Endpoints

### GET /api/
Health check endpoint

**Response:**
```json
{"message": "Hello World"}
```

### POST /api/contact
Submit contact form

**Request Body:**
```json
{
  "fullName": "John Doe",
  "phone": "555-1234",
  "email": "john@example.com",
  "appointmentDate": "2025-01-15",
  "streetAddress": "123 Main St",
  "city": "New York",
  "state": "NY",
  "serviceNeeded": "Gutter Cleaning",
  "hasSolarPanels": false,
  "hasGutterGuards": false,
  "propertyType": "Residential",
  "additionalConcerns": "Need urgent service"
}
```

**Response:**
```json
{"success": true, "message": "Form submitted successfully"}
```

### POST /api/contact-test
Test endpoint (same as /api/contact but simpler response)

## Differences: index.py vs server.py

### index.py (for Vercel)
- Optimized for serverless environment
- Connection pooling configured for serverless
- Lazy database connection (singleton pattern)
- Minimal pool size for cost optimization
- Exports `handler` for Vercel

### server.py (for Local)
- Standard FastAPI server
- Traditional MongoDB connection
- Runs continuously
- Used with uvicorn

## Tech Stack
- **Framework:** FastAPI
- **Database:** MongoDB (local) / MongoDB Atlas (production)
- **Email Service:** Resend
- **Deployment:** Vercel (serverless)
