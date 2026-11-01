type ClassValue = string | number | false | null | undefined | ClassValue[];

/** Tiny className joiner (keeps the bundle free of clsx/tailwind-merge). */
export function cn(...values: ClassValue[]): string {
  const out: string[] = [];
  for (const v of values) {
    if (!v) continue;
    if (Array.isArray(v)) {
      const inner = cn(...v);
      if (inner) out.push(inner);
    } else out.push(String(v));
  }
  return out.join(" ");
}
