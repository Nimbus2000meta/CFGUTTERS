# 🚀 Deploy Backend via GitHub + Vercel

## Step-by-Step Guide

---

## Part 1: Create GitHub Repository

### Step 1: Create New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `cf-gutters-backend`
3. **Description:** CF Gutters Backend API
4. **Visibility:** Public or Private (your choice)
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

### Step 2: Copy the Repository URL

After creating, you'll see commands. Copy the HTTPS URL. It looks like:
```
https://github.com/YOUR-USERNAME/cf-gutters-backend.git
```

---

## Part 2: Push Backend Code to GitHub

### Step 1: Prepare Backend Folder

Run these commands in your terminal:

```bash
# Navigate to backend directory
cd /app/backend

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - CF Gutters Backend with CORS fix"

# Add your GitHub repository as remote (REPLACE WITH YOUR URL)
git remote add origin https://github.com/YOUR-USERNAME/cf-gutters-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

### Step 2: Verify Upload

1. Go to your GitHub repository page
2. You should see all your backend files:
   - `index.py`
   - `vercel.json`
   - `requirements.txt`
   - `.vercelignore`
   - etc.

---

## Part 3: Connect GitHub to Vercel & Deploy

### Step 1: Import Repository to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. If you haven't connected GitHub:
   - Click **"Connect GitHub Account"**
   - Authorize Vercel to access your GitHub
4. Find your `cf-gutters-backend` repository in the list
5. Click **"Import"**

### Step 2: Configure Project

1. **Project Name:** `cf-gutters-backend` (or keep as is)
2. **Framework Preset:** Other
3. **Root Directory:** `.` (current directory - should be default)
4. **Build Command:** Leave empty
5. **Output Directory:** Leave empty

### Step 3: Add Environment Variables

Click on **"Environment Variables"** section and add these 3 variables:

**Variable 1:**
- **Name:** `MONGO_URL`
- **Value:** `mongodb://dummy:dummy@localhost:27017/dummy`

**Variable 2:**
- **Name:** `DB_NAME`
- **Value:** `temp_db`

**Variable 3:**
- **Name:** `RESEND_API_KEY`
- **Value:** `re_NmzexgbA_HubxqVckPRVqFhTrcCmDyk1T`

### Step 4: Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment
3. You'll see a success page with your URL

### Step 5: Copy Your Vercel URL

After deployment succeeds, you'll see a URL like:
```
https://cf-gutters-backend.vercel.app
```

or 

```
https://cf-gutters-backend-abc123.vercel.app
```

**COPY THIS URL!**

---

## Part 4: Update Frontend Environment Variable

### Step 1: Update Frontend on Vercel

1. Go to your **frontend project** on Vercel (the one serving www.cfgutter.com)
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in sidebar
4. Find `REACT_APP_BACKEND_URL`
5. Click **"Edit"**
6. **Change value to:** Your new backend URL (from Part 3, Step 5)
   ```
   https://cf-gutters-backend.vercel.app
   ```
7. Click **"Save"**

### Step 2: Redeploy Frontend

1. Go to **"Deployments"** tab
2. Click **"Redeploy"** on the latest deployment
3. Check **"Use existing Build Cache"** (optional)
4. Click **"Redeploy"**
5. Wait 1-2 minutes

---

## Part 5: Test Your Form!

### Step 1: Clear Browser Cache

Press **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)

### Step 2: Test Backend Directly

Open in browser:
```
https://cf-gutters-backend.vercel.app/api/
```

Should return:
```json
{"message": "Hello World"}
```

### Step 3: Test Form

1. Go to www.cfgutter.com
2. Navigate to Contact Us page
3. Fill out the form
4. Click Submit
5. ✅ **Should work!**

---

## Troubleshooting

### Backend shows 404

**Problem:** Files not uploaded correctly to GitHub
**Solution:** 
```bash
cd /app/backend
git status  # Check what files are tracked
git add .
git commit -m "Add all files"
git push
```

### Still getting CORS error

**Problem:** Old deployment cached
**Solution:**
1. Clear browser cache completely
2. Try incognito/private window
3. Check Vercel deployment logs

### Can't connect GitHub to Vercel

**Problem:** Authorization issue
**Solution:**
1. Go to [vercel.com/account](https://vercel.com/account)
2. Click "Connected Git Accounts"
3. Connect GitHub
4. Try importing again

---

## Quick Reference Commands

```bash
# Navigate to backend
cd /app/backend

# Initialize and push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/cf-gutters-backend.git
git branch -M main
git push -u origin main

# For future updates
git add .
git commit -m "Update backend"
git push
```

---

## What Happens Next?

1. ✅ Backend is deployed to Vercel
2. ✅ Every time you push to GitHub, Vercel auto-deploys
3. ✅ Frontend connects to real backend
4. ✅ Form works!
5. ✅ Emails are sent

**After this is done, your form will work perfectly!** 🎉
