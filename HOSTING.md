# Hosting weevmedia.com

The site is a standard Next.js 16 + Tailwind v4 app. Recommended host: **Vercel**
(free tier, built for Next.js, deploys from GitHub automatically).

## Option A — Vercel via GitHub (recommended)

1. Create a new GitHub repo (e.g. `weev-media-site`) and push this folder:
   ```bash
   cd weev-media-site
   git init
   git add -A
   git commit -m "weev Media site v1"
   git branch -M main
   git remote add origin https://github.com/<you>/weev-media-site.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import**
   the repo → **Deploy**. No build settings to change — Vercel detects
   Next.js automatically.
3. Every `git push` to `main` redeploys automatically.

## Option B — Vercel CLI (no GitHub needed)

```bash
cd weev-media-site
npx vercel        # first run: log in, accept defaults
npx vercel --prod # deploy to production
```

## Custom domain (weevmedia.com)

The domain is **not purchased yet**. When ready:

1. Buy `weevmedia.com` (Cloudflare Registrar has no markup — same place
   discussed for email routing).
2. In Vercel: Project → **Settings → Domains** → add `weevmedia.com`
   (and `www.weevmedia.com`).
3. Vercel shows the DNS records to add — point them at Vercel from your
   registrar's DNS panel. HTTPS certificate is automatic.

## Notes

- Contact email on the site is `hello@weevmedia.com` (placeholder). Once the
  domain exists, wire it up with Cloudflare Email Routing → your Gmail, the
  same setup discussed for ReTally mail.
- `npm run dev` runs the site locally at http://localhost:3000.
- `npm run build` verifies the production build (already passing).
