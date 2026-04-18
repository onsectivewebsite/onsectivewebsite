// ============================================================
// Onsective — Programmatic SEO Landing Page Data
// Powers 500+ unique SEO landing pages:
//   - 10 services × 10 locations = 100 (/services/:sid/in/:cid)
//   - 10 services × 10 industries = 100 (/services/:sid/for/:iid)
//   - 10 services × 10 intents = 100 (/services/:sid/intent/:iid)
//   - 10 industries × 10 locations = 100 (/industries/:iid/in/:cid)
//   - 100 topical guides (/guides/:slug)
// ============================================================

export interface SeoLocation {
  id: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  hub: string;
  lat: number;
  lng: number;
  flag: string;
}

export interface SeoIndustrySEO {
  id: string;
  name: string;
  shortName: string;
  aka: string[];
  regulations: string[];
  painPoints: string[];
  keyCapabilities: string[];
}

export interface SeoIntent {
  id: string;
  label: string;
  headline: (service: string) => string;
  intro: (service: string) => string;
  keywords: (service: string) => string;
}

export interface SeoGuide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  keywords: string;
  relatedService: string;
  sections: { heading: string; body: string }[];
}

// ============================================================
// LOCATIONS — 10 cities used for service × location & industry × location
// ============================================================
export const SEO_LOCATIONS: SeoLocation[] = [
  { id: 'toronto',    city: 'Toronto',    region: 'Ontario',       country: 'Canada',            countryCode: 'CA', hub: 'Global HQ',         lat: 43.6532, lng: -79.3832, flag: '🇨🇦' },
  { id: 'new-york',   city: 'New York',   region: 'New York',      country: 'United States',     countryCode: 'US', hub: 'Americas Hub',      lat: 40.7128, lng: -74.0060, flag: '🇺🇸' },
  { id: 'london',     city: 'London',     region: 'England',       country: 'United Kingdom',    countryCode: 'GB', hub: 'EMEA Hub',          lat: 51.5074, lng: -0.1278,  flag: '🇬🇧' },
  { id: 'dubai',      city: 'Dubai',      region: 'Dubai',         country: 'UAE',               countryCode: 'AE', hub: 'Middle East Hub',   lat: 25.2048, lng: 55.2708,  flag: '🇦🇪' },
  { id: 'mumbai',     city: 'Mumbai',     region: 'Maharashtra',   country: 'India',             countryCode: 'IN', hub: 'APAC Delivery',     lat: 19.0760, lng: 72.8777,  flag: '🇮🇳' },
  { id: 'singapore',  city: 'Singapore',  region: 'Singapore',     country: 'Singapore',         countryCode: 'SG', hub: 'APAC Hub',          lat: 1.3521,  lng: 103.8198, flag: '🇸🇬' },
  { id: 'sydney',     city: 'Sydney',     region: 'New South Wales', country: 'Australia',       countryCode: 'AU', hub: 'Oceania Hub',       lat: -33.8688, lng: 151.2093, flag: '🇦🇺' },
  { id: 'berlin',     city: 'Berlin',     region: 'Berlin',        country: 'Germany',           countryCode: 'DE', hub: 'EU Engineering',    lat: 52.5200, lng: 13.4050,  flag: '🇩🇪' },
  { id: 'san-francisco', city: 'San Francisco', region: 'California', country: 'United States',  countryCode: 'US', hub: 'West Coast Presence', lat: 37.7749, lng: -122.4194, flag: '🇺🇸' },
  { id: 'vancouver',  city: 'Vancouver',  region: 'British Columbia', country: 'Canada',         countryCode: 'CA', hub: 'Pacific Presence',   lat: 49.2827, lng: -123.1207, flag: '🇨🇦' },
];

// ============================================================
// INDUSTRIES (expanded SEO set — 10)
// ============================================================
export const SEO_INDUSTRIES: SeoIndustrySEO[] = [
  {
    id: 'banking',
    name: 'Banking & Financial Services',
    shortName: 'Banking',
    aka: ['Financial Services', 'Fintech', 'Capital Markets', 'Wealth Management', 'Insurance'],
    regulations: ['SOX', 'PCI-DSS', 'Basel III', 'FINRA', 'MiFID II', 'OSFI', 'FFIEC'],
    painPoints: ['legacy core banking', 'real-time payments', 'fraud detection', 'regulatory reporting', 'digital onboarding'],
    keyCapabilities: ['Cloud Migration', 'Cybersecurity', 'AI Automation', 'IT Strategy', 'Custom Software']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    shortName: 'Healthcare',
    aka: ['Hospitals', 'Pharma', 'Biotech', 'Medical Devices', 'Telemedicine', 'Digital Health'],
    regulations: ['HIPAA', 'HITECH', 'HL7/FHIR', 'GDPR', 'FDA 21 CFR Part 11', 'PHIPA'],
    painPoints: ['EHR interoperability', 'patient data privacy', 'telemedicine platforms', 'clinical AI', 'revenue cycle automation'],
    keyCapabilities: ['Cybersecurity', 'Custom Software', 'Cloud Services', 'AI Automation', 'Digital Experience']
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    shortName: 'Retail',
    aka: ['E-commerce', 'Omnichannel Retail', 'Direct-to-Consumer', 'Marketplaces'],
    regulations: ['PCI-DSS', 'CCPA', 'GDPR', 'ADA / WCAG'],
    painPoints: ['omnichannel inventory', 'personalisation at scale', 'checkout conversion', 'supply chain visibility', 'loyalty programs'],
    keyCapabilities: ['Digital Experience', 'Digital Marketing', 'Cloud Services', 'Enterprise SEO', 'Custom Software']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industry 4.0',
    shortName: 'Manufacturing',
    aka: ['Industrial', 'Aerospace', 'Automotive', 'Discrete Manufacturing', 'Process Manufacturing'],
    regulations: ['ISO 27001', 'IEC 62443', 'NIST 800-171', 'ITAR'],
    painPoints: ['OT/IT convergence', 'predictive maintenance', 'digital twins', 'quality assurance AI', 'supply chain optimisation'],
    keyCapabilities: ['AI Automation', 'IT Strategy', 'Cybersecurity', 'Cloud Services', 'Custom Software']
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    shortName: 'Energy',
    aka: ['Oil & Gas', 'Renewables', 'Electric Utilities', 'Grid Operators'],
    regulations: ['NERC CIP', 'FERC', 'ISO 27019', 'IEC 62351'],
    painPoints: ['grid modernisation', 'renewable integration', 'SCADA security', 'energy trading platforms', 'asset management AI'],
    keyCapabilities: ['Cybersecurity', 'IT Strategy', 'AI Automation', 'Cloud Services', 'Custom Software']
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    shortName: 'Technology',
    aka: ['SaaS', 'B2B Technology', 'Enterprise Software', 'Tech Startups'],
    regulations: ['SOC 2', 'ISO 27001', 'GDPR', 'CCPA'],
    painPoints: ['multi-tenant SaaS architecture', 'developer platforms', 'PLG funnel optimisation', 'pipeline generation', 'enterprise readiness'],
    keyCapabilities: ['Custom Software', 'Digital Marketing', 'Enterprise SEO', 'Cloud Services', 'Digital Experience']
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    shortName: 'Professional Services',
    aka: ['Consulting', 'Legal', 'Accounting', 'Advisory Firms'],
    regulations: ['ISO 27001', 'SOC 2', 'GDPR', 'Attorney-Client Privilege'],
    painPoints: ['thought leadership at scale', 'matter management', 'knowledge management', 'client acquisition', 'talent branding'],
    keyCapabilities: ['Brand Management', 'Enterprise SEO', 'Digital Marketing', 'Social Media Handling', 'Custom Software']
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    shortName: 'Education',
    aka: ['Higher Education', 'K-12', 'EdTech Platforms', 'Corporate Learning'],
    regulations: ['FERPA', 'COPPA', 'GDPR', 'WCAG / ADA'],
    painPoints: ['student information systems', 'online learning platforms', 'enrolment marketing', 'accessibility compliance'],
    keyCapabilities: ['Custom Software', 'Digital Marketing', 'Digital Experience', 'Cloud Services', 'Cybersecurity']
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    shortName: 'Government',
    aka: ['Federal', 'State & Provincial', 'Municipal', 'Defence', 'Intelligence'],
    regulations: ['FedRAMP', 'FISMA', 'NIST 800-53', 'ITAR', 'CSE (Canada)'],
    painPoints: ['sovereign cloud', 'citizen services portals', 'legacy modernisation', 'cyber defence', 'data sovereignty'],
    keyCapabilities: ['Cloud Services', 'Cybersecurity', 'IT Strategy', 'Custom Software', 'AI Automation']
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    shortName: 'Media',
    aka: ['Broadcasting', 'Publishing', 'Streaming', 'Gaming', 'Sports'],
    regulations: ['DMCA', 'GDPR', 'COPPA', 'Broadcasting Regulations'],
    painPoints: ['content distribution', 'rights management', 'audience analytics', 'subscription platforms', 'content personalisation'],
    keyCapabilities: ['Digital Experience', 'AI Automation', 'Cloud Services', 'Digital Marketing', 'Custom Software']
  }
];

// ============================================================
// INTENTS — 10 query modifiers
// ============================================================
export const SEO_INTENTS: SeoIntent[] = [
  {
    id: 'pricing',
    label: 'Pricing',
    headline: (s) => `${s} Pricing & Cost`,
    intro: (s) => `Transparent pricing and engagement models for ${s.toLowerCase()} — from diagnostic engagements to multi-year managed retainers. Onsective structures every commercial model around measurable institutional outcomes.`,
    keywords: (s) => `${s} pricing, ${s} cost, ${s} rates, ${s} hourly rate, ${s} fees, ${s} consulting cost, how much does ${s.toLowerCase()} cost`
  },
  {
    id: 'agency',
    label: 'Agency',
    headline: (s) => `${s} Agency`,
    intro: (s) => `Looking for a ${s.toLowerCase()} agency that delivers institutional-grade outcomes? Onsective operates as a boutique consulting institution — principal-led engagements, zero outsourcing, measurable ROI.`,
    keywords: (s) => `${s} agency, best ${s.toLowerCase()} agency, top ${s.toLowerCase()} agency, ${s.toLowerCase()} agency Toronto, ${s.toLowerCase()} agency Canada, ${s.toLowerCase()} agency near me`
  },
  {
    id: 'company',
    label: 'Company',
    headline: (s) => `${s} Company`,
    intro: (s) => `Onsective Enterprise Inc. is a leading ${s.toLowerCase()} company trusted by 120+ enterprise clients across 7+ sovereign markets. Our delivery model combines senior principal leadership with world-class engineering execution.`,
    keywords: (s) => `${s} company, best ${s.toLowerCase()} company, top ${s.toLowerCase()} companies, ${s.toLowerCase()} company Toronto, leading ${s.toLowerCase()} companies, enterprise ${s.toLowerCase()} company`
  },
  {
    id: 'consulting',
    label: 'Consulting',
    headline: (s) => `${s} Consulting`,
    intro: (s) => `${s} consulting delivered by senior principals — not junior contractors. Onsective's consulting practice embeds with your leadership team to engineer outcomes that compound into permanent competitive advantage.`,
    keywords: (s) => `${s} consulting, ${s} consultant, ${s} consulting firm, ${s.toLowerCase()} consulting services, ${s.toLowerCase()} consulting Toronto, top ${s.toLowerCase()} consulting firms`
  },
  {
    id: 'firm',
    label: 'Firm',
    headline: (s) => `${s} Firm`,
    intro: (s) => `Onsective is a tier-one ${s.toLowerCase()} firm headquartered in Toronto with global delivery across 7+ nations. Our firm is organised around sovereign engagement practices, each led by senior principals.`,
    keywords: (s) => `${s} firm, top ${s.toLowerCase()} firms, best ${s.toLowerCase()} firms, ${s.toLowerCase()} consulting firm, leading ${s.toLowerCase()} firm Canada`
  },
  {
    id: 'experts',
    label: 'Experts',
    headline: (s) => `${s} Experts`,
    intro: (s) => `Our ${s.toLowerCase()} experts are practitioners — former CTOs, architects, and operators who have built and defended the systems they now advise on. Onsective does not do theoretical consulting.`,
    keywords: (s) => `${s} experts, ${s.toLowerCase()} specialists, ${s.toLowerCase()} consultants, top ${s.toLowerCase()} experts, ${s.toLowerCase()} expert advice`
  },
  {
    id: 'solutions',
    label: 'Solutions',
    headline: (s) => `${s} Solutions`,
    intro: (s) => `${s} solutions architected for institutional scale — production-grade, measurable, and engineered to compound in value. Onsective's solutions are never off-the-shelf templates; they are bespoke blueprints tuned to your constraints.`,
    keywords: (s) => `${s} solutions, ${s.toLowerCase()} solution, enterprise ${s.toLowerCase()} solutions, best ${s.toLowerCase()} solutions, ${s.toLowerCase()} solutions provider`
  },
  {
    id: 'services',
    label: 'Services',
    headline: (s) => `${s} Services`,
    intro: (s) => `Onsective's ${s.toLowerCase()} services span diagnosis, architecture, build, and continuous optimisation. We deliver end-to-end across the full engagement lifecycle.`,
    keywords: (s) => `${s} services, best ${s.toLowerCase()} services, ${s.toLowerCase()} service provider, professional ${s.toLowerCase()} services, managed ${s.toLowerCase()} services`
  },
  {
    id: 'near-me',
    label: 'Near Me',
    headline: (s) => `${s} Near Me`,
    intro: (s) => `Looking for ${s.toLowerCase()} near you? Onsective operates from eight global hubs — Toronto, New York, London, Dubai, Mumbai, Singapore, Sydney, and Berlin — delivering locally with global standards.`,
    keywords: (s) => `${s} near me, ${s.toLowerCase()} near me, local ${s.toLowerCase()}, ${s.toLowerCase()} in my area, find ${s.toLowerCase()} near me`
  },
  {
    id: 'reviews',
    label: 'Reviews',
    headline: (s) => `${s} Reviews & Testimonials`,
    intro: (s) => `Enterprise leaders consistently rank Onsective's ${s.toLowerCase()} delivery in the top percentile — 4.9/5 aggregate rating, 99% client retention, and outcomes measured in P&L impact.`,
    keywords: (s) => `${s} reviews, best ${s.toLowerCase()} reviews, ${s.toLowerCase()} testimonials, ${s.toLowerCase()} ratings, ${s.toLowerCase()} client reviews`
  }
];

