import assert from 'node:assert/strict';
import test from 'node:test';
import { renderArticle, renderFeed, renderIndex, renderSitemap, validateArticles } from '../scripts/blog-render.mjs';

const sample = {
  slug: 'example-payer-policy',
  title: 'A payer policy update: what is confirmed?',
  summary: 'An example of source-linked reporting for practice teams.',
  category: 'Claims & denials',
  published: '2026-10-26',
  updated: '2026-10-26',
  lede: { text: 'The public record says <review> is open.', cites: ['record'] },
  sections: [{ heading: 'What the record says', paragraphs: [
    { text: 'The agency posted a notice about the review.', cites: ['record'] }
  ] }],
  productFit: { heading: 'The practice lens', text: 'Review your own coding and documentation before drawing conclusions.' },
  sources: [{ id: 'record', title: 'Official public record', url: 'https://example.gov/record' }]
};

test('source-linked articles validate and sort newest first', () => {
  const older = { ...sample, slug: 'older-policy', published: '2026-10-25', updated: '2026-10-25' };
  assert.deepEqual(validateArticles([older, sample], { today: '2026-10-26' }).map(post => post.slug),
    ['example-payer-policy', 'older-policy']);
});

test('publication checks reject uncited facts, unknown sources, future dates and duplicate URLs', () => {
  assert.throws(() => validateArticles([{ ...sample, lede: { text: 'Uncited', cites: [] } }], { today: '2026-10-26' }), /source citation or an explicit analysis flag/);
  assert.throws(() => validateArticles([{ ...sample, lede: { text: 'Bad source', cites: ['missing'] } }], { today: '2026-10-26' }), /unknown source/);
  assert.throws(() => validateArticles([{ ...sample, published: '2026-10-27', updated: '2026-10-27' }], { today: '2026-10-26' }), /future publication date/);
  assert.throws(() => validateArticles([sample, sample], { today: '2026-10-26' }), /duplicate slug/);
  assert.throws(() => validateArticles([{ ...sample, sources: [{ id: 'record', title: 'Bad URL', url: 'http://example.gov' }] }], { today: '2026-10-26' }), /valid HTTPS URL/);
});

test('article and index have canonical routes, source links and escaped prose', () => {
  const article = renderArticle(sample);
  assert.match(article, /rel="canonical" href="https:\/\/medcodepro\.ai\/blog\/example-payer-policy\/"/);
  assert.match(article, /The public record says &lt;review&gt; is open/);
  assert.match(article, /href="#source-1"/);
  assert.match(article, /href="https:\/\/example\.gov\/record"/);
  assert.doesNotMatch(article, /<review>/);
  const index = renderIndex([sample]);
  assert.match(index, /href="\/blog\/example-payer-policy\/"/);
  assert.doesNotMatch(index, /noindex,follow/);
  assert.match(renderIndex([]), /noindex,follow/);
});

test('feed and sitemap include only actual published article URLs', () => {
  assert.match(renderSitemap([sample]), /https:\/\/medcodepro\.ai\/blog\/example-payer-policy\//);
  assert.doesNotMatch(renderSitemap([]), /<loc>https:\/\/medcodepro\.ai\/blog\/<\/loc>/);
  assert.match(renderFeed([sample]), /<guid isPermaLink="true">https:\/\/medcodepro\.ai\/blog\/example-payer-policy\/<\/guid>/);
});

test('empty blog rendering creates an honest noindex landing page without fabricated stories', () => {
  const index = renderIndex([]);
  assert.match(index, /New reporting is in preparation/);
  assert.match(index, /noindex,follow/);
  assert.doesNotMatch(index, /example-payer-policy/);
});

test('original analysis is clearly designated while news still needs citations', () => {
  assert.doesNotThrow(() => validateArticles([{ ...sample, lede: { text: 'A practical question.', cites: [], analysis: true } }], { today: '2026-10-26' }));
  const listed = { ...sample, sections: [{ ...sample.sections[0], list: [{ lead: 'Find the passage.', text: 'Use the chart itself.' }] }] };
  assert.match(renderArticle(listed), /<ol class="review-list"><li><strong>Find the passage\.<\/strong>/);
});
