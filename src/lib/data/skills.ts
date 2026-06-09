import type { SkillCategory } from './types';

export const skills = {
  title: 'Skills',
  intro: 'LinkedIn skills profile.',
  linkedinUrl: 'https://linkedin.com/in/tomas-skarpa',
  topSkills: {
    title: 'Top skills (LinkedIn)',
    items: ['Full-Stack Development', 'Continuous Process Improvement', 'Communication'],
  },
  categories: [
    {
      title: 'Leadership & management',
      items: [
        'Engineering Leadership',
        'Software Project Management',
        'Team Management',
        'Customer Satisfaction',
        'Continuous Process Improvement',
        'Communication',
        'Teaching English as a Foreign Language',
        'Customer Service Training',
        'Financial Planning',
        'Cash Management',
      ],
    },
    {
      title: 'Core development & engineering',
      items: [
        'Software Development',
        'Web Development',
        'Backend Development',
        'Computer Engineering',
        'Mobile Application Development',
        'Web Services Development',
        'System Administration',
        'Microservices',
        'Automated Software Testing',
      ],
    },
    {
      title: 'Frontend',
      items: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'HTML',
        'HTML5',
        'Cascading Style Sheets (CSS)',
      ],
    },
    {
      title: 'Backend & languages',
      items: [
        'Node.js',
        'Python',
        'PHP',
        'Laravel',
      ],
    },
    {
      title: 'Cloud, DevOps & infrastructure',
      items: [
        'DevOps',
        'Cloud Computing',
        'Amazon Web Services (AWS)',
        'Docker',
        'Linux Servers',
        'Web Hosting Services',
        'Google Firebase',
      ],
    },
    {
      title: 'Databases',
      items: ['Redis', 'PostgreSQL'],
    },
    {
      title: 'Networking & security',
      items: [
        'Computer Networking',
        'Networking',
        'Cybersecurity',
        'Network Security',
        'Information Security',
        'Cyberdefense',
      ],
    },
    {
      title: 'General IT & tools',
      items: [
        'Information Technology',
        'Web Applications',
        'Data Analysis',
        'Git',
      ],
    },
    {
      title: 'Also in day-to-day work (site stack)',
      items: [
        'Salesforce B2C Commerce Cloud',
        'Go',
        'Svelte',
        'Tailwind CSS · Sass · Bootstrap',
        'GitHub Actions · Ansible',
        'Postman · Robot Framework',
        'Scrum · Agile Methodologies',
      ],
    },
  ] satisfies SkillCategory[],
  note: 'Full technology breakdown with depth levels on the Stack page.',
  stackHref: '/stack',
  continueReading: [
    { label: 'Stack', href: '/stack' },
    { label: 'CV', href: '/cv' },
    { label: 'Professional approach', href: '/professional' },
  ],
};
