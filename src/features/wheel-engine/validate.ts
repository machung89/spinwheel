/**
 * Defensive validation for anything that enters the app from outside:
 * LocalStorage, share links, and imported JSON files. Unknown or malformed
 * fields fall back to defaults instead of crashing the UI.
 */
import type { AppState, SpinMode, SpinRecord, Wheel, WheelDesign, WheelEntry, WheelSettings } from "@/types/wheel";
import { randomId } from "@/features/random/rng";
import {
  clampWeight,
  DEFAULT_DESIGN,
  DEFAULT_SETTINGS,
  MAX_ENTRIES,
  MAX_ENTRY_TEXT,
  MAX_HIDDEN_TEXT,
  MAX_WHEELS,
} from "./defaults";
import { PALETTES } from "./palettes";

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown, max: number): string | undefined => (typeof v === "string" ? v.slice(0, max) : undefined);
const num = (v: unknown, min: number, max: number, fallback: number): number =>
  typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : fallback;
const bool = (v: unknown, fallback: boolean): boolean => (typeof v === "boolean" ? v : fallback);
const oneOf = <T extends string>(v: unknown, options: readonly T[], fallback: T): T =>
  options.includes(v as T) ? (v as T) : fallback;

const HEX = /^#[0-9a-f]{6}$/i;
export const isColor = (v: unknown): v is string => typeof v === "string" && HEX.test(v);
const color = (v: unknown, fallback: string) => (isColor(v) ? v : fallback);

const MODES: readonly SpinMode[] = ["normal", "elimination", "weighted", "tally", "mystery"];

/** Images may be https URLs or small data URLs produced by our own uploader. */
export function sanitizeImage(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  if (/^data:image\/(png|jpeg|webp|gif);base64,[a-z0-9+/=]+$/i.test(v) && v.length < 400_000) return v;
  try {
    const u = new URL(v);
    if (u.protocol === "https:" && v.length <= 2048) return u.toString();
  } catch {
    /* invalid URL */
  }
  return undefined;
}

export function sanitizeEntry(v: unknown): WheelEntry | null {
  if (!isObj(v)) return null;
  const text = str(v.text, MAX_ENTRY_TEXT);
  if (text === undefined) return null;
  const entry: WheelEntry = {
    id: str(v.id, 40) || randomId("e"),
    text,
    weight: clampWeight(typeof v.weight === "number" ? v.weight : 1),
    enabled: bool(v.enabled, true),
  };
  if (isColor(v.color)) entry.color = v.color;
  const image = sanitizeImage(v.image);
  if (image) entry.image = image;
  const emoji = str(v.emoji, 16);
  if (emoji) entry.emoji = emoji;
  const hidden = str(v.hidden, MAX_HIDDEN_TEXT);
  if (hidden) entry.hidden = hidden;
  const description = str(v.description, MAX_HIDDEN_TEXT);
  if (description) entry.description = description;
  return entry;
}

export function sanitizeDesign(v: unknown): WheelDesign {
  const d = isObj(v) ? v : {};
  const D = DEFAULT_DESIGN;
  return {
    paletteId: PALETTES.some((p) => p.id === d.paletteId) ? (d.paletteId as string) : D.paletteId,
    backgroundColor: d.backgroundColor === "transparent" ? "transparent" : color(d.backgroundColor, D.backgroundColor),
    textColor: d.textColor === "auto" ? "auto" : color(d.textColor, "auto"),
    pointerStyle: oneOf(d.pointerStyle, ["arrow", "triangle", "pin", "drop"] as const, D.pointerStyle),
    pointerColor: color(d.pointerColor, D.pointerColor),
    font: oneOf(d.font, ["system", "rounded", "serif", "mono", "condensed"] as const, D.font),
    borderWidth: num(d.borderWidth, 0, 24, D.borderWidth),
    borderColor: color(d.borderColor, D.borderColor),
    segmentBorders: bool(d.segmentBorders, D.segmentBorders),
    segmentBorderColor: color(d.segmentBorderColor, D.segmentBorderColor),
    showImages: bool(d.showImages, D.showImages),
    confetti: bool(d.confetti, D.confetti),
    glow: bool(d.glow, D.glow),
    highlightWinner: bool(d.highlightWinner, D.highlightWinner),
    backgroundEffect: oneOf(d.backgroundEffect, ["none", "dots", "rays", "glow"] as const, D.backgroundEffect),
  };
}

