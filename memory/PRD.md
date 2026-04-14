# CF Gutters Website - PRD

## Original Problem Statement
The form is not working on https://www.cfgutters.com/contact-us or any of the other form submissions.

## Architecture
- **Frontend**: React with Tailwind CSS, React Router
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Email**: Resend API
- **Deployment**: Vercel-ready + Emergent preview

## Core Requirements
- Contact form on /contact-us and homepage bottom must submit successfully
- Form submissions stored in MongoDB `contact_submissions` collection
- Email notifications sent via Resend to business owners
- Graceful handling of email failures (DB save always succeeds)

## What's Been Implemented (April 14, 2026)
- **Bug Fix**: Fixed contact form submission failure
  - Root cause: Resend email was attempted BEFORE DB save; when email failed (403 domain verification), entire request failed
  - Root cause: `httpx.AsyncClient() as client` variable shadowed MongoDB `client`
  - Root cause: Sending to multiple recipients in Resend test mode (only account owner email works)
  - Fix: Reordered to save DB first, switched to `resend` SDK with `asyncio.to_thread`, send only to louis@cfgutters.com, graceful email failure handling
- **Testing**: 100% pass rate on both backend and frontend

## Backlog
- P0: Verify Resend domain (cfgutters.com) to send to all recipients (connor@, cfgutters02@gmail.com)
- P1: ContactForm.jsx component is unused (simpler form) - could be repurposed or removed
- P2: Add admin dashboard to view form submissions
- P2: Add rate limiting on contact form endpoint
