import { toSlug } from "../utils/slugs";
import {
  Layers, Globe, Smartphone, Database, ShoppingCart, Eye, Palette,
  MessageCircle, UserPlus, FileCheck, Share2, TrendingUp, Search, Cpu,
  Shield, ShieldHalf, Cloud, BarChart3, Users, Video, Code2, Workflow, Brain,
  LineChart, ScanEye, Network, GitBranch, Server, Megaphone,
  MapPin, Repeat, Lock, Gauge
} from 'lucide-react';

export interface CapabilityData {
  title: string;
  tagline: string;
  description: string;
  strategicImportance: string;
  methodology: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  icon: any;
  frameworks?: string[];
  deliverables?: string[];
  signatureFeatures?: { title: string; desc: string }[];
}

const CAPS: Record<string, CapabilityData> = {};

const register = (titles: string[], data: CapabilityData) => {
  titles.forEach(t => {
    CAPS[toSlug(t)] = data;
  });
};

// ============================================================
// IT STRATEGY CAPABILITIES
// ============================================================

register(['Digital Operating Models'], {
  title: 'Digital Operating Models',
  tagline: 'Aligning Organisational Structure With Sovereign Digital Velocity',
  description:
    'A digital operating model is the institutional lattice that bridges strategy and execution — governing how value is delivered, how decisions are sequenced, and how data flows between domains. We engineer operating models that dissolve functional silos and replace them with product-centric, cross-functional squads operating under lightweight governance.',
  strategicImportance:
    'Legacy operating structures were built for stability in slow-moving markets. They cannot support the decision velocity, deployment cadence, or cross-domain collaboration that digital leadership demands. Without an engineered operating model, transformation programmes hit the wall of organisational inertia — and stall.',
  methodology: [
    { title: 'Value Stream Mapping', desc: 'Forensic identification of end-to-end value streams, quantifying friction and handoff cost at every transition.' },
    { title: 'Squad Topology Design', desc: 'Restructuring functional silos into cross-functional, outcome-accountable teams aligned to product and customer journeys.' },
    { title: 'Governance Engineering', desc: 'Codifying lightweight decision protocols, escalation paths, and portfolio rhythms that empower without creating chaos.' },
    { title: 'Capability Cascade', desc: 'Sequenced rollout across pilot, scale, and embed phases with KPI-linked readiness gates.' }
  ],
  frameworks: ['Team Topologies', 'Agile at Scale (SAFe, LeSS, Spotify)', 'OKR Cascade', 'Value Stream Management', 'Service-Dominant Logic'],
  deliverables: ['Target Operating Model', 'Squad Topology & Charter', 'Governance Playbook', 'Transition Wave Plan', 'Capability Maturity Dashboard'],
  signatureFeatures: [
    { title: 'Sovereign Decision Velocity', desc: 'Decisions made at the level where information lives — not where titles demand.' },
    { title: 'Composable Squads', desc: 'Teams that reshape around opportunity rather than protecting territory.' }
  ],
  outcomes: [
    { value: '40%', label: 'Faster Decisions' },
    { value: '25%', label: 'OpEx Reduction' },
    { value: '3x', label: 'Deployment Velocity' }
  ],
  icon: Layers
});

register(['M&A Technology Integration', 'MA Technology Integration'], {
  title: 'M&A Technology Integration',
  tagline: 'Sovereign Post-Deal Integration That Realises Synergies On Schedule',
  description:
    'M&A synergies evaporate in the integration phase. Our principals lead technology integration from day-one planning through platform consolidation, realising the revenue, cost, and capability synergies underwritten in the deal thesis while protecting operational continuity and customer experience.',
  strategicImportance:
    'Post-merger integration is where deal value is earned or lost. Technology integration, in particular, is the phase where synergy slippage is largest and least forgiving — a stalled integration compounds into ongoing dis-synergies that erode the deal\'s economic rationale indefinitely.',
  methodology: [
    { title: 'Day-One Readiness', desc: 'Deal-close readiness planning covering identity, network, critical applications, and communications.' },
    { title: 'Synergy Quantification', desc: 'Bottom-up modelling of cost, revenue, and capability synergies — with owner accountability and realisation timelines.' },
    { title: 'Platform Consolidation', desc: 'Systematic rationalisation of overlapping ERP, CRM, collaboration, and infrastructure estates.' },
    { title: 'Cultural & Capability Bridging', desc: 'Cross-entity capability mapping and retention strategies for critical technology talent.' }
  ],
  frameworks: ['Day-One Readiness Playbook', 'Synergy Tracking Framework', 'Application Portfolio Rationalisation', 'TSA Management', 'Post-Deal Governance'],
  deliverables: ['Day-One Integration Plan', 'Synergy Realisation Tracker', 'Platform Consolidation Roadmap', 'TSA Exit Playbook', 'Integration PMO Charter'],
  outcomes: [
    { value: '95%', label: 'Synergy Realisation' },
    { value: '<12mo', label: 'Day-One to Platform Exit' },
    { value: 'Zero', label: 'Integration-Related Outages' }
  ],
  icon: TrendingUp
});

register(['Enterprise Architecture'], {
  title: 'Enterprise Architecture',
  tagline: 'The Sovereign Blueprint of Business, Information, and Technology',
  description:
    'Enterprise architecture is the discipline of rendering the entire institution visible — business capabilities, information flows, application portfolios, and infrastructure topology — into a single coherent blueprint that every investment and every change must honour. Our architects produce living, queryable architecture artefacts that inform every portfolio decision.',
  strategicImportance:
    'Without enterprise architecture, every large organisation slowly accretes into a tangle of redundant tooling, overlapping data stores, and integration spaghetti. The cost of change compounds, the cost of running compounds, and eventually the institution cannot move. EA is the discipline that restores architectural agency to the enterprise.',
  methodology: [
    { title: 'Business Capability Modelling', desc: 'Decomposition of the enterprise into discrete, assessable business capabilities scored on strategic value and maturity.' },
    { title: 'Information & Data Architecture', desc: 'Master data domains, canonical data models, and information-flow blueprints for the whole institution.' },
    { title: 'Application Portfolio Rationalisation', desc: 'Classification of every application on TIME (Tolerate, Invest, Migrate, Eliminate) dimensions.' },
    { title: 'Technology Standards & Radar', desc: 'Published technology standards, reference architectures, and a forward-looking technology radar.' }
  ],
  frameworks: ['TOGAF 10', 'Zachman Framework', 'ArchiMate 3.2', 'C4 Model', 'Domain-Driven Design'],
  deliverables: ['Business Capability Model', 'Application Portfolio Heatmap', 'Information Architecture', 'Reference Architecture Library', 'Technology Radar'],
  outcomes: [
    { value: '50%', label: 'Integration Cost Reduction' },
    { value: '3x', label: 'Change Velocity' },
    { value: '100%', label: 'Portfolio Visibility' }
  ],
  icon: Network
});

register(['IT Cost Optimization'], {
  title: 'IT Cost Optimization',
  tagline: 'Lean Institutional IT Without Compromising Strategic Capability',
  description:
    'Our IT cost optimisation practice does not cut — it rationalises. We identify redundant tooling, over-provisioned infrastructure, renegotiable vendor commitments, and cloud economics gaps, then redirect the recovered capital toward compounding strategic initiatives.',
  strategicImportance:
    'IT spend, if left unmanaged, accretes at 5-10% annually. Over a five-year horizon, that accretion becomes the single largest impediment to funding transformation. Cost optimisation is not austerity — it is the reclaimed capital that funds the next generation of institutional capability.',
  methodology: [
    { title: 'Spend Taxonomy & Visibility', desc: 'Forensic classification of IT spend by category, supplier, and strategic value.' },
    { title: 'Vendor Portfolio Rationalisation', desc: 'Contract review, renegotiation, and consolidation across software, infrastructure, and services vendors.' },
    { title: 'Cloud & Infrastructure Efficiency', desc: 'Rightsizing, reserved capacity, and architectural modernisation for compounding efficiency.' },
    { title: 'Capability Reallocation', desc: 'Redirection of recovered capital into board-approved strategic initiatives.' }
  ],
  frameworks: ['TBM (Technology Business Management)', 'Gartner IT Cost Optimization Framework', 'FinOps Foundation', 'Zero-Based Budgeting'],
  deliverables: ['IT Spend Taxonomy', 'Vendor Rationalisation Plan', 'Cloud Efficiency Roadmap', 'Reallocation Business Case', 'Annual Cost Governance Dashboard'],
  outcomes: [
    { value: '25-40%', label: 'Cost Reduction' },
    { value: '12mo', label: 'Payback' },
    { value: '100%', label: 'Strategic Reallocation' }
  ],
  icon: BarChart3
});

register(['Vendor Management Strategy'], {
  title: 'Vendor Management Strategy',
  tagline: 'Institutional Supplier Portfolios Engineered For Performance and Sovereign Risk Control',
  description:
    'Modern enterprises depend on hundreds of technology vendors — each one a potential source of risk, cost leakage, or underperformance. Our vendor management practice engineers a structured portfolio view, tiering suppliers by strategic criticality, negotiating master agreements, and operating performance scorecards that keep the portfolio honest.',
  strategicImportance:
    'Vendor relationships are the dark matter of enterprise IT — invisible until they fail. Unmanaged vendor portfolios become systemic risk, hidden cost, and compliance exposure. A disciplined vendor management function turns the portfolio into a source of competitive capability.',
  methodology: [
    { title: 'Supplier Tiering', desc: 'Strategic classification of every supplier by criticality, spend, risk, and differentiation.' },
    { title: 'Contract & Commercial Optimisation', desc: 'Master agreement architecture, commercial renegotiation, and SLA codification.' },
    { title: 'Performance Governance', desc: 'Quarterly supplier scorecards, business reviews, and escalation pathways.' },
    { title: 'Third-Party Risk Management', desc: 'Continuous cyber, financial, and operational risk monitoring across the supplier portfolio.' }
  ],
  frameworks: ['Kraljic Portfolio Matrix', 'COBIT Vendor Management', 'ISO 27036 Supplier Relationships', 'TPRM Frameworks'],
  deliverables: ['Supplier Tiering Matrix', 'Master Agreement Architecture', 'Quarterly Scorecard Programme', 'TPRM Platform Deployment', 'Vendor Governance Playbook'],
  outcomes: [
    { value: '20%', label: 'Commercial Savings' },
    { value: '100%', label: 'Tiered Coverage' },
    { value: 'Continuous', label: 'Risk Monitoring' }
  ],
  icon: Users
});

// ============================================================
// CLOUD CAPABILITIES
// ============================================================

