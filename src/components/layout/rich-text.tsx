import Link from "next/link";
import type { ReactNode } from "react";
import { localizePath, type Locale } from "@/i18n/config";

/**
 * Renders inline [text](/path/) links and **bold** in authored content strings.
 * Internal links are localized; mailto: links stay in the tab; other URLs open in a new tab.
 */
export function RichText({ text, locale = "en" }: { text: string; locale?: Locale }) {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      if (href.startsWith("/"))
        out.push(
          <Link key={i++} href={localizePath(locale, href)}>
            {m[1]}
          </Link>,
        );
      else if (href.startsWith("mailto:"))
        out.push(
          <a key={i++} href={href}>
            {m[1]}
          </a>,
        );
      else
        out.push(
          <a key={i++} href={href} rel="noopener noreferrer" target="_blank">
            {m[1]}
          </a>,
        );
    } else out.push(<strong key={i++}>{m[3]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
