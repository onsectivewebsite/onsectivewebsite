#!/usr/bin/env node
/**
 * Submits top URLs to IndexNow endpoints (Bing, Yandex, Seznam, Naver).
 * IndexNow is a free protocol that pushes URL changes instantly.
 *
 * Run: node scripts/submit-indexnow.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const HOST = 'onsective.com';
const KEY = 'onsective2026indexnowkey4f7a3d9b2c8e1f6a0d5b7c3e9f2a4d8b6c1e5a';
const KEY_LOCATION = `https://${HOST}/onsective-indexnow-key.txt`;

// Collect URLs from sub-sitemaps
const files = ['sitemap-core.xml', 'sitemap-services.xml', 'sitemap-guides.xml', 'sitemap-insights.xml'];
const urls = new Set();
for (const f of files) {
  const full = path.resolve('public', f);
  if (!fs.existsSync(full)) continue;
  const content = fs.readFileSync(full, 'utf-8');
  const matches = content.matchAll(/<loc>(https:\/\/onsective\.com[^<]+)<\/loc>/g);
  for (const m of matches) urls.add(m[1]);
}

const urlList = Array.from(urls);
console.log(`Collected ${urlList.length} URLs from sitemaps`);

// IndexNow accepts up to 10,000 URLs per request
const chunks = [];
const CHUNK = 10000;
for (let i = 0; i < urlList.length; i += CHUNK) {
  chunks.push(urlList.slice(i, i + CHUNK));
}

const endpoints = [
  'https://api.indexnow.org/indexnow',       // generic
  'https://www.bing.com/indexnow',           // Bing
  'https://yandex.com/indexnow',             // Yandex
  'https://search.seznam.cz/indexnow',       // Seznam
  'https://searchadvisor.naver.com/indexnow' // Naver
];

const submit = async (endpoint, urlSet) => {
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urlSet });
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body
    });
    console.log(`  ${endpoint}  →  ${res.status} ${res.statusText}`);
  } catch (e) {
    console.log(`  ${endpoint}  →  error: ${e.message}`);
  }
};

(async () => {
  for (const endpoint of endpoints) {
    for (const [i, chunk] of chunks.entries()) {
      console.log(`Submitting chunk ${i + 1}/${chunks.length} (${chunk.length} URLs) to ${endpoint}`);
      await submit(endpoint, chunk);
    }
  }
  console.log(`\nDone. ${urlList.length} URLs submitted across ${endpoints.length} endpoints.`);
})();
