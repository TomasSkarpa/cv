export interface NavItem {
  label: string;
  href: string;
  shortLabel?: string;
}

export type SocialNetwork =
  | 'github'
  | 'linkedin'
  | 'facebook'
  | 'instagram'
  | 'discord';

export interface SocialLink {
  label: string;
  href: string;
  network: SocialNetwork;
}

export interface ContinueReadingLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  items: string[];
}

export interface ExperienceRole {
  title: string;
  period: string;
  location: string;
  details: string[];
  skills?: string;
}

export interface ExperienceEntry {
  company: string;
  meta: string;
  roles: ExperienceRole[];
}

export interface ProjectEntry {
  slug?: string;
  title: string;
  featured?: boolean;
  category: string;
  subtitle?: string;
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  context: string;
  description?: string;
  contribution: string;
  outcome: string;
  tags: string[];
  topics?: string[];
}

export interface ClientDeliverySite {
  title: string;
  subtitle: string;
  url?: string;
}

export interface ClientDeliveryGroup {
  title: string;
  intro: string;
  summary: string;
  stack: string[];
  sites: ClientDeliverySite[];
}

export interface Recommendation {
  name: string;
  title: string;
  relationship: string;
  quote: string;
}

export interface ExploreCard {
  title: string;
  href: string;
  description: string;
  mark: string;
  theme: 'teal' | 'copper' | 'ink';
}

export interface StartHerePath {
  title: string;
  steps: ContinueReadingLink[];
}
