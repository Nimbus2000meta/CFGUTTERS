# CF Gutters Website - PRD

## Original Problem Statement
The form is not working on https://www.cfgutters.com/contact-us or any of the other form submissions.

## Architecture
- **Frontend**: React with Tailwind CSS, React Router (deployed on Vercel)
- **Backend**: FastAPI (Python) — 3 entry points:
  - `server.py` — Emergent preview environment
  - `index.py` — Vercel deployment (main)
  - `api/index.py` — Vercel serverless function
- **Database**: MongoDB
- **Email**: Resend API (`onboarding@resend.dev` sender, test mode)
- **Deployment**: Vercel (production), Emergent (preview)

## Core Requirements
- Contact form on /contact-us and homepage bottom must submit successfully
- Form submissions stored in MongoDB `contact_submissions` collection
- Email notifications sent via Resend to business owners
- Graceful handling of email failures (DB save always succeeds)

## What's Been Implemented

### April 14, 2026 — Session 1: Bug Fix (server.py)
- Fixed contact form submission failure in `server.py` (preview env)
- Root cause: email attempted BEFORE DB save; email failure killed entire request
- Root cause: `httpx.AsyncClient() as client` shadowed MongoDB `client`
- Switched to `resend` SDK, DB-first approach, graceful email failure handling

### April 14, 2026 — Session 2: Fix Vercel Files + Add Service
- Fixed `index.py` and `api/index.py` (Vercel production files) with same fixes
- `api/index.py` had wrong `from` address (`louis@cfgutters.com` — unverified domain)
- `index.py` was sending to all 4 recipients (fails in Resend test mode)
- All 3 files now use `onboarding@resend.dev` sender, send only to `louis@cfgutters.com`
- Added "Gutter Installation" to service dropdown in Contact.jsx
- Testing: 100% pass rate backend + frontend

## Backlog
- P0: Redeploy to Vercel for production fix to take effect
- P0: Verify domain (cfgutters.com) in Resend to send to all recipients
- P1: Once domain verified, update `from` to `noreply@cfgutters.com` and add all recipients back
- P2: Add admin dashboard to view form submissions
- P2: Add rate limiting on contact form endpoint
