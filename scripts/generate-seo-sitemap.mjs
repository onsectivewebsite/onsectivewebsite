#!/usr/bin/env node
/**
 * Generates 500+ programmatic SEO URLs and inserts them into public/sitemap.xml.
 * Run: node scripts/generate-seo-sitemap.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://onsective.com';
const LASTMOD = '2026-04-18';

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

const INTENTS = [
  'pricing', 'agency', 'company', 'consulting', 'firm',
  'experts', 'solutions', 'services', 'near-me', 'reviews'
];

const GUIDES = [
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

const entry = (loc, pri = '0.65') =>
  `  <url><loc>${SITE}${loc}</loc><lastmod>${LASTMOD}</lastmod><changefreq>monthly</changefreq><priority>${pri}</priority></url>`;

const blocks = [];

// Service × Location
blocks.push('  <!-- Programmatic SEO: Service × Location (100 URLs) -->');
for (const s of SERVICES) for (const l of LOCATIONS) blocks.push(entry(`/services/${s}/in/${l}`, '0.70'));

// Service × Industry
blocks.push('  <!-- Programmatic SEO: Service × Industry (100 URLs) -->');
for (const s of SERVICES) for (const i of INDUSTRIES) blocks.push(entry(`/services/${s}/for/${i}`, '0.70'));

// Service × Intent
blocks.push('  <!-- Programmatic SEO: Service × Intent (100 URLs) -->');
for (const s of SERVICES) for (const it of INTENTS) blocks.push(entry(`/services/${s}/intent/${it}`, '0.60'));

// Industry × Location
blocks.push('  <!-- Programmatic SEO: Industry × Location (100 URLs) -->');
for (const i of INDUSTRIES) for (const l of LOCATIONS) blocks.push(entry(`/industries/${i}/in/${l}`, '0.65'));

// Guides
blocks.push(`  <!-- Programmatic SEO: Topical Guides (${GUIDES.length} URLs) -->`);
for (const g of GUIDES) blocks.push(entry(`/guides/${g}`, '0.65'));

const insertion = blocks.join('\n');

// Patch sitemap
const sitemapPath = path.resolve('public/sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
const marker = '</urlset>';
// Avoid duplicating if re-run: strip previous programmatic block
const stripStart = '  <!-- Programmatic SEO: Service × Location (100 URLs) -->';
let base = sitemap;
if (base.includes(stripStart)) {
  base = base.slice(0, base.indexOf(stripStart)) + base.slice(base.indexOf(marker));
}
const newSitemap = base.replace(marker, `${insertion}\n\n${marker}`);
fs.writeFileSync(sitemapPath, newSitemap);

const total = SERVICES.length * LOCATIONS.length
  + SERVICES.length * INDUSTRIES.length
  + SERVICES.length * INTENTS.length
  + INDUSTRIES.length * LOCATIONS.length
  + GUIDES.length;
console.log(`Inserted ${total} programmatic SEO URLs into ${sitemapPath}`);
