import { toSlug } from "../utils/slugs";
// Import Users from lucide-react to fix missing reference
import { Zap, Layers, Globe, Smartphone, Database, ShoppingCart, Eye, Palette, MessageCircle, UserPlus, FileCheck, Share2, TrendingUp, Search, Cpu, Shield, Cloud, BarChart3, Users } from 'lucide-react';

export interface CapabilityData {
  title: string;
  tagline: string;
  description: string;
  strategicImportance: string;
  methodology: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  icon: any;
}

const GENERATE_CAPABILITY = (title: string, tagline: string, desc: string, icon: any = Zap): CapabilityData => ({
  title,
  tagline,
  description: desc,
  strategicImportance: `In today's hyper-competitive landscape, ${title} is no longer just an operational detail—it is a strategic lever. Organizations that master this capability unlock new revenue streams, minimize systemic risk, and accelerate their time-to-market significantly compared to peers.`,
  methodology: [
    { title: 'Diagnostic Audit', desc: 'We begin with a forensic analysis of your current capabilities, identifying gaps, inefficiencies, and hidden opportunities for leverage.' },
    { title: 'Strategic Architecture', desc: 'We design a future-state framework that aligns with your broader business objectives, ensuring scalability and resilience.' },
    { title: 'Agile Execution', desc: 'Implementation is delivered via rapid sprints, ensuring immediate value realization while maintaining long-term structural integrity.' }
  ],
  outcomes: [
    { value: '30%', label: 'Efficiency Gain' },
    { value: '2x', label: 'Speed to Market' },
    { value: '100%', label: 'Strategic Alignment' }
  ],
  icon
});

