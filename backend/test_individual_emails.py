import asyncio
import httpx
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

async def test_individual_email(recipient):
    """Test sending to a single recipient"""
    resend_api_key = os.environ.get('RESEND_API_KEY')
    
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {resend_api_key}",
                "Content-Type": "application/json",
            },
            json={
                "from": "CF Gutters <onboarding@resend.dev>",
                "to": [recipient],
                "subject": f"Test Email to {recipient}",
                "html": f"""
                <html>
                <body>
                    <h2>Test Email</h2>
                    <p>This is a test email sent to: <strong>{recipient}</strong></p>
                    <p>If you receive this, the email delivery is working!</p>
                </body>
                </html>
                """,
            },
        )
        
        print(f"\n{'='*60}")
        print(f"Recipient: {recipient}")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        print(f"{'='*60}")
        
        return response.status_code, response.text

async def main():
    recipients = [
        "louis@cfgutters.com",
        "connor@cfgutters.com",
        "connorfogarty52@gmail.com",
        "cfgutters02@gmail.com"
    ]
    
    print("\nTesting individual email delivery to each recipient...")
    print("="*60)
    
    for recipient in recipients:
        await test_individual_email(recipient)
        await asyncio.sleep(2)  # Wait 2 seconds between emails

if __name__ == "__main__":
    asyncio.run(main())
