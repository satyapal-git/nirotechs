## NiroTechs — Professional Startup Website

Modern, fast, SEO-friendly website built with **Next.js + Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize brand details

Update your name, email, phone, WhatsApp link, and domain in:

- `src/lib/site.ts`

Important:

- Set `url` to your real domain (example: `https://nirotechs.com`)
- (Optional) Set `NEXT_PUBLIC_SITE_URL` in production for sitemap/robots

## What’s included

- Home hero + CTA
- Services (Website / App / AI)
- Process
- Featured work (placeholders; replace with your real projects)
- FAQ
- Contact form: with Formspree, messages go to your email (see below); otherwise opens visitor’s email app
- WhatsApp CTA

## Contact form → your email

**Quick setup (2 minutes):**

1. Go to [resend.com](https://resend.com) → Sign up (free)
2. Go to **API Keys** → **Create API Key** → Copy the key
3. In project root, create `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=Contact Form <onboarding@resend.dev>
   NEXT_PUBLIC_USE_CONTACT_API=true
   ```
4. Restart dev server (`npm run dev`)

Now when someone submits Contact Us, the message goes directly to **satyapal.yadav@nirotechs.com** (set in `src/lib/site.ts`).

**Alternative:** Use Formspree instead — see `.env.example` for details.

## Build for production

```bash
npm run build
npm start
```

