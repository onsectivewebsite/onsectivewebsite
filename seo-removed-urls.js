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
  { from: '/guides/building-a-digital-marketing-plan-framework-485', to: '/services/digital-marketing' },
  { from: '/guides/youtube-content-strategy-checklist-162', to: '/guides' },
  { from: '/industries/retail/in/singapore', to: '/industries/retail' },
  { from: '/services/brand-management/methodology/defend', to: '/services/brand-management' },
  { from: '/services/digital-experience/intent/services', to: '/services/digital-experience' },
  { from: '/insights/insight-83', to: '/insights' },
  { from: '/insights/insight-84', to: '/insights' },
  { from: '/insights/insight-458', to: '/insights' },
  { from: '/insights/insight-6', to: '/insights' },
  { from: '/insights/insight-225', to: '/insights' },
  { from: '/insights/insight-306', to: '/insights' },
  { from: '/insights/insight-368', to: '/insights' },
  { from: '/insights/insight-426', to: '/insights' },
  { from: '/guides/digital-agency', to: '/services/digital-marketing' },
  { from: '/guides/digital-marketing-la-gi', to: '/services/digital-marketing' },
  { from: '/services/cybersecurity/in/edmonton', to: '/services/cybersecurity' },
  { from: '/industries/manufacturing/in/edmonton', to: '/industries/manufacturing' },
  { from: '/industries/manufacturing/in/ottawa', to: '/industries/manufacturing' },
  { from: '/guides/digital-marketing-vs-traditional-marketing-playbook-6', to: '/services/digital-marketing' },
  { from: '/guides/local-seo-in-toronto-comparison-468', to: '/services/enterprise-seo' },
  { from: '/services/enterprise-seo/for/technology/in/vancouver', to: '/services/enterprise-seo/for/technology' },
  { from: '/services/cybersecurity/for/healthcare', to: '/services/cybersecurity' },
  { from: '/guides/youtube-advertising-strategy-trends-314', to: '/services/digital-marketing' },
  { from: '/guides/erp-integration-patterns-roadmap-b-29', to: '/services/custom-software' },
  { from: '/services/cloud-services/capability/devsecops-automation', to: '/services/cloud-services' },
  { from: '/guides/generative-ai-implementation-trends-b-124', to: '/services/ai-automation' },
  { from: '/guides/custom-legal-software-development-toronto', to: '/services/custom-software' },
  { from: '/services/brand-management/for/professional-services', to: '/services/brand-management' },
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
