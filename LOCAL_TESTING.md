# Local Testing Guide

## Testing the Newsletter with Vercel Serverless Functions Locally

Since we're using Vercel Serverless Functions for the newsletter, you need to use Vercel CLI to test locally.

### Steps:

1. **Make sure Vercel CLI is installed:**
   ```bash
   npm install -g vercel
   ```

2. **Stop your current dev server** (if running `npm run dev`)
   Press `Ctrl+C` in the terminal

3. **Create `.env` file in project root** (if not already created):
   ```
   RESEND_API_KEY=your_resend_api_key
   RESEND_AUDIENCE_ID=your_audience_id
   ```

4. **Start Vercel dev server:**
   ```bash
   vercel dev
   ```

5. **Access the application:**
   - Open http://localhost:3000 (Vercel uses port 3000 by default)
   - Scroll to the newsletter section
   - Enter an email and click Subscribe

### What's Different?

- `npm run dev` → Only runs the React frontend (Vite dev server)
- `vercel dev` → Runs both the frontend AND serverless functions

### Vercel Dev Setup

The first time you run `vercel dev`, Vercel CLI will ask:
- "Set up and develop"? → **Yes**
- "Which scope"? → Select your account
- "Link to existing project"? → **Yes** (if you have one) or **No** (to create new)
- "What's your project's name"? → Enter your project name (or accept default)

After setup, it will start the dev server and you can test the newsletter!

### Alternative: Test in Production

Deploy to Vercel and test there:
```bash
vercel --prod
```

Then visit your production URL and test the newsletter.

