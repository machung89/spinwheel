import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ToolShell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6", className)}>{children}</div>;
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
