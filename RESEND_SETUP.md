# Resend Newsletter Setup Guide

This project uses Resend for newsletter subscriptions via Vercel Serverless Functions.

## Environment Variables

You need to configure the following environment variables in your Vercel project:

### Required Variables

1. **RESEND_API_KEY**
   - Get your API key from [Resend API Keys](https://resend.com/api-keys)
   - Example: `re_123456789abcdefghijklmnop`

2. **RESEND_AUDIENCE_ID**
   - Create an audience at [Resend Audiences](https://resend.com/audiences)
   - Copy the Audience ID from your audience settings
   - Example: `aud_123456789abcdefghijklmnop`

## Setting Up Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - Key: `RESEND_API_KEY`, Value: `your_api_key_here`
   - Key: `RESEND_AUDIENCE_ID`, Value: `your_audience_id_here`
4. Select the environments (Production, Preview, Development)
5. Click **Save**

## Local Development

For local development, create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=re_your_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_here
```

> **Note:** Never commit `.env.local` or any file containing your actual API keys to version control.

## How It Works

1. User enters their email in the newsletter form
2. Frontend sends a POST request to `/api/subscribe`
3. The serverless function:
   - Validates the email address
   - Adds the contact to your Resend audience
   - Sends a welcome email to the subscriber
4. User receives confirmation on the website and a welcome email

## Testing

To test locally:
1. Ensure environment variables are set in `.env.local`
2. Run `npm run dev`
3. Navigate to the newsletter section
4. Enter an email address and submit

## Customizing the Welcome Email

The welcome email template is in `api/subscribe.ts`. You can customize:
- Email subject
- HTML content
- Sender name (must be a verified domain in Resend)
- Email styling

## Support

For issues with Resend integration, check:
- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
- Your Resend dashboard for delivery status and logs

