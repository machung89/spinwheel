/** Lightweight canvas confetti burst (~1 KB, no dependency). Purely decorative. */
const COLORS = ["#5B5BF0", "#FF6B5B", "#FFC53D", "#2EC4B6", "#9D4EDD", "#FF9F1C"];

interface Piece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  vr: number;
  w: number;
  h: number;
  color: string;
}

export function fireConfetti(opts: { colors?: string[]; count?: number; origin?: { x: number; y: number } } = {}) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const host = document.fullscreenElement ?? document.body;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:120";
  host.appendChild(canvas);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  const g = canvas.getContext("2d");
  if (!g) return canvas.remove();
  g.scale(dpr, dpr);
  const colors = opts.colors?.length ? opts.colors : COLORS;
  const ox = (opts.origin?.x ?? 0.5) * innerWidth;
  const oy = (opts.origin?.y ?? 0.45) * innerHeight;
  const pieces: Piece[] = Array.from({ length: opts.count ?? 160 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 6 + Math.random() * 10;
    return {
      x: ox,
      y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.4,
      w: 6 + Math.random() * 6,
      h: 4 + Math.random() * 4,
      color: colors[i % colors.length],
    };
  });
  const start = performance.now();
  const frame = (now: number) => {
    const t = now - start;
    g.clearRect(0, 0, innerWidth, innerHeight);
    const fade = Math.max(0, 1 - t / 2600);
    for (const p of pieces) {
      p.vy += 0.32;
      p.vx *= 0.985;
      p.vy *= 0.985;
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      g.save();
      g.globalAlpha = fade;
      g.translate(p.x, p.y);
      g.rotate(p.r);
      g.fillStyle = p.color;
      g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)));
      g.restore();
    }
    if (fade > 0) requestAnimationFrame(frame);
    else canvas.remove();
  };
  requestAnimationFrame(frame);
}
