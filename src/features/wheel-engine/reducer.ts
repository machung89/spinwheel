import type { AppPrefs, AppState, SpinRecord, Wheel, WheelDesign, WheelEntry, WheelPreset, WheelSettings } from "@/types/wheel";
import { randomId, shuffle } from "@/features/random/rng";
import { clampWeight, makeEntry, makeWheel, MAX_ENTRIES, MAX_ENTRY_TEXT, MAX_WHEELS } from "./defaults";

export const MAX_HISTORY = 500;

export type Action =
  | { type: "load"; state: AppState }
  | { type: "setTitle"; wheelId: string; title: string }
  | { type: "addEntry"; wheelId: string; text?: string }
  | { type: "appendEntries"; wheelId: string; entries: Array<Partial<WheelEntry> & { text: string }> }
  | { type: "replaceEntries"; wheelId: string; entries: Array<Partial<WheelEntry> & { text: string }> }
  | { type: "updateEntry"; wheelId: string; entryId: string; patch: Partial<Omit<WheelEntry, "id">> }
  | { type: "removeEntry"; wheelId: string; entryId: string }
  | { type: "duplicateEntry"; wheelId: string; entryId: string }
  | { type: "moveEntry"; wheelId: string; entryId: string; delta: number }
  | { type: "shuffle"; wheelId: string }
  | { type: "sort"; wheelId: string; direction: "asc" | "desc" }
  | { type: "restoreAll"; wheelId: string }
  | { type: "clearEntries"; wheelId: string }
  | { type: "updateDesign"; wheelId: string; patch: Partial<WheelDesign> }
  | { type: "updateSettings"; wheelId: string; patch: Partial<WheelSettings> }
  | { type: "recordSpin"; wheelId: string; record: Omit<SpinRecord, "n">; eliminate: boolean }
  | { type: "removeWinner"; wheelId: string; entryId: string }
  | { type: "clearHistory"; wheelId: string }
  | { type: "resetTally"; wheelId: string }
  | { type: "addWheel"; preset?: WheelPreset }
  | { type: "importWheels"; wheels: Wheel[]; replace: boolean }
  | { type: "duplicateWheel"; wheelId: string }
  | { type: "removeWheel"; wheelId: string }
  | { type: "setActive"; wheelId: string }
  | { type: "setView"; view: AppState["view"] }
  | { type: "setPrefs"; patch: Partial<AppPrefs> };

function mapWheel(state: AppState, wheelId: string, fn: (w: Wheel) => Wheel): AppState {
  let changed = false;
  const wheels = state.wheels.map((w) => {
    if (w.id !== wheelId) return w;
    changed = true;
    return fn(w);
  });
  return changed ? { ...state, wheels } : state;
}

