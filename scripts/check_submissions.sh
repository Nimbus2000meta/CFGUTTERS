#!/bin/bash

echo "==============================================="
echo "CF GUTTERS - RECENT FORM SUBMISSIONS"
echo "==============================================="
echo ""

# Count total submissions
total=$(mongosh mongodb://localhost:27017/test_database --quiet --eval "db.contact_submissions.countDocuments()")
echo "Total submissions in database: $total"
echo ""

# Show last 10 submissions
echo "Last 10 Submissions:"
echo "==============================================="
mongosh mongodb://localhost:27017/test_database --quiet --eval "
db.contact_submissions.find().sort({submitted_at: -1}).limit(10).forEach(function(doc) {
  print('📋 Name: ' + doc.fullName);
  print('📧 Email: ' + doc.email);
  print('📞 Phone: ' + doc.phone);
  print('📅 Date: ' + doc.submitted_at);
  print('🏠 Address: ' + doc.streetAddress + ', ' + (doc.city || '') + ', ' + (doc.state || ''));
  print('🔧 Service: ' + (doc.serviceNeeded || 'Not specified'));
  print('-------------------------------------------');
  print('');
})
"

echo ""
echo "==============================================="
echo "EMAIL SEND CONFIRMATIONS (Last 10)"
echo "==============================================="
grep "Contact form submitted and email sent" /var/log/supervisor/backend.err.log | tail -n 10

echo ""
echo "==============================================="
echo "Done! ✅"
echo "==============================================="