register(['Hybrid Cloud Orchestration'], {
  title: 'Hybrid Cloud Orchestration',
  tagline: 'Unified Governance Across Private, Public, and Sovereign Cloud Estates',
  description:
    'Most enterprises operate a hybrid reality — private data centres, multiple public clouds, and increasingly sovereign regional clouds. We engineer a unified control plane that governs workload placement, identity, network, and compliance across the full estate without forcing operational teams to learn every provider\'s idiosyncrasies.',
  strategicImportance:
    'A fragmented hybrid cloud is worse than a single cloud — it multiplies operational surface area without multiplying capability. Orchestration is the discipline that converts multi-cloud optionality into institutional advantage rather than institutional tax.',
  methodology: [
    { title: 'Workload Placement Strategy', desc: 'Policy-driven placement decisions based on latency, sovereignty, cost, and capability fit.' },
    { title: 'Unified Control Plane', desc: 'Single-pane-of-glass for identity, network policy, observability, and compliance across all providers.' },
    { title: 'Policy-as-Code Guardrails', desc: 'Preventive and detective controls enforced through infrastructure-as-code in every environment.' },
    { title: 'Cross-Cloud Networking', desc: 'Software-defined networking, service mesh, and secure interconnect across providers.' }
  ],
  frameworks: ['Terraform & Pulumi', 'Open Policy Agent', 'Istio / Linkerd Service Mesh', 'Kubernetes Multi-Cluster', 'HashiCorp Stack'],
  deliverables: ['Workload Placement Policy', 'Unified Control Plane Deployment', 'Policy-as-Code Library', 'Cross-Cloud Network Design', 'Hybrid Observability Stack'],
  outcomes: [
    { value: 'Unified', label: 'Control Plane' },
    { value: '99.99%', label: 'Availability' },
    { value: 'Policy-Driven', label: 'Placement' }
  ],
  icon: Cloud
});

register(['Cloud Native Development'], {
  title: 'Cloud Native Development',
  tagline: 'Microservices, Containers, and Event-Driven Platforms Born in the Cloud',
  description:
    'Cloud-native development is the engineering discipline that produces applications designed for elasticity, resilience, and continuous evolution from the first line of code. We deliver platforms built on containers, microservices, event streaming, and managed services — ready to scale from hundreds to millions of users without architectural rework.',
  strategicImportance:
    'Lift-and-shift migrations put legacy workloads in the cloud; they do not produce cloud-native outcomes. Only cloud-native architectures deliver the elasticity, deployment cadence, and operational economics that make cloud investment worth the cost. This is the difference between renting servers and operating a platform.',
  methodology: [
    { title: 'Domain-Driven Decomposition', desc: 'Bounded contexts and service boundaries aligned to business domains rather than technical layers.' },
    { title: 'Containerisation & Orchestration', desc: 'Kubernetes-based platforms with automated scaling, self-healing, and progressive delivery.' },
    { title: 'Event-Driven Architecture', desc: 'Kafka, Kinesis, or Pub/Sub based event backbones that decouple services and enable real-time experiences.' },
    { title: 'Platform Engineering', desc: 'Internal developer platforms that give engineering teams paved paths to production.' }
  ],
  frameworks: ['Kubernetes & Helm', 'Istio Service Mesh', 'Kafka / Pulsar', 'Backstage Developer Portal', 'CNCF Stack'],
  deliverables: ['Cloud-Native Reference Architecture', 'Kubernetes Platform Deployment', 'Event Backbone', 'Developer Platform (Backstage)', 'Progressive Delivery Pipelines'],
  outcomes: [
    { value: '10x', label: 'Deployment Frequency' },
    { value: 'Elastic', label: 'Horizontal Scale' },
    { value: 'Minutes', label: 'To Recover' }
  ],
  icon: Cpu
});

register(['DevSecOps Automation'], {
  title: 'DevSecOps Automation',
  tagline: 'Security Woven Into Every Commit, Build, and Deploy',
  description:
    'DevSecOps is the institutional practice of integrating security controls into the software delivery pipeline so every commit is scanned, every build is verified, and every deploy is attested. We engineer pipelines that ship fast and ship safe — without forcing engineers to choose between the two.',
  strategicImportance:
    'Security added at the end of delivery becomes a bottleneck or an illusion — usually both. Shift-left security eliminates the false trade-off between speed and safety: vulnerabilities are caught at the cheapest stage to fix, and security becomes a property of the pipeline rather than a human checkpoint.',
  methodology: [
    { title: 'Secure Supply Chain', desc: 'SBOM generation, signed artifacts, and provenance attestation from code to production.' },
    { title: 'Policy-as-Code', desc: 'Security policies codified in OPA/Rego and enforced at every pipeline stage.' },
    { title: 'Continuous Scanning', desc: 'SAST, DAST, SCA, IaC scanning, and container image scanning with risk-based prioritisation.' },
    { title: 'Runtime Protection', desc: 'eBPF-based runtime observability, Kubernetes admission controls, and anomaly detection.' }
  ],
  frameworks: ['SLSA (Supply-chain Levels for Software Artifacts)', 'OPA/Rego Policy', 'Snyk / Prisma / Wiz', 'Sigstore & Cosign', 'NIST SSDF'],
  deliverables: ['Secure Pipeline Architecture', 'SBOM & Provenance System', 'Policy-as-Code Library', 'Runtime Security Stack', 'Compliance Attestation Reports'],
  outcomes: [
    { value: '10x', label: 'Faster Remediation' },
    { value: 'Every', label: 'Commit Scanned' },
    { value: 'Signed', label: 'Supply Chain' }
  ],
  icon: Shield
});

register(['Mainframe Modernization'], {
  title: 'Mainframe Modernization',
  tagline: 'Unlocking Decades of Legacy Value Without Business Disruption',
  description:
    'Mainframe systems run the world\'s most mission-critical workloads — and most of them were architected before the public internet existed. Our mainframe modernisation practice refactors, replatforms, and incrementally replaces mainframe workloads using a strangler-fig pattern that eliminates risk and protects operational continuity.',
  strategicImportance:
    'Mainframe technical debt is the most expensive debt an enterprise carries — rising licensing costs, disappearing skills, and innovation ceiling. Modernisation is not optional; the only question is whether it is done on the institution\'s timeline or on the vendor\'s.',
  methodology: [
    { title: 'Portfolio Assessment', desc: 'Complete inventory of mainframe workloads classified by modernisation strategy (retire, retain, refactor, replace, replatform).' },
    { title: 'Domain Decomposition', desc: 'Decomposition of mainframe monoliths into bounded domains suitable for incremental replacement.' },
    { title: 'Strangler-Fig Migration', desc: 'Progressive replacement via API façades, data synchronisation, and phased traffic shifting.' },
    { title: 'Data & Skills Bridging', desc: 'Real-time data replication, COBOL-to-Java/Go translation, and knowledge-transfer programmes.' }
  ],
  frameworks: ['Strangler Fig Pattern', 'Code Analysis Tools (Micro Focus, AWS M2)', 'CDC Replication (Qlik, Attunity)', 'Event Sourcing', 'API Façade Pattern'],
  deliverables: ['Mainframe Portfolio Assessment', 'Modernisation Roadmap', 'Strangler Migration Playbook', 'Target-State Platform', 'Legacy Decommissioning Plan'],
  outcomes: [
    { value: '60%', label: 'TCO Reduction' },
    { value: 'Zero', label: 'Business Disruption' },
    { value: 'Phased', label: 'De-risked Exit' }
  ],
  icon: Server
});

register(['Edge Computing'], {
  title: 'Edge Computing',
  tagline: 'Compute at the Point of Value, Not at the Point of Convenience',
  description:
    'Edge computing processes data close to where it is generated — in factories, retail locations, vehicles, and devices — eliminating the latency and bandwidth cost of round-tripping to the cloud. We design edge architectures that balance local autonomy with central governance.',
  strategicImportance:
    'Real-time experiences, industrial IoT, and autonomous systems cannot tolerate the latency of cloud round-trips. Edge computing is the architectural shift that makes these experiences economically viable at scale — and the enterprises that master it will command the next generation of connected product categories.',
  methodology: [
    { title: 'Edge Topology Design', desc: 'Placement strategy for compute, storage, and inference across regional, metro, and on-premise tiers.' },
    { title: 'Edge Platform Engineering', desc: 'Kubernetes-at-the-edge, edge-native runtime environments, and offline-first data patterns.' },
    { title: 'Central-Edge Orchestration', desc: 'GitOps-based policy, configuration, and workload distribution from central control planes.' },
    { title: 'Edge Observability & Security', desc: 'Distributed telemetry, zero-trust edge networking, and hardware attestation.' }
  ],
  frameworks: ['KubeEdge & K3s', 'AWS Wavelength / Azure Edge Zones', 'Cloudflare Workers', 'GitOps with Argo/Flux', 'Open Horizon'],
  deliverables: ['Edge Topology Design', 'Edge Runtime Platform', 'GitOps Orchestration', 'Edge Security Architecture', 'Edge Observability Stack'],
  outcomes: [
    { value: '<10ms', label: 'Local Latency' },
    { value: '70%', label: 'Bandwidth Savings' },
    { value: 'Offline', label: 'First Operation' }
  ],
  icon: Globe
});

// ============================================================
// CYBERSECURITY CAPABILITIES
// ============================================================

register(['Identity & Access Management (IAM)', 'Identity Access Management', 'Identity and Access Management IAM'], {
  title: 'Identity & Access Management (IAM)',
  tagline: 'Zero-Trust Foundation Where Identity Is The New Perimeter',
  description:
    'Identity is the one control plane that touches every user, every device, every workload, and every data resource. We engineer IAM programmes that unify workforce, customer, and machine identity under a single policy fabric — enabling passwordless authentication, conditional access, just-in-time privilege, and continuous verification.',
  strategicImportance:
    'The modern attack path begins, 80% of the time, with compromised identity. Until your identity plane can express, enforce, and audit fine-grained policy on every authentication event, every other security investment is mitigating symptoms.',
  methodology: [
    { title: 'Identity Fabric Design', desc: 'Unified architecture covering workforce, customer, partner, and machine identity.' },
    { title: 'Passwordless & MFA Deployment', desc: 'FIDO2/WebAuthn rollouts, risk-based step-up, and phishing-resistant authentication.' },
    { title: 'Privileged Access Management', desc: 'Just-in-time elevation, session recording, and secret management for sovereign administrative access.' },
    { title: 'Identity Governance', desc: 'Access certification, separation of duties, and continuous access reviews.' }
  ],
  frameworks: ['NIST SP 800-63', 'SCIM & SAML/OIDC', 'FIDO2 / WebAuthn', 'CAEP (Continuous Access Evaluation)', 'Zero Standing Privilege'],
  deliverables: ['Identity Fabric Architecture', 'Passwordless Rollout', 'PAM Deployment', 'Access Governance Programme', 'Identity Risk Dashboard'],
  outcomes: [
    { value: '100%', label: 'MFA Coverage' },
    { value: 'Zero', label: 'Standing Privilege' },
    { value: 'Continuous', label: 'Access Evaluation' }
  ],
  icon: Lock
});

