import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
  description?: string; // For Mega Menu details
  isMega?: boolean;     // Trigger for full-width menu
  isExternal?: boolean; // For external redirects
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  image?: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  path: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'upcoming' | 'past';
  description: string;
  image: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface SEOConfigItem {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  structuredData?: Record<string, unknown>;
}
