import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, BarChart, Shield, PieChart, Zap, CheckCircle2, Globe, Cpu, Search, Megaphone, Award, Share2, Cloud, ChevronRight, Code2, Layers, TrendingUp, Target, Clock, Users } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES } from '../constants';
import { ASSETS } from '../utils/assets';
import { toSlug } from '../utils/slugs';
import { getMethodologySlug } from '../data/methodology-details';
import { getSceneForService } from '../components/UI/ServiceScene3D';

const SERVICE_CONTENT: Record<string, any> = {
  'it-strategy': {
    heroImage: ASSETS.SERVICE_STRATEGY,
    tagline: 'Transform your technology organization into a sovereign strategic value center that engineers measurable, compounding competitive advantage.',
    challenge: 'Technical debt, siloed operations, and reactive planning are the silent architects of enterprise stagnation. Organizations that treat IT as a cost center rather than a strategic weapon consistently cede ground to digitally-mature competitors. The gap widens exponentially — every quarter of inaction compounds into years of structural disadvantage. We provide the architectural foresight and institutional rigor required to build a resilient, future-sovereign organization where every technology investment compounds into permanent market dominance.',
    quote: 'Engineering the sovereign blueprints for undisputed market leadership.',
    deepDive: 'Our IT Strategy practice operates at the intersection of business strategy and technology architecture. We begin every engagement with a forensic assessment of your current technology estate — mapping every application, integration, data flow, and dependency across your enterprise. This diagnostic phase reveals the hidden architectural debt, redundant tooling, and misaligned investments that silently erode your competitive position. From this foundation, we architect multi-year transformation roadmaps that sequence every initiative for maximum business impact, minimum disruption, and optimal capital allocation. Our strategists bring decades of institutional experience across regulated industries, ensuring that every recommendation accounts for governance, compliance, and sovereign data requirements.',
    outcomes: [
      'Average 40% reduction in technology operating expenditure within 18 months',
      '3x acceleration of new capability deployment velocity',
      'Complete elimination of shadow IT and redundant tooling',
      'Board-ready technology governance frameworks',
      'Measurable alignment between IT investment and revenue growth',
    ],
    techStack: ['Enterprise Architecture Frameworks (TOGAF, Zachman)', 'Business Capability Modeling', 'Application Portfolio Rationalization', 'Total Cost of Ownership Analysis', 'Technology Radar & Horizon Scanning', 'Vendor Risk Assessment Protocols'],
    methodology: [
      { title: 'Foresight', desc: 'Predictive analytics and roadmap engineering to anticipate market shifts before they materialize, ensuring your technology portfolio remains permanently ahead of disruption cycles.' },
      { title: 'Architecture', desc: 'Designing modular, composable IT systems that empower rather than restrict — creating sovereign platforms that adapt fluidly to evolving business imperatives and regulatory demands.' },
      { title: 'Value Realization', desc: 'Quantifying every technical initiative in terms of P&L impact and market capital, establishing clear governance frameworks that link IT spend directly to revenue outcomes and competitive position.' }
    ],
    capabilities: [
      'Digital Operating Models',
      'M&A Technology Integration',
      'Enterprise Architecture',
      'IT Cost Optimization',
      'Vendor Management Strategy'
    ],
    stats: [
      { value: '40%', label: 'OpEx Reduction', icon: PieChart },
      { value: '3x', label: 'Innovation Velocity', icon: Zap },
      { value: '120+', label: 'Institutions Served', icon: BarChart },
      { value: '99%', label: 'Client Retention', icon: Shield }
    ],
    engagement: {
      duration: '12-24 weeks',
      team: '3-6 senior principals',
      deliverables: 'Architecture blueprints, transformation roadmap, governance framework, business case documentation',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We architect technology transformation roadmaps for Tier-1 banks, insurance groups, and capital markets firms — aligning IT investments with regulatory requirements including SOX, PCI-DSS, and Basel III while accelerating digital capability deployment across trading, risk management, and customer onboarding platforms.' },
      { vertical: 'Healthcare', desc: 'Our IT strategy practice designs sovereign health IT architectures that integrate EHR systems, telemedicine platforms, and clinical decision support tools — ensuring HIPAA compliance, HL7/FHIR interoperability, and the data infrastructure required for AI-powered clinical workflows.' },
      { vertical: 'Manufacturing', desc: 'We build Industry 4.0 technology roadmaps that connect OT and IT systems, enabling real-time visibility across production facilities and supply chains through IoT integration, digital twin deployment, and predictive maintenance infrastructure.' },
    ],
    faq: [
      { q: 'How long does an IT strategy engagement typically take?', a: 'Our standard diagnostic and roadmap engagement spans 12-24 weeks, depending on the complexity of your technology estate. For organizations with fewer than 50 applications, we can deliver a complete assessment and roadmap in as few as 10 weeks. Larger enterprises with complex multi-cloud, multi-vendor environments may require 20-24 weeks for comprehensive coverage.' },
      { q: 'Do you work alongside existing consulting relationships?', a: 'Absolutely. We frequently collaborate with implementation partners, system integrators, and internal strategy teams. Our role is to provide independent, vendor-neutral architectural guidance that informs — not replaces — your existing relationships. We believe the best outcomes come from institutional collaboration, not territorial competition.' },
      { q: 'How do you measure the success of an IT strategy engagement?', a: 'We establish measurable success criteria at the outset of every engagement — typically including cost reduction targets, capability deployment velocity, governance maturity improvements, and technology-to-revenue alignment metrics. We conduct quarterly reviews against these metrics for 12 months post-engagement to ensure sustained impact.' },
      { q: 'What makes your approach different from traditional consulting firms?', a: 'Three things: First, our principals are practitioners, not theorists — they have built and operated the systems they advise on. Second, we deliver executable roadmaps, not strategic slide decks — every recommendation includes implementation detail. Third, we tie our success to your measurable outcomes, not to the volume of deliverables we produce.' },
    ],
  },
  'cloud-services': {
    heroImage: ASSETS.SERVICE_CLOUD,
    tagline: 'Architecting sovereign cloud ecosystems engineered for absolute global stability, elastic scale, and institutional-grade resilience.',
    challenge: 'Cloud is no longer a destination; it is a sovereign operating model. Yet most organizations remain trapped in lift-and-shift migrations that replicate on-premise inefficiencies in the cloud — paying premium prices for commodity outcomes. The organizations that will dominate the next decade are those building truly cloud-native, sovereignty-compliant infrastructure that treats the cloud as a strategic platform, not a hosting alternative. We architect sovereign cloud estates that meet the most demanding regulatory requirements while delivering the agility and cost efficiency your business demands.',
    quote: 'Sovereign infrastructure for an interconnected world.',
    deepDive: 'Our Cloud Services practice delivers end-to-end cloud transformation — from initial readiness assessment through migration execution to continuous optimization and FinOps governance. We architect multi-cloud and hybrid environments across AWS, Azure, and GCP, tailoring each deployment to your specific compliance, performance, and sovereignty requirements. Our cloud architects have collectively migrated thousands of workloads, including legacy mainframe systems, SAP landscapes, and mission-critical real-time platforms. Every migration follows our zero-downtime methodology, backed by automated validation pipelines and rollback protocols that eliminate risk. Post-migration, our FinOps practice ensures your cloud estate delivers maximum value through continuous cost governance, right-sizing, and reserved capacity optimization.',
    outcomes: [
      'Average 35% reduction in infrastructure costs within first year',
      'Zero-downtime migrations across 200+ enterprise workloads',
      '99.99% uptime SLA achievement across all managed environments',
      'Full sovereignty compliance with GDPR, SOC 2, HIPAA, and PCI-DSS',
      'FinOps maturity acceleration from reactive to proactive governance',
    ],
    techStack: ['AWS (EC2, EKS, Lambda, S3, RDS)', 'Azure (AKS, Functions, CosmosDB)', 'Google Cloud Platform (GKE, BigQuery, Cloud Run)', 'Kubernetes & Helm', 'Terraform & Infrastructure as Code', 'CloudFormation & Pulumi'],
    methodology: [
      { title: 'Assess', desc: 'Comprehensive readiness audits, application dependency mapping, and total cost of ownership modeling to establish a clear migration baseline and prioritization framework.' },
      { title: 'Migrate', desc: 'Seamless, phased transition with zero downtime guarantees, leveraging automated refactoring pipelines, continuous validation protocols, and sovereign compliance checkpoints.' },
      { title: 'Optimize', desc: 'Continuous performance tuning, FinOps cost governance, and architectural refinement to ensure your cloud estate delivers maximum institutional value at minimum operational expenditure.' }
    ],
    capabilities: [
      'Hybrid Cloud Orchestration',
      'Cloud Native Development',
      'DevSecOps Automation',
      'Mainframe Modernization',
      'Edge Computing'
    ],
    stats: [
      { value: '99.9%', label: 'Uptime Guaranteed', icon: Shield },
      { value: '35%', label: 'Cost Reduction', icon: BarChart },
      { value: '200+', label: 'Migrations Executed', icon: Cloud },
      { value: '0', label: 'Downtime Events', icon: CheckCircle2 }
    ],
    engagement: {
      duration: '8-36 weeks',
      team: '4-10 cloud architects & engineers',
      deliverables: 'Cloud architecture blueprint, migration playbook, FinOps dashboard, compliance documentation',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We architect sovereign cloud environments for banks and financial institutions that meet the most stringent regulatory requirements — including data residency mandates, SOC 2 compliance, and real-time failover capabilities for mission-critical trading and payment processing systems.' },
      { vertical: 'Healthcare', desc: 'Our cloud architects design HIPAA-compliant cloud infrastructure for healthcare organizations — enabling secure EHR hosting, telemedicine platforms, and genomic data processing while maintaining the data sovereignty and auditability that healthcare regulators demand.' },
      { vertical: 'Retail', desc: 'We build globally distributed cloud architectures for retail organizations that scale elastically during peak demand events, maintain sub-100ms latency across regions, and integrate real-time inventory management with e-commerce platforms.' },
    ],
    faq: [
      { q: 'Can you guarantee zero downtime during migration?', a: 'Yes. Our zero-downtime migration methodology uses parallel-run environments, automated validation pipelines, and instant rollback capabilities. We have completed over 200 enterprise migrations without a single unplanned downtime event. Every migration follows a phased approach with continuous monitoring and automated health checks.' },
      { q: 'How do you handle multi-cloud complexity?', a: 'We architect multi-cloud environments with a clear purpose for each cloud provider — not multi-cloud for its own sake. Each workload is placed on the optimal platform based on performance, compliance, cost, and operational requirements. We use infrastructure-as-code and unified observability platforms to manage complexity.' },
      { q: 'What cost savings can we realistically expect?', a: 'Our clients average 35% infrastructure cost reduction within the first year. However, actual savings depend on your current state. Organizations with significant over-provisioning or redundant tooling often see 40-50% reductions. We model expected savings before migration begins so you have clear expectations.' },
      { q: 'Do you provide ongoing cloud management?', a: 'Yes. We offer managed cloud services including 24/7 monitoring, FinOps cost governance, security posture management, and continuous optimization. Our FinOps practice typically pays for itself within the first quarter through identified savings opportunities.' },
    ],
  },
  'cybersecurity': {
    heroImage: ASSETS.SERVICE_CYBER,
    tagline: 'Zero-trust security architectures that protect your most critical sovereign assets against the world\'s most sophisticated threat actors.',
    challenge: 'The threat landscape evolves faster than traditional security postures can adapt. Perimeter-based defenses are not merely insufficient — they are dangerous illusions of safety. Organizations face AI-powered adversaries, state-sponsored campaigns, supply chain compromises, and insider threats that bypass conventional controls with ease. The question is not whether your organization will face a sophisticated attack, but whether your security architecture will contain it. Our approach assumes breach from day one and engineers institutional resilience from the inside out.',
    quote: 'Absolute sovereign protection in a zero-trust world.',
    deepDive: 'Our Cybersecurity practice implements defense-in-depth strategies anchored by zero-trust architecture and continuous threat intelligence. We begin with comprehensive threat modeling that maps every attack surface across your digital estate — from cloud infrastructure and API endpoints to employee endpoints and third-party integrations. Our red team conducts adversarial exercises that simulate nation-state-grade attacks, exposing vulnerabilities that automated scanning cannot detect. We then design and deploy layered security controls including micro-segmentation, identity-centric access management, encrypted data pipelines, and automated incident response playbooks. Our 24/7 Security Operations Center provides continuous monitoring, real-time threat detection, and rapid response capabilities that neutralize threats before they can impact your operations.',
    outcomes: [
      'Zero successful breaches across all managed environments',
      'Mean time to detect reduced to under 15 minutes',
      '100% compliance achievement across SOC 2, ISO 27001, PCI-DSS',
      'Complete elimination of lateral movement attack vectors',
      '24/7/365 security operations coverage with <5 minute escalation',
    ],
    techStack: ['SIEM (Splunk, Sentinel, QRadar)', 'SOAR Platforms', 'EDR/XDR (CrowdStrike, SentinelOne)', 'IAM (Okta, Azure AD, CyberArk)', 'Network Segmentation & Zero Trust', 'Vulnerability Management & Pen Testing'],
    methodology: [
      { title: 'Assess', desc: 'Comprehensive threat modeling, vulnerability assessments, and adversarial red-team exercises that expose every attack surface across your sovereign digital estate.' },
      { title: 'Fortify', desc: 'Implementing zero-trust architectures, micro-segmentation, and identity-centric security controls that eliminate lateral movement and contain breaches at institutional scale.' },
      { title: 'Monitor', desc: 'Continuous threat intelligence, 24/7 SOC operations, and automated incident response playbooks that detect and neutralize sophisticated threats in real time.' }
    ],
    capabilities: [
      'Identity & Access Management (IAM)',
      'Penetration Testing & Red Teaming',
      'Cloud Security Posture Management',
      'Governance, Risk & Compliance (GRC)',
      'Data Privacy & Sovereign Protection'
    ],
    stats: [
      { value: '0', label: 'Breaches Tolerated', icon: Shield },
      { value: '24/7', label: 'SOC Coverage', icon: Zap },
      { value: '<15m', label: 'Response Time', icon: BarChart },
      { value: '100%', label: 'Compliance Rate', icon: CheckCircle2 }
    ],
    engagement: {
      duration: '6-16 weeks (assessment) + ongoing',
      team: '5-12 security engineers & analysts',
      deliverables: 'Threat model, security architecture, incident playbooks, compliance reports, SOC dashboards',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We protect the world\'s most targeted organizations — banks, payment processors, and trading platforms — with security architectures that defend trillions in assets while maintaining the real-time processing capabilities that financial operations demand.' },
      { vertical: 'Healthcare', desc: 'We implement security frameworks that protect patient health information under HIPAA while enabling the clinical data sharing that modern healthcare requires — balancing absolute data protection with operational accessibility.' },
      { vertical: 'Energy & Utilities', desc: 'We secure critical infrastructure against nation-state threats with OT/IT security architectures that protect SCADA systems, grid management platforms, and industrial control systems from sophisticated adversaries.' },
    ],
    faq: [
      { q: 'How quickly can you deploy a SOC for our organization?', a: 'We can deploy an initial SOC capability within 4-6 weeks using our pre-built playbooks and SIEM configurations. Full 24/7 SOC operations with custom detection rules, threat intelligence integration, and automated response typically reach full maturity within 12-16 weeks.' },
      { q: 'Do you conduct red-team exercises?', a: 'Yes. Our red team conducts adversarial exercises that simulate nation-state-grade attacks — including social engineering, physical penetration, supply chain compromise, and advanced persistent threat scenarios. These exercises expose vulnerabilities that automated scanning cannot detect.' },
      { q: 'How do you handle compliance requirements?', a: 'We maintain deep expertise across SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR, and NIST frameworks. Our security architectures are designed with compliance built in — not bolted on. We provide continuous compliance monitoring and audit-ready documentation.' },
    ],
  },
  'digital-experience': {
    heroImage: ASSETS.SERVICE_DIGITAL,
    tagline: 'High-fidelity digital interfaces that command institutional brand authority and drive enterprise-grade conversion rates.',
    challenge: 'In an attention-scarce economy, mediocre digital experiences are indistinguishable from absence. Users form judgments in milliseconds, and every point of friction in your digital touchpoints silently erodes trust, revenue, and brand equity. The organizations that will own their markets are those that treat digital experience not as a design exercise, but as a strategic instrument of competitive advantage. We engineer digital products that are not merely functional but definitively superior — creating experiences that users choose to return to and competitors struggle to replicate.',
    quote: 'Where precision engineering meets institutional brand authority.',
    deepDive: 'Our Digital Experience practice integrates deep user research, world-class design, and full-stack engineering into a single delivery model. We begin with ethnographic research — shadowing real users, conducting behavioral interviews, and mapping complete journey architectures to understand not just what users do, but why they do it and where they abandon. This research informs our design systems: modular, scalable component libraries that ensure visual consistency across every digital touchpoint. Our frontend engineers then translate these designs into high-performance applications using React, Next.js, and native mobile frameworks, optimizing for Core Web Vitals, accessibility compliance, and conversion rate at every step. Post-launch, we run continuous A/B experimentation and behavioral analytics to compound performance improvements over time.',
    outcomes: [
      '3.2x average conversion rate lift across redesigned digital touchpoints',
      '60% increase in user engagement and time-on-platform metrics',
      'Sub-1-second load times on all critical user journeys',
      '95%+ user satisfaction scores measured through NPS and CSAT',
      'WCAG 2.1 AA accessibility compliance across all deliverables',
    ],
    techStack: ['React & Next.js', 'React Native & Flutter', 'Figma Design Systems', 'Storybook Component Libraries', 'Contentful & Sanity CMS', 'Google Analytics & Mixpanel'],
    methodology: [
      { title: 'Discover', desc: 'Deep ethnographic research, behavioral journey mapping, and competitive analysis to uncover unmet user needs and identify experience differentiation opportunities at institutional scale.' },
      { title: 'Design', desc: 'Pixel-perfect interface architecture, scalable design system creation, and interactive prototyping that translates strategy into tangible, testable digital experiences.' },
      { title: 'Deliver', desc: 'Full-stack engineering with performance optimization, accessibility compliance, and continuous A/B experimentation to maximize engagement, conversion, and lifetime value.' }
    ],
    capabilities: [
      'UX/UI Design Strategy',
      'Mobile App Engineering',
      'Customer Data Platforms (CDP)',
      'E-commerce Optimization',
      'AR/VR Immersive Experiences'
    ],
    stats: [
      { value: '3.2x', label: 'Conversion Lift', icon: BarChart },
      { value: '60%', label: 'Engagement Increase', icon: Zap },
      { value: '<1s', label: 'Load Time Target', icon: Globe },
      { value: '95%', label: 'User Satisfaction', icon: CheckCircle2 }
    ],
    engagement: {
      duration: '8-20 weeks',
      team: '4-8 designers & engineers',
      deliverables: 'Research insights, design system, interactive prototypes, production code, analytics dashboard',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We design institutional-grade digital banking platforms, wealth management portals, and insurance self-service experiences that combine regulatory compliance with conversion-optimized user journeys — serving millions of authenticated users at sub-second response times.' },
      { vertical: 'Healthcare', desc: 'Our practice engineers patient-facing digital platforms including appointment scheduling, telemedicine interfaces, and health management apps — designed for accessibility compliance, HIPAA security, and the intuitive simplicity that drives patient adoption.' },
      { vertical: 'Retail', desc: 'We architect omnichannel commerce experiences that unify online and in-store touchpoints — from product discovery and personalized recommendations to checkout optimization and post-purchase engagement programs.' },
    ],
    faq: [
      { q: 'How do you measure the success of a digital experience redesign?', a: 'We establish baseline metrics before any redesign and measure impact across conversion rate, engagement depth, task completion rate, user satisfaction (NPS/CSAT), and Core Web Vitals. Every design decision is validated through A/B testing before full deployment.' },
      { q: 'Do you build mobile apps as well?', a: 'Yes. We design and develop native iOS and Android applications as well as cross-platform solutions using React Native. Our mobile practice follows the same research-driven methodology as our web practice — ensuring mobile experiences are informed by genuine user behavior data.' },
      { q: 'How do you ensure accessibility compliance?', a: 'Accessibility is built into our design process from the first wireframe. Every deliverable meets WCAG 2.1 AA standards, and we conduct automated and manual accessibility testing throughout development. Our designers and engineers are trained in inclusive design principles.' },
    ],
  },
  'ai-automation': {
    heroImage: ASSETS.SERVICE_AI,
    tagline: 'Production-grade artificial intelligence and intelligent automation that eliminate operational friction and unlock institutional strategic velocity.',
    challenge: 'Organizations sit on vast reservoirs of untapped data while their teams drown in repetitive processes that erode margin and morale. The gap between AI ambition and AI reality widens daily for enterprises that lack the engineering discipline, data infrastructure, and institutional rigor to move beyond proof-of-concept. We bridge that gap with production-grade AI systems architected for enterprise reliability — systems that deliver measurable ROI from their first day in production and compound their value with every interaction.',
    quote: 'Transforming data gravity into permanent competitive velocity.',
    deepDive: 'Our AI & Automation practice combines deep machine learning expertise with rigorous enterprise engineering practices to deliver AI systems that perform in the real world, not just in the lab. We begin with AI readiness assessments that evaluate your data maturity, infrastructure readiness, and organizational capacity for AI adoption. We then identify and prioritize the highest-impact use cases — focusing on opportunities where AI can deliver measurable, defensible ROI within 90 days. Our engineers build custom models using state-of-the-art architectures, deploy them through robust MLOps pipelines with continuous monitoring and retraining, and implement responsible AI frameworks that ensure transparency, fairness, and regulatory compliance. From predictive analytics and natural language processing to computer vision and generative AI, we deliver systems that give your teams capabilities that were impossible just years ago.',
    outcomes: [
      '70% acceleration of core operational processes through intelligent automation',
      '45% reduction in operational costs via AI-driven efficiency gains',
      '10x improvement in data processing throughput and insight generation',
      '95%+ model accuracy across all deployed production systems',
      'Complete AI governance and responsible AI compliance frameworks',
    ],
    techStack: ['TensorFlow & PyTorch', 'Hugging Face Transformers', 'OpenAI & Anthropic APIs', 'Apache Spark & Databricks', 'MLflow & Kubeflow', 'UiPath & Automation Anywhere'],
    methodology: [
      { title: 'Identify', desc: 'AI readiness assessment, use case prioritization through ROI modeling, and data maturity auditing to pinpoint the highest-impact automation opportunities across your institutional operations.' },
      { title: 'Build', desc: 'Custom model development, MLOps pipeline engineering, and responsible AI governance frameworks that ensure your intelligent systems are accurate, explainable, ethical, and enterprise-ready.' },
      { title: 'Scale', desc: 'Enterprise-wide deployment, continuous model monitoring with drift detection, and feedback loop integration that ensure AI systems compound their value with every institutional interaction.' }
    ],
    capabilities: [
      'Generative AI Solutions',
      'Predictive Analytics',
      'Robotic Process Automation (RPA)',
      'Natural Language Processing',
      'Computer Vision Systems'
    ],
    stats: [
      { value: '70%', label: 'Process Acceleration', icon: Zap },
      { value: '45%', label: 'Cost Reduction', icon: PieChart },
      { value: '10x', label: 'Data Throughput', icon: Cpu },
      { value: '95%', label: 'Model Accuracy', icon: CheckCircle2 }
    ],
    engagement: {
      duration: '6-16 weeks (POC) + ongoing',
      team: '3-8 ML engineers & data scientists',
      deliverables: 'AI readiness report, model architecture, MLOps pipeline, monitoring dashboard, governance documentation',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We deploy AI-powered fraud detection, credit risk modeling, and algorithmic trading systems that process billions of data points in real time — delivering detection accuracy that exceeds human analysts while operating at institutional scale.' },
      { vertical: 'Healthcare', desc: 'Our AI engineers build clinical decision support systems, diagnostic imaging analysis tools, and patient risk stratification models — always with responsible AI frameworks that ensure transparency, explainability, and regulatory compliance.' },
      { vertical: 'Manufacturing', desc: 'We deploy computer vision for quality assurance, predictive maintenance models that eliminate unplanned downtime, and demand forecasting systems that optimize production planning across complex supply chains.' },
    ],
    faq: [
      { q: 'How long before we see ROI from AI deployment?', a: 'Our engagements are structured to deliver measurable ROI within 90 days of production deployment. We achieve this by prioritizing high-impact, lower-complexity use cases for initial deployment, then scaling to more ambitious applications once organizational confidence and infrastructure maturity are established.' },
      { q: 'Do we need to have our data infrastructure in order before starting?', a: 'Not necessarily. Our AI readiness assessment evaluates your data maturity and identifies what needs to be addressed. We can begin with use cases that leverage your existing data while simultaneously building the data infrastructure required for more sophisticated applications.' },
      { q: 'How do you ensure AI systems are ethical and compliant?', a: 'Every AI system we build includes responsible AI frameworks covering bias detection, model explainability, audit trails, and governance documentation. We implement continuous monitoring for model drift and fairness metrics, ensuring your AI systems maintain ethical standards throughout their operational lifecycle.' },
    ],
  },
  'enterprise-seo': {
    heroImage: ASSETS.SERVICE_SEO,
    tagline: 'Technical search architecture at institutional scale that engineers permanent search dominance and sustainable organic authority.',
    challenge: 'Search is no longer a marketing channel — it is a strategic asset that compounds in value over time. Organizations that fail to treat their search infrastructure as critical institutional capital cede market share to competitors who understand that organic visibility is the most defensible competitive moat in digital markets. We build sovereign search architectures that capture demand at scale, across languages, geographies, and intent stages — turning organic traffic into a permanent competitive advantage.',
    quote: 'Engineered sovereign visibility for permanent institutional presence.',
    deepDive: 'Our Enterprise SEO practice operates at the intersection of technical engineering and strategic content architecture. We begin with comprehensive technical audits that evaluate your site architecture, crawl efficiency, Core Web Vitals performance, schema implementation, and international targeting configuration. Our engineers then optimize your technical foundation — fixing crawl inefficiencies, implementing structured data at scale, and engineering site architecture that search engines can navigate with maximum efficiency. Simultaneously, our content strategists build topical authority frameworks that position your brand as the definitive resource in your market. For enterprise clients, we deploy programmatic SEO systems that generate thousands of high-quality, intent-optimized pages at scale, capturing long-tail demand that competitors cannot replicate manually.',
    outcomes: [
      '340% average organic traffic growth within 12 months',
      '#1 ranking achievement for primary category keywords',
      '50+ international markets covered with localized SEO strategies',
      '10M+ keywords managed across enterprise client portfolios',
      'Complete technical compliance with Core Web Vitals standards',
    ],
    techStack: ['Screaming Frog & Sitebulb', 'Ahrefs & Semrush', 'Google Search Console & Analytics', 'Schema.org & JSON-LD', 'Cloudflare Workers & Edge SEO', 'Custom Programmatic SEO Pipelines'],
    methodology: [
      { title: 'Audit', desc: 'Comprehensive technical SEO audits, content gap analysis, and competitive intelligence mapping to establish your search baseline and quantify the sovereign opportunity landscape.' },
      { title: 'Engineer', desc: 'Technical infrastructure optimization, schema architecture deployment, and strategic content execution that builds topical authority and captures high-intent demand at institutional scale.' },
      { title: 'Dominate', desc: 'Continuous performance monitoring, algorithm adaptation protocols, and authority-building campaigns that compound organic growth quarter over quarter into permanent market presence.' }
    ],
    capabilities: [
      'International SEO',
      'Technical SEO & Core Web Vitals',
      'Content Strategy & Clustering',
      'Migration SEO Support',
      'Programmatic SEO'
    ],
    stats: [
      { value: '340%', label: 'Organic Growth', icon: BarChart },
      { value: '#1', label: 'Ranking Target', icon: Search },
      { value: '50+', label: 'Markets Covered', icon: Globe },
      { value: '10M+', label: 'Keywords Managed', icon: Zap }
    ],
    engagement: {
      duration: '12-52 weeks (ongoing)',
      team: '3-6 SEO architects & content strategists',
      deliverables: 'Technical audit report, content strategy, keyword architecture, programmatic SEO system, monthly performance reports',
    },
    industryApplications: [
      { vertical: 'B2B Technology', desc: 'We deploy programmatic SEO systems for SaaS and enterprise technology companies that generate thousands of intent-optimized pages — capturing the long-tail search demand that represents 80% of qualified B2B leads in technology markets.' },
      { vertical: 'Financial Services', desc: 'We engineer search architectures for banking, insurance, and investment firms that capture high-intent local and product-specific search demand across hundreds of geographic markets while maintaining regulatory compliance in ad content.' },
      { vertical: 'E-Commerce', desc: 'We optimize millions of product pages for category, brand, and transactional search visibility — implementing dynamic schema markup, faceted navigation optimization, and crawl budget management at scale.' },
    ],
    faq: [
      { q: 'How long does it take to see results from enterprise SEO?', a: 'Initial improvements in crawl efficiency and indexation health are typically visible within 4-6 weeks. Meaningful organic traffic growth usually begins within 3-4 months, with compounding growth accelerating through months 6-12. Enterprise SEO is a long-term investment that compounds — the earlier you start, the greater your cumulative advantage.' },
      { q: 'Do you handle content creation as well as technical SEO?', a: 'Yes. Our practice integrates technical SEO engineering with strategic content development. We build content strategies based on topical authority principles, produce high-quality content at scale, and implement programmatic SEO systems for long-tail capture. Technical and content SEO work together — neither delivers maximum value in isolation.' },
      { q: 'How do you approach international SEO?', a: 'We implement comprehensive international SEO architectures including hreflang configuration, content localization strategies, country-specific domain structures, and local search optimization across 50+ markets. Our international SEO practice accounts for language variation, cultural context, and local search engine requirements.' },
    ],
  },
  'digital-marketing': {
    heroImage: ASSETS.SERVICE_MARKETING,
    tagline: 'Full-funnel campaign orchestration combining paid media precision, content gravity, and institutional analytics for measurable market influence.',
    challenge: 'The proliferation of channels has created a fragmented marketing landscape where most organizations optimize in silos, measure in vanity metrics, and allocate budget based on last-click convenience rather than true incrementality. The result is wasted capital, missed opportunities, and an inability to connect marketing investment to business outcomes with the precision that institutional stakeholders demand. True marketing performance requires unified attribution, cross-channel orchestration, and the discipline to invest where the data — not intuition — points.',
    quote: 'Precision marketing engineered for institutional-grade outcomes.',
    deepDive: 'Our Digital Marketing practice orchestrates full-funnel campaigns that combine the precision of paid media with the compounding power of organic content. We manage multi-million dollar ad portfolios across Google, Meta, LinkedIn, and programmatic channels, using advanced bidding strategies, dynamic creative optimization, and real-time budget allocation algorithms. Every campaign is built on a foundation of audience intelligence — leveraging first-party data, intent signals, and predictive modeling to reach the right decision-makers at the right moment in their buying journey. Our analytics team implements multi-touch attribution models that connect every marketing touchpoint to pipeline and revenue, giving your leadership team the visibility they need to make data-driven investment decisions.',
    outcomes: [
      '5.2x average ROAS across managed advertising portfolios',
      '65% reduction in cost-per-qualified-lead',
      '3M+ qualified leads generated across client portfolios',
      'Complete multi-touch attribution across 12+ marketing channels',
      'Real-time executive dashboards connecting marketing spend to revenue',
    ],
    techStack: ['Google Ads & Analytics 4', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'HubSpot & Marketo', 'Segment & mParticle', 'Looker & Tableau'],
    methodology: [
      { title: 'Strategize', desc: 'Audience intelligence gathering, competitive positioning analysis, and full-funnel architecture design that maps every institutional touchpoint to a measurable revenue outcome.' },
      { title: 'Execute', desc: 'Omnichannel campaign deployment across paid, owned, and earned media with real-time creative optimization, dynamic audience targeting, and continuous budget reallocation.' },
      { title: 'Optimize', desc: 'Multi-touch attribution modeling, incrementality testing, and continuous investment reallocation to maximize return on institutional marketing capital.' }
    ],
    capabilities: [
      'Commercial Video & Photo Production',
      'Website Development & SEO',
      'Social Media Handling',
      'Lead Generation & Paid Advertising',
      'Marketing Automation'
    ],
    stats: [
      { value: '5.2x', label: 'Average ROAS', icon: BarChart },
      { value: '65%', label: 'Lead Cost Reduction', icon: PieChart },
      { value: '3M+', label: 'Leads Generated', icon: Megaphone },
      { value: '12+', label: 'Channels Managed', icon: Globe }
    ],
    engagement: {
      duration: 'Ongoing (monthly retainer)',
      team: '4-8 strategists & media managers',
      deliverables: 'Campaign strategy, creative assets, media plans, attribution dashboards, monthly performance reports',
    },
    industryApplications: [
      { vertical: 'B2B Technology', desc: 'We orchestrate account-based marketing programs that target enterprise buying committees with personalized, multi-channel campaigns — generating qualified pipeline for complex, high-value technology solutions with sales cycles measured in months.' },
      { vertical: 'Financial Services', desc: 'We deploy compliant digital marketing strategies for banking, insurance, and wealth management that generate qualified leads within strict regulatory guardrails — balancing creative effectiveness with FINRA, SEC, and consumer protection requirements.' },
      { vertical: 'Healthcare', desc: 'We engineer patient acquisition campaigns that drive appointment bookings and service utilization while maintaining HIPAA compliance across all advertising platforms, landing pages, and data collection touchpoints.' },
    ],
    faq: [
      { q: 'What marketing channels do you manage?', a: 'We manage full-funnel campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn, Microsoft Advertising, programmatic display, connected TV, email marketing, and content marketing. Channel selection is based on your audience, objectives, and budget — we never recommend channels for the sake of coverage.' },
      { q: 'How do you measure marketing effectiveness?', a: 'We implement multi-touch attribution models that connect every marketing touchpoint to pipeline and revenue outcomes. For enterprise clients, we supplement attribution with incrementality testing and marketing mix modeling to quantify the true lift that marketing investment generates above baseline demand.' },
      { q: 'Can you work alongside our internal marketing team?', a: 'Absolutely. Many of our clients maintain internal marketing teams that we augment with specialized capabilities — paid media management, analytics engineering, creative production, or strategic planning. We structure our engagements to complement and strengthen your internal capabilities, not replace them.' },
    ],
  },
  'social-capital': {
    heroImage: ASSETS.SERVICE_SOCIAL,
    tagline: 'Institutional-scale social media orchestration that builds sovereign brand authority and commands narrative across global channels.',
    challenge: 'Social media is no longer optional for institutional brands — it is the frontline of reputation management, customer engagement, and talent acquisition. Yet most organizations treat social as an afterthought, delegating it to junior teams operating without strategic frameworks, measurement discipline, or crisis protocols. The result is inconsistent messaging, missed opportunities, and reputational exposure that can erase years of brand-building in a single news cycle. We elevate social media to an institutional concern with sovereign governance and measurable business impact.',
    quote: 'Commanding the institutional narrative at sovereign scale.',
    deepDive: 'Our Social Capital practice manages institutional brand presence across every major platform with the rigor and discipline of a financial operation. We begin with comprehensive social listening and competitive benchmarking to understand your brand position in the social conversation landscape. From this intelligence, we engineer content strategies that align with your institutional positioning, key messages, and business objectives. Our content teams produce platform-optimized assets — from LinkedIn thought leadership articles and Instagram visual campaigns to YouTube video series and TikTok content — ensuring every piece of content reinforces your brand authority. Community management, influencer partnerships, and crisis communication protocols ensure your brand remains protected and elevated across every interaction.',
    outcomes: [
      '400% average engagement growth across managed social channels',
      '2.5M+ combined audience reach across managed brand profiles',
      '50+ institutional brands managed across global markets',
      '<30 minute average response time for community interactions',
      'Zero unmanaged reputation incidents across all client portfolios',
    ],
    techStack: ['Sprout Social & Hootsuite', 'Brandwatch & Talkwalker', 'Canva & Adobe Creative Suite', 'CapCut & Premiere Pro', 'Meta Business Suite', 'LinkedIn Analytics'],
    methodology: [
      { title: 'Analyze', desc: 'Social listening intelligence, audience segmentation, and competitive benchmarking to understand your institutional brand position in the social conversation landscape.' },
      { title: 'Activate', desc: 'Content calendar engineering, community management frameworks, and influencer partnership strategies that build authentic engagement at institutional scale.' },
      { title: 'Amplify', desc: 'Performance analytics, social commerce integration, and crisis communication protocols that transform social presence into measurable institutional outcomes.' }
    ],
    capabilities: [
      'Corporate Rebranding',
      'Visual Identity Systems',
      'Crisis Communications',
      'Employer Branding',
      'Brand Governance'
    ],
    stats: [
      { value: '400%', label: 'Engagement Growth', icon: Share2 },
      { value: '2.5M+', label: 'Audience Reach', icon: Globe },
      { value: '50+', label: 'Brands Managed', icon: Award },
      { value: '<30m', label: 'Response Time', icon: Zap }
    ],
    engagement: {
      duration: 'Ongoing (monthly retainer)',
      team: '3-6 social strategists & content creators',
      deliverables: 'Social strategy, content calendar, brand assets, community guidelines, monthly analytics reports',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We manage institutional social presence for banks and financial firms — building thought leadership on LinkedIn, managing investor communications, and deploying crisis communication protocols for market-moving events.' },
      { vertical: 'Technology', desc: 'We build developer community engagement, product launch campaigns, and employer branding programs that attract top engineering talent through authentic social content and community cultivation.' },
      { vertical: 'Professional Services', desc: 'We elevate partner and practice-level thought leadership through LinkedIn content programs, podcast strategies, and industry event amplification that position firms as definitive authorities in their domains.' },
    ],
    faq: [
      { q: 'Which social platforms do you manage?', a: 'We manage institutional presence across LinkedIn, Instagram, X (Twitter), YouTube, TikTok, and Facebook. Platform selection is based on where your audience engages and your strategic objectives — we recommend focused excellence on 3-4 platforms rather than diluted presence across all of them.' },
      { q: 'How do you handle social media crises?', a: 'We develop comprehensive crisis communication protocols including pre-approved response templates, escalation procedures, monitoring triggers, and spokesperson coordination plans. When crises occur, our team activates these protocols immediately — typically achieving first response within 15 minutes.' },
      { q: 'Can you create video content?', a: 'Yes. Our content team produces platform-optimized video content including short-form videos for Instagram Reels and TikTok, long-form content for YouTube, and professional video for LinkedIn. We handle scripting, production, editing, and platform-specific optimization.' },
    ],
  },
  'custom-software': {
    heroImage: ASSETS.SERVICE_DIGITAL,
    tagline: 'End-to-end bespoke software engineering — from rapid prototype to sovereign enterprise-scale platforms, architected with institutional precision.',
    challenge: 'Off-the-shelf software forces your business to conform to someone else\'s workflow — creating vendor lock-in, data fragmentation, and integration complexity that compounds over time. Generic SaaS tools were designed for average organizations, not market leaders. Meanwhile, your competitors who invest in bespoke technology gain permanent structural advantages: faster operations, richer data, superior customer experiences, and the ability to iterate at the speed of their ambition rather than their vendor\'s roadmap. We build software that fits your business with absolute precision — not the other way around.',
    quote: 'Your business is sovereign. Your software should be too.',
    deepDive: 'We are a full-service software engineering institution that builds bespoke digital products from architectural blueprint to production deployment. Our product teams include UX designers, frontend engineers, backend architects, QA specialists, and DevOps engineers who operate in disciplined agile sprints with weekly client demonstrations and transparent progress reporting. We leverage modern technology stacks including React, Next.js, Node.js, Python, Go, PostgreSQL, and Kubernetes — selecting the optimal tools for each engagement based on your scale requirements, team capabilities, and long-term maintenance strategy. Every project includes CI/CD pipelines, automated testing at every layer, infrastructure-as-code, and comprehensive documentation that ensures your software can be maintained and evolved long after our engagement concludes. From customer-facing web applications and native mobile apps to complex SaaS platforms and microservices architectures, we deliver production-grade software that becomes your competitive infrastructure.',
    outcomes: [
      '200+ bespoke applications shipped to production across client portfolios',
      '99.9% uptime SLA achievement across all managed platforms',
      '4x faster time-to-market compared to industry benchmarks',
      '60% lower total cost of ownership vs. commercial off-the-shelf alternatives',
      'Complete technology ownership — no vendor lock-in, no recurring licensing',
    ],
    techStack: ['React, Next.js & TypeScript', 'Node.js, Python & Go', 'PostgreSQL, MongoDB & Redis', 'Kubernetes & Docker', 'AWS, Azure & GCP', 'GitHub Actions & GitLab CI/CD'],
    methodology: [
      { title: 'Discovery & Architecture', desc: 'Deep-dive requirements gathering, user story mapping, technical architecture design, and technology stack selection — all aligned to your institutional scale requirements, team capabilities, and long-term sovereignty strategy.' },
      { title: 'Agile Development', desc: 'Disciplined two-week sprint cycles with weekly client demonstrations, continuous integration and deployment pipelines, automated testing at every layer, and transparent progress dashboards.' },
      { title: 'Launch & Scale', desc: 'Production deployment with zero-downtime release strategies, performance monitoring, security hardening, comprehensive documentation, team training, and ongoing support retainers that ensure your software evolves with your institutional ambitions.' }
    ],
    capabilities: [
      'Web Application Development',
      'Mobile App Development',
      'SaaS Platform Engineering',
      'API Design & Microservices',
      'DevOps & CI/CD Pipelines',
      'Legacy System Modernization'
    ],
    stats: [
      { value: '200+', label: 'Apps Shipped', icon: Code2 },
      { value: '99.9%', label: 'Uptime SLA', icon: Shield },
      { value: '4x', label: 'Faster to Market', icon: Zap },
      { value: '60%', label: 'Cost vs Off-Shelf', icon: BarChart }
    ],
    engagement: {
      duration: '8-40 weeks',
      team: '4-12 engineers, designers & QA',
      deliverables: 'Architecture documentation, production application, CI/CD pipeline, test suites, operational runbooks',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We build mission-critical fintech platforms including digital banking applications, payment processing systems, regulatory reporting tools, and client portfolio management portals — all engineered for institutional-grade security, compliance, and 99.99% availability.' },
      { vertical: 'Healthcare', desc: 'We develop HIPAA-compliant healthcare applications including patient management systems, telemedicine platforms, clinical workflow tools, and health data integration engines that connect disparate systems through HL7/FHIR interoperability standards.' },
      { vertical: 'SaaS & Technology', desc: 'We architect multi-tenant SaaS platforms from the ground up — handling authentication, authorization, billing, API design, tenant isolation, and the infrastructure engineering required to scale from hundreds to millions of users without architectural rework.' },
    ],
    faq: [
      { q: 'What technology stacks do you work with?', a: 'Our primary stacks include React/Next.js with TypeScript for frontend, Node.js/Python/Go for backend services, PostgreSQL/MongoDB for databases, and Kubernetes on AWS/Azure/GCP for infrastructure. We select the optimal stack for each engagement based on your requirements, team capabilities, and long-term maintenance strategy — we are not dogmatic about tools.' },
      { q: 'Do you provide ongoing maintenance and support?', a: 'Yes. Every software engagement includes the option for ongoing support retainers covering bug fixes, performance monitoring, security patching, and feature enhancements. We also provide comprehensive documentation and team training so your internal teams can maintain and evolve the software independently.' },
      { q: 'How do you ensure code quality?', a: 'Quality is built into our engineering process: automated testing at unit, integration, and end-to-end levels; continuous integration pipelines with automated code review; performance benchmarking against defined SLAs; security scanning at every deployment; and peer code review by senior engineers. We target >90% test coverage on all critical paths.' },
      { q: 'Can you modernize our legacy systems?', a: 'Absolutely. We specialize in legacy modernization — from monolith-to-microservices migrations to complete platform rewrites. We use incremental modernization strategies that deliver value at each phase while progressively eliminating technical debt. Our strangler fig approach ensures zero disruption during the transition period.' },
    ],
  },
  'brand-management': {
    heroImage: ASSETS.SERVICE_BRAND,
    tagline: 'Sovereign corporate identity codification and institutional brand governance that ensures permanent leadership and premium market perception.',
    challenge: 'Brand is the most valuable intangible asset an institution possesses, yet it is the most frequently mismanaged. Inconsistent messaging, fragmented visual identity, and absence of governance erode brand equity faster than any competitive threat. The organizations that command premium pricing, attract the best talent, and maintain market leadership are those that treat brand as a sovereign institutional asset — governed with the same rigor as financial controls and protected with the same vigilance as intellectual property.',
    quote: 'Where sovereign identity becomes your most defensible institutional asset.',
    deepDive: 'Our Brand Management practice operates at the intersection of strategy, design, and governance. We begin with brand archaeology — deep stakeholder alignment sessions, competitive positioning analysis, and market perception research that uncovers your authentic brand DNA and identifies the whitespace where your brand can establish sovereign authority. From this strategic foundation, we design comprehensive visual identity systems, messaging architectures, and tone-of-voice frameworks that ensure every touchpoint — from your website and marketing materials to internal communications and employer branding — reinforces your institutional market position. Our brand governance frameworks include compliance monitoring, asset management systems, and crisis communication playbooks that protect your brand equity across every channel, market, and stakeholder interaction.',
    outcomes: [
      '85% average brand recall lift following institutional rebrand',
      '2x improvement in premium market perception scores',
      '100+ comprehensive brand audits completed across global portfolios',
      '40+ industries served with tailored brand governance frameworks',
      'Complete brand governance systems with compliance monitoring',
    ],
    techStack: ['Adobe Creative Suite', 'Figma & Sketch', 'Brandfolder & Bynder DAM', 'Brand Guidelines Platforms', 'Social Listening & Sentiment Analysis', 'Market Research & Perception Surveys'],
    methodology: [
      { title: 'Define', desc: 'Brand archaeology, executive stakeholder alignment, and strategic positioning work that uncovers your authentic institutional brand DNA and articulates a differentiated sovereign market narrative.' },
      { title: 'Design', desc: 'Visual identity systems, brand guideline codification, and institutional asset library creation that ensure every touchpoint reinforces your premium sovereign market position.' },
      { title: 'Defend', desc: 'Brand governance frameworks, compliance monitoring systems, and crisis communication playbooks that protect your institutional brand equity across every sovereign channel and market.' }
    ],
    capabilities: [
      'Corporate Rebranding',
      'Visual Identity Systems',
      'Crisis Communications',
      'Employer Branding',
      'Brand Governance'
    ],
    stats: [
      { value: '85%', label: 'Brand Recall Lift', icon: Award },
      { value: '2x', label: 'Premium Perception', icon: BarChart },
      { value: '100+', label: 'Brand Audits Done', icon: CheckCircle2 },
      { value: '40+', label: 'Industries Covered', icon: Globe }
    ],
    engagement: {
      duration: '10-24 weeks',
      team: '3-6 brand strategists & designers',
      deliverables: 'Brand strategy, visual identity system, brand guidelines, asset library, governance framework',
    },
    industryApplications: [
      { vertical: 'Financial Services', desc: 'We build institutional brand architectures for banks, asset managers, and insurance groups — communicating trust, stability, and expertise across complex product portfolios while differentiating in markets where functional capabilities are increasingly commoditized.' },
      { vertical: 'Professional Services', desc: 'We design brand systems for consulting firms, law firms, and accounting practices that attract premium clients and top-tier talent — positioning firms as definitive authorities in their practice areas through strategic brand positioning and visual distinction.' },
      { vertical: 'Technology', desc: 'We create brand architectures for technology companies that communicate innovation, reliability, and enterprise readiness — differentiating in crowded markets where product features alone cannot sustain competitive advantage.' },
    ],
    faq: [
      { q: 'How long does a complete rebrand take?', a: 'A comprehensive institutional rebrand typically spans 16-24 weeks, covering strategy, visual identity design, brand guidelines, asset creation, and governance framework deployment. For more focused engagements — such as visual identity refresh or brand guidelines creation — we can deliver in 8-12 weeks.' },
      { q: 'Do you handle the rollout across all touchpoints?', a: 'Yes. We manage brand rollout across digital properties, marketing materials, internal communications, signage, and employer branding touchpoints. We create implementation playbooks with prioritized rollout schedules and provide quality assurance during the transition period to ensure consistency.' },
      { q: 'How do you protect brand consistency at scale?', a: 'We implement brand governance systems including digital asset management platforms, brand compliance monitoring tools, approval workflows, and training programs. These systems make brand consistency the path of least resistance — ensuring every team, agency, and stakeholder produces brand-compliant materials.' },
    ],
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const serviceMeta = SERVICES.find(s => s.path.split('/').pop() === id);
  const content = serviceMeta ? SERVICE_CONTENT[serviceMeta.id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .scroll-parallax-card, .text-reveal-3d, .scroll-3d-enter').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!serviceMeta || !content) return <Navigate to="/services" replace />;

  const relatedServices = SERVICES.filter(s => s.id !== serviceMeta.id).slice(0, 3);

  return (
    <>
      <SEOHead
        pageKey={`service-${serviceMeta.id}`}
        title={`${serviceMeta.title} Consulting Services | Onsective`}
        description={content.tagline}
        breadcrumbs={[
          { name: 'Home', url: 'https://onsective.com/' },
          { name: 'Services', url: 'https://onsective.com/services' },
          { name: serviceMeta.title, url: `https://onsective.com/services/${id}` },
        ]}
        faqItems={content.faq}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <img src={content.heroImage} alt={serviceMeta.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b45] via-[#0d2b45]/80 to-[#0d2b45]/40" />
        <div className="absolute inset-0 perspective-grid opacity-30"></div>

        {/* Particle field */}
        <div className="particle-field">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-20 pt-40">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-white/40 mb-8 font-['Plus_Jakarta_Sans'] animate-on-scroll">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-[#c1912f] transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-[#c1912f]">{serviceMeta.title}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-6 animate-on-scroll delay-100">{serviceMeta.title}</h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-3xl leading-relaxed font-['Plus_Jakarta_Sans'] animate-on-scroll delay-200">{content.tagline}</p>

          {/* Quick stats bar */}
          <div className="flex flex-wrap gap-8 mt-10 animate-on-scroll delay-300">
            {content.engagement && (
              <>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#c1912f]" />
                  <span className="text-white/40 text-sm font-['Plus_Jakarta_Sans']">{content.engagement.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#c1912f]" />
                  <span className="text-white/40 text-sm font-['Plus_Jakarta_Sans']">{content.engagement.team}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ===== THE CHALLENGE + STATS ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">The Institutional Imperative</span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 leading-tight font-bold">The Competitive Imperative</h2>
              <p className="text-[#64748b] text-base leading-relaxed mb-10 font-['Plus_Jakarta_Sans']">{content.challenge}</p>
              <div className="bg-[#f1f5f9] p-6 md:p-8 border-l-4 border-[#c1912f] rounded-r-lg holo-shimmer">
                <p className="font-['Playfair_Display'] italic text-[#1a1a2e] text-lg">"{content.quote}"</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              {content.stats.map((stat: any, i: number) => (
                <div key={i} className={`p-6 md:p-8 text-center flex flex-col items-center justify-center rounded-lg stat-glow magnetic-3d ${i === 0 ? 'bg-[#0d2b45] text-white' : 'bg-[#f1f5f9] border border-[#e2e8f0]'}`}>
                  <stat.icon className="text-[#c1912f] mb-3" size={24} />
                  <span className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold">{stat.value}</span>
                  <span className="text-xs font-medium mt-2 opacity-60 font-['Plus_Jakarta_Sans']">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3D SCROLL-LINKED SERVICE SCENE ===== */}
      {(() => {
        const Scene = getSceneForService(serviceMeta.id);
        return Scene ? <Scene /> : null;
      })()}

      {/* ===== DEEP DIVE — NEW SECTION ===== */}
      <section className="py-28 md:py-40 bg-[#f1f5f9] relative overflow-hidden">
        <div className="hex-grid-bg"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="text-reveal-3d">
                <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Deep Dive</span>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 font-bold">How We Deliver</h2>
                <p className="text-[#64748b] text-base leading-[1.8] font-['Plus_Jakarta_Sans'] mb-8">{content.deepDive}</p>

                {/* Engagement details */}
                {content.engagement && (
                  <div className="bg-white rounded-lg p-6 border border-[#e2e8f0] gradient-border">
                    <h4 className="font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-4 text-lg">Engagement Structure</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Clock size={14} className="text-[#c1912f]" />
                          <span className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans']">Timeline</span>
                        </div>
                        <span className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{content.engagement.duration}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Users size={14} className="text-[#c1912f]" />
                          <span className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans']">Team</span>
                        </div>
                        <span className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{content.engagement.team}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Layers size={14} className="text-[#c1912f]" />
                          <span className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans']">Deliverables</span>
                        </div>
                        <span className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{content.engagement.deliverables}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technology stack sidebar */}
            <div className="lg:col-span-2">
              <div className="scroll-parallax-card sticky top-32">
                <div className="bg-[#0d2b45] rounded-lg p-8">
                  <h4 className="font-['Playfair_Display'] font-bold text-white mb-6 text-lg">Technology & Tooling</h4>
                  <div className="space-y-3">
                    {content.techStack?.map((tech: string, i: number) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#c1912f] rounded-full shrink-0"></div>
                        <span className="text-white/60 text-sm font-['Plus_Jakarta_Sans']">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable outcomes */}
                <div className="bg-white rounded-lg p-8 mt-6 border border-[#e2e8f0]">
                  <h4 className="font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-6 text-lg">Proven Outcomes</h4>
                  <div className="space-y-4">
                    {content.outcomes?.map((outcome: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#c1912f] shrink-0 mt-0.5" />
                        <span className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH (3 STEPS) ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45] relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-20"></div>
        <div className="particle-field">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
          <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Institutional Methodology</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-['Playfair_Display'] mb-6 font-bold text-white">Our Proven Approach</h2>
          <p className="text-white/30 text-lg max-w-2xl mx-auto mb-16 font-['Plus_Jakarta_Sans']">
            A disciplined, battle-tested methodology refined across hundreds of institutional engagements and deployed with precision across every sovereign market we serve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.methodology.map((step: any, i: number) => (
              <Link
                key={i}
                to={`/services/${id}/methodology/${getMethodologySlug(step.title)}`}
                className="scroll-3d-enter bg-white/5 border border-white/10 p-8 md:p-10 text-left hover:bg-white/10 hover:border-[#c1912f]/40 transition-all duration-300 rounded-lg holo-shimmer group block cursor-pointer"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl md:text-6xl font-['Playfair_Display'] text-[#c1912f]/30 mb-6 font-bold group-hover:text-[#c1912f]/50 transition-colors">0{i + 1}</div>
                <h3 className="text-xl font-['Playfair_Display'] mb-4 text-white font-bold group-hover:text-[#c1912f] transition-colors">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{step.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#c1912f] font-['Plus_Jakarta_Sans'] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Phase <ArrowRight size={12} />
                </div>
                {/* Bottom accent */}
                <div className="mt-3 h-[2px] bg-gradient-to-r from-[#c1912f]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="py-28 md:py-40 bg-white relative overflow-hidden">
        <div className="hex-grid-bg"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3 animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Institutional Capabilities</span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 font-bold">Domain Capabilities</h2>
              <p className="text-[#64748b] mb-6 font-['Plus_Jakarta_Sans']">Deep-rooted institutional expertise across the entire digital ecosystem. Each capability represents a sovereign domain of mastery refined across hundreds of deployments.</p>

              {/* 3D rotating element */}
              <div className="hidden lg:block cube-stage my-8" style={{ perspective: '900px' }}>
                <div className="cube-3d">
                  <div className="face front">Discover</div>
                  <div className="face back">Design</div>
                  <div className="face right">Deliver</div>
                  <div className="face left">Optimize</div>
                  <div className="face top">Scale</div>
                  <div className="face bottom">Govern</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <Link to="/contact">
                  <span className="inline-flex items-center gap-2 px-7 py-3 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer rounded-md">
                    Schedule a Consultation <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.capabilities.map((cap: string, i: number) => (
                <Link
                  key={i}
                  to={`/services/${id}/capability/${toSlug(cap)}`}
                  className="scroll-parallax-card p-5 bg-[#f1f5f9] border border-[#e2e8f0] flex justify-between items-center group hover:bg-white hover:border-[#c1912f]/30 transition-all rounded-lg magnetic-3d"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans']">{cap}</span>
                  <ArrowRight size={18} className="text-[#c1912f]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY APPLICATIONS ===== */}
      {content.industryApplications && (
        <section className="py-28 md:py-40 bg-[#0d2b45] relative overflow-hidden">
          <div className="absolute inset-0 perspective-grid opacity-15"></div>
          <div className="particle-field">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 6}s`,
                }}
              />
            ))}
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
            <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Vertical Expertise</span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-white font-bold mb-4">Industry Applications</h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
                How we deploy {serviceMeta.title.toLowerCase()} expertise across the verticals we serve.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.industryApplications.map((app: any, i: number) => (
                <div
                  key={i}
                  className="scroll-3d-enter bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all holo-shimmer group"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#c1912f]/20 flex items-center justify-center">
                      <Globe size={18} className="text-[#c1912f]" />
                    </div>
                    <h3 className="text-lg font-['Playfair_Display'] font-bold text-white">{app.vertical}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{app.desc}</p>
                  <div className="mt-6 h-[2px] bg-gradient-to-r from-[#c1912f]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      {content.faq && (
        <section className="py-28 md:py-40 bg-white border-t border-[#e2e8f0]">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Common Questions</span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-[#64748b] text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
                Answers to the questions enterprise leaders most frequently ask about our {serviceMeta.title.toLowerCase()} practice.
              </p>
            </div>
            <div className="space-y-6">
              {content.faq.map((item: any, i: number) => (
                <div
                  key={i}
                  className="scroll-parallax-card bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg p-6 md:p-8 hover:border-[#c1912f]/30 transition-all"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h4 className="text-base font-semibold text-[#1a1a2e] mb-3 font-['Plus_Jakarta_Sans'] flex items-start gap-3">
                    <span className="text-[#c1912f] font-bold text-lg leading-none mt-0.5">Q.</span>
                    {item.q}
                  </h4>
                  <p className="text-sm text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans'] pl-7">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== WHY THIS SERVICE — NEW SECTION ===== */}
      <section className="py-28 md:py-40 bg-[#f1f5f9] border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 text-reveal-3d">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">The Onsective Advantage</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-4">Why Choose Onsective for {serviceMeta.title}</h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              The institutional distinction that separates our practice from every alternative in the market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Principal-Led Delivery',
                desc: 'Every engagement is led by a senior principal with deep domain expertise — not junior consultants reading from playbooks. You get the strategist, the architect, and the engineer in one relationship.',
              },
              {
                icon: Target,
                title: 'Outcome-Indexed Commercial Models',
                desc: 'We tie our compensation to your measurable business outcomes. When you succeed, we succeed. This alignment eliminates incentive conflicts and ensures every recommendation serves your institutional interests.',
              },
              {
                icon: TrendingUp,
                title: 'Compounding Value Architecture',
                desc: 'We don\'t build point solutions — we architect systems that compound in value over time. Every engagement is designed to create infrastructure that delivers increasing returns as your business scales.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="scroll-parallax-card bg-white rounded-lg p-8 border border-[#e2e8f0] hover:border-[#c1912f]/30 transition-all magnetic-3d"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#c1912f]/10 flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-[#c1912f]" />
                </div>
                <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3">{item.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO: LOCATIONS ===== */}
      <section className="py-20 bg-[#f1f5f9] border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Global Presence</span>
            <h2 className="text-2xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-3">
              {serviceMeta.title} Delivered Across 10 Global Markets
            </h2>
            <p className="text-[#64748b] text-base max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Onsective serves {serviceMeta.title.toLowerCase()} clients across every major global market. Explore delivery in your region.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { id: 'toronto', city: 'Toronto', flag: '🇨🇦' },
              { id: 'new-york', city: 'New York', flag: '🇺🇸' },
              { id: 'london', city: 'London', flag: '🇬🇧' },
              { id: 'dubai', city: 'Dubai', flag: '🇦🇪' },
              { id: 'mumbai', city: 'Mumbai', flag: '🇮🇳' },
              { id: 'singapore', city: 'Singapore', flag: '🇸🇬' },
              { id: 'sydney', city: 'Sydney', flag: '🇦🇺' },
              { id: 'berlin', city: 'Berlin', flag: '🇩🇪' },
              { id: 'san-francisco', city: 'San Francisco', flag: '🇺🇸' },
              { id: 'vancouver', city: 'Vancouver', flag: '🇨🇦' }
            ].map(loc => (
              <Link
                key={loc.id}
                to={`/services/${id}/in/${loc.id}`}
                className="p-4 bg-white border border-[#e2e8f0] rounded-lg text-center hover:border-[#c1912f]/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="text-2xl mb-1">{loc.flag}</div>
                <div className="text-xs font-semibold text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{serviceMeta.title}</div>
                <div className="text-xs text-[#c1912f] font-['Plus_Jakarta_Sans']">in {loc.city}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO: INDUSTRIES ===== */}
      <section className="py-20 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Industry Fit</span>
            <h2 className="text-2xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-3">
              {serviceMeta.title} Tuned to Your Industry
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { id: 'banking', name: 'Banking' },
              { id: 'healthcare', name: 'Healthcare' },
              { id: 'retail', name: 'Retail' },
              { id: 'manufacturing', name: 'Manufacturing' },
              { id: 'energy', name: 'Energy' },
              { id: 'technology', name: 'Technology' },
              { id: 'professional-services', name: 'Professional Services' },
              { id: 'education', name: 'Education' },
              { id: 'government', name: 'Government' },
              { id: 'media', name: 'Media' }
            ].map(ind => (
              <Link
                key={ind.id}
                to={`/services/${id}/for/${ind.id}`}
                className="p-4 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg text-center hover:border-[#c1912f]/40 hover:bg-white transition-all"
              >
                <div className="text-sm font-semibold text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{ind.name}</div>
                <div className="text-xs text-[#c1912f] font-['Plus_Jakarta_Sans'] mt-1">→ {serviceMeta.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO: INTENT LINKS ===== */}
      <section className="py-16 bg-[#0d2b45] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-10">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Popular Searches</span>
            <h2 className="text-xl md:text-2xl font-['Playfair_Display'] text-white font-bold">Common {serviceMeta.title} Questions</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['pricing', 'agency', 'company', 'consulting', 'firm', 'experts', 'solutions', 'services', 'near-me', 'reviews'].map(intent => (
              <Link
                key={intent}
                to={`/services/${id}/intent/${intent}`}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white/10 hover:text-white hover:border-[#c1912f]/40 transition-all font-['Plus_Jakarta_Sans']"
              >
                {serviceMeta.title} {intent.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      <section className="py-28 md:py-40 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Explore Further</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Related Practice Domains</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => (
              <Link
                key={service.id}
                to={service.path}
                className="scroll-parallax-card group bg-white border border-[#e2e8f0] rounded-lg overflow-hidden hover:border-[#c1912f]/30 transition-all duration-300 magnetic-3d"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-8">
                  <service.icon className="text-[#c1912f] mb-6" size={24} />
                  <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3 group-hover:text-[#c1912f] transition-colors">{service.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#c1912f] font-['Plus_Jakarta_Sans']">
                    Explore <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(135deg, transparent 40%, #c1912f 40.5%, #c1912f 41%, transparent 41.5%)' }}></div>
        <div className="particle-field">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 relative z-10">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 font-bold">Begin Your Transformation</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-['Plus_Jakarta_Sans']">
            Connect with our practice principals to discuss how {serviceMeta.title.toLowerCase()} can architect your institutional competitive advantage and accelerate your most ambitious strategic objectives.
          </p>
          <Link to="/contact">
            <span className="inline-flex items-center gap-3 px-6 sm:px-10 py-3.5 sm:py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer rounded-md">
              Schedule a Consultation <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
