import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { localizePath, locales, splitLocale, fmt } from "@/i18n/config";
import { categoriesFor, landingPagesFor, pagesFor, postsFor, templatesFor, todFor } from "@/content";
import { isFullTemplate } from "@/data/templates/templates";
import en from "@/i18n/dictionaries/en";
import vi from "@/i18n/dictionaries/vi";
import es from "@/i18n/dictionaries/es";
import fr from "@/i18n/dictionaries/fr";
import pt from "@/i18n/dictionaries/pt";

const others = ["vi", "es", "fr", "pt"] as const;
const dicts = { vi, es, fr, pt };

function leaves(o: object, prefix = ""): [string, string][] {
  return Object.entries(o).flatMap(([k, v]) => (typeof v === "string" ? [[prefix + k, v] as [string, string]] : leaves(v, `${prefix}${k}.`)));
}

describe("routing helpers", () => {
  it("localizes and splits paths", () => {
    expect(localizePath("en", "/coin-flip/")).toBe("/coin-flip/");
    expect(localizePath("vi", "/")).toBe("/vi/");
    expect(localizePath("fr", "/blog/x/")).toBe("/fr/blog/x/");
    expect(splitLocale("/es/templates/")).toEqual({ locale: "es", path: "/templates/" });
    expect(splitLocale("/en/coin-flip/")).toEqual({ locale: "en", path: "/coin-flip/" });
    expect(splitLocale("/coin-flip/")).toEqual({ locale: "en", path: "/coin-flip/" });
    expect(fmt("{n} of {m}", { n: 1 })).toBe("1 of {m}");
  });
});

describe("english routes", () => {
  // English landing pages are static folders (a dynamic [slug] would clash with (intl)/[lang]).
  it("every English landing page has a route folder in src/app/(en)", () => {
    for (const p of landingPagesFor("en")) expect(existsSync(`src/app/(en)/${p.slug}/page.tsx`), p.slug).toBe(true);
  });
});

describe("dictionaries", () => {
  const enLeaves = leaves(en);
  for (const l of others) {
    it(`${l}: keeps every {placeholder} and translates UI text`, () => {
      const map = new Map(leaves(dicts[l]));
      let identical = 0;
      for (const [key, value] of enLeaves) {
        const t = map.get(key)!;
        const ph = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort();
        expect(ph(t), `${l}.${key}`).toEqual(ph(value));
        // Markdown links in strings must keep their internal targets.
        expect((t.match(/\]\((\/[^)]*)\)/g) ?? []).length, `${l}.${key} links`).toBe((value.match(/\]\((\/[^)]*)\)/g) ?? []).length);
        if (t === value && value.length > 12) identical++;
      }
      // A few proper nouns/URLs legitimately stay the same; untranslated sections would blow past this.
      expect(identical).toBeLessThan(8);
    });
  }
});

describe("content completeness", () => {
  const enLanding = landingPagesFor("en");
  const enTemplates = templatesFor("en");
  for (const l of others) {
    it(`${l}: every landing page, template, category and post exists and differs from English`, () => {
      const lp = landingPagesFor(l);
      expect(lp.map((p) => p.slug)).toEqual(enLanding.map((p) => p.slug));
      lp.forEach((p, i) => {
        expect(p.seoTitle, p.slug).not.toBe(enLanding[i].seoTitle);
        expect(p.h1, p.slug).not.toBe(enLanding[i].h1);
        expect(p.kind).toBe(enLanding[i].kind);
        if (enLanding[i].preset) expect(p.preset!.entries.length, `${p.slug} preset`).toBe(enLanding[i].preset!.entries.length);
      });
      const tp = templatesFor(l);
      tp.forEach((t, i) => {
        expect(t.name, t.slug).not.toBe(t.slug);
        if (isFullTemplate(t)) {
          const base = enTemplates[i];
          expect(t.seoTitle, t.slug).not.toBe(isFullTemplate(base) ? base.seoTitle : "");
          expect(t.preset.entries.length, `${t.slug} preset`).toBe(isFullTemplate(base) ? base.preset.entries.length : 0);
        }
      });
      expect(categoriesFor(l).every((c, i) => c.h1 !== categoriesFor("en")[i].h1)).toBe(true);
      expect(postsFor(l).map((p) => p.slug).sort()).toEqual(postsFor("en").map((p) => p.slug).sort());
      expect(pagesFor(l).privacy.title).not.toBe(pagesFor("en").privacy.title);
      const tod = todFor(l);
      for (const lvl of ["kids", "teens", "adults"] as const) {
        expect(tod.truths[lvl].length).toBe(15);
        expect(tod.dares[lvl].length).toBe(15);
      }
    });
  }

  it("titles and descriptions are unique within each locale", () => {
    for (const l of locales) {
      const titles = [...landingPagesFor(l).map((p) => p.seoTitle), ...templatesFor(l).filter(isFullTemplate).map((t) => t.seoTitle), ...postsFor(l).map((p) => p.title)];
      expect(new Set(titles).size, l).toBe(titles.length);
    }
  });
});
