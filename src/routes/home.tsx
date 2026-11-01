import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Download, Layers, Lock, Scale, Share2, Sparkles, Weight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { localeMeta, localizePath } from "@/i18n/config";
import { getDict, toLocale } from "@/i18n/server";
import { postsFor, templatesFor, toolLinks } from "@/content";
import { templateHref } from "@/data/templates/templates";
import { WheelApp } from "@/components/wheel/wheel-app";
import { AdSlot } from "@/components/ads/ad-slot";
import { Container, FaqSection, Steps, TrustBadges } from "@/components/layout/content-blocks";
import { RichText } from "@/components/layout/rich-text";
import { storageKeyFor } from "@/components/layout/landing-view";
import { JsonLd, webAppSchema } from "@/components/seo/json-ld";
import { buttonClass } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  return pageMetadata({ locale, title: t.home.seoTitle, description: t.home.description, path: "/" });
}

export default async function HomePage({ params }: Props) {
  const locale = toLocale((await params).lang);
  const t = getDict(locale);
  const h = t.home;
  const L = (p: string) => localizePath(locale, p);
  const features = [
    { icon: Scale, title: h.f1, text: h.f1Text },
    { icon: Weight, title: h.f2, text: h.f2Text },
    { icon: Layers, title: h.f3, text: h.f3Text },
    { icon: Sparkles, title: h.f4, text: h.f4Text },
    { icon: Download, title: h.f5, text: h.f5Text },
    { icon: Share2, title: h.f6, text: h.f6Text },
    { icon: Lock, title: h.f7, text: h.f7Text },
  ];
  const faqs = [1, 2, 3, 4, 5, 6].map((i) => ({ q: h[`q${i}` as "q1"], a: h[`a${i}` as "a1"] }));
  const popular = templatesFor(locale).slice(0, 12);
  const preset = { title: h.presetTitle, entries: h.presetEntries.split("|") };

  return (
    <>
      <Container className="pt-8 pb-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {h.h1a} <span className="text-primary">{h.h1b}</span>
          </h1>
          <p className="mt-4 text-lg text-muted-fg">{h.description}</p>
          <div className="mt-4">
            <TrustBadges t={t} />
          </div>
        </div>
      </Container>

      <Container className="py-4">
        <WheelApp storageKey={storageKeyFor(locale, "home")} preset={preset} />
      </Container>

      <AdSlot placement="belowWheel" className="px-4" />

      <Container>
        <section aria-labelledby="how" className="mt-12">
          <h2 id="how" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {h.howTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-muted-fg">{h.howSub}</p>
          <Steps
            steps={[
              { title: h.step1, text: h.step1Text },
              { title: h.step2, text: h.step2Text },
              { title: h.step3, text: h.step3Text },
              { title: h.step4, text: h.step4Text },
            ]}
          />
        </section>

        <section aria-labelledby="features" className="mt-16">
          <h2 id="features" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {h.featuresTitle}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-fg">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="templates" className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="templates" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                {h.templatesTitle}
              </h2>
              <p className="mt-2 text-muted-fg">{h.templatesSub}</p>
            </div>
            <Link href={L("/templates/")} className={buttonClass("outline", "md")}>
              {h.allTemplates} <ArrowRight />
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {popular.map((tp) => (
              <li key={tp.slug}>
                <Link href={L(templateHref(tp))} className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
                  <span className="text-2xl" aria-hidden="true">
                    {tp.emoji}
                  </span>
                  <span>
                    <span className="block font-semibold">{tp.name}</span>
                    <span className="mt-0.5 block text-xs text-muted-fg">{tp.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <AdSlot placement="inContent" />

        <section aria-labelledby="uses" className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="prose-content">
            <h2 id="uses" className="!mt-0">
              {h.usesTitle}
            </h2>
            <p>{h.uses1}</p>
            <p>{h.uses2}</p>
            <ul>
              {[h.usesList1, h.usesList2, h.usesList3, h.usesList4].map((li) => (
                <li key={li}>
                  <RichText text={li} locale={locale} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">{h.moreTools}</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {toolLinks(locale).map((tool) => (
                <li key={tool.href}>
                  <Link href={L(tool.href)} className="block h-full rounded-2xl border border-border bg-card p-4 hover:shadow-md">
                    <span className="font-semibold">{tool.name}</span>
                    <span className="mt-0.5 block text-xs text-muted-fg">{tool.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqSection faqs={faqs} title={t.common.faqTitle} />

        <section aria-labelledby="blog" className="mt-16">
          <h2 id="blog" className="text-2xl font-extrabold tracking-tight">
            {h.blogTitle}
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {postsFor(locale)
              .slice(0, 3)
              .map((p) => (
                <li key={p.slug}>
                  <Link href={L(`/blog/${p.slug}/`)} className="block h-full rounded-2xl border border-border bg-card p-5 hover:shadow-md">
                    <span className="text-xs font-semibold text-primary">{p.tags[0]}</span>
                    <span className="mt-1 block font-bold">{p.title}</span>
                    <span className="mt-1 block text-sm text-muted-fg">{p.description}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </Container>

      <JsonLd data={webAppSchema({ name: siteConfig.name, description: h.description, path: L("/"), inLanguage: localeMeta[locale].hreflang })} />
    </>
  );
}
