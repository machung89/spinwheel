import type { WheelPreset } from "@/types/wheel";
import type { Faq } from "@/components/layout/content-blocks";

export type ToolKind = "wheel" | "team" | "number" | "letter" | "dice" | "coin" | "yesno" | "truthdare" | "youtube";

export interface LandingSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LandingPage {
  slug: string;
  kind: ToolKind;
  /** Short name used in links and breadcrumbs. */
  name: string;
  /** Short card description (tool menus, related links). Falls back to the lead's first sentence. */
  card?: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  preset?: WheelPreset;
  /** Original explanatory content rendered below the tool. */
  sections: LandingSection[];
  howTo: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  faqs: Faq[];
  related: string[];
}
