# Ecoverify  Bold, Intelligent Sustainability

A modern, high-performance waitlist web app built with Next.js (App Router), Tailwind CSS, Framer Motion, and Nodemailer. Inspired by the clean, powerful design of Mariq  tuned for an eco-tech aesthetic.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Nodemailer (SMTP via environment variables)

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment
Create `.env.local` in the project root based on `.env.example`:
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
FROM_EMAIL=Ecoverify <no-reply@ecoverify.app>
# ADMIN_EMAILS=reezaalarafat@gmail.com,abovetemptations116@gmail.com
```

Provider examples:
- Gmail: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`, `SMTP_USER=<your@gmail.com>`, `SMTP_PASS=<App Password>`
- SendGrid: `SMTP_HOST=smtp.sendgrid.net`, `SMTP_PORT=587`, `SMTP_SECURE=false`, `SMTP_USER=apikey`, `SMTP_PASS=<API key>`

### 3) Run the dev server
```bash
npm run dev
```
Open `http://localhost:3000`.

## Features
- Futuristic hero with ambient eco particles
- Animated logo power up glow
- Section transitions (fade-in, scale-in, reveal-on-scroll)
- Hover interactions on cards and buttons
- Fully responsive (mobile, tablet, desktop)

## Waitlist API
- Route: `POST /api/waitlist`
- Body JSON:
```json
{ "name": "Jane Doe", "email": "jane@example.com", "userType": "Consumer" }
```
- Validates inputs; returns `422` on invalid input, `200` on success
- Sends admin email to configured recipients and a confirmation email to the user
- CORS enabled with `OPTIONS` and `Access-Control` headers

## Deployment (Vercel)
1. Push or import the repo into Vercel
2. Set Environment Variables in Vercel project settings:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, `ADMIN_EMAILS` (optional)
3. Deploy. Test a submission on your domain.

## Troubleshooting
- Emails not received: verify SMTP credentials, sender domain, and that your provider allows the `FROM_EMAIL`
- API 500: check Vercel logs; ensure env vars are set and runtime is Node (configured in route)
- Styling or animation issues: confirm Tailwind is loaded (`globals.css`) and Framer Motion is installed

## License
Proprietary  for Ecoverify use.
