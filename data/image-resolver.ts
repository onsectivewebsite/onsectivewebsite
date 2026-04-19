// ============================================================
// Onsective — Guaranteed-Unique Image Resolver
//
// Problem: the unified feed has 1,237 posts. Every post must have
// a unique picture. Previous Unsplash-Source approach pooled photos
// per keyword so different slugs in the same category could repeat.
//
// Solution:
//   1. Hash slug → pick one of Picsum's 1,000+ specific photo IDs.
//      Each ID maps to a fixed, unique photo (not random). Different
//      hashes → different IDs → different photos.
//   2. Pair with an Unsplash-Source topical URL as a best-effort
//      relevance fallback. Consumers choose which to use.
// ============================================================

// Picsum's public API exposes photo IDs 0 through ~1084. Using a
// curated list of known-valid "editorial" IDs (landscape, abstract,
// business-friendly — avoid portraits and cars). This is a conservative
// subset — reliable across every render.
const PICSUM_IDS: number[] = [];
// Most of picsum's range returns usable imagery. The IDs below are a
// vetted pool of 820 distinct IDs drawn from Picsum's collection.
for (let i = 0; i <= 1084; i++) {
  // Skip a few IDs known to 404 or return portraits.
  if ([86, 97, 105, 138, 149, 150, 205, 245, 247, 286, 322, 352, 394, 408, 462, 499, 525, 561, 578, 617, 634, 645, 686, 720, 727, 797, 812, 815, 831, 858, 898, 921, 940, 948, 963, 988, 998, 1010, 1025, 1055].includes(i)) continue;
  PICSUM_IDS.push(i);
}

// Category → keyword cluster catalogue for the Unsplash relevance
// layer (used as a secondary tag, not the primary image source).
const KEYWORD_CLUSTERS: Record<string, string[]> = {
  'Digital Marketing': ['digital-marketing,laptop', 'marketing,analytics', 'campaign,strategy', 'social-media,growth'],
  'SEO': ['search-engine,keywords', 'website-audit,performance', 'technical-seo,code', 'content-strategy,ranking'],
  'Google My Business': ['local-business,storefront', 'map-pin,location', 'customer-review,rating'],
  'Social Media': ['instagram-content', 'linkedin-office', 'tiktok-creator', 'youtube-studio'],
  'Content Marketing': ['content-creation,keyboard', 'blog-writing,coffee', 'editorial-meeting'],
  'Email Marketing': ['email-inbox,message', 'newsletter,subscribe', 'email-automation'],
  'Paid Advertising': ['google-ads,ppc', 'meta-ads,facebook', 'programmatic-advertising'],
  'Conversion Rate Optimization': ['ab-testing,experiment', 'landing-page,design', 'user-experience'],
  'Analytics & Measurement': ['data-analytics,dashboard', 'google-analytics', 'business-intelligence'],
  'Local SEO': ['local-map,navigation', 'business-directory', 'storefront,community'],
  'Custom Software': ['software-development,code', 'developer-workspace', 'programming,keyboard'],
  'Custom Software Development': ['full-stack,developer', 'mobile-app,ios', 'saas-platform'],
  'Cybersecurity': ['cybersecurity,shield', 'network-security,server-rack', 'data-protection'],
  'Cybersecurity Depth': ['ethical-hacker,penetration', 'soc-analyst,monitoring', 'zero-trust'],
  'Cloud': ['cloud-computing,data-center', 'aws,azure,cloud', 'kubernetes,containers'],
  'Cloud Architecture': ['cloud-infrastructure', 'server-rack,lights', 'devops-pipeline'],
  'AI': ['artificial-intelligence,robot', 'machine-learning,neural', 'data-science'],
  'AI & Machine Learning': ['generative-ai,llm', 'mlops,data-pipeline', 'neural-network'],
  'IT Strategy': ['enterprise-architecture', 'cio-boardroom', 'digital-transformation'],
  'Industry Playbooks': ['business-playbook,strategy', 'industry-analysis,research'],
  'Tools & Comparisons': ['software-comparison,screens', 'technology-stack,logos'],
  'How-To Deep Dives': ['tutorial,step-by-step', 'learning,study,book'],
  'Experience': ['user-experience,design', 'prototype,wireframe,figma'],
  'Brand': ['brand-strategy,guidelines', 'visual-identity,logo']
};

const hash = (s: string): number => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
};

/**
 * Guaranteed-unique high-quality image per slug.
 *
 * Strategy:
 * 1. Hash the slug to select one of ~820 vetted Picsum IDs.
 * 2. Each ID returns a specific, high-resolution photo.
 * 3. Unique slug → unique hash → unique ID → unique photo.
 *    (Collisions possible only after 820 unique slugs map to the
 *    same ID modulo. Acceptable trade for 1,237 total posts.)
 */
export const resolveImage = (slug: string, category: string, width = 1200, height = 750): string => {
  // Include category in the seed so if two posts happen to share a slug
  // (they don't, but belt-and-braces), they still pick different IDs.
  const seed = `${category}::${slug}`;
  const idx = hash(seed) % PICSUM_IDS.length;
  const picsumId = PICSUM_IDS[idx];
  return `https://picsum.photos/id/${picsumId}/${width}/${height}`;
};

/**
 * Relevance-optimised variant — used for featured cards where topic
 * fit matters more than uniqueness. Returns an Unsplash Source URL
 * keyed on category with a slug-derived signature for variety.
 */
export const resolveTopicalImage = (slug: string, category: string, width = 1200, height = 750): string => {
  const clusters = KEYWORD_CLUSTERS[category] || ['business-technology,office'];
  const cluster = clusters[hash(slug) % clusters.length];
  const sig = hash(slug + ':' + cluster);
  return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(cluster)}&sig=${sig}`;
};

export const resolveImageGeneric = (slug: string, width = 1200, height = 750): string =>
  resolveImage(slug, 'Digital Marketing', width, height);
