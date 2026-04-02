# MedCode Pro Website

This package contains an upgraded production-ready marketing site for Cloudflare Pages, plus a Pages Function that sends contact form submissions securely without exposing the destination email in the front-end.

## What changed in this version

- Sharper investor-facing copy
- A dedicated `investors.html` page for VC follow-up
- More aggressive physician and pilot conversion messaging
- Screenshot-ready product sections with polished mock screens
- Expanded form fields for demo, pilot, partnership, and investor routing

## Files

- `index.html` — main landing page
- `investors.html` — VC / investor overview page
- `styles.css` — global styles
- `script.js` — mobile nav + contact form submission
- `privacy.html` — placeholder privacy page
- `terms.html` — placeholder terms page
- `functions/api/contact.js` — Cloudflare Pages Function for secure form submission
- `assets/` — brand and generated visual assets
- `robots.txt` — search engine rules
- `sitemap.xml` — sitemap placeholder

## Contact Form Setup

This form uses a Cloudflare Pages Function and the Resend email API.

### 1. Create a Resend account
- Go to https://resend.com
- Create an API key
- Verify a sending domain if you want branded email sending

### 2. In Cloudflare Pages, add environment variables
For your Pages project, set these environment variables:

- `RESEND_API_KEY` = your Resend API key
- `CONTACT_TO_EMAIL` = your receiving email address
- `CONTACT_FROM_EMAIL` = optional sender address, for example `MedCode Pro <hello@medcodepro.ai>`

If you do not set `CONTACT_FROM_EMAIL`, the function falls back to `MedCode Pro <onboarding@resend.dev>`.

## Real screenshot swap instructions

Right now the product gallery uses SVG mock screens:

- `assets/screenshot-procedure.svg`
- `assets/screenshot-note-support.svg`
- `assets/screenshot-analytics.svg`

When you have real product screenshots:

1. Export them at similar aspect ratios
2. Replace those files with PNG or JPG versions
3. Update the `<img src>` paths in `index.html` if you change the file extension

The layout is already designed to handle real screenshots without changing the surrounding section structure.

## Cloudflare Pages Deployment

### Option A: Direct upload
1. Log in to Cloudflare
2. Go to Workers & Pages
3. Create a new Pages project
4. Choose Direct Upload
5. Upload the contents of this folder
6. Add your custom domain in the project settings
7. Add the environment variables above
8. Redeploy after adding variables if needed

### Option B: GitHub
1. Push this folder to a GitHub repository
2. In Cloudflare Pages, create a new Pages project from Git
3. Connect the repo
4. Build command: leave blank for static deployment
5. Build output directory: `/`
6. Add the environment variables above
7. Deploy

## Recommended next replacements

- Replace placeholder VOC quotes with real physician or billing quotes
- Replace illustrative ROI figures with validated pilot data
- Replace mock screenshots with real product screenshots
- Add a Calendly link or scheduler if you want a stronger demo funnel

## Notes

- Update canonical URLs if your production domain differs
- Replace placeholder legal copy with reviewed final language
- The homepage is optimized for physician trust and demo requests
- The investor page is optimized for VC follow-up after an intro or pitch meeting
