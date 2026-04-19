import { Shield, Cloud, BarChart3, Globe, Cpu, Search, Megaphone, Award, Share2, Code2 } from 'lucide-react';
import { Service, Industry, Stat, CaseStudy, Job, Event, LeadershipProfile } from '../types';
import { ASSETS } from '../utils/assets';

// --- CAPABILITIES ---
export const SERVICES: Service[] = [
  {
    id: 'it-strategy',
    title: 'IT STRATEGY',
    description: 'Forensic technology audits, enterprise architecture mapping, and sovereign multi-year transformation roadmaps. Our principals embed with your C-suite to ensure every technology investment compounds into measurable competitive advantage — transforming IT from a cost center into your most formidable strategic weapon.',
    icon: BarChart3,
    path: '/services/it-strategy'
  },
  {
    id: 'cloud-services',
    title: 'CLOUD SERVICES',
    description: 'End-to-end sovereign cloud transformation — from readiness assessment and architecture design to zero-downtime migration and continuous FinOps governance. We architect multi-cloud and hybrid environments across AWS, Azure, and GCP that deliver elastic scale, sovereign data compliance, and institutional-grade resilience.',
    icon: Cloud,
    path: '/services/cloud-services'
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    description: 'Institutional security operations built on zero-trust architecture. We conduct adversarial red-team exercises, deploy 24/7 sovereign security operations centers, engineer incident response playbooks, and implement identity-centric access frameworks that protect your most critical assets against nation-state-grade threats.',
    icon: Shield,
    path: '/services/cybersecurity'
  },
  {
    id: 'digital-experience',
    title: 'DIGITAL EXPERIENCE',
    description: 'We research, design, and engineer digital products that command attention and drive institutional-grade conversion rates. From deep ethnographic research and behavioral journey mapping to pixel-perfect interface architecture and full-stack engineering — we create experiences that establish brand authority.',
    icon: Globe,
    path: '/services/digital-experience'
  },
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    description: 'Production-grade artificial intelligence systems that deliver measurable ROI from day one — not science projects that stall at proof-of-concept. We architect custom ML models, intelligent automation workflows, NLP systems, and predictive analytics platforms that give your teams superhuman decision-making velocity.',
    icon: Cpu,
    path: '/services/ai-automation'
  },
  {
    id: 'enterprise-seo',
    title: 'ENTERPRISE SEO',
    description: 'Technical search architecture at institutional scale. We optimize sovereign infrastructure for crawl efficiency, build topical authority through strategic content frameworks, manage complex international SEO deployments, and capture high-intent organic traffic that converts into qualified pipeline across every market.',
    icon: Search,
    path: '/services/enterprise-seo'
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    description: 'Full-funnel campaign orchestration across Google, Meta, LinkedIn, and programmatic channels. We manage multi-million dollar media portfolios with precision targeting, build marketing automation ecosystems, and optimize every touchpoint toward institutional metrics: qualified pipeline, influenced revenue, and compounding lifetime value.',
    icon: Megaphone,
    path: '/services/digital-marketing'
  },
  {
    id: 'social-capital',
    title: 'SOCIAL MEDIA HANDLING',
    description: 'Institutional-scale social media orchestration across LinkedIn, Instagram, X, YouTube, TikTok, and Facebook. We engineer content strategies, cultivate communities, orchestrate influencer partnerships, and deploy sovereign crisis communication protocols that protect and elevate brand authority.',
    icon: Share2,
    path: '/services/social-capital'
  },
  {
    id: 'custom-software',
    title: 'CUSTOM SOFTWARE',
    description: 'End-to-end bespoke software engineering — from rapid prototype to sovereign enterprise-scale platforms. We architect, build, test, and deploy custom web applications, mobile platforms, SaaS ecosystems, and microservices architectures tailored with absolute precision to your institutional requirements.',
    icon: Code2,
    path: '/services/custom-software'
  },
  {
    id: 'brand-management',
    title: 'BRAND MANAGEMENT',
    description: 'We codify sovereign corporate identity into governance systems that scale across every market and medium. From brand strategy and visual identity architecture to tone-of-voice codification, employer branding, and institutional brand governance — we ensure your brand commands premium perception at every touchpoint.',
    icon: Award,
    path: '/services/brand-management'
  }
];

// --- INDUSTRIES ---
export const INDUSTRIES: Industry[] = [
  {
    id: 'banking',
    title: 'FINANCIAL SERVICES',
    description: 'Sovereign digital transformation for banking, fintech, insurance, and capital markets institutions operating under the most demanding regulatory environments.',
    path: '/industries/banking'
  },
  {
    id: 'healthcare',
    title: 'HEALTHCARE & LIFE SCIENCES',
    description: 'Mission-critical healthcare technology platforms that elevate patient outcomes, accelerate clinical operations, and ensure absolute regulatory compliance.',
    path: '/industries/healthcare'
  },
  {
    id: 'retail',
    title: 'RETAIL & E-COMMERCE',
    description: 'Institutional-grade omnichannel commerce platforms and intelligent supply chain architectures engineered for the modern consumer economy.',
    path: '/industries/retail'
  },
  {
    id: 'manufacturing',
    title: 'MANUFACTURING & INDUSTRY 4.0',
    description: 'Sovereign smart factory platforms, IoT integration architectures, and digital twin ecosystems that engineer operational excellence at industrial scale.',
    path: '/industries/manufacturing'
  },
  {
    id: 'energy',
    title: 'ENERGY & UTILITIES',
    description: 'Grid modernization, renewable integration, and intelligent infrastructure platforms architected for the sovereign energy transition.',
    path: '/industries/energy'
  },
  {
    id: 'technology',
    title: 'TECHNOLOGY & SAAS',
    description: 'Multi-tenant SaaS architecture, developer platforms, product-led growth infrastructure, and enterprise-readiness engineering for B2B technology firms.',
    path: '/industries/technology'
  },
  {
    id: 'professional-services',
    title: 'PROFESSIONAL SERVICES',
    description: 'Thought leadership at scale, matter/knowledge management, and digital client acquisition systems for consulting, legal, accounting, and advisory firms.',
    path: '/industries/professional-services'
  },
  {
    id: 'education',
    title: 'EDUCATION & EDTECH',
    description: 'Learning platforms, student information systems, enrolment marketing, and accessibility compliance for higher education, K-12, and corporate learning.',
    path: '/industries/education'
  },
  {
    id: 'government',
    title: 'GOVERNMENT & PUBLIC SECTOR',
    description: 'Citizen services portals, sovereign cloud architecture, cyber defence operations, and legacy modernisation for federal, state, and municipal government.',
    path: '/industries/government'
  },
  {
    id: 'media',
    title: 'MEDIA & ENTERTAINMENT',
    description: 'Streaming infrastructure, rights and royalty management, audience intelligence, and subscription economics for publishers, broadcasters, and streaming platforms.',
    path: '/industries/media'
  },
];

