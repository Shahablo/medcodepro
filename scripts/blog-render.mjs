export const SITE = 'https://medcodepro.ai';

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function required(value, label) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${label} is required`);
  return value.trim();
}

function validDate(value, label) {
  required(value, label);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`)) ||
      new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) !== value) {
    throw new Error(`${label} must be a real YYYY-MM-DD date`);
  }
}

function validateParagraph(paragraph, sourceIds, label) {
  if (!paragraph || typeof paragraph !== 'object') throw new Error(`${label} is required`);
  required(paragraph.text, `${label}.text`);
  if (!Array.isArray(paragraph.cites)) {
    throw new Error(`${label}.cites must be an array`);
  }
  if (paragraph.cites.length === 0 && paragraph.analysis !== true) {
    throw new Error(`${label} needs a source citation or an explicit analysis flag`);
  }
  for (const id of paragraph.cites) {
    if (!sourceIds.has(id)) throw new Error(`${label} cites unknown source ${id}`);
  }
}

export function validateArticles(articles, { today = new Date().toISOString().slice(0, 10) } = {}) {
  if (!Array.isArray(articles)) throw new Error('articles must be an array');
  const slugs = new Set();
  for (const article of articles) {
    if (!article || typeof article !== 'object') throw new Error('article must be an object');
    const slug = required(article.slug, 'slug');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`invalid slug: ${slug}`);
    if (slugs.has(slug)) throw new Error(`duplicate slug: ${slug}`);
    slugs.add(slug);
    required(article.title, `${slug}.title`);
    required(article.summary, `${slug}.summary`);
    required(article.category, `${slug}.category`);
    validDate(article.published, `${slug}.published`);
    validDate(article.updated, `${slug}.updated`);
    if (article.published > today) throw new Error(`${slug} has a future publication date`);
    if (article.updated < article.published) throw new Error(`${slug}.updated is before publication`);
    if (!Array.isArray(article.sources) || article.sources.length === 0) {
      throw new Error(`${slug} needs at least one source`);
    }
    const sourceIds = new Set();
    for (const source of article.sources) {
      const id = required(source?.id, `${slug}.source.id`);
      if (!/^[a-z0-9-]+$/.test(id) || sourceIds.has(id)) throw new Error(`${slug} has invalid or duplicate source id ${id}`);
      sourceIds.add(id);
      required(source.title, `${slug}.source.title`);
      try {
        const url = new URL(source.url);
        if (url.protocol !== 'https:') throw new Error('not HTTPS');
      } catch {
        throw new Error(`${slug}.source ${id} needs a valid HTTPS URL`);
      }
    }
    validateParagraph(article.lede, sourceIds, `${slug}.lede`);
    if (!Array.isArray(article.sections) || article.sections.length === 0) throw new Error(`${slug} needs sections`);
    for (const [sectionIndex, section] of article.sections.entries()) {
      required(section?.heading, `${slug}.sections[${sectionIndex}].heading`);
      if (!Array.isArray(section.paragraphs) || (section.paragraphs.length === 0 && !section.list?.length)) {
        throw new Error(`${slug}.sections[${sectionIndex}] needs paragraphs or a list`);
      }
      section.paragraphs.forEach((paragraph, index) =>
        validateParagraph(paragraph, sourceIds, `${slug}.sections[${sectionIndex}].paragraphs[${index}]`));
      if (section.list) {
        if (!Array.isArray(section.list) || section.list.length === 0) throw new Error(`${slug}.sections[${sectionIndex}].list must contain items`);
        section.list.forEach((item, index) => {
          required(item?.lead, `${slug}.sections[${sectionIndex}].list[${index}].lead`);
          required(item?.text, `${slug}.sections[${sectionIndex}].list[${index}].text`);
        });
      }
    }
    if (article.productFit) {
      required(article.productFit.heading, `${slug}.productFit.heading`);
      required(article.productFit.text, `${slug}.productFit.text`);
    }
  }
  return articles.slice().sort((a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title));
}

function pageHead({ title, description, path, type = 'website', noindex = false }) {
  const canonical = `${SITE}${path}`;
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} | MedCode Pro</title>
<meta name="description" content="${escapeHtml(description)}">
${noindex ? '<meta name="robots" content="noindex,follow">' : ''}
<link rel="canonical" href="${canonical}">
<link rel="alternate" type="application/rss+xml" title="MedCode Pro blog" href="${SITE}/feed.xml">
<meta property="og:type" content="${type}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/blog/assets/blog.css">`;
}

function shell({ title, description, path, body, type, noindex }) {
  return `<!doctype html>
<html lang="en"><head>${pageHead({ title, description, path, type, noindex })}</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header"><div class="wrap header-row">
  <a class="brand" href="/" aria-label="MedCode Pro home"><span class="brand-mark" aria-hidden="true">+</span><span>MedCode Pro</span></a>
  <nav aria-label="Main navigation"><a href="/#product">Product</a><a href="/blog/" aria-current="${path === '/blog/' ? 'page' : 'false'}">Blog</a><a href="/From%20the%20Founder.html">Founder</a></nav>
  <a class="nav-cta" href="/#cta">Request a demo</a>
