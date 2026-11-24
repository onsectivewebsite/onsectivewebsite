/**
 * seo-middleware.js
 *
 * Per-URL SEO rewrite for the SPA `index.html` shell. Intercepts every
 * non-static request, rewrites <title>, <link rel="canonical">, OG tags,
 * Twitter tags, and <meta name="description"> to reflect the requested
 * path — so crawlers (Googlebot, Bingbot, etc.) don't see every route as
 * a duplicate of the homepage.
 *
 * Without this, the raw HTML for `/services/cybersecurity` returns the
 * homepage canonical (`https://onsective.com/`) and homepage title,
 * which causes Google to treat every URL as a duplicate and refuse to
 * index them.
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://onsective.com';
const BRAND = 'Onsective';
const SUFFIX = ` | ${BRAND}`;

/* ------------------------------------------------------------- */
/*  Per-route SEO map — hand-tuned for top-level pages           */
/* ------------------------------------------------------------- */

const STATIC_ROUTES = {
  '/': {
    title: 'Onsective Inc. | IT Consulting in Canada',
    description: 'Onsective Inc. is a Canada-based IT consulting company helping small and mid-sized businesses with software, cloud and digital systems.',
  },
  '/services': {
    title: 'IT Consulting Services | Onsective',
    description: 'IT consulting for small and mid-sized businesses: IT strategy, cloud, security, websites, custom software, automation, SEO and marketing.',
  },
  '/pricing': {
    title: 'How We Charge | Onsective',
    description: 'How Onsective Inc. charges for IT consulting: hourly, project-based quotes or a monthly retainer. Prices in Canadian dollars.',
  },
  '/about': {
    title: 'About Onsective Inc.',
    description: 'Onsective Inc. is a new Canada-based IT consulting company helping small and mid-sized businesses with software, cloud and digital systems.',
  },
  '/contact': {
    title: 'Contact Onsective Inc.',
    description: 'Contact Onsective Inc., a Canada-based IT consulting company. Send us a message about your project.',
  },
  '/privacy': {
    title: 'Privacy Policy | Onsective',
    description: 'How Onsective Inc. collects, uses and protects personal information.',
  },
  '/terms': {
    title: 'Terms of Service | Onsective',
    description: 'Terms of Service for onsective.com and services provided by Onsective Inc.',
  },
  '/refund-policy': {
    title: 'Refund and Cancellation Policy | Onsective',
    description: 'Refund and cancellation policy for services provided by Onsective Inc.',
  },
  '/copyright': {
    title: 'Copyright Notice | Onsective',
    description: 'Copyright and trademark notices for Onsective Inc.',
  },
  '/accessibility': {
    title: 'Accessibility Statement | Onsective',
    description: 'Accessibility statement for onsective.com.',
  },
};

const SERVICE_NAMES = {
  'it-strategy': 'IT Strategy',
  'cloud-services': 'Cloud Services',
  'cybersecurity': 'Cybersecurity',
  'digital-experience': 'Digital Experience',
  'ai-automation': 'AI & Automation',
  'enterprise-seo': 'Search Engine Optimization (SEO)',
  'digital-marketing': 'Digital Marketing',
  'social-capital': 'Social Media Handling',
  'custom-software': 'Custom Software',
  'brand-management': 'Brand Management',
};

/* ------------------------------------------------------------- */
/*  Helpers                                                      */
/* ------------------------------------------------------------- */

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/* ------------------------------------------------------------- */
/*  Compute per-path SEO                                         */
/* ------------------------------------------------------------- */

function resolveSEO(reqPath) {
  // Normalize: strip trailing slash (except root), drop query/hash
  let clean = String(reqPath || '/').split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) clean = clean.slice(0, -1);

  const canonical = clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`;

  if (STATIC_ROUTES[clean]) return { canonical, ...STATIC_ROUTES[clean] };

  const segs = clean.split('/').filter(Boolean);
  if (segs[0] === 'services' && segs.length === 2 && SERVICE_NAMES[segs[1]]) {
    const name = SERVICE_NAMES[segs[1]];
    return {
      canonical,
      title: `${name} | IT Consulting${SUFFIX}`,
      description: `${name} from Onsective Inc., a Canada-based IT consulting company for small and mid-sized businesses.`,
    };
  }

  // Unknown path: the app redirects to the home page, so use the home page data.
  return { canonical: `${SITE_URL}/`, ...STATIC_ROUTES['/'] };
}

/* ------------------------------------------------------------- */
/*  HTML rewriter                                                */
/* ------------------------------------------------------------- */

function rewriteHtml(template, seo) {
  const { canonical, title, description } = seo;
  const T = esc(title);
  const D = esc(description);
  const U = esc(canonical);

  // Pre-hydration H1 strips the brand suffix so the visible heading matches
  // the page's actual topic (non-JS crawlers use this as the body H1).
  const H1 = esc(title.replace(/\s*\|\s*Onsective\s*$/, '').replace(/\s*\|\s*Onsective\s+Insights\s*$/, ''));

  return template
    .replace(/<title>[\s\S]*?<\/title>/i,
      `<title>${T}</title>`)
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i,
      `<link rel="canonical" href="${U}" />`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/i,
      `<meta property="og:url" content="${U}" />`)
    .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/i,
      `<meta property="og:title" content="${T}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/i,
      `<meta property="og:description" content="${D}" />`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/i,
      `<meta name="description" content="${D}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/i,
      `<meta name="twitter:title" content="${T}" />`)
    .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/i,
      `<meta name="twitter:description" content="${D}" />`)
    .replace(/<link\s+rel="alternate"\s+hreflang="en"\s+href="[^"]*"\s*\/>/i,
      `<link rel="alternate" hreflang="en" href="${U}" />`)
    .replace(/<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/>/i,
      `<link rel="alternate" hreflang="x-default" href="${U}" />`)
    // Per-URL pre-hydration body: replaces the text inside the marked H1 and
    // intro paragraph in index.html so non-rendering crawlers see URL-specific
    // content, not the generic brand splash.
    .replace(/(<h1\s+data-pre-h1[^>]*>)[\s\S]*?(<\/h1>)/i,
      `$1\n        ${H1}\n      $2`)
    .replace(/(<p\s+data-pre-intro[^>]*>)[\s\S]*?(<\/p>)/i,
      `$1\n        ${D}\n      $2`);
}

/* ------------------------------------------------------------- */
/*  Public API — Express middleware factory                      */
/* ------------------------------------------------------------- */

export function createSEOHandler(distPath) {
  const templatePath = path.join(distPath, 'index.html');
  let template = fs.readFileSync(templatePath, 'utf-8');

  // In development you may want to reload on every request; in prod we
  // cache the template in memory for speed.
  if (process.env.NODE_ENV !== 'production') {
    fs.watchFile(templatePath, { interval: 2000 }, () => {
      try { template = fs.readFileSync(templatePath, 'utf-8'); } catch (_) {}
    });
  }

  return function seoHandler(req, res) {
    const seo = resolveSEO(req.path);
    const html = rewriteHtml(template, seo);
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    res.send(html);
  };
}

export { resolveSEO, rewriteHtml };