// ============================================================
// TOPICAL GUIDES — 100 evergreen SEO guides
// ============================================================
const guide = (slug: string, title: string, metaTitle: string, metaDescription: string, category: string, keywords: string, relatedService: string, sections: { heading: string; body: string }[]): SeoGuide =>
  ({ slug, title, metaTitle, metaDescription, category, keywords, relatedService, sections });

export const SEO_GUIDES: SeoGuide[] = [
  // --- CLOUD (15 guides) ---
  guide('what-is-cloud-migration', 'What Is Cloud Migration? A Complete Enterprise Guide',
    'What Is Cloud Migration? Complete Enterprise Guide | Onsective',
    'Cloud migration explained — the 6Rs framework, business case, execution phases, and common pitfalls. A complete enterprise guide from Onsective.',
    'Cloud', 'what is cloud migration, cloud migration guide, cloud migration 6Rs, cloud migration framework, enterprise cloud migration', 'cloud-services',
    [
      { heading: 'Cloud Migration Defined', body: 'Cloud migration is the structured relocation of applications, data, and infrastructure from on-premise environments to public, private, or hybrid cloud platforms. At enterprise scale, migration is less a technical exercise than a strategic rebalancing of capability, cost, and risk.' },
      { heading: 'The 6Rs Framework', body: 'Every workload follows one of six migration paths: Rehost (lift-and-shift), Replatform (lift-and-optimise), Refactor (re-architect), Repurchase (move to SaaS), Retain (keep on-prem), or Retire (decommission). Onsective classifies every workload in your estate against these Rs before a single byte moves.' },
      { heading: 'Why Migrations Fail', body: 'The top three reasons enterprise migrations fail: unclear business case, inadequate dependency mapping, and a lift-and-shift mindset that replicates inefficiency in the cloud. Our methodology eliminates all three.' }
    ]),
  guide('aws-vs-azure-vs-gcp', 'AWS vs Azure vs GCP: Choosing the Right Cloud for Your Enterprise',
    'AWS vs Azure vs GCP — Enterprise Comparison | Onsective',
    'Compare AWS, Microsoft Azure, and Google Cloud Platform across cost, services, sovereignty, and enterprise readiness. Onsective\'s principal-led comparison.',
    'Cloud', 'AWS vs Azure, AWS vs GCP, Azure vs GCP, cloud provider comparison, best cloud for enterprise', 'cloud-services',
    [
      { heading: 'Strength Per Provider', body: 'AWS leads on breadth and maturity. Azure dominates in enterprises heavily invested in Microsoft stacks. GCP excels at data and AI workloads. The right answer depends on your existing estate, team skills, and sovereignty requirements.' },
      { heading: 'Multi-Cloud Considerations', body: 'Most enterprises end up multi-cloud — but multi-cloud for its own sake is a tax. Every workload should have a clear rationale for its platform.' },
      { heading: 'Our Recommendation Framework', body: 'Onsective scores every candidate workload against compliance, latency, cost, skill availability, and vendor risk to produce a placement strategy defensible to the board.' }
    ]),
  guide('kubernetes-enterprise-guide', 'Kubernetes at Enterprise Scale: A Practical Guide',
    'Kubernetes Enterprise Guide | Onsective',
    'Running Kubernetes in production at enterprise scale — cluster architecture, security, observability, and FinOps. A practitioner\'s guide from Onsective.',
    'Cloud', 'Kubernetes enterprise, Kubernetes production, k8s enterprise, enterprise Kubernetes architecture, Kubernetes FinOps', 'cloud-services',
    [
      { heading: 'Cluster Architecture', body: 'Multi-tenant vs dedicated clusters, node pool strategy, regional topology — these decisions shape operational economics for years.' },
      { heading: 'Security & Compliance', body: 'Pod security standards, network policies, admission controllers, and supply chain attestation are non-negotiable at enterprise scale.' },
      { heading: 'Cost Governance', body: 'Without FinOps discipline, Kubernetes costs spiral. Our clients achieve 35% average reduction through rightsizing, bin-packing, and autoscaling tuning.' }
    ]),
  guide('finops-explained', 'FinOps Explained: Cloud Cost Governance That Compounds',
    'FinOps Explained | Cloud Cost Governance Guide | Onsective',
    'FinOps is cloud financial operations — the discipline that converts variable cloud spend into predictable institutional value. A comprehensive introduction from Onsective.',
    'Cloud', 'what is FinOps, FinOps guide, FinOps framework, cloud cost optimization, FinOps best practices', 'cloud-services',
    [
      { heading: 'What FinOps Is', body: 'FinOps is the operating model that makes every engineer cost-aware without slowing innovation. It is not cost-cutting — it is cost-governance that enables informed spending.' },
      { heading: 'The Three Phases', body: 'Inform (visibility), Optimise (rightsizing, commitments), Operate (automation, policy). Mature FinOps organisations cycle through all three continuously.' },
      { heading: 'Onsective\'s FinOps Practice', body: 'We typically recover 35% of annual cloud spend within the first quarter — enough to self-fund the engagement many times over.' }
    ]),
  guide('hybrid-cloud-architecture', 'Hybrid Cloud Architecture: When, Why, and How',
    'Hybrid Cloud Architecture Guide | Onsective',
    'Hybrid cloud combines on-premise, private, and public cloud. Learn when it\'s the right architecture, when it\'s a cost trap, and how to govern it.',
    'Cloud', 'hybrid cloud architecture, hybrid cloud guide, hybrid cloud strategy, hybrid cloud pros and cons', 'cloud-services',
    [
      { heading: 'When Hybrid Makes Sense', body: 'Sovereignty requirements, latency-sensitive workloads, and sunk-cost investments in on-premise infrastructure are the three honest reasons to run hybrid.' },
      { heading: 'Control Plane Considerations', body: 'A unified control plane — identity, network policy, observability — is what separates hybrid cloud from hybrid chaos.' },
      { heading: 'Operational Economics', body: 'Hybrid done badly is more expensive than either option alone. Governance discipline is the economic requirement.' }
    ]),
  guide('mainframe-modernization', 'Mainframe Modernisation: A Strangler-Fig Playbook',
    'Mainframe Modernisation Playbook | Onsective',
    'Mainframe modernisation without business disruption. The strangler-fig pattern, domain decomposition, and phased replacement — explained by Onsective.',
    'Cloud', 'mainframe modernization, mainframe migration, COBOL to Java, strangler fig pattern, legacy modernization', 'cloud-services',
    [
      { heading: 'Why Mainframes Are Hard', body: 'Decades of business logic, disappearing skills, and rising licensing costs make mainframe modernisation the hardest form of legacy retirement.' },
      { heading: 'The Strangler-Fig Pattern', body: 'Progressive replacement via API façades, data synchronisation, and phased traffic shifting. The mainframe is strangled, not killed in a big bang.' },
      { heading: 'Risk Management', body: 'Parallel-run, canary traffic, and full rollback capability at every phase. Our clients complete mainframe retirements with zero business disruption.' }
    ]),
  guide('devsecops-guide', 'DevSecOps: Shifting Security Left at Enterprise Scale',
    'DevSecOps Guide | Enterprise Security Automation | Onsective',
    'DevSecOps integrates security into every commit, build, and deploy. Learn the architecture, tooling, and governance that make it work at enterprise scale.',
    'Cloud', 'DevSecOps guide, DevSecOps best practices, shift-left security, DevSecOps pipeline, secure CI/CD', 'cloud-services',
    [
      { heading: 'Core Principle', body: 'Security as a property of the pipeline, not a human checkpoint. Every commit is scanned; every build is signed; every deploy is attested.' },
      { heading: 'Tool Chain', body: 'SAST, DAST, SCA, IaC scanning, container scanning, and runtime protection — integrated into a single policy-as-code fabric.' },
      { heading: 'Organisational Design', body: 'Platform engineering teams publish paved paths; feature teams consume them. Security is everyone\'s job — backed by automation.' }
    ]),
  guide('cloud-native-explained', 'Cloud Native: What It Really Means (And What It Does Not)',
    'Cloud Native Explained | Onsective',
    'Cloud native is more than containers. Learn the architecture principles, CNCF landscape, and enterprise adoption path from Onsective.',
    'Cloud', 'cloud native, cloud native architecture, cloud native application, CNCF, microservices cloud native', 'cloud-services',
    [
      { heading: 'The Definition', body: 'Cloud native applications are designed for elasticity, resilience, and continuous evolution. Containers are one expression — not the totality.' },
      { heading: 'The CNCF Landscape', body: 'From Kubernetes and Prometheus to Istio and Argo, the CNCF ecosystem is vast. Onsective helps enterprises select the subset that matters for their context.' },
      { heading: 'Adoption Phases', body: 'Lift-and-shift, replatform, refactor, redesign. The journey is incremental; the destination is compounding velocity.' }
    ]),
  guide('serverless-architecture', 'Serverless Architecture: Enterprise Benefits and Gotchas',
    'Serverless Architecture Enterprise Guide | Onsective',
    'Serverless architecture promises zero infrastructure management. Learn where it shines, where it hurts, and how to govern it at enterprise scale.',
    'Cloud', 'serverless architecture, AWS Lambda enterprise, serverless guide, serverless benefits, serverless gotchas', 'cloud-services',
    [
      { heading: 'The Upside', body: 'Zero infrastructure management, perfect elasticity, and pay-per-use economics for the right workloads.' },
      { heading: 'The Downside', body: 'Cold starts, vendor lock-in, debugging complexity, and cost unpredictability at high throughput.' },
      { heading: 'Where to Use It', body: 'Event processing, APIs with spiky traffic, glue code, and internal automation. Avoid for latency-critical high-throughput workloads.' }
    ]),
  guide('edge-computing-enterprise', 'Edge Computing: The Architecture Shift Enterprises Cannot Ignore',
    'Edge Computing Enterprise Guide | Onsective',
    'Edge computing processes data close to its source — eliminating latency and bandwidth cost. A strategic guide for enterprise architects.',
    'Cloud', 'edge computing guide, enterprise edge computing, edge architecture, edge vs cloud, edge computing benefits', 'cloud-services',
    [
      { heading: 'When Edge Matters', body: 'Industrial IoT, retail point-of-sale, connected vehicles, and AR/VR applications — anywhere the cost of a cloud round-trip is too high.' },
      { heading: 'The Governance Challenge', body: 'Thousands of edge nodes, each requiring updates, observability, and security. GitOps at the edge is how enterprises retain control.' },
      { heading: 'Economic Model', body: 'Edge is an optimisation, not a replacement. Most architectures will be cloud-primary with edge augmentation.' }
    ]),
  guide('multi-cloud-strategy', 'Multi-Cloud Strategy: When It Helps and When It Hurts',
    'Multi-Cloud Strategy Guide | Onsective',
    'Multi-cloud offers optionality but doubles complexity. Learn how enterprises make multi-cloud a strategic advantage rather than a tax.',
    'Cloud', 'multi-cloud strategy, multi cloud architecture, multi-cloud management, multi-cloud best practices', 'cloud-services',
    [
      { heading: 'Legitimate Use Cases', body: 'Regulatory requirements, vendor risk mitigation, best-of-breed service selection, and geographic coverage are the honest reasons to go multi-cloud.' },
      { heading: 'The Hidden Cost', body: 'Skills, tooling, and operational overhead compound in every cloud. Multi-cloud is a tax unless the optionality is actually used.' },
      { heading: 'Abstraction Patterns', body: 'Kubernetes, Terraform, and service mesh provide cross-cloud abstraction — at the cost of the cloud-native features that make each provider valuable.' }
    ]),
  guide('cloud-security-posture', 'Cloud Security Posture Management (CSPM) Explained',
    'CSPM Explained | Cloud Security Posture Management | Onsective',
    'CSPM is continuous visibility into cloud configuration and risk. Learn the architecture, tooling, and governance of enterprise CSPM.',
    'Cloud', 'CSPM, cloud security posture management, cloud misconfiguration, CSPM tools, cloud security audit', 'cybersecurity',
    [
      { heading: 'Why It Exists', body: 'The majority of cloud breaches originate from misconfigurations. CSPM is the discipline that makes misconfigurations visible and actionable.' },
      { heading: 'What It Does', body: 'Continuous inventory, policy evaluation, risk scoring, and automated remediation across AWS, Azure, GCP, and Kubernetes.' },
      { heading: 'Beyond CSPM', body: 'Modern CNAPP platforms extend CSPM with workload protection, identity analytics, and software supply chain security.' }
    ]),
  guide('zero-downtime-migration', 'Zero-Downtime Cloud Migration: How It Actually Works',
    'Zero-Downtime Migration Guide | Onsective',
    'Zero-downtime migrations aren\'t magic — they are choreography. Learn the patterns, rehearsal discipline, and rollback strategies Onsective uses.',
    'Cloud', 'zero downtime migration, zero downtime deployment, blue green migration, canary migration, parallel run', 'cloud-services',
    [
      { heading: 'The Three Patterns', body: 'Blue-green (switch at DNS/LB), canary (shift traffic progressively), and parallel-run (dual writes with shadow reads).' },
      { heading: 'Data Synchronisation', body: 'Change data capture (CDC) and atomic cutover protocols eliminate data loss and drift during the migration window.' },
      { heading: 'Rehearsal Discipline', body: 'Every migration is rehearsed in staging; every cutover has a rollback tested to production parity.' }
    ]),
  guide('cloud-cost-optimization', 'Cloud Cost Optimisation: 15 Levers That Actually Move the Needle',
    'Cloud Cost Optimisation Guide | Onsective',
    'Fifteen cloud cost optimisation levers — rightsizing, commitments, architectural changes, and organisational design. Onsective\'s complete playbook.',
    'Cloud', 'cloud cost optimization, AWS cost optimization, Azure cost optimization, GCP cost optimization, cloud savings', 'cloud-services',
    [
      { heading: 'Quick Wins', body: 'Rightsizing, idle resource elimination, reserved instances, and savings plans typically recover 15-20% within 90 days.' },
      { heading: 'Architectural Wins', body: 'Managed services, serverless conversion, spot/preemptible usage, and storage tiering compound savings further.' },
      { heading: 'Organisational Wins', body: 'FinOps culture — showback, chargeback, and cost-aware architecture reviews — make savings stick.' }
    ]),
  guide('aws-migration-guide', 'AWS Migration: The Complete Enterprise Playbook',
    'AWS Migration Playbook | Enterprise Guide | Onsective',
    'Migrating to AWS at enterprise scale — landing zones, MAP programme, wave execution, and FinOps governance. The complete playbook.',
    'Cloud', 'AWS migration, AWS MAP, AWS landing zone, migrate to AWS, AWS migration guide', 'cloud-services',
    [
      { heading: 'Landing Zone First', body: 'Accounts, organisations, SCPs, network topology, and identity federation — deployed before any workload arrives.' },
      { heading: 'Wave Execution', body: 'Workloads move in dependency-sequenced waves with automated validation and rollback at every step.' },
      { heading: 'Post-Migration Discipline', body: 'Reserved capacity, cost allocation, and Well-Architected reviews turn the migration into compounding value.' }
    ]),

  // --- CYBERSECURITY (15) ---
  guide('what-is-zero-trust', 'What Is Zero Trust Architecture? Explained by Practitioners',
    'What Is Zero Trust Architecture? | Onsective',
    'Zero Trust is an architecture, not a product. Learn the principles, reference architecture, and practical path from perimeter to Zero Trust.',
    'Cybersecurity', 'what is zero trust, zero trust architecture, zero trust model, zero trust principles, zero trust implementation', 'cybersecurity',
    [
      { heading: 'The Core Principle', body: 'Never trust, always verify. Every access request is authenticated, authorised, and continuously evaluated regardless of source.' },
      { heading: 'Reference Architecture', body: 'Identity, device, network, application, and data planes — each with explicit verification and least-privilege enforcement.' },
      { heading: 'The Path From Perimeter', body: 'Most enterprises will spend 3-5 years migrating. Onsective sequences the journey for maximum risk reduction per dollar spent.' }
    ]),
  guide('penetration-testing-guide', 'Penetration Testing: Beyond the Scanner Report',
    'Penetration Testing Enterprise Guide | Onsective',
    'Real penetration testing goes beyond automated scans. Learn the adversarial simulation methodology Onsective\'s red team applies.',
    'Cybersecurity', 'penetration testing guide, pen test, red team testing, adversarial simulation, TIBER-EU', 'cybersecurity',
    [
      { heading: 'Scanner vs Pen Test', body: 'Automated scanners find compliance weaknesses. Pen testers chain weaknesses into exploit paths. The difference is the threat actor\'s perspective.' },
      { heading: 'Red Team Methodology', body: 'External reconnaissance, initial access, privilege escalation, lateral movement, persistence, exfiltration — the full kill chain.' },
      { heading: 'Purple Team Handover', body: 'The real value is the purple-team phase: red and blue collaborating to improve detection for every technique discovered.' }
    ]),
  guide('iam-best-practices', 'Identity & Access Management: Enterprise Best Practices',
    'IAM Best Practices | Enterprise Guide | Onsective',
    'Identity is the new perimeter. Learn enterprise IAM architecture, from workforce identity through machine identity and privileged access.',
    'Cybersecurity', 'IAM best practices, identity access management, enterprise IAM, IAM architecture, privileged access management', 'cybersecurity',
    [
      { heading: 'Identity Fabric Design', body: 'Workforce, customer, partner, and machine identities under a unified policy and governance layer.' },
      { heading: 'Privileged Access Management', body: 'Just-in-time elevation, session recording, and zero standing privilege as institutional defaults.' },
      { heading: 'Continuous Verification', body: 'CAEP (Continuous Access Evaluation) replaces point-in-time authentication with real-time policy.' }
    ]),
  guide('soc-2-guide', 'SOC 2 Compliance: The Complete Enterprise Guide',
    'SOC 2 Compliance Guide | Onsective',
    'SOC 2 is the de facto trust certification for SaaS providers. Learn the scope, timeline, and audit strategy from Onsective\'s compliance practice.',
    'Cybersecurity', 'SOC 2 compliance, SOC 2 audit, SOC 2 Type 1, SOC 2 Type 2, SOC 2 certification', 'cybersecurity',
    [
      { heading: 'Trust Service Criteria', body: 'Security is mandatory; Availability, Processing Integrity, Confidentiality, and Privacy are optional. Scope selection shapes the audit.' },
      { heading: 'Type 1 vs Type 2', body: 'Type 1 is a point-in-time design assessment; Type 2 covers 3-12 months of operating effectiveness. Enterprise buyers want Type 2.' },
      { heading: 'Readiness Timeline', body: 'First-time certification typically takes 6-9 months from kickoff to auditor report. Onsective compresses this via automation.' }
    ]),
  guide('iso-27001-guide', 'ISO 27001 Certification: The Enterprise Path',
    'ISO 27001 Enterprise Guide | Onsective',
    'ISO 27001 is the global standard for information security management. Learn the ISMS framework, Annex A controls, and certification path.',
    'Cybersecurity', 'ISO 27001 certification, ISMS, ISO 27001 guide, ISO 27001 controls, ISO 27001 audit', 'cybersecurity',
    [
      { heading: 'ISMS Foundation', body: 'ISO 27001 certifies the management system, not individual products. Scope, context, and leadership commitment set the foundation.' },
      { heading: 'Annex A Controls', body: '93 controls across 4 themes (organisational, people, physical, technological). Selection is risk-driven, not checklist-driven.' },
      { heading: 'Audit Journey', body: 'Stage 1 (documentation), Stage 2 (effectiveness), surveillance audits (annually), recertification (every 3 years).' }
    ]),
  guide('ransomware-defense', 'Ransomware Defence: The Institutional Playbook',
    'Ransomware Defence Playbook | Onsective',
    'Ransomware is a business problem, not just an IT problem. Learn the prevention, detection, and recovery architecture that withstands modern ransomware.',
    'Cybersecurity', 'ransomware defense, ransomware prevention, ransomware recovery, ransomware playbook, ransomware protection', 'cybersecurity',
    [
      { heading: 'Prevention Architecture', body: 'MFA everywhere, EDR on every endpoint, network segmentation, privileged access controls, and backup immutability.' },
      { heading: 'Detection & Response', body: '24/7 SOC, SOAR playbooks, and well-rehearsed IR protocols compress time from initial access to containment.' },
      { heading: 'Recovery Capability', body: 'Immutable backups, tested restore procedures, and isolated recovery environments — the only reliable ransom negotiation tool is a working backup.' }
    ]),
  guide('grc-explained', 'GRC: Governance, Risk, and Compliance Unified',
    'GRC Explained | Enterprise Guide | Onsective',
    'GRC unifies policy, risk, control, and evidence management across every regulatory regime. Learn the unified operating model.',
    'Cybersecurity', 'GRC, governance risk compliance, GRC framework, enterprise GRC, unified control framework', 'cybersecurity',
    [
      { heading: 'Why Unified GRC', body: 'Fragmented compliance pays the control cost many times over. Unified GRC maps every control to every framework that needs it.' },
      { heading: 'Platform Selection', body: 'OneTrust, Drata, Vanta, Hyperproof — selection depends on scope, integrations, and team maturity.' },
      { heading: 'Evidence Automation', body: 'Modern GRC replaces annual audit sprints with continuous evidence collection — auditor-ready every day.' }
    ]),
  guide('data-privacy-guide', 'Data Privacy Engineering: Beyond Policy Documents',
    'Data Privacy Engineering Guide | Onsective',
    'Privacy is an engineered system: classification, encryption, consent, rights automation, and sovereignty controls. Learn how to build it.',
    'Cybersecurity', 'data privacy engineering, GDPR compliance, CCPA compliance, privacy by design, data protection', 'cybersecurity',
    [
      { heading: 'Classification Foundation', body: 'You cannot protect what you cannot see. Automated discovery and classification is the privacy foundation.' },
      { heading: 'Rights Automation', body: 'GDPR and CCPA rights (access, deletion, portability) must be fulfilled within weeks. Manual processes do not scale.' },
      { heading: 'Sovereignty Controls', body: 'Data residency, transfer impact assessments, and sovereign cloud deployment are now baseline requirements.' }
    ]),
  guide('siem-vs-soar', 'SIEM vs SOAR: Understanding the Modern SOC Stack',
    'SIEM vs SOAR Guide | Onsective',
    'SIEM collects; SOAR acts. Learn how modern Security Operations Centres combine both with XDR and threat intelligence.',
    'Cybersecurity', 'SIEM vs SOAR, SIEM SOAR integration, modern SOC, SOC architecture, SIEM tools', 'cybersecurity',
    [
      { heading: 'SIEM: Detection Engine', body: 'Log aggregation, correlation, and detection rule evaluation across all security telemetry.' },
      { heading: 'SOAR: Response Engine', body: 'Automated playbooks that contain, remediate, and report on security events without human latency.' },
      { heading: 'Modern Convergence', body: 'XDR platforms blur the lines, offering integrated detection and response from a single platform.' }
    ]),
  guide('supply-chain-security', 'Supply Chain Security: SLSA, SBOM, and Provenance',
    'Supply Chain Security Guide | Onsective',
    'Supply chain attacks exploit trust. Learn SLSA, SBOMs, Sigstore, and provenance attestation — the modern supply chain security stack.',
    'Cybersecurity', 'supply chain security, SLSA, SBOM, software supply chain, dependency security', 'cybersecurity',
    [
      { heading: 'The Modern Threat', body: 'SolarWinds, 3CX, xz-utils — adversaries attack where trust is assumed. Every dependency is a potential compromise path.' },
      { heading: 'SLSA Framework', body: 'Supply-chain Levels for Software Artifacts — a graduated maturity model from source integrity through hermetic builds.' },
      { heading: 'Tooling', body: 'SBOM generation (Syft, SPDX), signing (Cosign, Sigstore), and provenance attestation (in-toto) form the baseline.' }
    ]),
  guide('cloud-security-best-practices', 'Cloud Security Best Practices for Enterprises',
    'Cloud Security Best Practices | Onsective',
    'Cloud security best practices across AWS, Azure, and GCP — identity, network, data, and workload controls in institutional depth.',
    'Cybersecurity', 'cloud security best practices, AWS security, Azure security, GCP security, cloud security checklist', 'cybersecurity',
    [
      { heading: 'Identity Foundation', body: 'MFA, least privilege, centralised identity, and just-in-time elevation are non-negotiable.' },
      { heading: 'Network Controls', body: 'Default-deny segmentation, private endpoints, and egress controls complete the identity-centric perimeter.' },
      { heading: 'Data Controls', body: 'Encryption, key management sovereignty, DLP, and classification automation protect the crown jewels.' }
    ]),
  guide('incident-response-playbook', 'Incident Response: The Institutional Playbook',
    'Incident Response Playbook | Onsective',
    'Incident response is choreography rehearsed before the crisis. Learn the NIST phases, communications protocols, and forensic discipline.',
    'Cybersecurity', 'incident response, IR playbook, NIST 800-61, cyber incident response, security incident management', 'cybersecurity',
    [
      { heading: 'The NIST Phases', body: 'Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned. Every phase has defined owners and protocols.' },
      { heading: 'Communications Discipline', body: 'Regulators, customers, law enforcement, media — each channel has a scripted response timeline and spokesperson.' },
      { heading: 'Tabletop Rehearsal', body: 'Playbooks not rehearsed are playbooks that fail in the crisis. Quarterly tabletops are the minimum cadence.' }
    ]),
  guide('social-engineering-defense', 'Social Engineering Defence: Beyond Phishing Simulation',
    'Social Engineering Defence Guide | Onsective',
    'Social engineering is the dominant attack vector. Learn the defence architecture beyond annual phishing tests.',
    'Cybersecurity', 'social engineering defense, phishing defense, vishing, smishing, security awareness training', 'cybersecurity',
    [
      { heading: 'The Threat Spectrum', body: 'Email phishing is only one vector. Vishing, smishing, QR phishing, and AI-driven impersonation widen the attack surface.' },
      { heading: 'Technical Controls', body: 'DMARC/SPF/DKIM, passkey authentication, and anomaly-based UEBA reduce the success rate of social engineering.' },
      { heading: 'Human Layer', body: 'Role-based training, reporting culture, and verification protocols ("call me back on the known number") make humans part of the defence.' }
    ]),
  guide('threat-intelligence-guide', 'Threat Intelligence: From Feeds to Decisions',
    'Threat Intelligence Enterprise Guide | Onsective',
    'Threat intelligence is decision-support, not raw feeds. Learn the pyramid of pain, ATT&CK mapping, and operationalisation.',
    'Cybersecurity', 'threat intelligence, CTI, MITRE ATT&CK, threat intel feeds, threat intelligence program', 'cybersecurity',
    [
      { heading: 'Strategic to Tactical', body: 'Threat intelligence spans executive (strategic), operational (TTPs), and tactical (IOCs). Each informs different decisions.' },
      { heading: 'The Pyramid of Pain', body: 'IOCs are trivial to change; TTPs cost adversaries real effort to adjust. Detect on TTPs where possible.' },
      { heading: 'Operationalisation', body: 'Intel without action is cost. Every piece of intelligence should feed detection engineering, hunt hypotheses, or executive reporting.' }
    ]),
  guide('vulnerability-management', 'Vulnerability Management: Prioritisation That Actually Works',
    'Vulnerability Management Guide | Onsective',
    'CVSS is not enough. Learn EPSS, exploitability context, and risk-based vulnerability prioritisation that focuses remediation where it matters.',
    'Cybersecurity', 'vulnerability management, EPSS, CVSS, vulnerability prioritization, risk based vulnerability management', 'cybersecurity',
    [
      { heading: 'CVSS Alone Fails', body: 'CVSS is a severity score, not a risk score. Two CVEs with identical CVSS can have wildly different real-world risk.' },
      { heading: 'EPSS Integration', body: 'Exploit Prediction Scoring System estimates the likelihood of exploitation in the wild — the probability component CVSS omits.' },
      { heading: 'Business Context', body: 'Asset criticality, exposure, and compensating controls complete the risk picture. Patching everything equally is patching nothing priority.' }
    ]),

  // --- AI & ML (15) ---
  guide('generative-ai-enterprise', 'Generative AI in the Enterprise: A Practitioner\'s Guide',
    'Generative AI Enterprise Guide | Onsective',
    'Generative AI moves from demo to production through retrieval architectures, evaluation harnesses, and responsible governance. The practitioner\'s guide.',
    'AI', 'generative AI enterprise, enterprise GenAI, GenAI production, RAG architecture, responsible AI', 'ai-automation',
    [
      { heading: 'The Production Gap', body: 'Prompt-level experimentation is easy; production deployment requires grounding, evaluation, guardrails, and governance.' },
      { heading: 'RAG as Default', body: 'Retrieval-augmented generation is the default pattern — grounding model output in curated enterprise knowledge.' },
      { heading: 'Responsible AI', body: 'Explainability, fairness, audit trails, and human-in-the-loop controls are engineered in, not retrofitted.' }
    ]),
  guide('llm-selection-guide', 'LLM Selection: Enterprise Decision Framework',
    'LLM Selection Enterprise Framework | Onsective',
    'Selecting the right LLM for each enterprise use case — closed vs open, small vs large, general vs domain-tuned. Onsective\'s framework.',
    'AI', 'LLM selection, GPT vs Claude, LLM comparison, enterprise LLM, best LLM enterprise', 'ai-automation',
    [
      { heading: 'The Selection Matrix', body: 'Performance, cost, latency, privacy, and customisation shape LLM selection. No single model wins across all axes.' },
      { heading: 'Closed vs Open', body: 'Closed models (GPT, Claude, Gemini) lead on capability. Open models (Llama, Mistral) lead on sovereignty and customisation.' },
      { heading: 'Use-Case Match', body: 'Match model strength to use-case: large models for reasoning, small models for classification, domain-tuned models for specialisation.' }
    ]),
  guide('rag-architecture', 'RAG Architecture: Beyond the Naive Pattern',
    'RAG Architecture Guide | Onsective',
    'Naive RAG fails in production. Learn the patterns that work: hybrid retrieval, reranking, query rewriting, and evaluation harnesses.',
    'AI', 'RAG architecture, retrieval augmented generation, enterprise RAG, vector database, RAG best practices', 'ai-automation',
    [
      { heading: 'Why Naive RAG Fails', body: 'Vanilla embedding retrieval misses context, surfaces irrelevant passages, and hallucinates confidently. Production RAG requires sophistication.' },
      { heading: 'Hybrid Retrieval', body: 'Combine dense (semantic) and sparse (BM25) retrieval; rerank with cross-encoders; expand with query rewriting.' },
      { heading: 'Evaluation Harnesses', body: 'Ragas, TruLens, or custom harnesses measure groundedness, relevance, and faithfulness — the real quality signals.' }
    ]),
  guide('mlops-explained', 'MLOps Explained: From Notebook to Production',
    'MLOps Explained | Onsective',
    'MLOps is DevOps for machine learning. Learn the components, reference architecture, and maturity model.',
    'AI', 'MLOps, MLOps explained, machine learning operations, MLOps tools, MLOps pipeline', 'ai-automation',
    [
      { heading: 'The Components', body: 'Feature stores, model registries, training pipelines, serving infrastructure, monitoring, and governance — all integrated.' },
      { heading: 'Maturity Levels', body: 'Manual (notebook-deployed), automated training, automated deployment, continuous training. Most enterprises are stuck at Level 1.' },
      { heading: 'Tooling Stack', body: 'MLflow, Kubeflow, Feast, Airflow, Argo, Seldon — the open-source stack. Managed alternatives on every cloud.' }
    ]),
  guide('ai-governance-framework', 'AI Governance: The Institutional Framework',
    'AI Governance Framework | Onsective',
    'AI governance is not optional. Learn the framework — principles, policies, controls, oversight — that institutional AI deployment demands.',
    'AI', 'AI governance framework, responsible AI, AI policy, AI oversight, AI risk management', 'ai-automation',
    [
      { heading: 'The Four Pillars', body: 'Principles (what we believe), Policies (what we require), Controls (what we enforce), Oversight (who is accountable).' },
      { heading: 'Regulatory Landscape', body: 'EU AI Act, NIST AI RMF, ISO 42001 — the regulatory grid is tightening rapidly across every jurisdiction.' },
      { heading: 'Operational Embed', body: 'AI risk committees, model inventories, bias testing, and impact assessments become standard operating procedure.' }
    ]),
  guide('predictive-analytics-guide', 'Predictive Analytics: From Model to Operational Decision',
    'Predictive Analytics Enterprise Guide | Onsective',
    'Predictive analytics is decision-support, not reporting. Learn the architecture that turns models into operational impact.',
    'AI', 'predictive analytics, predictive modeling, predictive analytics use cases, enterprise predictive analytics', 'ai-automation',
    [
      { heading: 'The Decision-First Principle', body: 'Start from the decision, not the data. Every model should improve a specific, measurable operational decision.' },
      { heading: 'Feature Engineering', body: 'Canonical feature stores, feature lineage, and signal curation are where production predictive analytics lives or dies.' },
      { heading: 'Drift Management', body: 'Models degrade; drift is inevitable. Production systems detect drift and retrain automatically.' }
    ]),
  guide('nlp-enterprise-applications', 'NLP Enterprise Applications: Beyond Chatbots',
    'NLP Enterprise Applications | Onsective',
    'NLP unlocks 80% of enterprise data. Learn the applications — document AI, semantic search, sentiment, classification — that move the P&L.',
    'AI', 'NLP enterprise, NLP applications, document AI, semantic search, enterprise NLP use cases', 'ai-automation',
    [
      { heading: 'Document AI', body: 'OCR, layout-aware parsing, and LLM-based extraction automate invoice processing, contract analysis, and claims handling.' },
      { heading: 'Semantic Search', body: 'Vector search plus reranking replaces keyword search with intent-aware retrieval across enterprise knowledge.' },
      { heading: 'Sentiment and Classification', body: 'Fine-tuned transformers classify support tickets, route cases, and surface customer sentiment at scale.' }
    ]),
  guide('computer-vision-applications', 'Computer Vision Applications in Industry',
    'Computer Vision Industrial Applications | Onsective',
    'Computer vision powers quality inspection, inventory, safety, and clinical workflows. Learn the architecture and deployment patterns.',
    'AI', 'computer vision applications, industrial computer vision, vision AI, CV use cases, edge vision AI', 'ai-automation',
    [
      { heading: 'Industrial Inspection', body: 'Defect detection, assembly verification, and packaging validation run 24/7 with superhuman consistency.' },
      { heading: 'Retail & Inventory', body: 'Shelf monitoring, stock counting, and queue analytics automate historically manual retail operations.' },
      { heading: 'Clinical & Diagnostic', body: 'Radiology AI, pathology analysis, and patient monitoring extend clinical capacity — always with human-in-the-loop oversight.' }
    ]),
  guide('rpa-vs-intelligent-automation', 'RPA vs Intelligent Automation: What You Actually Need',
    'RPA vs Intelligent Automation Guide | Onsective',
    'RPA automates repetitive tasks; intelligent automation combines RPA with AI for end-to-end process transformation. Learn the difference.',
    'AI', 'RPA vs intelligent automation, intelligent automation, hyperautomation, RPA AI integration', 'ai-automation',
    [
      { heading: 'RPA Scope', body: 'Rules-based, repetitive, high-volume tasks — data entry, reconciliation, report generation. RPA excels here.' },
      { heading: 'Where RPA Breaks', body: 'Unstructured input, exceptions, judgment calls — RPA fails. This is where intelligent automation begins.' },
      { heading: 'End-to-End Automation', body: 'RPA + OCR + NLP + ML + orchestration = intelligent automation. Process transformation, not task automation.' }
    ]),
  guide('ai-use-case-prioritization', 'AI Use Case Prioritisation: The ROI-First Framework',
    'AI Use Case Prioritisation Framework | Onsective',
    'Most AI portfolios waste 80% of spend on use cases that cannot earn their cost of capital. Learn the prioritisation framework that works.',
    'AI', 'AI use case prioritization, AI ROI, AI business case, AI portfolio, AI strategy', 'ai-automation',
    [
      { heading: 'The ROI Matrix', body: 'Business value × technical feasibility × data readiness × change impact. Score every use case on all four.' },
      { heading: 'Quick Wins First', body: 'Ship a 90-day value use case before attempting the transformational moonshot. Credibility funds ambition.' },
      { heading: 'Portfolio Governance', body: 'Stage-gate capital releases against benefits realisation. Kill use cases that miss their first milestone.' }
    ]),
  guide('responsible-ai-framework', 'Responsible AI: The Engineering Framework',
    'Responsible AI Framework | Onsective',
    'Responsible AI is engineered, not promised. Learn the framework — fairness, explainability, robustness, accountability.',
    'AI', 'responsible AI, responsible AI framework, AI ethics, fairness AI, explainable AI', 'ai-automation',
    [
      { heading: 'Fairness Testing', body: 'Disparate impact analysis, slice-based evaluation, and counterfactual testing — run continuously, not once.' },
      { heading: 'Explainability', body: 'SHAP, LIME, counterfactual explanations make model decisions interpretable to auditors and affected users.' },
      { heading: 'Accountability', body: 'Model cards, datasheets, audit trails, and clear ownership transform AI from black box to governed asset.' }
    ]),
  guide('ai-agents-enterprise', 'AI Agents in the Enterprise: Hype vs Reality',
    'AI Agents Enterprise Guide | Onsective',
    'AI agents promise autonomous workflows. Learn what actually works in 2026, where agents fail, and how to deploy responsibly.',
    'AI', 'AI agents, enterprise AI agents, agentic AI, AI agent architecture, autonomous AI', 'ai-automation',
    [
      { heading: 'The Current State', body: 'Narrow, tool-using agents succeed in constrained workflows. Open-ended autonomous agents remain brittle.' },
      { heading: 'Where to Start', body: 'Customer support, code generation, research summarisation — bounded tasks with measurable quality signals.' },
      { heading: 'Governance Imperative', body: 'Agents act. Their actions need audit trails, spend limits, and human approval gates for consequential decisions.' }
    ]),
  guide('model-drift-management', 'Model Drift: Detection and Management at Enterprise Scale',
    'Model Drift Management | Onsective',
    'Models degrade. Learn the drift detection architecture and retraining cadence that keep production AI reliable over years.',
    'AI', 'model drift, concept drift, data drift, ML monitoring, model observability', 'ai-automation',
    [
      { heading: 'Types of Drift', body: 'Data drift (inputs change), concept drift (relationships change), label drift (ground truth changes). Each requires different detection.' },
      { heading: 'Detection Stack', body: 'Statistical tests, distribution monitoring, and performance regression — running continuously with alerting thresholds.' },
      { heading: 'Retraining Triggers', body: 'Time-based, performance-based, or drift-based triggers — each pattern fits different use cases.' }
    ]),
  guide('llm-security', 'LLM Security: Prompt Injection and Beyond',
    'LLM Security Guide | Onsective',
    'Prompt injection, training data poisoning, and model theft — the attack surface of production LLMs. Learn the defence.',
    'AI', 'LLM security, prompt injection, AI security, LLM vulnerabilities, OWASP LLM top 10', 'ai-automation',
    [
      { heading: 'OWASP LLM Top 10', body: 'Prompt injection, insecure output handling, training data poisoning, model DoS, supply chain, sensitive info leak, and more.' },
      { heading: 'Defence in Depth', body: 'Input validation, output filtering, system prompt isolation, least-privilege tool access, and continuous red-teaming.' },
      { heading: 'Runtime Guardrails', body: 'Guardrails AI, Rebuff, LLM Guard — frameworks that enforce policy at the model boundary.' }
    ]),
  guide('fine-tuning-vs-rag', 'Fine-Tuning vs RAG: The Enterprise Decision',
    'Fine-Tuning vs RAG Guide | Onsective',
    'When should you fine-tune an LLM vs use retrieval-augmented generation? Learn the decision framework with honest trade-offs.',
    'AI', 'fine-tuning vs RAG, LLM fine tuning, RAG vs fine-tune, when to fine-tune LLM', 'ai-automation',
    [
      { heading: 'RAG Strengths', body: 'Fresh knowledge, easy updates, citation capability, and lower cost. RAG is the default starting point.' },
      { heading: 'Fine-Tuning Strengths', body: 'Domain language, output formatting, behavioural tuning, and reduced prompt length. Fine-tune when RAG plateaus.' },
      { heading: 'The Combination', body: 'Best-in-class systems often combine both — fine-tuned models with RAG retrieval for domain-expert behaviour with current knowledge.' }
    ]),

  // --- SEO (15) ---
  guide('what-is-enterprise-seo', 'What Is Enterprise SEO? The Complete Introduction',
    'What Is Enterprise SEO? | Onsective',
    'Enterprise SEO is technical architecture plus content authority at scale. Learn what separates enterprise SEO from small-business SEO.',
    'SEO', 'what is enterprise SEO, enterprise SEO guide, enterprise SEO vs small business SEO, enterprise SEO strategy', 'enterprise-seo',
    [
      { heading: 'The Scale Difference', body: 'Enterprise SEO operates at millions of pages, dozens of stakeholders, and multi-market coverage. Tactics from small sites do not transfer.' },
      { heading: 'Technical Foundation', body: 'Crawl budget, rendering, indexation, and Core Web Vitals are the engineering concerns that separate enterprise SEO from content marketing.' },
      { heading: 'Authority at Scale', body: 'Programmatic content, topic clusters, and digital PR build authority in domains too competitive for artisanal SEO.' }
    ]),
  guide('technical-seo-checklist', 'Technical SEO Checklist for Enterprise Sites',
    'Technical SEO Checklist | Enterprise Edition | Onsective',
    'The technical SEO audit checklist that Onsective deploys for enterprise clients — crawlability, rendering, indexation, Core Web Vitals, schema, and more.',
    'SEO', 'technical SEO checklist, technical SEO audit, enterprise technical SEO, SEO audit checklist', 'enterprise-seo',
    [
      { heading: 'Crawlability', body: 'Robots, sitemaps, internal link architecture, crawl budget optimisation — the foundation of discoverability at scale.' },
      { heading: 'Rendering', body: 'Client-side vs server-side vs hybrid rendering — with JavaScript rendering audits via log files and Fetch-as-Googlebot.' },
      { heading: 'Indexation', body: 'Canonical strategy, hreflang, pagination, parameter handling, and noindex governance across millions of URLs.' }
    ]),
  guide('core-web-vitals-optimization', 'Core Web Vitals: The Engineering Guide',
    'Core Web Vitals Engineering Guide | Onsective',
    'LCP, INP, CLS — the Core Web Vitals engineering playbook. Real-world optimisation patterns that move field data, not just lab scores.',
    'SEO', 'Core Web Vitals, LCP optimization, INP optimization, CLS optimization, CWV guide', 'enterprise-seo',
    [
      { heading: 'LCP (Largest Contentful Paint)', body: 'Server response, resource priority, image optimisation, font loading, and critical CSS — the LCP levers ranked by impact.' },
      { heading: 'INP (Interaction to Next Paint)', body: 'Long tasks, input handler cost, scheduler yielding, and main-thread discipline determine INP. Replaced FID in 2024.' },
      { heading: 'CLS (Cumulative Layout Shift)', body: 'Dimensioned images, reserved ad slots, font-display discipline, and careful DOM insertion eliminate layout shift.' }
    ]),
  guide('international-seo-guide', 'International SEO: The Complete Playbook',
    'International SEO Playbook | Onsective',
    'Winning search across languages, countries, and search engines. Hreflang, ccTLDs, localisation, and Baidu/Yandex/Naver — the complete playbook.',
    'SEO', 'international SEO, hreflang guide, multilingual SEO, multi-country SEO, global SEO', 'enterprise-seo',
    [
      { heading: 'Domain Architecture', body: 'ccTLD, subdirectory, subdomain — each with trade-offs. Choose based on business model, resources, and target markets.' },
      { heading: 'Hreflang Precision', body: 'Reciprocal, self-referential, and x-default hreflang — the implementation discipline that prevents market cannibalisation.' },
      { heading: 'Beyond Google', body: 'Baidu (China), Yandex (Russia/CIS), Naver (Korea), Seznam (Czechia) — each with its own ranking signals and optimisation patterns.' }
    ]),
  guide('programmatic-seo-guide', 'Programmatic SEO: The Quality Framework',
    'Programmatic SEO Quality Framework | Onsective',
    'Programmatic SEO captures long-tail demand at scale — but done badly, it triggers penalties. Learn the quality framework that works.',
    'SEO', 'programmatic SEO, programmatic SEO examples, programmatic SEO strategy, pSEO, pSEO best practices', 'enterprise-seo',
    [
      { heading: 'Data Source Quality', body: 'Programmatic pages inherit the quality of their data. Canonical, accurate, unique data is the foundation.' },
      { heading: 'Template Quality', body: 'Templates must produce genuinely useful pages — unique headers, meaningful bodies, not thin scaffolding.' },
      { heading: 'Indexation Governance', body: 'Quality thresholds, noindex gates, and crawl budget discipline protect site authority from flood risk.' }
    ]),
  guide('content-cluster-strategy', 'Topic Clusters: The Authority-Building Strategy',
    'Topic Cluster SEO Strategy | Onsective',
    'Topic clusters build domain authority through architectural content design — pillar pages, cluster pages, and internal linking as one system.',
    'SEO', 'topic clusters, pillar page SEO, content cluster strategy, topical authority, hub and spoke content', 'enterprise-seo',
    [
      { heading: 'The Cluster Model', body: 'Pillar pages cover broad topics; cluster pages cover specific sub-topics; internal links bind them into an authority graph.' },
      { heading: 'Entity Depth', body: 'Modern search engines score entity coverage — the breadth and depth of concepts a site covers within a domain.' },
      { heading: 'Execution Discipline', body: 'Editorial calendars, SME production, and link architecture require sustained discipline over quarters, not sprints.' }
    ]),
  guide('site-migration-seo', 'Site Migration SEO: The Zero-Loss Playbook',
    'Site Migration SEO Playbook | Onsective',
    'Site migrations (replatforms, redesigns, domain moves) erase SEO investment unless executed with discipline. Learn the zero-loss playbook.',
    'SEO', 'site migration SEO, SEO migration checklist, domain migration SEO, replatform SEO, redesign SEO', 'enterprise-seo',
    [
      { heading: 'Pre-Migration Baseline', body: 'Crawl snapshot, ranking baseline, critical URL inventory — without these, you cannot measure post-migration impact.' },
      { heading: 'Redirect Architecture', body: '1:1 redirect mapping, canonical preservation, and legacy URL handling. One missed redirect is one lost ranking.' },
      { heading: 'Launch-Day Protocol', body: 'Staged rollout, real-time rank monitoring, and rapid remediation during the first 30/60/90 days post-launch.' }
    ]),
  guide('schema-markup-guide', 'Schema Markup: The Structured Data Strategy',
    'Schema Markup Enterprise Guide | Onsective',
    'Schema.org markup drives rich results, entity understanding, and voice search. The enterprise implementation guide.',
    'SEO', 'schema markup, structured data, JSON-LD, schema.org, rich results', 'enterprise-seo',
    [
      { heading: 'The Standards', body: 'Schema.org vocabulary, JSON-LD syntax, and Google\'s supported types drive the modern structured data stack.' },
      { heading: 'Type Selection', body: 'Organization, Product, Article, FAQ, HowTo, Event, BreadcrumbList — selection depends on content type and target rich result.' },
      { heading: 'Implementation Discipline', body: 'Validation, consistency with visible content, and maintenance through CMS changes separate effective schema from decorative.' }
    ]),
  guide('link-building-2026', 'Link Building in 2026: What Still Works',
    'Link Building in 2026 | Onsective',
    'Link building evolved. Learn what works in 2026 — digital PR, original research, editorial placements — and what no longer moves the needle.',
    'SEO', 'link building 2026, modern link building, digital PR, editorial link building, link building strategy', 'enterprise-seo',
    [
      { heading: 'What Still Works', body: 'Original research, data journalism, expert quotes, and editorial placements earn authority links at scale.' },
      { heading: 'What Does Not', body: 'Link exchanges, private blog networks, comment spam, and directory submissions are risk without reward.' },
      { heading: 'Measurement', body: 'Referring domain growth, topical relevance, and authority score progression — not raw backlink count — measure progress.' }
    ]),
  guide('ecommerce-seo-guide', 'E-Commerce SEO: The Category-Dominance Playbook',
    'E-Commerce SEO Playbook | Onsective',
    'E-commerce SEO combines technical architecture, category optimisation, and product schema. Learn the playbook for category dominance.',
    'SEO', 'ecommerce SEO, ecommerce SEO guide, product SEO, category page SEO, online store SEO', 'enterprise-seo',
    [
      { heading: 'Category Page Optimisation', body: 'Category pages are the revenue engine — keyword coverage, faceted navigation SEO, and content depth drive category rankings.' },
      { heading: 'Product Schema', body: 'Product, Offer, AggregateRating, and Review schema drive rich results that dominate SERPs.' },
      { heading: 'Technical Discipline', body: 'Faceted URL handling, canonical strategy, and crawl budget management prevent index bloat from destroying authority.' }
    ]),
  guide('local-seo-guide', 'Local SEO: The Multi-Location Playbook',
    'Local SEO Multi-Location Playbook | Onsective',
    'Local SEO for enterprises with multiple locations — Google Business Profile, local schema, citation consistency, and review velocity.',
    'SEO', 'local SEO, multi-location SEO, Google Business Profile, local SEO ranking factors, local search', 'enterprise-seo',
    [
      { heading: 'Google Business Profile', body: 'The single largest local ranking factor. Complete, active, and well-maintained profiles outrank competitors instantly.' },
      { heading: 'Citation Consistency', body: 'NAP (name, address, phone) consistency across directories — a simple discipline enterprises frequently fail.' },
      { heading: 'Review Velocity', body: 'Review quantity, quality, recency, and response rate shape local rankings. Passive review collection plateaus fast.' }
    ]),
  guide('ai-seo-impact', 'AI Overviews and SGE: How Search Is Changing',
    'AI Search Impact Guide | Onsective',
    'AI Overviews, SGE, and zero-click search are reshaping how users find information. Learn how enterprise SEO adapts.',
    'SEO', 'AI overviews, SGE, search generative experience, AI search, zero click search', 'enterprise-seo',
    [
      { heading: 'The Shift', body: 'AI-generated summaries appear above organic results. Zero-click queries capture traffic that used to click.' },
      { heading: 'The Adaptation', body: 'Optimise for citations, not clicks. Entity clarity, fact density, and structured data shape AI inclusion.' },
      { heading: 'Measurement Shifts', body: 'Traditional rank-tracking underrepresents AI citations. New measurement tools track brand mentions in AI responses.' }
    ]),
  guide('seo-analytics-guide', 'SEO Analytics: The Metrics That Actually Matter',
    'SEO Analytics Guide | Onsective',
    'SEO analytics beyond vanity metrics — attribution, incrementality, and the KPIs that link SEO to pipeline and revenue.',
    'SEO', 'SEO analytics, SEO metrics, SEO reporting, SEO KPI, SEO attribution', 'enterprise-seo',
    [
      { heading: 'Vanity vs Value', body: 'Sessions and rankings are vanity. Qualified leads, pipeline influenced, and revenue attributed are value.' },
      { heading: 'Attribution Discipline', body: 'Multi-touch attribution and incrementality testing separate SEO\'s real contribution from assisted conversions.' },
      { heading: 'Executive Reporting', body: 'Board-grade SEO reports tie organic investment to business outcomes — not to Ahrefs traffic score.' }
    ]),
  guide('content-seo-guide', 'Content SEO: The Quality Framework',
    'Content SEO Quality Framework | Onsective',
    'Content SEO is editorial discipline anchored in user intent. Learn the framework that separates content that ranks from content that doesn\'t.',
    'SEO', 'content SEO, SEO content strategy, content quality, E-E-A-T, content marketing SEO', 'enterprise-seo',
    [
      { heading: 'Intent Alignment', body: 'Every piece of content should match a specific query intent — informational, navigational, transactional, or commercial.' },
      { heading: 'E-E-A-T Signals', body: 'Experience, Expertise, Authoritativeness, Trustworthiness — the framework Google uses to evaluate content quality.' },
      { heading: 'Refresh Cadence', body: 'Content decays. Systematic refresh programmes keep rankings fresh and compound authority over years.' }
    ]),
  guide('seo-for-saas', 'SEO for SaaS Companies: The B2B Playbook',
    'SaaS SEO Playbook | Onsective',
    'SaaS SEO blends technical, content, and product-led growth. Learn the playbook that drives qualified pipeline at scale.',
    'SEO', 'SaaS SEO, B2B SEO, SaaS content marketing, SaaS SEO strategy, SaaS growth SEO', 'enterprise-seo',
    [
      { heading: 'Use-Case Content', body: 'Use-case pages, integrations pages, and alternatives pages capture high-intent B2B queries.' },
      { heading: 'Programmatic Integration Pages', body: 'Every integration or template is a landing page opportunity — with discipline, this scales to hundreds of qualified pages.' },
      { heading: 'Free Tool Strategy', body: 'Calculators, analysers, and free tools earn links and capture product-qualified leads.' }
    ]),

  // --- DIGITAL MARKETING (10) ---
  guide('google-ads-enterprise', 'Google Ads at Enterprise Scale: The Modern Playbook',
    'Google Ads Enterprise Playbook | Onsective',
    'Google Ads at enterprise scale — smart bidding, audience signals, Performance Max governance, and MMM integration.',
    'Marketing', 'Google Ads enterprise, Google Ads best practices, Performance Max, smart bidding, Google Ads strategy', 'digital-marketing',
    [
      { heading: 'Smart Bidding', body: 'tCPA, tROAS, Maximize Conversions — the bidding strategies that outperform manual management at enterprise scale.' },
      { heading: 'Audience Signals', body: 'First-party audiences, customer match, and enhanced conversions are the privacy-resilient targeting foundation.' },
      { heading: 'Performance Max Governance', body: 'Asset groups, audience signals, and exclusions — the discipline that extracts PMax value without losing control.' }
    ]),
  guide('meta-ads-guide', 'Meta Ads Strategy: Beyond the Algorithm',
    'Meta Ads Strategy Guide | Onsective',
    'Meta Ads (Facebook, Instagram) strategy in the post-iOS 14 era — Advantage+, CAPI, and creative velocity as the primary levers.',
    'Marketing', 'Meta Ads, Facebook Ads, Instagram Ads, Advantage+ campaigns, Meta Ads strategy', 'digital-marketing',
    [
      { heading: 'Post-Privacy Targeting', body: 'First-party data via CAPI, Advantage+ audiences, and broad targeting with creative variance are the new Meta playbook.' },
      { heading: 'Creative Velocity', body: 'Meta rewards creative diversity. The winning accounts ship 10-50x more creative variants than manual accounts.' },
      { heading: 'Measurement Reality', body: 'Platform-reported ROAS is optimistic. Incrementality tests and MMM deliver the honest numbers.' }
    ]),
  guide('linkedin-ads-b2b', 'LinkedIn Ads for B2B: The Enterprise Playbook',
    'LinkedIn Ads B2B Playbook | Onsective',
    'LinkedIn Ads is the B2B pipeline engine. Learn the targeting, creative, and measurement playbook for enterprise B2B.',
    'Marketing', 'LinkedIn Ads B2B, LinkedIn advertising, B2B LinkedIn strategy, account based marketing LinkedIn', 'digital-marketing',
    [
      { heading: 'ABM Integration', body: 'LinkedIn\'s company targeting is the single best ABM tool. Matched audiences + CRM integration = precision outreach.' },
      { heading: 'Creative for Executives', body: 'Thought leadership ads, document ads, and conversation ads outperform generic lead gen forms for C-suite audiences.' },
      { heading: 'Measurement', body: 'Pipeline velocity, opportunity creation, and influenced revenue — not CPL — are the LinkedIn success metrics that matter.' }
    ]),
  guide('marketing-attribution', 'Marketing Attribution: MTA, MMM, and the Hybrid Truth',
    'Marketing Attribution Hybrid Model | Onsective',
    'Single-source attribution is dead. Learn the MTA + MMM + incrementality hybrid that delivers defensible marketing measurement.',
    'Marketing', 'marketing attribution, multi touch attribution, MMM, marketing mix modeling, incrementality testing', 'digital-marketing',
    [
      { heading: 'Why Single Models Fail', body: 'MTA misses upper-funnel. MMM misses granular tactic optimisation. Incrementality is the gold standard but expensive.' },
      { heading: 'The Hybrid Architecture', body: 'MTA for tactical optimisation, MMM for portfolio allocation, incrementality for ground truth. Run all three.' },
      { heading: 'Executive Reporting', body: 'Reconcile MTA, MMM, and incrementality into a single narrative. Stakeholders need one number, not three conflicting ones.' }
    ]),
  guide('marketing-automation-stack', 'Marketing Automation Stack: HubSpot vs Marketo vs Salesforce',
    'Marketing Automation Stack Comparison | Onsective',
    'HubSpot, Marketo, Salesforce Marketing Cloud, Customer.io — which marketing automation stack fits your enterprise? An honest comparison.',
    'Marketing', 'marketing automation stack, HubSpot vs Marketo, Marketo vs Salesforce, marketing automation comparison', 'digital-marketing',
    [
      { heading: 'HubSpot Strengths', body: 'Ease of use, all-in-one platform, and rapid implementation. Fits growth-stage B2B and SMB-to-mid-market enterprises.' },
      { heading: 'Marketo Strengths', body: 'Complex segmentation, scoring, and nurture flows. Fits enterprise B2B with sophisticated lifecycle needs.' },
      { heading: 'Salesforce MC Strengths', body: 'Deep Salesforce integration, cross-channel orchestration at scale, and B2C-strong capabilities. Fits large B2C and Salesforce-native enterprises.' }
    ]),
  guide('paid-social-vs-paid-search', 'Paid Social vs Paid Search: Where to Spend',
    'Paid Social vs Paid Search Allocation | Onsective',
    'Paid social builds demand. Paid search captures it. Learn the allocation framework that balances both for compounding pipeline.',
    'Marketing', 'paid social vs paid search, marketing budget allocation, Google Ads vs Meta Ads, paid media mix', 'digital-marketing',
    [
      { heading: 'Funnel Role', body: 'Paid social excels at demand generation. Paid search excels at demand capture. Most enterprises need both.' },
      { heading: 'Budget Framework', body: '70/20/10, 60/30/10 — the allocation frameworks that balance demand generation, demand capture, and experimentation.' },
      { heading: 'Incrementality Calibration', body: 'Incrementality testing reveals which channel deserves marginal dollars — often different from platform-reported ROAS.' }
    ]),
  guide('content-marketing-framework', 'Content Marketing Framework: From Pipeline to Loyalty',
    'Content Marketing Enterprise Framework | Onsective',
    'Content marketing that drives pipeline — not just traffic. Learn the framework that integrates content, SEO, and demand generation.',
    'Marketing', 'content marketing framework, content strategy, B2B content marketing, content marketing ROI', 'digital-marketing',
    [
      { heading: 'Pipeline-Oriented Content', body: 'Every piece of content maps to a buyer stage and a qualification signal. Content without business design is expensive blogging.' },
      { heading: 'Distribution Architecture', body: 'Creation is 30% of effort; distribution is 70%. Email, social, syndication, and paid amplification are the multiplier.' },
      { heading: 'Measurement', body: 'Engaged visitors, content-assisted deals, and content-attributed revenue — the metrics that justify content investment.' }
    ]),
  guide('abm-playbook', 'Account-Based Marketing: The Enterprise Playbook',
    'ABM Enterprise Playbook | Onsective',
    'ABM orchestrates marketing and sales around named target accounts. Learn the playbook that generates qualified enterprise pipeline.',
    'Marketing', 'account based marketing, ABM playbook, B2B ABM, target account marketing, ABM strategy', 'digital-marketing',
    [
      { heading: 'Target Account Selection', body: 'Ideal customer profile + intent signals + firmographic fit = the target list. Most ABM fails at selection.' },
      { heading: 'Orchestration', body: 'Marketing plays, sales plays, and executive plays orchestrated across every target account over months.' },
      { heading: 'Measurement', body: 'Target account engagement, opportunity velocity, and win rate — not MQLs — measure ABM success.' }
    ]),
  guide('video-marketing-strategy', 'Video Marketing Strategy: Production, Distribution, Measurement',
    'Video Marketing Strategy Guide | Onsective',
    'Video marketing spans brand films, performance creative, and social video. Learn the integrated strategy.',
    'Marketing', 'video marketing strategy, video content marketing, video production for marketing, YouTube marketing', 'digital-marketing',
    [
      { heading: 'The Video Pyramid', body: 'Brand film (top), educational video (middle), performance creative (bottom). Each plays a different funnel role.' },
      { heading: 'Production Economics', body: 'Cinema-grade hero content + modular remix pipeline + user-generated content = scaled production economics.' },
      { heading: 'Distribution', body: 'YouTube, LinkedIn, Instagram, TikTok, CTV — each platform has format, length, and attention-pattern norms.' }
    ]),
  guide('email-marketing-2026', 'Email Marketing in 2026: Deliverability, Personalisation, Segmentation',
    'Email Marketing 2026 Guide | Onsective',
    'Email marketing remains the highest-ROI channel. Learn the deliverability, segmentation, and personalisation patterns that still work.',
    'Marketing', 'email marketing 2026, email deliverability, email segmentation, email personalization, email automation', 'digital-marketing',
    [
      { heading: 'Deliverability Foundation', body: 'DMARC, DKIM, SPF, domain reputation, and engagement signals determine whether emails reach inbox or spam.' },
      { heading: 'Segmentation Depth', body: 'Behavioural, lifecycle, and predictive segmentation outperforms demographic segmentation on every metric.' },
      { heading: 'Automation vs Campaigns', body: 'Lifecycle automations (welcome, onboarding, winback) deliver 60-70% of email revenue. Campaigns fill the gap.' }
    ]),

  // --- DIGITAL EXPERIENCE / SOFTWARE (15) ---
  guide('design-systems-guide', 'Design Systems: Build, Scale, Govern',
    'Design Systems Enterprise Guide | Onsective',
    'Design systems are institutional assets. Learn the architecture, governance, and economics of design systems at enterprise scale.',
    'Experience', 'design systems, enterprise design system, design system architecture, design tokens, component library', 'digital-experience',
    [
      { heading: 'Tokens, Components, Patterns', body: 'Design tokens codify visual primitives; components assemble them; patterns codify usage. Each layer has governance.' },
      { heading: 'Code-Design Parity', body: 'Figma and Storybook must stay in sync. Tooling (Tokens Studio, Style Dictionary) makes this automatic.' },
      { heading: 'Governance Economics', body: 'A design system pays back as the organisation scales. Below 5-10 product teams, the overhead may exceed benefit.' }
    ]),
  guide('conversion-rate-optimization', 'Conversion Rate Optimisation: The Engineering Discipline',
    'CRO Engineering Guide | Onsective',
    'CRO is continuous experimentation informed by behavioural analytics. Learn the process, tooling, and organisational design.',
    'Experience', 'conversion rate optimization, CRO, A/B testing, experimentation, CRO framework', 'digital-experience',
    [
      { heading: 'The CRO Loop', body: 'Research, hypothesise, prioritise, test, learn, scale. Each iteration compounds; each skipped iteration loses opportunity.' },
      { heading: 'Experimentation Platforms', body: 'Optimizely, VWO, LaunchDarkly — platform choice shapes experimentation velocity and statistical rigour.' },
      { heading: 'Organisational Design', body: 'Mature CRO requires product, engineering, design, and analytics collaboration. Isolated CRO teams plateau fast.' }
    ]),
  guide('accessibility-wcag', 'Web Accessibility (WCAG 2.1 AA): The Engineering Playbook',
    'Web Accessibility Engineering Guide | Onsective',
    'WCAG 2.1 AA compliance engineered from the design token layer up. Learn the architecture, tooling, and testing discipline.',
    'Experience', 'WCAG 2.1 AA, web accessibility, accessibility engineering, ADA compliance, inclusive design', 'digital-experience',
    [
      { heading: 'Accessibility as Architecture', body: 'Accessibility cannot be bolted on. Colour contrast, focus management, and semantic markup are token-layer concerns.' },
      { heading: 'Automated Testing', body: 'axe, pa11y, Lighthouse catch ~40% of issues. Manual testing and assistive-tech testing catch the rest.' },
      { heading: 'Legal and Commercial', body: 'ADA, AODA, EAA, and procurement requirements make accessibility a business imperative, not just a moral one.' }
    ]),
  guide('mobile-first-design', 'Mobile-First Design: Beyond the Buzzword',
    'Mobile-First Design Guide | Onsective',
    'Mobile-first is an architectural discipline, not a responsive media query. Learn what the phrase actually means in 2026.',
    'Experience', 'mobile first design, mobile UX, responsive design, mobile web performance, mobile design patterns', 'digital-experience',
    [
      { heading: 'Content Prioritisation', body: 'Mobile-first forces ruthless prioritisation of content and UI. Everything must earn its place on a small screen.' },
      { heading: 'Performance Budget', body: 'Mobile networks and CPUs are the performance bottleneck. Performance budgets enforced in CI keep experiences fast.' },
      { heading: 'Touch and Gesture', body: 'Touch targets, gestural affordances, and thumb zones reshape interaction design from the ground up.' }
    ]),
  guide('progressive-web-apps', 'Progressive Web Apps: When They Win',
    'Progressive Web Apps Guide | Onsective',
    'PWAs combine web reach with app-like experience. Learn when PWAs outperform native and when they do not.',
    'Experience', 'progressive web apps, PWA, PWA vs native, PWA guide, PWA best practices', 'digital-experience',
    [
      { heading: 'PWA Strengths', body: 'Install-free distribution, instant updates, SEO, and shared web codebase. PWAs win reach.' },
      { heading: 'Native Strengths', body: 'Deep OS integration, App Store presence, push notifications, performance. Native wins depth.' },
      { heading: 'The Hybrid Play', body: 'Many enterprises ship web, PWA, and native from a shared design system. The best of all worlds, at a cost.' }
    ]),
  guide('headless-cms-guide', 'Headless CMS: Selection and Architecture',
    'Headless CMS Selection Guide | Onsective',
    'Headless CMS separates content from presentation. Learn platform selection (Contentful, Sanity, Strapi) and architectural patterns.',
    'Experience', 'headless CMS, headless CMS comparison, Contentful vs Sanity, headless architecture, decoupled CMS', 'digital-experience',
    [
      { heading: 'Why Headless', body: 'Omnichannel delivery, developer experience, and scalability outperform monolithic CMS at enterprise scale.' },
      { heading: 'Platform Comparison', body: 'Contentful (enterprise), Sanity (developer-first), Strapi (self-hosted), Storyblok (visual editing). Selection depends on workflow priorities.' },
      { heading: 'Architectural Patterns', body: 'ISR, SSG, edge-rendered — the rendering strategies that match headless CMS to performance goals.' }
    ]),
  guide('react-vs-nextjs', 'React vs Next.js: When Each Wins',
    'React vs Next.js Guide | Onsective',
    'React is a library; Next.js is a framework. Learn when to use each — for SEO, performance, and developer experience.',
    'Experience', 'React vs Next.js, Next.js guide, React framework, when to use Next.js', 'digital-experience',
    [
      { heading: 'React Alone', body: 'SPA dashboards, internal tools, and cases where SEO is irrelevant. Minimal opinionation, maximum flexibility.' },
      { heading: 'Next.js', body: 'Marketing sites, e-commerce, SaaS marketing pages, and anywhere SEO matters. Server-rendering and routing baked in.' },
      { heading: 'The App Router', body: 'Next.js 13+ App Router is a paradigm shift — React Server Components, streaming, and nested layouts.' }
    ]),
  guide('microservices-vs-monolith', 'Microservices vs Monolith: The Honest Comparison',
    'Microservices vs Monolith Guide | Onsective',
    'Microservices trade complexity for scale. Learn when microservices pay off — and when the monolith is the right choice.',
    'Experience', 'microservices vs monolith, microservices architecture, monolith first, microservices guide', 'custom-software',
    [
      { heading: 'The Honest Trade-off', body: 'Microservices solve organisational and scale problems. They create operational and complexity problems. The trade is rarely net-positive below a certain scale.' },
      { heading: 'Monolith First', body: 'Most products should start monolithic. Extract services when organisational boundaries or scale demands it.' },
      { heading: 'Service Boundaries', body: 'Services should align with domains, not technical layers. Conway\'s Law applies ruthlessly.' }
    ]),
  guide('saas-platform-architecture', 'SaaS Platform Architecture: Multi-Tenancy Done Right',
    'SaaS Platform Architecture Guide | Onsective',
    'Multi-tenancy, billing, identity, and platform economics. The complete architectural guide for SaaS platforms.',
    'Experience', 'SaaS architecture, multi-tenant SaaS, SaaS platform design, SaaS best practices', 'custom-software',
    [
      { heading: 'Tenancy Models', body: 'Shared-everything, siloed databases, dedicated infrastructure — each with cost, compliance, and scale trade-offs.' },
      { heading: 'Enterprise Readiness', body: 'SSO, SCIM, audit logging, and granular RBAC separate enterprise-ready SaaS from SMB-only platforms.' },
      { heading: 'Platform Economics', body: 'Cost-per-tenant instrumentation shapes pricing, platform investment, and customer success economics.' }
    ]),
  guide('api-design-best-practices', 'API Design Best Practices: REST, GraphQL, gRPC',
    'API Design Best Practices | Onsective',
    'Contract-first API design with REST, GraphQL, and gRPC. Learn when each protocol wins and how to design APIs that endure.',
    'Experience', 'API design best practices, REST vs GraphQL, API versioning, API design guide', 'custom-software',
    [
      { heading: 'Contract-First', body: 'OpenAPI, GraphQL schemas, or protobuf as the canonical truth — before implementation, before consumption.' },
      { heading: 'Versioning Strategy', body: 'URL versioning, header versioning, or GraphQL schema evolution — with clear deprecation timelines and consumer comms.' },
      { heading: 'Protocol Selection', body: 'REST for breadth, GraphQL for flexibility, gRPC for internal high-performance. Mix protocols where they win.' }
    ]),
  guide('legacy-modernization-strategy', 'Legacy System Modernisation: The Strangler-Fig Strategy',
    'Legacy Modernisation Strategy | Onsective',
    'Legacy modernisation without big-bang risk. Learn the strangler-fig pattern, anti-corruption layers, and incremental replacement.',
    'Experience', 'legacy modernization, legacy system replacement, strangler fig, application modernization', 'custom-software',
    [
      { heading: 'The Strangler Pattern', body: 'New functionality intercepts legacy traffic, progressively replacing the legacy system function by function.' },
      { heading: 'Anti-Corruption Layer', body: 'A translation layer that prevents legacy data models from contaminating the new system.' },
      { heading: 'Incremental Delivery', body: 'Value delivered at every phase — not at the end of a three-year rewrite.' }
    ]),
  guide('devops-ci-cd-guide', 'DevOps & CI/CD: The Enterprise Engineering Playbook',
    'DevOps CI/CD Enterprise Playbook | Onsective',
    'CI/CD pipelines, infrastructure-as-code, and progressive delivery. The enterprise engineering playbook for shipping fast and safe.',
    'Experience', 'DevOps, CI/CD, continuous deployment, infrastructure as code, GitOps', 'custom-software',
    [
      { heading: 'Pipeline Architecture', body: 'Multi-stage pipelines with automated gates for test, security, performance, and compliance.' },
      { heading: 'Infrastructure as Code', body: 'Terraform, Pulumi, CloudFormation — environments defined declaratively, peer-reviewed, and version-controlled.' },
      { heading: 'Progressive Delivery', body: 'Feature flags, canaries, and blue-green deployments — de-risking every production change.' }
    ]),
  guide('mobile-app-architecture', 'Mobile App Architecture: Native vs Cross-Platform',
    'Mobile App Architecture Guide | Onsective',
    'Swift, Kotlin, Flutter, React Native — selecting mobile architecture for enterprise scale. Honest trade-offs.',
    'Experience', 'mobile app architecture, native vs cross platform, React Native vs Flutter, mobile app development', 'custom-software',
    [
      { heading: 'Native Strengths', body: 'Platform integration, performance, OS features, and App Store / Play Store standing. The gold standard for flagship apps.' },
      { heading: 'Cross-Platform', body: 'React Native and Flutter share 70-90% of code. Huge team and velocity savings for most use cases.' },
      { heading: 'Hybrid Approach', body: 'Many enterprises run native and cross-platform in parallel — cross-platform for most screens, native modules for platform depth.' }
    ]),
  guide('e-commerce-platform-selection', 'E-Commerce Platform Selection: Shopify vs BigCommerce vs commercetools',
    'E-Commerce Platform Selection Guide | Onsective',
    'Shopify Plus, BigCommerce, commercetools, Magento — which e-commerce platform fits your enterprise? A trade-off guide.',
    'Experience', 'ecommerce platform selection, Shopify Plus, commercetools, BigCommerce, Magento', 'digital-experience',
    [
      { heading: 'Shopify Plus', body: 'Best time-to-market, largest ecosystem, strong OMS. Limits at extreme customisation.' },
      { heading: 'commercetools', body: 'Composable, headless, API-first. Best for enterprises needing custom commerce architectures.' },
      { heading: 'BigCommerce', body: 'Balance of enterprise features and customisation. Strong B2B capabilities.' }
    ]),
  guide('ar-vr-enterprise', 'AR/VR for Enterprise: Use Cases That Actually Work',
    'AR/VR Enterprise Use Cases | Onsective',
    'AR/VR applications in training, commerce, remote assist, and digital twins. The enterprise use cases that pay back.',
    'Experience', 'AR VR enterprise, enterprise AR, enterprise VR, spatial computing, Apple Vision Pro', 'digital-experience',
    [
      { heading: 'Training & Simulation', body: 'Safety training, procedure rehearsal, and soft-skill practice at fidelity impossible with video.' },
      { heading: 'Commerce & Visualisation', body: 'Product visualisation, virtual showrooms, and spatial commerce — especially for complex or high-value purchases.' },
      { heading: 'Remote Assist', body: 'Field technicians with AR overlays guided by remote experts. Proven ROI in manufacturing, energy, and healthcare.' }
    ]),

  // --- BRAND (10) ---
  guide('brand-strategy-framework', 'Brand Strategy Framework: From Positioning to Experience',
    'Brand Strategy Framework | Onsective',
    'Brand strategy as an engineered discipline — positioning, narrative, visual system, tone of voice, and governance.',
    'Brand', 'brand strategy framework, brand positioning, brand strategy guide, brand development', 'brand-management',
    [
      { heading: 'Positioning', body: 'The one sentence that defines who you are, for whom, against whom, and why. Everything else cascades from here.' },
      { heading: 'Narrative Architecture', body: 'Proof points, origin story, and thematic pillars that give every communication a consistent backbone.' },
      { heading: 'System & Governance', body: 'Visual system, tone of voice, and brand governance make the strategy operational.' }
    ]),
  guide('visual-identity-guide', 'Visual Identity Systems: Beyond Logos',
    'Visual Identity Systems Guide | Onsective',
    'Visual identity is a codified system — logo, colour, typography, photography, motion. Learn the architectural approach.',
    'Brand', 'visual identity, visual identity systems, brand design systems, visual identity guide', 'brand-management',
    [
      { heading: 'System Components', body: 'Logo system, colour architecture, typography hierarchy, photography direction, motion grammar, iconography.' },
      { heading: 'Design Tokens', body: 'Design tokens codify visual primitives in a way engineering teams can implement consistently.' },
      { heading: 'Governance', body: 'Guidelines, DAM, and approval workflows make consistency the default rather than the exception.' }
    ]),
  guide('rebranding-playbook', 'Corporate Rebranding: The Institutional Playbook',
    'Corporate Rebranding Playbook | Onsective',
    'Corporate rebranding is transformation, not redesign. Learn the playbook — business rationale, stakeholder management, rollout discipline.',
    'Brand', 'corporate rebranding, rebranding strategy, rebrand playbook, brand transformation', 'brand-management',
    [
      { heading: 'Rebrand Rationale', body: 'M&A, strategic pivots, reputation repair, or market repositioning — the business reason defines the rebrand scope.' },
      { heading: 'Stakeholder Management', body: 'Customers, employees, investors, regulators — each stakeholder group has a communications timeline and tone.' },
      { heading: 'Rollout Discipline', body: 'Phased rollout with tightly managed quality assurance prevents the brand debt that undermines most rebrands.' }
    ]),
  guide('tone-of-voice-guide', 'Tone of Voice: The Verbal Identity System',
    'Tone of Voice Guide | Onsective',
    'Tone of voice is the verbal counterpart to visual identity — codifying how your brand sounds across every communication.',
    'Brand', 'tone of voice, brand voice guide, verbal identity, brand voice framework', 'brand-management',
    [
      { heading: 'The Framework', body: 'Brand personality, voice principles, vocabulary lists, do/don\'t examples, and context-specific variations.' },
      { heading: 'Operationalisation', body: 'Templates, training, content reviews, and now — LLM prompts that encode voice principles.' },
      { heading: 'Measurement', body: 'Consistency scoring (manual and AI-assisted), stakeholder feedback, and brand-health surveys measure voice effectiveness.' }
    ]),
  guide('employer-branding-framework', 'Employer Branding: The Talent Attraction Framework',
    'Employer Branding Framework | Onsective',
    'Employer branding is how the institution positions itself to attract top talent. Learn the EVP-led framework.',
    'Brand', 'employer branding, employer brand strategy, employee value proposition, EVP framework', 'brand-management',
    [
      { heading: 'EVP Development', body: 'Research-driven articulation of why top talent should choose you — including compensation, purpose, culture, and growth.' },
      { heading: 'Talent Narrative', body: 'Content pillars, proof points, and employee storytelling that carry the EVP across every recruitment touchpoint.' },
      { heading: 'Candidate Experience', body: 'Careers site, interview process, offer experience — every touchpoint communicates the employer brand.' }
    ]),
  guide('brand-governance-framework', 'Brand Governance: Preserving Institutional Equity',
    'Brand Governance Framework | Onsective',
    'Brand governance protects institutional equity across markets, channels, and partners. Learn the framework.',
    'Brand', 'brand governance, brand management framework, brand compliance, brand consistency', 'brand-management',
    [
      { heading: 'Governance Charter', body: 'Cross-functional governance council with published standards, decision rights, and escalation protocols.' },
      { heading: 'Compliance Monitoring', body: 'Automated and human monitoring across paid, owned, partner, and earned channels.' },
      { heading: 'Education & Enablement', body: 'Training, certification, and self-serve resources that make compliance easy.' }
    ]),
  guide('crisis-communications-playbook', 'Crisis Communications: The 15-Minute Playbook',
    'Crisis Communications Playbook | Onsective',
    'Crisis communications is rehearsed response to high-stakes reputational events. Learn the 15-minute activation playbook.',
    'Brand', 'crisis communications, crisis comms playbook, reputation crisis, crisis management', 'brand-management',
    [
      { heading: 'Crisis Scenario Mapping', body: 'Plausible scenarios across product, people, regulatory, cyber, and executive dimensions — mapped before the crisis arrives.' },
      { heading: 'Response Framework', body: 'Pre-approved statements, spokesperson protocols, channel playbooks, and decision trees for each scenario class.' },
      { heading: 'Tabletop Rehearsal', body: 'Quarterly simulations stress-test the playbook and surface gaps before they matter.' }
    ]),
  guide('brand-measurement', 'Brand Measurement: Metrics That Move the Board',
    'Brand Measurement Guide | Onsective',
    'Brand measurement beyond aided awareness — equity, preference, advocacy, and the economic value of brand strength.',
    'Brand', 'brand measurement, brand metrics, brand equity measurement, brand KPIs', 'brand-management',
    [
      { heading: 'Awareness to Equity', body: 'Aided awareness is the floor; unaided awareness, consideration, preference, and advocacy climb the stack.' },
      { heading: 'Economic Brand Value', body: 'Price premium, retention, CAC reduction, and hiring efficiency quantify brand\'s P&L contribution.' },
      { heading: 'Tracking Cadence', body: 'Annual brand tracker + quarterly pulse + always-on social listening = a complete measurement system.' }
    ]),
  guide('influencer-marketing-b2b', 'Influencer Marketing for B2B: The Thought-Leadership Playbook',
    'B2B Influencer Marketing Playbook | Onsective',
    'B2B influencer marketing uses expert voices — not lifestyle creators. Learn the thought-leadership playbook.',
    'Brand', 'B2B influencer marketing, thought leadership marketing, executive branding, industry expert marketing', 'brand-management',
    [
      { heading: 'The B2B Difference', body: 'B2B influencers are industry experts, analysts, and practitioners — not lifestyle creators. Selection is peer-driven.' },
      { heading: 'Co-Created Content', body: 'Webinars, podcasts, research reports, and white papers co-authored with industry voices amplify credibility.' },
      { heading: 'Measurement', body: 'Pipeline influenced, brand-recall lift, and share of voice — not follower counts — measure B2B influencer ROI.' }
    ]),
  guide('social-media-strategy-enterprise', 'Enterprise Social Media Strategy: Governance and Growth',
    'Enterprise Social Media Strategy | Onsective',
    'Enterprise social media balances brand growth, community, and crisis resilience. Learn the governance and growth framework.',
    'Brand', 'enterprise social media, social media strategy, B2B social media, social media governance', 'social-capital',
    [
      { heading: 'Platform Prioritisation', body: 'Focused excellence on 3-4 platforms outperforms diluted presence on all. Selection is audience and objective driven.' },
      { heading: 'Content Architecture', body: 'Pillar content + always-on engagement + reactive cultural content + executive voice = institutional social presence.' },
      { heading: 'Governance & Crisis', body: 'Community SLAs, moderation playbooks, and crisis protocols protect the brand across every channel.' }
    ])
];

// ============================================================
// Helpers
// ============================================================
export const getLocation = (id: string) => SEO_LOCATIONS.find(l => l.id === id);
export const getIndustrySEO = (id: string) => SEO_INDUSTRIES.find(i => i.id === id);
export const getIntent = (id: string) => SEO_INTENTS.find(i => i.id === id);
export const getGuide = (slug: string) => SEO_GUIDES.find(g => g.slug === slug);
