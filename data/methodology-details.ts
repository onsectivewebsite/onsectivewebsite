import {
  Compass, Layers, TrendingUp, ClipboardCheck, ArrowRightLeft, Gauge,
  ShieldCheck, Radar, Microscope, Palette, Rocket,
  Target, Hammer, Maximize, Search, Wrench, Crown,
  LineChart, Zap, RefreshCw, Megaphone, Sparkles,
  Code2, GitBranch, PenLine, Eye, ShieldHalf
} from 'lucide-react';

export interface MethodologyDetail {
  serviceId: string;
  title: string;
  tagline: string;
  icon: any;
  overview: string;
  contextNote: string;
  phases: { title: string; desc: string }[];
  frameworks: string[];
  deliverables: string[];
  outcomes: { value: string; label: string }[];
  relatedCapabilities?: string[];
}

const DATA: Record<string, MethodologyDetail> = {
  // ============================================================
  // IT STRATEGY — Foresight, Architecture, Value Realization
  // ============================================================
  'it-strategy/foresight': {
    serviceId: 'it-strategy',
    title: 'Foresight',
    tagline: 'Predictive Roadmap Engineering for Permanent Market Advantage',
    icon: Compass,
    overview:
      'Foresight is the sovereign discipline of seeing around corners. Within our IT Strategy practice, it is the phase where we marry quantitative horizon-scanning with institutional pattern recognition — modelling the technology, regulatory, and competitive forces that will reshape your operating environment over the coming 24 to 60 months. We do not forecast for its own sake. We forecast so that every capital allocation decision your board makes today compounds into structural advantage tomorrow.',
    contextNote:
      'For IT Strategy engagements, Foresight is where we translate market signal into executable architecture intent. Our principals embed with your CIO, CTO, and business unit leaders to extract the implicit assumptions embedded in your current technology estate, then stress-test those assumptions against five-year industry trajectories.',
    phases: [
      { title: 'Horizon Scanning', desc: 'Systematic analysis of emerging technologies, regulatory shifts, and competitive moves across a 24-60 month window, scored against your strategic axes.' },
      { title: 'Scenario Modelling', desc: 'Monte Carlo and structured wargaming exercises that pressure-test your current technology portfolio against three to five plausible futures.' },
      { title: 'Strategic Intent Codification', desc: 'Translation of foresight findings into board-ready investment theses that link each future-state capability to quantified competitive outcomes.' },
      { title: 'Portfolio Rebalancing', desc: 'Reallocation recommendations across build, buy, partner, and sunset decisions — ranked by compounding value and executional risk.' }
    ],
    frameworks: ['Gartner Hype Cycle Integration', 'Wardley Mapping', 'Three Horizons Framework', 'McKinsey 7-S Forecasting', 'Technology Radar Methodology'],
    deliverables: ['5-Year Technology Foresight Dossier', 'Scenario Playbook with Board-Level Briefings', 'Portfolio Rebalancing Recommendation', 'Quantified Investment Theses', 'Competitive Intelligence Briefings'],
    outcomes: [
      { value: '24-60mo', label: 'Forward Visibility' },
      { value: '3x', label: 'Strategic Clarity' },
      { value: '40%', label: 'Mis-Investment Reduction' }
    ],
    relatedCapabilities: ['Enterprise Architecture', 'Digital Operating Models']
  },
  'it-strategy/architecture': {
    serviceId: 'it-strategy',
    title: 'Architecture',
    tagline: 'Composable Sovereign Platforms Engineered for Institutional Longevity',
    icon: Layers,
    overview:
      'Architecture is where strategic intent becomes engineered reality. Our architects design modular, domain-driven technology estates that do not merely support today\'s business — they anticipate the business the board has not yet approved. The outcome is a composable platform where every service, data contract, and integration point is an option rather than an obligation, giving the enterprise the agility to pivot without architectural debt.',
    contextNote:
      'In IT Strategy, Architecture is delivered at the portfolio tier — not the application tier. We orchestrate the business capability model, information architecture, application portfolio, and technology standards into a single coherent blueprint that the CIO can defend to the board and the engineering organisation can execute against.',
    phases: [
      { title: 'Capability Mapping', desc: 'Forensic decomposition of your enterprise into business capabilities, each scored on strategic value, maturity, and technology enablement.' },
      { title: 'Domain-Driven Design', desc: 'Partitioning the estate into bounded contexts with explicit data contracts, ownership boundaries, and integration patterns.' },
      { title: 'Reference Architecture', desc: 'Codification of standards, patterns, and reusable blueprints that engineering teams adopt by default — compressing decision overhead without stifling local autonomy.' },
      { title: 'Transition State Planning', desc: 'Sequenced wave plans that migrate from current to target architecture with minimum disruption and maximum early-value capture.' }
    ],
    frameworks: ['TOGAF 10', 'Zachman Framework', 'Domain-Driven Design', 'C4 Model', 'ArchiMate 3.2', 'Team Topologies'],
    deliverables: ['Target-State Architecture Blueprint', 'Reference Architecture Library', 'Business Capability Model', 'Transition State Wave Plan', 'Architecture Decision Records (ADRs)'],
    outcomes: [
      { value: '100%', label: 'Strategic Coherence' },
      { value: '3x', label: 'Change Velocity' },
      { value: '50%', label: 'Integration Cost Reduction' }
    ],
    relatedCapabilities: ['Enterprise Architecture', 'Digital Operating Models', 'IT Cost Optimization']
  },
  'it-strategy/value-realization': {
    serviceId: 'it-strategy',
    title: 'Value Realization',
    tagline: 'Converting Technology Investment into Measurable P&L Impact',
    icon: TrendingUp,
    overview:
      'Value Realization is the sovereign discipline that separates consulting theatre from institutional consequence. Every initiative in our roadmaps is instrumented with leading indicators, lagging metrics, and explicit business-case thresholds — so that the moment a programme diverges from its committed value trajectory, the governance system flags it and the portfolio is rebalanced. Technology becomes, at last, an accountable contributor to enterprise value.',
    contextNote:
      'For IT Strategy clients, Value Realization is the connective tissue between the CIO\'s portfolio and the CFO\'s P&L. We deploy benefits-tracking systems that expose the real contribution of every initiative, quarter by quarter, to revenue, cost, risk, and market capital.',
    phases: [
      { title: 'Benefit Hypothesis Formulation', desc: 'Every initiative is scored against a board-approved benefits framework covering revenue, cost, risk, and strategic optionality.' },
      { title: 'Benefits Instrumentation', desc: 'Leading and lagging indicators are wired into executive dashboards, tied to owner accountability and cadence review.' },
      { title: 'Stage-Gate Governance', desc: 'Capital releases are conditional on the demonstrated realisation of prior-stage benefits, compressing lost-investment exposure.' },
      { title: 'Portfolio Rebalancing Cadence', desc: 'Quarterly portfolio reviews that reallocate capital from underperforming to overperforming initiatives based on realised value.' }
    ],
    frameworks: ['Balanced Scorecard', 'OKR Portfolio Cascade', 'Val IT 2.0', 'Benefits Dependency Networks', 'Economic Value Add (EVA)'],
    deliverables: ['Benefits Realisation Framework', 'Executive Value Dashboard', 'Stage-Gate Governance Protocol', 'Quarterly Portfolio Review Deck', 'Initiative Business Cases with Variance Tracking'],
    outcomes: [
      { value: '100%', label: 'P&L Traceability' },
      { value: '40%', label: 'OpEx Reduction' },
      { value: '2.5x', label: 'ROI on Tech Capital' }
    ],
    relatedCapabilities: ['IT Cost Optimization', 'Vendor Management Strategy']
  },

  // ============================================================
  // CLOUD SERVICES — Assess, Migrate, Optimize
  // ============================================================
  'cloud-services/assess': {
    serviceId: 'cloud-services',
    title: 'Assess',
    tagline: 'Forensic Cloud Readiness and Migration Intelligence',
    icon: ClipboardCheck,
    overview:
      'Assess is where cloud programmes succeed or fail — decided long before the first workload moves. We conduct exhaustive application dependency mapping, performance baselining, total cost of ownership modelling, and sovereignty constraint analysis to produce a migration dossier so precise that execution becomes a choreography rather than a leap of faith. Every workload is classified, every dependency is enumerated, every risk is quantified.',
    contextNote:
      'Within Cloud Services, Assess is the phase that de-risks the entire transformation. We deploy automated discovery agents alongside architect-led workshops to build a living map of your estate — one that continues to inform decisions long after the initial cutover.',
    phases: [
      { title: 'Discovery & Dependency Mapping', desc: 'Agent-based discovery of every server, service, integration, and data flow — rendered into a queryable dependency graph.' },
      { title: '6R Classification', desc: 'Each workload triaged against Rehost, Replatform, Refactor, Repurchase, Retain, or Retire — with quantified business and engineering rationale.' },
      { title: 'Sovereignty & Compliance Mapping', desc: 'Data residency, regulatory, and encryption requirements mapped to candidate regions, providers, and service tiers.' },
      { title: 'TCO & Business Case Modelling', desc: 'Multi-year TCO models comparing on-premise, single-cloud, and multi-cloud scenarios with explicit sensitivity analysis.' }
    ],
    frameworks: ['AWS Migration Evaluator', 'Azure Migrate', 'Google Cloud Migration Center', 'Cloud Adoption Framework (CAF)', 'Well-Architected Review'],
    deliverables: ['Application Portfolio Assessment', 'Dependency Graph & Wave Plan', '6R Classification Report', 'Sovereignty Compliance Matrix', 'Multi-Year TCO Model'],
    outcomes: [
      { value: '100%', label: 'Workload Coverage' },
      { value: '35%', label: 'Projected OpEx Savings' },
      { value: 'Zero', label: 'Missed Dependencies' }
    ],
    relatedCapabilities: ['Hybrid Cloud Orchestration', 'Mainframe Modernization']
  },
  'cloud-services/migrate': {
    serviceId: 'cloud-services',
    title: 'Migrate',
    tagline: 'Zero-Downtime Transition Choreographed at Institutional Scale',
    icon: ArrowRightLeft,
    overview:
      'Migrate is where choreography replaces courage. Our engineers execute waved, parallel-run migrations with automated validation, blue-green deployment topologies, and instant rollback capability built into every cutover. The outcome is an estate that moves — sometimes thousands of workloads in a single wave — without the business noticing, while simultaneously emerging more resilient, more observable, and more cost-efficient than the state it departed.',
    contextNote:
      'For Cloud Services engagements, Migrate is the phase where our delivery record of 200+ enterprise migrations without a single unplanned downtime event is forged. Every cutover is rehearsed, every rollback path is tested, every stakeholder is briefed.',
    phases: [
      { title: 'Landing Zone Engineering', desc: 'Policy-as-code, network segmentation, identity federation, and guardrails stood up before a single workload arrives.' },
      { title: 'Wave-Based Execution', desc: 'Workloads migrated in dependency-sequenced waves, each with parallel-run validation and automated health gates.' },
      { title: 'Data & State Synchronisation', desc: 'Continuous replication, change data capture, and atomic cutover strategies that eliminate data loss and drift.' },
      { title: 'Validation & Handover', desc: 'Functional, performance, and security regression testing — with structured handover to operational teams and SRE playbooks.' }
    ],
    frameworks: ['AWS Control Tower', 'Azure Landing Zones', 'Terraform & Pulumi IaC', 'Kubernetes & Helm', 'CloudEndure & Velostrata', 'Blue-Green & Canary Patterns'],
    deliverables: ['Production Landing Zone', 'Wave Execution Playbook', 'Automated Migration Pipelines', 'Cutover Runbooks & Rollback Plans', 'Operational Handover Documentation'],
    outcomes: [
      { value: 'Zero', label: 'Unplanned Downtime' },
      { value: '200+', label: 'Workloads per Programme' },
      { value: '<48h', label: 'Wave Cutover Window' }
    ],
    relatedCapabilities: ['Cloud Native Development', 'Mainframe Modernization', 'Hybrid Cloud Orchestration']
  },
  'cloud-services/optimize': {
    serviceId: 'cloud-services',
    title: 'Optimize',
    tagline: 'FinOps Governance and Continuous Architectural Refinement',
    icon: Gauge,
    overview:
      'Optimize is the perpetual phase. Once your estate is in the cloud, the real work begins: continuous rightsizing, reserved-capacity orchestration, architectural pattern refinement, and performance tuning that compound savings and capability month over month. Our FinOps practice typically identifies savings equal to its own cost within the first quarter — turning cloud economics into a continuously improving institutional asset.',
    contextNote:
      'For Cloud Services clients, Optimize is delivered as an ongoing managed service — a permanent flywheel that ensures your cloud investment appreciates rather than erodes. Engineers, architects, and FinOps analysts operate a disciplined weekly cadence of observation, experimentation, and reinvestment.',
    phases: [
      { title: 'Cost Observability', desc: 'Unified billing instrumentation across providers, with allocation tags, anomaly detection, and executive FinOps dashboards.' },
      { title: 'Rightsizing & Reservation Orchestration', desc: 'Continuous right-sizing, savings plans, and reserved-capacity portfolios tuned to your usage signatures.' },
      { title: 'Architectural Evolution', desc: 'Progressive migration toward managed services, serverless, and event-driven patterns that reduce operational surface area.' },
      { title: 'SRE & Reliability Engineering', desc: 'Error budgets, SLO instrumentation, and chaos-engineering practices that harden the estate against failure.' }
    ],
    frameworks: ['FinOps Foundation Framework', 'AWS Well-Architected', 'Azure Well-Architected', 'Google Cloud Architecture Framework', 'CNCF Observability Stack'],
    deliverables: ['FinOps Operating Model', 'Executive Cost Dashboard', 'Monthly Optimisation Reports', 'Architecture Evolution Roadmap', 'SLO & Error Budget Definitions'],
    outcomes: [
      { value: '35%', label: 'Annual Cost Reduction' },
      { value: '99.99%', label: 'Availability Sustained' },
      { value: 'Quarterly', label: 'Compounding Savings' }
    ],
    relatedCapabilities: ['DevSecOps Automation', 'Cloud Native Development']
  },

  // ============================================================
  // CYBERSECURITY — Assess, Fortify, Monitor
  // ============================================================
  'cybersecurity/assess': {
    serviceId: 'cybersecurity',
    title: 'Assess',
    tagline: 'Adversarial Threat Modelling and Sovereign Attack-Surface Mapping',
    icon: Microscope,
    overview:
      'Assess is the phase where the adversary\'s perspective becomes your own. Our offensive security team — composed of former national-level operators — maps every attack surface across your estate: cloud infrastructure, APIs, endpoints, identity planes, third-party integrations, and the human layer. We do not produce a compliance checklist. We produce an adversary\'s dossier, annotated with the exact paths they would take to reach your crown jewels.',
    contextNote:
      'Within Cybersecurity, Assess is the foundation on which every subsequent control is justified. Red-team exercises, purple-team collaborations, and continuous attack-surface monitoring reveal vulnerabilities that automated scanners cannot detect.',
    phases: [
      { title: 'Crown-Jewel Identification', desc: 'Executive workshops to identify the assets whose compromise would cause institutional-grade consequence.' },
      { title: 'Attack-Surface Enumeration', desc: 'Continuous external and internal reconnaissance, asset discovery, and shadow-IT surfacing.' },
      { title: 'Adversarial Simulation', desc: 'Full-scope red-team exercises including social engineering, supply chain, and physical-access vectors.' },
      { title: 'Threat Intelligence Correlation', desc: 'Mapping findings against active threat-actor TTPs relevant to your industry, geography, and asset class.' }
    ],
    frameworks: ['MITRE ATT&CK', 'Cyber Kill Chain', 'STRIDE Threat Modelling', 'PASTA', 'NIST CSF 2.0', 'OWASP ASVS'],
    deliverables: ['Adversary Dossier', 'Attack-Surface Map', 'Red-Team Engagement Report', 'Threat-Actor Relevance Assessment', 'Prioritised Remediation Backlog'],
    outcomes: [
      { value: '100%', label: 'Crown-Jewel Coverage' },
      { value: '<15m', label: 'Mean Time to Detect' },
      { value: 'Zero', label: 'Undiscovered Assets' }
    ],
    relatedCapabilities: ['Penetration Testing & Red Teaming', 'Cloud Security Posture Management']
  },
  'cybersecurity/fortify': {
    serviceId: 'cybersecurity',
    title: 'Fortify',
    tagline: 'Zero-Trust Engineering That Assumes Breach From Day One',
    icon: ShieldCheck,
    overview:
      'Fortify is where assessment findings become engineered resilience. We implement zero-trust architectures anchored by identity-centric access, micro-segmentation, continuous verification, and encrypted data pipelines — then we prove their efficacy through controlled adversarial testing. Nothing is assumed. Every control is instrumented. Every trust relationship is explicit, bounded, and revocable.',
    contextNote:
      'For Cybersecurity clients, Fortify is the phase where the lateral-movement attack vectors are permanently eliminated. Every implementation is validated by our red team before handover, guaranteeing that controls perform under adversarial pressure.',
    phases: [
      { title: 'Zero-Trust Reference Architecture', desc: 'Identity, device, network, application, and data planes re-engineered around explicit verification and least-privilege principles.' },
      { title: 'Micro-Segmentation Deployment', desc: 'East-west traffic partitioned at workload granularity, eliminating lateral-movement corridors.' },
      { title: 'Identity Plane Hardening', desc: 'Privileged access management, passwordless authentication, conditional access, and just-in-time elevation.' },
      { title: 'Data Protection Engineering', desc: 'Encryption-at-rest, in-transit, and in-use; key management sovereignty; DLP and classification automation.' }
    ],
    frameworks: ['NIST SP 800-207 Zero Trust', 'CISA Zero Trust Maturity Model', 'BeyondCorp', 'CARTA', 'SASE/SSE Architectures'],
    deliverables: ['Zero-Trust Target Architecture', 'Micro-Segmentation Policy Library', 'Identity Hardening Playbook', 'Data Protection Standard', 'Red-Team Validation Report'],
    outcomes: [
      { value: 'Zero', label: 'Lateral Movement' },
      { value: '100%', label: 'Identity Verification' },
      { value: 'Validated', label: 'By Red Team' }
    ],
    relatedCapabilities: ['Identity & Access Management (IAM)', 'Data Privacy & Protection', 'Cloud Security Posture Management']
  },
  'cybersecurity/monitor': {
    serviceId: 'cybersecurity',
    title: 'Monitor',
    tagline: '24/7 Sovereign Security Operations With Sub-15-Minute Response',
    icon: Radar,
    overview:
      'Monitor is the continuous vigilance phase. Our 24/7 Security Operations Centre fuses SIEM, SOAR, XDR, and threat-intelligence feeds into a single analyst pane, with automated playbooks that contain sophisticated threats before a human analyst could finish reading the alert. Every incident is a learning event; every playbook improves quarter over quarter.',
    contextNote:
      'Within Cybersecurity, Monitor is delivered as a fully managed sovereign SOC service, staffed by cleared analysts operating under documented response SLAs measured in minutes rather than hours.',
    phases: [
      { title: 'Detection Engineering', desc: 'Custom detection rules mapped to MITRE ATT&CK, tuned to your environment, and continuously validated through purple-team exercises.' },
      { title: 'Automated Response Orchestration', desc: 'SOAR playbooks that contain common attack patterns (credential theft, ransomware staging, data exfiltration) without human intervention.' },
      { title: 'Threat Hunting', desc: 'Proactive hypothesis-driven hunts that surface dwell-time adversaries beyond the reach of signature-based detection.' },
      { title: 'Incident Response & Forensics', desc: 'IR retainer with defined playbooks, communications protocols, forensic-grade evidence preservation, and regulator-ready reporting.' }
    ],
    frameworks: ['MITRE ATT&CK', 'SANS IR Framework', 'NIST SP 800-61', 'D3FEND', 'Pyramid of Pain'],
    deliverables: ['24/7 SOC Operations', 'Custom Detection Library', 'SOAR Playbook Suite', 'Monthly Threat Reports', 'IR Retainer & Tabletop Exercises'],
    outcomes: [
      { value: '24/7', label: 'Coverage' },
      { value: '<15m', label: 'Response Time' },
      { value: 'Zero', label: 'Successful Breaches' }
    ],
    relatedCapabilities: ['Governance, Risk & Compliance (GRC)', 'Penetration Testing & Red Teaming']
  },

  // ============================================================
  // DIGITAL EXPERIENCE — Discover, Design, Deliver
  // ============================================================
  'digital-experience/discover': {
    serviceId: 'digital-experience',
    title: 'Discover',
    tagline: 'Ethnographic Intelligence That Replaces Assumption With Evidence',
    icon: Search,
    overview:
      'Discover is the sovereign research discipline that separates experiences built on institutional truth from those built on boardroom speculation. Our researchers shadow real users in their real environments, conduct depth interviews with decision-makers, reconstruct end-to-end behavioural journeys, and triangulate quantitative signal from analytics and session replay. The outcome is a body of user evidence so robust that every downstream design and engineering decision is traceable to a specific, documented user need.',
    contextNote:
      'Within Digital Experience engagements, Discover is the phase that guarantees we are solving the problem worth solving. Every artefact produced here — personas, journey maps, opportunity canvases — is grounded in first-party observation rather than desk research.',
    phases: [
      { title: 'Ethnographic Field Research', desc: 'In-context observation of real users completing real tasks, surfacing the workarounds and friction invisible in analytics data.' },
      { title: 'Depth Interviews & Jobs-to-Be-Done Mapping', desc: 'Structured interviews with 12-30 representative users per segment, coded against Jobs-to-Be-Done and behavioural archetypes.' },
      { title: 'Quantitative Behavioural Analysis', desc: 'Session replay, funnel analysis, and event-stream mining that reveals where intent meets friction at scale.' },
      { title: 'Opportunity Synthesis', desc: 'Integration of qualitative and quantitative signal into prioritised opportunity canvases with business-case framing.' }
    ],
    frameworks: ['Jobs-to-Be-Done', 'Double Diamond', 'Behavioural Journey Mapping', 'Top Tasks Analysis', 'System Usability Scale (SUS)'],
    deliverables: ['Research Insights Report', 'Journey Maps & Service Blueprints', 'Primary & Secondary Personas', 'Opportunity Prioritisation Matrix', 'Behavioural Analytics Baseline'],
    outcomes: [
      { value: '12-30', label: 'Users Per Segment' },
      { value: '3.2x', label: 'Downstream Conversion Lift' },
      { value: '100%', label: 'Evidence-Backed Decisions' }
    ],
    relatedCapabilities: ['UX/UI Design Strategy', 'Customer Data Platforms (CDP)']
  },
  'digital-experience/design': {
    serviceId: 'digital-experience',
    title: 'Design',
    tagline: 'Pixel-Precise Interface Architecture and Scalable Design Systems',
    icon: Palette,
    overview:
      'Design is where research becomes tangible experience. Our product designers build scalable design systems — modular component libraries with tokens, variants, accessibility primitives, and motion grammar — that ensure visual and interaction consistency across every touchpoint, every team, and every release. The output is not a set of screens; it is a living institutional asset that compounds in value as your product surface expands.',
    contextNote:
      'For Digital Experience clients, Design is the phase where strategy, research, and engineering intent converge into a testable, production-ready system. Every decision is documented in design-system governance so the work ships faster every quarter.',
    phases: [
      { title: 'Design System Foundation', desc: 'Tokens, primitives, and component libraries codified in Figma and mirrored in code via Storybook.' },
      { title: 'Interaction & Motion Design', desc: 'Micro-interactions, state transitions, and motion grammar that communicate system status and guide user attention.' },
      { title: 'Prototyping & Usability Validation', desc: 'Hi-fi interactive prototypes validated through moderated and unmoderated usability studies before engineering invests.' },
      { title: 'Accessibility & Inclusive Design', desc: 'WCAG 2.1 AA compliance engineered from the token layer up, validated through assistive-technology testing.' }
    ],
    frameworks: ['Atomic Design', 'Design Tokens W3C Spec', 'Material Design', 'Apple HIG', 'WCAG 2.1 AA'],
    deliverables: ['Design System & Component Library', 'Interactive Prototypes', 'Usability Validation Reports', 'Accessibility Audit & Remediation Plan', 'Design System Governance Guide'],
    outcomes: [
      { value: '95%', label: 'User Satisfaction' },
      { value: '60%', label: 'Engagement Increase' },
      { value: 'WCAG AA', label: 'Accessibility Compliance' }
    ],
    relatedCapabilities: ['UX/UI Design Strategy', 'Mobile App Engineering']
  },
  'digital-experience/deliver': {
    serviceId: 'digital-experience',
    title: 'Deliver',
    tagline: 'Full-Stack Engineering and Continuous Experimentation at Scale',
    icon: Rocket,
    overview:
      'Deliver is where the design system becomes a production-grade, performant, and continuously optimising digital product. Our full-stack engineers ship code that meets Core Web Vitals targets, WCAG compliance, and institutional-grade observability — then wire every surface into a continuous experimentation platform that compounds conversion improvements month over month.',
    contextNote:
      'For Digital Experience engagements, Deliver is the phase where engineering excellence converts design intent into measurable business outcome. Performance, accessibility, and observability are non-negotiable defaults.',
    phases: [
      { title: 'Production Engineering', desc: 'React, Next.js, and native-mobile implementations with Core Web Vitals and accessibility budgets enforced in CI.' },
      { title: 'Experimentation Platform', desc: 'A/B and multivariate testing infrastructure that enables weekly hypothesis-driven experiments across every critical journey.' },
      { title: 'Behavioural Analytics Instrumentation', desc: 'Event schema governance, funnel instrumentation, and session analytics that reveal where users succeed and stall.' },
      { title: 'Release & Observability', desc: 'Progressive delivery (feature flags, canaries), real-user monitoring, and SLO-driven production operations.' }
    ],
    frameworks: ['React & Next.js', 'React Native & Swift/Kotlin', 'Core Web Vitals', 'Optimizely / VWO', 'Segment & Amplitude'],
    deliverables: ['Production Codebase', 'Experimentation Platform', 'Analytics Instrumentation', 'Performance & Accessibility Baseline', 'Release & Observability Runbooks'],
    outcomes: [
      { value: '<1s', label: 'Critical Journey Load' },
      { value: '3.2x', label: 'Conversion Lift' },
      { value: 'Weekly', label: 'Experiments Shipped' }
    ],
    relatedCapabilities: ['Mobile App Engineering', 'E-commerce Optimization']
  },

  // ============================================================
  // AI & AUTOMATION — Identify, Build, Scale
  // ============================================================
  'ai-automation/identify': {
    serviceId: 'ai-automation',
    title: 'Identify',
    tagline: 'AI Readiness and Use-Case Prioritisation Anchored in Business ROI',
    icon: Target,
    overview:
      'Identify is the sovereign discipline of separating AI theatre from AI consequence. We audit your data maturity, infrastructure readiness, and organisational capacity to absorb change, then catalogue candidate use cases against a quantitative ROI model. What emerges is a prioritised, sequenced portfolio of AI initiatives where each one has a defensible business case, a measurable success criterion, and a 90-day path to production value.',
    contextNote:
      'Within AI & Automation engagements, Identify is the phase that protects your organisation from the proof-of-concept graveyard. We do not pursue use cases that cannot demonstrably earn their cost of capital.',
    phases: [
      { title: 'Data Maturity Audit', desc: 'Forensic assessment of your data quality, governance, lineage, and accessibility — the four preconditions of production AI.' },
      { title: 'Use-Case Cataloguing', desc: 'Structured workshops with business, operations, and technology leaders to surface and document candidate AI opportunities.' },
      { title: 'ROI & Feasibility Scoring', desc: 'Each use case modelled for business value, technical feasibility, data readiness, and organisational change impact.' },
      { title: 'Portfolio Prioritisation', desc: 'A sequenced 12-24 month roadmap that balances quick wins, capability building, and long-horizon transformational bets.' }
    ],
    frameworks: ['Gartner AI Maturity Model', 'McKinsey AI Readiness Index', 'CRISP-DM', 'AI Use Case Canvas', 'Value-Risk Matrix'],
    deliverables: ['AI Readiness Assessment', 'Use-Case Portfolio with ROI Models', 'Data Maturity Report', 'AI Capability Roadmap', 'Responsible AI Governance Charter'],
    outcomes: [
      { value: '90d', label: 'Time to First Value' },
      { value: '100%', label: 'ROI-Backed Roadmap' },
      { value: '3-5', label: 'Priority Use Cases' }
    ],
    relatedCapabilities: ['Predictive Analytics', 'Generative AI Solutions']
  },
  'ai-automation/build': {
    serviceId: 'ai-automation',
    title: 'Build',
    tagline: 'Production-Grade ML Engineering and Responsible AI Governance',
    icon: Hammer,
    overview:
      'Build is where prototypes graduate into production systems. Our ML engineers and MLOps architects deliver models, pipelines, and governance scaffolding that meet the reliability, explainability, and compliance standards that institutional deployments demand. Every system is instrumented with drift detection, fairness monitoring, and audit-grade lineage — so that the moment a model degrades, the platform flags it and the pipeline retrains.',
    contextNote:
      'For AI & Automation clients, Build is the phase that transforms lab artefacts into enterprise-grade production assets. Responsible AI is engineered in from the first line of code — not retrofitted after an incident.',
    phases: [
      { title: 'Feature Engineering & Data Pipelines', desc: 'Production-grade feature stores, data contracts, and streaming pipelines that deliver clean, governed signal to the model layer.' },
      { title: 'Model Development & Validation', desc: 'State-of-the-art model architectures trained, tuned, and validated against fairness, robustness, and performance thresholds.' },
      { title: 'MLOps Engineering', desc: 'CI/CD for models, automated retraining pipelines, model registries, and canary deployments that de-risk every release.' },
      { title: 'Responsible AI Governance', desc: 'Explainability (SHAP/LIME), fairness audits, model cards, audit trails, and human-in-the-loop controls.' }
    ],
    frameworks: ['MLflow / Kubeflow', 'Feast Feature Store', 'Weights & Biases', 'SHAP & LIME', 'NIST AI Risk Management Framework'],
    deliverables: ['Production Models', 'Feature Store & Data Pipelines', 'MLOps Platform', 'Model Cards & Fairness Audits', 'Responsible AI Runbooks'],
    outcomes: [
      { value: '95%+', label: 'Model Accuracy' },
      { value: '100%', label: 'Explainable Decisions' },
      { value: 'Continuous', label: 'Retraining' }
    ],
    relatedCapabilities: ['Generative AI Solutions', 'Natural Language Processing', 'Computer Vision Systems']
  },
  'ai-automation/scale': {
    serviceId: 'ai-automation',
    title: 'Scale',
    tagline: 'Enterprise-Wide Deployment With Compounding Value Loops',
    icon: Maximize,
    overview:
      'Scale is the phase where an AI system stops being a programme and starts being institutional infrastructure. We federate models across business units, instrument feedback loops that improve performance with every interaction, and establish centres-of-excellence that transfer capability from our engineers into your permanent workforce. The outcome is an AI estate that compounds in value long after our engagement concludes.',
    contextNote:
      'Within AI & Automation, Scale is where AI transitions from novel capability to organisational muscle memory. We design for distributed adoption, not centralised bottleneck.',
    phases: [
      { title: 'Distributed Model Deployment', desc: 'Federated deployment patterns that serve models close to business-unit consumers while preserving central governance.' },
      { title: 'Continuous Learning Loops', desc: 'Human-in-the-loop feedback capture, active learning pipelines, and retraining cadences that compound model quality.' },
      { title: 'AI Centre-of-Excellence Establishment', desc: 'Platforms, templates, and training that enable business units to develop and deploy responsible AI with central support.' },
      { title: 'Value Tracking & Portfolio Governance', desc: 'Executive dashboards that link AI investment to realised business outcome, quarter over quarter.' }
    ],
    frameworks: ['Gartner AI Operating Model', 'Hub-and-Spoke CoE Design', 'Model Governance Councils', 'Continuous Learning Architectures'],
    deliverables: ['Federated Deployment Platform', 'AI CoE Charter & Operating Model', 'Continuous Learning Infrastructure', 'Value Realisation Dashboard', 'Internal Enablement Curriculum'],
    outcomes: [
      { value: '10x', label: 'Data Throughput' },
      { value: '45%', label: 'Cost Reduction' },
      { value: 'Compounding', label: 'Model Quality' }
    ],
    relatedCapabilities: ['Robotic Process Automation (RPA)', 'Predictive Analytics']
  },

  // ============================================================
  // ENTERPRISE SEO — Audit, Engineer, Dominate
  // ============================================================
  'enterprise-seo/audit': {
    serviceId: 'enterprise-seo',
    title: 'Audit',
    tagline: 'Forensic Technical, Content, and Competitive SEO Baselining',
    icon: Search,
    overview:
      'Audit is where search strategy meets forensic engineering. Our SEO architects crawl every URL, render every page, and instrument every core web vital across your domain, then overlay that against content gap analysis and competitive SERP intelligence to produce an evidence base so precise that every subsequent investment can be defended in P&L terms.',
    contextNote:
      'Within Enterprise SEO engagements, Audit is the phase that converts search from marketing folklore into engineering discipline. Findings are prioritised by expected organic revenue impact — not SEO purity.',
    phases: [
      { title: 'Technical Crawl & Rendering Audit', desc: 'Full-site crawl including JavaScript rendering, mobile-first indexing, and log-file analysis of Googlebot behaviour.' },
      { title: 'Core Web Vitals & Page Experience', desc: 'Field and lab data analysis identifying the specific templates and assets degrading CWV performance.' },
      { title: 'Content Gap & SERP Intelligence', desc: 'Keyword portfolio reconciliation against competitor SERP ownership, intent segmentation, and topic clustering.' },
      { title: 'International & Schema Compliance', desc: 'Hreflang configuration, structured data coverage, and international targeting review across all geo-markets.' }
    ],
    frameworks: ['Screaming Frog & Sitebulb', 'Ahrefs & Semrush', 'Google Search Console', 'Schema.org & JSON-LD', 'Log File Analysis'],
    deliverables: ['Technical SEO Audit Dossier', 'CWV Remediation Backlog', 'Content Gap & Keyword Portfolio', 'Competitive SERP Intelligence', 'International Compliance Matrix'],
    outcomes: [
      { value: '100%', label: 'URL Coverage' },
      { value: 'Full', label: 'JS Rendering Analysis' },
      { value: 'Evidence', label: 'Backed Roadmap' }
    ],
    relatedCapabilities: ['Technical SEO & Core Web Vitals', 'International SEO']
  },
  'enterprise-seo/engineer': {
    serviceId: 'enterprise-seo',
    title: 'Engineer',
    tagline: 'Technical Foundation, Content Authority, and Programmatic Capture at Scale',
    icon: Wrench,
    overview:
      'Engineer is where audit findings become deployed infrastructure. We implement technical remediations, launch topical-authority content programmes, and stand up programmatic SEO pipelines that generate thousands of intent-optimised pages — each tuned to capture long-tail demand that manual production could never reach.',
    contextNote:
      'For Enterprise SEO clients, Engineer is the phase where the compounding flywheel begins to turn. Every technical fix and every content cluster builds on the last, widening the gap between you and the competitive field.',
    phases: [
      { title: 'Technical Remediation Deployment', desc: 'Core Web Vitals fixes, structured data rollout, crawl-budget optimisation, and internal-link architecture engineering.' },
      { title: 'Topical Authority Content Strategy', desc: 'Hub-and-spoke content clusters that establish your brand as the canonical answer in your market\'s most valuable topics.' },
      { title: 'Programmatic SEO Pipelines', desc: 'Templated, data-driven page generation at scale — engineered for quality, indexation, and conversion.' },
      { title: 'Internal Link Equity Engineering', desc: 'Graph-theoretic analysis and re-engineering of internal linking to flow authority toward priority URLs.' }
    ],
    frameworks: ['Hub-and-Spoke Content Architecture', 'Schema.org / JSON-LD', 'Cloudflare Workers for Edge SEO', 'Custom Programmatic SEO Pipelines'],
    deliverables: ['Technical SEO Remediation', 'Topical Content Calendar & Assets', 'Programmatic SEO Platform', 'Internal Link Architecture', 'Schema Coverage Implementation'],
    outcomes: [
      { value: '10M+', label: 'Keywords Reached' },
      { value: '340%', label: 'Traffic Growth' },
      { value: 'Compounding', label: 'Authority' }
    ],
    relatedCapabilities: ['Programmatic SEO', 'Content Strategy & clustering', 'Migration SEO Support']
  },
  'enterprise-seo/dominate': {
    serviceId: 'enterprise-seo',
    title: 'Dominate',
    tagline: 'Continuous Algorithm Adaptation and Permanent Market Presence',
    icon: Crown,
    overview:
      'Dominate is the phase where organic traffic stops being a project and becomes a permanent institutional asset. We operate continuous performance monitoring, algorithm adaptation protocols, authority-building PR and digital-signal campaigns, and competitive war-gaming — ensuring your search position is defended quarter after quarter against every algorithm update and every well-funded challenger.',
    contextNote:
      'For Enterprise SEO clients, Dominate is the managed-service phase where the advantage is held and extended. Our SEO operations function like a trading floor — monitoring, reacting, and reinvesting in real time.',
    phases: [
      { title: 'Real-Time Rank & Visibility Monitoring', desc: 'Market-by-market, device-by-device rank tracking with anomaly detection and executive dashboards.' },
      { title: 'Algorithm Adaptation Playbook', desc: 'Structured response protocols for core updates, helpful-content refreshes, and product-review algorithm events.' },
      { title: 'Digital PR & Authority Building', desc: 'Editorial-grade link earning through research reports, data journalism, and thought-leadership placement.' },
      { title: 'Competitive War-Gaming', desc: 'Quarterly competitive reviews that surface emerging SERP threats and reallocate investment toward defensive and offensive plays.' }
    ],
    frameworks: ['STAT Search Analytics', 'Sistrix Visibility Index', 'Ahrefs & Semrush', 'Digital PR Methodologies', 'Competitive SERP War-Gaming'],
    deliverables: ['Continuous Rank Monitoring', 'Algorithm Response Playbooks', 'Digital PR Campaign Portfolio', 'Quarterly Competitive Reviews', 'Monthly Executive Reports'],
    outcomes: [
      { value: '#1', label: 'Category Rankings' },
      { value: '50+', label: 'International Markets' },
      { value: 'Permanent', label: 'Institutional Presence' }
    ],
    relatedCapabilities: ['International SEO', 'Content Strategy & clustering']
  },

  // ============================================================
  // DIGITAL MARKETING — Strategize, Execute, Optimize
  // ============================================================
  'digital-marketing/strategize': {
    serviceId: 'digital-marketing',
    title: 'Strategize',
    tagline: 'Audience Intelligence, Full-Funnel Architecture, and Revenue-Aligned Investment',
    icon: LineChart,
    overview:
      'Strategize is the phase that replaces channel-silo thinking with full-funnel portfolio architecture. We quantify audience segments, model full-funnel paths from awareness to revenue, and allocate investment based on projected incremental contribution rather than last-click convenience. The outcome is a marketing portfolio where every dollar is defensible against the P&L.',
    contextNote:
      'Within Digital Marketing engagements, Strategize is where marketing earns its seat at the board table. Every plan is tied to pipeline and revenue, not impressions and clicks.',
    phases: [
      { title: 'Audience Intelligence & Segmentation', desc: 'First-party data analysis, intent modelling, and behavioural segmentation that surface the audiences worth buying.' },
      { title: 'Full-Funnel Portfolio Design', desc: 'Channel, message, and budget orchestration from awareness through conversion and expansion.' },
      { title: 'Incrementality & Media Mix Modelling', desc: 'MMM and geo-lift experiments that quantify true marketing contribution above baseline demand.' },
      { title: 'Financial Architecture', desc: 'Board-ready budget models tying marketing investment to pipeline, revenue, and customer lifetime value.' }
    ],
    frameworks: ['Media Mix Modelling', 'Bass Diffusion Modelling', 'Meta Lift Studies', 'MTA + MMM Hybrid Attribution', 'LTV:CAC Portfolio Theory'],
    deliverables: ['Audience Intelligence Dossier', 'Full-Funnel Portfolio Plan', 'Incrementality Study Design', 'Board-Level Financial Model', 'Channel Allocation Roadmap'],
    outcomes: [
      { value: '5.2x', label: 'Target ROAS' },
      { value: '100%', label: 'Budget Defensibility' },
      { value: '12+', label: 'Channels Orchestrated' }
    ],
    relatedCapabilities: ['Lead Generation & Paid Ads', 'Marketing Automation']
  },
  'digital-marketing/execute': {
    serviceId: 'digital-marketing',
    title: 'Execute',
    tagline: 'Omnichannel Deployment With Dynamic Creative and Real-Time Bidding',
    icon: Zap,
    overview:
      'Execute is where strategy compounds into momentum. Our media teams deploy campaigns across Google, Meta, LinkedIn, programmatic, and CTV with dynamic creative optimisation, algorithmic bidding, and real-time budget reallocation that responds to incoming performance signal within hours rather than months.',
    contextNote:
      'For Digital Marketing clients, Execute is the phase where institutional media portfolios — often in the tens of millions annually — are managed with trading-floor discipline.',
    phases: [
      { title: 'Campaign Architecture Deployment', desc: 'Account structures, audience targeting, creative variants, and measurement schemas deployed across every channel.' },
      { title: 'Dynamic Creative Optimisation', desc: 'Modular creative systems that test message, format, and CTA combinations at production scale.' },
      { title: 'Algorithmic Bidding & Audience Expansion', desc: 'Value-based bidding, lookalike expansion, and customer-list retargeting tuned for qualified pipeline.' },
      { title: 'Real-Time Budget Reallocation', desc: 'Hourly performance monitoring with pre-authorised reallocation protocols across campaigns, channels, and geographies.' }
    ],
    frameworks: ['Google Ads & Analytics 4', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'Smart Bidding (tCPA, tROAS, MaxConv)', 'DV360 & The Trade Desk'],
    deliverables: ['Production Campaign Architecture', 'Dynamic Creative Library', 'Bid Strategy Configuration', 'Real-Time Performance Dashboard', 'Weekly Reallocation Logs'],
    outcomes: [
      { value: 'Hourly', label: 'Optimisation Cadence' },
      { value: '65%', label: 'Lead Cost Reduction' },
      { value: '3M+', label: 'Qualified Leads' }
    ],
    relatedCapabilities: ['Lead Generation & Paid Ads', 'Commercial Video & Photo Production']
  },
  'digital-marketing/optimize': {
    serviceId: 'digital-marketing',
    title: 'Optimize',
    tagline: 'Multi-Touch Attribution, Incrementality, and Continuous Capital Reallocation',
    icon: RefreshCw,
    overview:
      'Optimize is the continuous discipline of connecting every marketing touchpoint to pipeline and revenue — then reallocating capital toward what demonstrably drives incremental business. Our analytics engineering team operates unified attribution, incrementality testing, and MMM in concert, giving executives a single truth for the real performance of their marketing investment.',
    contextNote:
      'Within Digital Marketing, Optimize is the permanent phase — the flywheel that converts spend into compounding institutional advantage.',
    phases: [
      { title: 'Unified Attribution Modelling', desc: 'MTA, MMM, and incrementality fused into a single hybrid model that reconciles all three perspectives.' },
      { title: 'Incrementality Testing Programme', desc: 'Continuous geo-lift, holdout, and conversion-lift experiments that quantify true marketing impact.' },
      { title: 'LTV:CAC Portfolio Rebalancing', desc: 'Quarterly reallocation of budget based on realised lifetime value by channel, segment, and offer.' },
      { title: 'Executive Revenue Dashboarding', desc: 'Board-grade dashboards connecting marketing spend to pipeline, bookings, and long-horizon revenue.' }
    ],
    frameworks: ['Attribution Hybrid Models', 'Geo-Lift & Holdout Testing', 'LTV Forecasting', 'Looker & Tableau', 'Customer Analytics Workbench'],
    deliverables: ['Unified Attribution Platform', 'Incrementality Test Calendar', 'Executive Revenue Dashboard', 'Quarterly Portfolio Rebalancing Reports', 'LTV:CAC Forecasts'],
    outcomes: [
      { value: '5.2x', label: 'Realised ROAS' },
      { value: '12+', label: 'Attributed Channels' },
      { value: 'Quarterly', label: 'Reallocation Cadence' }
    ],
    relatedCapabilities: ['Marketing Automation', 'Lead Generation & Paid Ads']
  },

  // ============================================================
  // SOCIAL MEDIA HANDLING — Analyze, Activate, Amplify
  // ============================================================
  'social-capital/analyze': {
    serviceId: 'social-capital',
    title: 'Analyze',
    tagline: 'Social Listening Intelligence and Institutional Positioning Clarity',
    icon: Eye,
    overview:
      'Analyze is where social media strategy stops being guesswork and starts being intelligence. We deploy enterprise social-listening platforms to map the full conversation landscape surrounding your brand, your competitors, and your category — then distill that signal into a positioning clarity brief that anchors every subsequent creative and community decision.',
    contextNote:
      'Within Social Media Handling engagements, Analyze is the foundation that separates social content that resonates from social content that drifts. Every piece of content traces back to a documented audience insight.',
    phases: [
      { title: 'Social Listening Deployment', desc: 'Multi-platform brand, competitor, and category listening with sentiment, share-of-voice, and narrative-theme extraction.' },
      { title: 'Audience Segmentation & Persona Mapping', desc: 'Quantitative audience clustering combined with depth-interview qualitative signal.' },
      { title: 'Competitive Benchmarking', desc: 'Structured analysis of competitor content performance, publishing cadence, influencer relationships, and community engagement.' },
      { title: 'Positioning Brief', desc: 'A board-ready brief articulating your brand\'s social whitespace, proof points, and content pillars.' }
    ],
    frameworks: ['Brandwatch & Talkwalker', 'Sprinklr Insights', 'Share-of-Voice Modelling', 'Narrative Analysis', 'Competitive Content Benchmarking'],
    deliverables: ['Social Listening Dashboard', 'Audience Segmentation Report', 'Competitive Benchmark Analysis', 'Brand Positioning Brief', 'Content Pillar Architecture'],
    outcomes: [
      { value: '100%', label: 'Conversation Coverage' },
      { value: 'Full', label: 'Competitive Intelligence' },
      { value: 'Evidence', label: 'Based Positioning' }
    ],
    relatedCapabilities: ['Brand Governance', 'Crisis Communications']
  },
  'social-capital/activate': {
    serviceId: 'social-capital',
    title: 'Activate',
    tagline: 'Content Engineering, Community Cultivation, and Influencer Architecture',
    icon: Sparkles,
    overview:
      'Activate is where positioning becomes published momentum. Our content, community, and influencer teams produce platform-optimised assets at institutional cadence, cultivate engaged communities through disciplined response protocols, and orchestrate creator partnerships that extend reach while protecting brand authority.',
    contextNote:
      'For Social Media Handling clients, Activate is the phase where social presence starts to compound. Every post, every comment, every partnership builds on the last.',
    phases: [
      { title: 'Content Calendar Engineering', desc: 'Platform-specific editorial calendars built around content pillars, cultural moments, and always-on brand storytelling.' },
      { title: 'Creator & Community Operations', desc: 'Community-management SLAs, moderation playbooks, and escalation protocols operated 7 days a week.' },
      { title: 'Influencer & Creator Partnerships', desc: 'Vetted creator sourcing, briefing, contracting, and performance measurement with disclosure compliance.' },
      { title: 'Paid Amplification Integration', desc: 'Boost and dark-post strategies that extend top-performing organic content to precision audiences.' }
    ],
    frameworks: ['Sprout Social & Hootsuite', 'Creator IQ', 'Community Engagement SLAs', 'FTC/ASA Disclosure Protocols', 'Dark Post Amplification'],
    deliverables: ['Content Calendar & Asset Library', 'Community Management Playbook', 'Influencer Partnership Portfolio', 'Paid Amplification Strategy', 'Creative Production Pipeline'],
    outcomes: [
      { value: '400%', label: 'Engagement Growth' },
      { value: '<30m', label: 'Response Time' },
      { value: '7 days', label: 'Coverage' }
    ],
    relatedCapabilities: ['Corporate Rebranding', 'Employer Branding']
  },
  'social-capital/amplify': {
    serviceId: 'social-capital',
    title: 'Amplify',
    tagline: 'Performance Analytics, Social Commerce, and Sovereign Crisis Protocols',
    icon: Megaphone,
    overview:
      'Amplify is where social presence converts into measurable institutional outcome. We instrument every content asset against business KPIs — brand health, pipeline, commerce, talent attraction — then operate crisis-communication protocols that protect brand equity across volatile news cycles and category disruptions.',
    contextNote:
      'Within Social Media Handling, Amplify is the phase where reputation becomes a governed institutional asset rather than an ambient exposure.',
    phases: [
      { title: 'Performance Analytics & Brand Health', desc: 'Integrated dashboards tracking share-of-voice, sentiment, engagement quality, and downstream business outcome.' },
      { title: 'Social Commerce Integration', desc: 'Product tagging, shoppable content, and direct-conversion architectures across Instagram, TikTok Shop, and LinkedIn.' },
      { title: 'Crisis Communication Protocols', desc: 'Pre-approved response frameworks, spokesperson coordination, and 15-minute activation SLAs for reputational events.' },
      { title: 'Executive Brand Programmes', desc: 'LinkedIn-led executive thought leadership that extends institutional voice through credible human platforms.' }
    ],
    frameworks: ['Brandwatch Measure', 'Sprinklr Advocacy', 'Crisis Communication Playbooks', 'Executive Voice Programmes', 'Social Commerce Stacks'],
    deliverables: ['Performance Dashboard', 'Social Commerce Architecture', 'Crisis Communication Playbook', 'Executive Programme Calendar', 'Monthly Brand Health Reports'],
    outcomes: [
      { value: '2.5M+', label: 'Audience Reach' },
      { value: '<15m', label: 'Crisis Response' },
      { value: 'Zero', label: 'Unmanaged Incidents' }
    ],
    relatedCapabilities: ['Crisis Communications', 'Brand Governance']
  },

  // ============================================================
  // CUSTOM SOFTWARE — Discovery & Architecture, Agile Development, Launch & Scale
  // ============================================================
  'custom-software/discovery-architecture': {
    serviceId: 'custom-software',
    title: 'Discovery & Architecture',
    tagline: 'Product Definition and Engineered Technical Foundation',
    icon: PenLine,
    overview:
      'Discovery & Architecture is the phase that separates software that endures from software that ships and erodes. We run intensive requirements gathering, user-story mapping, and technical architecture design — then select technology stacks and integration patterns tuned to your scale requirements, team capability, and long-term sovereignty posture.',
    contextNote:
      'Within Custom Software engagements, Discovery & Architecture compresses the typical six-month ambiguity window into a disciplined four-to-six-week clarity sprint, de-risking every subsequent engineering dollar.',
    phases: [
      { title: 'Product Discovery Workshops', desc: 'Executive and user workshops to articulate vision, success criteria, user journeys, and measurable outcomes.' },
      { title: 'Technical Architecture Design', desc: 'Domain decomposition, service boundaries, data architecture, and integration patterns documented in ADRs.' },
      { title: 'Technology Stack Selection', desc: 'Stack decisions balanced against scale, team capability, hiring pool, and long-term maintenance economics.' },
      { title: 'Delivery Planning & Team Composition', desc: 'Sprint sequencing, team topologies, and operational governance aligned to product and business cadence.' }
    ],
    frameworks: ['Event Storming', 'Domain-Driven Design', 'C4 Model', 'ADR Practice', 'Team Topologies'],
    deliverables: ['Product Requirements Document', 'Technical Architecture Document', 'Architecture Decision Records', 'Delivery Plan & Sprint Backlog', 'Team Topology Design'],
    outcomes: [
      { value: '4-6 wk', label: 'Clarity Sprint' },
      { value: '100%', label: 'Documented Decisions' },
      { value: 'De-risked', label: 'Execution Plan' }
    ],
    relatedCapabilities: ['API Design & Microservices', 'Web Application Development', 'SaaS Platform Engineering']
  },
  'custom-software/agile-development': {
    serviceId: 'custom-software',
    title: 'Agile Development',
    tagline: 'Two-Week Sprints, Continuous Delivery, and Automated Quality Gates',
    icon: Code2,
    overview:
      'Agile Development is where disciplined engineering converts architecture into working product. Our teams operate two-week sprints with weekly stakeholder demonstrations, continuous integration pipelines enforcing >90% test coverage on critical paths, automated security scanning, and transparent progress dashboards that keep every stakeholder in sync.',
    contextNote:
      'For Custom Software clients, Agile Development is the phase where our institutional engineering standards — automated testing, infrastructure-as-code, peer review, observability — compound into a delivery cadence that outperforms both internal teams and traditional agencies.',
    phases: [
      { title: 'Sprint Cadence & Demonstrations', desc: 'Two-week sprints with sprint reviews, refinement, and transparent stakeholder demos every week.' },
      { title: 'CI/CD & Quality Automation', desc: 'Automated unit, integration, and end-to-end testing gates; security scanning; performance benchmarks; infrastructure-as-code.' },
      { title: 'Peer-Reviewed Engineering', desc: 'All code peer-reviewed by senior engineers; all architectural changes recorded in ADRs.' },
      { title: 'Progress Transparency', desc: 'Live dashboards covering velocity, quality metrics, risk register, and budget-to-actuals.' }
    ],
    frameworks: ['Scrum & Kanban Hybrid', 'Trunk-Based Development', 'GitHub Actions / GitLab CI/CD', 'SonarQube & Snyk', 'OpenTelemetry'],
    deliverables: ['Sprint Outputs & Demonstrations', 'Production-Grade Codebase', 'CI/CD Pipelines & Test Suites', 'Live Progress Dashboards', 'Architectural Decision Records'],
    outcomes: [
      { value: '>90%', label: 'Critical Path Coverage' },
      { value: '2 wk', label: 'Sprint Cadence' },
      { value: 'Weekly', label: 'Stakeholder Demos' }
    ],
    relatedCapabilities: ['Web Application Development', 'Mobile App Development', 'DevOps & CI/CD Pipelines']
  },
  'custom-software/launch-scale': {
    serviceId: 'custom-software',
    title: 'Launch & Scale',
    tagline: 'Zero-Downtime Release, SRE Operations, and Continuous Evolution',
    icon: GitBranch,
    overview:
      'Launch & Scale is where engineered product meets production reality. We deploy with progressive delivery patterns — feature flags, canaries, blue-green — harden security, instrument observability to SLO granularity, transfer knowledge to your teams, and offer retained support that evolves the platform in step with your ambitions.',
    contextNote:
      'Within Custom Software, Launch & Scale is the phase where our 99.9% uptime SLA record is earned through rehearsed release protocols and disciplined SRE practice.',
    phases: [
      { title: 'Progressive Delivery', desc: 'Feature flags, canary releases, and blue-green deployments that de-risk every production change.' },
      { title: 'Observability & SLO Engineering', desc: 'Logs, metrics, traces, and user-experience telemetry wired to error budgets and SLO-driven alerting.' },
      { title: 'Security Hardening & Compliance', desc: 'Pen-test remediation, dependency SBOMs, secrets management, and compliance documentation (SOC 2, ISO 27001).' },
      { title: 'Knowledge Transfer & Retained Support', desc: 'Operational runbooks, training curricula, and optional retainer support tuned to your team\'s capability posture.' }
    ],
    frameworks: ['LaunchDarkly & Flagsmith', 'Datadog / Grafana / New Relic', 'SLO & Error Budgets', 'OWASP ASVS', 'Team Enablement Playbooks'],
    deliverables: ['Production Deployment', 'Observability Platform', 'Security Hardening Report', 'Operational Runbooks', 'Retained Support Agreement'],
    outcomes: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: 'Zero', label: 'Downtime Releases' },
      { value: '4x', label: 'Faster to Market' }
    ],
    relatedCapabilities: ['DevOps & CI/CD Pipelines', 'Legacy System Modernization']
  },

  // ============================================================
  // BRAND MANAGEMENT — Define, Design, Defend
  // ============================================================
  'brand-management/define': {
    serviceId: 'brand-management',
    title: 'Define',
    tagline: 'Brand Archaeology and Sovereign Positioning Clarity',
    icon: Compass,
    overview:
      'Define is the discipline of uncovering what your institution uniquely is, what it uniquely does, and what it uniquely stands for — and then distilling that into a positioning so precise that every subsequent design and communication decision traces back to a single strategic source of truth.',
    contextNote:
      'Within Brand Management engagements, Define is the phase that protects the downstream investment. Without a codified positioning, visual identity drifts, messaging fragments, and brand equity erodes quarter over quarter.',
    phases: [
      { title: 'Executive Alignment', desc: 'C-suite and founder workshops that surface the implicit assumptions, ambitions, and non-negotiables underpinning the brand.' },
      { title: 'Perception Research', desc: 'Qualitative and quantitative research across customers, employees, prospects, and industry influencers.' },
      { title: 'Competitive Positioning Analysis', desc: 'Systematic decomposition of the competitive landscape to surface the whitespace where your brand can own permanent authority.' },
      { title: 'Positioning Codification', desc: 'A board-approved positioning statement, narrative architecture, proof points, and tone-of-voice charter.' }
    ],
    frameworks: ['Brand Archaeology', 'Positioning Statement Framework', 'Category Design', 'Narrative Architecture', 'Tone-of-Voice Codification'],
    deliverables: ['Brand Positioning Statement', 'Narrative Architecture', 'Tone-of-Voice Charter', 'Competitive Positioning Map', 'Executive Alignment Workshop Outputs'],
    outcomes: [
      { value: '100%', label: 'Board Alignment' },
      { value: 'Singular', label: 'Source of Truth' },
      { value: '2x', label: 'Premium Perception' }
    ],
    relatedCapabilities: ['Corporate Rebranding', 'Visual Identity Systems']
  },
  'brand-management/design': {
    serviceId: 'brand-management',
    title: 'Design',
    tagline: 'Visual Identity Systems and Institutional Asset Codification',
    icon: Palette,
    overview:
      'Design is where positioning becomes a sensory system — a codified visual, verbal, and experiential language that shows up consistently at every touchpoint, in every market, across every medium. Our brand designers deliver identity systems with the rigor of engineering: modular, scalable, documented, and resilient to local reinterpretation.',
    contextNote:
      'For Brand Management clients, Design is the phase where the abstract becomes the unmistakable. Every asset, token, and template becomes an institutional artefact protected by governance.',
    phases: [
      { title: 'Visual Identity System', desc: 'Logo system, color architecture, typography hierarchy, photography direction, and motion grammar.' },
      { title: 'Brand Guidelines Codification', desc: 'Comprehensive guidelines documenting every rule, every exception, and every application across every touchpoint.' },
      { title: 'Institutional Asset Library', desc: 'Digital Asset Management system populated with production-ready templates, stock assets, and brand-compliant tooling.' },
      { title: 'Touchpoint Audit & Rollout', desc: 'Prioritised rollout across digital, print, physical, and internal touchpoints with quality assurance protocols.' }
    ],
    frameworks: ['Design Token W3C Spec', 'Atomic Design', 'Brandfolder / Bynder DAM', 'Style Guide Driven Development', 'Brand Governance Frameworks'],
    deliverables: ['Visual Identity System', 'Brand Guidelines', 'DAM Platform Deployment', 'Touchpoint Audit Report', 'Rollout Playbook'],
    outcomes: [
      { value: '85%', label: 'Recall Lift' },
      { value: '100%', label: 'Touchpoint Consistency' },
      { value: '40+', label: 'Industries Codified' }
    ],
    relatedCapabilities: ['Visual Identity Systems', 'Employer Branding']
  },
  'brand-management/defend': {
    serviceId: 'brand-management',
    title: 'Defend',
    tagline: 'Brand Governance, Compliance Monitoring, and Crisis Protocols',
    icon: ShieldHalf,
    overview:
      'Defend is the permanent phase. Once your identity is defined and designed, it must be governed — against drift, against misuse, against crisis, and against competitive encroachment. We deploy governance frameworks that make consistency the path of least resistance, compliance monitoring that catches deviation in real time, and crisis protocols that activate within minutes rather than hours.',
    contextNote:
      'Within Brand Management, Defend is the phase that preserves the investment made in Define and Design. Brand equity, once built, is the easiest institutional asset to erode — and the most expensive to rebuild.',
    phases: [
      { title: 'Brand Governance Council', desc: 'Cross-functional governance with published standards, approval workflows, and escalation protocols.' },
      { title: 'Compliance Monitoring', desc: 'Automated and human monitoring of brand usage across paid, owned, partner, and earned channels.' },
      { title: 'Crisis Communication Playbooks', desc: 'Pre-approved response frameworks, spokesperson protocols, and rehearsed tabletop exercises.' },
      { title: 'Annual Brand Audits', desc: 'Annual institutional audits benchmarking brand health, equity, and compliance against baseline and competitive set.' }
    ],
    frameworks: ['Brand Governance Councils', 'Compliance Monitoring Platforms', 'Crisis Communication Frameworks', 'Brand Equity Indices', 'Annual Audit Protocols'],
    deliverables: ['Governance Charter', 'Compliance Monitoring Dashboard', 'Crisis Communication Playbook', 'Annual Brand Audit Report', 'Rehearsed Tabletop Exercises'],
    outcomes: [
      { value: 'Zero', label: 'Unmanaged Drift' },
      { value: '<15m', label: 'Crisis Activation' },
      { value: 'Annual', label: 'Equity Audits' }
    ],
    relatedCapabilities: ['Crisis Communications', 'Brand Governance']
  }
};

export const getMethodologyDetail = (serviceId: string, methodologyId: string): MethodologyDetail | undefined => {
  return DATA[`${serviceId}/${methodologyId}`];
};

export const getMethodologyKey = (serviceId: string, title: string): string => {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
  // handle "and" collapse for "Discovery & Architecture" -> "discovery-architecture"
  const normalised = slug.replace(/-and-/g, '-');
  return `${serviceId}/${normalised}`;
};

export const getMethodologySlug = (title: string): string => {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
  return slug.replace(/-and-/g, '-');
};
