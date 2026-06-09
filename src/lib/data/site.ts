import type { NavItem, SocialLink } from './types';

export const site = {
  name: 'Tomáš Škarpa',
  title: 'Tech Lead · Bata Group',
  tagline: 'SFCC storefronts and integrations. Zlín, Czech Republic.',
  location: 'Zlín, Czech Republic',
  copyright: '© 2026 Tomáš Škarpa',
  email: 'tskarpam8@gmail.com',
  url: 'https://tomasskarpa.github.io/cv/',
  sourceRepo: 'https://github.com/TomasSkarpa/cv',
  sourceRepoLabel: 'github.com/TomasSkarpa/cv',
  linkedinUrl: 'https://www.linkedin.com/in/tomas-skarpa',
} as const;

export const headerNav: NavItem[] = [
  { label: 'Home', href: '/', shortLabel: 'Home' },
  { label: 'How I work', href: '/professional', shortLabel: 'Work' },
  { label: 'Outside work', href: '/personal', shortLabel: 'Personal' },
  { label: 'Stack', href: '/stack', shortLabel: 'Stack' },
  { label: 'CV', href: '/cv', shortLabel: 'CV' },
  { label: 'Projects', href: '/projects', shortLabel: 'Projects' },
  { label: 'Contact', href: '/contact', shortLabel: 'Contact' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'CV', href: '/cv' },
  { label: 'Projects', href: '/projects' },
  { label: 'Stack', href: '/stack' },
  { label: 'Contact', href: '/contact' },
  { label: 'Sitemap', href: '/sitemap' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/TomasSkarpa',
    network: 'github',
  },
  {
    label: 'LinkedIn',
    href: site.linkedinUrl,
    network: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/tomik.skarpa/',
    network: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tomascarpone/',
    network: 'instagram',
  },
  {
    label: 'Discord',
    href: 'https://discordapp.com/users/269135360192282624',
    network: 'discord',
  },
];

export const footerSocial = socialLinks;

export const allRoutes: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'How I work', href: '/professional' },
  { label: 'Outside work', href: '/personal' },
  { label: 'Stack', href: '/stack' },
  { label: 'CV', href: '/cv' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Recommendations', href: '/recommendations' },
  { label: 'Flagged It', href: '/projects/flagged-it' },
  { label: 'Bata Figurine Generation', href: '/projects/bata-figurine-generation' },
  { label: 'Volunteering', href: '/volunteering' },
  { label: 'Skills', href: '/skills' },
  { label: 'Sitemap', href: '/sitemap' },
];