// --- PERFORMANCE METRICS ---
export const STATS: Stat[] = [
  { label: 'Global Presence', value: '7', suffix: '+ Nations' },
  { label: 'Enterprise Clients', value: '120', suffix: '+' },
  { label: 'Projects Delivered', value: '500', suffix: '+' },
  { label: 'Platform Uptime', value: '99.9', suffix: '%' },
];

// --- GLOBAL OFFICES ---
export const GLOBAL_OFFICES = [
  { city: 'Toronto', country: 'Canada', type: 'Global HQ', flag: '🇨🇦' },
  { city: 'New York', country: 'United States', type: 'Americas Hub', flag: '🇺🇸' },
  { city: 'London', country: 'United Kingdom', type: 'EMEA Hub', flag: '🇬🇧' },
  { city: 'Dubai', country: 'UAE', type: 'Middle East Hub', flag: '🇦🇪' },
  { city: 'Mumbai', country: 'India', type: 'APAC Delivery Center', flag: '🇮🇳' },
  { city: 'Singapore', country: 'Singapore', type: 'APAC Hub', flag: '🇸🇬' },
  { city: 'Sydney', country: 'Australia', type: 'Oceania Hub', flag: '🇦🇺' },
  { city: 'Berlin', country: 'Germany', type: 'EU Engineering', flag: '🇩🇪' },
];

// --- EXECUTIVE LEADERSHIP ---
export const LEADERSHIP_TEAM: LeadershipProfile[] = [
  {
    name: 'Rishabh',
    role: 'Founder & Director',
    image: ASSETS.TEAM_RISHABH
  },
  {
    name: 'Kavya',
    role: 'Director of Global Strategy',
    image: ASSETS.TEAM_KAVYA
  },
  {
    name: 'Kumakshi Khanna',
    role: 'Chief Legal Advisor',
    image: ASSETS.TEAM_ALI
  },
  {
    name: 'Shabir Ahmad',
    role: 'Principal Solutions Architect',
    image: ASSETS.TEAM_SHABIR
  },
  {
    name: 'Riyan',
    role: 'Chief Brand Designer',
    image: ASSETS.TEAM_RIYAN
  }
];

// --- CASE STUDIES ---
export const FEATURED_CASES: CaseStudy[] = [
  {
    id: 'sovereign-cloud',
    title: 'Cloud Migration for a Tier-1 Bank',
    category: 'Financial Services',
    summary: 'Engineered a zero-trust multi-cloud environment for a Tier-1 financial institution, migrating 200+ microservices with zero downtime and reducing infrastructure costs by 40%.',
    image: ASSETS.CASE_1
  },
  {
    id: 'autonomous-systems',
    title: 'AI-Powered Supply Chain for Manufacturing',
    category: 'Industrial',
    summary: 'Deployed neural network-powered predictive analytics across 12 production lines, cutting defect rates by 67% and establishing autonomous quality assurance protocols.',
    image: ASSETS.CASE_2
  },
  {
    id: 'unified-retail',
    title: 'Omnichannel Platform for Global Retailer',
    category: 'Retail',
    summary: 'Architected a unified omnichannel commerce platform serving 8M+ customers across 14 countries with 99.99% availability and real-time inventory synchronization.',
    image: ASSETS.CASE_3
  }
];

// --- OPEN POSITIONS ---
export const OPEN_POSITIONS: Job[] = [
  { id: '1', title: 'Senior Solutions Architect', location: 'Toronto HQ', type: 'Full-time', department: 'Engineering' },
  { id: '2', title: 'Director of Strategy', location: 'Vancouver', type: 'Full-time', department: 'Consulting' },
  { id: '3', title: 'AI Research Lead', location: 'Remote', type: 'Full-time', department: 'Innovation Labs' },
];

// --- EVENTS ---
export const EVENTS: Event[] = [
  {
    id: 'ev-2',
    title: 'Premium Launch Event',
    date: 'March 11, 2026 @ 10:00 AM',
    location: 'Global Headquarters',
    type: 'upcoming',
    description: 'An exclusive launch event showcasing our latest premium content and institutional offerings.',
    image: ASSETS.EVENT_2
  },
  {
    id: 'ev-1',
    title: 'Sovereignty & AI Summit',
    date: 'May 20, 2026',
    location: 'Davos, Switzerland',
    type: 'upcoming',
    description: 'An executive roundtable focused on the intersection of AI governance and national data sovereignty.',
    image: ASSETS.EVENT_1
  }
];

// --- TRUST BADGES (empty — no certifications claimed) ---
export const TRUST_BADGES: string[] = [];
