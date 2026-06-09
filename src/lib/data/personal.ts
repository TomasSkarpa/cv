import type { ContinueReadingLink } from './types';

export const personal = {
  title: 'Outside work',
  intro: [
    'Outside client work I learn by building: homelab automation, game server ops, geography games, and side projects that keep my tooling instincts sharp. In my free time, I build apps for fun and ease of use.',
    'Most downtime goes to time with my girlfriend, computer games, movies, TV shows, and anime, with the occasional plan for something more adventurous outdoors.',
    'I value consistency over hype, and I bring the same curiosity to the court or the trail as I do to debugging a staging deployment.',
  ],
  values: [
    {
      title: 'Continuous improvement',
      body: 'From intern to tech lead in four years, I treat career growth as deliberate practice: harder problems, clearer communication, and more ownership each step.',
    },
    {
      title: 'Reliability over spectacle',
      body: 'Backups, monitoring, and boring infrastructure matter. Whether it is a modded game server or a commerce release, I optimize for things staying up.',
    },
    {
      title: 'Balance through movement',
      body: 'Sport and outdoor activity keep me grounded. Team sports, occasional runs, and endurance events train the same patience useful for long platform migrations and multi-sprint deliveries.',
    },
  ],
  interests: {
    sideProjects: {
      title: 'Side projects & educational apps',
      body: 'Creator and maintainer of Flagged It (https://flaggedit.app/): learn geography through interactive country games. Flag guessing, hangman, facts, shape identification, and more. Go backend, Svelte frontend, GPL-3.0.',
      extra: 'Also builds small educational game projects and everyday utility tools for fun.',
      note: 'GitHub pinned repos include flagged-it and hermes-notes.',
      flaggedItHref: '/projects/flagged-it',
      flaggedItUrl: 'https://flaggedit.app/',
    },
    homelab: {
      title: 'Homelab & automation',
      body: 'Docker, Home Assistant, custom Lovelace cards, and scripted workflows. I treat personal infrastructure as a sandbox for orchestration and reliability patterns.',
    },
    gameServers: {
      title: 'Game server hosting',
      body: 'Modded server administration, automated backups, and performance tuning for stable multiplayer experiences.',
    },
    sport: {
      title: 'Sport & movement',
      items: [
        'Volleyball for several years with Tělovýchovná jednota Bojkovice, from juniors through men\'s teams, before moving on to basketball.',
        'Basketball in free time now. Also biking, swimming, and picking up a racket or paddle when someone suggests it: badminton, tennis, ping pong.',
        'Beer pong 🍺 — a social sport with generous latency tolerance. If the shot misses, the cup was definitely misaligned.',
        'Running occasionally, including partial company half-marathon runs at Baťa events such as Zlín Film Festival.',
        'Building the VENKU outdoor magazine front end connected professional work with personal interest in movement and sport.',
      ],
      volleyballUrl: 'https://www.cvf.cz/cvs/oddily/?oddil=3711006',
    },
    downtime: {
      title: 'Downtime',
      items: [
        'Time with my girlfriend.',
        'Computer games, movies, TV shows, and anime.',
        'Occasional trips and small adventures planned around getting outside when the mood strikes.',
      ],
    },
  },
  community: {
    title: 'Community, volunteering & events',
    intro:
      "Bata Children's Program volunteer (Bata Group, Jul 2023 – Present): started as a program volunteer, then helped organize Children Program events.",
    zlinFilm: {
      title: 'Zlín Film Festival',
      items: [
        "Operational organization of the Baťa stand at Zlín Film Festival 2025 through the Children's Program.",
        '66th Zlín Film Festival 2026: ran part of the half-marathon while organizing the Baťa stand again. Another year surrounded by great people over an unforgettable weekend.',
      ],
    },
    lotConference: {
      title: 'Leaders of Tomorrow LOT Conference 2025 (Prague)',
      body: 'Software engineer support for the second year at the conference. Built a Python app using Google Gemini AI so attendees could generate a 1/7 scale 1940s Bata shoemaker figurine from their photo, with QR sharing and printed keepsakes.',
      githubUrl: 'https://github.com/TomasSkarpa/batamdc-figurine-generation',
      figurineHref: '/projects/bata-figurine-generation',
    },
    volunteeringHref: '/volunteering',
  },
  teaching: {
    title: 'Teaching',
    body: 'English language instructor (part-time, 2023–2024): one-on-one tutoring and group conversation courses for kids and teens. Practice in reading a room and adapting material to different ages and skill levels.',
  },
  collaboration: {
    title: 'Collaboration',
    body: 'I am open to freelance work, collaborations, and new opportunities where technical depth meets clear product goals. I work best with teams that respect direct feedback and shared ownership.',
    cta: { label: 'Contact', href: '/contact' },
  },
  continueReading: [
    { label: 'Professional approach', href: '/professional' },
    { label: 'Stack', href: '/stack' },
    { label: 'Projects', href: '/projects' },
    { label: 'Volunteering', href: '/volunteering' },
  ] satisfies ContinueReadingLink[],
};
