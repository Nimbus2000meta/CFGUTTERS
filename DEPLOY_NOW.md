# 🚨 URGENT: Deploy Backend to Fix Form

## Current Problem:
Your website (www.cfgutter.com) is calling a fake backend URL: `https://your-vercel-project.vercel.app`

## Quick Fix Steps (5-10 minutes):

### Step 1: Get MongoDB Atlas Connection String (if you don't have it)

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up (FREE)
3. Create M0 FREE cluster
4. Create database user → Save password
5. Network Access → Allow 0.0.0.0/0
6. Click "Connect" → Copy connection string
7. Replace `<username>` and `<password>` in the string

**Example:**
```
mongodb+srv://cfgutters:MyPassword123@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Step 2: Deploy to Vercel

#### Option A: Manual Deployment (Easiest)

1. **Go to** [vercel.com/new](https://vercel.com/new)
2. **Import this GitHub repo** (or create new repo with `/app/backend` folder)
3. **Root Directory:** Select `backend` folder
4. **Add Environment Variables:**
   ```
   MONGO_URL = [Your MongoDB Atlas connection string]
   DB_NAME = cfgutters_production
   RESEND_API_KEY = re_NmzexgbA_HubxqVckPRVqFhTrcCmDyk1T
   ```
5. **Click Deploy**
6. **Wait 2-3 minutes**
7. **Copy your Vercel URL** (e.g., `https://cf-gutters-backend.vercel.app`)

### Step 3: Update Your Production Frontend

You need to update the environment variable on your production frontend (wherever www.cfgutter.com is hosted):

**Change this:**
```
REACT_APP_BACKEND_URL=https://your-vercel-project.vercel.app
```

**To this:**
```
REACT_APP_BACKEND_URL=https://cf-gutters-backend.vercel.app
```
*(Use your actual Vercel URL from Step 2)*

**Then redeploy your frontend.**

---

## Option B: I Can Help Deploy Via CLI

If you want me to deploy using CLI, provide:

1. MongoDB Atlas connection string
2. Run this command and give me the output:
   ```bash
   vercel login
   ```

---

## Quick Test After Deployment

Once backend is deployed, test it:

```bash
curl https://YOUR-VERCEL-URL.vercel.app/api/
```

Should return:
```json
{"message": "Hello World"}
```

---

## Can't Wait? Temporary Solution

As a temporary fix, I can configure your form to send directly via email using `mailto:` links until the backend is deployed. But this won't store data in a database.

**Let me know which option you want to proceed with!**
