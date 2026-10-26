import { readFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles } from '../content/blog-posts.mjs';
import { renderArticle, renderFeed, renderIndex, renderSitemap, validateArticles } from './blog-render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const posts = validateArticles(articles);
const expected = new Map([
  ['blog/index.html', renderIndex(posts)],
  ['sitemap.xml', renderSitemap(posts)],
  ['feed.xml', renderFeed(posts)],
  ['robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://medcodepro.ai/sitemap.xml\n'],
  ...posts.map(post => [`blog/${post.slug}/index.html`, renderArticle(post)])
]);

for (const [path, html] of expected) {
  let saved;
  try { saved = await readFile(join(root, path), 'utf8'); }
  catch { throw new Error(`${path} is missing. Run npm run build:blog and commit the generated files.`); }
  if (saved !== html) throw new Error(`${path} is stale. Run npm run build:blog and commit the generated files.`);
}

const entries = await readdir(join(root, 'blog'), { withFileTypes: true });
for (const entry of entries) {
  if (entry.isDirectory() && entry.name !== 'assets' && !posts.some(post => post.slug === entry.name)) {
    throw new Error(`blog/${entry.name}/ is a stale public article directory`);
  }
}
console.log(`Verified ${expected.size} committed blog output files for ${posts.length} article(s).`);
