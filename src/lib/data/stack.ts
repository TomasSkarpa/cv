import type { SkillCategory } from './types';

export const stack = {
  title: 'Stack',
  intro: [
    'Technologies I work with across **commerce delivery**, client projects, and side work. A quick reference, not a detailed skills breakdown.',
    'For shipped work and context, see **Projects**. For the full LinkedIn skills list, see **Skills**.',
  ],
  flaggedItUrl: 'https://flaggedit.app/',
  flaggedItHref: '/projects/flagged-it',
  skillsHref: '/skills',
  areas: [
    {
      title: 'Commerce & platforms',
      description:
        'Primary focus at Bata Group: **storefronts, configuration, email templating, ESP deployment**, and surrounding integrations. Earlier work included two custom systems: an e-commerce platform in Perl and a CMS in PHP/Laravel.',
      items: [
        'Salesforce B2C Commerce Cloud',
        'Enterprise e-commerce delivery',
        'Middleware and platform integrations',
        'Email templating and ESP configuration',
        'ESP repository and versioned deployment setup',
        'Strapi',
        'Radial',
        'Necore',
        'Marigold Campaign',
        'Marigold Engage',
        'Custom e-commerce platform (Perl)',
        'Custom CMS (PHP/Laravel)',
      ],
    },
    {
      title: 'Frontend',
      description: 'Storefronts, presentational sites, and **client-facing UI**.',
      items: [
        'JavaScript',
        'React',
        'Next.js',
        'Svelte',
        'Bootstrap',
        'Tailwind CSS',
        'Sass',
      ],
    },
    {
      title: 'Backend & scripting',
      description:
        'APIs, automation, and server-side work across agency and enterprise projects, including **AWS Lambda** for the integration layer.',
      items: ['Node.js', 'PHP', 'Laravel', 'Python', 'Go', 'AWS Lambda'],
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud services, containers, and **release automation**.',
      items: [
        'AWS services',
        'Docker',
        'GitHub Actions',
        'Ansible',
        'Bitbucket Pipelines',
      ],
    },
    {
      title: 'Testing & quality',
      description: 'API checks, automated QA, and **e2e coverage** where releases need it.',
      items: ['Postman', 'Bruno', 'Robot Framework', 'Node.js and Python test automation'],
    },
  ] satisfies SkillCategory[],
  sideProject: {
    title: 'Side project stack',
    body: '**Flagged It** (https://flaggedit.app/): Go API, Svelte frontend, deployed and maintained as an **open-source geography quiz**.',
    href: '/projects/flagged-it',
    url: 'https://flaggedit.app/',
  },
  continueReading: [
    { label: 'Projects', href: '/projects' },
    { label: 'CV', href: '/cv' },
    { label: 'Skills', href: '/skills' },
  ],
};
