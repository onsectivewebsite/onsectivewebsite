/**
 * seo-removed-urls.js
 *
 * Paths that have been intentionally retired. The server returns HTTP
 * 410 Gone for these paths so Google drops them from the index, and
 * the sitemap generator skips them so they stop being advertised.
 *
 * Add new paths here (leading slash, no trailing slash, no query).
 */
export const REMOVED_URLS = new Set([
  '/industries/government/in/vancouver',
]);

export function isRemoved(reqPath) {
  if (!reqPath) return false;
  let p = String(reqPath).split('?')[0].split('#')[0];
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return REMOVED_URLS.has(p);
}