register(['Penetration Testing & Red Teaming', 'Penetration Testing', 'Red Teaming'], {
  title: 'Penetration Testing & Red Teaming',
  tagline: 'Adversarial Validation Before The Adversary Arrives',
  description:
    'Our offensive security team operates as a live adversary — combining external reconnaissance, social engineering, supply-chain compromise, and physical access attempts to test whether your defences perform under pressure. The outputs are exploit-chain dossiers, not scanner reports.',
  strategicImportance:
    'Automated scanners catch compliance-level weaknesses; motivated adversaries exploit assumptions your defenders never questioned. Red teaming is the only discipline that validates your security posture against the way real attackers actually operate.',
  methodology: [
    { title: 'Threat-Informed Planning', desc: 'Engagements scoped against the specific threat-actor profiles relevant to your industry and asset class.' },
    { title: 'Full-Scope Adversarial Simulation', desc: 'External, internal, social engineering, supply chain, and (where authorised) physical vectors.' },
    { title: 'Purple Team Collaboration', desc: 'Real-time collaboration with defenders to validate and improve detection coverage.' },
    { title: 'Board-Level Reporting', desc: 'Executive-grade reporting that translates technical findings into business risk language.' }
  ],
  frameworks: ['MITRE ATT&CK', 'TIBER-EU', 'CBEST', 'PTES', 'OWASP ASVS'],
  deliverables: ['Engagement Scoping Document', 'Exploit-Chain Dossier', 'Purple Team Findings', 'Prioritised Remediation Backlog', 'Executive Threat Briefing'],
  outcomes: [
    { value: 'Full-Scope', label: 'Adversarial Simulation' },
    { value: 'Board', label: 'Grade Reporting' },
    { value: 'Purple', label: 'Team Handover' }
  ],
  icon: ShieldHalf
});

register(['Cloud Security Posture Management', 'Cloud Security Posture'], {
  title: 'Cloud Security Posture Management',
  tagline: 'Continuous Visibility and Control Across Dynamic Cloud Estates',
  description:
    'Cloud estates change by the minute — instances spin up, identities are created, policies mutate. CSPM is the discipline that maintains continuous visibility into configuration, posture, and risk across every cloud account, surfacing misconfigurations and policy drift before adversaries exploit them.',
  strategicImportance:
    'The majority of cloud breaches originate from misconfigurations, not sophisticated exploits. Without CSPM, security teams are permanently reactive — finding issues only when something goes wrong. CSPM turns reactive firefighting into proactive governance.',
  methodology: [
    { title: 'Multi-Cloud Inventory', desc: 'Agentless discovery across AWS, Azure, GCP, and Kubernetes — every asset, identity, and network flow.' },
    { title: 'Continuous Posture Monitoring', desc: 'Real-time evaluation against CIS benchmarks, internal policy, and regulatory frameworks.' },
    { title: 'Risk Prioritisation', desc: 'Exploitability-weighted risk scoring that focuses remediation on what actually matters.' },
    { title: 'Automated Remediation', desc: 'Guardrail enforcement and auto-remediation for the highest-frequency misconfiguration classes.' }
  ],
  frameworks: ['CIS Benchmarks', 'CSA Cloud Controls Matrix', 'AWS Security Hub / Azure Defender / GCP SCC', 'CNAPP Platforms (Wiz, Prisma, Orca)'],
  deliverables: ['Multi-Cloud Posture Assessment', 'Continuous Monitoring Deployment', 'Risk-Prioritised Backlog', 'Auto-Remediation Runbooks', 'Compliance Dashboards'],
  outcomes: [
    { value: 'Continuous', label: 'Posture Monitoring' },
    { value: '<15m', label: 'Drift Detection' },
    { value: 'Automated', label: 'Guardrails' }
  ],
  icon: ScanEye
});

register(['Governance, Risk & Compliance (GRC)', 'Governance Risk Compliance GRC', 'GRC'], {
  title: 'Governance, Risk & Compliance (GRC)',
  tagline: 'Unified Assurance Across Regulation, Risk, and Institutional Control',
  description:
    'Modern enterprises navigate dozens of overlapping regulatory regimes. Our GRC practice unifies policy, risk, control, and evidence management into a single operating model — so that controls are implemented once, evidenced once, and continuously assessed against every applicable framework.',
  strategicImportance:
    'Fragmented compliance is inefficient compliance. Each regulator asks for the same control from a different angle; without a unified GRC spine, the organisation pays the compliance cost many times over. Unified GRC converts compliance from a cost centre into a source of executive confidence.',
  methodology: [
    { title: 'Framework Harmonisation', desc: 'Mapping SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR, and NIST controls to a single unified control framework.' },
    { title: 'Continuous Control Monitoring', desc: 'Automated evidence collection and control testing — replacing annual audits with daily assurance.' },
    { title: 'Enterprise Risk Management', desc: 'Quantitative risk register with FAIR-based loss modelling and board-level reporting.' },
    { title: 'Regulator-Ready Reporting', desc: 'Executive dashboards and audit packages that anticipate every regulator question.' }
  ],
  frameworks: ['Unified Control Framework', 'FAIR Risk Quantification', 'NIST CSF / ISO 27001 / SOC 2', 'OneTrust / Drata / Vanta', 'COSO ERM'],
  deliverables: ['Unified Control Framework', 'Continuous Monitoring Platform', 'Enterprise Risk Register', 'Regulator Audit Package', 'Board Risk Dashboard'],
  outcomes: [
    { value: '100%', label: 'Framework Coverage' },
    { value: '60%', label: 'Audit Effort Reduction' },
    { value: 'Daily', label: 'Control Assurance' }
  ],
  icon: FileCheck
});

register(['Data Privacy & Protection', 'Data Privacy Sovereign Protection', 'Data Privacy'], {
  title: 'Data Privacy & Sovereign Protection',
  tagline: 'Privacy Engineered From Schema to Experience',
  description:
    'Modern data protection is not a policy document — it is an engineered system spanning data classification, encryption, access governance, residency enforcement, and user-rights automation. We build privacy programmes that comply with GDPR, CCPA, DPDPA, and emerging sovereignty regimes as engineered defaults rather than bolt-on afterthoughts.',
  strategicImportance:
    'Privacy regulation is converging globally and consequences are escalating. Beyond fines, the real cost of privacy failure is customer trust — once eroded, the most expensive asset to rebuild. Privacy-by-design is now an institutional competence, not a legal formality.',
  methodology: [
    { title: 'Data Classification & Discovery', desc: 'Automated discovery and classification of personal and sensitive data across structured and unstructured stores.' },
    { title: 'Privacy Engineering', desc: 'Encryption-at-rest, in-transit, in-use; pseudonymisation; differential privacy; and data-minimisation architectures.' },
    { title: 'Consent & Rights Automation', desc: 'Consent capture, preference management, and automated fulfilment of access, portability, and erasure requests.' },
    { title: 'Cross-Border & Sovereign Controls', desc: 'Data residency enforcement, transfer impact assessments, and sovereign cloud deployment patterns.' }
  ],
  frameworks: ['GDPR / CCPA / DPDPA', 'ISO 27701 Privacy Management', 'NIST Privacy Framework', 'OneTrust / Securiti / BigID'],
  deliverables: ['Data Classification Platform', 'Privacy Engineering Standards', 'Consent Management Platform', 'DSAR Automation', 'Sovereignty Compliance Architecture'],
  outcomes: [
    { value: '100%', label: 'Data Classification' },
    { value: 'Automated', label: 'DSAR Fulfilment' },
    { value: 'By Design', label: 'Privacy' }
  ],
  icon: Shield
});

// ============================================================
// DIGITAL EXPERIENCE CAPABILITIES
// ============================================================

register(['UX/UI Design Strategy', 'UX UI Design Strategy'], {
  title: 'UX/UI Design Strategy',
  tagline: 'Experience as an Institutional Asset — Engineered for Authority and Conversion',
  description:
    'UX/UI design strategy is where brand, business, and behaviour converge into a tangible, testable digital product. We build experience strategies anchored in evidence — grounded in ethnographic research, expressed through scalable design systems, and validated through continuous experimentation. Every interface we ship is an instrument that earns attention, converts intent, and compounds institutional authority.',
  strategicImportance:
    'In an attention-scarce market, mediocre experiences are indistinguishable from absence. Design strategy is no longer a styling exercise — it is the discipline that determines which digital products users choose to return to and which competitors they ignore. The gap between the best and the adequate experience is the gap between market leadership and market invisibility.',
  methodology: [
    { title: 'Experience Strategy', desc: 'Positioning, experience principles, and product-experience architecture aligned to business strategy.' },
    { title: 'Design System Engineering', desc: 'Modular component libraries, design tokens, and accessibility primitives codified for institutional reuse.' },
    { title: 'Interaction & Motion Design', desc: 'Pixel-perfect interface design with motion grammar that communicates system state and brand intent.' },
    { title: 'Validation & Experimentation', desc: 'Moderated usability, unmoderated benchmarks, and A/B experimentation before and after release.' }
  ],
  frameworks: ['Atomic Design', 'Design Tokens W3C Spec', 'WCAG 2.1 AA', 'Jobs-to-Be-Done', 'Figma Enterprise + Storybook'],
  deliverables: ['Experience Strategy Document', 'Design System & Component Library', 'Hi-Fi Interactive Prototypes', 'Usability Validation Reports', 'Experimentation Platform'],
  signatureFeatures: [
    { title: 'Evidence-Anchored Design', desc: 'Every design decision traces back to documented user research.' },
    { title: 'Accessibility by Default', desc: 'WCAG AA engineered into the token layer — not added later.' },
    { title: 'Design-System Economics', desc: 'A system that ships faster every quarter rather than slower.' }
  ],
  outcomes: [
    { value: '3.2x', label: 'Conversion Lift' },
    { value: '60%', label: 'Engagement Increase' },
    { value: '95%', label: 'User Satisfaction' }
  ],
  icon: Palette
});

