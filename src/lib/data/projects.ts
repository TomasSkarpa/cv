import type { ProjectEntry } from './types';

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
        liveUrl: 'https://bata.co.ke',
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
          "Leaders of Tomorrow Program Bata Group 2025 and the LOT Conference in Prague needed an interactive activity tied to the 1940s Bata shoemaker theme. Part of broader Baťa event work alongside Bata Children's Program volunteering and Zlín Film Festival stand organization.",
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
      'Website projects shipped during part-time frontend developer role (May 2022 – Jul 2023). **Laravel, PHP, Bootstrap**.',
    items: [
      {
        title: 'VENKU (venku.online / venku.cz)',
        category: 'Client delivery',
        subtitle: 'Online magazine',
        role: 'Front-end developer',
        context: 'Online magazine focused on cycling, outdoor sport, and an active lifestyle.',
        contribution:
          'Developed front-end for a platform dedicated to outdoor activities and events, featuring articles, gear recommendations, and cycling tips.',
        outcome: 'Production editorial product connecting sport content with a growing outdoor community.',
        tags: ['HTML5', 'CSS', 'PHP 7.4', 'Laravel 8.83', 'Bootstrap 4'],
      },
      {
        title: 'Lázeňská káva (kavarny.lazenskakava.cz)',
        category: 'Client delivery',
        subtitle: 'Portal · Café network',
        role: 'Front-end developer',
        context: 'Regional café chain needed a portal to showcase locations and refresh their online presence.',
        contribution:
          'Developed front-end for a portal showcasing café locations, enhancing the online presence of the café chain.',
        outcome: 'Unified digital entry point for a multi-location café network.',
        tags: ['HTML5', 'PHP 7.4', 'Laravel 8.83', 'Bootstrap 4'],
      },
      {
        title: 'networks.coach',
        category: 'Client delivery',
        subtitle: 'Coaching & networking site',
        role: 'Front-end developer',
        context: 'Coaching and networking service site.',
        contribution: 'Developed front-end for coaching and networking service site.',
        outcome: 'Coaching and networking service site in production.',
        tags: [],
      },
      {
        title: 'metrologie.cz',
        category: 'Client delivery',
        subtitle: 'Services website',
        role: 'Developer',
        context: 'Services site covering measurement equipment, calibration, and training offerings.',
        contribution:
          'Contributed to development of a professional metrology services website offering measurement equipment, calibration, and training resources.',
        outcome: 'Clear service presentation for a technical B2B audience.',
        tags: ['HTML5', 'CSS', 'PHP 7.4', 'Laravel 8.83', 'Bootstrap 4'],
      },
      {
        title: 'GSP Zborovice (gspzborovice.cz)',
        category: 'Client delivery',
        subtitle: 'Corporate website',
        role: 'Front-end developer',
        context: 'Manufacturer of saw blades and cutting tools needed a product and company presence online.',
        contribution:
          'Contributed to development of a website for GSP Zborovice, a manufacturer specializing in saw blades and cutting tools.',
        outcome: 'Production corporate site supporting brand and product discovery for an industrial B2B audience.',
        tags: ['HTML5', 'PHP 7.4', 'Laravel 8.83', 'Bootstrap 4'],
      },
      {
        title: 'Pilové kotouče (pilove-kotouce.cz)',
        category: 'Client delivery',
        subtitle: 'E-commerce',
        role: 'Front-end developer',
        context: 'Online catalog and purchasing for saw blades and cutting tools.',
        contribution:
          'Contributed to development of e-commerce site for saw blades and cutting tools, facilitating online product browsing and purchasing.',
        outcome: 'Live B2B/B2C purchasing channel for a specialized industrial product line.',
        tags: ['HTML5', 'PHP', 'Bootstrap', 'jQuery'],
      },
      {
        title: 'Watthouse (watthouse.cz)',
        category: 'Client delivery',
        subtitle: 'Corporate website · Solar energy',
        role: 'Front-end developer',
        context:
          "Watthouse provides solar energy systems installation and maintenance, showcasing their portfolio and services.",
        contribution:
          "Helped deploy and did development for Watthouse's website.",
        outcome: 'Corporate website showcasing solar energy systems installation and maintenance portfolio.',
        tags: ['Front-end Coding', 'Laravel'],
      },
    ] satisfies ProjectEntry[],
  },
  continueReading: [
    { label: 'Stack', href: '/stack' },
    { label: 'CV', href: '/cv' },
    { label: 'Professional approach', href: '/professional' },
    { label: 'Recommendations', href: '/recommendations' },
  ],
};
