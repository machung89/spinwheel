"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import type { PointerStyle, Segment, Wheel } from "@/types/wheel";
import { computeSegments, mod, planSpin, segmentIndexAtRotation, spinEase, type SpinPlan } from "@/features/wheel-engine/engine";
import { playSpinStart, playTick, playWin, unlockAudio } from "@/features/sound/sound";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/provider";
import { drawWheel } from "./renderer";

export interface SpinResult {
  wheelId: string;
  segment: Segment;
  plan: SpinPlan;
}

export interface WheelStageHandle {
  spin: () => Promise<SpinResult | null>;
  isSpinning: () => boolean;
}

interface Props {
  wheel: Wheel;
  compact?: boolean;
  onSpinStart?: (wheelId: string) => void;
  onResult?: (result: SpinResult) => void;
  playWinSound?: boolean;
  className?: string;
}

function Pointer({ style, color }: { style: PointerStyle; color: string }) {
  const common = { fill: color, stroke: "#fff", strokeWidth: 3, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 48 56" className="h-full w-full drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]" aria-hidden="true">
      {style === "arrow" && <path d="M24 54 L6 16 Q4 6 14 4 L34 4 Q44 6 42 16 Z" {...common} />}
      {style === "triangle" && <path d="M24 54 L4 6 L44 6 Z" {...common} />}
      {style === "pin" && (
        <>
          <path d="M24 54 L16 24 L32 24 Z" {...common} />
          <circle cx="24" cy="16" r="13" {...common} />
          <circle cx="24" cy="16" r="5" fill="#fff" />
        </>
      )}
      {style === "drop" && <path d="M24 54 C12 36 6 28 6 20 A18 18 0 0 1 42 20 C42 28 36 36 24 54 Z" {...common} />}
    </svg>
  );
}

const BG_EFFECTS: Record<string, string> = {
  none: "",
  dots: "bg-[radial-gradient(circle,var(--border-strong)_1px,transparent_1px)] [background-size:16px_16px]",
  rays: "bg-[repeating-conic-gradient(from_0deg,var(--muted)_0deg_10deg,transparent_10deg_20deg)]",
  glow: "bg-[radial-gradient(circle_at_center,var(--primary-soft),transparent_70%)]",
};

export const WheelStage = forwardRef<WheelStageHandle, Props>(function WheelStage(
  { wheel, compact, onSpinStart, onResult, playWinSound = true, className },
  ref,
) {
  const { t, fmt } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotorRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rotation = useRef(0);
  const frame = useRef(0);
  const spinningRef = useRef(false);
  const [size, setSize] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [frozen, setFrozen] = useState<Segment[] | null>(null);
  const [highlight, setHighlight] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [imgTick, setImgTick] = useState(0);

  const live = useMemo(() => computeSegments(wheel), [wheel.entries, wheel.design.paletteId, wheel.settings.mode]);
  const segments = frozen ?? live;
  const latest = useRef({ wheel, onResult, onSpinStart, playWinSound });
  latest.current = { wheel, onResult, onSpinStart, playWinSound };

  // Clear the winner highlight as soon as the wheel's contents change.
  useEffect(() => {
    if (!spinningRef.current) {
      setFrozen(null);
      setHighlight(null);
    }
  }, [live]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize(Math.floor(e.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const hideLabels = wheel.settings.hideLabels || (wheel.settings.mode === "mystery" && !revealed);

  useEffect(() => {
    if (!canvasRef.current || size === 0) return;
    drawWheel(canvasRef.current, size, segments, wheel.design, {
      hideLabels,
      highlightIndex: wheel.design.highlightWinner ? highlight : null,
      onImageLoad: () => setImgTick((n) => n + 1),
      emptyText: t.wheel.emptyWheel,
    });
  }, [segments, wheel.design, hideLabels, highlight, size, imgTick, t]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const spin = useCallback((): Promise<SpinResult | null> => {
    if (spinningRef.current) return Promise.resolve(null);
    const { wheel: w } = latest.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const plan = planSpin(w, rotation.current, { reducedMotion });
    if (!plan) return Promise.resolve(null);
    unlockAudio();
    spinningRef.current = true;
    setSpinning(true);
    setFrozen(plan.segments);
    setHighlight(null);
    setRevealed(false);
    latest.current.onSpinStart?.(w.id);
    const sound = w.settings.sound;
    const vol = sound.enabled ? sound.volume : 0;
    if (sound.spin) playSpinStart(vol);

    return new Promise((resolve) => {
      const start = performance.now();
      let lastIndex = segmentIndexAtRotation(plan.segments, plan.from);
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / plan.durationMs);
        const r = plan.from + (plan.to - plan.from) * spinEase(t);
        if (rotorRef.current) rotorRef.current.style.transform = `rotate(${r}deg)`;
        const idx = segmentIndexAtRotation(plan.segments, r);
        if (idx !== lastIndex) {
          lastIndex = idx;
          if (vol > 0) playTick(sound.tick, vol);
        }
        if (t < 1) {
          frame.current = requestAnimationFrame(step);
          return;
        }
        // Normalise so the angle never grows without bound (visually identical).
        rotation.current = mod(plan.to, 360);
        if (rotorRef.current) rotorRef.current.style.transform = `rotate(${rotation.current}deg)`;
        spinningRef.current = false;
        setSpinning(false);
        setHighlight(plan.winnerIndex);
        setRevealed(true);
        if (latest.current.playWinSound && vol > 0) playWin(sound.win, vol);
        const result = { wheelId: w.id, segment: plan.segment, plan };
        latest.current.onResult?.(result);
        resolve(result);
      };
      frame.current = requestAnimationFrame(step);
    });
  }, []);

  useImperativeHandle(ref, () => ({ spin, isSpinning: () => spinningRef.current }), [spin]);

  const { design } = wheel;
  const empty = live.length === 0;

  return (
    <div
      className={cn("relative mx-auto w-full rounded-3xl", BG_EFFECTS[design.backgroundEffect], className)}
      style={{ background: design.backgroundColor !== "transparent" ? design.backgroundColor : undefined }}
    >
      <div ref={wrapRef} className={cn("wheel-canvas-wrap relative mx-auto aspect-square w-full", compact ? "max-w-[300px]" : "max-w-[560px]")}>
        <div ref={rotorRef} className="absolute inset-0 will-change-transform" style={{ transform: `rotate(${rotation.current}deg)` }}>
          <canvas ref={canvasRef} className="h-full w-full" role="img" aria-label={fmt(t.wheel.canvasLabel, { n: live.length })} />
        </div>
        <div className={cn("pointer-events-none absolute left-1/2 z-10 -translate-x-1/2", compact ? "-top-2 h-9 w-8" : "-top-3 h-14 w-12")}>
          <Pointer style={design.pointerStyle} color={design.pointerColor} />
        </div>
        <button
          type="button"
          onClick={() => void spin()}
          disabled={spinning || empty}
          aria-label={spinning ? t.wheel.spinningAria : fmt(t.wheel.spinAria, { title: wheel.title })}
          className={cn(
            "absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-fg font-black tracking-wide text-bg uppercase shadow-lg transition-transform",
            "hover:scale-105 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95 disabled:cursor-not-allowed disabled:hover:scale-100",
            compact ? "h-14 w-14 text-[11px]" : "h-20 w-20 text-sm sm:h-24 sm:w-24 sm:text-base",
          )}
        >
          {spinning ? "…" : t.wheel.spin}
        </button>
      </div>
    </div>
  );
});
