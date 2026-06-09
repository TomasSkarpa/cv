import { bataEventsLinks } from './bata-events';
import type { ExperienceEntry } from './types';

export const cv = {
  title: 'CV',
  subtitle: 'Tech Lead · Zlín, Czech Republic',
  summary: {
    title: 'Summary',
    paragraphs: [
      'Tech Lead at Bata Group in Zlín. I run **Salesforce B2C Commerce Cloud** delivery: storefronts, integrations, and release practices on the global platform.',
      'Help desk to tech lead in three years at the same company. TAOX and internships before that. Still hands-on, still focused on clear handoffs and docs. Side projects for fun.',
    ],
  },
  experience: [
    {
      company: 'Bata Group',
      meta: 'Full-time · 3 yrs 1 mo · Zlín · Hybrid',
      roles: [
        {
          title: 'Tech Lead',
          period: 'Apr 2026 – Present',
          location: '',
          details: [
            '**Technical direction** for ecommerce and integrations; **hands-on** on the hard calls.',
            'Reviewing and guiding **daily technical decisions**; **mentoring** developers on delivery and platform patterns.',
            '**Delivery process**, docs standards, **Scrum**, and **deployment automation**.',
            '**MuleSoft/SFCC monitoring repo** with AI-assisted docs so engineers and QA parse flows faster.',
          ],
        },
        {
          title: 'Software Engineer',
          period: 'Jan 2024 – Apr 2026 · 2 yrs 4 mos',
          location: '',
          details: [
            '**Multichannel Development Centre**: server and client **SFCC**, middleware, and **email templating** in production.',
            'Full stack **SFCC**, middleware, **AWS Lambda**; **Python/Robot** e2e automation; **onboarding** colleagues.',
            '**Bata Kenya**: first **presentational site** on the new SFCC platform; reusable pattern for **regional rollouts**.',
            "**ESP repository** for versioned email configuration and templating.",
          ],
        },
        {
          title: 'IT Help Desk',
          period: 'Jun 2023 – Jan 2024 · 8 mos',
          location: '',
          details: [
            '**L1/L2** support, account setup, internal docs; bridge into the **engineering team**.',
          ],
        },
      ],
    },
    {
      company: 'Dům dětí a mládeže Bojkovice',
      meta: 'Part-time · English instructor · Bojkovice',
      roles: [
        {
          title: 'English Language Instructor',
          period: 'Feb 2023 – Jun 2024',
          location: '',
          details: [
            '**One-on-one and group English instruction** for youth learners; **adapted curriculum and delivery** to age, proficiency, and classroom dynamics.',
          ],
        },
      ],
    },
    {
      company: 'TAOX s.r.o.',
      meta: 'Part-time · Front-end · Luhačovice',
      roles: [
        {
          title: 'Frontend Developer',
          period: 'May 2022 – Jul 2023',
          location: '',
          details: [
            '**First commercial launches** on **Laravel/Blade**; maintained legacy **PHP 5** sites.',
          ],
        },
      ],
    },
    {
      company: 'ANYTHING STUDIO s.r.o.',
      meta: 'Internship · Uherský Brod',
      roles: [
        {
          title: 'Development Intern',
          period: 'Feb 2022 – Jun 2022',
          location: '',
          details: ['**Nette** codebase exploration; first proper dev internship.'],
        },
      ],
    },
  ] satisfies ExperienceEntry[],
  volunteering: {
    title: 'Volunteering',
    entry: {
      title: "Bata Children's Program",
      meta: 'Jul 2023 – Present',
      summary:
        "**Children's Program** volunteer: **LOT figurine booth** (Gemini AI), **Zlín Film Festival** stand coordination, and broader event organization.",
      href: bataEventsLinks.volunteeringHref,
    },
  },
  certifications: [
    {
      title: 'Professional Scrum Developer I',
      issuer: 'Scrum.org · 2025',
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy · 2021',
    },
    {
      title: 'CCNA R&S: Introduction to Networks',
      issuer: 'Cisco Networking Academy · 2019',
    },
  ],
  coreSkills: {
    title: 'Core skills',
    top: ['Full-Stack Development', 'Continuous Process Improvement', 'Communication'],
    groups: [
      '**Frontend:** JavaScript · React · Next.js · TypeScript · Svelte · Tailwind · Sass',
      '**Backend & cloud:** Node.js · PHP · Laravel · Python · Go · AWS · Docker · Ansible',
      '**Commerce & delivery:** Salesforce B2C Commerce Cloud · SFCC integrations · DevOps · Scrum',
      '**Quality and testing:** Postman · Robot Framework · GitHub Actions',
    ],
    note: 'Full list on **Skills**; tools and areas on **Stack**.',
    skillsHref: '/skills',
    stackHref: '/stack',
  },
  contact: {
    email: 'tskarpam8@gmail.com',
    linkedin: 'linkedin.com/in/tomas-skarpa',
    github: 'github.com/TomasSkarpa',
  },
  continueReading: [
    { label: 'Projects', href: '/projects' },
    { label: 'Professional approach', href: '/professional' },
    { label: 'Recommendations', href: '/recommendations' },
    { label: 'Volunteering', href: '/volunteering' },
    { label: 'Skills', href: '/skills' },
  ],
};
