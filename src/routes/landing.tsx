import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { getLanding, landingPagesFor } from "@/content";
import { LandingView } from "@/components/layout/landing-view";
import { pageMetadata } from "@/lib/seo";

/** Static params for the given locales (non-English routes; English landing pages are static folders). */
export function landingParams(locs: readonly Locale[]) {
  return locs.flatMap((lang) => landingPagesFor(lang).map((p) => ({ lang, slug: p.slug })));
}

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const page = getLanding(locale, slug);
  if (!page) return {};
  return pageMetadata({ locale, title: page.seoTitle, description: page.metaDescription, path: `/${page.slug}/` });
}

export default async function LandingRoute({ params }: Props) {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const page = getLanding(locale, slug);
  if (!page) notFound();
  return <LandingView page={page} locale={locale} t={getDict(locale)} />;
}
