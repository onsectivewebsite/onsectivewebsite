import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Quote, ChevronRight, Lightbulb, BarChart3, Shield, Target, Layers } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { ALL_INSIGHTS, LATEST_INSIGHTS, SERVICES } from '../constants';

/* ------------------------------------------------------------------ */
/*  CATEGORY-SPECIFIC DEEP CONTENT                                    */
/* ------------------------------------------------------------------ */
const CATEGORY_CONTENT: Record<string, {
  overview: string;
  landscape: string;
  challenges: string[];
  framework: { title: string; desc: string }[];
  principles: { title: string; desc: string }[];
  industryImpact: string;
  futureOutlook: string;
  keyMetrics: { value: string; label: string }[];
  caseContext: string;
  recommendation: string;
}> = {
  'Artificial Intelligence': {
    overview: 'Artificial intelligence has transitioned from an experimental curiosity to the defining competitive infrastructure of the modern enterprise. Organizations that deploy AI effectively are not merely automating processes — they are fundamentally restructuring how decisions are made, how customers are served, and how value is created across every function. The gap between AI-mature organizations and their peers is no longer incremental; it is structural and widening with every quarter of inaction.',
    landscape: 'The AI landscape in 2026 is characterized by the convergence of several transformative forces: the maturation of large language models into production-grade enterprise tools, the democratization of machine learning infrastructure through managed cloud services, and the emergence of AI governance frameworks that enable deployment in regulated industries. Simultaneously, the talent market has evolved — organizations no longer need armies of PhD researchers to deploy AI effectively. What they need is engineering discipline, data architecture maturity, and institutional willingness to restructure workflows around intelligent systems.',
    challenges: [
      'Data fragmentation across legacy systems creates fundamental barriers to model training and deployment',
      'Organizational resistance to AI-driven decision-making undermines adoption at the operational level',
      'Lack of MLOps maturity leads to models that perform in testing but degrade rapidly in production environments',
      'Regulatory uncertainty around AI governance creates compliance risk for enterprises in regulated verticals',
      'Talent scarcity in AI engineering forces organizations to choose between building internal capability and outsourcing to specialized partners',
    ],
    framework: [
      { title: 'Data Foundation Assessment', desc: 'Before any model is built, we evaluate the quality, accessibility, and governance of your enterprise data estate. AI systems are only as powerful as the data infrastructure they operate on — and most organizations discover significant gaps in data readiness that must be addressed before meaningful AI deployment can begin.' },
      { title: 'Use Case Prioritization & ROI Modeling', desc: 'We systematically identify and rank AI opportunities across your operations using a proprietary scoring framework that weighs implementation complexity against business impact. This ensures that initial deployments target the highest-value opportunities and establish the organizational credibility needed for enterprise-wide scaling.' },
      { title: 'Production Engineering & MLOps', desc: 'Our engineering teams build AI systems designed for production reliability — not lab demonstrations. Every model is deployed through automated MLOps pipelines with continuous monitoring, drift detection, automated retraining, and explainability frameworks that satisfy both technical and regulatory requirements.' },
      { title: 'Organizational Change Management', desc: 'Technology deployment without organizational adoption is waste. We embed change management into every AI engagement — training end users, restructuring workflows, and building internal champions who ensure that AI systems are actually used to drive the outcomes they were designed to deliver.' },
    ],
    principles: [
      { title: 'Production Over Proof-of-Concept', desc: 'We measure success by production deployment and business impact, not by model accuracy in controlled environments. Every engagement is structured to deliver measurable ROI within 90 days of production deployment.' },
      { title: 'Responsible AI Governance', desc: 'Every AI system we build includes transparency, fairness, and accountability frameworks. We implement bias detection, model explainability, and audit trails that satisfy regulatory requirements and maintain stakeholder trust.' },
      { title: 'Human-in-the-Loop Architecture', desc: 'We design AI systems that augment human decision-making rather than replace it. Critical decisions maintain human oversight, while AI handles the data processing, pattern recognition, and recommendation generation that humans cannot perform at scale.' },
    ],
    industryImpact: 'Across financial services, AI is transforming credit risk assessment, fraud detection, and algorithmic trading with models that process billions of data points in real time. In healthcare, AI-powered diagnostic systems are achieving specialist-level accuracy in radiology and pathology, while clinical NLP systems extract structured insights from unstructured medical records at unprecedented scale. Manufacturing organizations are deploying computer vision for quality assurance and predictive maintenance, reducing defect rates by 60-70% and eliminating unplanned downtime. Retail enterprises leverage AI for demand forecasting, dynamic pricing, and hyper-personalized customer experiences that drive measurable conversion improvements.',
    futureOutlook: 'The next 24 months will be defined by the enterprise adoption of agentic AI — systems that don\'t merely respond to queries but autonomously execute complex, multi-step workflows across enterprise applications. Organizations that build the data infrastructure, governance frameworks, and organizational readiness for agentic AI today will hold decisive competitive advantages when these systems reach production maturity. The window for establishing AI leadership is narrowing; the cost of delayed investment is compounding.',
    keyMetrics: [
      { value: '70%', label: 'Process Acceleration' },
      { value: '45%', label: 'Cost Reduction' },
      { value: '10x', label: 'Data Throughput' },
      { value: '95%', label: 'Model Accuracy' },
    ],
    caseContext: 'In a recent engagement with a Tier-1 financial institution, our AI practice deployed a real-time fraud detection system that reduced false positive rates by 78% while increasing true positive detection by 340%. The system processes 2.4 million transactions per hour and has prevented over $180M in fraudulent activity within its first year of production operation.',
    recommendation: 'Organizations should begin with a comprehensive AI readiness assessment that evaluates data maturity, infrastructure capability, and organizational preparedness. From this baseline, prioritize 2-3 high-impact use cases that can deliver measurable ROI within 90 days — building institutional credibility and organizational muscle for broader AI adoption.',
  },
  'Cloud & Infrastructure': {
    overview: 'Cloud computing has evolved from a cost-optimization strategy into the fundamental operating model for institutional-grade enterprises. The question is no longer whether to migrate to cloud, but how to architect cloud-native infrastructure that delivers sovereign data compliance, elastic scalability, and the operational resilience that global business operations demand. Organizations that treat cloud as merely "someone else\'s data center" are missing the transformative potential of cloud-native architecture.',
    landscape: 'The cloud landscape in 2026 is defined by multi-cloud pragmatism, sovereign cloud mandates, and the maturation of FinOps as a critical governance discipline. AWS, Azure, and GCP continue to compete aggressively on capabilities, while sovereign cloud requirements in the EU, Middle East, and Asia-Pacific are creating new architectural constraints that demand specialized expertise. Edge computing is moving from experimental to production-critical, and Kubernetes has become the universal orchestration layer connecting on-premise, cloud, and edge workloads.',
    challenges: [
      'Lift-and-shift migrations that replicate on-premise inefficiencies in cloud environments, eliminating the cost benefits that motivated migration',
      'Multi-cloud complexity creating operational overhead that exceeds the resilience benefits of distributed architecture',
      'FinOps immaturity allowing cloud costs to escalate 40-60% beyond initial projections within the first 18 months',
      'Sovereign data compliance requirements fragmenting cloud architecture and limiting workload portability across regions',
      'Skills gaps in cloud-native development preventing organizations from leveraging serverless, containerized, and event-driven architectures',
    ],
    framework: [
      { title: 'Cloud Readiness & TCO Assessment', desc: 'We conduct forensic assessments of your application portfolio, mapping dependencies, identifying migration candidates, and modeling total cost of ownership across cloud, hybrid, and on-premise deployment scenarios. This analysis provides the data foundation for informed migration decisions.' },
      { title: 'Architecture & Migration Planning', desc: 'Our cloud architects design target-state architectures that optimize for your specific compliance, performance, and cost requirements. We categorize workloads by migration strategy — rehost, replatform, refactor, or rebuild — and sequence migrations for maximum business continuity.' },
      { title: 'Zero-Downtime Migration Execution', desc: 'Our migration teams execute phased transitions using automated validation pipelines, parallel-run environments, and instant rollback capabilities. Every migration is monitored in real time with automated health checks that ensure zero disruption to business operations.' },
      { title: 'FinOps & Continuous Optimization', desc: 'Post-migration, our FinOps practice implements cost governance dashboards, right-sizing automation, reserved instance optimization, and anomaly detection systems that ensure your cloud estate delivers maximum institutional value at minimum operational expenditure.' },
    ],
    principles: [
      { title: 'Sovereignty-First Architecture', desc: 'Every cloud architecture we design accounts for data sovereignty, regulatory compliance, and jurisdictional requirements. We build infrastructure that meets the most demanding governance frameworks while maintaining the agility benefits of cloud-native operations.' },
      { title: 'Cost Transparency & Accountability', desc: 'We implement FinOps practices that provide real-time visibility into cloud spending by team, application, and business function. Cost accountability is embedded into engineering culture, not managed as an afterthought.' },
      { title: 'Zero-Downtime as Default', desc: 'We architect for resilience at every layer — from multi-region failover and automated disaster recovery to rolling deployments and blue-green infrastructure. Downtime is not a calculated risk; it is an engineering failure we design to prevent.' },
    ],
    industryImpact: 'Financial services organizations are leveraging sovereign cloud architectures to meet regulatory requirements while enabling real-time trading platforms and fraud detection systems. Healthcare institutions deploy HIPAA-compliant cloud infrastructure for electronic health records, telemedicine platforms, and genomic data processing. Manufacturing enterprises use edge-cloud hybrid architectures to process IoT sensor data in real time, enabling predictive maintenance and digital twin simulations. Retail organizations deploy globally distributed cloud infrastructure that scales elastically during peak demand periods while maintaining sub-100ms response times.',
    futureOutlook: 'The next phase of cloud evolution will be defined by AI-native cloud platforms, serverless-first architectures, and the convergence of edge computing with 5G networks. Organizations that invest in cloud-native skill development, FinOps maturity, and sovereign compliance frameworks today will be positioned to leverage these capabilities as they reach production readiness.',
    keyMetrics: [
      { value: '35%', label: 'Cost Reduction' },
      { value: '99.99%', label: 'Uptime Achieved' },
      { value: '200+', label: 'Migrations Done' },
      { value: '0', label: 'Downtime Events' },
    ],
    caseContext: 'We recently completed a full-estate cloud migration for a multinational insurance group — migrating 340+ applications across 12 countries to a multi-cloud architecture spanning AWS and Azure. The migration was completed in 8 months with zero unplanned downtime, achieving a 38% reduction in infrastructure costs and a 4x improvement in deployment frequency.',
    recommendation: 'Start with a cloud readiness assessment that honestly evaluates your current application portfolio, data sovereignty requirements, and organizational cloud maturity. Prioritize quick-win migrations that build confidence and capability, then sequence complex workloads using proven migration frameworks.',
  },
  'Cybersecurity': {
    overview: 'Cybersecurity is no longer a technical function — it is an institutional imperative that sits at the intersection of business continuity, regulatory compliance, and stakeholder trust. The threat landscape has evolved beyond the capabilities of perimeter-based defenses, and organizations face sophisticated adversaries deploying AI-powered attacks, supply chain compromises, and insider threats that bypass conventional controls. The question is not whether your organization will be targeted, but whether your security architecture will contain the attack when it comes.',
    landscape: 'The cybersecurity landscape in 2026 is shaped by the weaponization of AI by threat actors, the expansion of attack surfaces through cloud, IoT, and remote work infrastructure, and the tightening of regulatory requirements globally. Zero-trust architecture has moved from aspiration to mandate, identity has become the new perimeter, and security operations centers must process millions of events per day to detect the subtle indicators of sophisticated intrusions. Nation-state actors, organized crime syndicates, and hacktivists operate with increasing sophistication.',
    challenges: [
      'Legacy security architectures built on perimeter defense cannot protect distributed, cloud-native infrastructure',
      'Alert fatigue from security tooling generates thousands of false positives, masking genuine threats in noise',
      'Identity sprawl across cloud services, SaaS applications, and third-party integrations creates unmanaged attack surfaces',
      'Supply chain security risks expand the threat perimeter far beyond organizational boundaries',
      'Cybersecurity talent shortage forces organizations to operate security programs with insufficient specialist coverage',
    ],
    framework: [
      { title: 'Threat Landscape Assessment', desc: 'We begin with comprehensive threat modeling that maps every attack surface across your digital estate — from cloud infrastructure and API endpoints to employee devices and third-party integrations. This assessment identifies vulnerabilities that automated scanning cannot detect.' },
      { title: 'Zero-Trust Architecture Design', desc: 'We design and implement zero-trust security architectures that verify every access request, segment every network zone, and encrypt every data flow. Identity-centric security controls replace perimeter-based defenses, eliminating lateral movement and containing breaches.' },
      { title: 'Security Operations Deployment', desc: 'We deploy 24/7 security operations centers with SIEM, SOAR, and XDR platforms that process millions of security events, correlate threat intelligence, and execute automated response playbooks that neutralize threats in minutes.' },
      { title: 'Incident Response & Resilience', desc: 'We engineer incident response frameworks that include detection playbooks, containment protocols, forensic investigation procedures, and business continuity plans. Regular tabletop exercises and red-team engagements ensure your organization can respond effectively under pressure.' },
    ],
    principles: [
      { title: 'Assume Breach', desc: 'We design every security architecture with the assumption that adversaries are already inside your perimeter. This mindset drives defense-in-depth strategies that detect, contain, and neutralize threats regardless of their origin.' },
      { title: 'Identity-Centric Security', desc: 'In a world without perimeters, identity is the last defensible boundary. We implement identity governance, privileged access management, and continuous authentication that ensures only verified entities access your critical systems.' },
      { title: 'Continuous Validation', desc: 'Security is not a state; it is a process. We implement continuous security validation through automated penetration testing, vulnerability scanning, and configuration compliance monitoring that ensures your defenses evolve with the threat landscape.' },
    ],
    industryImpact: 'Financial institutions face the most sophisticated threat actors in the world and require security architectures that protect trillions of dollars in assets while maintaining real-time transaction processing. Healthcare organizations must protect patient data under HIPAA while enabling the data sharing that modern clinical operations require. Critical infrastructure operators in energy and utilities face nation-state threats that could disrupt essential services for millions of people. Retail organizations must protect customer payment data, personal information, and brand reputation across massive, distributed digital estates.',
    futureOutlook: 'The next phase of cybersecurity will be defined by AI-powered defense systems that detect and respond to threats faster than human analysts, the integration of security into every phase of software development (DevSecOps), and the emergence of quantum-resistant cryptography. Organizations that invest in security automation, identity governance, and workforce training today will be best positioned to defend against the threats of tomorrow.',
    keyMetrics: [
      { value: '0', label: 'Breaches Tolerated' },
      { value: '24/7', label: 'SOC Coverage' },
      { value: '<15m', label: 'Response Time' },
      { value: '100%', label: 'Compliance Rate' },
    ],
    caseContext: 'In a recent red-team engagement for a global financial services firm, our security team identified 23 previously unknown attack vectors including a critical supply chain vulnerability that could have enabled unauthorized access to core banking systems. Our zero-trust remediation program closed all identified vulnerabilities within 6 weeks and reduced the organization\'s mean time to detect from 72 hours to under 12 minutes.',
    recommendation: 'Begin with an honest assessment of your current security posture — not what your tools report, but what a determined adversary would discover. Prioritize identity governance, zero-trust architecture, and incident response readiness. Security is not a product you buy; it is a discipline you build.',
  },
  'Digital Transformation': {
    overview: 'Digital transformation is the most misused term in enterprise technology. True transformation is not about deploying new tools or digitizing existing processes — it is about fundamentally restructuring how an organization creates, delivers, and captures value in a digital-first economy. The organizations that succeed treat transformation as an architectural endeavor, not a technology project.',
    landscape: 'The digital transformation landscape has matured beyond the hype cycle. Organizations that embarked on transformation initiatives during 2020-2023 are now confronting the reality that technology deployment without organizational change management delivers marginal returns. The winners are those that integrated transformation into their operating models — restructuring teams, redefining processes, and rebuilding culture around digital-native ways of working.',
    challenges: [
      'Legacy system dependencies create integration complexity that slows transformation velocity',
      'Organizational silos prevent the cross-functional collaboration that transformation requires',
      'Change fatigue from previous failed initiatives creates institutional resistance to new programs',
      'Misalignment between technology investment and business outcomes erodes executive confidence',
      'Talent gaps in digital skills prevent organizations from operating new platforms effectively',
    ],
    framework: [
      { title: 'Digital Maturity Diagnostic', desc: 'We assess your organization across six dimensions of digital maturity — strategy, technology, operations, culture, data, and customer experience — establishing a quantified baseline and identifying the highest-impact improvement opportunities.' },
      { title: 'Transformation Architecture', desc: 'We design end-to-end transformation blueprints that sequence technology, process, and organizational changes for maximum impact with minimum disruption. Every initiative is mapped to measurable business outcomes.' },
      { title: 'Agile Delivery & Change Management', desc: 'We execute transformation programs through agile delivery sprints with embedded change management — training users, restructuring workflows, and building organizational champions who sustain momentum beyond our engagement.' },
      { title: 'Value Measurement & Optimization', desc: 'We implement measurement frameworks that track transformation impact across operational efficiency, revenue growth, customer satisfaction, and employee engagement — providing the data leadership needs to make informed investment decisions.' },
    ],
    principles: [
      { title: 'Business Outcomes First', desc: 'Every transformation initiative must answer the question: "What measurable business outcome does this deliver?" Technology without clear business purpose is waste.' },
      { title: 'Architecture Over Tools', desc: 'Successful transformation is an architectural endeavor. We design composable, modular platforms that can evolve as business needs change — not monolithic systems that create new forms of lock-in.' },
      { title: 'People Before Platforms', desc: 'The most sophisticated technology fails without organizational adoption. We invest as much in change management, training, and cultural transformation as we do in technology deployment.' },
    ],
    industryImpact: 'Financial services institutions are transforming from branch-centric to digital-native operating models, reimagining customer onboarding, lending, and wealth management through digital channels. Healthcare organizations are building connected care ecosystems that integrate electronic health records, telemedicine, remote monitoring, and AI-powered clinical decision support. Manufacturing companies are deploying Industry 4.0 platforms that connect shop-floor IoT data with enterprise planning systems. Retail organizations are unifying online and offline commerce into seamless omnichannel experiences.',
    futureOutlook: 'The next wave of digital transformation will be defined by composable enterprise architectures, AI-native business processes, and the convergence of physical and digital operations through IoT and digital twin technologies. Organizations that build modular, API-first platforms today will be positioned to integrate these emerging capabilities rapidly.',
    keyMetrics: [
      { value: '3x', label: 'Innovation Speed' },
      { value: '40%', label: 'OpEx Reduction' },
      { value: '120+', label: 'Clients Served' },
      { value: '500+', label: 'Projects Delivered' },
    ],
    caseContext: 'We led a comprehensive digital transformation for a multinational manufacturing group, migrating from a 25-year-old ERP system to a composable, cloud-native platform. The transformation reduced operational costs by 42%, accelerated order-to-delivery cycles by 60%, and enabled real-time visibility across 18 production facilities in 7 countries.',
    recommendation: 'Begin with an honest digital maturity assessment. Map your transformation ambitions against your organizational readiness — not just your technology capabilities. Sequence initiatives to build momentum and credibility, starting with high-impact, lower-complexity wins.',
  },
  'Enterprise SEO': {
    overview: 'Search engine optimization at enterprise scale is fundamentally different from SEO for small businesses. Enterprise SEO is a technical engineering discipline that requires architectural thinking, programmatic execution, and the organizational alignment to implement changes across thousands — sometimes millions — of pages. The organizations that dominate search results treat their organic visibility as critical institutional infrastructure.',
    landscape: 'Enterprise SEO in 2026 is shaped by AI-generated content flooding search results, the evolution of search interfaces through AI overviews and conversational search, and the increasing importance of entity-based optimization over keyword-based strategies. Core Web Vitals remain a critical ranking factor, and Google\'s helpful content updates continue to reward depth, expertise, and genuine value over volume.',
    challenges: [
      'Technical debt in enterprise CMS platforms creates crawl inefficiencies that suppress organic visibility',
      'Content fragmentation across multiple domains, subdomains, and microsites dilutes topical authority',
      'Organizational complexity prevents rapid implementation of technical SEO recommendations',
      'International SEO requirements across multiple languages and markets multiply complexity exponentially',
      'AI-generated content saturation makes differentiation through genuine expertise more critical than ever',
    ],
    framework: [
      { title: 'Technical Architecture Audit', desc: 'We conduct forensic technical audits that evaluate crawl efficiency, indexation health, Core Web Vitals performance, schema implementation, internal linking architecture, and international targeting configuration across your entire digital estate.' },
      { title: 'Content Authority Architecture', desc: 'We design content strategies built on topical authority principles — organizing content into semantic clusters that demonstrate comprehensive expertise and capture search demand across the full intent spectrum from awareness to decision.' },
      { title: 'Programmatic SEO Engineering', desc: 'For enterprise-scale search capture, we build programmatic SEO systems that generate thousands of high-quality, intent-optimized pages at scale — targeting long-tail demand that competitors cannot replicate through manual content production.' },
      { title: 'Performance Measurement & Iteration', desc: 'We implement measurement frameworks that connect organic search performance to business outcomes — tracking not just rankings and traffic, but qualified pipeline, revenue influence, and customer acquisition cost across organic channels.' },
    ],
    principles: [
      { title: 'Engineering Discipline', desc: 'Enterprise SEO is a technical engineering discipline, not a marketing tactic. We approach search optimization with the same rigor, measurement, and systematic methodology that we apply to software engineering.' },
      { title: 'Authority Over Volume', desc: 'In a world saturated with content, topical authority beats content volume. We build content architectures that demonstrate genuine expertise and earn search engines\' trust through depth, not breadth.' },
      { title: 'Compounding Returns', desc: 'Organic search is the most defensible competitive moat in digital marketing. Every investment in search authority compounds over time, delivering returns that grow rather than diminish — unlike paid channels that stop the moment you stop spending.' },
    ],
    industryImpact: 'Financial services organizations use enterprise SEO to capture high-intent search demand for complex products — mortgages, insurance, investments — across hundreds of local markets. Healthcare organizations optimize for medical information search to build patient trust and drive appointment bookings. B2B technology companies deploy programmatic SEO to capture the long-tail search demand that represents 80% of qualified enterprise leads. E-commerce retailers optimize millions of product pages for search visibility across categories, brands, and purchase-intent queries.',
    futureOutlook: 'The evolution of search through AI overviews, voice search, and multimodal search will reward organizations that have built genuine topical authority and structured data foundations. Entity-based optimization will become the dominant strategy, and organizations with comprehensive knowledge graphs will dominate AI-generated search interfaces.',
    keyMetrics: [
      { value: '340%', label: 'Organic Growth' },
      { value: '#1', label: 'Ranking Target' },
      { value: '50+', label: 'Markets Covered' },
      { value: '10M+', label: 'Keywords Managed' },
    ],
    caseContext: 'We led the enterprise SEO transformation for a global SaaS platform, redesigning their site architecture, implementing programmatic SEO for 15,000+ use-case pages, and building topical authority through a strategic content hub. Within 12 months, organic traffic grew 420%, organic-sourced pipeline increased by $45M, and the platform achieved #1 rankings for 340+ primary commercial keywords.',
    recommendation: 'Start with a comprehensive technical audit that identifies the infrastructure-level issues suppressing your organic visibility. Then build a content authority strategy that positions your brand as the definitive resource in your category. Organic search compounds — the earlier you invest, the greater your long-term competitive advantage.',
  },
  'Digital Marketing': {
    overview: 'Digital marketing at institutional scale requires precision, measurement discipline, and the strategic sophistication to allocate capital across channels based on incrementality — not intuition. The organizations that dominate their markets treat marketing as a revenue engineering function, not a creative services department.',
    landscape: 'The digital marketing landscape in 2026 is defined by privacy-first measurement challenges, the fragmentation of attention across an ever-growing number of channels, and the maturation of AI-powered creative and targeting capabilities. First-party data has become the most valuable marketing asset, and organizations with robust customer data platforms hold decisive advantages in targeting precision and measurement accuracy.',
    challenges: [
      'Privacy regulation and cookie deprecation undermining traditional attribution and targeting models',
      'Channel fragmentation creating complexity that exceeds most organizations\' measurement capabilities',
      'Rising customer acquisition costs across paid channels demanding greater efficiency and precision',
      'Attribution modeling limitations preventing accurate measurement of cross-channel campaign impact',
      'Creative fatigue cycles accelerating as audiences are saturated with advertising across platforms',
    ],
    framework: [
      { title: 'Audience Intelligence & Strategy', desc: 'We build comprehensive audience models using first-party data, intent signals, and predictive analytics — creating precise targeting frameworks that reach the right decision-makers at the right moment in their buying journey.' },
      { title: 'Omnichannel Campaign Architecture', desc: 'We design integrated campaign architectures that orchestrate messaging across paid search, social advertising, programmatic display, content marketing, and email automation — ensuring consistent narrative and optimal budget allocation.' },
      { title: 'Creative Excellence & Testing', desc: 'We produce platform-optimized creative assets and implement systematic A/B testing frameworks that continuously improve performance. Every creative decision is data-informed, and every iteration is measured against business outcomes.' },
      { title: 'Attribution & Revenue Intelligence', desc: 'We implement multi-touch attribution models and marketing mix modeling that connect marketing investment to pipeline and revenue — providing the measurement rigor that institutional stakeholders demand.' },
    ],
    principles: [
      { title: 'Revenue Engineering', desc: 'We treat marketing as a revenue engineering function. Every campaign, every creative asset, and every channel decision is evaluated against its contribution to qualified pipeline and revenue — not vanity metrics.' },
      { title: 'Incrementality Over Attribution', desc: 'We measure marketing effectiveness through incrementality — the genuine lift that marketing activity creates above baseline demand. This eliminates the attribution gaming that inflates reported performance.' },
      { title: 'Capital Efficiency', desc: 'We optimize for return on marketing capital, not just return on ad spend. This includes the full cost of marketing operations — creative production, technology, talent, and agency fees — ensuring true marketing profitability.' },
    ],
    industryImpact: 'B2B technology companies deploy sophisticated account-based marketing programs that orchestrate personalized campaigns across decision-making units within target accounts. Financial services organizations use compliant digital marketing strategies to generate qualified leads for complex products within regulatory constraints. Healthcare organizations leverage digital marketing to drive patient acquisition while maintaining HIPAA compliance. E-commerce retailers optimize full-funnel campaigns that drive both new customer acquisition and lifetime value maximization.',
    futureOutlook: 'The future of digital marketing belongs to organizations that own their first-party data, deploy AI-powered creative and targeting systems, and measure marketing through incrementality rather than attribution. Privacy-first marketing strategies will separate the leaders from the laggards.',
    keyMetrics: [
      { value: '5.2x', label: 'Average ROAS' },
      { value: '65%', label: 'Lead Cost Reduction' },
      { value: '3M+', label: 'Leads Generated' },
      { value: '12+', label: 'Channels Managed' },
    ],
    caseContext: 'We restructured the digital marketing operation for a global B2B SaaS company, implementing multi-touch attribution, consolidating 8 channel-specific agencies into a unified program, and deploying AI-powered bid management across $24M in annual ad spend. Within 6 months, cost-per-qualified-lead decreased by 62%, while marketing-sourced pipeline increased by 180%.',
    recommendation: 'Begin with an honest assessment of your marketing measurement maturity. If you cannot connect marketing spend to pipeline and revenue with confidence, that is your first priority. Measurement infrastructure unlocks every subsequent optimization.',
  },
  'Brand Strategy': {
    overview: 'Brand is the most valuable intangible asset an institution possesses — and the most frequently mismanaged. In a market saturated with commodity offerings, brand is the only sustainable source of pricing power, talent attraction, and stakeholder trust. Organizations that treat brand as a logo and color palette are forfeiting the most defensible competitive advantage available.',
    landscape: 'Brand strategy in 2026 operates in a context of radical transparency, social media amplification, and stakeholder capitalism. Every employee is a brand ambassador, every customer interaction shapes perception, and every corporate decision is evaluated through the lens of brand values. The organizations that build authentic, consistent, and values-aligned brands earn pricing premiums, talent advantages, and stakeholder loyalty that competitors cannot replicate.',
    challenges: [
      'Brand fragmentation across channels, markets, and touchpoints eroding consistency and equity',
      'Employer brand misalignment creating talent acquisition disadvantages in competitive markets',
      'Crisis communication unpreparedness exposing brands to amplified reputational damage through social media',
      'Brand governance gaps allowing unauthorized usage that dilutes brand equity across the organization',
      'Difficulty quantifying brand value creating challenges in securing executive investment in brand initiatives',
    ],
    framework: [
      { title: 'Brand Archaeology & Positioning', desc: 'We uncover your authentic brand DNA through stakeholder research, competitive analysis, and market perception studies. From this foundation, we articulate a differentiated brand positioning that occupies defensible territory in your market.' },
      { title: 'Visual Identity & Design System', desc: 'We design comprehensive visual identity systems — logo architecture, typography, color systems, photography direction, and iconography — that create instant recognition and communicate your brand positioning across every touchpoint.' },
      { title: 'Brand Governance & Compliance', desc: 'We build brand governance frameworks including comprehensive guidelines, asset management platforms, compliance monitoring systems, and training programs that ensure brand consistency at institutional scale.' },
      { title: 'Brand Measurement & Optimization', desc: 'We implement brand tracking programs that measure awareness, perception, preference, and loyalty — providing the quantified evidence that connects brand investment to business outcomes.' },
    ],
    principles: [
      { title: 'Brand as Infrastructure', desc: 'We treat brand as institutional infrastructure — governed with the same rigor as financial controls and protected with the same vigilance as intellectual property. Brand is not a marketing function; it is a C-suite responsibility.' },
      { title: 'Consistency at Scale', desc: 'Brand value compounds through consistency. Every touchpoint that reinforces your positioning adds to brand equity; every inconsistency subtracts from it. We build systems that make consistency the path of least resistance.' },
      { title: 'Authenticity Over Aspiration', desc: 'The most powerful brands are authentic. We help organizations articulate who they genuinely are, not who they wish they were. Authentic positioning is defensible; aspirational positioning is fragile.' },
    ],
    industryImpact: 'Financial services institutions invest in institutional brand architecture to communicate trust, stability, and expertise across complex product portfolios. Healthcare organizations build brand systems that convey compassion, competence, and innovation to patients, providers, and regulators. Technology companies use brand positioning to differentiate in crowded markets where product features are easily replicated. Professional services firms leverage brand to attract top talent and command premium pricing in competitive markets.',
    futureOutlook: 'Brand will become increasingly important as AI-generated content makes product differentiation harder and trust becomes the scarcest resource in business. Organizations with authentic, well-governed brands will command premiums that AI cannot erode.',
    keyMetrics: [
      { value: '85%', label: 'Brand Recall Lift' },
      { value: '2x', label: 'Premium Perception' },
      { value: '100+', label: 'Audits Completed' },
      { value: '40+', label: 'Industries Served' },
    ],
    caseContext: 'We led the institutional rebrand of a global professional services firm operating across 14 countries. The program included brand strategy, visual identity redesign, messaging architecture, employer brand alignment, and governance framework deployment. Within 12 months, unaided brand recall increased 92%, talent application quality improved 3.4x, and the firm achieved a measurable shift in premium market perception.',
    recommendation: 'Start with an honest brand audit — not what your team believes about your brand, but what your customers, employees, and competitors actually perceive. The gap between internal belief and external perception is where brand strategy begins.',
  },
  'Industry Insights': {
    overview: 'Every industry is being reshaped by digital technology, but the pace, priorities, and constraints of transformation vary dramatically across verticals. Organizations that apply generic digital playbooks to industry-specific challenges consistently underperform those that combine technology expertise with deep domain knowledge.',
    landscape: 'Industry-specific digital transformation is accelerating across every vertical. Financial services faces open banking regulations and embedded finance disruption. Healthcare confronts the demand for connected care ecosystems and value-based care models. Manufacturing navigates Industry 4.0 and supply chain resilience imperatives. Retail adapts to the convergence of physical and digital commerce. Energy manages the transition to renewable generation and smart grid infrastructure.',
    challenges: [
      'Regulatory complexity varies dramatically across industries, creating unique compliance constraints for technology deployment',
      'Legacy infrastructure in established industries creates integration challenges that digital-native competitors do not face',
      'Industry-specific data requirements demand specialized expertise in data governance, security, and interoperability',
      'Workforce transformation needs differ significantly across verticals, requiring tailored change management approaches',
      'Competitive dynamics vary by industry — some face disruption from digital-native entrants, others from regulatory change',
    ],
    framework: [
      { title: 'Industry Diagnostic', desc: 'We assess your organization\'s digital maturity within the context of your specific industry — benchmarking against sector leaders and identifying the transformation priorities that will deliver the greatest competitive advantage in your market.' },
      { title: 'Regulatory-Aware Architecture', desc: 'We design technology architectures that account for industry-specific regulatory requirements — from HIPAA in healthcare to PCI-DSS in financial services to NERC-CIP in energy. Compliance is built into the architecture, not bolted on afterward.' },
      { title: 'Domain-Specific Implementation', desc: 'Our delivery teams include consultants with deep industry experience who understand the operational realities, stakeholder dynamics, and competitive pressures unique to your vertical. Technology solutions are tailored to industry context.' },
      { title: 'Ecosystem Integration', desc: 'We design solutions that integrate with industry-specific ecosystems — SWIFT in banking, HL7/FHIR in healthcare, OPC-UA in manufacturing — ensuring that new technology enhances rather than disrupts existing operational infrastructure.' },
    ],
    principles: [
      { title: 'Domain Expertise Matters', desc: 'Technology expertise without domain knowledge delivers generic solutions. We invest in deep vertical expertise because the difference between a good solution and the right solution is always industry context.' },
      { title: 'Regulation as Advantage', desc: 'Regulatory compliance is typically viewed as a constraint. We help organizations reframe compliance as competitive advantage — building compliant infrastructure faster than competitors and using compliance readiness as a market differentiator.' },
      { title: 'Ecosystem Thinking', desc: 'No organization operates in isolation. We design solutions that account for industry ecosystems — supply chains, regulatory bodies, partner networks, and customer expectations — ensuring technology investments create value across the value chain.' },
    ],
    industryImpact: 'Financial services institutions are navigating the convergence of traditional banking with embedded finance, open banking APIs, and digital asset infrastructure. Healthcare organizations are building connected care ecosystems that span providers, payers, patients, and pharmaceutical companies. Manufacturing enterprises are deploying Industry 4.0 platforms that integrate shop-floor operations with enterprise planning and supply chain management. Energy utilities are managing the most significant infrastructure transformation in a century — the transition from centralized fossil fuel generation to distributed renewable energy.',
    futureOutlook: 'Industry convergence will accelerate as digital platforms enable organizations to expand beyond traditional vertical boundaries. Financial services companies will become technology platforms. Healthcare organizations will become data companies. Retailers will become logistics networks. The winners will be those that build the digital infrastructure to operate across traditional industry boundaries.',
    keyMetrics: [
      { value: '5', label: 'Core Verticals' },
      { value: '500+', label: 'Projects Delivered' },
      { value: '120+', label: 'Clients Served' },
      { value: '7+', label: 'Countries Served' },
    ],
    caseContext: 'Our industry practices have delivered transformative outcomes across verticals — from building real-time trading platforms for investment banks to deploying AI-powered diagnostic systems for hospital networks to engineering smart factory platforms for global manufacturers. Each engagement combines deep domain expertise with world-class technology delivery.',
    recommendation: 'When evaluating technology partners, prioritize those with genuine experience in your specific industry. The most sophisticated technology, deployed without industry context, delivers mediocre results. Domain expertise is not optional — it is the difference between transformation and disappointment.',
  },
};

