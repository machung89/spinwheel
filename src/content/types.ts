import type { Faq } from "@/components/layout/content-blocks";
import type { Block, BlogPost } from "@/data/blog/types";
import type { LandingSection } from "@/data/landing/types";
import type { TodLevel } from "@/data/truth-or-dare";

/** A localized preset entry. Strings replace the text; objects can also replace hidden/description. */
export type LocEntry = string | { text: string; hidden?: string; description?: string; emoji?: string };

export interface LandingText {
  name: string;
  card: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  presetTitle?: string;
  presetEntries?: LocEntry[];
  sections: LandingSection[];
  howTo: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  faqs: Faq[];
}

export interface CategoryText {
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
}

export interface TemplateText {
  name: string;
  description: string;
  /** Only for templates with their own page (not linked to a landing page). */
  seoTitle?: string;
  metaDescription?: string;
  intro?: string;
  tips?: string[];
  faqs?: Faq[];
  presetTitle?: string;
  presetEntries?: LocEntry[];
}

/** Static pages. Strings may use {site}, {domain} and {email}. */
export type PageBlock = Block | { privacyChoices: true };

export interface PageContent {
  title: string;
  seoTitle: string;
  description: string;
  updated?: string;
  blocks: PageBlock[];
}

export interface PagesContent {
  about: PageContent;
  contact: PageContent;
  privacy: PageContent;
  terms: PageContent;
}

export interface TodContent {
  truths: Record<TodLevel, string[]>;
  dares: Record<TodLevel, string[]>;
}

/** Everything a non-English locale provides. English uses the original data modules. */
export interface LocaleContent {
  landing: Record<string, LandingText>;
  categories: Record<string, CategoryText>;
  templates: Record<string, TemplateText>;
  posts: BlogPost[];
  pages: PagesContent;
  tod: TodContent;
}
