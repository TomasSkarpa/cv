export const ossa = {
  title: 'OSSA',
  metaDescription:
    'OSSA: static commerce reference storefront. Catalogue, bag, checkout dead-end, store skeleton map, and admin demo. Tech lead portfolio showcase.',
  url: 'https://ecom.skarpa.dev/',
  githubUrl: 'https://github.com/TomasSkarpa/ecom',
  tagline: 'Anatomical footwear house · **commerce systems demo** for a tech lead portfolio',
  description: [
    '**OSSA** is a static SvelteKit storefront used as an ecommerce **reference**, not a live shop. Shoppers can browse, hold a bag, and reach an honest checkout dead-end with **no payment**.',
    'The differentiators for technical leadership are the **store skeleton** (`/bones`): catalogue → order → fulfilment as anatomy, and the **admin demo** (`/admin`): ops UI without inventing a fake backend.',
    'Hosted on Coolify (`ecom.skarpa.dev` / `dev-ecom.skarpa.dev`). Stack matches [skarpa.dev](https://skarpa.dev/).',
  ],
  highlights: {
    title: 'What to open',
    items: [
      'Shop path: Footwear → PDP → bag → checkout dead-end',
      '/bones — interactive ecommerce body map',
      '/admin — fulfilment / search / content demo workspace',
      'Brand and campaign surfaces (archive, size guide)',
    ],
  },
  technicalStack: {
    title: 'Technical stack',
    items: [
      'SvelteKit 2 + Svelte 5 (static adapter)',
      'TypeScript, custom CSS, Tabler icons',
      'Client bag (localStorage); no payments or OMS',
      'Coolify + nginx Docker image; develop → dev, main → prod',
      'Optional offline Python image pipeline (uploads disabled)',
    ],
  },
  role: {
    title: 'Role',
    body: '**Creator.** Designed as a **commerce engineering showcase**: coherent shopper UX plus explicit systems and ops narrative for hiring conversations.',
  },
  breadcrumb: { parent: 'Projects', parentHref: '/projects' },
  continueReading: [
    { label: 'Projects', href: '/projects' },
    { label: 'How I work', href: '/professional' },
    { label: 'Stack', href: '/stack' },
  ],
};
