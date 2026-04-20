/**
 * seo-removed-urls.js
 *
 * Paths that have been intentionally retired. The server issues a 301
 * permanent redirect to the mapped target (usually the parent page),
 * and the sitemap generator skips them so they stop being advertised.
 * 301 lets search engines transfer any accumulated signal to the
 * target and drop the old URL from the index.
 *
 * Add new entries by pushing `{ from, to }` into REMOVED_URLS.
 * `from` is a leading-slash path (no trailing slash, no query).
 * `to` is the redirect target (absolute or root-relative).
 */
export const REMOVED_URLS = [
  { from: '/industries/government/in/vancouver', to: '/industries/government' },
];

const BY_PATH = new Map(REMOVED_URLS.map(r => [r.from, r.to]));

function normalize(reqPath) {
  if (!reqPath) return '/';
  let p = String(reqPath).split('?')[0].split('#')[0];
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

export function isRemoved(reqPath) {
  return BY_PATH.has(normalize(reqPath));
}

export function redirectTarget(reqPath) {
  return BY_PATH.get(normalize(reqPath));
}

// Back-compat for sitemap generator which reads `REMOVED_URLS` as a set
// of paths. Expose the set of `from` paths for quick `.has()` checks.
export const REMOVED_PATHS = new Set(REMOVED_URLS.map(r => r.from));
