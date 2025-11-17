# Vercel Deployment Guide for CF Gutters Backend

This guide will help you deploy your FastAPI backend to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Atlas Account**: Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
3. **Vercel CLI** (optional): `npm install -g vercel`

---

## Step 1: Set Up MongoDB Atlas

### 1.1 Create MongoDB Atlas Account
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Try Free"** and create an account
3. Choose the **FREE tier** (M0 Sandbox)

### 1.2 Create a Cluster
1. After logging in, click **"Build a Database"**
2. Choose **"M0 FREE"** tier
3. Select a cloud provider and region (choose one closest to your users)
4. Click **"Create Cluster"**
5. Wait 1-3 minutes for cluster creation

### 1.3 Create Database User
1. Click **"Database Access"** in the left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Create a username (e.g., `cfgutters_admin`)
5. Create a strong password and **SAVE IT** (you'll need this)
6. Set privileges to **"Read and write to any database"**
7. Click **"Add User"**

### 1.4 Configure Network Access
1. Click **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for Vercel)
4. Click **"Confirm"**

### 1.5 Get Your Connection String
1. Click **"Database"** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)
5. Replace `<username>` and `<password>` with your credentials
6. **SAVE THIS CONNECTION STRING** - you'll need it for Vercel

---

## Step 2: Prepare Backend for Deployment

### 2.1 Files Already Created
The following files have been created in `/app/backend/`:
- ✅ `vercel.json` - Vercel configuration
- ✅ `index.py` - Serverless entry point (optimized for Vercel)
- ✅ `requirements.txt` - Python dependencies

### 2.2 What Changed
- Created `index.py` with serverless-optimized MongoDB connections
- MongoDB connection uses connection pooling suitable for serverless
- Database connection is lazy-loaded (created only when needed)
- Error handling improved for serverless environment

---

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for beginners)

#### 3.1 Upload to GitHub
1. Create a new GitHub repository
2. Push your backend folder to GitHub:
   ```bash
   cd /app/backend
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cf-gutters-backend.git
   git push -u origin main
   ```

#### 3.2 Import to Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: Leave as is (or select backend folder if you pushed the whole project)
   - Click **"Environment Variables"**

#### 3.3 Add Environment Variables
Add these environment variables in Vercel:

```
MONGO_URL=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
DB_NAME=cfgutters_production
RESEND_API_KEY=re_NmzexgbA_HubxqVckPRVqFhTrcCmDyk1T
```

**Important:**
- Replace `MONGO_URL` with your MongoDB Atlas connection string from Step 1.5
- The `RESEND_API_KEY` is already included above
- You can change `DB_NAME` to whatever you prefer

#### 3.4 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment
3. Once complete, you'll get a URL like: `https://your-project.vercel.app`
4. **SAVE THIS URL** - this is your new backend URL!

---

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to backend directory
cd /app/backend

# Deploy
vercel

# Follow the prompts and add environment variables when asked
```

---

## Step 4: Update Frontend to Use New Backend URL

### 4.1 Update Frontend Environment Variable
1. Open `/app/frontend/.env`
2. Update `REACT_APP_BACKEND_URL` to your new Vercel URL:
   ```
   REACT_APP_BACKEND_URL=https://your-project.vercel.app
   ```

### 4.2 Restart Frontend (if testing locally)
```bash
sudo supervisorctl restart frontend
```

### 4.3 Deploy Frontend (Optional)
You can also deploy your frontend to Vercel:
1. Follow the same steps as backend deployment
2. Select the `frontend` folder as root directory
3. Vercel will auto-detect it's a React app
4. Add the `REACT_APP_BACKEND_URL` environment variable

---

## Step 5: Test Your Deployment

### 5.1 Test Backend Health
Visit in your browser:
```
https://your-project.vercel.app/api/
```
You should see: `{"message": "Hello World"}`

### 5.2 Test Contact Form
1. Go to your website
2. Navigate to the Contact Us page
3. Fill out and submit the form
4. Check if you receive the email
5. Verify form submission in MongoDB Atlas:
   - Go to MongoDB Atlas dashboard
   - Click "Browse Collections"
   - Check `contact_submissions` collection

---

## Troubleshooting

### Issue: "502 Bad Gateway" or "500 Internal Server Error"
**Solution:**
1. Check Vercel logs: Go to your project → **"Deployments"** → Click latest deployment → **"View Function Logs"**
2. Common causes:
   - Incorrect MongoDB connection string
   - Missing environment variables
   - MongoDB Atlas IP whitelist not set to "Allow from anywhere"

### Issue: "Cannot connect to MongoDB"
**Solution:**
1. Verify MongoDB Atlas connection string is correct
2. Check that Network Access is set to "Allow from anywhere"
3. Verify database user credentials are correct
4. Check MongoDB Atlas cluster is running

### Issue: "CORS Error" in Frontend
**Solution:**
- The backend already has CORS configured for all origins
- Make sure you're using the correct Vercel URL in frontend `.env`
- Clear browser cache and try again

### Issue: Email not being sent
**Solution:**
1. Verify `RESEND_API_KEY` is correctly set in Vercel environment variables
2. Check Vercel function logs for email-related errors
3. Verify Resend API key is still valid

---

## Important Notes

### Serverless Limitations
- **Execution time**: Vercel free tier has 10-second timeout per function
- **Cold starts**: First request after inactivity may be slower (1-2 seconds)
- **No persistent storage**: Each request is independent

### MongoDB Atlas Free Tier Limits
- **Storage**: 512 MB
- **RAM**: Shared
- **Connections**: 500 concurrent
- Good for small to medium traffic websites

### Costs
- **Vercel Free Tier**: 
  - 100 GB bandwidth/month
  - 100,000 function invocations/month
  - Usually sufficient for small business websites
  
- **MongoDB Atlas Free Tier**: 
  - Forever free
  - 512 MB storage
  - Shared RAM

---

## Environment Variables Summary

### Vercel Environment Variables (Backend)
```
MONGO_URL=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
DB_NAME=cfgutters_production
RESEND_API_KEY=re_NmzexgbA_HubxqVckPRVqFhTrcCmDyk1T
```

### Frontend Environment Variable
```
REACT_APP_BACKEND_URL=https://your-vercel-backend.vercel.app
```

---

## Next Steps After Deployment

1. ✅ Test contact form thoroughly
2. ✅ Monitor Vercel function logs for any errors
3. ✅ Set up custom domain (optional)
4. ✅ Enable Vercel Analytics (optional)
5. ✅ Set up monitoring/alerts in MongoDB Atlas

---

## Support

If you encounter any issues:
1. Check Vercel function logs
2. Check MongoDB Atlas metrics
3. Review this guide's troubleshooting section
4. Contact Vercel support or MongoDB support if needed

---

## Files Reference

- `/app/backend/vercel.json` - Vercel configuration
- `/app/backend/index.py` - Serverless entry point
- `/app/backend/server.py` - Original server (for local development)
- `/app/backend/requirements.txt` - Python dependencies
- `/app/frontend/.env` - Frontend environment variables

---

**Good luck with your deployment! 🚀**
