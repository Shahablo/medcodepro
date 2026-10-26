import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles } from '../content/blog-posts.mjs';
import { renderArticle, renderFeed, renderIndex, renderSitemap, validateArticles } from './blog-render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const posts = validateArticles(articles);
const blogDir = join(root, 'blog');
await mkdir(blogDir, { recursive: true });

// A removed post must be reviewed explicitly; do not silently leave a stale public URL.
const existing = await readdir(blogDir, { withFileTypes: true });
for (const entry of existing) {
  if (entry.isDirectory() && entry.name !== 'assets' && !posts.some(post => post.slug === entry.name)) {
    throw new Error(`Stale article directory blog/${entry.name}; review and remove it before rebuilding`);
  }
}

await writeFile(join(blogDir, 'index.html'), renderIndex(posts));
for (const post of posts) {
  const dir = join(blogDir, post.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), renderArticle(post));
}
await writeFile(join(root, 'sitemap.xml'), renderSitemap(posts));
await writeFile(join(root, 'feed.xml'), renderFeed(posts));
await writeFile(join(root, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://medcodepro.ai/sitemap.xml\n');
console.log(`Built MedCode blog index and ${posts.length} source-linked article(s).`);
