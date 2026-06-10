import { site } from './site';

export const contact = {
  metaDescription:
    'Contact Tomáš Škarpa in Zlín. Email, LinkedIn, GitHub. Open to remote collaboration.',
  locationNote: 'Based in **Zlín, Czech Republic**. Open to **remote collaboration**.',
  directLinks: {
    email: { label: 'Email', value: 'tskarpam8@gmail.com', href: 'mailto:tskarpam8@gmail.com' },
    sourceCode: {
      label: 'Source code',
      value: site.sourceRepoLabel,
      href: site.sourceRepo,
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'linkedin.com/in/tomas-skarpa',
      href: site.linkedinUrl,
    },
    github: {
      label: 'GitHub',
      value: 'github.com/TomasSkarpa',
      href: 'https://github.com/TomasSkarpa',
    },
    instagram: {
      label: 'Instagram',
      value: '@tomascarpone',
      href: 'https://www.instagram.com/tomascarpone/',
    },
  },
} as const;
