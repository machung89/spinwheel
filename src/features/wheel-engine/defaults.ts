import type { AppState, Wheel, WheelDesign, WheelEntry, WheelPreset, WheelSettings } from "@/types/wheel";
import { randomId } from "@/features/random/rng";
import { DEFAULT_PALETTE_ID } from "./palettes";

export const MAX_WHEELS = 8;
export const MAX_ENTRIES = 1000;
export const MAX_ENTRY_TEXT = 200;
export const MAX_HIDDEN_TEXT = 1000;
export const MIN_WEIGHT = 0.001;
export const MAX_WEIGHT = 1000;

export const DEFAULT_DESIGN: WheelDesign = {
  paletteId: DEFAULT_PALETTE_ID,
  backgroundColor: "transparent",
  textColor: "auto",
  pointerStyle: "arrow",
  pointerColor: "#1F2937",
  font: "system",
  borderWidth: 6,
  borderColor: "#FFFFFF",
  segmentBorders: true,
  segmentBorderColor: "#FFFFFF",
  showImages: true,
  confetti: true,
  glow: false,
  highlightWinner: true,
  backgroundEffect: "none",
};

export const DEFAULT_SETTINGS: WheelSettings = {
  mode: "normal",
  spinDuration: 6,
  autoRemove: false,
  hideLabels: false,
  revealHiddenBeforeSpin: false,
  speakResult: false,
  sound: { enabled: true, volume: 0.6, tick: "click", win: "fanfare", spin: true },
};

export const DEFAULT_ENTRIES = ["Ava", "Liam", "Sofia", "Noah", "Maya", "Ethan", "Chloe", "Lucas"];

export function makeEntry(input: string | (Partial<WheelEntry> & { text: string })): WheelEntry {
  const base = typeof input === "string" ? { text: input } : input;
  return {
    ...base,
    id: base.id ?? randomId("e"),
    text: base.text.slice(0, MAX_ENTRY_TEXT),
    weight: clampWeight(base.weight ?? 1),
    enabled: base.enabled ?? true,
  };
}

export function clampWeight(w: number): number {
  if (!Number.isFinite(w)) return 1;
  return Math.min(MAX_WEIGHT, Math.max(MIN_WEIGHT, w));
}

/**
 * @param stableIds Use deterministic IDs. Needed for the server-rendered initial
 * state so the HTML matches the client's first render (random IDs would differ).
 */
export function makeWheel(preset?: WheelPreset, stableIds = false): Wheel {
  const p = preset ?? { title: "My Wheel", entries: DEFAULT_ENTRIES };
  return {
    id: stableIds ? "w-initial" : randomId("w"),
    title: p.title,
    entries: p.entries.slice(0, MAX_ENTRIES).map((e, i) => {
      const entry = makeEntry(e);
      if (stableIds) entry.id = `e-initial-${i}`;
      return entry;
    }),
    design: { ...DEFAULT_DESIGN, ...(p.paletteId ? { paletteId: p.paletteId } : {}), ...p.design },
    settings: {
      ...DEFAULT_SETTINGS,
      ...p.settings,
      ...(p.mode ? { mode: p.mode } : {}),
      sound: { ...DEFAULT_SETTINGS.sound, ...p.settings?.sound },
    },
    history: [],
    tally: {},
  };
}

export function makeAppState(preset?: WheelPreset, stableIds = false): AppState {
  const wheel = makeWheel(preset, stableIds);
  return { version: 1, wheels: [wheel], activeId: wheel.id, view: "focus", prefs: { hideEditor: false } };
}
