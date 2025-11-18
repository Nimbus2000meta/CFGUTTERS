#!/bin/bash
# Vercel Deployment Script

echo "🚀 Deploying CF Gutters Backend to Vercel..."
echo ""
echo "This will deploy to production with:"
echo "  - Email sending: ✅ ENABLED"
echo "  - Database storage: ⚠️ DISABLED (temporary)"
echo ""

cd /app/backend

# Deploy to Vercel
vercel --prod \
  --yes \
  --env MONGO_URL=mongodb://dummy:dummy@localhost:27017/dummy \
  --env DB_NAME=temp_db \
  --env RESEND_API_KEY=re_NmzexgbA_HubxqVckPRVqFhTrcCmDyk1T

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Copy the Vercel URL shown above"
echo "2. Go to your Vercel frontend dashboard"
echo "3. Update REACT_APP_BACKEND_URL with your new backend URL"
echo "4. Redeploy your frontend"
echo "5. Test the form!"
