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
    path: '/services/it-strategy',
    image: ASSETS.SERVICE_STRATEGY
  },
  {
    id: 'cloud-services',
    title: 'CLOUD SERVICES',
    description: 'Architecting multi-cloud sovereign ecosystems designed for absolute global stability and elastic scale.',
    icon: Cloud,
    path: '/services/cloud-services',
    image: ASSETS.SERVICE_CLOUD
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    description: 'Implementing defense-in-depth protocols and zero-trust frameworks to safeguard mission-critical digital assets.',
    icon: Shield,
    path: '/services/cybersecurity',
    image: ASSETS.SERVICE_CYBER
  },
  {
    id: 'digital-experience',
    title: 'DIGITAL EXPERIENCE',
    description: 'Crafting high-fidelity, human-centric interfaces that command brand authority and optimize institutional conversion.',
    icon: Globe,
    path: '/services/digital-experience',
    image: ASSETS.SERVICE_DIGITAL
  },
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    description: 'Deploying autonomous neural systems to unlock predictive speed and eliminate operational friction.',
    icon: Cpu,
    path: '/services/ai-automation',
    image: ASSETS.SERVICE_AI
  },
  {
    id: 'enterprise-seo',
    title: 'ENTERPRISE SEO',
    description: 'Technical search engineering designed to secure undisputed dominance of global search intent.',
    icon: Search,
    path: '/services/enterprise-seo',
    image: ASSETS.SERVICE_SEO
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    description: 'A synchronized engine of cinematic narrative and data-driven precision for global market influence.',
    icon: Megaphone,
    path: '/services/digital-marketing',
    image: ASSETS.SERVICE_MARKETING
  },
  {
    id: 'social-capital',
    title: 'SOCIAL MEDIA HANDLING',
    description: 'Managing brand sovereignty and narrative influence at an institutional scale across global channels.',
    icon: Share2,
    path: '/services/social-capital',
    image: ASSETS.SERVICE_SOCIAL
  },
  {
    id: 'brand-management',
    title: 'BRAND MANAGEMENT',
    description: 'Codifying corporate identity to ensure permanent market leadership and perceived premium value.',
    icon: Award,
    path: '/services/brand-management',
    image: ASSETS.SERVICE_BRAND
  }
];

// --- INDUSTRIES (Vertical Authority) ---
export const INDUSTRIES: Industry[] = [
  {
    id: 'banking',
    title: 'FINANCIAL INSTITUTIONS',
    description: 'Redefining transactional trust and institutional liquidity through sovereign payment architectures.',
    path: '/industries/banking',
    image: ASSETS.IND_BANKING
  },
  {
    id: 'healthcare',
    title: 'LIFE SCIENCES',
    description: 'Accelerating patient outcomes and therapeutic precision through high-fidelity data orchestration.',
    path: '/industries/healthcare',
    image: ASSETS.IND_HEALTH
  },
  {
    id: 'retail',
    title: 'RETAIL & COMMERCE',
    description: 'Converting legacy supply chains into responsive, phygital value networks for the global consumer.',
    path: '/industries/retail',
    image: ASSETS.IND_RETAIL
  },
  {
    id: 'manufacturing',
    title: 'INDUSTRIAL 4.0',
    description: 'Engineering autonomous factory ecosystems and digital-twin prototypes for structural efficiency.',
    path: '/industries/manufacturing',
    image: ASSETS.IND_MANUFACTURING
  },
  {
    id: 'energy',
    title: 'ENERGY & UTILITIES',
    description: 'Orchestrating a decentralized and resilient energy future through smart-grid intelligence.',
    path: '/industries/energy',
    image: ASSETS.IND_ENERGY
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
    image: ASSETS.TEAM_RISHABH,
    bio: 'Visionary architect specializing in sovereign digital ecosystems and institutional growth strategies.'
  },
  {
    name: 'Kavya',
    role: 'Director of Global Strategy',
    image: ASSETS.TEAM_KAVYA,
    bio: 'Lead strategist for EMEA/APAC expansions, engineering global stability protocols.'
  },
  {
    name: 'Kumakshi khanna',
    role: 'Chief Legal Advisor',
    image: ASSETS.TEAM_ALI,
    bio: 'Institutional governance expert focused on digital sovereignty and global regulatory compliance.'
  },
  {
    name: 'Shabir Ahmad',
    role: 'Principal Solutions Architect',
    image: ASSETS.TEAM_SHABIR,
    bio: 'Master of zero-trust frameworks and high-fidelity enterprise cloud architectures.'
  },
  {
    name: 'Riyan',
    role: 'Chief Brand Designer',
    image: ASSETS.TEAM_RIYAN,
    bio: 'Cinematic brand architect defining the visual authority of elite digital identities.'
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