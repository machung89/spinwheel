import type { Segment, WheelDesign, WheelFont } from "@/types/wheel";
import { contrastText } from "@/features/wheel-engine/palettes";

export const FONT_STACKS: Record<WheelFont, string> = {
  system: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  rounded: 'ui-rounded, "SF Pro Rounded", Nunito, "Arial Rounded MT Bold", system-ui, sans-serif',
  serif: 'Georgia, Cambria, "Times New Roman", serif',
  mono: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  condensed: '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const imageCache = new Map<string, HTMLImageElement>();

/** Returns a loaded image, or starts loading it and calls onLoad when ready. */
export function getImage(src: string, onLoad: () => void): HTMLImageElement | null {
  let img = imageCache.get(src);
  if (!img) {
    img = new Image();
    img.decoding = "async";
    img.referrerPolicy = "no-referrer";
    img.onload = onLoad;
    img.src = src;
    imageCache.set(src, img);
  }
  return img.complete && img.naturalWidth > 0 ? img : null;
}

const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180;

function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (ctx.measureText(text.slice(0, mid) + "…").width <= maxWidth) lo = mid;
    else hi = mid - 1;
  }
  return lo === 0 ? "" : text.slice(0, lo).trimEnd() + "…";
}

export interface DrawOptions {
  hideLabels: boolean;
  highlightIndex: number | null;
  onImageLoad: () => void;
  emptyText: string;
}

export function drawWheel(canvas: HTMLCanvasElement, cssSize: number, segments: readonly Segment[], design: WheelDesign, opts: DrawOptions) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  const px = Math.round(cssSize * dpr);
  if (canvas.width !== px || canvas.height !== px) {
    canvas.width = px;
    canvas.height = px;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssSize, cssSize);

  const c = cssSize / 2;
  const border = design.borderWidth;
  const glowPad = design.glow ? 14 : 2;
  const R = c - border / 2 - glowPad;
  const n = segments.length;
  const font = FONT_STACKS[design.font] ?? FONT_STACKS.system;

  if (n === 0) {
    ctx.beginPath();
    ctx.arc(c, c, R, 0, Math.PI * 2);
    ctx.fillStyle = "#E5E7EB";
    ctx.fill();
    ctx.fillStyle = "#6B7280";
    ctx.font = `600 ${Math.max(12, R * 0.08)}px ${font}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(opts.emptyText, c, c + R * 0.35);
    return;
  }

  // Segments
  for (const s of segments) {
    ctx.beginPath();
    ctx.moveTo(c, c);
    ctx.arc(c, c, R, toRad(s.start), toRad(s.end));
    ctx.closePath();
    ctx.fillStyle = s.color;
    ctx.fill();
  }

  // Segment dividers
  if (design.segmentBorders && n > 1) {
    ctx.strokeStyle = design.segmentBorderColor;
    ctx.lineWidth = n > 120 ? 0.5 : n > 40 ? 1 : 2;
    ctx.beginPath();
    for (const s of segments) {
      const a = toRad(s.start);
      ctx.moveTo(c, c);
      ctx.lineTo(c + Math.cos(a) * R, c + Math.sin(a) * R);
    }
    ctx.stroke();
  }

  // Labels, emojis and images
  ctx.textBaseline = "middle";
  for (const s of segments) {
    const span = ((s.end - s.start) * Math.PI) / 180;
    const chord = 2 * 0.6 * R * Math.sin(Math.min(span, Math.PI) / 2);
    const fontSize = Math.min(chord * 0.6, R * 0.1, 30);
    if (fontSize < 5.5) continue; // too thin to be legible (very large wheels)
    const textColor = design.textColor === "auto" ? contrastText(s.color) : design.textColor;
    const mid = toRad((s.start + s.end) / 2);
    ctx.save();
    ctx.translate(c, c);
    ctx.rotate(mid);

    const outer = R - Math.max(8, R * 0.05);
    let textEnd = outer;
    const img = design.showImages && s.entry.image ? getImage(s.entry.image, opts.onImageLoad) : null;
    if (img) {
      const size = Math.min(R * 0.22, 2 * (R * 0.82) * Math.sin(Math.min(span, Math.PI) / 2) * 0.8);
      if (size >= 10) {
        const x = outer - size;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x + size / 2, 0, size / 2, 0, Math.PI * 2);
        ctx.clip();
        const scale = Math.max(size / img.naturalWidth, size / img.naturalHeight);
        const w = img.naturalWidth * scale;
        const h = img.naturalHeight * scale;
        ctx.translate(x + size / 2, 0);
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, -w / 2, -h / 2, w, h);
        ctx.restore();
        textEnd = x - 6;
      }
    }

    if (!opts.hideLabels) {
      const label = (s.entry.emoji ? `${s.entry.emoji} ` : "") + s.entry.text;
      ctx.font = `700 ${fontSize}px ${font}`;
      ctx.fillStyle = textColor;
      ctx.textAlign = "right";
      const fitted = fitText(ctx, label, textEnd - R * 0.2);
      if (fitted) ctx.fillText(fitted, textEnd, 0);
    } else if (fontSize >= 10) {
      ctx.font = `800 ${fontSize * 1.1}px ${font}`;
      ctx.fillStyle = textColor;
      ctx.textAlign = "right";
      ctx.fillText("?", textEnd, 0);
    }
    ctx.restore();
  }

  // Dim non-winning segments after a spin
  if (opts.highlightIndex !== null && n > 1) {
    const w = segments[opts.highlightIndex];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(c, c);
    ctx.arc(c, c, R, toRad(w.end), toRad(w.start + 360));
    ctx.closePath();
    ctx.fillStyle = "rgba(10,10,25,0.45)";
    ctx.fill();
    ctx.restore();
  }

  // Outer ring
  if (border > 0) {
    ctx.save();
    if (design.glow) {
      ctx.shadowColor = "rgba(124,124,255,0.85)";
      ctx.shadowBlur = 18;
    }
    ctx.beginPath();
    ctx.arc(c, c, R, 0, Math.PI * 2);
    ctx.lineWidth = border;
    ctx.strokeStyle = design.borderColor;
    ctx.stroke();
    ctx.restore();
  }
}
