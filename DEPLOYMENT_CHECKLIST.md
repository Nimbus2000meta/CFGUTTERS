# 🚀 Vercel Deployment Checklist for CF Gutters

Follow this checklist to deploy your backend to Vercel successfully!

---

## ✅ Pre-Deployment Checklist

### 1. MongoDB Atlas Setup
- [ ] Created MongoDB Atlas account
- [ ] Created free M0 cluster
- [ ] Created database user (username & password saved)
- [ ] Set network access to "Allow from Anywhere" (0.0.0.0/0)
- [ ] Copied connection string and replaced `<username>` and `<password>`
- [ ] Saved connection string securely

**👉 Need help?** See `MONGODB_ATLAS_SETUP.md`

### 2. Vercel Account
- [ ] Created Vercel account at [vercel.com](https://vercel.com)
- [ ] Verified email address

### 3. Code Preparation
- [ ] All backend files are in `/app/backend/` folder
- [ ] `vercel.json` exists ✅ (Already created)
- [ ] `index.py` exists ✅ (Already created)
- [ ] `requirements.txt` exists ✅ (Already created)
- [ ] `.vercelignore` exists ✅ (Already created)

---

## 📤 Deployment Steps

### Method 1: Via Vercel Dashboard (Recommended)

#### Step 1: Push to GitHub
```bash
cd /app/backend

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Prepare backend for Vercel deployment"

# Create GitHub repo and push
# (Follow GitHub instructions to create repo and push)
```

#### Step 2: Import to Vercel
- [ ] Logged into Vercel dashboard
- [ ] Clicked "Add New Project"
- [ ] Imported GitHub repository
- [ ] Selected backend folder as root (if needed)

#### Step 3: Configure Environment Variables
Add these 3 environment variables in Vercel:

- [ ] **MONGO_URL**
  ```
  mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
  ```
  *Replace with your actual MongoDB Atlas connection string*

- [ ] **DB_NAME**
  ```
  cfgutters_production
  ```
  *Or any database name you prefer*

- [ ] **RESEND_API_KEY**
  ```
  re_NmzexgbA_HubxqVckPRVqFhTrcCmDyk1T
  ```
  *Email service API key (already provided)*

#### Step 4: Deploy
- [ ] Clicked "Deploy" button
- [ ] Waited for deployment to complete (2-3 minutes)
- [ ] Deployment successful! ✅
- [ ] Copied Vercel URL (e.g., `https://your-project.vercel.app`)

---

### Method 2: Via Vercel CLI (Alternative)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to backend
cd /app/backend

# Deploy
vercel

# Follow prompts and add environment variables
```

---

## ✅ Post-Deployment Testing

### 1. Test Backend Health
- [ ] Open browser and visit: `https://your-project.vercel.app/api/`
- [ ] Should see: `{"message": "Hello World"}`
- [ ] ✅ If you see this, backend is deployed successfully!

### 2. Test Database Connection
```bash
# Test with curl
curl -X POST https://your-project.vercel.app/api/contact-test \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "phone": "555-1234",
    "email": "test@example.com",
    "appointmentDate": "2025-01-15",
    "streetAddress": "123 Test St",
    "propertyType": "Residential"
  }'
```

- [ ] Got response: `{"success": true, "message": "Test successful", "name": "Test User"}`
- [ ] ✅ API is working!

### 3. Update Frontend
- [ ] Opened `/app/frontend/.env`
- [ ] Updated `REACT_APP_BACKEND_URL` to Vercel URL:
  ```
  REACT_APP_BACKEND_URL=https://your-project.vercel.app
  ```
- [ ] Saved file
- [ ] Restarted frontend: `sudo supervisorctl restart frontend`

### 4. Test Contact Form (Full E2E)
- [ ] Opened your website
- [ ] Navigated to Contact Us page
- [ ] Filled out the contact form with test data
- [ ] Submitted form
- [ ] ✅ Got success message
- [ ] ✅ Received email at: cfgutters02@gmail.com
- [ ] Verified in MongoDB Atlas:
  - Logged into Atlas dashboard
  - Clicked "Browse Collections"
  - Checked `contact_submissions` collection
  - ✅ Form data is there!

---

## 🎯 Success Criteria

Your deployment is successful if:

- ✅ Backend health check returns `{"message": "Hello World"}`
- ✅ Contact form submits without errors
- ✅ Emails are received
- ✅ Form submissions are stored in MongoDB Atlas
- ✅ No errors in Vercel function logs

---

## 🐛 Troubleshooting

### Issue: "502 Bad Gateway"
**Check:**
1. Vercel function logs (Dashboard → Project → Deployments → Latest → Function Logs)
2. Environment variables are set correctly
3. MongoDB connection string is correct

### Issue: "Cannot connect to database"
**Check:**
1. MongoDB Atlas cluster is running
2. Network access is set to 0.0.0.0/0
3. Database user credentials are correct
4. Connection string format is correct (no `<` or `>` characters)

### Issue: "Email not sent"
**Check:**
1. `RESEND_API_KEY` is set in Vercel
2. Resend API key is valid
3. Check Vercel function logs for email errors

### Issue: "CORS error" in frontend
**Check:**
1. Frontend `.env` has correct `REACT_APP_BACKEND_URL`
2. URL doesn't have trailing slash
3. Clear browser cache
4. Check browser console for exact error

---

## 📊 Monitoring

After deployment, monitor:

### Vercel Dashboard
- [ ] Check deployment status regularly
- [ ] Monitor function invocations
- [ ] Check function logs for errors
- [ ] Monitor bandwidth usage

### MongoDB Atlas
- [ ] Check database size
- [ ] Monitor connection count
- [ ] Review metrics for performance
- [ ] Set up alerts (optional)

---

## 🎉 Optional Enhancements

### Custom Domain
- [ ] Added custom domain in Vercel
- [ ] Updated DNS records
- [ ] SSL certificate auto-generated

### Vercel Analytics
- [ ] Enabled Vercel Analytics
- [ ] Monitoring page views and performance

### Frontend Deployment
- [ ] Deployed frontend to Vercel
- [ ] Updated backend CORS if needed
- [ ] Both frontend and backend on Vercel

---

## 📁 Important Files Reference

- `/app/backend/index.py` - Vercel serverless entry point
- `/app/backend/vercel.json` - Vercel configuration
- `/app/backend/requirements.txt` - Python dependencies
- `/app/backend/.vercelignore` - Files to exclude from deployment
- `/app/VERCEL_DEPLOYMENT_GUIDE.md` - Detailed deployment guide
- `/app/MONGODB_ATLAS_SETUP.md` - MongoDB Atlas setup guide
- `/app/frontend/.env` - Frontend environment variables

---

## 🆘 Need Help?

1. **Read guides:**
   - `VERCEL_DEPLOYMENT_GUIDE.md` - Complete deployment guide
   - `MONGODB_ATLAS_SETUP.md` - MongoDB setup guide

2. **Check logs:**
   - Vercel: Dashboard → Project → Deployments → Function Logs
   - MongoDB Atlas: Dashboard → Metrics

3. **Support:**
   - Vercel Support: [vercel.com/support](https://vercel.com/support)
   - MongoDB Support: [MongoDB Community Forums](https://www.mongodb.com/community/forums)

---

## 🎊 Congratulations!

Once all checkboxes are complete, your CF Gutters backend is successfully deployed to Vercel! 🚀

**Live Backend URL:** https://your-project.vercel.app
**Health Check:** https://your-project.vercel.app/api/
**Contact Form Endpoint:** https://your-project.vercel.app/api/contact

---

**Last Updated:** November 2024
