import { NavItem } from '../types';
import { SERVICES } from './content';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'SERVICES',
    path: '/services',
    isMega: true,
    description: 'IT consulting services for small and mid-sized businesses.',
    children: SERVICES.map(s => ({ label: s.title, path: s.path, description: s.description }))
  },
  { label: 'PRICING', path: '/pricing' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
];