</div></header>
${body}
<footer class="site-footer"><div class="wrap footer-row"><span>© 2026 MedCode Pro, Inc.</span><span><a href="/">Home</a> · <a href="/blog/">Blog</a> · <a href="mailto:hello@medcodepro.ai">Contact</a></span></div></footer>
</body></html>`;
}

function displayDate(date) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));
}

function articlePath(article) { return `/blog/${article.slug}/`; }

function readingMinutes(article) {
  const text = [article.lede.text, ...article.sections.flatMap(section => section.paragraphs.map(p => p.text)),
    ...article.sections.flatMap(section => (section.list || []).map(item => `${item.lead} ${item.text}`)),
    article.productFit?.text || ''].join(' ');
  return Math.max(2, Math.ceil(text.trim().split(/\s+/).length / 220));
}

export function renderIndex(articles) {
  const cards = articles.map(article => `<article class="story-card">
    <div class="story-meta"><span>${escapeHtml(article.category)}</span><time datetime="${article.published}">${displayDate(article.published)}</time></div>
    <h2><a href="${articlePath(article)}">${escapeHtml(article.title)}</a></h2>
    <p>${escapeHtml(article.summary)}</p>
    <a class="read-link" href="${articlePath(article)}" aria-label="Read ${escapeHtml(article.title)}">Read the article <span aria-hidden="true">→</span></a>
  </article>`).join('\n');
  return shell({ title: 'Revenue cycle insights', description: 'Source-linked reporting and practical analysis for specialty-practice revenue cycle teams.',
    path: '/blog/', noindex: articles.length === 0,
    body: `<main id="main"><section class="blog-hero"><div class="wrap"><p class="eyebrow">THE MEDCODE BRIEF</p><h1>Revenue cycle news, with the receipts.</h1><p>What changed, what it means for a specialty practice, and what is still unknown.</p></div></section>
<section class="wrap story-section" aria-label="Articles">${articles.length ? `<div class="story-grid">${cards}</div>` : '<div class="empty-state"><h2>New reporting is in preparation.</h2><p>We publish when the underlying source and practice implications are verified.</p></div>'}</section>
<section class="bottom-cta"><div class="wrap"><h2>Want to look at your own case mix?</h2><p>See how MedCode Pro reviews coding and documentation against actual cases.</p><a href="/#cta">Explore MedCode Pro <span aria-hidden="true">→</span></a></div></section></main>` });
}

function citationLinks(article, ids) {
  return ids.map(id => {
    const number = article.sources.findIndex(source => source.id === id) + 1;
    return `<sup class="citation"><a href="#source-${number}" aria-label="Source ${number}">[${number}]</a></sup>`;
  }).join('');
}

function renderParagraph(article, paragraph) {
  return `<p>${escapeHtml(paragraph.text)}${citationLinks(article, paragraph.cites)}</p>`;
}

export function renderArticle(article) {
  const path = articlePath(article);
  const sections = article.sections.map(section => `<section class="article-section"><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map(p => renderParagraph(article, p)).join('\n')}${section.list?.length ? `<ol class="review-list">${section.list.map(item => `<li><strong>${escapeHtml(item.lead)}</strong> ${escapeHtml(item.text)}</li>`).join('')}</ol>` : ''}</section>`).join('\n');
  const sources = article.sources.map((source, index) => `<li id="source-${index + 1}"><a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(source.title)}</a></li>`).join('\n');
  const fit = article.productFit ? `<aside class="product-fit"><p class="eyebrow">THE PRACTICE LENS</p><h2>${escapeHtml(article.productFit.heading)}</h2><p>${escapeHtml(article.productFit.text)}</p><a href="/#cta">See how MedCode Pro works <span aria-hidden="true">→</span></a></aside>` : '';
  return shell({ title: article.title, description: article.summary, path, type: 'article',
    body: `<main id="main"><article><header class="article-hero"><div class="article-wrap"><a class="back-link" href="/blog/">← All articles</a><p class="eyebrow">${escapeHtml(article.category)}</p><h1>${escapeHtml(article.title)}</h1><p class="dek">${escapeHtml(article.summary)}</p><div class="byline">MedCode Pro Editorial · <time datetime="${article.published}">${displayDate(article.published)}</time> · ${readingMinutes(article)} min read</div></div></header>
<div class="article-wrap article-body">${renderParagraph(article, article.lede)}${sections}${fit}<section class="sources" aria-labelledby="sources-title"><h2 id="sources-title">Sources</h2><ol>${sources}</ol><p>Reporting and analysis for revenue-cycle teams. Confirm payer requirements against current policy and your contracts.</p></section></div></article>
<section class="bottom-cta"><div class="wrap"><h2>Read more from the MedCode Brief.</h2><a href="/blog/">Browse all articles <span aria-hidden="true">→</span></a></div></section></main>` });
}

export function renderSitemap(articles) {
  const paths = ['/', '/From%20the%20Founder.html', ...(articles.length ? ['/blog/'] : []), ...articles.map(articlePath)];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `<url><loc>${SITE}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
}

export function renderFeed(articles) {
  const updated = articles[0]?.updated || new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>MedCode Pro Blog</title><link>${SITE}/blog/</link><description>Source-linked revenue cycle reporting and analysis.</description><lastBuildDate>${new Date(`${updated}T12:00:00Z`).toUTCString()}</lastBuildDate>${articles.map(article => `<item><title>${escapeHtml(article.title)}</title><link>${SITE}${articlePath(article)}</link><guid isPermaLink="true">${SITE}${articlePath(article)}</guid><description>${escapeHtml(article.summary)}</description><pubDate>${new Date(`${article.published}T12:00:00Z`).toUTCString()}</pubDate></item>`).join('')}</channel></rss>\n`;
}
