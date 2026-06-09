import type { ExploreCard, StartHerePath } from './types';

export const home = {
  role: 'Tech Lead · Bata Group',
  name: 'Tomáš Škarpa',
  intro:
    'I work on **SFCC storefronts** and **integrations** for a global shoe company. Based in **Zlín**.',
  tagline: '**Enterprise e-commerce.** Not a startup pitch deck.',
  ctaPrimary: { label: 'CV', href: '/cv' },
  ctaSecondary: { label: 'Projects', href: '/projects' },
} as const;

export const startHerePaths: StartHerePath[] = [
  {
    title: 'Hiring?',
    steps: [
      { label: 'CV', href: '/cv' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Technical review?',
    steps: [
      { label: 'Stack', href: '/stack' },
      { label: 'Projects', href: '/projects' },
      { label: 'How I work', href: '/professional' },
    ],
  },
];

export const exploreIntro =
  '**Five pages.** Each covers one slice of how I work and what I have shipped.';

export const exploreCards: ExploreCard[] = [
  {
    title: 'How I work',
    href: '/professional',
    mark: '01',
    theme: 'ink',
    description:
      'Teams, stakeholders, and platforms that cannot afford guesswork. **Delivery, ownership, trade-offs.**',
  },
  {
    title: 'Outside work',
    href: '/personal',
    mark: '02',
    theme: 'ink',
    description:
      'Side projects, sport, homelab. The parts that **do not fit a job title.**',
  },
  {
    title: 'Stack',
    href: '/stack',
    mark: '03',
    theme: 'ink',
    description:
      'Client, server, styling, DevOps. **What I reach for**, grouped by area.',
  },
  {
    title: 'CV',
    href: '/cv',
    mark: '04',
    theme: 'ink',
    description:
      'Intern to tech lead. **Bata Group**, TAOX, certifications.',
  },
  {
    title: 'Projects',
    href: '/projects',
    mark: '05',
    theme: 'ink',
    description:
      'SFCC delivery, event tooling, side projects. **Role, context, outcome.**',
  },
];

export const sideProject = {
  title: 'Flagged It',
  url: 'https://flaggedit.app/',
  href: '/projects/flagged-it',
  description:
    'Geography quiz app. **Flags, shapes, hangman.** Go backend, Svelte front. Built because I wanted it to exist.',
} as const;

export const bataEvents = {
  volunteering:
    "**Children's Program volunteer** since 2023. Baťa stand at **Zlín Film Festival** 2025 and 2026.",
  lotConference:
    '**LOT Conference 2025**, Prague: photo booth that turns your face into a **1940s Bata shoemaker figurine**. Python, Gemini, QR share, print for attendees.',
  githubUrl: 'https://github.com/TomasSkarpa/batamdc-figurine-generation',
  figurineHref: '/projects/bata-figurine-generation',
  volunteeringHref: '/volunteering',
} as const;

export const openToConversations = {
  text: '**Freelance, collaborations**, or a role where **commerce engineering** is the actual job.',
  cta: { label: 'Email me', href: '/contact' },
} as const;
