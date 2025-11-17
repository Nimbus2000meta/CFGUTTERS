# MongoDB Atlas Setup Guide (Step-by-Step with Screenshots)

## What is MongoDB Atlas?
MongoDB Atlas is a cloud-hosted MongoDB database service. Since Vercel runs serverless functions (no permanent server), you need a cloud database instead of a local one.

## Cost: **100% FREE** (Forever Free Tier)
- 512 MB storage
- Perfect for small to medium business websites
- No credit card required initially

---

## Step 1: Create MongoDB Atlas Account

1. **Go to:** [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)

2. **Sign up with:**
   - Email and password, OR
   - Sign in with Google (faster)

3. **Fill out the welcome survey** (or skip)

---

## Step 2: Create a Free Cluster

1. After login, click **"Build a Database"** or **"Create"**

2. **Choose Deployment Option:**
   - Select **"M0"** (FREE tier)
   - ✅ Shows as **"FREE"** or **"$0/month"**

3. **Select Cloud Provider & Region:**
   - **Provider:** AWS, Google Cloud, or Azure (any works)
   - **Region:** Choose closest to your target users
     - For USA East Coast: `us-east-1` (N. Virginia)
     - For USA West Coast: `us-west-1` (N. California)
     - For Europe: `eu-west-1` (Ireland)
   
4. **Cluster Name:** 
   - Leave default or name it `cfgutters-cluster`

5. Click **"Create Cluster"**

6. ⏳ Wait 1-3 minutes for cluster creation

---

## Step 3: Create Database User

### Why? This creates login credentials for your application to access the database.

1. **You'll see a "Security Quickstart" screen**
   - OR go to: **"Database Access"** in left sidebar → **"Add New Database User"**

2. **Authentication Method:** 
   - Select **"Password"**

3. **Create Username:**
   - Example: `cfgutters_admin`
   - Or: `backend_user`
   - **Write this down!** ✍️

4. **Create Password:**
   - Click **"Autogenerate Secure Password"** (recommended)
   - **COPY AND SAVE THIS PASSWORD IMMEDIATELY!** 📋
   - Or create your own strong password
   - **You'll need this later!**

5. **Database User Privileges:**
   - Select: **"Read and write to any database"**

6. Click **"Add User"**

---

## Step 4: Set Up Network Access

### Why? This allows your Vercel backend to connect to MongoDB.

1. **You'll see "Network Access" screen**
   - OR go to: **"Network Access"** in left sidebar → **"Add IP Address"**

2. **Click "Add IP Address"**

3. **Choose:**
   - Click **"Allow Access from Anywhere"** button
   - This adds `0.0.0.0/0` (required for Vercel)

4. **Confirm the IP:**
   - Should show: `0.0.0.0/0`

5. Click **"Confirm"**

⚠️ **Important:** Vercel uses dynamic IPs, so "Allow from Anywhere" is required!

---

## Step 5: Get Your Connection String

### This is what you'll use in Vercel!

1. **Go to:** "Database" in left sidebar

2. **Find your cluster** (e.g., `Cluster0`)

3. Click **"Connect"** button

4. Choose **"Connect your application"**

5. **Select:**
   - **Driver:** Python
   - **Version:** 3.12 or later (any recent version works)

6. **Copy the connection string:**
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

7. **⚠️ IMPORTANT: Replace placeholders:**
   - Replace `<username>` with your username from Step 3
   - Replace `<password>` with your password from Step 3
   - **Remove the `< >` brackets!**

8. **Example of correct connection string:**
   ```
   mongodb+srv://cfgutters_admin:MyP@ssw0rd123@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
   ```

9. **📋 SAVE THIS!** You'll need it for Vercel environment variables.

---

## Step 6: Verify Connection (Optional but Recommended)

You can test the connection before deploying:

```python
# Test script (run locally)
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

async def test_connection():
    # Replace with YOUR connection string
    mongo_url = "mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
    
    try:
        client = AsyncIOMotorClient(mongo_url)
        # Test connection
        await client.admin.command('ping')
        print("✅ Successfully connected to MongoDB Atlas!")
        client.close()
    except Exception as e:
        print(f"❌ Connection failed: {e}")

# Run test
asyncio.run(test_connection())
```

---

## Common Issues & Solutions

### ❌ "Authentication failed"
**Solution:** 
- Double-check username and password
- Make sure you removed `<` and `>` from connection string
- Password might contain special characters - they should be URL encoded

### ❌ "Connection timeout"
**Solution:**
- Check Network Access is set to `0.0.0.0/0` (Allow from anywhere)
- Wait a few minutes after creating cluster

### ❌ "Server selection timeout"
**Solution:**
- Cluster might still be initializing (wait 2-3 minutes)
- Check cluster status is "Active" in Atlas dashboard

---

## What to Copy for Vercel Deployment

When deploying to Vercel, you'll need:

### ✅ Environment Variable: `MONGO_URL`
**Value:** Your connection string from Step 5 (with username & password filled in)
```
mongodb+srv://cfgutters_admin:MyP@ssw0rd123@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
```

### ✅ Environment Variable: `DB_NAME`
**Value:** Your database name (you can choose any name)
```
cfgutters_production
```

### ✅ Environment Variable: `RESEND_API_KEY`
**Value:** Already provided in your `.env` file
```
re_NmzexgbA_HubxqVckPRVqFhTrcCmDyk1T
```

---

## Next Steps

Once you have your MongoDB Atlas connection string:

1. ✅ Go to `VERCEL_DEPLOYMENT_GUIDE.md`
2. ✅ Follow Step 3 to deploy your backend
3. ✅ Add the environment variables in Vercel dashboard
4. ✅ Test your deployment!

---

## Useful Links

- **MongoDB Atlas Dashboard:** [https://cloud.mongodb.com](https://cloud.mongodb.com)
- **Documentation:** [https://docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- **Support:** [https://www.mongodb.com/community/forums](https://www.mongodb.com/community/forums)

---

**You're all set! 🎉**
