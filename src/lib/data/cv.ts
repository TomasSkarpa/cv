import { bataEventsLinks } from './bata-events';
import type { ExperienceEntry } from './types';

export const cv = {
  title: 'CV',
  subtitle: 'Tech Lead · Zlín, Czech Republic',
  summary: {
    title: 'Summary',
    paragraphs: [
      '**Tech Lead** specializing in improving delivery processes within e-commerce platforms. Experienced in building **scalable online retail systems** and enhancing user experience. I love owning solutions and providing guidance to colleagues.',
      "Tech lead at **Bata Group**, based in Zlín, leading **Salesforce B2C Commerce Cloud** delivery on the global digital platform. Progression from IT help desk through software engineer to tech lead within the same organization. Full-stack background from TAOX and earlier internships. Focused on **reliable releases, clear handoffs, Scrum practices**, and extending platform capabilities to match business needs.",
      'In my free time, I build apps for **fun and ease of use**.',
    ],
  },
  experience: [
    {
      company: 'Bata Group',
      meta: 'Full-time · 3 yrs 1 mo',
      roles: [
        {
          title: 'Tech Lead',
          period: 'Apr 2026 – Present',
          location: 'Zlín, Zlín, Czechia · Hybrid',
          details: [
            'Leading the **technical direction** of the ecommerce platform and its surrounding integrations.',
            'Reviewing, guiding, and being the go-to for difficult technical decisions the team faces daily, while remaining **hands-on with development**.',
            'Shaping team operations: defining delivery and operational processes, establishing documentation standards, maintaining strict Scrum practices, and identifying opportunities for automation.',
            "Guides developers on **deployable ESP configuration patterns**, building on the repository and deployment setup created for Bata's email platform.",
            'Created a repository with **monitoring guidance and AI-assisted analysis**, bridging the gap in understanding **MuleSoft and SFCC flows** that were hard to parse. Engineers and QA benefited as everyone grew their understanding of these implementations faster through the tool.',
          ],
          skills: 'Skills: Engineering Leadership, DevOps, and related areas.',
        },
        {
          title: 'Software Engineer',
          period: 'Jan 2024 – Apr 2026 · 2 yrs 4 mos',
          location: 'Zlín, Zlín, Czechia · Hybrid',
          details: [
            'Worked in the **Multichannel Development Centre**, focusing on the full stack of the ecommerce platform.',
            'Development work included server-side and client-side on **Salesforce B2C Commerce Cloud**, middleware, and AWS Lambda integrations.',
            'Handled **e2e automation**, primarily using **Python and Robot Framework**.',
            'Responsible for **onboarding and guiding colleagues** due to a wide remit and fast learning pace.',
            "Delivered **Bata Kenya**, the first non-ecommerce site on Bata's new digital platform.",
            "Built Bata's **ESP repository and deployment setup** for versioned email configuration.",
            'Strong hands-on work in **email templating and ESP platform configuration**.',
          ],
          skills: 'Skills: Salesforce.com, Test-Driven Development, and related areas.',
        },
        {
          title: 'Information Technology Help Desk',
          period: 'Jun 2023 – Jan 2024 · 8 mos',
          location: 'Zlín, Zlín, Czechia · Hybrid',
          details: [
            'Started by handling **L1/L2 requests** and account setup across Salesforce, JIRA, Confluence, and other platforms connected to the ecommerce solution.',
            'Incorporated development work on the side where appropriate.',
            'Contributed to **internal documentation** to increase team self-sufficiency, which eventually led to a full-time transition into the engineering team.',
          ],
          skills: 'Skills: Templating, JIRA, and related areas.',
        },
      ],
    },
    {
      company: 'Dům dětí a mládeže Bojkovice',
      meta: 'Part-time · Feb 2023 – Jun 2024 · 1 yr 5 mos',
      roles: [
        {
          title: 'English Language Instructor',
          period: 'Feb 2023 – Jun 2024 · 1 yr 5 mos',
          location: 'Bojkovice, Zlín, Czechia · On-site',
          details: [
            'Taught English on the side while working full-time, running both one-on-one tutoring sessions for younger kids and group conversation courses for elementary and high school students.',
            "Getting the same material to land for different age groups and skill levels turned out to be decent practice in **reading a room and adjusting on the fly**, something that carries over more than you'd expect.",
          ],
          skills: 'Skills: Teaching English as a Foreign Language, Classroom Instruction.',
        },
      ],
    },
    {
      company: 'TAOX s.r.o.',
      meta: 'Part-time · May 2022 – Jul 2023 · 1 yr 3 mos',
      roles: [
        {
          title: 'Frontend Developer',
          period: 'May 2022 – Jul 2023 · 1 yr 3 mos',
          location: 'Luhačovice, Zlín, Czechia · On-site',
          details: [
            'During my time at TAOX, I gained my first **commercial experience** by launching multiple website projects into production. I worked extensively with **Laravel**, especially Laravel Blade templates and styling. I was also responsible for maintaining older websites that were running on outdated PHP 5 versions.',
          ],
          skills: 'Skills: Front-end Coding, Laravel.',
        },
      ],
    },
    {
      company: 'ANYTHING STUDIO s.r.o.',
      meta: 'Internship · Feb 2022 – Jun 2022 · 5 mos',
      roles: [
        {
          title: 'Development Intern',
          period: 'Feb 2022 – Jun 2022 · 5 mos',
          location: 'Uherský Brod, Zlín, Czechia · Hybrid',
          details: [
            'First proper dev internship, got my hands dirty with the Nette framework by digging through an existing codebase and figuring out how things fit together.',
          ],
          skills: 'Skills: Nette, macOS.',
        },
      ],
    },
  ] satisfies ExperienceEntry[],
  volunteering: {
    title: 'Volunteering',
    entry: {
      title: "Bata Children's Program",
      meta: 'Bata Group · Jul 2023 – Present · 3 yrs',
      details: [
        "**Bata Children's Program** volunteer (Jul 2023 – present): helps organize Children Program events and Baťa stands at public events.",
        'Includes **LOT Conference tooling** and Zlín Film Festival coordination. Full story on the Volunteering page.',
      ],
      href: bataEventsLinks.volunteeringHref,
    },
  },
  certifications: [
    {
      title: 'Professional Scrum Developer I',
      issuer: 'Scrum.org · Issued Dec 2025',
      credentialId: 'Credential ID: 1282044',
      skills: 'Skills: Scrum, Agile Methodologies.',
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy · Issued Feb 2021',
      credentialId: 'Credential ID: 907e1d3a-4ebe-4e0b-b66a-3299c812c355',
      skills: 'Skills: Cybersecurity, Network Security.',
    },
    {
      title: 'CCNA R&S: Introduction to Networks',
      issuer: 'Cisco Networking Academy · Issued Jun 2019',
      credentialId: 'Credential ID: 4ffffff7-6a9a-4105-8eac-14fb477b85fe',
      skills: 'Skills: Computer Networking, Networking Fundamentals.',
    },
  ],
  coreSkills: {
    title: 'Core skills',
    top: ['Full-Stack Development', 'Continuous Process Improvement', 'Communication'],
    groups: [
      'JavaScript · React · Next.js · TypeScript',
      'Node.js · Laravel · PHP · Go · Python',
      'Salesforce B2C Commerce Cloud',
      'Tailwind CSS · Sass · Bootstrap',
      'Docker · GitHub Actions · Ansible · AWS',
      'Postman · Robot Framework',
      'Engineering Leadership · DevOps · Scrum',
    ],
    note: 'Full LinkedIn skills list with endorsements on the **Skills page**. Technology overview on the **Stack page**.',
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
