import type { ClientDeliveryGroup, ProjectEntry } from './types';

export const projects = {
  title: 'Projects',
  metaDescription:
    'Shipped SFCC work, side projects, and client sites with role, context, and outcome.',
  intro:
    'Shipped work with **role, context, and outcome**. Enterprise SFCC first; side projects and TAOX client delivery below.',
  sideProjects: {
    title: 'Side projects',
    items: [
      {
        slug: 'ossa',
        title: 'OSSA',
        category: 'Side projects',
        subtitle: 'Commerce reference · https://ecom.skarpa.dev/',
        liveUrl: 'https://ecom.skarpa.dev/',
        githubUrl: 'https://github.com/TomasSkarpa/ecom',
        role: 'Creator · tech lead portfolio showcase',
        context:
          'Needed an **ownable ecommerce demo** that shows storefront craft and **systems thinking**, not only employer SFCC work.',
        description:
          'Static anatomical footwear house: catalogue, client bag, honest checkout dead-end, interactive store skeleton, and admin ops demo.',
        contribution:
          'Designed brand + commerce UX, SvelteKit static storefront, Coolify deploy (`develop` → dev, `main` → prod), and narrative surfaces at `/bones` and `/admin`.',
        outcome:
          'Public reference at **ecom.skarpa.dev** for hiring conversations about commerce engineering and technical leadership.',
        tags: ['SvelteKit', 'TypeScript', 'Ecommerce', 'Coolify', 'Portfolio'],
      },
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
      {
        slug: 'task-skarpa',
        title: 'task.skarpa.dev',
        category: 'Side projects',
        subtitle: 'Personal productivity · https://task.skarpa.dev/',
        liveUrl: 'https://task.skarpa.dev/',
        role: 'Creator',
        context:
          'Needed a **low-friction daily list** that stays honest about one calendar day and picks up unfinished work tomorrow.',
        description:
          'Daily **task** list: one day on the homepage, Jira sync, day close with spillover, history.',
        contribution:
          'SvelteKit app, disk-backed day JSON, API skills for sync/close/add, and a homepage built for **today only**.',
        outcome:
          'Personal daily workflow at **task.skarpa.dev**, wired into Cursor skills and Jira.',
        tags: ['SvelteKit', 'TypeScript', 'Jira', 'Personal productivity'],
      },
      {
        slug: 'eventfoto',
        title: 'Eventfoto (AI Fotokoutek)',
        category: 'Side projects',
        subtitle: 'Side business · https://eventfoto.cz/',
        liveUrl: 'https://eventfoto.cz/',
        role: 'Creator · operator · full-stack',
        context:
          'Turn a conference figurine booth into a **rentable product**: guests photographed, AI keeps identity and changes scene, QR to Immich, print at the event.',
        description:
          'AI event photo booth · Marketing site, guest kiosk, operator console.',
        contribution:
          'Next.js + Payload CMS, kiosk and operator flows, identity-preserving OpenAI edits, Coolify prod/staging, cookieless Umami analytics.',
        outcome:
          'Live at **eventfoto.cz** with staging on dev-fotokoutek.skarpa.dev; used at public events.',
        tags: ['Next.js', 'Payload CMS', 'OpenAI', 'Immich', 'Coolify', 'Event tooling'],
      },
    ] satisfies ProjectEntry[],
  },
  enterprise: {
    title: 'Enterprise commerce',
    items: [
      {
        slug: 'bata-ai-brain',
        title: 'Bata AI Brain',
        category: 'Enterprise commerce',
        subtitle: 'Enterprise · AI platform · Bata',
        liveUrl: 'https://ai.batamdc.com/',
        role: 'Tech Lead · architecture and catalog design',
        context:
          'Commerce and integration teams needed **one place for team-approved AI instructions**, not scattered prompts and personal skill folders.',
        contribution:
          'Designed the catalog model (**versioned skills and agents, categories, clearance levels**) and delivery through **MCP plus REST** so engineers load exact pins in Cursor and Codex.',
        outcome:
          'Shared Brain at **ai.batamdc.com** for SFCC runbooks, Jira formats, analysis agents, and delivery docs across the team.',
        tags: [
          'MCP',
          'REST API',
          'AI tooling',
          'Knowledge catalog',
          'Salesforce B2C Commerce Cloud',
        ],
      },
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
