"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/provider";
import { normalize } from "@/lib/text";

/**
 * Progressive enhancement: the full template list is server-rendered (crawlable);
 * this input filters the rendered cards in place by hiding non-matching items.
 */
export function TemplateSearch({ containerId }: { containerId: string }) {
  const { t, fmt } = useI18n();
  const [q, setQ] = useState("");
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const root = document.getElementById(containerId);
    if (!root) return;
    const query = normalize(q.trim());
    let visible = 0;
    root.querySelectorAll<HTMLElement>("[data-search]").forEach((el) => {
      const match = !query || (el.dataset.search ?? "").includes(query);
      el.hidden = !match;
      if (match) visible++;
    });
    root.querySelectorAll<HTMLElement>("[data-search-group]").forEach((g) => {
      g.hidden = g.querySelectorAll("[data-search]:not([hidden])").length === 0;
    });
    setCount(query ? visible : null);
  }, [q, containerId]);

  return (
    <div className="relative max-w-md">
      <Search className="pointer-events-none absolute top-1/2 start-3.5 size-4 -translate-y-1/2 text-muted-fg" aria-hidden="true" />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t.templates.searchPlaceholder}
        aria-label={t.templates.searchLabel}
        className="h-12 w-full rounded-2xl border border-border bg-card pe-4 ps-10 text-base focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none"
      />
      <p className="mt-2 h-4 text-xs text-muted-fg" aria-live="polite">
        {count !== null && fmt(t.templates.found, { n: count })}
      </p>
    </div>
  );
}
