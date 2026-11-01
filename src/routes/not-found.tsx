"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useI18n } from "@/i18n/provider";
import { buttonClass } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  const { t, href } = useI18n();
  // Next already sends a 404 status and noindex; this just localizes the tab title.
  useEffect(() => {
    document.title = `${t.notFound.title} | ${siteConfig.name}`;
  }, [t]);
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-bold tracking-widest text-primary uppercase">404</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.notFound.heading}</h1>
      <p className="mt-3 text-muted-fg">{t.notFound.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Link href={href("/")} className={buttonClass("primary", "lg")}>
          {t.notFound.spin}
        </Link>
        <Link href={href("/templates/")} className={buttonClass("outline", "lg")}>
          {t.notFound.templates}
        </Link>
        <Link href={href("/tools/")} className={buttonClass("outline", "lg")}>
          {t.notFound.tools}
        </Link>
      </div>
    </div>
  );
}
