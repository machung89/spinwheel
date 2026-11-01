export type SpinMode = "normal" | "elimination" | "weighted" | "tally" | "mystery";

export type PointerStyle = "arrow" | "triangle" | "pin" | "drop";
export type WheelFont = "system" | "rounded" | "serif" | "mono" | "condensed";
export type BackgroundEffect = "none" | "dots" | "rays" | "glow";
export type TickSound = "click" | "wood" | "beep" | "none";
export type WinSound = "fanfare" | "chime" | "pop" | "none";

export interface WheelEntry {
  id: string;
  text: string;
  /** Overrides the palette color for this segment. */
  color?: string;
  /** Data URL (uploaded, downscaled) or https URL. */
  image?: string;
  emoji?: string;
  /** Relative weight; only affects probability and segment size in weighted mode. */
  weight: number;
  enabled: boolean;
  /** Hidden activity / question / prize detail revealed after the spin. */
  hidden?: string;
  description?: string;
}

export interface WheelDesign {
  paletteId: string;
  backgroundColor: string;
  /** "auto" picks black or white per segment for contrast. */
  textColor: "auto" | string;
  pointerStyle: PointerStyle;
  pointerColor: string;
  font: WheelFont;
  borderWidth: number;
  borderColor: string;
  segmentBorders: boolean;
  segmentBorderColor: string;
  showImages: boolean;
  confetti: boolean;
  glow: boolean;
  highlightWinner: boolean;
  backgroundEffect: BackgroundEffect;
}

export interface SoundSettings {
  enabled: boolean;
  volume: number;
  tick: TickSound;
  win: WinSound;
  spin: boolean;
}

export interface WheelSettings {
  mode: SpinMode;
  /** Seconds. */
  spinDuration: number;
  autoRemove: boolean;
  hideLabels: boolean;
  revealHiddenBeforeSpin: boolean;
  speakResult: boolean;
  sound: SoundSettings;
}

export interface SpinRecord {
  n: number;
  entryId: string;
  text: string;
  /** Epoch milliseconds. */
  at: number;
  entryCount: number;
  weight: number;
  probability: number;
}

export interface Wheel {
  id: string;
  title: string;
  entries: WheelEntry[];
  design: WheelDesign;
  settings: WheelSettings;
  history: SpinRecord[];
  tally: Record<string, number>;
}

export interface AppPrefs {
  hideEditor: boolean;
}

export interface AppState {
  version: 1;
  wheels: Wheel[];
  activeId: string;
  view: "focus" | "grid";
  prefs: AppPrefs;
}

/** A starting configuration supplied by a landing page or template. */
export interface WheelPreset {
  title: string;
  entries: Array<string | Partial<WheelEntry> & { text: string }>;
  paletteId?: string;
  mode?: SpinMode;
  design?: Partial<WheelDesign>;
  settings?: Partial<WheelSettings>;
}

export interface Segment {
  index: number;
  entry: WheelEntry;
  /** Degrees, clockwise from the pointer (top) in the wheel's own frame. */
  start: number;
  end: number;
  color: string;
  probability: number;
}