register(['Mobile App Engineering'], {
  title: 'Mobile App Engineering',
  tagline: 'High-Performance Native and Cross-Platform Mobile at Global Scale',
  description:
    'Mobile is the most personal digital surface — and the least forgiving. We engineer native iOS, native Android, and cross-platform React Native applications that meet the performance, offline-resilience, and accessibility standards that sovereign mobile experiences demand.',
  strategicImportance:
    'The mobile screen is where brands win or lose attention daily. A sluggish, unreliable, or awkwardly designed mobile experience erodes brand equity in milliseconds — while a premium mobile product becomes a daily touchpoint that compounds loyalty.',
  methodology: [
    { title: 'Platform Architecture', desc: 'Native-first, cross-platform, or hybrid architectures selected against performance, team, and maintenance economics.' },
    { title: 'Offline-First Engineering', desc: 'Sync-aware data models, local persistence, and conflict resolution for resilient mobile experiences.' },
    { title: 'Performance Discipline', desc: 'Startup time, frame-rate, memory, and battery profiling as first-class engineering concerns.' },
    { title: 'Release & Experimentation', desc: 'Phased rollouts, feature flags, and store-release orchestration that de-risk every update.' }
  ],
  frameworks: ['Swift / SwiftUI', 'Kotlin / Jetpack Compose', 'React Native & Expo', 'Firebase & App Store Connect', 'Detox / XCTest / Espresso'],
  deliverables: ['Production iOS/Android Apps', 'Offline-First Data Architecture', 'Release & Experimentation Pipeline', 'Performance Benchmarks', 'App Store Optimisation Playbook'],
  outcomes: [
    { value: '<1s', label: 'Cold Start' },
    { value: '4.6+', label: 'Store Rating' },
    { value: 'Offline', label: 'First Capability' }
  ],
  icon: Smartphone
});

register(['Customer Data Platforms (CDP)', 'Customer Data Platforms'], {
  title: 'Customer Data Platforms (CDP)',
  tagline: 'Unified Identity, Real-Time Profiles, and Institutional Personalisation',
  description:
    'A CDP is the source of truth for the customer — unifying identity across channels, stitching behavioural events into real-time profiles, and activating those profiles into personalisation, segmentation, and revenue-generating experiences across every touchpoint.',
  strategicImportance:
    'Fragmented customer data is the single largest constraint on modern marketing and experience investments. Without a CDP, personalisation becomes approximation, attribution becomes guesswork, and every downstream channel is handicapped by identity ambiguity.',
  methodology: [
    { title: 'Identity Resolution', desc: 'Deterministic and probabilistic identity stitching across web, app, CRM, and offline sources.' },
    { title: 'Event Architecture', desc: 'Canonical event schema, tracking governance, and real-time ingestion pipelines.' },
    { title: 'Audience & Segmentation Engineering', desc: 'Real-time audience computation with sub-second activation to downstream destinations.' },
    { title: 'Privacy & Consent Integration', desc: 'Consent-aware data flows, purpose limitation, and automated rights fulfilment.' }
  ],
  frameworks: ['Segment / mParticle / RudderStack', 'Treasure Data / ActionIQ', 'Event Schema Governance', 'Identity Graph Architecture', 'Composable CDP Patterns'],
  deliverables: ['CDP Architecture & Deployment', 'Identity Resolution Engine', 'Canonical Event Schema', 'Audience Activation Playbook', 'Privacy & Consent Integration'],
  outcomes: [
    { value: 'Unified', label: 'Customer View' },
    { value: 'Real-Time', label: 'Activation' },
    { value: 'Consent', label: 'Aware' }
  ],
  icon: Database
});

register(['E-commerce Optimization', 'Ecommerce Optimization'], {
  title: 'E-commerce Optimization',
  tagline: 'Discovery, Conversion, and Retention Engineering at Institutional Scale',
  description:
    'E-commerce optimisation is the continuous discipline of maximising revenue per visitor across discovery, decision, and checkout. We engineer product discovery, merchandising, recommendation, and checkout systems with the rigour of financial trading platforms.',
  strategicImportance:
    'The difference between a 2% and a 4% conversion rate is the difference between a business that grows and a business that stalls. E-commerce optimisation is the compounding flywheel that separates category leaders from also-rans.',
  methodology: [
    { title: 'Funnel Forensics', desc: 'Cohort-based funnel analysis identifying the specific steps where intent converts to revenue or drops.' },
    { title: 'Discovery & Merchandising', desc: 'Search, faceted navigation, and recommendation engineering tuned for intent and margin.' },
    { title: 'Checkout Optimisation', desc: 'Form reduction, wallet integration, trust signalling, and friction elimination.' },
    { title: 'Retention & Lifetime Value', desc: 'Post-purchase onboarding, reorder automation, and loyalty architecture.' }
  ],
  frameworks: ['Shopify / commercetools / BigCommerce', 'Algolia / Searchspring', 'Klaviyo / Bloomreach', 'Nosto / Dynamic Yield', 'Google Optimize / VWO'],
  deliverables: ['Funnel Optimisation Audit', 'Search & Merchandising Engineering', 'Checkout Redesign', 'Retention Programme', 'Experimentation Backlog'],
  outcomes: [
    { value: '2-3x', label: 'Conversion Lift' },
    { value: '35%', label: 'AOV Growth' },
    { value: 'Compounding', label: 'LTV' }
  ],
  icon: ShoppingCart
});

register(['AR/VR Immersive Experiences', 'AR VR Immersive Experiences'], {
  title: 'AR/VR Immersive Experiences',
  tagline: 'Spatial Computing for Training, Commerce, and Experiential Brand',
  description:
    'Augmented and virtual reality experiences create new dimensions of engagement — enabling product visualisation, immersive training, and experiential brand moments that are impossible on 2D surfaces. We design and engineer AR/VR experiences for WebXR, Apple Vision, Meta Quest, and mobile AR platforms.',
  strategicImportance:
    'Spatial computing is moving from novelty to daily tool. Early movers are establishing the interaction patterns, content libraries, and production pipelines that will define the next decade of immersive commerce, training, and entertainment.',
  methodology: [
    { title: 'Experience Strategy', desc: 'Use-case selection, platform choice, and interaction architecture for spatial contexts.' },
    { title: 'Content Production', desc: '3D asset pipelines, photogrammetry, and procedural content generation.' },
    { title: 'Spatial Engineering', desc: 'Unity / Unreal / WebXR engineering with anchor, occlusion, and physics fidelity.' },
    { title: 'Distribution & Analytics', desc: 'Multi-platform distribution, spatial analytics, and progressive-enhancement delivery for non-AR devices.' }
  ],
  frameworks: ['Unity & Unreal Engine', 'WebXR & Three.js', 'ARKit / ARCore', 'Apple Vision / Meta Quest SDKs', 'USDZ & glTF'],
  deliverables: ['Immersive Experience Strategy', 'Production 3D Asset Library', 'Multi-Platform AR/VR Application', 'Spatial Analytics Dashboard', 'Progressive Enhancement Fallback'],
  outcomes: [
    { value: '5x', label: 'Engagement Duration' },
    { value: 'Multi', label: 'Platform Delivery' },
    { value: 'Spatial', label: 'Analytics' }
  ],
  icon: Eye
});

// ============================================================
// DIGITAL MARKETING CAPABILITIES
// ============================================================

register(['Commercial Video & Photo Production', 'Commercial Video Photo Production'], {
  title: 'Commercial Video & Photo Production',
  tagline: 'Cinematic Storytelling That Elevates Brand and Converts Viewers',
  description:
    'Premium commercial content is a proxy for brand authority. We produce cinema-grade commercial assets — brand films, product shoots, testimonial productions, and performance-marketing creative — optimised for the screens, platforms, and contexts where your audience actually encounters your brand.',
  strategicImportance:
    'Content quality is the most visible signal of institutional substance. Low-production creative erodes brand equity faster than any strategic misstep — while premium content elevates perceived value, category authority, and willingness-to-pay across every touchpoint.',
  methodology: [
    { title: 'Creative Strategy', desc: 'Storyboarding, visual styling, and narrative architecture aligned to brand and campaign objectives.' },
    { title: 'Production Execution', desc: 'Cinema-grade equipment, expert crews, and tightly managed shoot logistics across global locations.' },
    { title: 'Post-Production', desc: 'Editing, colour grading, sound design, and VFX to deliver broadcast-ready assets.' },
    { title: 'Multi-Format Delivery', desc: 'Platform-specific cuts from hero film to performance-marketing shorts and social-native assets.' }
  ],
  frameworks: ['Cinema-Grade Production', 'RED / ARRI / Sony Camera Systems', 'DaVinci Resolve Colour', 'Multi-Cut Delivery Architecture', 'Performance-Creative Testing'],
  deliverables: ['Creative Strategy Deck', 'Hero Brand Film', 'Product & Lifestyle Photography', 'Performance Creative Library', 'Multi-Format Asset Delivery'],
  outcomes: [
    { value: '3x', label: 'Engagement Rate' },
    { value: 'Broadcast', label: 'Quality' },
    { value: 'Multi-Channel', label: 'Delivery' }
  ],
  icon: Video
});

register(['Website Development & SEO', 'Website Development SEO'], {
  title: 'Website Development & SEO',
  tagline: 'Performance-Engineered Web Experiences That Dominate Search',
  description:
    'We build web experiences engineered for dual dominance — sub-second performance that wins Core Web Vitals and conversion-optimised flows that turn search visitors into qualified pipeline. Every build integrates technical SEO, content architecture, and analytics instrumentation as non-negotiable defaults.',
  strategicImportance:
    'A website is the most visited owned asset most institutions possess. A slow, poorly architected, or search-invisible site erodes marketing investment at every channel. Performance and SEO are no longer specialist concerns — they are the baseline of web credibility.',
  methodology: [
    { title: 'Platform & Stack Selection', desc: 'Next.js, Astro, or headless CMS architectures tuned for speed, SEO, and editorial control.' },
    { title: 'Technical SEO Engineering', desc: 'Crawlability, schema, internal link architecture, and Core Web Vitals performance budgets.' },
    { title: 'Content Strategy Integration', desc: 'Topic architecture, editorial workflow, and on-page optimisation integrated into the CMS.' },
    { title: 'Conversion Rate Engineering', desc: 'A/B testing, heatmap analysis, and funnel optimisation built into the release cadence.' }
  ],
  frameworks: ['Next.js / Astro / Remix', 'Headless CMS (Sanity, Contentful)', 'Core Web Vitals', 'Schema.org / JSON-LD', 'CRO Testing Platforms'],
  deliverables: ['Production Website', 'Technical SEO Architecture', 'Content Editorial Workflow', 'CWV Performance Baseline', 'CRO Experimentation Platform'],
  outcomes: [
    { value: '<1s', label: 'Load Time' },
    { value: '100%', label: 'CWV Green' },
    { value: '3x', label: 'Conversion Uplift' }
  ],
  icon: Globe
});

