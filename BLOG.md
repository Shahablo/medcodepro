# MedCode Pro blog publishing workflow

The website is a static repository. `npm run build:blog` reads `content/blog-posts.mjs` and generates `blog/index.html`, one `/blog/<slug>/` page per published article, `feed.xml`, `sitemap.xml` and `robots.txt`. `npm test` checks the article contract and confirms the generated files exactly match the source data. Cloudflare Pages currently has no build command, so **commit the generated files with every article change**; source data alone will not reach visitors. Run `npm test` before merging each article change.

## Add an article

Add one object to the exported `articles` array in `content/blog-posts.mjs`:

```js
{
  slug: 'short-specific-slug',
  title: 'Specific, accurate headline',
  summary: 'One sentence that states the concrete takeaway.',
  category: 'Claims & denials',
  published: 'YYYY-MM-DD',
  updated: 'YYYY-MM-DD',
  lede: { text: 'Original reporting in plain language.', cites: ['primary'] },
  sections: [{
    heading: 'What happened',
    paragraphs: [
      { text: 'State the claim and its limits.', cites: ['primary'] },
      { text: 'Original analysis, clearly separated from reported facts.', cites: [], analysis: true }
    ]
  }],
  productFit: {
    heading: 'What a practice can check',
    text: 'Describe a verified MedCode Pro workflow, without promising a denial reversal.'
  },
  sources: [{ id: 'primary', title: 'Official source title', url: 'https://agency.example/record' }]
}
```

Every reported paragraph needs a source ID that resolves to a direct HTTPS source; mark original analysis explicitly with `analysis: true` and an empty citation list. Do not use the analysis flag to hide an externally verifiable claim. Use trade press such as Becker's to find a story, then link the original payer notice, agency filing, court record, study or named provider announcement where possible. Distinguish allegations, investigations, proposals, final rules and measured results. Attribute dates and populations. Summarize in original words; do not reproduce a news article. Add a MedCode Pro connection only when it fits the documented product workflow. Do not repeat the homepage's revenue, accuracy, security or turnaround figures without independent current evidence and approval.

## Editorial cadence

Aim for three distinct, source-backed posts per week on Monday, Wednesday and Friday. A fourth Sunday post is optional when there is a separate timely story. Check the live blog and queued work for duplicates before preparing a post; keep future ideas and finished articles staged outside public pages until their source and product claims are checked. Use the actual publication date only after a live receipt. If release moves to a later day, update the date and rebuild before merge. Do not label a local file or merged commit as a live post.

Use the actual date the page becomes public. A future date fails the build; a local file or calendar row is not publication. After source and product review, run `npm run build:blog` and `npm test`, inspect desktop and phone layouts, check all source links, then deploy through the verified site pipeline. Confirm the live article URL and `/blog/` listing before reporting a post as published. The website README's GitHub Pages instructions are historical guidance: as of October 26, 2026, the live domain is on Cloudflare Pages project `medcodepro`, linked to `Shahablo/medcodepro`, with automatic deployments from `main`; production displayed commit `0af2535`. The separate Cloudflare Worker of the same name has no custom domain. Recheck the Pages deployment status and live URLs after any merge.

The blog generates no form, analytics event, external chat, patient data field or scheduling system. Do not insert identifiable chart examples, case details, contract excerpts or customer names without separate clearance. Keep source notes and review evidence outside the public article files.
