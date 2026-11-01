"use client";

import { Moon, Sun } from "lucide-react";
import { safeSet } from "@/features/storage/storage";

/** The initial theme is applied by an inline script in <head> to avoid a flash. */
export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const dark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", dark);
    safeSet("theme", dark ? "dark" : "light");
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
    >
      <Sun className="hidden size-5 dark:block" />
      <Moon className="size-5 dark:hidden" />
    </button>
  );
}

export const themeScript = `try{var t=localStorage.getItem("whirlpick:v1:theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;
