import { Shield, Cloud, BarChart3, Globe, Cpu, Search, Megaphone, Award, Share2 } from 'lucide-react';
import { Service, Industry, Stat, CaseStudy, Job, Event, LeadershipProfile } from '../types';
import { ASSETS } from '../utils/assets';

// --- CAPABILITIES (Elite Strategic Catalog) ---
export const SERVICES: Service[] = [
  {
    id: 'it-strategy',
    title: 'IT STRATEGY',
    description: 'Transforming legacy architectural debt into a lean, high-velocity value center through forensic audits and resilient roadmaps.',
    icon: BarChart3,
    path: '/services/it-strategy'
  },
  {
    id: 'cloud-services',
    title: 'CLOUD SERVICES',
    description: 'Architecting multi-cloud sovereign ecosystems designed for absolute global stability and elastic scale.',
    icon: Cloud,
    path: '/services/cloud-services'
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    description: 'Implementing defense-in-depth protocols and zero-trust frameworks to safeguard mission-critical digital assets.',
    icon: Shield,
    path: '/services/cybersecurity'
  },
  {
    id: 'digital-experience',
    title: 'DIGITAL EXPERIENCE',
    description: 'Crafting high-fidelity, human-centric interfaces that command brand authority and optimize institutional conversion.',
    icon: Globe,
    path: '/services/digital-experience'
  },
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    description: 'Deploying autonomous neural systems to unlock predictive speed and eliminate operational friction.',
    icon: Cpu,
    path: '/services/ai-automation'
  },
  {
    id: 'enterprise-seo',
    title: 'ENTERPRISE SEO',
    description: 'Technical search engineering designed to secure undisputed dominance of global search intent.',
    icon: Search,
    path: '/services/enterprise-seo'
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    description: 'A synchronized engine of cinematic narrative and data-driven precision for global market influence.',
    icon: Megaphone,
    path: '/services/digital-marketing'
  },
  {
    id: 'social-capital',
    title: 'SOCIAL MEDIA HANDLING',
    description: 'Managing brand sovereignty and narrative influence at an institutional scale across global channels.',
    icon: Share2,
    path: '/services/social-capital'
  },
  {
    id: 'brand-management',
    title: 'BRAND MANAGEMENT',
    description: 'Codifying corporate identity to ensure permanent market leadership and perceived premium value.',
    icon: Award,
    path: '/services/brand-management'
  }
];

// --- INDUSTRIES (Vertical Authority) ---
export const INDUSTRIES: Industry[] = [
  {
    id: 'banking',
    title: 'FINANCIAL INSTITUTIONS',
    description: 'Redefining transactional trust and institutional liquidity through sovereign payment architectures.',
    path: '/industries/banking'
  },
  {
    id: 'healthcare',
    title: 'LIFE SCIENCES',
    description: 'Accelerating patient outcomes and therapeutic precision through high-fidelity data orchestration.',
    path: '/industries/healthcare'
  },
  {
    id: 'retail',
    title: 'RETAIL & COMMERCE',
    description: 'Converting legacy supply chains into responsive, phygital value networks for the global consumer.',
    path: '/industries/retail'
  },
  {
    id: 'manufacturing',
    title: 'INDUSTRIAL 4.0',
    description: 'Engineering autonomous factory ecosystems and digital-twin prototypes for structural efficiency.',
    path: '/industries/manufacturing'
  },
  {
    id: 'energy',
    title: 'ENERGY & UTILITIES',
    description: 'Orchestrating a decentralized and resilient energy future through smart-grid intelligence.',
    path: '/industries/energy'
  },
];

// --- PERFORMANCE METRICS ---
export const STATS: Stat[] = [
  { label: 'Corporate Structure', value: 'Privately', suffix: ' Held' },
  { label: 'Client Portfolio', value: 'Select', suffix: ' Partners' },
  { label: 'Service Coverage', value: 'Global', suffix: ' Operations' },
  { label: 'System Reliability', value: '99.99', suffix: '%' },
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
    name: 'Kumakshi khanna',
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

// --- INSTITUTIONAL CASE STUDIES ---
export const FEATURED_CASES: CaseStudy[] = [
  {
    id: 'sovereign-cloud',
    title: 'Sovereign Infrastructure for Banking',
    category: 'Finance',
    summary: 'Architecting a zero-trust multi-cloud environment to secure transactional assets.',
    image: ASSETS.CASE_1
  },
  {
    id: 'autonomous-systems',
    title: 'Autonomous Logic in Manufacturing',
    category: 'Industrial',
    summary: 'Deploying neural networks to optimize supply chain resilience.',
    image: ASSETS.CASE_2
  },
  {
    id: 'unified-retail',
    title: 'The Phygital Commerce Engine',
    category: 'Retail',
    summary: 'Unifying global endpoints into a single, high-fidelity customer experience platform.',
    image: ASSETS.CASE_3
  }
];

// --- OPEN MANDATES ---
export const OPEN_POSITIONS: Job[] = [
  { id: '1', title: 'Senior Solutions Architect', location: 'Toronto HQ', type: 'Full-time', department: 'Engineering' },
  { id: '2', title: 'Director of Strategy', location: 'Vancouver', type: 'Full-time', department: 'Consulting' },
  { id: '3', title: 'AI Research Lead', location: 'Remote', type: 'Full-time', department: 'Innovation Labs' },
];

// --- GLOBAL SUMMITS ---
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