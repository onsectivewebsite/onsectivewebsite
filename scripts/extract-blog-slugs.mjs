#!/usr/bin/env node
/**
 * Extracts the 500 blog-500 guide slugs by transpiling the TS file
 * with a minimal regex + reproducing the slug generation logic.
 * Writes slugs to scripts/blog-500-slugs.json for sitemap generation.
 */
import fs from 'node:fs';
import path from 'node:path';

// Minimal reimplementation of toSlug from utils/slugs.ts
const toSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Mirror the TOPICS array structure from data/blog-500.ts
// (Kept in sync manually — if TOPICS changes, update here too.)
const TOPICS = [
  {
    category: 'Digital Marketing',
    keywords: [
      'digital marketing strategy 2026', 'building a digital marketing plan', 'enterprise digital marketing',
      'digital marketing roi', 'digital marketing for startups', 'digital marketing budget allocation',
      'digital marketing vs traditional marketing', 'omnichannel digital marketing', 'digital marketing automation',
      'digital marketing for healthcare', 'digital marketing for fintech', 'digital marketing for saas',
      'digital marketing for retail', 'digital marketing for manufacturing', 'digital marketing for b2b',
      'digital marketing for b2c', 'digital marketing dashboard', 'digital marketing reporting',
      'digital marketing team structure', 'digital marketing kpi framework', 'digital marketing content calendar',
      'digital marketing attribution models', 'digital marketing mix modeling', 'digital marketing brief template',
      'digital marketing transformation', 'digital marketing maturity model', 'digital marketing for b2b saas',
      'digital marketing for law firms', 'digital marketing for real estate', 'digital marketing for ecommerce',
      'digital marketing for agencies', 'digital marketing governance', 'digital marketing compliance',
      'digital marketing privacy', 'digital marketing first party data', 'digital marketing personalization',
      'digital marketing lifecycle', 'digital marketing funnel optimization', 'digital marketing audit checklist',
      'digital marketing okrs', 'digital marketing forecasting', 'digital marketing measurement framework',
      'digital marketing in canada', 'digital marketing in dubai', 'digital marketing in london',
      'digital marketing in singapore', 'digital marketing in india', 'digital marketing trends 2026',
      'digital marketing after cookies', 'digital marketing with ai tools'
    ]
  },
  {
    category: 'SEO',
    keywords: [
      'enterprise seo strategy', 'seo audit checklist', 'technical seo guide',
      'core web vitals optimization', 'on page seo best practices', 'off page seo strategies',
      'link building strategies 2026', 'keyword research process', 'seo competitor analysis',
      'seo content strategy', 'topic cluster seo', 'pillar page seo',
      'seo for ecommerce', 'seo for saas', 'seo for b2b',
      'seo for healthcare', 'seo for law firms', 'seo for real estate',
      'seo migration plan', 'seo site redesign', 'seo for shopify',
      'seo for wordpress', 'seo for nextjs', 'seo for single page apps',
      'javascript seo best practices', 'schema markup guide', 'json ld schema',
      'seo reporting dashboard', 'seo kpi framework', 'seo roi measurement',
      'programmatic seo strategy', 'international seo hreflang', 'multilingual seo',
      'local seo checklist', 'seo for small business', 'seo crawl budget optimization',
      'seo log file analysis', 'seo xml sitemap', 'seo internal linking',
      'seo anchor text strategy', 'seo canonical tags', 'seo noindex best practices',
      'google algorithm updates', 'seo ai tools', 'ai overviews seo',
      'seo vs sem', 'seo in 2026', 'seo for ai search',
      'seo for voice search', 'seo for video'
    ]
  },
  {
    category: 'Google My Business',
    keywords: [
      'google business profile setup', 'google my business optimization', 'google business profile seo',
      'gmb posts strategy', 'google business reviews', 'gmb photos best practices',
      'google business profile categories', 'gmb insights analytics', 'multi location google business profile',
      'gmb suspension recovery', 'google business profile q&a', 'gmb messaging setup',
      'gmb services menu', 'gmb products catalog', 'gmb appointments booking',
      'gmb duplicate listings', 'gmb ownership transfer', 'gmb for agencies',
      'google business profile verification', 'gmb for service area business', 'gmb for restaurants',
      'gmb for law firms', 'gmb for healthcare', 'gmb for real estate',
      'gmb attribution', 'local pack ranking', 'google maps seo',
      'gmb api automation', 'google posts vs updates', 'gmb keyword research',
      'gmb vs yelp', 'gmb review response templates', 'gmb review generation strategy',
      'gmb spam removal', 'gmb guidelines compliance', 'gmb citation building',
      'gmb nap consistency', 'gmb special hours', 'gmb holiday hours',
      'gmb booking integration', 'gmb website builder', 'gmb covid updates',
      'gmb offer posts', 'gmb event posts', 'gmb product posts',
      'gmb call tracking', 'gmb utm parameters', 'gmb for ecommerce',
      'gmb performance metrics'
    ]
  },
  {
    category: 'Social Media',
    keywords: [
      'linkedin content strategy', 'linkedin thought leadership', 'linkedin b2b marketing',
      'linkedin company page optimization', 'linkedin ads best practices', 'linkedin sales navigator',
      'instagram content strategy', 'instagram reels for business', 'instagram shopping setup',
      'instagram growth 2026', 'tiktok for business', 'tiktok content strategy',
      'tiktok ads best practices', 'youtube content strategy', 'youtube shorts strategy',
      'youtube seo optimization', 'x twitter content strategy', 'facebook marketing 2026',
      'pinterest for business', 'social media crisis management', 'social media audit template',
      'social media content calendar', 'social media analytics framework', 'social media kpi dashboard',
      'social media community management', 'influencer marketing strategy', 'influencer contracts',
      'ugc strategy', 'social listening tools', 'social media for healthcare',
      'social media for fintech', 'social media for b2b saas', 'social commerce strategy',
      'social media roi measurement', 'social media attribution', 'social media brand guidelines',
      'social media governance', 'social media reporting template', 'social media team structure',
      'linkedin newsletter strategy', 'linkedin live events', 'clubhouse for business',
      'threads strategy', 'bluesky for business', 'mastodon for business',
      'short form video strategy', 'long form video strategy', 'social media chatbot',
      'social media ai tools'
    ]
  },
  {
    category: 'Content Marketing',
    keywords: [
      'content marketing strategy', 'content marketing framework', 'content marketing roi',
      'content marketing kpis', 'content calendar template', 'editorial calendar tools',
      'b2b content marketing', 'b2c content marketing', 'content marketing for saas',
      'content marketing for ecommerce', 'content marketing for healthcare', 'content marketing audit',
      'content gap analysis', 'content pillar strategy', 'content cluster strategy',
      'blog strategy for business', 'blog post template', 'blog post optimization',
      'evergreen content strategy', 'long form content strategy', 'short form content strategy',
      'video content strategy', 'podcast content strategy', 'newsletter content strategy',
      'ebook marketing strategy', 'whitepaper marketing', 'case study marketing',
      'interactive content ideas', 'content personalization strategy', 'content governance framework',
      'content style guide', 'content tone of voice', 'content editorial guidelines',
      'content distribution strategy', 'content syndication networks', 'content repurposing framework',
      'ai content generation', 'ai content strategy', 'ai content editor workflow',
      'content quality score', 'e-e-a-t content', 'helpful content update',
      'content brief template', 'content marketing tools stack', 'content marketing platforms',
      'content marketing dashboard', 'content marketing reporting', 'content marketing attribution',
      'content marketing measurement'
    ]
  },
  {
    category: 'Email Marketing',
    keywords: [
      'email marketing strategy', 'email marketing automation', 'email marketing segmentation',
      'email marketing deliverability', 'email marketing roi', 'email marketing kpis',
      'email list building strategies', 'email list growth tactics', 'email marketing for ecommerce',
      'email marketing for saas', 'email marketing for b2b', 'email marketing for nonprofits',
      'welcome email series', 'onboarding email sequence', 'abandoned cart email flow',
      'winback email series', 'reactivation email campaign', 'newsletter strategy',
      'transactional email design', 'lifecycle email marketing', 'drip campaign setup',
      'email a/b testing framework', 'email subject line optimization', 'email preview text',
      'email personalization tactics', 'email design best practices', 'email mobile optimization',
      'email accessibility standards', 'email gdpr compliance', 'email ccpa compliance',
      'email marketing tools comparison', 'mailchimp vs klaviyo', 'hubspot vs marketo email',
      'salesforce marketing cloud email', 'email marketing dashboard', 'email marketing reporting',
      'email deliverability audit', 'email domain warmup', 'dmarc dkim spf setup',
      'email sender reputation', 'email marketing funnel', 'email marketing metrics',
      'email marketing kpi framework', 'email marketing governance', 'email marketing compliance',
      'email marketing consent management', 'email marketing privacy'
    ]
  },
  {
    category: 'Paid Advertising',
    keywords: [
      'google ads strategy', 'google ads optimization', 'google ads for ecommerce',
      'google ads for b2b', 'google ads for saas', 'google ads performance max',
      'google ads smart bidding', 'google ads quality score', 'google ads negative keywords',
      'google ads audience targeting', 'meta ads strategy', 'facebook ads optimization',
      'instagram ads strategy', 'meta advantage+ campaigns', 'linkedin ads strategy',
      'linkedin ads for b2b', 'tiktok ads strategy', 'tiktok ads for ecommerce',
      'programmatic advertising strategy', 'display advertising best practices', 'youtube advertising strategy',
      'connected tv ctv advertising', 'amazon advertising strategy', 'amazon dsp strategy',
      'pinterest advertising strategy', 'reddit advertising strategy', 'paid media audit',
      'paid media budget allocation', 'paid media attribution', 'paid media roi measurement',
      'paid media dashboard', 'paid media reporting', 'paid media kpis',
      'paid media benchmarks', 'paid media for startups', 'paid media for enterprises',
      'ppc agency selection', 'ppc audit checklist', 'ppc conversion tracking',
      'ppc landing page optimization', 'ppc ad copy best practices', 'ppc creative testing framework',
      'incrementality testing paid media', 'media mix modeling mmm', 'ab testing paid campaigns',
      'paid social vs paid search', 'top of funnel paid media', 'bottom of funnel paid media',
      'retargeting strategy', 'lookalike audiences'
    ]
  },
  {
    category: 'Conversion Rate Optimization',
    keywords: [
      'conversion rate optimization guide', 'cro framework 2026', 'cro for ecommerce',
      'cro for saas', 'cro for b2b', 'landing page optimization',
      'checkout optimization', 'form optimization', 'cta optimization',
      'ab testing framework', 'ab testing statistical significance', 'multivariate testing',
      'user testing methodology', 'heatmap analysis', 'session replay analysis',
      'funnel analysis', 'cohort analysis', 'page speed and conversion',
      'mobile conversion optimization', 'trust signals on landing pages', 'social proof strategies',
      'urgency and scarcity tactics', 'pricing page optimization', 'product page optimization',
      'homepage optimization', 'cart abandonment reduction', 'signup flow optimization',
      'login flow optimization', 'onboarding optimization', 'personalization for cro',
      'cro audit checklist', 'cro tools comparison', 'cro agency selection',
      'cro kpi framework', 'cro roi measurement', 'cro reporting dashboard',
      'cro team structure', 'cro process documentation', 'cro experimentation culture',
      'cro hypothesis framework', 'cro prioritization framework', 'cro iterative testing',
      'cro with ai', 'cro personalization engine', 'cro vs seo',
      'cro vs paid media', 'conversion copywriting'
    ]
  },
  {
    category: 'Analytics & Measurement',
    keywords: [
      'ga4 migration guide', 'ga4 setup checklist', 'ga4 custom dimensions',
      'ga4 enhanced measurement', 'ga4 conversion tracking', 'ga4 vs universal analytics',
      'server side tracking setup', 'tag manager best practices', 'gtm container governance',
      'first party data strategy', 'customer data platform cdp', 'cdp vs dmp',
      'marketing analytics dashboard', 'marketing attribution models', 'multi touch attribution',
      'media mix modeling', 'incrementality testing', 'marketing lift studies',
      'data layer architecture', 'event schema governance', 'utm parameter strategy',
      'analytics governance framework', 'privacy first analytics', 'consent mode v2',
      'looker studio dashboard', 'power bi for marketing', 'tableau for marketing',
      'data warehouse for marketing', 'bigquery for marketing', 'snowflake for marketing',
      'segment implementation', 'rudderstack implementation', 'mparticle implementation',
      'marketing data pipeline', 'reverse etl for marketing', 'marketing forecasting',
      'predictive analytics marketing', 'customer lifetime value prediction', 'churn prediction marketing',
      'propensity scoring models', 'uplift modeling', 'experimentation platform',
      'feature flag platform marketing', 'ai analytics tools', 'ai reporting automation',
      'marketing analytics maturity model'
    ]
  },
  {
    category: 'Local SEO',
    keywords: [
      'local seo complete guide', 'local seo checklist 2026', 'local seo for small business',
      'local seo for multi location brands', 'local citation building', 'nap consistency strategy',
      'local link building', 'local seo audit', 'local seo tools comparison',
      'local pack ranking factors', 'google maps ranking', 'local seo for healthcare',
      'local seo for law firms', 'local seo for restaurants', 'local seo for real estate',
      'local seo for contractors', 'local seo for service area businesses', 'local seo for franchises',
      'local seo schema markup', 'localbusiness schema', 'local seo reviews strategy',
      'review generation automation', 'reputation management', 'local seo reporting',
      'local seo dashboard', 'local seo kpis', 'local seo roi',
      'hyperlocal seo strategy', 'neighborhood seo optimization', 'near me searches optimization',
      'voice search local seo', 'local seo in toronto', 'local seo in new york',
      'local seo in london', 'local seo in dubai', 'local seo in singapore',
      'local seo in sydney', 'google business profile vs bing places', 'apple business connect',
      'duckduckgo business listings', 'yandex business listings', 'yelp for business seo',
      'tripadvisor for business seo', 'foursquare for business seo', 'local seo with ai',
      'local seo competitive analysis', 'local seo keyword research'
    ]
  }
];

