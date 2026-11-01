import Link from "next/link";
import { ArrowRight, Check, Smartphone, Sparkles, UserX } from "lucide-react";
import type { ReactNode } from "react";
import type { Dict } from "@/i18n/dictionaries/en";

export interface Faq {
  q: string;
  a: string;
}

/**
 * Visible FAQ (native <details>, crawlable). FAQPage structured data is
 * intentionally not emitted: Google limits FAQ rich results to authoritative
 * government and health sites, so the markup would bring no benefit here.
 */
export function FaqSection({ faqs, title }: { faqs: Faq[]; title: string }) {
  if (faqs.length === 0) return null;
  return (
    <section aria-labelledby="faq" className="mx-auto mt-16 max-w-3xl">
      <h2 id="faq" className="text-2xl font-extrabold tracking-tight">
        {title}
      </h2>
      <div className="mt-5 divide-y divide-border rounded-3xl border border-border bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
              <h3 className="text-base">{f.q}</h3>
              <span className="text-xl leading-none text-muted-fg transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted-fg">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function TrustBadges({ t }: { t: Dict }) {
  const items = [
    { icon: Sparkles, label: t.common.trustFree },
    { icon: UserX, label: t.common.trustNoSignup },
    { icon: Smartphone, label: t.common.trustMobile },
    { icon: Check, label: t.common.trustFair },
  ];
  return (
    <ul className="flex flex-wrap gap-2" aria-label={t.common.highlights}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-fg">
          <Icon className="size-3.5 text-primary" aria-hidden="true" /> {label}
        </li>
      ))}
    </ul>
  );
}

export interface RelatedLink {
  /** Already-localized href. */
  href: string;
  title: string;
  description?: string;
}

export function RelatedLinks({ title, links }: { title: string; links: RelatedLink[] }) {
  if (links.length === 0) return null;
  const id = "related-" + links[0].href.replace(/[^a-z0-9]+/gi, "-") + links.length;
  return (
    <section aria-labelledby={id} className="mt-16">
      <h2 id={id} className="text-2xl font-extrabold tracking-tight">
        {title}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
              <span className="flex items-center justify-between font-semibold">
                {l.title} <ArrowRight className="size-4 text-muted-fg transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              {l.description && <span className="mt-1 text-sm text-muted-fg">{l.description}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="rounded-2xl border border-border bg-card p-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-sm font-black text-primary">{i + 1}</span>
          <h3 className="mt-3 font-bold">{s.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-fg">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