const DATA: Record<string, CapabilityData> = {
  // --- STRATEGY ---
  [toSlug('Digital Operating Models')]: {
    title: 'Digital Operating Models',
    tagline: 'Aligning Structure with Strategy',
    description: 'A digital operating model bridges the gap between business strategy and day-to-day execution. It defines how value is delivered, how decisions are made, and how data flows through the organization.',
    strategicImportance: 'Legacy structures cannot support digital speed. Without a reinvented operating model, digital transformation initiatives hit the wall of organizational silos.',
    methodology: [
        { title: 'Value Stream Mapping', desc: 'Identifying the critical paths of value delivery and eliminating friction points.' },
        { title: 'Agile Org Design', desc: 'Restructuring teams from functional silos into cross-functional squads focused on products.' },
        { title: 'Governance Frameworks', desc: 'Establishing lightweight decision-making protocols that empower teams without sacrificing control.' }
    ],
    outcomes: [
        { value: '40%', label: 'Faster Decision Making' },
        { value: '25%', label: 'OpEx Reduction' },
        { value: 'High', label: 'Employee Autonomy' }
    ],
    icon: Layers
  },
  [toSlug('M&A Technology Integration')]: GENERATE_CAPABILITY('M&A Technology Integration', 'Unifying Systems, Realizing Synergies', 'Rapidly integrating technology stacks post-acquisition to realize value and minimize disruption.', TrendingUp),
  [toSlug('Enterprise Architecture')]: GENERATE_CAPABILITY('Enterprise Architecture', 'The Blueprint of Business', 'Holistic planning of business processes, information, and technology to optimize change.', Database),
  [toSlug('IT Cost Optimization')]: GENERATE_CAPABILITY('IT Cost Optimization', 'Lean IT, Maximum Impact', 'Strategic reduction of IT spend through modernization, vendor consolidation, and cloud economics.', BarChart3),
  [toSlug('Vendor Management Strategy')]: GENERATE_CAPABILITY('Vendor Management Strategy', 'Optimizing the Supply Chain', 'Managing third-party relationships to ensure performance, compliance, and value.', Users),

  // --- CLOUD ---
  [toSlug('Hybrid Cloud Orchestration')]: GENERATE_CAPABILITY('Hybrid Cloud Orchestration', 'Seamless Infrastructure', 'Managing workloads across private and public clouds with unified governance.', Cloud),
  [toSlug('Cloud Native Development')]: GENERATE_CAPABILITY('Cloud Native Development', 'Born in the Cloud', 'Building resilient, scalable applications using microservices and containers.', Cpu),
  [toSlug('DevSecOps Automation')]: GENERATE_CAPABILITY('DevSecOps Automation', 'Security at Speed', 'Integrating security into the CI/CD pipeline to ship faster and safer.', Shield),
  [toSlug('Mainframe Modernization')]: GENERATE_CAPABILITY('Mainframe Modernization', 'Unlocking Legacy Value', 'Migrating and refactoring legacy mainframe applications for the modern era.', Zap),
  [toSlug('Edge Computing')]: GENERATE_CAPABILITY('Edge Computing', 'Compute Everywhere', 'Processing data closer to the source to reduce latency and bandwidth use.', Globe),

  // --- CYBER ---
  [toSlug('Identity & Access Management (IAM)')]: GENERATE_CAPABILITY('Identity & Access Management', 'Zero Trust Foundation', 'Ensuring the right people have the right access to the right resources.', Shield),
  [toSlug('Cloud Security Posture Management')]: GENERATE_CAPABILITY('Cloud Security Posture', 'Visibility & Control', 'Automated compliance and risk assessment for dynamic cloud environments.', Shield),
  [toSlug('Penetration Testing & Red Teaming')]: GENERATE_CAPABILITY('Penetration Testing', 'Offensive Security', 'Simulating real-world attacks to identify and patch vulnerabilities before exploitation.', Shield),
  [toSlug('Governance, Risk & Compliance (GRC)')]: GENERATE_CAPABILITY('GRC', 'Aligned Assurance', 'Unified approach to managing regulatory requirements and enterprise risk.', FileCheck),
  [toSlug('Data Privacy & Protection')]: GENERATE_CAPABILITY('Data Privacy', 'Trust by Design', 'Safeguarding sensitive data and ensuring compliance with GDPR, CCPA, and global standards.', Shield),

  // --- DIGITAL EXPERIENCE ---
  [toSlug('UX/UI Design Strategy')]: GENERATE_CAPABILITY('UX/UI Design Strategy', 'Experience is Authority', 'Designing intuitive, high-impact digital interfaces that prioritize user intent and conversion.', Palette),
  [toSlug('Mobile App Engineering')]: GENERATE_CAPABILITY('Mobile App Engineering', 'The World in their Pocket', 'Developing high-performance iOS and Android applications for global scale.', Smartphone),
  [toSlug('Customer Data Platforms (CDP)')]: GENERATE_CAPABILITY('Customer Data Platforms', 'Unified Customer Intel', 'Centralizing customer data to create a 360-degree view for personalized engagement.', Database),
  [toSlug('E-commerce Optimization')]: GENERATE_CAPABILITY('E-commerce Optimization', 'Maximizing Digital Revenue', 'Fine-tuning the checkout funnel and product discovery to drive transactional growth.', ShoppingCart),
  [toSlug('AR/VR Immersive Experiences')]: GENERATE_CAPABILITY('AR/VR Immersive Experiences', 'The Future of Spatial Interaction', 'Creating immersive augmented and virtual reality environments for training, retail, and more.', Eye),

  // --- DIGITAL MARKETING ---
  [toSlug('Commercial Video & Photo Production')]: {
    title: 'Commercial Video & Photo Production',
    tagline: 'Cinematic Storytelling for Brands',
    description: 'In an attention economy, visual quality is a proxy for brand authority. We produce high-end commercial assets that capture the essence of your brand and convert viewers into advocates.',
    strategicImportance: 'Content is the fuel of digital marketing. Low-quality assets degrade brand perception. Premium video and photography elevate your narrative above the noise.',
    methodology: [
        { title: 'Creative Concepting', desc: 'Developing storyboards and visual styles that align with your campaign goals.' },
        { title: 'Production Execution', desc: 'End-to-end shoot management with cinema-grade equipment and expert crews.' },
        { title: 'Post-Production', desc: 'Editing, color grading, and VFX to deliver broadcast-ready assets.' }
    ],
    outcomes: [
        { value: '3x', label: 'Engagement Rate' },
        { value: 'Premium', label: 'Brand Perception' },
        { value: 'Multi', label: 'Channel Usage' }
    ],
    icon: Globe
  },
  [toSlug('Website Development & SEO')]: GENERATE_CAPABILITY('Website Development & SEO', 'Performance Engineering', 'Building high-speed, conversion-optimized web experiences that dominate search rankings.', Globe),
  [toSlug('Social Media Handling')]: GENERATE_CAPABILITY('Social Media Handling', 'Community & Culture', 'Strategic management of social channels to build community and drive brand loyalty.', Share2),
  [toSlug('Lead Generation & Paid Ads')]: GENERATE_CAPABILITY('Lead Generation & Paid Ads', 'Precision Targeting', 'Data-driven paid campaigns that maximize ROAS and fill the sales pipeline.', TrendingUp),
  [toSlug('Marketing Automation')]: GENERATE_CAPABILITY('Marketing Automation', 'Scalable Engagement', 'Automating customer journeys to deliver personalized experiences at scale.', Cpu),

  // --- SEO ---
  [toSlug('International SEO')]: GENERATE_CAPABILITY('International SEO', 'Global Reach, Local Relevance', 'Optimizing search presence across multiple languages and regions.', Globe),
  [toSlug('Technical SEO & Core Web Vitals')]: GENERATE_CAPABILITY('Technical SEO', 'Foundation of Search', 'Ensuring your site architecture and performance meet modern search engine standards.', Search),
  [toSlug('Content Strategy & clustering')]: GENERATE_CAPABILITY('Content Strategy', 'Authority Building', 'Creating topical clusters that establish domain authority and drive organic traffic.', Search),
  [toSlug('Migration SEO Support')]: GENERATE_CAPABILITY('Migration SEO', 'Preserving Value', 'Protecting rankings and traffic during site redesigns and migrations.', Search),
  [toSlug('Programmatic SEO')]: GENERATE_CAPABILITY('Programmatic SEO', 'Scale at Speed', 'Automating page generation to capture long-tail search demand.', Search),

  // --- AI ---
  [toSlug('Generative AI Solutions')]: GENERATE_CAPABILITY('Generative AI', 'Creative Automation', 'Deploying LLMs to automate content creation, code generation, and knowledge work.', Cpu),
  [toSlug('Predictive Analytics')]: GENERATE_CAPABILITY('Predictive Analytics', 'Future Insight', 'Using historical data to forecast trends and behaviors with high accuracy.', TrendingUp),
  [toSlug('Robotic Process Automation (RPA)')]: GENERATE_CAPABILITY('Robotic Process Automation (RPA)', 'Digital Workforce', 'Automating repetitive, rules-based tasks to free up human talent.', Cpu),
  [toSlug('Natural Language Processing')]: GENERATE_CAPABILITY('Natural Language Processing', 'Understanding Language', 'Enabling machines to understand and generate human language for chatbots and analysis.', Cpu),
  [toSlug('Computer Vision Systems')]: GENERATE_CAPABILITY('Computer Vision', 'Visual Intelligence', 'Automating visual inspection and analysis tasks using deep learning.', Cpu),

  // --- BRAND MANAGEMENT ---
  [toSlug('Corporate Rebranding')]: GENERATE_CAPABILITY('Corporate Rebranding', 'Identity Evolution', 'Orchestrating large-scale shifts in brand perception to align with new strategic directions.', Palette),
  [toSlug('Visual Identity Systems')]: GENERATE_CAPABILITY('Visual Identity Systems', 'A Language of Quality', 'Codifying colors, typography, and imagery into a unified system that scales globally.', Palette),
  [toSlug('Crisis Communications')]: GENERATE_CAPABILITY('Crisis Communications', 'Protecting Brand Equity', 'Strategic management of the narrative during high-stakes reputational challenges.', MessageCircle),
  [toSlug('Employer Branding')]: GENERATE_CAPABILITY('Employer Branding', 'Attracting the Elite', 'Positioning the organization as a premier destination for top-tier global talent.', UserPlus),
  [toSlug('Brand Governance')]: GENERATE_CAPABILITY('Brand Governance', 'Safeguarding the Standard', 'Ensuring absolute consistency in brand execution across every region and platform.', FileCheck)
};

export const getCapabilityData = (slug: string): CapabilityData | undefined => {
  return DATA[slug];
};