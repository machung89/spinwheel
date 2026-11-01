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
      {code === "de" && (
        <>
          <rect width="30" height="20" fill="#000" />
          <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
          <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
        </>
      )}
      {code === "jp" && (
        <>
          <rect width="30" height="20" fill="#fff" />
          <circle cx="15" cy="10" r="6" fill="#BC002D" />
        </>
      )}
      {code === "kr" && (
        <>
          <rect width="30" height="20" fill="#fff" />
          <circle cx="15" cy="10" r="5" fill="#0047A0" />
          <path d="M10 10a5 5 0 0 1 10 0a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 0-5 0z" fill="#CD2E3A" />
          {/* Trigrams, simplified to solid bars at this size. */}
          <g stroke="#000" strokeWidth="1.1" strokeLinecap="butt">
            <path d="M5 3.6l3 2.2M4.2 4.7l3 2.2M3.4 5.8l3 2.2" />
            <path d="M25 3.6l-3 2.2M25.8 4.7l-3 2.2M26.6 5.8l-3 2.2" />
            <path d="M5 16.4l3-2.2M4.2 15.3l3-2.2M3.4 14.2l3-2.2" />
            <path d="M25 16.4l-3-2.2M25.8 15.3l-3-2.2M26.6 14.2l-3-2.2" />
          </g>
        </>
      )}
      {code === "cn" && (
        <>
          <rect width="30" height="20" fill="#EE1C25" />
          <path d="M5 2.2l.9 2.75h2.9l-2.35 1.7.9 2.75L5 7.7 2.65 9.4l.9-2.75L1.2 4.95h2.9z" fill="#FFFF00" />
          {[[10, 2], [12, 4], [12, 7], [10, 9]].map(([x, y]) => (
            <circle key={`${x}${y}`} cx={x} cy={y} r="0.85" fill="#FFFF00" />
          ))}
        </>
      )}
      {code === "sa" && (
        <>
          <rect width="30" height="20" fill="#006C35" />
          {/* Inscription and sword, simplified for icon size. */}
          <path d="M8 7.2h14M9 9h12M10.5 7.2v1.8M14 7.2v1.8M17.5 7.2v1.8" stroke="#fff" strokeWidth="0.9" fill="none" />
          <path d="M8 13h13.5l1.5-.8" stroke="#fff" strokeWidth="0.9" fill="none" />
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
