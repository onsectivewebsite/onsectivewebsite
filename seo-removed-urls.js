/**
 * seo-removed-urls.js
 *
 * Retired URLs get a 301 permanent redirect to the closest live page.
 * Rules are matched in order; the first match wins.
 *
 * Also exports cleanUrlRedirect(), which strips session and tracking
 * parameters (for example `gsessionid`) so only clean URLs are indexed.
 */

// Query parameters that must never appear on indexed URLs.
const STRIP_PARAMS = new Set([
  'gsessionid', 'sessionid', 'session_id', 'sid', 'phpsessid', 'jsessionid',
  'fbclid', 'gclid', 'msclkid', 'mc_cid', 'mc_eid', '_ga', '_gl',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
]);

// [pattern, target] pairs for pages that no longer exist.
const RULES = [
  [/^\/industries(\/.*)?$/, '/services'],
  [/^\/insights(\/.*)?$/, '/services'],
  [/^\/guides(\/.*)?$/, '/services'],
  [/^\/resources$/, '/services'],
  [/^\/platforms$/, '/services'],
  [/^\/events(\/.*)?$/, '/about'],
  [/^\/careers$/, '/about'],
  [/^\/investors$/, '/about'],
  [/^\/alumni$/, '/about'],
  [/^\/vision$/, '/about'],
  [/^\/onsective$/, '/about'],
  [/^\/about-onsective$/, '/about'],
  [/^\/onsective-enterprise$/, '/about'],
  [/^\/employee-handbook$/, '/about'],
  [/^\/feed\.xml$/, '/'],
  // Programmatic city / industry / intent pages: send to the parent service page.
  [/^\/services\/([^/]+)\/(in|for|intent|capability|methodology)(\/.*)?$/, '/services/$1'],
];

function normalize(reqPath) {
  if (!reqPath) return '/';
  let p = String(reqPath).split('?')[0].split('#')[0];
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

export function redirectTarget(reqPath) {
  const p = normalize(reqPath);
  for (const [re, to] of RULES) {
    if (re.test(p)) return p.replace(re, to);
  }
  return undefined;
}

export function isRemoved(reqPath) {
  return redirectTarget(reqPath) !== undefined;
}

/**
 * If the request URL carries session/tracking parameters, return the same
 * URL without them (path plus any remaining query). Otherwise undefined.
 */
export function cleanUrlRedirect(originalUrl) {
  const qIndex = String(originalUrl).indexOf('?');
  if (qIndex === -1) return undefined;
  const pathname = originalUrl.slice(0, qIndex);
  const params = new URLSearchParams(originalUrl.slice(qIndex + 1));
  let changed = false;
  for (const key of Array.from(params.keys())) {
    if (STRIP_PARAMS.has(key.toLowerCase())) {
      params.delete(key);
      changed = true;
    }
  }
  if (!changed) return undefined;
  const rest = params.toString();
  return rest ? `${pathname}?${rest}` : pathname;
}
