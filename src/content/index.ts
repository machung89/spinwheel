/**
 * Locale-aware content access. English is the base: it defines structure
 * (tool kind, related links, presets' colors/modes/weights). Other locales
 * supply text only and are merged onto it, so behavior can't drift between languages.
 */
import type { WheelPreset } from "@/types/wheel";
import type { Locale } from "@/i18n/config";
import { landingPages as enLanding } from "@/data/landing";
import type { LandingPage } from "@/data/landing/types";
import { categories as enCategories, type TemplateCategory } from "@/data/templates/categories";
import { isFullTemplate, templates as enTemplates, type WheelTemplate } from "@/data/templates/templates";
import { posts as enPosts, type BlogPost } from "@/data/blog";
import { DARES, TRUTHS } from "@/data/truth-or-dare";
import { pages as enPages } from "./en/pages";
import type { LocEntry, LocaleContent, PagesContent, TodContent } from "./types";
import vi from "./vi";
import es from "./es";
import fr from "./fr";
import pt from "./pt";
import de from "./de";
import ja from "./ja";
import ko from "./ko";
import zh from "./zh";
import ar from "./ar";

const localized: Record<Exclude<Locale, "en">, LocaleContent> = { vi, es, fr, pt, de, ja, ko, zh, ar };

/** Replaces preset text by position, keeping emoji/colors/weights from the English base. */
export function localizePreset(base: WheelPreset | undefined, title?: string, entries?: LocEntry[]): WheelPreset | undefined {
  if (!base) return undefined;
  if (!title && !entries) return base;
  const baseEntries = base.entries;
  const merged = entries
    ? entries.map((e, i) => {
        const b = baseEntries[i];
        const loc = typeof e === "string" ? { text: e } : e;
        const bObj = typeof b === "object" && entries.length === baseEntries.length ? b : {};
        return { ...bObj, ...loc };
      })
    : baseEntries;
  return { ...base, title: title ?? base.title, entries: merged };
}

// ── Landing pages ──────────────────────────────────────────
export function landingPagesFor(locale: Locale): LandingPage[] {
  if (locale === "en") return enLanding;
  const text = localized[locale].landing;
  return enLanding.map((p) => {
    const t = text[p.slug];
    if (!t) throw new Error(`Missing ${locale} landing text for ${p.slug}`);
    const { presetTitle, presetEntries, ...rest } = t;
    return { ...p, ...rest, preset: localizePreset(p.preset, presetTitle, presetEntries) };
  });
}

export function getLanding(locale: Locale, slug: string): LandingPage | undefined {
  return landingPagesFor(locale).find((p) => p.slug === slug);
}

export function landingLink(locale: Locale, slug: string) {
  const p = getLanding(locale, slug);
  if (!p) throw new Error(`Unknown landing page in related links: ${slug}`);
  return { href: `/${p.slug}/`, title: p.name, description: p.card ?? p.lead.split(/(?<=[.!?])\s/)[0] };
}

export function toolLinks(locale: Locale) {
  return landingPagesFor(locale)
    .filter((p) => p.kind !== "wheel")
    .map((p) => ({ name: p.name, href: `/${p.slug}/`, description: p.card ?? p.lead }));
}

// ── Templates ──────────────────────────────────────────────
export function categoriesFor(locale: Locale): TemplateCategory[] {
  if (locale === "en") return enCategories;
  const text = localized[locale].categories;
  return enCategories.map((c) => ({ ...c, ...text[c.slug] }));
}

export function templatesFor(locale: Locale): WheelTemplate[] {
  if (locale === "en") return enTemplates;
  const text = localized[locale].templates;
  return enTemplates.map((t) => {
    const x = text[t.slug];
    if (!x) throw new Error(`Missing ${locale} template text for ${t.slug}`);
    if (!isFullTemplate(t)) return { ...t, name: x.name, description: x.description };
    return {
      ...t,
      name: x.name,
      description: x.description,
      seoTitle: x.seoTitle ?? t.seoTitle,
      metaDescription: x.metaDescription ?? t.metaDescription,
      intro: x.intro ?? t.intro,
      tips: x.tips ?? t.tips,
      faqs: x.faqs ?? t.faqs,
      preset: localizePreset(t.preset, x.presetTitle, x.presetEntries)!,
    };
  });
}

// ── Blog, pages, prompts ───────────────────────────────────
export function postsFor(locale: Locale): BlogPost[] {
  if (locale === "en") return enPosts;
  return localized[locale].posts.slice().sort((a, b) => b.published.localeCompare(a.published));
}

export function pagesFor(locale: Locale): PagesContent {
  return locale === "en" ? enPages : localized[locale].pages;
}

export function todFor(locale: Locale): TodContent {
  return locale === "en" ? { truths: TRUTHS, dares: DARES } : localized[locale].tod;
}
