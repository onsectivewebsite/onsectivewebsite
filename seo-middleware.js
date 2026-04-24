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
    title: 'Onsective — Global Digital Transformation Consulting & IT Strategy',
    description: 'Onsective — Toronto-based global technology consulting. Cloud, cybersecurity, AI, software, SEO, and brand management. 120+ clients, 7+ nations.',
  },
  '/services': {
    title: 'IT Consulting Services — Cloud, AI, Cybersecurity & SEO | Onsective',
    description: "Onsective's full-service IT consulting: cloud migration, cybersecurity audits, AI automation, enterprise SEO, custom software, and digital marketing.",
  },
  '/industries': {
    title: 'Industries We Serve — Banking, Healthcare, Retail & More | Onsective',
    description: 'Industry-specialized consulting from Onsective across banking, healthcare, retail, manufacturing, energy, technology, education, and government.',
  },
  '/insights': {
    title: 'Insights — Digital Transformation, Cloud, AI & Cybersecurity | Onsective',
    description: 'Executive-grade insights from Onsective on digital transformation, cloud architecture, cybersecurity, AI, and enterprise technology strategy.',
  },
  '/platforms': {
    title: 'Platforms — OnsecBoard, OnsecEmployee & Client Portals | Onsective',
    description: 'Onsective platforms: OnsecBoard for executive engagement, OnsecEmployee for workforce intelligence, and bespoke enterprise dashboards.',
  },
  '/about': {
    title: 'About Onsective — Our Mission, Team & Digital Vision',
    description: 'Meet the team behind Onsective Enterprise. Learn our mission, leadership, and approach to global enterprise digital transformation.',
  },
  '/onsective': {
    title: 'Onsective — Who We Are',
    description: 'Onsective Enterprise: global digital transformation consultancy headquartered in Toronto. Cloud, cybersecurity, AI, software, marketing, brand.',
  },
  '/about-onsective': {
    title: 'About Onsective Enterprise — Leadership, Vision, Footprint',
    description: 'Everything about Onsective Enterprise: leadership, global presence, client roster, and our approach to enterprise consulting.',
  },
  '/onsective-enterprise': {
    title: 'Onsective Enterprise — Global Consulting Firm',
    description: 'Onsective Enterprise Inc. — Toronto-headquartered global consulting firm serving 120+ clients across seven nations.',
  },
  '/contact': {
    title: 'Contact Onsective — Start Your Digital Transformation',
    description: 'Reach the Onsective team to scope a digital transformation engagement, request a quote, or speak with a principal consultant.',
  },
  '/vision': {
    title: 'Vision — The Future of Enterprise Technology | Onsective',
    description: 'Onsective\'s vision for the next decade of enterprise technology: AI-native operations, sovereign data, and zero-trust by default.',
  },
  '/careers': {
    title: 'Careers at Onsective — Join a Global Consulting Firm',
    description: 'Open roles at Onsective Enterprise. Consulting, engineering, AI, cybersecurity, and brand craft opportunities across our global offices.',
  },
  '/events': {
    title: 'Events — Onsective Talks, Panels & Summits',
    description: 'Upcoming Onsective events, executive roundtables, industry panels, and thought-leadership summits.',
  },
  '/investors': {
    title: 'Investors — Onsective Enterprise',
    description: 'Investor relations materials, governance disclosures, and financial updates for Onsective Enterprise Inc.',
  },
  '/alumni': {
    title: 'Alumni — Onsective Network',
    description: 'The Onsective alumni network — former consultants, executives, and partners who shaped the firm.',
  },
  '/resources': {
    title: 'Resources — Whitepapers, Playbooks & Frameworks | Onsective',
    description: 'Onsective resource library: whitepapers, playbooks, frameworks, and templates on digital transformation, cloud, cybersecurity, and AI.',
  },
  '/employee-handbook': {
    title: 'Employee Handbook — Onsective Enterprise',
    description: 'The Onsective Enterprise employee handbook: policies, conduct, and operating principles for all team members worldwide.',
  },
  '/privacy': {
    title: 'Privacy Policy — Onsective Enterprise',
    description: 'How Onsective Enterprise collects, uses, stores, and protects personal data. PIPEDA, GDPR, and CCPA compliant.',
  },
  '/terms': {
    title: 'Terms of Service — Onsective Enterprise',
    description: 'Terms and conditions governing the use of onsective.com and engagements with Onsective Enterprise Inc.',
  },
  '/copyright': {
    title: 'Copyright Notice — Onsective Enterprise',
    description: 'Copyright, trademark, and intellectual property notices for Onsective Enterprise Inc.',
  },
  '/accessibility': {
    title: 'Accessibility Statement — Onsective Enterprise',
    description: 'Onsective\'s commitment to WCAG 2.2 AA accessibility and our ongoing program to make our digital experiences inclusive.',
  },
};

/* ------------------------------------------------------------- */
/*  Taxonomy labels for dynamic routes                           */
/* ------------------------------------------------------------- */

const SERVICE_NAMES = {
  'it-strategy': 'IT Strategy',
  'cloud-services': 'Cloud Services',
  'cybersecurity': 'Cybersecurity',
  'digital-experience': 'Digital Experience',
  'ai-automation': 'AI & Automation',
  'enterprise-seo': 'Enterprise SEO',
  'digital-marketing': 'Digital Marketing',
  'social-capital': 'Social Capital',
  'custom-software': 'Custom Software',
  'brand-management': 'Brand Management',
};

const INDUSTRY_NAMES = {
  'banking': 'Banking & Financial Services',
  'healthcare': 'Healthcare & Life Sciences',
  'retail': 'Retail & Consumer',
  'manufacturing': 'Manufacturing & Industrial',
  'energy': 'Energy & Utilities',
  'technology': 'Technology',
  'professional-services': 'Professional Services',
  'education': 'Education',
  'government': 'Government & Public Sector',
  'media': 'Media & Entertainment',
};

