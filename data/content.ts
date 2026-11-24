import { Shield, Cloud, BarChart3, Globe, Cpu, Search, Megaphone, Award, Share2, Code2, LucideIcon } from 'lucide-react';
import { LeadershipProfile } from '../types';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;      // one or two plain sentences
  icon: LucideIcon;
  path: string;
  whatWeDo: string[];       // plain-language list of tasks
  goodFor: string;          // who this is useful for
}

// --- SERVICES ---
export const SERVICES: ServiceItem[] = [
  {
    id: 'it-strategy',
    title: 'IT Strategy',
    description: 'We review the technology you use today and help you plan what to keep, change or add, in plain language and in a sensible order.',
    icon: BarChart3,
    path: '/services/it-strategy',
    whatWeDo: [
      'Review your current software, hosting and tools',
      'Identify gaps, duplicate tools and avoidable costs',
      'Write a short, prioritized technology plan',
      'Help you compare vendors and options',
    ],
    goodFor: 'Small and mid-sized businesses that want a clear technology plan without hiring a full-time IT lead.',
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'We help you move to, set up and manage cloud hosting on providers such as AWS, Microsoft Azure and Google Cloud.',
    icon: Cloud,
    path: '/services/cloud-services',
    whatWeDo: [
      'Set up cloud accounts, servers, databases and storage',
      'Move existing websites and applications to the cloud',
      'Configure backups and basic monitoring',
      'Review cloud bills and suggest ways to reduce them',
    ],
    goodFor: 'Businesses moving off older servers, or those whose cloud setup has grown messy or expensive.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'We help you put basic, practical security in place: secure accounts, safer settings and clear steps to follow if something goes wrong.',
    icon: Shield,
    path: '/services/cybersecurity',
    whatWeDo: [
      'Review account access, passwords and multi-factor authentication',
      'Check website and cloud settings for common weaknesses',
      'Write simple security policies and an incident checklist',
      'Train staff on common threats such as phishing',
    ],
    goodFor: 'Businesses that want to cover the security basics and reduce everyday risk.',
  },
  {
    id: 'digital-experience',
    title: 'Digital Experience',
    description: 'We design and build clear, easy-to-use websites and web pages for your customers.',
    icon: Globe,
    path: '/services/digital-experience',
    whatWeDo: [
      'Plan page layouts and user flows',
      'Design and build responsive websites',
      'Improve page speed and accessibility',
      'Set up forms, booking and contact tools',
    ],
    goodFor: 'Businesses that need a new website or a refresh of an existing one.',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'We look for repetitive tasks in your business and set up practical automations or AI-assisted tools where they make sense.',
    icon: Cpu,
    path: '/services/ai-automation',
    whatWeDo: [
      'Identify manual, repetitive tasks that can be automated',
      'Connect the tools you already use (email, spreadsheets, CRM)',
      'Set up AI-assisted tools such as document summaries or chat assistants',
      'Explain clearly what automation can and cannot do for you',
    ],
    goodFor: 'Teams that spend too much time on repetitive admin work.',
  },
  {
    id: 'enterprise-seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'We help your website get found in search by fixing technical issues and improving page content.',
    icon: Search,
    path: '/services/enterprise-seo',
    whatWeDo: [
      'Technical checks: speed, mobile friendliness, indexing',
      'Keyword research and page-level recommendations',
      'Set up Google Search Console and analytics',
      'Monthly reports on what changed',
    ],
    goodFor: 'Businesses that want more visitors from search engines. We do not promise specific rankings.',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'We help you set up and run online advertising and email campaigns, and measure what they bring in.',
    icon: Megaphone,
    path: '/services/digital-marketing',
    whatWeDo: [
      'Set up and manage Google and social media ad accounts',
      'Build email lists and simple email campaigns',
      'Set up conversion tracking so results can be measured',
      'Report on spend and results every month',
    ],
    goodFor: 'Businesses that want to start or tidy up online advertising. Ad spend is paid by you to the ad platform.',
  },
  {
    id: 'social-capital',
    title: 'Social Media Handling',
    description: 'We help you plan and publish regular content on the social platforms your customers use.',
    icon: Share2,
    path: '/services/social-capital',
    whatWeDo: [
      'Set up or tidy business profiles',
      'Plan a content calendar',
      'Create and schedule posts',
      'Report on activity and engagement',
    ],
    goodFor: 'Businesses that want a steady social media presence without managing it day to day.',
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'We build custom web applications, internal tools and integrations when off-the-shelf software does not fit.',
    icon: Code2,
    path: '/services/custom-software',
    whatWeDo: [
      'Gather requirements and agree on a written scope',
      'Design, build and test web applications',
      'Connect your software to other systems through APIs',
      'Provide handover documentation and ongoing support if wanted',
    ],
    goodFor: 'Businesses with a specific process or product idea that existing tools do not cover.',
  },
  {
    id: 'brand-management',
    title: 'Brand Management',
    description: 'We help you create a consistent look and message for your business: logo, colours, fonts and tone of voice.',
    icon: Award,
    path: '/services/brand-management',
    whatWeDo: [
      'Logo and colour palette',
      'Simple brand guidelines',
      'Business card, email signature and social media templates',
      'Reviewing existing materials for consistency',
    ],
    goodFor: 'New and growing businesses that want a professional, consistent presentation.',
  },
];

// --- HOW WE CHARGE ---
// TODO: Replace every amount below with your real rates before publishing.
export interface PricingModel {
  id: string;
  name: string;
  summary: string;
  amount: string;
  bestFor: string;
  details: string[];
}

export const PRICING_MODELS: PricingModel[] = [
  {
    id: 'hourly',
    name: 'Hourly',
    summary: 'You pay for the hours worked, tracked and invoiced.',
    amount: 'TODO: hourly rate (CAD)',
    bestFor: 'Small tasks, advice and work where the scope may change.',
    details: [
      'Hours are logged and shared with you on every invoice',
      'TODO: minimum engagement / minimum billable block, if any',
    ],
  },
  {
    id: 'project',
    name: 'Project-based quote',
    summary: 'We agree on a written scope and a fixed price before work starts.',
    amount: 'TODO: typical starting price (CAD) or "quoted per project"',
    bestFor: 'Websites, migrations and builds with a clear start and end.',
    details: [
      'Written scope, deliverables and timeline',
      'TODO: payment schedule (e.g. deposit % / milestones / on delivery)',
      'Work outside the agreed scope is quoted separately',
    ],
  },
  {
    id: 'retainer',
    name: 'Monthly retainer',
    summary: 'A fixed monthly fee for an agreed amount of ongoing support.',
    amount: 'TODO: monthly fee (CAD) and hours included',
    bestFor: 'Ongoing maintenance, monitoring, marketing and support.',
    details: [
      'Agreed monthly hours or deliverables',
      'TODO: notice period to cancel (e.g. 30 days)',
    ],
  },
];

// --- TEAM ---
// TODO: Confirm names, roles and photos. Remove anyone who is not actually part of the company.
// Titles here are intentionally plain. Do not use inflated titles.
export const LEADERSHIP_TEAM: LeadershipProfile[] = [];
