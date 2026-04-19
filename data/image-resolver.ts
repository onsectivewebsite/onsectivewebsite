// ============================================================
// Onsective — Category-Relevant Image Resolver
//
// Replaces generic picsum.photos random-nature stock with
// Unsplash-sourced, topic-relevant photography. Each post gets a
// deterministic but visually distinct image based on its slug +
// category.
//
// Approach:
//   1. Each category maps to a set of keyword clusters (5-10 per
//      category) that describe relevant visuals.
//   2. Slug hash -> picks one cluster from the category's set.
//   3. Unsplash Source returns a high-res photo matching the
//      keyword query. Different clusters within a category yield
//      visually distinct images without losing relevance.
// ============================================================

// Picsum list IDs curated from Unsplash-indexed photos. Large enough
// (~100) that even with hash bucketing, posts rarely repeat.
const KEYWORD_CLUSTERS: Record<string, string[]> = {
  'Digital Marketing': [
    'digital-marketing,laptop,dashboard',
    'advertising,campaign,planning',
    'marketing,analytics,data',
    'social-media,engagement,content',
    'growth,strategy,metrics',
    'customer-journey,funnel,conversion',
    'marketing-team,collaboration,workspace',
    'digital-advertising,screen,ads',
    'roi,results,business',
    'content-marketing,publishing'
  ],
  'SEO': [
    'search-engine-optimization,magnifying-glass,browser',
    'keywords,research,analytics',
    'google-search,serp,rankings',
    'website-audit,performance,speed',
    'technical-seo,code,developer',
    'content-strategy,writing,editorial',
    'link-building,network,connections',
    'backlinks,authority,trust',
    'site-migration,transition',
    'organic-traffic,growth-chart'
  ],
  'Google My Business': [
    'local-business,storefront,signage',
    'small-business,entrepreneur,shop',
    'map-pin,location,navigation',
    'customer-review,rating,stars',
    'local-marketing,community,neighborhood',
    'restaurant-exterior,cafe,service-area',
    'professional-office,business-front',
    'store-opening,business-hours',
    'local-seo,map,directions',
    'business-listing,profile,directory'
  ],
  'Social Media': [
    'linkedin-office,professional-network',
    'instagram-content,photography,lifestyle',
    'social-media-manager,phone,scroll',
    'content-creator,filming,video',
    'community-management,engagement',
    'influencer-marketing,creator,brand',
    'social-analytics,insights,dashboard',
    'hashtag,trends,viral',
    'social-strategy,team-meeting',
    'youtube-studio,filming,camera'
  ],
  'Content Marketing': [
    'content-creation,typing,keyboard',
    'editorial-meeting,brainstorm,notes',
    'blog-writing,coffee,laptop',
    'copywriter,pen,notebook',
    'content-strategy,whiteboard,planning',
    'storytelling,book,pages',
    'content-calendar,scheduling',
    'editorial-team,collaboration',
    'writer,focus,creative-work',
    'publishing,content-library'
  ],
  'Email Marketing': [
    'email-inbox,message,notification',
    'newsletter,subscribe,reader',
    'mailchimp-dashboard,campaign',
    'email-automation,workflow',
    'email-design,template,mockup',
    'inbox-zero,productivity',
    'email-deliverability,server,tech',
    'subscriber-list,database',
    'drip-campaign,scheduling',
    'transactional-email,notification'
  ],
  'Paid Advertising': [
    'google-ads,ppc-campaign,bidding',
    'meta-ads,facebook-manager',
    'advertising-budget,spend,chart',
    'programmatic-advertising,screens',
    'display-ads,banner,billboard',
    'paid-search,sem,query',
    'retargeting,audience,funnel',
    'performance-marketing,conversion',
    'ad-creative,design,campaign',
    'media-buying,agency,meeting'
  ],
  'Conversion Rate Optimization': [
    'ab-testing,variant,experiment',
    'landing-page,design,mockup',
    'checkout,ecommerce,purchase',
    'conversion-funnel,steps,analytics',
    'user-experience,ux-research',
    'heatmap,user-behavior',
    'form-optimization,signup',
    'customer-journey,touchpoints',
    'mobile-conversion,phone-checkout',
    'cta-button,click-through'
  ],
  'Analytics & Measurement': [
    'data-analytics,dashboard,charts',
    'google-analytics,reporting',
    'data-visualization,graphs,trends',
    'business-intelligence,insights',
    'kpi-dashboard,metrics',
    'reporting-meeting,presentation',
    'data-scientist,computer,work',
    'attribution,multi-touch,journey',
    'ga4,universal-analytics',
    'bigquery,data-warehouse,sql'
  ],
  'Local SEO': [
    'local-map,navigation,city',
    'business-directory,listing',
    'local-reviews,testimonial,rating',
    'neighborhood-storefront,community',
    'local-search,mobile-phone',
    'restaurant-map,food,location',
    'retail-store,shopping,local',
    'service-area,contractor,van',
    'multi-location,brand,franchise',
    'local-advertising,flyer,billboard'
  ],
  'Custom Software': [
    'software-development,code-editor',
    'developer-workspace,multiple-screens',
    'programming,keyboard,dark-theme',
    'software-team,sprint-meeting',
    'mobile-app-development,iphone',
    'web-application,design,interface',
    'saas-platform,dashboard,saas',
    'api-integration,microservices',
    'devops,pipeline,deployment',
    'legacy-modernization,refactor'
  ],
  'Custom Software Development': [
    'software-engineer,laptop,coding',
    'developer-team,pair-programming',
    'product-development,agile,scrum',
    'full-stack,react,nodejs',
    'mobile-development,ios,android',
    'saas-application,dashboard,platform',
    'api-gateway,microservices,architecture',
    'cloud-native,kubernetes,devops',
    'software-architecture,diagram',
    'github,repository,commit'
  ],
  'Cybersecurity': [
    'cybersecurity,lock,shield',
    'network-security,server-rack,enterprise',
    'data-protection,encryption,privacy',
    'ethical-hacker,penetration-testing',
    'security-operations-center,monitoring',
    'zero-trust-architecture,identity',
    'incident-response,forensics',
    'compliance,audit,standards',
    'cyber-defense,firewall,threat',
    'vpn,secure-connection,tunnel'
  ],
  'Cybersecurity Depth': [
    'cybersecurity,hacker,dark-screen',
    'network-monitoring,soc,analyst',
    'penetration-test,red-team',
    'security-audit,compliance-report',
    'zero-trust,identity-verification',
    'data-encryption,cryptography',
    'endpoint-protection,antivirus',
    'security-dashboard,siem',
    'incident-response,breach',
    'cloud-security,aws-azure'
  ],
  'Cloud': [
    'cloud-computing,data-center,servers',
    'aws-infrastructure,cloud-architecture',
    'kubernetes,containers,orchestration',
    'server-room,network-cables',
    'cloud-migration,transition',
    'data-storage,hard-drives',
    'cloud-engineer,laptop',
    'multi-cloud,hybrid-architecture',
    'devops,ci-cd,pipeline',
    'serverless,lambda,functions'
  ],
  'Cloud Architecture': [
    'cloud-infrastructure,datacenter',
    'server-rack,network-lights',
    'cloud-platform,aws,azure',
    'kubernetes-cluster,orchestration',
    'cloud-engineer,terminal,laptop',
    'cloud-security,encryption',
    'devops-pipeline,automation',
    'cloud-monitoring,observability',
    'microservices,containers,docker',
    'hybrid-cloud,edge-computing'
  ],
  'AI': [
    'artificial-intelligence,robot,technology',
    'machine-learning,neural-network',
    'data-science,algorithm,math',
    'ai-research,laboratory,chip',
    'chatbot,conversation,interface',
    'deep-learning,brain,visualization',
    'ai-dashboard,prediction,forecast',
    'computer-vision,image-recognition',
    'natural-language-processing,speech',
    'robotic-process-automation'
  ],
  'AI & Machine Learning': [
    'artificial-intelligence,neural-circuits',
    'machine-learning,data-pipeline',
    'generative-ai,llm,large-language-model',
    'data-scientist,jupyter-notebook',
    'ai-workflow,algorithm,model',
    'mlops,kubeflow,tensorflow',
    'computer-vision,object-detection',
    'deep-learning,gpu-training',
    'ai-ethics,responsible-ai',
    'vector-database,embeddings'
  ],
  'IT Strategy': [
    'it-strategy,planning,whiteboard',
    'enterprise-architecture,diagram',
    'cio-boardroom,executive-meeting',
    'digital-transformation,leadership',
    'technology-roadmap,timeline',
    'it-governance,framework',
    'business-strategy,consulting',
    'technology-portfolio,review',
    'executive-briefing,presentation',
    'operating-model,restructure'
  ],
  'Industry Playbooks': [
    'business-playbook,strategy,pages',
    'industry-analysis,research',
    'executive-insights,reading',
    'case-study,document,presentation',
    'industry-expertise,meeting',
    'sector-analysis,charts',
    'advisory-meeting,consultant',
    'enterprise-transformation',
    'industry-trends,forecast',
    'case-study,client-success'
  ],
  'Tools & Comparisons': [
    'software-comparison,screens',
    'product-evaluation,matrix',
    'tool-selection,checklist',
    'side-by-side,comparison',
    'technology-stack,logos',
    'enterprise-tools,software',
    'vendor-evaluation,review',
    'saas-platforms,dashboards',
    'tech-review,laptop-workspace',
    'product-demo,screen-share'
  ],
  'How-To Deep Dives': [
    'tutorial,step-by-step,guide',
    'learning,study,book',
    'how-to-guide,instructions',
    'hands-on-lab,practice',
    'educational-content,classroom',
    'screen-tutorial,video',
    'expert-instruction,mentor',
    'technical-documentation',
    'training-session,whiteboard',
    'practical-exercise,workshop'
  ],
  'Experience': [
    'user-experience,design-studio',
    'ux-research,interview,participant',
    'prototype,wireframe,figma',
    'design-system,components,library',
    'mobile-design,iphone-mockup',
    'design-collaboration,team-workshop',
    'usability-testing,observation',
    'accessibility,inclusive-design',
    'design-thinking,post-its,whiteboard',
    'brand-design,identity-guidelines'
  ],
  'Brand': [
    'brand-strategy,guidelines,book',
    'visual-identity,logo-design',
    'rebranding,fresh-identity',
    'brand-workshop,creative-team',
    'brand-storytelling,presentation',
    'corporate-identity,stationery',
    'brand-photography,lifestyle',
    'brand-voice,messaging',
    'employer-brand,recruitment',
    'brand-measurement,metrics'
  ]
};

// Fallback when category not in the map above.
const FALLBACK_CLUSTERS = [
  'business-technology,office,professional',
  'consulting,meeting,whiteboard',
  'enterprise,corporate,modern-office',
  'digital-transformation,technology',
  'strategy,planning,executive'
];

// Stable hash from a string.
const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
};

/**
 * Resolve an image URL for a given post slug + category.
 * Uses Unsplash Source with category-relevant keywords so the image
 * is always on-topic rather than random.
 */
export const resolveImage = (slug: string, category: string, width = 1200, height = 750): string => {
  const clusters = KEYWORD_CLUSTERS[category] || FALLBACK_CLUSTERS;
  const idx = hash(slug) % clusters.length;
  const keywords = clusters[idx];
  // Double-hash bucket across the Unsplash collection for variety.
  const bucket = hash(slug + idx) % 1000;
  return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(keywords)}&sig=${bucket}`;
};

/**
 * Resolve image URL for a generic slug without a category.
 */
export const resolveImageGeneric = (slug: string, width = 1200, height = 750): string =>
  resolveImage(slug, 'Digital Marketing', width, height);