register(['Social Media Handling'], {
  title: 'Social Media Handling',
  tagline: 'Institutional Community Building That Compounds Brand Authority',
  description:
    'Strategic social media management across LinkedIn, Instagram, X, YouTube, TikTok, and Facebook — engineered to build engaged communities, amplify brand authority, and convert attention into pipeline. Content calendars, creator partnerships, and community SLAs operate under sovereign institutional governance.',
  strategicImportance:
    'Social is no longer a standalone marketing channel — it is the frontline of brand perception, customer service, reputation management, and talent attraction. Unmanaged, it becomes reputational exposure; engineered, it becomes compounding institutional capital.',
  methodology: [
    { title: 'Platform Strategy', desc: 'Focused excellence on 3-4 priority platforms rather than diluted presence across all.' },
    { title: 'Content Engineering', desc: 'Platform-native content calendars built around pillars, moments, and always-on storytelling.' },
    { title: 'Community Operations', desc: '7-day coverage with response SLAs, moderation playbooks, and escalation protocols.' },
    { title: 'Measurement & Amplification', desc: 'Brand-health, engagement, and pipeline dashboards with paid-amplification integration.' }
  ],
  frameworks: ['Sprout Social / Hootsuite', 'Platform-Native Best Practices', 'Community SLAs', 'Brandwatch Measurement', 'Paid Amplification Patterns'],
  deliverables: ['Social Strategy Document', 'Content Calendar & Production', 'Community Management Operations', 'Performance Dashboard', 'Amplification Playbook'],
  outcomes: [
    { value: '400%', label: 'Engagement Growth' },
    { value: '<30m', label: 'Response Time' },
    { value: '7-day', label: 'Coverage' }
  ],
  icon: Share2
});

register(['Lead Generation & Paid Ads', 'Lead Generation Paid Advertising', 'Lead Generation & Paid Advertising'], {
  title: 'Lead Generation & Paid Advertising',
  tagline: 'Precision Media That Generates Qualified Pipeline Predictably',
  description:
    'We orchestrate paid media programmes across Google, Meta, LinkedIn, programmatic display, and connected TV with value-based bidding, first-party audience activation, and dynamic creative that generates qualified leads at falling cost and rising quality.',
  strategicImportance:
    'The paid media landscape has fragmented across dozens of platforms, attribution models, and bidding strategies. Without institutional-grade orchestration, spend drifts toward last-click convenience and away from incrementality. Disciplined lead generation is what separates pipeline from impressions.',
  methodology: [
    { title: 'Audience Architecture', desc: 'First-party audience activation, lookalike expansion, and intent-based targeting.' },
    { title: 'Channel Orchestration', desc: 'Full-funnel deployment across search, social, display, and CTV with cross-channel budget governance.' },
    { title: 'Creative Testing Programme', desc: 'Dynamic creative optimisation with structured testing velocity.' },
    { title: 'Attribution & Optimisation', desc: 'Multi-touch attribution, incrementality testing, and value-based bidding tuned for qualified pipeline.' }
  ],
  frameworks: ['Google Ads & Analytics 4', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'DV360 & The Trade Desk', 'Server-Side Conversions API'],
  deliverables: ['Media Plan & Audience Architecture', 'Campaign Deployment', 'Creative Testing Library', 'Attribution Platform', 'Weekly Optimisation Reports'],
  outcomes: [
    { value: '5.2x', label: 'ROAS' },
    { value: '65%', label: 'CPL Reduction' },
    { value: '3M+', label: 'Leads Generated' }
  ],
  icon: Megaphone
});

register(['Marketing Automation'], {
  title: 'Marketing Automation',
  tagline: 'Personalised Engagement Orchestrated at Institutional Scale',
  description:
    'Marketing automation is the nervous system of the modern B2B and B2C marketing function — connecting campaign, content, CRM, and commerce into orchestrated journeys that nurture, qualify, and convert at institutional cadence.',
  strategicImportance:
    'Manual marketing does not scale past a few thousand prospects. Beyond that threshold, every unautomated step becomes a point of inconsistency, delay, and leakage. Automation is the infrastructure that makes personalisation and pipeline velocity economically viable.',
  methodology: [
    { title: 'Journey Architecture', desc: 'Lifecycle mapping, journey scoring, and handoff protocols between marketing, sales, and customer success.' },
    { title: 'Stack Engineering', desc: 'Platform selection, integration architecture, and data-flow design across CRM, CDP, and engagement platforms.' },
    { title: 'Content & Trigger Design', desc: 'Behavioural trigger libraries, dynamic content assembly, and personalisation rules.' },
    { title: 'Governance & Continuous Optimisation', desc: 'Program audits, deliverability management, and continuous uplift testing.' }
  ],
  frameworks: ['HubSpot / Marketo / Pardot', 'Salesforce Marketing Cloud', 'Customer.io / Iterable', 'Behavioural Trigger Libraries', 'Deliverability Best Practice'],
  deliverables: ['Journey Architecture', 'Platform Deployment', 'Trigger & Content Library', 'Integration Architecture', 'Optimisation Programme'],
  outcomes: [
    { value: '40%', label: 'Pipeline Acceleration' },
    { value: 'Automated', label: 'Qualification' },
    { value: 'Personalised', label: 'At Scale' }
  ],
  icon: Workflow
});

// ============================================================
// SEO CAPABILITIES
// ============================================================

register(['International SEO'], {
  title: 'International SEO',
  tagline: 'Search Sovereignty Across Every Language, Market, and Search Engine',
  description:
    'International SEO is the discipline of winning organic visibility across distinct markets, languages, and search engines — each with its own indexing behaviours, ranking signals, and user expectations. We architect hreflang, domain, and content strategies that establish permanent category presence in every priority geography.',
  strategicImportance:
    'Global brands with mono-market SEO strategies cede the majority of their addressable search demand to local competitors. International SEO is the discipline that converts global brand equity into local organic dominance.',
  methodology: [
    { title: 'Market Prioritisation', desc: 'Demand, competition, and revenue modelling across candidate geographies.' },
    { title: 'Domain & Hreflang Architecture', desc: 'ccTLD, subdirectory, or subdomain strategy with rigorous hreflang implementation.' },
    { title: 'Localisation & Cultural Adaptation', desc: 'Translation-plus-transcreation workflows that honour local search intent.' },
    { title: 'Market-Specific Optimisation', desc: 'Baidu, Yandex, Naver, and other non-Google search engine optimisation where relevant.' }
  ],
  frameworks: ['Hreflang Best Practice', 'ccTLD vs Subdir Strategy', 'Deepcrawl International Audit', 'Baidu / Yandex / Naver Optimisation', 'Transcreation Workflows'],
  deliverables: ['International SEO Strategy', 'Hreflang Implementation', 'Market Prioritisation Roadmap', 'Localised Content Programme', 'Non-Google Engine Optimisation'],
  outcomes: [
    { value: '50+', label: 'Markets Covered' },
    { value: 'Local', label: 'Authority' },
    { value: 'Multi-Engine', label: 'Visibility' }
  ],
  icon: MapPin
});

register(['Technical SEO & Core Web Vitals', 'Technical SEO'], {
  title: 'Technical SEO & Core Web Vitals',
  tagline: 'The Engineering Foundation of Sustainable Organic Growth',
  description:
    'Technical SEO is the engineering layer that determines whether search engines can efficiently crawl, render, and index your content — and whether users experience your site fast enough to justify ranking. We instrument crawl budget, render path, Core Web Vitals, and structured data with the rigour engineering teams reserve for production systems.',
  strategicImportance:
    'Content strategy without technical foundations is investment on sand. Crawl inefficiencies, render failures, and performance gaps silently erode the ceiling of your organic potential — usually invisibly, until a migration or algorithm update surfaces the debt.',
  methodology: [
    { title: 'Crawl & Render Audit', desc: 'Log-file analysis, JavaScript render analysis, and crawl-budget diagnostics.' },
    { title: 'Core Web Vitals Engineering', desc: 'LCP, INP, CLS optimisation tuned to real-user field data.' },
    { title: 'Structured Data & Schema', desc: 'JSON-LD schema rollout covering products, articles, events, and domain-specific entities.' },
    { title: 'Internal Link Graph Engineering', desc: 'Graph-theoretic internal linking to flow authority toward priority URLs.' }
  ],
  frameworks: ['Screaming Frog / Sitebulb', 'Log File Analysis', 'Lighthouse / CrUX', 'Schema.org / JSON-LD', 'Edge SEO via Cloudflare Workers'],
  deliverables: ['Technical SEO Audit', 'CWV Remediation Backlog', 'Schema Coverage Implementation', 'Internal Link Architecture', 'Monthly Technical Health Reports'],
  outcomes: [
    { value: '100%', label: 'CWV Green' },
    { value: 'Indexable', label: 'Render Path' },
    { value: 'Schema', label: 'Rich' }
  ],
  icon: Gauge
});

register(['Content Strategy & Clustering', 'Content Strategy clustering'], {
  title: 'Content Strategy & Clustering',
  tagline: 'Topical Authority Engineering For Permanent Category Ownership',
  description:
    'Content strategy is the architectural layer that determines whether your content compounds into category authority or dissipates into vanity. We design hub-and-spoke topic clusters, editorial pillars, and authority-building programmes that signal to both users and search engines that your brand is the canonical reference in your market.',
  strategicImportance:
    'One-off articles cannot establish authority. Topical authority is built architecturally — through structured clusters, entity depth, and editorial discipline. The brands that win category search do not produce more content; they produce better-architected content.',
  methodology: [
    { title: 'Topic & Entity Mapping', desc: 'Full-market topic modelling and entity-graph analysis to surface authority whitespace.' },
    { title: 'Hub-and-Spoke Architecture', desc: 'Pillar pages, cluster pages, and internal link architecture aligned to topic depth.' },
    { title: 'Editorial Production', desc: 'Expert-led content production with E-E-A-T signals, original research, and canonical formats.' },
    { title: 'Authority Signalling', desc: 'Digital PR, citations, and editorial placements that reinforce topical authority.' }
  ],
  frameworks: ['Pillar-Cluster Model', 'Entity SEO', 'Google E-E-A-T', 'Topic Modelling Tools', 'Digital PR Integration'],
  deliverables: ['Topic Architecture & Cluster Plan', 'Editorial Calendar', 'Pillar & Cluster Content', 'Digital PR Programme', 'Authority Measurement Dashboard'],
  outcomes: [
    { value: 'Category', label: 'Authority' },
    { value: '340%', label: 'Traffic Growth' },
    { value: '#1', label: 'Target Rankings' }
  ],
  icon: Search
});