const withEntries = (w: Wheel, entries: WheelEntry[]): Wheel => ({ ...w, entries });

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "load":
      return action.state;

    case "setTitle":
      return mapWheel(state, action.wheelId, (w) => ({ ...w, title: action.title.slice(0, 80) }));

    case "addEntry":
      return mapWheel(state, action.wheelId, (w) =>
        w.entries.length >= MAX_ENTRIES ? w : withEntries(w, [...w.entries, makeEntry(action.text ?? "")]),
      );

    case "appendEntries":
      return mapWheel(state, action.wheelId, (w) =>
        withEntries(w, [...w.entries, ...action.entries.map((e) => makeEntry({ ...e, id: undefined }))].slice(0, MAX_ENTRIES)),
      );

    case "replaceEntries":
      return mapWheel(state, action.wheelId, (w) => ({
        ...w,
        entries: action.entries.slice(0, MAX_ENTRIES).map((e) => makeEntry({ ...e, id: undefined })),
        tally: {},
      }));

    case "updateEntry":
      return mapWheel(state, action.wheelId, (w) =>
        withEntries(
          w,
          w.entries.map((e) => {
            if (e.id !== action.entryId) return e;
            const next = { ...e, ...action.patch };
            next.text = next.text.slice(0, MAX_ENTRY_TEXT);
            next.weight = clampWeight(next.weight);
            return next;
          }),
        ),
      );

    case "removeEntry":
      return mapWheel(state, action.wheelId, (w) => withEntries(w, w.entries.filter((e) => e.id !== action.entryId)));

    case "duplicateEntry":
      return mapWheel(state, action.wheelId, (w) => {
        if (w.entries.length >= MAX_ENTRIES) return w;
        const i = w.entries.findIndex((e) => e.id === action.entryId);
        if (i < 0) return w;
        const copy = { ...w.entries[i], id: randomId("e") };
        return withEntries(w, [...w.entries.slice(0, i + 1), copy, ...w.entries.slice(i + 1)]);
      });

    case "moveEntry":
      return mapWheel(state, action.wheelId, (w) => {
        const i = w.entries.findIndex((e) => e.id === action.entryId);
        const j = i + action.delta;
        if (i < 0 || j < 0 || j >= w.entries.length) return w;
        const entries = w.entries.slice();
        [entries[i], entries[j]] = [entries[j], entries[i]];
        return withEntries(w, entries);
      });

    case "shuffle":
      return mapWheel(state, action.wheelId, (w) => withEntries(w, shuffle(w.entries)));

    case "sort": {
      const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
      const dir = action.direction === "asc" ? 1 : -1;
      return mapWheel(state, action.wheelId, (w) =>
        withEntries(w, w.entries.slice().sort((a, b) => dir * collator.compare(a.text, b.text))),
      );
    }

    case "restoreAll":
      return mapWheel(state, action.wheelId, (w) => withEntries(w, w.entries.map((e) => (e.enabled ? e : { ...e, enabled: true }))));

    case "clearEntries":
      return mapWheel(state, action.wheelId, (w) => ({ ...w, entries: [], tally: {} }));

    case "updateDesign":
      return mapWheel(state, action.wheelId, (w) => ({ ...w, design: { ...w.design, ...action.patch } }));

    case "updateSettings":
      return mapWheel(state, action.wheelId, (w) => ({
        ...w,
        settings: {
          ...w.settings,
          ...action.patch,
          sound: { ...w.settings.sound, ...action.patch.sound },
        },
      }));

    case "recordSpin":
      return mapWheel(state, action.wheelId, (w) => {
        const last = w.history[0]?.n ?? 0;
        const record: SpinRecord = { ...action.record, n: last + 1 };
        return {
          ...w,
          history: [record, ...w.history].slice(0, MAX_HISTORY),
          tally: { ...w.tally, [record.entryId]: (w.tally[record.entryId] ?? 0) + 1 },
          entries: action.eliminate
            ? w.entries.map((e) => (e.id === record.entryId ? { ...e, enabled: false } : e))
            : w.entries,
        };
      });

    case "removeWinner":
      return mapWheel(state, action.wheelId, (w) =>
        withEntries(w, w.entries.map((e) => (e.id === action.entryId ? { ...e, enabled: false } : e))),
      );

    case "clearHistory":
      return mapWheel(state, action.wheelId, (w) => ({ ...w, history: [] }));

    case "resetTally":
      return mapWheel(state, action.wheelId, (w) => ({ ...w, tally: {} }));

    case "addWheel": {
      if (state.wheels.length >= MAX_WHEELS) return state;
      const wheel = makeWheel(action.preset ?? { title: `Wheel ${state.wheels.length + 1}`, entries: ["Option 1", "Option 2", "Option 3", "Option 4"] });
      return { ...state, wheels: [...state.wheels, wheel], activeId: wheel.id };
    }

    case "importWheels": {
      if (action.wheels.length === 0) return state;
      const wheels = (action.replace ? action.wheels : [...state.wheels, ...action.wheels]).slice(0, MAX_WHEELS);
      const activeId = action.replace ? wheels[0].id : (action.wheels.find((w) => wheels.includes(w)) ?? state.wheels[0]).id;
      return { ...state, wheels, activeId };
    }

    case "duplicateWheel": {
      if (state.wheels.length >= MAX_WHEELS) return state;
      const src = state.wheels.find((w) => w.id === action.wheelId);
      if (!src) return state;
      const copy: Wheel = {
        ...src,
        id: randomId("w"),
        title: `${src.title} (copy)`.slice(0, 80),
        entries: src.entries.map((e) => ({ ...e, id: randomId("e") })),
        history: [],
        tally: {},
      };
      return { ...state, wheels: [...state.wheels, copy], activeId: copy.id };
    }

    case "removeWheel": {
      if (state.wheels.length <= 1) return state;
      const wheels = state.wheels.filter((w) => w.id !== action.wheelId);
      const activeId = state.activeId === action.wheelId ? wheels[0].id : state.activeId;
      return { ...state, wheels, activeId, view: wheels.length === 1 ? "focus" : state.view };
    }

    case "setActive":
      return state.wheels.some((w) => w.id === action.wheelId) ? { ...state, activeId: action.wheelId } : state;

    case "setView":
      return { ...state, view: action.view };

    case "setPrefs":
      return { ...state, prefs: { ...state.prefs, ...action.patch } };
  }
}
