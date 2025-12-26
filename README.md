# Investor Data Room (Moonshine Capital)

A beautiful, password-protected Investor Data Room template built on Next.js App Router + Vercel.

## Deploy (One Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJFeimster%2FInvestor-Data-Room.git&repository-name=investor-data-room&env=AUTH_SECRET&envDescription=Set%20a%20long%20random%20string%20used%20to%20sign%20private%20investor%20data-room%20auth%20cookies.&envLink=https%3A%2F%2Fgithub.com%2FJFeimster%2FInvestor-Data-Room%23environment-variables)

## Environment Variables

### AUTH_SECRET (required)
Used to cryptographically sign private data-room sessions.

Generate one:
- macOS/Linux: `openssl rand -base64 32`
- Or use a password manager to generate 32–64 random characters

## Local Dev
```bash
npm i
npm run dev
