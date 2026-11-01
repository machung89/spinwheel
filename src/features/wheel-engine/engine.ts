/**
 * Wheel engine: pure functions, no DOM or React.
 *
 * Coordinate convention
 * ---------------------
 * Segment angles are degrees measured clockwise from the fixed pointer at the
 * top, in the wheel's own frame. The wheel is drawn rotated clockwise by R
 * degrees, so the point of the wheel under the pointer is at angle mod(-R, 360).
 *
 * Spin flow
 * ---------
 * 1. The winner is chosen first with the crypto RNG (uniform or weighted).
 * 2. A landing angle strictly inside the winner's segment is chosen.
 * 3. The final rotation is computed so that landing angle ends under the pointer.
 * 4. The UI animates from the current rotation to the final rotation.
 * Animation timing never affects the result; it only visualises it.
 */
import type { Segment, Wheel, WheelEntry } from "@/types/wheel";
import { randomFloat, randomInt, weightedIndex, weightToTickets } from "@/features/random/rng";
import { getPalette, segmentColor } from "./palettes";

export const mod = (a: number, n: number) => ((a % n) + n) % n;

export function isWeighted(wheel: Pick<Wheel, "settings">): boolean {
  return wheel.settings.mode === "weighted";
}

export function activeEntries(entries: readonly WheelEntry[]): WheelEntry[] {
  return entries.filter((e) => e.enabled && e.text.trim().length > 0);
}

export function computeSegments(wheel: Pick<Wheel, "entries" | "design" | "settings">): Segment[] {
  const entries = activeEntries(wheel.entries);
  const n = entries.length;
  if (n === 0) return [];
  const weighted = isWeighted(wheel);
  const tickets = entries.map((e) => (weighted ? weightToTickets(e.weight) : 1));
  const total = tickets.reduce((a, b) => a + b, 0);
  const colors = getPalette(wheel.design.paletteId).colors;
  const segments: Segment[] = [];
  let cursor = 0;
  entries.forEach((entry, i) => {
    const span = (tickets[i] / total) * 360;
    segments.push({
      index: i,
      entry,
      start: cursor,
      end: i === n - 1 ? 360 : cursor + span,
      color: entry.color || segmentColor(colors, i, n),
      probability: tickets[i] / total,
    });
    cursor += span;
  });
  return segments;
}

/** Index of the segment under the pointer for a given wheel rotation. */
export function segmentIndexAtRotation(segments: readonly Segment[], rotation: number): number {
  if (segments.length === 0) return -1;
  const a = mod(-rotation, 360);
  // Binary search: segments are sorted and contiguous.
  let lo = 0;
  let hi = segments.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (segments[mid].start <= a) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

/** Smallest rotation >= current + turns*360 that puts `angle` under the pointer. */
export function rotationForAngle(current: number, angle: number, turns: number): number {
  const base = current + turns * 360;
  return base + mod(-angle - base, 360);
}

export interface SpinPlan {
  winnerIndex: number;
  segment: Segment;
  segments: Segment[];
  from: number;
  to: number;
  durationMs: number;
}

export function pickWinnerIndex(segments: readonly Segment[], weighted: boolean): number {
  if (segments.length === 0) throw new RangeError("No entries to pick from");
  return weighted ? weightedIndex(segments.map((s) => s.entry.weight)) : randomInt(segments.length);
}

export function planSpin(
  wheel: Pick<Wheel, "entries" | "design" | "settings">,
  currentRotation: number,
  opts: { reducedMotion?: boolean } = {},
): SpinPlan | null {
  const segments = computeSegments(wheel);
  if (segments.length === 0) return null;
  const winnerIndex = pickWinnerIndex(segments, isWeighted(wheel));
  const segment = segments[winnerIndex];
  // Land somewhere in the middle 70% of the segment so the result is never ambiguous on a border.
  const span = segment.end - segment.start;
  const landing = segment.start + span * (0.15 + 0.7 * randomFloat());
  const seconds = opts.reducedMotion ? 1 : Math.min(30, Math.max(1, wheel.settings.spinDuration));
  const turns = opts.reducedMotion ? 1 : Math.max(3, Math.round(seconds * 1.4)) + randomInt(2);
  return {
    winnerIndex,
    segment,
    segments,
    from: currentRotation,
    to: rotationForAngle(currentRotation, landing, turns),
    durationMs: seconds * 1000,
  };
}

/**
 * Spin easing with a short acceleration phase followed by a long, natural
 * (cubic) deceleration. Velocity is continuous at the transition.
 * v(t) = t/a for t < a; v(t) = (1-u)^3 with u = (t-a)/(1-a) afterwards.
 */
const ACCEL = 0.08;
const TOTAL = ACCEL / 2 + (1 - ACCEL) / 4;
export function spinEase(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  if (t < ACCEL) return (t * t) / (2 * ACCEL) / TOTAL;
  const u = (t - ACCEL) / (1 - ACCEL);
  return (ACCEL / 2 + ((1 - ACCEL) * (1 - (1 - u) ** 4)) / 4) / TOTAL;
}