/* Default content for categories not explicitly defined */
const DEFAULT_CONTENT = CATEGORY_CONTENT['Digital Transformation'];

const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = ALL_INSIGHTS.find(p => p.id === id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .scroll-parallax-card, .text-reveal-3d, .scroll-3d-enter').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const categoryContent = CATEGORY_CONTENT[post.category] || DEFAULT_CONTENT;

  const relatedService = SERVICES.find(s =>
    s.title.toLowerCase().includes(post.category.toLowerCase()) ||
    post.category.toLowerCase().includes(s.id.replace('-', ' '))
  );

  const relatedArticles = ALL_INSIGHTS
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const fallbackArticles = relatedArticles.length >= 3
    ? relatedArticles
    : LATEST_INSIGHTS.filter(p => p.id !== post.id).slice(0, 3);

  const topicKeyword = post.title.split(':')[0].replace(/^(Why Most |The Hidden Cost of Ignoring |Inside Our Approach to |A Practical Framework for |The Executive's Guide to |What We Learned From \d+ |Rethinking )/, '').replace(/ (Initiatives Fail.*|at Enterprise Scale|in 2026|Engagements|Lessons From.*)$/, '').trim();

  return (
    <>
      <SEOHead
        title={`${post.title} | Onsective Insights`}
        description={post.excerpt}
        breadcrumbs={[
          { name: 'Home', url: 'https://onsective.com/' },
          { name: 'Insights', url: 'https://onsective.com/insights' },
          { name: post.category, url: 'https://onsective.com/insights' },
          { name: post.title, url: `https://onsective.com/insights/${post.id}` },
        ]}
      />

      {/* ===== HERO IMAGE ===== */}
      <div className="w-full h-[55vh] md:h-[65vh] relative overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b45]/90 via-[#0d2b45]/50 to-transparent" />
        <div className="absolute inset-0 perspective-grid opacity-20"></div>

        {/* Particle field */}
        <div className="particle-field">
          {Array.from({ length: 8 }).map((_, i) => (
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

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-16 w-full relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6 font-['Plus_Jakarta_Sans']">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/insights" className="hover:text-[#c1912f] transition-colors flex items-center gap-1">
                Insights
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#c1912f]">{post.category}</span>
            </div>
            <div className="mb-4">
              <span className="bg-[#c1912f] text-white px-4 py-1.5 text-xs font-semibold rounded font-['Plus_Jakarta_Sans']">{post.category}</span>
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-white leading-tight mb-4">{post.title}</h1>
            <p className="text-white/40 text-lg max-w-2xl font-['Plus_Jakarta_Sans'] leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </div>

      {/* ===== META ===== */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 border-b border-[#e2e8f0]">
          <div className="flex flex-wrap items-center gap-8 text-[#64748b] text-sm font-medium font-['Plus_Jakarta_Sans']">
            <div className="flex items-center gap-2"><User size={16} className="text-[#c1912f]" /> Onsective Research</div>
            <div className="flex items-center gap-2"><Calendar size={16} className="text-[#c1912f]" /> {post.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} className="text-[#c1912f]" /> {post.readTime}</div>
          </div>
        </div>

        {/* ===== ARTICLE BODY ===== */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-12">

            {/* Lead paragraph */}
            <p className="text-xl text-[#1a1a2e] font-['Playfair_Display'] leading-relaxed italic border-l-4 border-[#c1912f] pl-6">
              {post.excerpt} In a global landscape reshaped by {post.category.toLowerCase()}, institutional excellence demands not just adaptation — it demands architectural foresight and sovereign execution.
            </p>

            {/* Category overview */}
            <div>
              <h2 className="text-xl sm:text-3xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 border-b border-[#e2e8f0] pb-4 font-bold">The Institutional Landscape</h2>
              <p className="text-[#64748b] leading-[1.85] font-['Plus_Jakarta_Sans'] mb-6">{categoryContent.overview}</p>
              <p className="text-[#64748b] leading-[1.85] font-['Plus_Jakarta_Sans']">{categoryContent.landscape}</p>
            </div>

            {/* Key metrics strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
              {categoryContent.keyMetrics.map((metric, i) => (
                <div key={i} className={`p-6 text-center rounded-lg stat-glow ${i === 0 ? 'bg-[#0d2b45] text-white' : 'bg-[#f1f5f9] border border-[#e2e8f0]'}`}>
                  <div className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold">{metric.value}</div>
                  <div className="text-xs font-medium mt-1 opacity-60 font-['Plus_Jakarta_Sans']">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Core challenges */}
            <div>
              <h2 className="text-xl sm:text-3xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 border-b border-[#e2e8f0] pb-4 font-bold">Critical Challenges Facing Enterprise Leaders</h2>
              <div className="space-y-4">
                {categoryContent.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#f1f5f9] rounded-lg border border-[#e2e8f0]">
                    <div className="w-8 h-8 rounded-full bg-[#c1912f]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#c1912f] text-xs font-bold font-['Plus_Jakarta_Sans']">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic quote */}
            <div className="bg-[#0d2b45] p-8 md:p-12 rounded-lg my-12 relative overflow-hidden">
              <div className="absolute inset-0 perspective-grid opacity-10"></div>
              <div className="relative z-10">
                <Quote className="text-[#c1912f] mb-4" size={32} />
                <p className="text-xl md:text-2xl font-['Playfair_Display'] italic leading-relaxed text-white mb-4">
                  "The true value of {post.category.toLowerCase()} resides not in the technology itself, but in the institutional problems it resolves at sovereign scale — and the permanent competitive infrastructure it creates."
                </p>
                <div className="text-sm font-semibold text-[#c1912f] font-['Plus_Jakarta_Sans']">— Principal Solutions Architect, Onsective</div>
              </div>
            </div>

            {/* Framework / strategic approach */}
            <div>
              <h2 className="text-xl sm:text-3xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 border-b border-[#e2e8f0] pb-4 font-bold">The Onsective Framework for {topicKeyword}</h2>
              <p className="text-[#64748b] leading-[1.85] font-['Plus_Jakarta_Sans'] mb-8">
                Our institutional approach to {post.category.toLowerCase()} is built on a proven four-phase framework that has been refined across hundreds of enterprise engagements. Each phase is designed to deliver measurable value while building the foundation for long-term competitive advantage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryContent.framework.map((phase, i) => (
                  <div key={i} className="p-6 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/30 transition-all group">
                    <div className="text-4xl font-['Playfair_Display'] text-[#c1912f]/20 font-bold mb-3 group-hover:text-[#c1912f]/40 transition-colors">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-semibold text-base mb-3 text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{phase.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding principles */}
            <div>
              <h2 className="text-xl sm:text-3xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 border-b border-[#e2e8f0] pb-4 font-bold">Guiding Principles</h2>
              <div className="space-y-6">
                {categoryContent.principles.map((principle, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-lg bg-[#c1912f]/10 flex items-center justify-center shrink-0 mt-1">
                      {i === 0 && <Target size={18} className="text-[#c1912f]" />}
                      {i === 1 && <Shield size={18} className="text-[#c1912f]" />}
                      {i === 2 && <Layers size={18} className="text-[#c1912f]" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a2e] mb-2 font-['Plus_Jakarta_Sans']">{principle.title}</h4>
                      <p className="text-sm text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">{principle.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry impact */}
            <div>
              <h2 className="text-xl sm:text-3xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 border-b border-[#e2e8f0] pb-4 font-bold">Industry Impact & Applications</h2>
              <p className="text-[#64748b] leading-[1.85] font-['Plus_Jakarta_Sans']">{categoryContent.industryImpact}</p>
            </div>

            {/* Case context */}
            <div className="bg-[#f1f5f9] p-8 md:p-10 border-l-4 border-[#c1912f] rounded-r-lg my-12 holo-shimmer">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 size={18} className="text-[#c1912f]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c1912f] font-['Plus_Jakarta_Sans']">Case in Point</span>
              </div>
              <p className="text-[#1a1a2e] leading-relaxed font-['Plus_Jakarta_Sans']">{categoryContent.caseContext}</p>
            </div>

            {/* Future outlook */}
            <div>
              <h2 className="text-xl sm:text-3xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 border-b border-[#e2e8f0] pb-4 font-bold">What Comes Next</h2>
              <p className="text-[#64748b] leading-[1.85] font-['Plus_Jakarta_Sans']">{categoryContent.futureOutlook}</p>
            </div>

            {/* Institutional recommendation */}
            <div className="bg-[#0d2b45] p-8 md:p-10 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={18} className="text-[#c1912f]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c1912f] font-['Plus_Jakarta_Sans']">Our Recommendation</span>
              </div>
              <p className="text-white/70 leading-relaxed font-['Plus_Jakarta_Sans']">{categoryContent.recommendation}</p>
            </div>

            {/* Related Service */}
            {relatedService && (
              <div className="mt-16 p-8 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 gradient-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c1912f] mb-3 font-['Plus_Jakarta_Sans']">Related Practice Domain</p>
                <h4 className="text-xl font-['Playfair_Display'] text-[#1a1a2e] mb-3 font-bold">{relatedService.title}</h4>
                <p className="text-sm text-[#64748b] mb-6 font-['Plus_Jakarta_Sans'] leading-relaxed">{relatedService.description}</p>
                <Link
                  to={relatedService.path}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c1912f] hover:brightness-110 transition-colors font-['Plus_Jakarta_Sans']"
                >
                  Explore Practice Domain <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 pt-10 border-t border-[#e2e8f0] animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
              <div className="bg-[#0d2b45] rounded-lg p-8 md:p-10 relative overflow-hidden">
                <div className="particle-field">
                  {Array.from({ length: 5 }).map((_, i) => (
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
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                  <div>
                    <p className="font-bold text-lg text-white mb-2 font-['Plus_Jakarta_Sans']">Consult with a {post.category} Principal</p>
                    <p className="text-white/40 text-sm font-['Plus_Jakarta_Sans']">Secure a personalized institutional briefing tailored to your enterprise's specific challenges and strategic objectives.</p>
                  </div>
                  <Link
                    to="/contact"
                    className="px-8 py-3.5 bg-[#c1912f] text-white text-sm font-semibold hover:brightness-110 transition-all rounded-md font-['Plus_Jakarta_Sans'] whitespace-nowrap"
                  >
                    Request Briefing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ===== RELATED ARTICLES ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45] relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-15"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Continue Your Research</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-['Playfair_Display'] text-white font-bold">Related Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fallbackArticles.map((article, idx) => (
              <Link
                key={article.id}
                to={`/insights/${article.id}`}
                className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#c1912f]/30 transition-all duration-300 magnetic-3d">
                  <div className="h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#c1912f] font-['Plus_Jakarta_Sans']">{article.category}</span>
                    <h3 className="text-lg font-['Playfair_Display'] text-white mt-2 mb-3 leading-snug group-hover:text-[#c1912f] transition-colors">{article.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-white/30 font-medium font-['Plus_Jakarta_Sans']">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightDetail;