register(['Migration SEO Support', 'Migration SEO'], {
  title: 'Migration SEO Support',
  tagline: 'Protecting Rankings and Traffic Through Every Platform, Domain, or Architecture Change',
  description:
    'Site migrations — platform replatforms, domain consolidations, redesigns, and re-architectures — are the single largest source of avoidable organic-traffic loss. Our migration SEO practice de-risks these events through disciplined planning, parallel-environment testing, and post-launch monitoring.',
  strategicImportance:
    'A mismanaged migration can erase years of SEO investment in days. Migration SEO is insurance, but it is insurance that pays for itself many times over by preventing losses that are often unrecoverable.',
  methodology: [
    { title: 'Pre-Migration Audit', desc: 'Baseline crawl, ranking snapshot, and critical-URL inventory.' },
    { title: 'Redirect Architecture', desc: '1:1 redirect mapping, canonical preservation, and legacy-URL handling.' },
    { title: 'Parallel Environment Validation', desc: 'Staging-environment crawl and pre-launch SEO QA.' },
    { title: 'Post-Launch Monitoring', desc: 'Real-time rank monitoring, crawl health, and rapid remediation during the first 30/60/90 days.' }
  ],
  frameworks: ['Migration SEO Checklist', 'Redirect Mapping Discipline', 'Staging QA Protocols', 'Post-Launch Monitoring Stack', 'Rollback Playbooks'],
  deliverables: ['Pre-Migration Baseline', 'Redirect Map', 'Staging QA Report', 'Launch-Day Protocol', 'Post-Launch Monitoring & Remediation'],
  outcomes: [
    { value: 'Zero', label: 'Traffic Loss' },
    { value: '100%', label: 'Redirect Coverage' },
    { value: '90-day', label: 'Monitoring' }
  ],
  icon: Repeat
});

register(['Programmatic SEO'], {
  title: 'Programmatic SEO',
  tagline: 'Long-Tail Capture at Industrial Scale Through Engineered Page Generation',
  description:
    'Programmatic SEO is the discipline of generating thousands — sometimes millions — of high-quality, intent-optimised pages from structured data sources. Done well, it captures long-tail demand that manual content production could never profitably reach. Done badly, it floods the index with low-value pages and triggers algorithmic penalties.',
  strategicImportance:
    '70-80% of search demand exists in the long tail — queries too specific for manual content but too valuable to ignore in aggregate. Programmatic SEO is the only cost-effective way to capture this demand at scale; institutional rigor is what separates valuable programmatic from algorithmic risk.',
  methodology: [
    { title: 'Data Source Architecture', desc: 'Canonical data modelling and quality governance for the sources that drive generated pages.' },
    { title: 'Template Engineering', desc: 'Content templates that produce genuinely useful pages, not thin scaffolding.' },
    { title: 'Indexation Governance', desc: 'Quality thresholds, noindex gates, and crawl-budget discipline to protect site authority.' },
    { title: 'Performance Monitoring', desc: 'Per-template performance analysis, content refresh cadences, and deprecation protocols.' }
  ],
  frameworks: ['Data-Driven Content Architecture', 'Template Quality Gates', 'Crawl Budget Governance', 'Automated Content QA', 'Programmatic Analytics'],
  deliverables: ['Data Source Architecture', 'Template Library', 'Automated Publishing Pipeline', 'Indexation Governance Rules', 'Per-Template Performance Dashboard'],
  outcomes: [
    { value: '10M+', label: 'Pages at Scale' },
    { value: 'Long-Tail', label: 'Capture' },
    { value: 'Automated', label: 'Quality Gates' }
  ],
  icon: Repeat
});

// ============================================================
// AI CAPABILITIES
// ============================================================

register(['Generative AI Solutions', 'Generative AI'], {
  title: 'Generative AI Solutions',
  tagline: 'Production-Grade LLM Systems That Compound Institutional Productivity',
  description:
    'We engineer generative AI systems that move beyond demo — moving prompts into production through retrieval architectures, evaluation harnesses, guardrails, and responsible-AI controls. Outcomes include content generation at scale, knowledge retrieval, code assistance, and autonomous agents tuned to specific institutional workflows.',
  strategicImportance:
    'Generative AI will reshape every knowledge-work domain over the next five years. The institutions that master production deployment — not just prompt experimentation — will compound productivity advantages that compound into structural market leadership.',
  methodology: [
    { title: 'Use-Case Prioritisation', desc: 'ROI-weighted selection of use cases where generative AI creates genuine institutional leverage.' },
    { title: 'Retrieval Architecture', desc: 'RAG pipelines, semantic indexing, and grounding strategies that reduce hallucination.' },
    { title: 'Evaluation & Guardrails', desc: 'Automated evaluation harnesses, red-teaming, and safety/toxicity controls.' },
    { title: 'Human-in-the-Loop Operations', desc: 'Review workflows, feedback capture, and continuous improvement loops.' }
  ],
  frameworks: ['LangChain / LlamaIndex / Semantic Kernel', 'Vector DBs (Pinecone, Weaviate, pgvector)', 'OpenAI / Anthropic / Bedrock', 'Ragas & Eval Harnesses', 'Responsible AI Controls'],
  deliverables: ['Use-Case Prioritisation', 'RAG Architecture & Deployment', 'Evaluation Harness', 'Guardrail Library', 'HITL Operations Playbook'],
  outcomes: [
    { value: '70%', label: 'Process Acceleration' },
    { value: 'Grounded', label: 'Retrieval' },
    { value: 'Responsible', label: 'by Design' }
  ],
  icon: Brain
});

register(['Predictive Analytics'], {
  title: 'Predictive Analytics',
  tagline: 'Forecasts, Propensity Scores, and Decision Intelligence at Institutional Scale',
  description:
    'Predictive analytics transforms historical data into operational foresight — forecasting demand, scoring propensity, segmenting customers, and prioritising operational decisions. We engineer predictive systems that move from model to production with the engineering rigour that enterprise deployment demands.',
  strategicImportance:
    'Every operational decision is implicitly a prediction — about customer behaviour, demand patterns, risk events, or resource needs. Predictive analytics makes those predictions explicit, testable, and accountable, replacing intuition with institutional decision intelligence.',
  methodology: [
    { title: 'Decision Mapping', desc: 'Identification of the specific operational decisions where better predictions unlock measurable value.' },
    { title: 'Feature Engineering', desc: 'Canonical feature stores, feature lineage, and signal curation at enterprise scale.' },
    { title: 'Model Development & Validation', desc: 'Baseline-to-advanced model comparison, fairness testing, and production-readiness evaluation.' },
    { title: 'Deployment & Monitoring', desc: 'Batch and real-time inference architectures with drift detection and retraining pipelines.' }
  ],
  frameworks: ['scikit-learn / XGBoost / LightGBM', 'PyTorch / TensorFlow', 'Feast Feature Store', 'MLflow / Kubeflow', 'Evidently Drift Monitoring'],
  deliverables: ['Decision Map', 'Feature Store', 'Production Models', 'Monitoring & Drift Platform', 'Retraining Pipelines'],
  outcomes: [
    { value: '95%+', label: 'Model Accuracy' },
    { value: 'Real-Time', label: 'Inference' },
    { value: 'Monitored', label: 'Drift' }
  ],
  icon: LineChart
});

register(['Robotic Process Automation (RPA)', 'Robotic Process Automation RPA'], {
  title: 'Robotic Process Automation (RPA)',
  tagline: 'A Digital Workforce That Amplifies Human Capacity',
  description:
    'RPA deploys software robots to execute repetitive, rules-based processes at machine speed and machine accuracy. We engineer RPA programmes that move beyond tactical automation into strategic intelligent-automation platforms — combining RPA with OCR, AI, and workflow orchestration for end-to-end process transformation.',
  strategicImportance:
    'Every hour your workforce spends on repetitive manual tasks is an hour unavailable for institutional-grade work. RPA is the leverage point that reallocates human attention from rote to reasoning — the single largest productivity lever most enterprises still hold uncashed.',
  methodology: [
    { title: 'Process Discovery', desc: 'Task-mining and process-mining to surface high-value automation candidates.' },
    { title: 'Intelligent Automation Architecture', desc: 'Combining RPA with OCR, NLP, and ML for end-to-end process automation.' },
    { title: 'CoE & Governance', desc: 'Automation centre-of-excellence with reusable components, monitoring, and change governance.' },
    { title: 'Workforce Integration', desc: 'Change management, training, and role redesign that turns automation into human amplification.' }
  ],
  frameworks: ['UiPath / Automation Anywhere / Blue Prism', 'Microsoft Power Automate', 'Celonis / Process Mining', 'OCR & Document AI', 'CoE Operating Models'],
  deliverables: ['Automation Discovery Report', 'Bot Library', 'CoE Charter & Operating Model', 'Change Management Programme', 'Automation Dashboard'],
  outcomes: [
    { value: '10x', label: 'Processing Speed' },
    { value: '45%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Digital Workforce' }
  ],
  icon: Cpu
});

register(['Natural Language Processing'], {
  title: 'Natural Language Processing',
  tagline: 'Machines That Understand, Generate, and Act On Language',
  description:
    'Natural language processing is the discipline of giving machines meaningful access to unstructured text and speech. We deploy NLP systems for document understanding, conversational interfaces, semantic search, sentiment analysis, and language-grounded decision intelligence across enterprise workflows.',
  strategicImportance:
    '80%+ of enterprise data is unstructured. Without NLP, that information remains locked — visible to no dashboard, reachable by no query, and absent from every decision. NLP is what makes the majority of your institutional knowledge computationally accessible.',
  methodology: [
    { title: 'Use-Case Architecture', desc: 'Mapping document, conversation, and search use cases to appropriate NLP technology stacks.' },
    { title: 'Model Selection & Tuning', desc: 'Foundation-model evaluation, fine-tuning, and domain-adaptation strategies.' },
    { title: 'Pipeline Engineering', desc: 'Document processing, entity extraction, and retrieval pipelines with evaluation harnesses.' },
    { title: 'Conversational Design', desc: 'Dialogue management, intent taxonomy, and human-handover patterns for conversational AI.' }
  ],
  frameworks: ['Hugging Face Transformers', 'spaCy & Stanza', 'Rasa / Dialogflow / Lex', 'LangChain for Document AI', 'Evaluation Harnesses'],
  deliverables: ['NLP Architecture', 'Domain-Tuned Models', 'Document Processing Pipelines', 'Conversational AI Deployment', 'Evaluation Reports'],
  outcomes: [
    { value: 'Unlock', label: 'Unstructured Data' },
    { value: '95%+', label: 'Entity Accuracy' },
    { value: 'Conversational', label: 'Interfaces' }
  ],
  icon: MessageCircle
});

