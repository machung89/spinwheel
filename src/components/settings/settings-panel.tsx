"use client";

import { Check, ClipboardCopy, Download, Trash2, Volume2 } from "lucide-react";
import type { SpinMode, Wheel, WheelDesign } from "@/types/wheel";
import type { Action } from "@/features/wheel-engine/reducer";
import { PALETTES } from "@/features/wheel-engine/palettes";
import { historyToCSV } from "@/features/import-export/csv";
import { downloadFile, slugifyFilename } from "@/features/import-export/files";
import { playTick, playWin, unlockAudio } from "@/features/sound/sound";
import { Button } from "@/components/ui/button";
import { Field, SegmentedControl, Select, Slider, Switch } from "@/components/ui/fields";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/provider";

export type SettingsTab = "design" | "spin" | "sound" | "history";



interface Props {
  wheel: Wheel;
  tab: SettingsTab;
  onTab: (t: SettingsTab) => void;
  dispatch: (a: Action) => void;
  notify: (kind: "info" | "error", text: string) => void;
  hideEditor: boolean;
  onHideEditor: (v: boolean) => void;
}

function ColorInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center justify-between gap-3 py-1 text-sm">
      <span className="font-medium">{label}</span>
      <span className="relative h-8 w-12 overflow-hidden rounded-lg border border-border" style={{ background: value }}>
        <input type="color" value={value} onChange={(e) => onChange(e.target.value.toUpperCase())} className="absolute inset-0 cursor-pointer opacity-0" aria-label={label} />
      </span>
    </label>
  );
}

