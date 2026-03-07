import { NavItem } from '../types';
import { SERVICES, INDUSTRIES } from './content';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'CAPABILITIES',
    path: '/services',
    isMega: true,
    description: "Architecting proprietary systems for the world's most sophisticated enterprise organizations.",
    children: SERVICES.map(s => ({ label: s.title, path: s.path, description: s.description }))
  },
  {
    label: 'INDUSTRIES',
    path: '/industries',
    isMega: true,
    description: "Architecting proprietary systems for the world's most sophisticated enterprise organizations.",
    children: INDUSTRIES.map(i => ({ label: i.title, path: i.path, description: i.description }))
  },
  {
    label: 'PLATFORMS',
    path: '/platforms',
    children: [
      { label: 'OnsecBoard', path: '/platforms/onsecboard', description: 'Institutional Governance Platform.' },
      { label: 'OnsecEmployee', path: '/platforms/onsecemployee', description: 'Next-Gen Workforce Experience.' }
    ]
  },
  { label: 'INSIGHTS', path: '/insights' },
  { label: 'CAREERS', path: '/careers' },
  {
    label: 'ABOUT',
    path: '/about',
    children: [
      { label: 'Our Genesis', path: '/about', description: 'The foundation of Onsective.' },
      { label: 'Leadership', path: '/about#leadership', description: 'Meet our senior partners.' },
      { label: 'Investors', path: '/investors', description: 'Strategic reporting and governance.' },
      { label: 'Events', path: '/events', description: 'Institutional Engagement Calendar.' }
    ]
  },
];