const ANGLES = ['guide', 'framework', 'checklist', 'mistakes', 'trends', 'case-study', 'playbook', 'faq', 'comparison', 'roadmap'];

const slugs = [];
const seen = new Set();
let idx = 0;
const target = 500;

TOPICS.forEach(topic => {
  topic.keywords.forEach(kw => {
    if (slugs.length >= target) return;
    const angle = ANGLES[idx % ANGLES.length];
    const slug = toSlug(`${kw}-${angle}-${idx}`);
    if (!seen.has(slug)) {
      seen.add(slug);
      slugs.push(slug);
    }
    idx++;
  });
});

const allCombos = [];
TOPICS.forEach(t => t.keywords.forEach(kw => allCombos.push(kw)));
while (slugs.length < target) {
  const kw = allCombos[idx % allCombos.length];
  const angle = ANGLES[Math.floor(idx / allCombos.length) % ANGLES.length];
  const slug = toSlug(`${kw}-${angle}-${idx}`);
  if (!seen.has(slug)) {
    seen.add(slug);
    slugs.push(slug);
  } else {
    idx++;
  }
  idx++;
  if (idx > target * 3) break;
}

fs.writeFileSync(path.resolve('scripts/blog-500-slugs.json'), JSON.stringify(slugs, null, 2));
console.log(`Wrote ${slugs.length} blog slugs to scripts/blog-500-slugs.json`);