register(['Computer Vision Systems', 'Computer Vision'], {
  title: 'Computer Vision Systems',
  tagline: 'Visual Intelligence for Industrial, Retail, and Clinical Automation',
  description:
    'Computer vision converts images and video into actionable intelligence — powering quality inspection, inventory counting, safety monitoring, clinical imaging, and spatial understanding. We engineer vision systems with the reliability, latency, and operational discipline that institutional deployment requires.',
  strategicImportance:
    'Wherever humans perform visual inspection or recognition at scale, computer vision offers superhuman consistency, 24/7 availability, and full audit trails. The organisations deploying vision systems today are accumulating operational advantages that grow with every inference.',
  methodology: [
    { title: 'Use-Case Specification', desc: 'Accuracy, latency, and operational requirements decomposed into engineering targets.' },
    { title: 'Data Collection & Annotation', desc: 'Active-learning annotation pipelines, synthetic data, and data-quality governance.' },
    { title: 'Model Development', desc: 'Detection, classification, segmentation, and tracking models tuned to the specific domain.' },
    { title: 'Edge & Cloud Deployment', desc: 'Edge-optimised inference with cloud-backed retraining and monitoring.' }
  ],
  frameworks: ['PyTorch / TensorFlow', 'YOLO / DETR / SAM', 'NVIDIA DeepStream / Triton', 'Edge AI (Jetson, Coral)', 'Annotation Platforms (Labelbox, CVAT)'],
  deliverables: ['Vision Architecture', 'Annotated Dataset', 'Production Models', 'Edge Deployment', 'Monitoring Dashboard'],
  outcomes: [
    { value: '95%+', label: 'Detection Accuracy' },
    { value: '<100ms', label: 'Edge Inference' },
    { value: '24/7', label: 'Visual Coverage' }
  ],
  icon: Eye
});

// ============================================================
// BRAND MANAGEMENT CAPABILITIES
// ============================================================

register(['Corporate Rebranding'], {
  title: 'Corporate Rebranding',
  tagline: 'Institutional Identity Evolution That Repositions Market Perception',
  description:
    'Corporate rebranding is one of the most high-stakes strategic manoeuvres an institution can undertake — affecting customer trust, employee morale, investor confidence, and market position. We lead rebrands as a disciplined transformation programme, not a creative exercise, ensuring the new brand compounds equity rather than erodes it.',
  strategicImportance:
    'Rebrands fail when they are treated as logo changes rather than institutional transformations. A well-executed rebrand repositions the entire enterprise — a poorly executed one destroys decades of equity in months.',
  methodology: [
    { title: 'Rebrand Strategy', desc: 'Business rationale, risk modelling, and stakeholder-impact analysis underpinning the rebrand decision.' },
    { title: 'Identity Architecture', desc: 'Positioning, narrative, visual identity, and verbal identity engineered as an integrated system.' },
    { title: 'Transition Management', desc: 'Internal launch, customer communication, and multi-channel rollout choreographed for coherence.' },
    { title: 'Equity Measurement', desc: 'Pre/post brand-health measurement to quantify the rebrand\'s institutional impact.' }
  ],
  frameworks: ['Brand Archaeology', 'Category Design', 'Transition Campaign Architecture', 'Brand Equity Indices', 'Internal Launch Playbooks'],
  deliverables: ['Rebrand Strategy', 'Full Identity System', 'Transition Communications', 'Rollout Playbook', 'Brand Equity Baseline & Post-Launch Measurement'],
  outcomes: [
    { value: '85%', label: 'Recall Lift' },
    { value: '2x', label: 'Premium Perception' },
    { value: 'Measured', label: 'Equity Impact' }
  ],
  icon: Palette
});

register(['Visual Identity Systems'], {
  title: 'Visual Identity Systems',
  tagline: 'A Codified Visual Language That Scales Globally Without Dilution',
  description:
    'A visual identity system is the codified grammar of how your brand looks, feels, and behaves across every medium. We design systems with the rigour of engineering — tokens, rules, components, and governance — so that consistency becomes the default across every team, agency, and market.',
  strategicImportance:
    'Inconsistent visual identity erodes brand equity imperceptibly but relentlessly. Every off-brand asset is a small signal that the institution lacks internal coherence. A codified system makes consistency easier than inconsistency.',
  methodology: [
    { title: 'Visual Foundations', desc: 'Logo system, typography hierarchy, colour architecture, photography direction, and motion grammar.' },
    { title: 'System Architecture', desc: 'Design tokens, component libraries, and applications patterns codified for every touchpoint.' },
    { title: 'Guidelines & Governance', desc: 'Comprehensive guidelines, training, and approval workflows.' },
    { title: 'DAM & Tooling', desc: 'Digital asset management deployment, production templates, and brand-compliant creation tools.' }
  ],
  frameworks: ['Design Tokens W3C Spec', 'Atomic Design', 'Brandfolder / Bynder DAM', 'Figma Brand Libraries', 'Motion Language Design'],
  deliverables: ['Visual Identity System', 'Brand Guidelines', 'Component Library', 'DAM Deployment', 'Template Suite'],
  outcomes: [
    { value: '100%', label: 'Consistency' },
    { value: 'Scalable', label: 'Across Markets' },
    { value: 'Governed', label: 'by Default' }
  ],
  icon: Palette
});

register(['Crisis Communications'], {
  title: 'Crisis Communications',
  tagline: 'Sovereign Narrative Control When Reputation Is Under Pressure',
  description:
    'Crisis communications is the institutional discipline of protecting reputation during high-stakes reputational events — product failures, regulatory actions, leadership transitions, or adversarial campaigns. We prepare institutional response frameworks before the crisis arrives and activate them with precision when it does.',
  strategicImportance:
    'Crises are rarely the cause of reputational damage — the response is. Unprepared organisations lose years of brand equity in days. Prepared organisations emerge from crises with reputation intact, and sometimes enhanced.',
  methodology: [
    { title: 'Crisis Risk Mapping', desc: 'Identification of plausible crisis scenarios across product, people, regulatory, and cyber dimensions.' },
    { title: 'Response Playbook Engineering', desc: 'Pre-approved response frameworks, spokesperson protocols, and channel playbooks.' },
    { title: 'Rehearsal & Tabletop Exercises', desc: 'Structured simulations that stress-test the response and surface gaps before they matter.' },
    { title: 'Active Crisis Management', desc: 'Real-time command-and-control during live events with cross-functional coordination.' }
  ],
  frameworks: ['Crisis Scenario Mapping', 'Response Playbook Discipline', 'Tabletop Exercise Methodology', 'Dark Site Preparedness', 'Post-Crisis Review Protocols'],
  deliverables: ['Crisis Risk Map', 'Response Playbook', 'Tabletop Rehearsal Outputs', 'Dark Site & Communications Templates', 'Active Crisis Command Capability'],
  outcomes: [
    { value: '<15m', label: 'Activation Time' },
    { value: 'Rehearsed', label: 'Response' },
    { value: 'Zero', label: 'Unmanaged Incidents' }
  ],
  icon: MessageCircle
});

register(['Employer Branding'], {
  title: 'Employer Branding',
  tagline: 'Positioning the Institution as the Destination for Elite Global Talent',
  description:
    'Employer brand is the single largest determinant of talent economics. We design employer-brand strategies, employee value propositions, and talent-marketing programmes that compress hiring cost, accelerate time-to-hire, and raise the calibre of institutional talent.',
  strategicImportance:
    'Every hire is a vote of confidence — and the quality of those votes determines institutional velocity. A strong employer brand turns hiring from a cost centre into a compounding source of competitive advantage.',
  methodology: [
    { title: 'EVP Development', desc: 'Research-driven articulation of the institutional value proposition across talent segments.' },
    { title: 'Talent Narrative Architecture', desc: 'Messaging architecture, content pillars, and proof-point libraries.' },
    { title: 'Talent Marketing Deployment', desc: 'Careers-site engineering, paid talent media, and employee advocacy programmes.' },
    { title: 'Candidate Experience Design', desc: 'End-to-end candidate journey mapping and experience instrumentation.' }
  ],
  frameworks: ['Employer Value Proposition Design', 'Glassdoor / LinkedIn Talent Insights', 'Talent Marketing Funnels', 'Candidate NPS Measurement', 'Employee Advocacy Platforms'],
  deliverables: ['EVP Definition', 'Talent Narrative Architecture', 'Careers Site', 'Talent Marketing Programme', 'Candidate Experience Dashboard'],
  outcomes: [
    { value: '40%', label: 'Time-to-Hire Reduction' },
    { value: 'Elevated', label: 'Hire Quality' },
    { value: '2x', label: 'Inbound Applicants' }
  ],
  icon: UserPlus
});

register(['Brand Governance'], {
  title: 'Brand Governance',
  tagline: 'Institutional Stewardship That Preserves Equity at Global Scale',
  description:
    'Brand governance is the institutional function that protects brand equity across every market, channel, and partner. We deploy governance councils, compliance monitoring, approval workflows, and education programmes that make brand consistency the path of least resistance.',
  strategicImportance:
    'Without governance, brand equity leaks — through off-brand marketing, inconsistent partner execution, and well-meaning local reinterpretation. Governance is the institutional hygiene that preserves the investment made in defining and designing the brand.',
  methodology: [
    { title: 'Governance Council', desc: 'Cross-functional leadership body with published standards and decision rights.' },
    { title: 'Compliance Monitoring', desc: 'Automated and human monitoring of brand usage across paid, owned, partner, and earned channels.' },
    { title: 'Approval Workflows', desc: 'Tiered approval protocols scaled by risk and channel visibility.' },
    { title: 'Education & Enablement', desc: 'Training, certification, and self-serve resources that make compliance easy.' }
  ],
  frameworks: ['Brand Governance Charters', 'Brandwatch / Meltwater Monitoring', 'Approval Workflow Platforms', 'Brand Certification Curricula', 'Annual Audit Protocols'],
  deliverables: ['Governance Charter', 'Monitoring Dashboard', 'Approval Workflow Deployment', 'Training Programme', 'Annual Brand Audit'],
  outcomes: [
    { value: 'Zero', label: 'Unmanaged Drift' },
    { value: '100%', label: 'Touchpoint Consistency' },
    { value: 'Annual', label: 'Equity Audit' }
  ],
  icon: FileCheck
});

// ============================================================
// CUSTOM SOFTWARE CAPABILITIES
// ============================================================

