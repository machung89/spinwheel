"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Closes open <details> menus in the header on outside click, Escape, link click and navigation. */
export function MenuCloser() {
  const pathname = usePathname();
  useEffect(() => {
    document.querySelectorAll("header details[open]").forEach((d) => d.removeAttribute("open"));
  }, [pathname]);
  useEffect(() => {
    const closeAll = (except?: Element | null) =>
      document.querySelectorAll("header details[open]").forEach((d) => d !== except && d.removeAttribute("open"));
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const details = target.closest("header details");
      if (target.closest("header details a")) return closeAll();
      closeAll(details);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
