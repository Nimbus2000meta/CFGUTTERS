# 🚨 URGENT: Redeploy Backend with CORS Fix

## Changes Made:
1. ✅ Updated `vercel.json` - Added CORS headers to routes
2. ✅ Updated `index.py` - Added OPTIONS handler for preflight requests
3. ✅ CORS middleware configured properly

## How to Redeploy:

### Option 1: Via Vercel Dashboard (EASIEST)

1. **Go to:** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Find:** `cf-gutters-backend` project
3. **Click:** "Settings" tab
4. **Click:** "Git" in sidebar
5. **Push updated code to GitHub:**
   ```bash
   cd /app/backend
   git add .
   git commit -m "Fix CORS configuration"
   git push
   ```
6. **Vercel will auto-deploy** (takes 2-3 minutes)

### Option 2: Via Vercel CLI

```bash
cd /app/backend
vercel --prod
```

When prompted:
- "Overwrite existing project?" → **Y** (yes)
- Wait for deployment to complete

### Option 3: Manual Deploy via Dashboard

1. **Go to:** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Find:** `cf-gutters-backend` project
3. **Click:** "Deployments" tab
4. **Click:** "Redeploy" button on the latest deployment
5. **Click:** "Redeploy" again to confirm

---

## After Redeployment:

### Step 1: Test Backend
```bash
# Test OPTIONS (preflight)
curl -X OPTIONS https://cf-gutters-backend.vercel.app/api/contact -v

# Should return 200 OK with CORS headers
```

### Step 2: Test Form
1. Clear browser cache: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
2. Go to www.cfgutter.com
3. Fill out contact form
4. Submit
5. ✅ Should work!

---

## If Still Not Working:

Check Vercel Function Logs:
1. Go to Vercel Dashboard
2. Click on `cf-gutters-backend` project
3. Click "Deployments"
4. Click on latest deployment
5. Click "View Function Logs"
6. Look for errors

---

## Quick Test URL:

After redeployment, test this in browser:
```
https://cf-gutters-backend.vercel.app/api/
```

Should return:
```json
{"message": "Hello World"}
```

If you see this, backend is working!
