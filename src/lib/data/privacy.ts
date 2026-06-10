import { site } from './site';

export const privacy = {
  title: 'Privacy',
  metaDescription: 'What this personal CV site collects and why. Minimal tracking when hosted on Vercel.',
  subtitle: 'What this site collects and why.',
  intro: [
    'This site is a **personal working CV**. I keep tracking **minimal** and explain what runs when you visit.',
  ],
  sections: [
    {
      id: 'operator',
      title: 'Who runs this site',
      paragraphs: [
        `${site.name} · ${site.location} · ${site.email}`,
      ],
    },
    {
      id: 'analytics',
      title: 'Analytics and performance',
      paragraphs: [
        'When the site is hosted on **Vercel**, I use **Vercel Web Analytics** for anonymized page views (top pages, referrers, country, browser, device type) and **Vercel Speed Insights** for anonymized **Core Web Vitals** (load time, layout stability, interactivity).',
        'Both are privacy-focused: **no third-party ad cookies**, no cross-site tracking, no personal profiles. Vercel identifies visitors with a **daily hash** from the request, not a persistent cookie.',
      ],
      links: [
        {
          label: 'Vercel Web Analytics privacy',
          href: 'https://vercel.com/docs/analytics/privacy-policy',
        },
        {
          label: 'Vercel Speed Insights privacy',
          href: 'https://vercel.com/docs/speed-insights/privacy-policy',
        },
      ],
      note: 'These tools load only on the **Vercel deployment**. They do not run on other hosts (for example GitHub Pages preview).',
    },
    {
      id: 'contact',
      title: 'Contact',
      paragraphs: [
        'The contact page opens your email client via **`mailto:`**. I do **not** store messages on this static site.',
      ],
    },
    {
      id: 'choices',
      title: 'Your choices',
      paragraphs: [
        'This site does **not** use marketing or advertising cookies. Because Vercel Analytics and Speed Insights are **cookieless** in their default setup, I do **not** show a cookie consent banner.',
        'If you block analytics scripts in your browser, the site still works. You may see fewer metrics on my side, which is fine.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes',
      paragraphs: ['I will update this page if tracking changes. **Last updated: June 2026.**'],
    },
  ],
} as const;
