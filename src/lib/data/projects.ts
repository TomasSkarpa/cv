import type { ClientDeliveryGroup, ProjectEntry } from './types';

export const projects = {
  title: 'Projects',
  intro:
    'Shipped work with **role, context, and outcome**. Enterprise SFCC first; side projects and TAOX client delivery below.',
  sideProjects: {
    title: 'Side projects',
    items: [
      {
        slug: 'flagged-it',
        title: 'Flagged It',
        category: 'Side projects',
        subtitle: 'Creator & maintainer · https://flaggedit.app/',
        liveUrl: 'https://flaggedit.app/',
        githubUrl: 'https://github.com/TomasSkarpa/flagged-it',
        role: 'Creator, maintainer, full-stack developer',
        context:
          'Personal project to learn geography through play. Built for **fun and ease of use**, with ongoing maintenance and feature work.',
        description:
          'Learn countries through fun guessing games. Learn about countries playing different game modes: guessing games, flag recognition, shape identification, hangman, facts, and more.',
        contribution:
          'End-to-end product: **Go API backend, Svelte frontend**, deployment to flaggedit.app, versioning, and open-source maintenance.',
        outcome:
          'Public web app with **multiple game modes**, multilingual support, and active development. Educational tool used to explore geography interactively.',
        tags: ['Go', 'Svelte', 'Geography', 'Quiz', 'Web application'],
        topics: ['game', 'go', 'golang', 'web-application', 'quiz', 'geography', 'geography-quiz'],
      },
    ] satisfies ProjectEntry[],
  },
  enterprise: {
    title: 'Enterprise commerce',
    items: [
      {
        slug: 'bata-kenya',
        title: 'Bata Kenya Website',
        featured: true,
        category: 'Enterprise commerce',
        subtitle: 'Enterprise · Presentational SFCC · Bata',
        liveUrl: 'https://bata.com/ke',
        role: 'Tech Lead (Software Engineer at time of delivery)',
        context:
          "Bata's new digital platform was built for commerce. Kenya needed a **presentational site on the same stack** without a full e-commerce rollout.",
        contribution:
          'Developed the **first non-ecommerce website** on the platform: content structure, SFCC configuration, and front-end delivery aligned with the global architecture.',
        outcome:
          'Proved the platform could serve **regional marketing sites**, not only storefronts, and established a reusable pattern for similar rollouts.',
        tags: ['Salesforce B2C Commerce Cloud', 'XML', 'JavaScript'],
      },
      {
        slug: 'bata-figurine-generation',
        title: 'Bata Figurine Generation',
        category: 'Enterprise commerce',
        subtitle: 'Enterprise · Event tooling · AI photo booth · Bata',
        githubUrl: 'https://github.com/TomasSkarpa/batamdc-figurine-generation',
        role: 'Software Engineer',
        context:
          '**LOT Conference 2025**, Prague: interactive 1940s Bata shoemaker photo booth for the Leaders of Tomorrow Program.',
        contribution:
          'Built a **Python Flask app using Google Gemini AI** for image generation. Attendees take or upload a photo and receive a collectible-style 1/7 figurine render. Results shared via QR code (ImgBB hosting), with print-ready output for the event booth.',
        outcome:
          'Hands-on conference activity that let participants take home a **personalized 1940s shoemaker portrait**. Open-sourced on GitHub as batamdc-figurine-generation.',
        tags: ['Python', 'Flask', 'Google Gemini AI', 'HTML', 'QR codes', 'ImgBB'],
      },
    ] satisfies ProjectEntry[],
  },
  clientDelivery: {
    title: 'Client delivery (TAOX s.r.o.)',
    intro:
      '**Six sites** shipped during part-time front-end role (May 2022 – Jul 2023). **Laravel, PHP, Bootstrap**.',
    summary:
      '**Front-end developer** on agency client work: **Laravel Blade** from design to production, plus legacy **PHP** maintenance. Editorial, hospitality, **B2B services**, and **e-commerce** sites all went live.',
    stack: ['Laravel', 'PHP', 'Bootstrap', 'HTML/CSS', 'jQuery'],
    sites: [
      { title: 'VENKU', subtitle: 'Outdoor sport magazine', url: 'https://venku.online' },
      { title: 'Lázeňská káva', subtitle: 'Café network portal', url: 'https://kavarny.lazenskakava.cz' },
      { title: 'metrologie.cz', subtitle: 'Metrology services (B2B)', url: 'https://metrologie.cz' },
      { title: 'GSP Zborovice', subtitle: 'Industrial corporate site', url: 'https://gspzborovice.cz' },
      { title: 'Pilové kotouče', subtitle: 'Industrial e-commerce', url: 'https://pilove-kotouce.cz' },
      { title: 'Watthouse', subtitle: 'Solar energy corporate site', url: 'https://watthouse.cz' },
    ],
  } satisfies ClientDeliveryGroup,
  continueReading: [
    { label: 'Stack', href: '/stack' },
    { label: 'CV', href: '/cv' },
    { label: 'Professional approach', href: '/professional' },
    { label: 'Recommendations', href: '/recommendations' },
  ],
};
