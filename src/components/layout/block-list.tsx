import { Lightbulb } from "lucide-react";
import type { PageBlock } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { PrivacyChoicesButton } from "@/components/consent/privacy-choices-button";
import { RichText } from "./rich-text";

/** Renders authored content blocks (blog posts and static pages). */
export function BlockList({ blocks, locale, vars = {} }: { blocks: PageBlock[]; locale: Locale; vars?: Record<string, string> }) {
  const fill = (s: string) => s.replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);
  return (
    <>
      {blocks.map((b, i) => {
        if ("privacyChoices" in b) return <PrivacyChoicesButton key={i} />;
        if ("h2" in b) return <h2 key={i}>{fill(b.h2)}</h2>;
        if ("h3" in b) return <h3 key={i}>{fill(b.h3)}</h3>;
        if ("p" in b)
          return (
            <p key={i}>
              <RichText text={fill(b.p)} locale={locale} />
            </p>
          );
        if ("ul" in b || "ol" in b) {
          const items = "ul" in b ? b.ul : b.ol;
          const List = "ul" in b ? "ul" : "ol";
          return (
            <List key={i}>
              {items.map((li) => (
                <li key={li}>
                  <RichText text={fill(li)} locale={locale} />
                </li>
              ))}
            </List>
          );
        }
        return (
          <aside key={i} className="flex gap-3 rounded-2xl border border-primary/30 bg-primary-soft p-4">
            <Lightbulb className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="!mt-0">
              <RichText text={fill(b.tip)} locale={locale} />
            </p>
          </aside>
        );
      })}
    </>
  );
}