export function SettingsPanel({ wheel, tab, onTab, dispatch, notify, hideEditor, onHideEditor }: Props) {
  const { t, fmt } = useI18n();
  const S = t.settings;
  const MODES: { value: SpinMode; label: string; description: string }[] = [
    { value: "normal", label: S.modeNormal, description: S.modeNormalDesc },
    { value: "elimination", label: S.modeElimination, description: S.modeEliminationDesc },
    { value: "weighted", label: S.modeWeighted, description: S.modeWeightedDesc },
    { value: "tally", label: S.modeTally, description: S.modeTallyDesc },
    { value: "mystery", label: S.modeMystery, description: S.modeMysteryDesc },
  ];
  const d = wheel.design;
  const s = wheel.settings;
  const setDesign = (patch: Partial<WheelDesign>) => dispatch({ type: "updateDesign", wheelId: wheel.id, patch });
  const setSettings = (patch: Partial<Wheel["settings"]>) => dispatch({ type: "updateSettings", wheelId: wheel.id, patch });
  const hasCustomColors = wheel.entries.some((e) => e.color);

  const copyHistory = async () => {
    const text = wheel.history.map((h) => `#${h.n} ${h.text} — ${new Date(h.at).toLocaleString()}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      notify("info", S.copiedResults);
    } catch {
      notify("error", S.clipboardFailed);
    }
  };

  const tallyRows = Object.entries(wheel.tally)
    .map(([id, n]) => ({ id, n, text: wheel.entries.find((e) => e.id === id)?.text ?? wheel.history.find((h) => h.entryId === id)?.text ?? S.removed }))
    .sort((a, b) => b.n - a.n);

  return (
    <div className="flex flex-col gap-4">
      <SegmentedControl<SettingsTab>
        label={S.sections}
        value={tab}
        onChange={onTab}
        options={[
          { value: "design", label: S.design },
          { value: "spin", label: S.spin },
          { value: "sound", label: S.sound },
          { value: "history", label: `${S.history}${wheel.history.length ? ` ${wheel.history.length}` : ""}` },
        ]}
      />

      {tab === "design" && (
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold text-muted-fg">{S.colorTheme}</p>
            <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label={S.colorTheme}>
              {PALETTES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={d.paletteId === p.id}
                  title={p.name}
                  onClick={() => setDesign({ paletteId: p.id })}
                  className={cn(
                    "relative h-9 overflow-hidden rounded-lg border-2 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-ring",
                    d.paletteId === p.id ? "border-fg" : "border-transparent",
                  )}
                  style={{ background: `conic-gradient(${p.colors.map((c, i) => `${c} ${(i / p.colors.length) * 360}deg ${((i + 1) / p.colors.length) * 360}deg`).join(",")})` }}
                >
                  <span className="sr-only">{p.name}</span>
                  {d.paletteId === p.id && <Check className="absolute inset-0 m-auto size-4 rounded-full bg-white p-0.5 text-black" />}
                </button>
              ))}
            </div>
            {hasCustomColors && (
              <Button
                size="sm"
                variant="ghost"
                className="mt-2"
                onClick={() => wheel.entries.forEach((e) => e.color && dispatch({ type: "updateEntry", wheelId: wheel.id, entryId: e.id, patch: { color: undefined } }))}
              >
                {S.resetColors}
              </Button>
            )}
          </div>

          <Field label={S.pointer}>
            <SegmentedControl
              label={S.pointerStyle}
              value={d.pointerStyle}
              onChange={(v) => setDesign({ pointerStyle: v })}
              options={[
                { value: "arrow", label: S.pointerArrow },
                { value: "triangle", label: S.pointerTriangle },
                { value: "pin", label: S.pointerPin },
                { value: "drop", label: S.pointerDrop },
              ]}
            />
          </Field>
          <ColorInput label={S.pointerColor} value={d.pointerColor} onChange={(v) => setDesign({ pointerColor: v })} />

          <Field label={S.font} htmlFor="wheel-font">
            <Select id="wheel-font" value={d.font} onChange={(e) => setDesign({ font: e.target.value as WheelDesign["font"] })}>
              <option value="system">{S.fontSystem}</option>
              <option value="rounded">{S.fontRounded}</option>
              <option value="serif">{S.fontSerif}</option>
              <option value="mono">{S.fontMono}</option>
              <option value="condensed">{S.fontCondensed}</option>
            </Select>
          </Field>

          <div className="space-y-1">
            <Switch label={S.autoText} description={S.autoTextDesc} checked={d.textColor === "auto"} onChange={(v) => setDesign({ textColor: v ? "auto" : "#FFFFFF" })} />
            {d.textColor !== "auto" && <ColorInput label={S.textColor} value={d.textColor} onChange={(v) => setDesign({ textColor: v })} />}
          </div>

          <Slider label={S.border} value={d.borderWidth} min={0} max={24} onChange={(v) => setDesign({ borderWidth: v })} format={(v) => `${v}px`} />
          {d.borderWidth > 0 && <ColorInput label={S.borderColor} value={d.borderColor} onChange={(v) => setDesign({ borderColor: v })} />}
          <Switch label={S.dividers} checked={d.segmentBorders} onChange={(v) => setDesign({ segmentBorders: v })} />
          {d.segmentBorders && <ColorInput label={S.dividerColor} value={d.segmentBorderColor} onChange={(v) => setDesign({ segmentBorderColor: v })} />}

          <Field label={S.background} htmlFor="wheel-bg">
            <Select id="wheel-bg" value={d.backgroundEffect} onChange={(e) => setDesign({ backgroundEffect: e.target.value as WheelDesign["backgroundEffect"] })}>
              <option value="none">{S.bgNone}</option>
              <option value="dots">{S.bgDots}</option>
              <option value="rays">{S.bgRays}</option>
              <option value="glow">{S.bgGlow}</option>
            </Select>
          </Field>
          <Switch label={S.customBg} checked={d.backgroundColor !== "transparent"} onChange={(v) => setDesign({ backgroundColor: v ? "#FFF7E6" : "transparent" })} />
          {d.backgroundColor !== "transparent" && <ColorInput label={S.bgColor} value={d.backgroundColor} onChange={(v) => setDesign({ backgroundColor: v })} />}

          <div className="border-t border-border pt-3">
            <p className="mb-1 text-xs font-semibold text-muted-fg">{S.effects}</p>
            <Switch label={S.showImages} checked={d.showImages} onChange={(v) => setDesign({ showImages: v })} />
            <Switch label={S.confetti} checked={d.confetti} onChange={(v) => setDesign({ confetti: v })} />
            <Switch label={S.highlight} description={S.highlightDesc} checked={d.highlightWinner} onChange={(v) => setDesign({ highlightWinner: v })} />
            <Switch label={S.glow} checked={d.glow} onChange={(v) => setDesign({ glow: v })} />
          </div>
        </div>
      )}

      {tab === "spin" && (
        <div className="space-y-4">
          <fieldset className="space-y-1.5">
            <legend className="mb-1.5 text-xs font-semibold text-muted-fg">{S.spinMode}</legend>
            {MODES.map((m) => (
              <label
                key={m.value}
                className={cn(
                  "flex cursor-pointer gap-3 rounded-xl border p-2.5 transition-colors",
                  s.mode === m.value ? "border-primary bg-primary-soft" : "border-border hover:bg-muted",
                )}
              >
                <input type="radio" name={`mode-${wheel.id}`} value={m.value} checked={s.mode === m.value} onChange={() => setSettings({ mode: m.value })} className="mt-1 accent-[var(--primary)]" />
                <span>
                  <span className="block text-sm font-semibold">{m.label}</span>
                  <span className="block text-xs text-muted-fg">{m.description}</span>
                </span>
              </label>
            ))}
          </fieldset>
          <Slider label={S.duration} value={s.spinDuration} min={1} max={30} onChange={(v) => setSettings({ spinDuration: v })} format={(v) => `${v}s`} />
          <Switch label={S.autoRemove} description={S.autoRemoveDesc} checked={s.autoRemove} onChange={(v) => setSettings({ autoRemove: v })} />
          <Switch label={S.hideLabels} checked={s.hideLabels} onChange={(v) => setSettings({ hideLabels: v })} />
          <Switch label={S.showHidden} description={S.showHiddenDesc} checked={s.revealHiddenBeforeSpin} onChange={(v) => setSettings({ revealHiddenBeforeSpin: v })} />
          <Switch label={S.speak} description={S.speakDesc} checked={s.speakResult} onChange={(v) => setSettings({ speakResult: v })} />
          <Switch label={S.hidePanel} description={S.hidePanelDesc} checked={hideEditor} onChange={onHideEditor} />
        </div>
      )}

      {tab === "sound" && (
        <div className="space-y-4">
          <Switch label={S.soundFx} checked={s.sound.enabled} onChange={(v) => setSettings({ sound: { ...s.sound, enabled: v } })} />
          <Slider label={S.volume} value={Math.round(s.sound.volume * 100)} min={0} max={100} onChange={(v) => setSettings({ sound: { ...s.sound, volume: v / 100 } })} format={(v) => `${v}%`} />
          <Field label={S.tickSound} htmlFor="tick-sound">
            <Select id="tick-sound" value={s.sound.tick} onChange={(e) => setSettings({ sound: { ...s.sound, tick: e.target.value as typeof s.sound.tick } })}>
              <option value="click">{S.tickClick}</option>
              <option value="wood">{S.tickWood}</option>
              <option value="beep">{S.tickBeep}</option>
              <option value="none">{S.none}</option>
            </Select>
          </Field>
          <Field label={S.winSound} htmlFor="win-sound">
            <Select id="win-sound" value={s.sound.win} onChange={(e) => setSettings({ sound: { ...s.sound, win: e.target.value as typeof s.sound.win } })}>
              <option value="fanfare">{S.winFanfare}</option>
              <option value="chime">{S.winChime}</option>
              <option value="pop">{S.winPop}</option>
              <option value="none">{S.none}</option>
            </Select>
          </Field>
          <Switch label={S.whoosh} checked={s.sound.spin} onChange={(v) => setSettings({ sound: { ...s.sound, spin: v } })} />
          <Button
            size="sm"
            onClick={() => {
              unlockAudio();
              playTick(s.sound.tick, s.sound.volume);
              setTimeout(() => playWin(s.sound.win, s.sound.volume), 250);
            }}
            disabled={!s.sound.enabled}
          >
            <Volume2 /> {S.testSound}
          </Button>
        </div>
      )}

      {tab === "history" && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            <Button size="sm" onClick={copyHistory} disabled={!wheel.history.length}>
              <ClipboardCopy /> {S.copyAll}
            </Button>
            <Button size="sm" disabled={!wheel.history.length} onClick={() => downloadFile(`${slugifyFilename(wheel.title)}-results.csv`, historyToCSV(wheel.history), "text/csv;charset=utf-8")}>
              <Download /> {S.exportCsv}
            </Button>
            <Button size="sm" variant="danger" disabled={!wheel.history.length && !tallyRows.length} onClick={() => { dispatch({ type: "clearHistory", wheelId: wheel.id }); dispatch({ type: "resetTally", wheelId: wheel.id }); }}>
              <Trash2 /> {S.clear}
            </Button>
          </div>
          {tallyRows.length > 0 && (
            <div className="rounded-xl border border-border p-3">
              <p className="mb-2 text-xs font-semibold text-muted-fg">{S.winTally}</p>
              <ul className="space-y-1 text-sm">
                {tallyRows.slice(0, 10).map((r) => (
                  <li key={r.id} className="flex justify-between gap-2">
                    <span className="truncate">{r.text}</span>
                    <span className="font-semibold tabular-nums">{r.n}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {wheel.history.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-fg">{S.historyEmpty}</p>
          ) : (
            <ol className="max-h-96 space-y-1 overflow-y-auto text-sm" aria-label={S.historyLabel}>
              {wheel.history.map((h) => (
                <li key={h.n} className="flex items-baseline gap-2 rounded-lg px-2 py-1.5 odd:bg-muted/60">
                  <span className="w-8 shrink-0 text-xs tabular-nums text-muted-fg">#{h.n}</span>
                  <span className="min-w-0 flex-1 truncate font-medium">{h.text}</span>
                  <span className="shrink-0 text-xs text-muted-fg" title={fmt(S.historyTooltip, { n: h.entryCount, w: h.weight, p: (h.probability * 100).toFixed(1) })}>
                    {new Date(h.at).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
