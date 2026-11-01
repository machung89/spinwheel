import type { LandingPage } from "./types";
import { wheelLandingPages } from "./wheels";
import { toolLandingPages } from "./tools";

export type { LandingPage } from "./types";

export const landingPages: LandingPage[] = [...wheelLandingPages, ...toolLandingPages];

const bySlug = new Map(landingPages.map((p) => [p.slug, p]));

export function getLandingPage(slug: string): LandingPage | undefined {
  return bySlug.get(slug);
}

/** Related-link card data for a landing page slug. */
export function landingLink(slug: string) {
  const p = bySlug.get(slug);
  if (!p) throw new Error(`Unknown landing page in related links: ${slug}`);
  return { href: `/${p.slug}/`, title: p.name, description: p.lead.split(". ")[0].replace(/\.$/, "") + "." };
}
