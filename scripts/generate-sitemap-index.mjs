#!/usr/bin/env node
/**
 * Generates a sitemap index file + split sub-sitemaps.
 * Google prefers <10k URLs per file for large sites.
 *
 *   /sitemap.xml              — index file
 *   /sitemap-core.xml         — core pages (home, services, industries, legal)
 *   /sitemap-services.xml     — service × location/industry/intent combos
 *   /sitemap-guides.xml       — all /guides/:slug posts
 *   /sitemap-insights.xml     — all /insights/insight-N posts
 *
 * Run: node scripts/generate-sitemap-index.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://onsective.com';
const LASTMOD = new Date().toISOString().slice(0, 10);

const SERVICES = [
  'it-strategy', 'cloud-services', 'cybersecurity', 'digital-experience',
  'ai-automation', 'enterprise-seo', 'digital-marketing', 'social-capital',
  'custom-software', 'brand-management'
];
const LOCATIONS = [
  'toronto', 'new-york', 'london', 'dubai', 'mumbai',
  'singapore', 'sydney', 'berlin', 'san-francisco', 'vancouver'
];
const INDUSTRIES = [
  'banking', 'healthcare', 'retail', 'manufacturing', 'energy',
  'technology', 'professional-services', 'education', 'government', 'media'
];
const INTENTS = ['pricing', 'agency', 'company', 'consulting', 'firm', 'experts', 'solutions', 'services', 'near-me', 'reviews'];

const METHODOLOGIES = {
  'it-strategy': ['foresight', 'architecture', 'value-realization'],
  'cloud-services': ['assess', 'migrate', 'optimize'],
  'cybersecurity': ['assess', 'fortify', 'monitor'],
  'digital-experience': ['discover', 'design', 'deliver'],
  'ai-automation': ['identify', 'build', 'scale'],
  'enterprise-seo': ['audit', 'engineer', 'dominate'],
  'digital-marketing': ['strategize', 'execute', 'optimize'],
  'social-capital': ['analyze', 'activate', 'amplify'],
  'custom-software': ['discovery-architecture', 'agile-development', 'launch-scale'],
  'brand-management': ['define', 'design', 'defend']
};

const CAPABILITIES = {
  'it-strategy': ['digital-operating-models', 'ma-technology-integration', 'enterprise-architecture', 'it-cost-optimization', 'vendor-management-strategy'],
  'cloud-services': ['hybrid-cloud-orchestration', 'cloud-native-development', 'devsecops-automation', 'mainframe-modernization', 'edge-computing'],
  'cybersecurity': ['identity-access-management-iam', 'penetration-testing-red-teaming', 'cloud-security-posture-management', 'governance-risk-compliance-grc', 'data-privacy-sovereign-protection'],
  'digital-experience': ['uxui-design-strategy', 'mobile-app-engineering', 'customer-data-platforms-cdp', 'e-commerce-optimization', 'arvr-immersive-experiences'],
  'ai-automation': ['generative-ai-solutions', 'predictive-analytics', 'robotic-process-automation-rpa', 'natural-language-processing', 'computer-vision-systems'],
  'enterprise-seo': ['international-seo', 'technical-seo-core-web-vitals', 'content-strategy-clustering', 'migration-seo-support', 'programmatic-seo'],
  'digital-marketing': ['commercial-video-photo-production', 'website-development-seo', 'social-media-handling', 'lead-generation-paid-advertising', 'marketing-automation'],
  'social-capital': ['corporate-rebranding', 'visual-identity-systems', 'crisis-communications', 'employer-branding', 'brand-governance'],
  'brand-management': ['corporate-rebranding', 'visual-identity-systems', 'crisis-communications', 'employer-branding', 'brand-governance'],
  'custom-software': ['web-application-development', 'mobile-app-development', 'saas-platform-engineering', 'api-design-microservices', 'devops-ci-cd-pipelines', 'legacy-system-modernization']
};

const entry = (loc, pri = '0.65', changefreq = 'monthly') =>
  `  <url><loc>${SITE}${loc}</loc><lastmod>${LASTMOD}</lastmod><changefreq>${changefreq}</changefreq><priority>${pri}</priority></url>`;

const writeSitemap = (filename, urls) => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
  fs.writeFileSync(path.resolve('public', filename), body);
  console.log(`  ${filename}: ${urls.length} URLs`);
};

console.log('Building sitemap index and sub-sitemaps...\n');

// -----------------------------------------------------------
// Core pages: homepage, services, industries, legal, about, etc.
// -----------------------------------------------------------
const core = [
  entry('/', '1.0', 'weekly'),
  entry('/onsective', '0.95', 'weekly'),
  entry('/about-onsective', '0.85', 'monthly'),
  entry('/onsective-enterprise', '0.85', 'monthly'),
  entry('/services', '0.95', 'weekly'),
  entry('/industries', '0.90', 'monthly'),
  entry('/platforms', '0.80', 'monthly'),
  entry('/insights', '0.90', 'daily'),
  entry('/about', '0.85', 'monthly'),
  entry('/contact', '0.85', 'monthly'),
  entry('/vision', '0.75', 'monthly'),
  entry('/careers', '0.75', 'weekly'),
  entry('/events', '0.70', 'weekly'),
  entry('/investors', '0.60', 'monthly'),
  entry('/alumni', '0.50', 'monthly'),
  entry('/resources', '0.75', 'monthly'),
  entry('/employee-handbook', '0.55', 'yearly'),
  entry('/privacy', '0.30', 'yearly'),
  entry('/terms', '0.30', 'yearly'),
  entry('/copyright', '0.25', 'yearly'),
  entry('/accessibility', '0.30', 'yearly'),
  // Service detail pages
  ...SERVICES.map(s => entry(`/services/${s}`, '0.90', 'monthly')),
  // Industry detail pages
  ...INDUSTRIES.map(i => entry(`/industries/${i}`, '0.80', 'monthly'))
];
writeSitemap('sitemap-core.xml', core);

// -----------------------------------------------------------
// Services: methodology + capability + location + industry + intent
// -----------------------------------------------------------
const services = [];
// Methodology
for (const [s, phases] of Object.entries(METHODOLOGIES)) {
  for (const p of phases) services.push(entry(`/services/${s}/methodology/${p}`, '0.75'));
}
// Capabilities
for (const [s, caps] of Object.entries(CAPABILITIES)) {
  for (const c of caps) services.push(entry(`/services/${s}/capability/${c}`, '0.70'));
}
// Service × Location
for (const s of SERVICES) for (const l of LOCATIONS) services.push(entry(`/services/${s}/in/${l}`, '0.70'));
// Service × Industry
for (const s of SERVICES) for (const i of INDUSTRIES) services.push(entry(`/services/${s}/for/${i}`, '0.70'));
// Service × Intent
for (const s of SERVICES) for (const it of INTENTS) services.push(entry(`/services/${s}/intent/${it}`, '0.60'));
// Industry × Location
for (const i of INDUSTRIES) for (const l of LOCATIONS) services.push(entry(`/industries/${i}/in/${l}`, '0.65'));
writeSitemap('sitemap-services.xml', services);

// -----------------------------------------------------------
// Guides (all /guides/:slug — blog-500 + blog-300 + DM guides + originals)
// -----------------------------------------------------------
const guides = [];
// Topical guides from seo-landing
const TOPICAL = [
  'what-is-cloud-migration', 'aws-vs-azure-vs-gcp', 'kubernetes-enterprise-guide',
  'finops-explained', 'hybrid-cloud-architecture', 'mainframe-modernization',
  'devsecops-guide', 'cloud-native-explained', 'serverless-architecture',
  'edge-computing-enterprise', 'multi-cloud-strategy', 'cloud-security-posture',
  'zero-downtime-migration', 'cloud-cost-optimization', 'aws-migration-guide',
  'what-is-zero-trust', 'penetration-testing-guide', 'iam-best-practices',
  'soc-2-guide', 'iso-27001-guide', 'ransomware-defense', 'grc-explained',
  'data-privacy-guide', 'siem-vs-soar', 'supply-chain-security',
  'cloud-security-best-practices', 'incident-response-playbook',
  'social-engineering-defense', 'threat-intelligence-guide', 'vulnerability-management',
  'generative-ai-enterprise', 'llm-selection-guide', 'rag-architecture',
  'mlops-explained', 'ai-governance-framework', 'predictive-analytics-guide',
  'nlp-enterprise-applications', 'computer-vision-applications',
  'rpa-vs-intelligent-automation', 'ai-use-case-prioritization',
  'responsible-ai-framework', 'ai-agents-enterprise', 'model-drift-management',
  'llm-security', 'fine-tuning-vs-rag',
  'what-is-enterprise-seo', 'technical-seo-checklist', 'core-web-vitals-optimization',
  'international-seo-guide', 'programmatic-seo-guide', 'content-cluster-strategy',
  'site-migration-seo', 'schema-markup-guide', 'link-building-2026',
  'ecommerce-seo-guide', 'local-seo-guide', 'ai-seo-impact',
  'seo-analytics-guide', 'content-seo-guide', 'seo-for-saas',
  'google-ads-enterprise', 'meta-ads-guide', 'linkedin-ads-b2b',
  'marketing-attribution', 'marketing-automation-stack',
  'paid-social-vs-paid-search', 'content-marketing-framework',
  'abm-playbook', 'video-marketing-strategy', 'email-marketing-2026',
  'design-systems-guide', 'conversion-rate-optimization', 'accessibility-wcag',
  'mobile-first-design', 'progressive-web-apps', 'headless-cms-guide',
  'react-vs-nextjs', 'microservices-vs-monolith', 'saas-platform-architecture',
  'api-design-best-practices', 'legacy-modernization-strategy',
  'devops-ci-cd-guide', 'mobile-app-architecture', 'e-commerce-platform-selection',
  'ar-vr-enterprise',
  'brand-strategy-framework', 'visual-identity-guide', 'rebranding-playbook',
  'tone-of-voice-guide', 'employer-branding-framework', 'brand-governance-framework',
  'crisis-communications-playbook', 'brand-measurement', 'influencer-marketing-b2b',
  'social-media-strategy-enterprise'
];
for (const s of TOPICAL) guides.push(entry(`/guides/${s}`, '0.65'));

// DM keyword guides
const DM_GUIDES = [
  'what-is-digital-marketing', 'digital-marketing-definition', 'digital-marketing-meaning',
  'digital-marketing-explained', 'que-es-marketing-digital', 'mercadeo-digital',
  'agencia-de-marketing-digital', 'curso-de-marketing-digital',
  'o-que-e-marketing-digital', 'marketing-digital-pdf',
  'c-est-quoi-le-marketing-digital', 'formation-marketing-digital',
  'digital-marketing-la-gi', 'digital-marketing-toha', 'shuzi-yingxiao',
  'digital-marketing-courses', 'digital-marketing-course', 'digital-marketing-free-course',
  'best-digital-marketing-course', 'online-marketing-courses', 'marketing-courses-online',
  'marketing-courses', 'google-digital-marketing', 'google-ads-certification',
  'google-digital-garage', 'google-digital-marketing-certification',
  'hubspot-digital-marketing', 'digital-marketing-strategy', 'digital-marketing-strategies',
  'digital-marketing-tips', 'digital-marketing-funnel', 'how-to-start-digital-marketing',
  'digital-marketing-for-beginners', 'digital-marketing-basics', 'learn-digital-marketing',
  'digital-marketing-careers', 'digital-marketing-jobs', 'digital-marketing-specialist',
  'digital-marketing-manager', 'digital-marketing-executive', 'digital-marketer',
  'digital-marketing-internship', 'digital-marketing-salary',
  'digital-marketing-tools', 'digital-marketing-platforms', 'digital-marketing-channels',
  'types-of-digital-marketing', 'digital-marketing-services', 'digital-marketing-company',
  'digital-marketing-agency-near-me', 'best-digital-marketing-agency',
  'marketing-agencies', 'marketing-agency',
  'online-advertising', 'digital-advertising', 'internet-marketing', 'online-marketing',
  'web-marketing', 'digital-marketing-business', 'ai-in-digital-marketing',
  'digital-marketing-trends', 'benefits-of-digital-marketing', 'digital-marketing-examples',
  'digital-marketing-success', 'what-is-seo-in-digital-marketing',
  'digital-marketing-websites', 'digital-marketing-website',
  'digital-marketing-images', 'digital-marketing-institute', 'digital-services',
  'digital-technology', 'digital-agency', 'digital-market', 'media-marketing',
  'google-marketing', 'learn-digital-with-google', 'digital-marketing-digital-branding',
  'digital-marketing-pictures', 'digital-marketing-system', 'digital-marketing-pdf',
  'digital-marketing-certificate', 'what-includes-in-digital-marketing'
];
for (const s of DM_GUIDES) guides.push(entry(`/guides/${s}`, '0.65'));

// Blog-500 programmatic
const blog500Path = path.resolve('scripts/blog-500-slugs.json');
if (fs.existsSync(blog500Path)) {
  const blogSlugs = JSON.parse(fs.readFileSync(blog500Path, 'utf-8'));
  for (const s of blogSlugs) guides.push(entry(`/guides/${s}`, '0.60'));
}
// Blog-300 programmatic
const blog300Path = path.resolve('scripts/blog-300-slugs.json');
if (fs.existsSync(blog300Path)) {
  const slugs = JSON.parse(fs.readFileSync(blog300Path, 'utf-8'));
  for (const s of slugs) guides.push(entry(`/guides/${s}`, '0.55'));
}
writeSitemap('sitemap-guides.xml', guides);

// -----------------------------------------------------------
// Insights (original auto-generated)
// -----------------------------------------------------------
const insights = [];
for (let i = 1; i <= 560; i++) insights.push(entry(`/insights/insight-${i}`, '0.55'));
writeSitemap('sitemap-insights.xml', insights);

// -----------------------------------------------------------
// Sitemap index
// -----------------------------------------------------------
const children = ['sitemap-core.xml', 'sitemap-services.xml', 'sitemap-guides.xml', 'sitemap-insights.xml'];
const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children.map(c => `  <sitemap>
    <loc>${SITE}/${c}</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>
`;
fs.writeFileSync(path.resolve('public/sitemap.xml'), index);
console.log(`  sitemap.xml: index referencing ${children.length} sub-sitemaps`);

const total = core.length + services.length + guides.length + insights.length;
console.log(`\nTotal URLs across all sitemaps: ${total}`);
