import { NavItem } from '../types';
import { SERVICES, INDUSTRIES } from './content';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'CAPABILITIES',
    path: '/services',
    isMega: true,
    description: "Ten specialized practices engineered for enterprise transformation at global scale.",
    children: SERVICES.map(s => ({ label: s.title, path: s.path, description: s.description }))
  },
  {
    label: 'INDUSTRIES',
    path: '/industries',
    isMega: true,
    description: "Deep vertical expertise across the world's most demanding sectors.",
    children: INDUSTRIES.map(i => ({ label: i.title, path: i.path, description: i.description }))
  },
  {
    label: 'PLATFORMS',
    path: '/platforms',
    children: [
      { label: 'OnsecBoard', path: '/platforms#onsecboard', description: 'Enterprise governance and strategic oversight platform.' },
      { label: 'OnsecEmployee', path: '/platforms#onsecemployee', description: 'Integrated workforce experience and talent management suite.' }
    ]
  },
  { label: 'INSIGHTS', path: '/insights' },
  { label: 'CAREERS', path: '/careers' },
  {
    label: 'ABOUT',
    path: '/about',
    children: [
      { label: 'Our Genesis', path: '/about', description: 'The founding vision and principles behind Onsective.' },
      { label: 'Leadership', path: '/about', description: 'Meet the partners guiding our global practice.' },
      { label: 'Investors', path: '/investors', description: 'Institutional reporting, governance, and shareholder relations.' },
      { label: 'Events', path: '/events', description: 'Executive forums, summits, and industry engagements.' }
    ]
  },
];