register(['Web Application Development'], {
  title: 'Web Application Development',
  tagline: 'Production-Grade Web Platforms Engineered for Institutional Scale',
  description:
    'Modern web applications are the operational backbone of most digital businesses. We engineer full-stack web applications using React, Next.js, Node.js, and modern backend stacks — delivering performance, security, and developer-velocity that internal teams can confidently own long after our engagement.',
  strategicImportance:
    'Your web application is where customers, employees, and partners encounter your business daily. Every second of latency, every broken flow, every security lapse compounds into trust erosion. Production-grade engineering is not a luxury — it is the baseline of digital credibility.',
  methodology: [
    { title: 'Architecture & Stack Selection', desc: 'Framework, API, and database decisions tuned to scale, team capability, and maintenance economics.' },
    { title: 'Engineering Discipline', desc: 'TypeScript-first codebases, trunk-based development, automated testing, and peer review.' },
    { title: 'Performance & Security', desc: 'Core Web Vitals budgets, OWASP Top 10 coverage, and observability instrumentation from day one.' },
    { title: 'Release & Operations', desc: 'CI/CD pipelines, progressive delivery, and operational runbooks for long-term ownership.' }
  ],
  frameworks: ['React / Next.js / Remix', 'Node.js / Python / Go', 'PostgreSQL / MongoDB / Redis', 'GraphQL / REST APIs', 'OpenTelemetry / Datadog'],
  deliverables: ['Production Web Application', 'CI/CD Pipelines', 'Automated Test Suites', 'Observability Platform', 'Operational Runbooks'],
  outcomes: [
    { value: '<1s', label: 'Load Time' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '>90%', label: 'Test Coverage' }
  ],
  icon: Code2
});

register(['Mobile App Development'], {
  title: 'Mobile App Development',
  tagline: 'Native and Cross-Platform Mobile Products That Earn Daily Use',
  description:
    'We build mobile products — native iOS, native Android, and cross-platform React Native — engineered for the performance, offline-resilience, and accessibility standards that premium mobile experiences demand.',
  strategicImportance:
    'Mobile is where attention lives. A poorly engineered mobile product is uninstalled; a premium one becomes a daily institutional touchpoint. The economics diverge rapidly.',
  methodology: [
    { title: 'Platform Strategy', desc: 'Native, cross-platform, or hybrid decisions tuned against performance, team, and long-term maintenance.' },
    { title: 'Offline-First Architecture', desc: 'Local data stores, sync engines, and conflict resolution for resilient mobile UX.' },
    { title: 'Performance Discipline', desc: 'Cold-start, frame-rate, and battery profiling integrated into CI.' },
    { title: 'Release Engineering', desc: 'Feature flags, phased rollouts, and app-store orchestration.' }
  ],
  frameworks: ['Swift / SwiftUI / Jetpack Compose', 'React Native & Expo', 'Firebase & RevenueCat', 'CodePush / EAS Update', 'XCTest / Espresso / Detox'],
  deliverables: ['Native iOS & Android Apps', 'Offline-First Data Architecture', 'CI/CD & Release Pipeline', 'App Store Optimisation', 'Performance Benchmarks'],
  outcomes: [
    { value: '<1s', label: 'Cold Start' },
    { value: '4.6+', label: 'Store Rating' },
    { value: 'Offline', label: 'Operation' }
  ],
  icon: Smartphone
});

register(['SaaS Platform Engineering'], {
  title: 'SaaS Platform Engineering',
  tagline: 'Multi-Tenant, Billing-Integrated, Enterprise-Scale SaaS Foundations',
  description:
    'SaaS platforms live or die on the invisible infrastructure beneath the product — multi-tenancy, identity, billing, provisioning, observability, and compliance. We engineer these foundations from day one so your product can scale from ten customers to ten thousand without architectural rework.',
  strategicImportance:
    'Retrofitting multi-tenancy, billing, or enterprise controls into a product that did not plan for them is slow, expensive, and frequently catastrophic. SaaS platforms engineered right from the start scale smoothly; those that are not typically hit a scaling wall at the moment success becomes achievable.',
  methodology: [
    { title: 'Multi-Tenant Architecture', desc: 'Tenant isolation, noisy-neighbour protection, and data-segmentation strategies.' },
    { title: 'Billing & Subscription', desc: 'Usage metering, plan management, dunning, and commercial flexibility.' },
    { title: 'Identity & Enterprise Readiness', desc: 'SSO/SCIM, audit logging, RBAC, and enterprise security controls.' },
    { title: 'Platform Economics', desc: 'Cost-per-tenant instrumentation and architectural choices tuned for unit economics.' }
  ],
  frameworks: ['Multi-Tenant Patterns', 'Stripe / Metronome Billing', 'SSO/SCIM via Okta/Auth0', 'WorkOS Enterprise Features', 'Usage Metering Architectures'],
  deliverables: ['Multi-Tenant Platform', 'Billing & Subscription Engine', 'SSO & SCIM Integration', 'Audit & Compliance Logging', 'Platform Economics Dashboard'],
  outcomes: [
    { value: 'Multi', label: 'Tenant Scale' },
    { value: 'Enterprise', label: 'Ready' },
    { value: 'Unit', label: 'Economics' }
  ],
  icon: Cloud
});

register(['API Design & Microservices', 'API Design Microservices'], {
  title: 'API Design & Microservices',
  tagline: 'Contract-First APIs and Decoupled Services That Outlast Any Single Team',
  description:
    'APIs are the contracts through which systems collaborate — internally and externally. We design APIs contract-first, build microservices aligned to business domains, and establish the governance that ensures your API estate remains coherent as teams and products proliferate.',
  strategicImportance:
    'Poorly designed APIs become systemic debt — every integration pays a compounding tax, every change breaks something downstream, every consumer builds workarounds. Well-designed APIs become strategic infrastructure that accelerates every team that uses them.',
  methodology: [
    { title: 'Contract-First Design', desc: 'OpenAPI / GraphQL schemas as the canonical source of truth before implementation.' },
    { title: 'Domain-Driven Service Boundaries', desc: 'Microservice decomposition aligned to business domains, not technical convenience.' },
    { title: 'API Governance', desc: 'Versioning, deprecation, rate limiting, and consumer management at enterprise scale.' },
    { title: 'Developer Experience', desc: 'Portals, SDKs, and documentation engineered to make integration trivially easy.' }
  ],
  frameworks: ['OpenAPI 3 / GraphQL / gRPC', 'API Gateway (Kong, Apigee)', 'Service Mesh (Istio, Linkerd)', 'Event-Driven Architecture', 'Developer Portal Engineering'],
  deliverables: ['API Architecture & Contracts', 'Microservice Platform', 'API Gateway & Governance', 'Developer Portal', 'Consumer SDKs'],
  outcomes: [
    { value: 'Contract', label: 'First' },
    { value: 'Domain', label: 'Aligned' },
    { value: 'Enterprise', label: 'Governed' }
  ],
  icon: GitBranch
});

register(['DevOps & CI/CD Pipelines', 'DevOps CI CD Pipelines'], {
  title: 'DevOps & CI/CD Pipelines',
  tagline: 'Automated Delivery Pipelines That Ship Fast and Ship Safe',
  description:
    'We engineer CI/CD pipelines with infrastructure-as-code, automated testing, progressive delivery, and zero-downtime deployment — replacing heroic release weekends with routine, de-risked, daily shipping.',
  strategicImportance:
    'Release friction is invisible tax on every feature, every bug fix, and every security patch. Organisations that ship multiple times per day have cumulative advantages over those shipping quarterly — advantages that compound every sprint.',
  methodology: [
    { title: 'Pipeline Architecture', desc: 'Multi-stage pipelines with automated gates for test, security, performance, and compliance.' },
    { title: 'Infrastructure as Code', desc: 'Environments, networks, and services defined declaratively and version-controlled.' },
    { title: 'Progressive Delivery', desc: 'Feature flags, canaries, and blue-green deployments that de-risk every change.' },
    { title: 'Platform Engineering', desc: 'Self-service internal developer platforms that give every team a paved path to production.' }
  ],
  frameworks: ['GitHub Actions / GitLab CI / Jenkins', 'Terraform / Pulumi', 'Kubernetes & ArgoCD', 'LaunchDarkly / Flagsmith', 'Backstage Developer Portal'],
  deliverables: ['CI/CD Pipeline Suite', 'IaC Codebase', 'Progressive Delivery Tooling', 'Developer Platform', 'SRE Runbooks'],
  outcomes: [
    { value: 'Daily', label: 'Deployments' },
    { value: 'Zero', label: 'Downtime Releases' },
    { value: '<30m', label: 'Lead Time' }
  ],
  icon: GitBranch
});

register(['Legacy System Modernization'], {
  title: 'Legacy System Modernization',
  tagline: 'Strangler-Fig Modernisation That Eliminates Debt Without Business Disruption',
  description:
    'Legacy modernisation is the discipline of retiring technical debt without retiring business capability. We deploy strangler-fig patterns, domain decomposition, and progressive-replacement techniques that modernise incrementally — delivering value at every phase while protecting operational continuity.',
  strategicImportance:
    'Legacy debt compounds: rising maintenance costs, disappearing skills, rising security exposure, and innovation ceiling. Most institutions cannot do a big-bang rewrite — and shouldn\'t. Strangler-fig modernisation makes progress continuous and risk bounded.',
  methodology: [
    { title: 'Portfolio Assessment', desc: 'Every legacy asset classified against retire, retain, refactor, replace, or replatform.' },
    { title: 'Domain Decomposition', desc: 'Legacy monoliths decomposed into bounded domains suitable for incremental replacement.' },
    { title: 'Strangler-Fig Execution', desc: 'API façades, data synchronisation, and phased traffic shifting that replaces legacy component by component.' },
    { title: 'Decommissioning Discipline', desc: 'Structured sunsetting of legacy systems once the replacement is proven in production.' }
  ],
  frameworks: ['Strangler Fig Pattern', 'Event Sourcing & CDC', 'Anti-Corruption Layers', 'Contract Testing', 'Domain-Driven Decomposition'],
  deliverables: ['Portfolio Assessment', 'Modernisation Roadmap', 'Strangler-Fig Playbook', 'Target-State Architecture', 'Decommissioning Plan'],
  outcomes: [
    { value: '60%', label: 'TCO Reduction' },
    { value: 'Zero', label: 'Business Disruption' },
    { value: 'Phased', label: 'De-Risked Path' }
  ],
  icon: Repeat
});

// ============================================================
// Export
// ============================================================

export const getCapabilityData = (slug: string): CapabilityData | undefined => {
  return CAPS[slug];
};