export function sanitizeSettings(v: unknown): WheelSettings {
  const s = isObj(v) ? v : {};
  const snd = isObj(s.sound) ? s.sound : {};
  const D = DEFAULT_SETTINGS;
  return {
    mode: oneOf(s.mode, MODES, D.mode),
    spinDuration: num(s.spinDuration, 1, 30, D.spinDuration),
    autoRemove: bool(s.autoRemove, D.autoRemove),
    hideLabels: bool(s.hideLabels, D.hideLabels),
    revealHiddenBeforeSpin: bool(s.revealHiddenBeforeSpin, D.revealHiddenBeforeSpin),
    speakResult: bool(s.speakResult, D.speakResult),
    sound: {
      enabled: bool(snd.enabled, D.sound.enabled),
      volume: num(snd.volume, 0, 1, D.sound.volume),
      tick: oneOf(snd.tick, ["click", "wood", "beep", "none"] as const, D.sound.tick),
      win: oneOf(snd.win, ["fanfare", "chime", "pop", "none"] as const, D.sound.win),
      spin: bool(snd.spin, D.sound.spin),
    },
  };
}

function sanitizeHistory(v: unknown): SpinRecord[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter(isObj)
    .slice(0, 500)
    .map((r) => ({
      n: num(r.n, 1, 1e9, 1),
      entryId: str(r.entryId, 40) ?? "",
      text: str(r.text, MAX_ENTRY_TEXT) ?? "",
      at: num(r.at, 0, 1e15, 0),
      entryCount: num(r.entryCount, 0, MAX_ENTRIES, 0),
      weight: num(r.weight, 0, 1000, 1),
      probability: num(r.probability, 0, 1, 0),
    }));
}

export function sanitizeWheel(v: unknown, opts: { keepHistory?: boolean } = {}): Wheel | null {
  if (!isObj(v) || !Array.isArray(v.entries)) return null;
  const entries = v.entries.slice(0, MAX_ENTRIES).map(sanitizeEntry).filter((e): e is WheelEntry => e !== null);
  // Guarantee unique entry IDs (imports may contain duplicates).
  const seen = new Set<string>();
  for (const e of entries) {
    if (seen.has(e.id)) e.id = randomId("e");
    seen.add(e.id);
  }
  const tally: Record<string, number> = {};
  if (opts.keepHistory && isObj(v.tally)) {
    for (const [k, n] of Object.entries(v.tally)) if (typeof n === "number" && n > 0) tally[k.slice(0, 40)] = Math.floor(n);
  }
  return {
    id: opts.keepHistory ? str(v.id, 40) || randomId("w") : randomId("w"),
    title: str(v.title, 80) ?? "My Wheel",
    entries,
    design: sanitizeDesign(v.design),
    settings: sanitizeSettings(v.settings),
    history: opts.keepHistory ? sanitizeHistory(v.history) : [],
    tally,
  };
}

export function sanitizeAppState(v: unknown): AppState | null {
  if (!isObj(v) || v.version !== 1 || !Array.isArray(v.wheels)) return null;
  const wheels = v.wheels
    .slice(0, MAX_WHEELS)
    .map((w) => sanitizeWheel(w, { keepHistory: true }))
    .filter((w): w is Wheel => w !== null);
  if (wheels.length === 0) return null;
  const activeId = wheels.some((w) => w.id === v.activeId) ? (v.activeId as string) : wheels[0].id;
  const prefs = isObj(v.prefs) ? v.prefs : {};
  return {
    version: 1,
    wheels,
    activeId,
    view: v.view === "grid" && wheels.length > 1 ? "grid" : "focus",
    prefs: { hideEditor: bool(prefs.hideEditor, false) },
  };
}