const LOCATION_NAMES = {
  'toronto': 'Toronto',
  'new-york': 'New York',
  'london': 'London',
  'dubai': 'Dubai',
  'mumbai': 'Mumbai',
  'singapore': 'Singapore',
  'sydney': 'Sydney',
  'berlin': 'Berlin',
  'san-francisco': 'San Francisco',
  'vancouver': 'Vancouver',
};

const INTENT_NAMES = {
  'pricing': 'Pricing',
  'agency': 'Agency',
  'company': 'Company',
  'consulting': 'Consulting',
  'firm': 'Firm',
  'experts': 'Experts',
  'solutions': 'Solutions',
  'services': 'Services',
  'near-me': 'Near Me',
  'reviews': 'Reviews',
};

/* ------------------------------------------------------------- */
/*  Helpers                                                      */
/* ------------------------------------------------------------- */

const humanize = (slug) =>
  String(slug)
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(w => w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

const serviceLabel = (s) => SERVICE_NAMES[s] || humanize(s);
const industryLabel = (i) => INDUSTRY_NAMES[i] || humanize(i);
const locationLabel = (l) => LOCATION_NAMES[l] || humanize(l);
const intentLabel = (it) => INTENT_NAMES[it] || humanize(it);

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

  // Exact static route match
  if (STATIC_ROUTES[clean]) {
    return { canonical, ...STATIC_ROUTES[clean] };
  }

  const segs = clean.split('/').filter(Boolean);

  // /services/<service>[/...]
  if (segs[0] === 'services' && segs[1]) {
    const service = serviceLabel(segs[1]);

    // /services/<s>/methodology/<phase>
    if (segs[2] === 'methodology' && segs[3]) {
      const phase = humanize(segs[3]);
      return {
        canonical,
        title: `${phase} — ${service} Methodology${SUFFIX}`,
        description: `The ${phase} phase of Onsective's ${service} methodology — approach, deliverables, and outcomes for enterprise engagements.`,
      };
    }
    // /services/<s>/capability/<cap>
    if (segs[2] === 'capability' && segs[3]) {
      const cap = humanize(segs[3]);
      return {
        canonical,
        title: `${cap} — ${service} Capability${SUFFIX}`,
        description: `${cap} within Onsective's ${service} practice — capabilities, engagement models, and reference outcomes.`,
      };
    }
    // /services/<s>/in/<loc>
    if (segs[2] === 'in' && segs[3]) {
      const loc = locationLabel(segs[3]);
      return {
        canonical,
        title: `${service} in ${loc} — Enterprise Consulting${SUFFIX}`,
        description: `${service} consulting and engineering in ${loc} from Onsective — enterprise-grade delivery, local expertise, global reach.`,
      };
    }
    // /services/<s>/for/<industry>
    if (segs[2] === 'for' && segs[3]) {
      const ind = industryLabel(segs[3]);
      return {
        canonical,
        title: `${service} for ${ind}${SUFFIX}`,
        description: `${service} tailored for ${ind} — industry-specific methodology, case studies, and measurable outcomes from Onsective.`,
      };
    }
    // /services/<s>/intent/<intent>
    if (segs[2] === 'intent' && segs[3]) {
      const intent = intentLabel(segs[3]);
      return {
        canonical,
        title: `${service} ${intent}${SUFFIX}`,
        description: `${service} ${intent.toLowerCase()} from Onsective — engagement models, scope, and investment guidance for enterprise buyers.`,
      };
    }
    // /services/<s>
    if (!segs[2]) {
      return {
        canonical,
        title: `${service} Consulting Services${SUFFIX}`,
        description: `${service} from Onsective Enterprise — strategy, architecture, delivery, and measurable business outcomes for global organizations.`,
      };
    }
  }

  // /industries/<industry>[/in/<loc>]
  if (segs[0] === 'industries' && segs[1]) {
    const ind = industryLabel(segs[1]);
    if (segs[2] === 'in' && segs[3]) {
      const loc = locationLabel(segs[3]);
      return {
        canonical,
        title: `${ind} Consulting in ${loc}${SUFFIX}`,
        description: `Consulting for ${ind} in ${loc} from Onsective — sector expertise, local delivery, and enterprise-grade engagement.`,
      };
    }
    return {
      canonical,
      title: `${ind} Consulting — Digital Transformation${SUFFIX}`,
      description: `Onsective's ${ind} practice — digital transformation, strategy, and engineering outcomes purpose-built for the sector.`,
    };
  }

  // /insights/<slug>
  if (segs[0] === 'insights' && segs[1]) {
    const title = humanize(segs[1]);
    return {
      canonical,
      title: `${title}${SUFFIX} Insights`,
      description: `${title} — an Onsective insight on digital transformation, cloud, cybersecurity, AI, and enterprise technology strategy.`,
    };
  }

  // /guides/<slug>
  if (segs[0] === 'guides' && segs[1]) {
    const title = humanize(segs[1]);
    return {
      canonical,
      title: `${title} — Enterprise Guide${SUFFIX}`,
      description: `${title} — a practitioner-grade enterprise guide from Onsective covering strategy, architecture, delivery, and measurement.`,
    };
  }

  // Fallback — humanize last segment
  const last = segs[segs.length - 1] || 'home';
  const title = humanize(last);
  return {
    canonical,
    title: `${title}${SUFFIX}`,
    description: `${title} — Onsective Enterprise. Global digital transformation consulting across cloud, cybersecurity, AI, software, SEO, and brand.`,
  };
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
