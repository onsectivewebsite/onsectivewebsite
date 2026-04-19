#!/usr/bin/env node
/**
 * Generates /public/feed.xml (RSS 2.0) from the first 100 guide slugs
 * in blog-500-slugs.json. For the manual insights we rely on a static
 * placeholder since those titles live in TS.
 *
 * Run: node scripts/generate-rss.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://onsective.com';
const now = new Date().toUTCString();

const escapeXml = (s) =>
  String(s).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));

const slugs = JSON.parse(fs.readFileSync(path.resolve('scripts/blog-500-slugs.json'), 'utf-8'));
const items = slugs.slice(0, 100).map(slug => {
  const title = slug
    .replace(/-\d+$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${SITE}/guides/${slug}</link>
      <guid isPermaLink="true">${SITE}/guides/${slug}</guid>
      <description>${escapeXml(`Onsective Research · ${title}`)}</description>
      <pubDate>${now}</pubDate>
      <category>Onsective Insights</category>
    </item>`;
}).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Onsective Insights</title>
    <link>${SITE}/insights</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Expert analysis on digital marketing, SEO, cloud, cybersecurity, AI, and enterprise transformation from Onsective Research.</description>
    <language>en-CA</language>
    <lastBuildDate>${now}</lastBuildDate>
    <image>
      <url>${SITE}/assets/logo.png</url>
      <title>Onsective Insights</title>
      <link>${SITE}</link>
    </image>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(path.resolve('public/feed.xml'), rss);
console.log(`Wrote RSS feed with ${Math.min(100, slugs.length)} items to public/feed.xml`);
