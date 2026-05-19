# MedCode Pro — static site

## Deploy to GitHub Pages

1. Create a new GitHub repo (public, or private if you have Pages on a paid plan).
2. Upload the **contents of this folder** to the repo root (so `index.html` is at the top level).
3. In the repo: **Settings → Pages**.
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`) · folder: `/ (root)`
4. Save. Your site is live at `https://<your-user>.github.io/<repo-name>/` in ~1 minute.

### Custom domain (e.g. medcodepro.ai)
- In Pages settings, add the domain.
- At your DNS provider, add a CNAME record pointing `www` to `<your-user>.github.io`, and A records for the apex domain pointing to GitHub's IPs (185.199.108.153, .109.153, .110.153, .111.153).

## Demo form

The form posts to Formspree at:

```text
https://formspree.io/f/xdajkpwp
```

Submissions send named fields including name, organization, email, phone, role, specialty, and message. The page handles success in-place, so Formspree redirect/template settings are not required for the website modal flow.

If Formspree is unavailable or rejects the request, the page opens a prefilled email draft so prospects can still send the same request details directly.

To switch to another form provider, edit `getEndpoint`, `submitToFormEndpoint`, and the fallback recipient near the bottom of `index.html` and `From the Founder.html`.

## Files
- `index.html` — main homepage
- `From the Founder.html` — founder video page
- `image-slot.js` — image drop-in helper
- `assets/` — referenced images
