# Deploy CF Gutters Backend to Vercel

## Prerequisites
1. Vercel account (free): https://vercel.com/signup
2. MongoDB Atlas account (free): https://www.mongodb.com/cloud/atlas/register
3. Your Resend API key

## Step 1: Set Up MongoDB Atlas (Free Database)

Since Vercel is serverless, you need a cloud MongoDB database:

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free cluster (M0 Free tier)
3. Click "Connect" → "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Replace `<password>` with your actual password
6. Save this connection string - you'll need it for Vercel

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Navigate to backend folder:**
   ```bash
   cd /app/backend
   ```

4. **Deploy:**
   ```bash
   vercel
   ```

5. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **cf-gutters-backend** (or your choice)
   - Directory? **./** (current directory)
   - Override settings? **N**

6. **Add Environment Variables:**
   ```bash
   vercel env add MONGO_URL
   # Paste your MongoDB Atlas connection string
   
   vercel env add DB_NAME
   # Enter: contact_forms (or your choice)
   
   vercel env add RESEND_API_KEY
   # Paste your Resend API key
   ```

7. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard (Web Interface)

1. **Go to Vercel Dashboard:** https://vercel.com/dashboard

2. **Click "Add New..." → "Project"**

3. **Import Git Repository:**
   - If your backend is on GitHub, import that repository
   - Or use the "Import Third-Party Git Repository" option

4. **Configure Project:**
   - Framework Preset: **Other**
   - Root Directory: **backend** (if your repo has the backend folder)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

5. **Add Environment Variables:**
   Click "Environment Variables" and add:
   - `MONGO_URL` = Your MongoDB Atlas connection string
   - `DB_NAME` = `contact_forms`
   - `RESEND_API_KEY` = Your Resend API key

6. **Click "Deploy"**

## Step 3: Get Your Backend URL

After deployment, Vercel will give you a URL like:
```
https://cf-gutters-backend.vercel.app
```

## Step 4: Update Frontend

Update your frontend's environment variable:

**In your frontend Vercel project:**
1. Go to Settings → Environment Variables
2. Update or add: `REACT_APP_BACKEND_URL` = `https://cf-gutters-backend.vercel.app`
3. Redeploy your frontend

## Step 5: Test

Visit your form at www.cfgutter.com and test a submission!

## Troubleshooting

### Issue: "Module not found"
- Make sure `requirements.txt` is in the backend folder
- Redeploy with `vercel --prod`

### Issue: "Database connection failed"
- Check MongoDB Atlas connection string
- Make sure your IP is whitelisted (or use 0.0.0.0/0 for all IPs)
- Check environment variables are set correctly

### Issue: CORS errors
- The backend already has CORS configured for all origins
- Make sure you're using the correct backend URL

## Important Notes

1. **MongoDB Atlas Free Tier:**
   - 512 MB storage (plenty for contact forms)
   - Connection limit: Keep it reasonable
   - Make sure to whitelist Vercel's IPs (or use 0.0.0.0/0)

2. **Vercel Free Tier Limits:**
   - 100 GB bandwidth/month
   - Serverless function execution: 100 GB-Hrs
   - More than enough for a contact form!

3. **Cold Starts:**
   - First request after inactivity may be slow (1-3 seconds)
   - Subsequent requests will be fast

## Alternative: Use Render (If Vercel Doesn't Work)

Render has a better free tier for Python backends:

1. Go to https://render.com
2. New → Web Service
3. Connect your GitHub repo
4. Set environment variables
5. Deploy!

Free tier: Always-on (no cold starts), 750 hours/month
