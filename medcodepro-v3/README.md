# MedCode Pro Website v3

This version redesigns the site into a tighter multi-page experience with a single primary CTA, a dedicated demo page, and custom SVG brand visuals.

## Pages
- `index.html` home
- `problem.html`
- `product.html`
- `roi.html`
- `faq.html`
- `investors.html`
- `demo.html`
- `privacy.html`
- `terms.html`

## Contact form setup on Cloudflare Pages
The `Request a Demo` page posts to `/api/contact` which is implemented in `functions/api/contact.js`.

Add these **Pages project environment variables**:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` optional

Recommended values:
- `CONTACT_TO_EMAIL = shahabasiddique@gmail.com`
- `CONTACT_FROM_EMAIL = MedCode Pro <noreply@medcodepro.ai>`

You will need a Resend account and a verified sender domain.

## Deploy on Cloudflare Pages
1. Push this folder to GitHub.
2. In Cloudflare: Workers & Pages → Create application → **Pages** → Connect to Git.
3. Select the repo.
4. Build command: leave blank.
5. Build output directory: `/`
6. Root directory: leave blank.
7. Deploy.
8. Add the environment variables above.
9. Redeploy.
10. Connect custom domains `medcodepro.ai` and `www.medcodepro.ai`.

## Notes
- The site intentionally uses a shorter home page and pushes detail into deeper pages.
- The investor material is separated from the buyer-facing home page.
- The old broken form state was removed. Any backend setup issue now appears only as a generic submit error.
- Logo concepts are included in `assets/logo-concept-1.svg`, `logo-concept-2.svg`, and `logo-concept-3.svg`.
