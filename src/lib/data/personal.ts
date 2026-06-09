import { bataEventsLinks } from './bata-events';
import { site } from './site';
import type { ContinueReadingLink } from './types';

export const personal = {
  title: 'Outside work',
  intro: [
    'Outside client work I learn by building: **homelab automation**, **game server ops**, geography games, and side projects that keep my tooling instincts sharp. In my free time, I build apps for **fun and ease of use**.',
    'Most downtime goes to time with my girlfriend, **computer games**, movies, TV shows, and anime, with the occasional plan for something more adventurous outdoors.',
    'I value **consistency over hype**, and I bring the same curiosity to the court or the trail as I do to debugging a staging deployment.',
  ],
  values: [
    {
      title: 'Continuous improvement',
      body: 'From **intern to tech lead in four years**, I treat career growth as deliberate practice: harder problems, clearer communication, and more ownership each step.',
    },
    {
      title: 'Reliability over spectacle',
      body: '**Backups, monitoring, and boring infrastructure** matter. Whether it is a modded game server or a commerce release, I optimize for things staying up.',
    },
    {
      title: 'Balance through movement',
      body: 'Sport and outdoor activity keep me grounded. Team sports, occasional runs, and endurance events train the same **patience** useful for long platform migrations and multi-sprint deliveries.',
    },
  ],
  interests: {
    sideProjects: {
      title: 'Side projects & educational apps',
      body: 'Creator and maintainer of **Flagged It** (https://flaggedit.app/): learn geography through interactive country games. Flag guessing, hangman, facts, shape identification, and more. **Go backend, Svelte frontend**, GPL-3.0.',
      extra: 'Also builds small **educational game projects** and everyday utility tools for fun.',
      note: 'GitHub pinned repos include flagged-it and hermes-notes.',
      flaggedItHref: '/projects/flagged-it',
      flaggedItUrl: 'https://flaggedit.app/',
    },
    homelab: {
      title: 'Homelab & automation',
      body: '**Docker, Ansible, Home Assistant**, custom Lovelace cards, and scripted workflows. I treat personal infrastructure as a sandbox for **orchestration and reliability** patterns.',
    },
    gameServers: {
      title: 'Game server hosting',
      body: 'Modded server administration, **automated backups**, and performance tuning for stable multiplayer experiences.',
    },
    sport: {
      title: 'Sport & movement',
      items: [
        'Volleyball for several years with Tělovýchovná jednota Bojkovice, from juniors through men\'s teams, before moving on to basketball.',
        'Basketball in free time now. Also biking, swimming, and picking up a racket or paddle when someone suggests it: badminton, tennis, ping pong.',
        'Beer pong - a social sport with **generous latency tolerance**.',
        'Running occasionally, including partial company **half-marathon** runs at Baťa events.',
        'Building the **VENKU** outdoor magazine front end connected professional work with personal interest in movement and sport.',
      ],
      volleyballUrl: 'https://www.cvf.cz/cvs/oddily/?oddil=3711006',
    },
    downtime: {
      title: 'Downtime',
      items: [
        '**Quality time with my loved one 🍯**',
        'Computer games, movies, TV shows, and anime.',
        'Occasional trips and small adventures planned around getting outside when the mood strikes.',
      ],
    },
  },
  community: {
    title: 'Community & volunteering',
    body: "**Bata Children's Program volunteer** since 2023. I help run Baťa community events in Zlín and beyond, and build interactive tooling when the day job overlaps, including the **LOT figurine booth**.",
    volunteeringHref: bataEventsLinks.volunteeringHref,
    figurineHref: bataEventsLinks.figurineHref,
  },
  teaching: {
    title: 'Teaching',
    body: 'English language instructor (part-time, 2023–2024): one-on-one tutoring and group conversation courses for kids and teens. Practice in **reading a room** and adapting material to different ages and skill levels.',
  },
  collaboration: {
    title: 'Collaboration',
    body: 'I am open to **freelance work, collaborations**, and new opportunities where technical depth meets clear product goals. I work best with teams that respect **direct feedback and shared ownership**.',
    cta: { label: 'Message on LinkedIn', href: site.linkedinUrl },
  },
  continueReading: [
    { label: 'Professional approach', href: '/professional' },
    { label: 'Stack', href: '/stack' },
    { label: 'Projects', href: '/projects' },
    { label: 'Volunteering', href: '/volunteering' },
  ] satisfies ContinueReadingLink[],
};
