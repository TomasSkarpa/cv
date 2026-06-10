import { bataEventsLinks } from './bata-events';

export const volunteering = {
  title: 'Volunteering',
  metaDescription:
    "Bata Children's Program volunteer and event work at Zlín Film Festival and LOT Conference.",
  bataChildren: {
    title: "Bata Children's Program",
    meta: 'Bata Group · Jul 2023 – Present · 3 yrs',
    body: "Started as a volunteer for the **Bata Children's Program**. Later took on organizing Children Program events for Bata, including **operational setup and coordination** on the ground.",
  },
  connectedEvents: {
    title: 'Connected event work',
    intro:
      'The volunteering role and day-job work at Bata often overlap at **public events in Zlín and beyond**:',
    zlinFilm: {
      title: 'Zlín Film Festival',
      items: [
        "Operational organization of the **Baťa stand** at Zlín Film Festival 2025 as part of the Children's Program.",
        '66th Zlín Film Festival 2026: ran part of the **half-marathon** while organizing the Baťa stand again. Another year surrounded by great people over an unforgettable weekend.',
      ],
    },
    lotConference: {
      title: 'Leaders of Tomorrow LOT Conference 2025 (Prague)',
      body: 'Software engineer support for the second year at the conference. Built the **Bata Figurine Generation Python app** (Google Gemini AI) so attendees could generate a 1940s Bata shoemaker figurine from a photo, with QR sharing and print-ready keepsakes.',
      githubUrl: bataEventsLinks.githubUrl,
      figurineHref: bataEventsLinks.figurineHref,
    },
  },
  throughLine: {
    title: 'Through-line',
    body: 'Volunteering with children, teaching English to kids and teens, and building interactive event tooling at Baťa events share the same thread: **showing up for people**, adapting to the room, and making experiences work on the day.',
  },
  continueReading: [
    { label: 'Personal approach', href: '/personal' },
    { label: 'CV', href: '/cv' },
    { label: 'Projects', href: '/projects' },
    { label: 'Bata Figurine Generation', href: bataEventsLinks.figurineHref },
  ],
};
