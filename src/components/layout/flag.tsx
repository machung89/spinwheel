import type { LocaleMeta } from "@/i18n/config";
import { cn } from "@/lib/cn";

/** Inline SVG flags — consistent on every OS (Windows doesn't render flag emojis). */
export function Flag({ code, className }: { code: LocaleMeta["flag"]; className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={cn("flag-icon", className)} aria-hidden="true" focusable="false">
      {code === "us" && (
        <>
          <rect width="30" height="20" fill="#B22234" />
          {[1, 3, 5, 7, 9, 11].map((i) => (
            <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#fff" />
          ))}
          <rect width="12" height={(7 * 20) / 13} fill="#3C3B6E" />
          {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => <circle key={`${r}${c}`} cx={1.6 + c * 2.9} cy={1.6 + r * 3.4} r="0.6" fill="#fff" />))}
        </>
      )}
      {code === "vn" && (
        <>
          <rect width="30" height="20" fill="#DA251D" />
          <path d="M15 4.2l1.36 4.18h4.4l-3.56 2.59 1.36 4.18L15 12.56l-3.56 2.59 1.36-4.18-3.56-2.59h4.4z" fill="#FFFF00" />
        </>
      )}
      {code === "es" && (
        <>
          <rect width="30" height="20" fill="#AA151B" />
          <rect y="5" width="30" height="10" fill="#F1BF00" />
        </>
      )}
      {code === "fr" && (
        <>
          <rect width="10" height="20" fill="#0055A4" />
          <rect x="10" width="10" height="20" fill="#fff" />
          <rect x="20" width="10" height="20" fill="#EF4135" />
        </>
      )}
      {code === "br" && (
        <>
          <rect width="30" height="20" fill="#009C3B" />
          <path d="M15 2.5L27 10 15 17.5 3 10z" fill="#FFDF00" />
          <circle cx="15" cy="10" r="4.4" fill="#002776" />
          <path d="M10.8 9.2a9 9 0 0 1 8.3 1.9" stroke="#fff" strokeWidth="0.8" fill="none" />
        </>
      )}
    </svg>
  );
}
