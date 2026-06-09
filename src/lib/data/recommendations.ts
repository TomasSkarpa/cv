import type { Recommendation } from './types';

export const recommendations = {
  title: 'Recommendations',
  intro: 'Peer recommendations received on **LinkedIn**.',
  items: [
    {
      name: 'Petr Mičola',
      title: 'Senior QA Engineer · September 1, 2025',
      relationship: 'Managed Tomáš directly.',
      quote:
        "Tomáš is a very good talented software developer who is not afraid of any challenge. He has also excellent soft skills and I'm happy that I can work with him.",
    },
    {
      name: 'Federico De Pillis',
      title: 'Product Coach | Manager @BIP · July 1, 2025',
      relationship: 'Worked with Tomáš on the same team.',
      quote:
        'I had the pleasure of working with Tomas within the FA2A (From Anywhere to Anywhere) E-commerce program, where he worked as a SFCC Software Engineer. Thomas is a young and talented developer who stands out for his proactive attitude and openness to experimentation. He embraces Agile ways of working and brings energy and curiosity to every challenge.',
    },
    {
      name: 'Petr Balga',
      title: 'Software Engineer · June 17, 2025',
      relationship: 'Worked with Tomáš on the same team.',
      quote:
        "I would wholeheartedly recommend Tomáš Škarpa, an exceptional Software Engineer and an invaluable mentor during my onboarding at Baťa. Tomáš's deep technical knowledge and patient guidance were crucial in helping me quickly understand our systems and integrate effectively into the team. He's a true professional who consistently provides practical support and clear insights. Any team would greatly benefit from his expertise and collaborative spirit.",
    },
    {
      name: 'Harold Naicker',
      title: 'Cloud Engineer at Derivco · April 22, 2024',
      relationship: 'Worked with Tomáš but on different teams.',
      quote:
        'Tomas is an outstanding individual who possess excellent knowledge within his field. he is friendly and helpful. It was a pleasure and privilege to work with him.',
    },
  ] satisfies Recommendation[],
  continueReading: [
    { label: 'CV', href: '/cv' },
    { label: 'Professional approach', href: '/professional' },
  ],
};
