"use client";

import { Copy, Expand, LayoutGrid, Maximize2, PanelLeftClose, PanelLeftOpen, Plus, Share2, Shrink, Square, Trash2, X, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Wheel, WheelPreset } from "@/types/wheel";
import { useWheelAppState } from "@/hooks/use-wheel-app-state";
import { MAX_WHEELS } from "@/features/wheel-engine/defaults";
import { getPalette } from "@/features/wheel-engine/palettes";
import { fireConfetti } from "@/features/effects/confetti";
import { speak } from "@/features/sound/sound";
import { track } from "@/features/analytics/analytics";
import { downloadFile, wheelsToJSON } from "@/features/import-export/files";
import { EntryEditor } from "@/components/editor/entry-editor";
import { SettingsPanel, type SettingsTab } from "@/components/settings/settings-panel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/provider";
import { WheelStage, type SpinResult, type WheelStageHandle } from "./wheel-stage";
import { WinnerDialog } from "./winner-dialog";
import { ShareDialog } from "./share-dialog";

interface Props {
  /** Separate saved state per page, so the food wheel doesn't overwrite your name wheel. */
  storageKey: string;
  preset?: WheelPreset;
  /** Reported as template_opened for analytics. */
  templateSlug?: string;
}

const shouldEliminate = (w: Wheel) => w.settings.mode === "elimination" || w.settings.autoRemove;

export function WheelApp({ storageKey, preset, templateSlug }: Props) {
  const { t, fmt } = useI18n();
  const { state, dispatch, notice, setNotice } = useWheelAppState(storageKey, preset);
  const stages = useRef(new Map<string, WheelStageHandle>());
  const stageAreaRef = useRef<HTMLDivElement>(null);
  const [winner, setWinner] = useState<SpinResult | null>(null);
  const [winnerOpen, setWinnerOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState<SettingsTab>("design");
  const [mobileTab, setMobileTab] = useState<"entries" | "settings">("entries");
  const [fullscreen, setFullscreen] = useState<"none" | "native" | "css">("none");
  const [spinningIds, setSpinningIds] = useState<Set<string>>(new Set());
  const [lastResults, setLastResults] = useState<Record<string, string>>({});
  const [announcement, setAnnouncement] = useState("");
  const batchSpin = useRef(false);

  const active = state.wheels.find((w) => w.id === state.activeId) ?? state.wheels[0];
  const grid = state.view === "grid" && state.wheels.length > 1;
  const visibleWheels = grid ? state.wheels : [active];

  const notify = useCallback((kind: "info" | "error", text: string) => setNotice({ kind, text }), [setNotice]);

  useEffect(() => {
    if (templateSlug) track("template_opened", { template: templateSlug });
  }, [templateSlug]);

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(null), notice.kind === "error" ? 7000 : 3500);
    return () => clearTimeout(t);
  }, [notice, setNotice]);

  const onSpinStart = useCallback((id: string) => {
    setSpinningIds((s) => new Set(s).add(id));
  }, []);

  const wheelsRef = useRef(state.wheels);
  wheelsRef.current = state.wheels;

  const onResult = useCallback(
    (result: SpinResult) => {
      const w = wheelsRef.current.find((x) => x.id === result.wheelId);
      setSpinningIds((s) => {
        const n = new Set(s);
        n.delete(result.wheelId);
        return n;
      });
      if (!w) return;
      const { entry, probability } = result.segment;
      const inBatch = batchSpin.current || grid;
      dispatch({
        type: "recordSpin",
        wheelId: w.id,
        record: { entryId: entry.id, text: entry.text, at: Date.now(), entryCount: result.plan.segments.length, weight: entry.weight, probability },
        // In the single-wheel view, elimination happens when the winner dialog closes.
        eliminate: inBatch && shouldEliminate(w),
      });
      setLastResults((r) => ({ ...r, [w.id]: entry.text }));
      setAnnouncement(`${w.title}: ${entry.text}${entry.hidden ? `. ${entry.hidden}` : ""}`);
      track("winner_selected", { mode: w.settings.mode, entries: result.plan.segments.length });
      if (w.settings.speakResult) speak(entry.hidden ? `${entry.text}. ${entry.hidden}` : entry.text);
      if (!inBatch) {
        if (w.design.confetti) fireConfetti({ colors: getPalette(w.design.paletteId).colors });
        setWinner(result);
        setWinnerOpen(true);
      }
    },
    [dispatch, grid],
  );

  const spinOne = useCallback(
    (id: string) => {
      const w = wheelsRef.current.find((x) => x.id === id);
      const handle = stages.current.get(id);
      if (!w || !handle || handle.isSpinning()) return;
      if (!w.entries.some((e) => e.enabled && e.text.trim())) return notify("error", t.wheel.needEntry);
      track("wheel_spin", { mode: w.settings.mode, entries: w.entries.length, wheels: wheelsRef.current.length });
      void handle.spin();
    },
    [notify, t],
  );

  const spinAll = async () => {
    if (state.view !== "grid") dispatch({ type: "setView", view: "grid" });
    // Wait one frame so newly mounted grid stages register their handles.
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    batchSpin.current = true;
    track("wheel_spin", { mode: "spin_all", wheels: wheelsRef.current.length });
    const results = await Promise.all(wheelsRef.current.map((w) => stages.current.get(w.id)?.spin() ?? Promise.resolve(null)));
    batchSpin.current = false;
    if (results.some(Boolean)) {
      fireConfetti();
      setAnnouncement(results.filter(Boolean).map((r) => `${wheelsRef.current.find((w) => w.id === r!.wheelId)?.title}: ${r!.segment.entry.text}`).join(". "));
    }
  };

  const closeWinner = useCallback(
    (remove?: boolean) => {
      setWinnerOpen(false);
      if (!winner) return;
      const w = wheelsRef.current.find((x) => x.id === winner.wheelId);
      if (w && (remove || shouldEliminate(w))) {
        dispatch({ type: "removeWinner", wheelId: w.id, entryId: winner.segment.entry.id });
        track("winner_removed", { mode: w.settings.mode });
      }
    },
    [winner, dispatch],
  );

  // Fullscreen: native API where supported, CSS overlay fallback (e.g. iPhone Safari).
  useEffect(() => {
    const onChange = () => !document.fullscreenElement && setFullscreen((f) => (f === "native" ? "none" : f));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  const toggleFullscreen = async () => {
    if (fullscreen === "native") return void document.exitFullscreen();
    if (fullscreen === "css") return setFullscreen("none");
    track("fullscreen_opened");
    const el = stageAreaRef.current;
    if (el?.requestFullscreen) {
      try {
        await el.requestFullscreen();
        return setFullscreen("native");
      } catch {
        /* fall through to CSS fullscreen */
      }
    }
    setFullscreen("css");
  };

  // Keyboard: Space spins the active wheel when focus isn't in a form control.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== " " || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select, button, a, [contenteditable], [role=dialog]")) return;
      e.preventDefault();
      spinOne(state.activeId);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [spinOne, state.activeId]);

  const activeSpinning = spinningIds.has(active.id);
  const hideEditor = state.prefs.hideEditor;

  return (
    <div className="relative">
      <div className={cn("grid items-start gap-4 lg:gap-5", hideEditor ? "lg:grid-cols-[1fr_300px]" : "lg:grid-cols-[minmax(290px,340px)_1fr_minmax(270px,310px)]")}>
        {/* Center: wheels */}
        <div className={cn("min-w-0 lg:row-start-1", hideEditor ? "lg:col-start-1" : "lg:col-start-2")}>
          <div className="mb-3 flex flex-wrap items-center gap-1.5">
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label={t.wheel.wheels}>
            {state.wheels.map((w) => (
              <button
                key={w.id}
                role="tab"
                aria-selected={w.id === active.id}
                onClick={() => dispatch({ type: "setActive", wheelId: w.id })}
                className={cn(
                  "max-w-40 truncate rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                  w.id === active.id ? "border-primary bg-primary text-primary-fg" : "border-border bg-card hover:bg-muted",
                )}
              >
                {w.title || t.wheel.untitled}
              </button>
            ))}
            </div>
            {state.wheels.length < MAX_WHEELS && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  const n = state.wheels.length + 1;
                  dispatch({ type: "addWheel", preset: { title: fmt(t.wheel.newWheelTitle, { n }), entries: [1, 2, 3, 4].map((i) => fmt(t.wheel.option, { n: i })) } });
                  track("wheel_created", { wheels: state.wheels.length + 1 });
                }}
                title={fmt(t.wheel.addWheelTitle, { max: MAX_WHEELS })}
              >
                <Plus /> {t.wheel.newWheel}
              </Button>
            )}
          </div>

          <div
            ref={stageAreaRef}
            data-fullscreen={fullscreen === "none" ? undefined : fullscreen}
            className={cn(
              "wheel-stage rounded-3xl border border-border bg-card p-3 shadow-sm sm:p-5",
              fullscreen === "css" && "fixed inset-0 z-[90] rounded-none border-0",
            )}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className="min-w-0 truncate text-lg font-bold">{grid ? fmt(t.wheel.wheelsCount, { n: state.wheels.length }) : active.title}</h2>
              <div className="flex shrink-0 gap-1">
                {state.wheels.length > 1 && (
                  <Button size="icon" variant="ghost" onClick={() => dispatch({ type: "setView", view: grid ? "focus" : "grid" })} aria-label={grid ? t.wheel.showOne : t.wheel.showAll} title={grid ? t.wheel.showOne : t.wheel.showAll}>
                    {grid ? <Square /> : <LayoutGrid />}
                  </Button>
                )}
                <Button size="icon" variant="ghost" onClick={() => setShareOpen(true)} aria-label={t.wheel.share} title={t.wheel.share}>
                  <Share2 />
                </Button>
                <Button size="icon" variant="ghost" className="hidden lg:inline-flex" onClick={() => dispatch({ type: "setPrefs", patch: { hideEditor: !hideEditor } })} aria-label={hideEditor ? t.wheel.showPanel : t.wheel.hidePanel} title={hideEditor ? t.wheel.showPanel : t.wheel.hidePanel}>
                  {hideEditor ? <PanelLeftOpen /> : <PanelLeftClose />}
                </Button>
                <Button size="icon" variant="ghost" onClick={toggleFullscreen} aria-label={fullscreen === "none" ? t.wheel.enterFullscreen : t.wheel.exitFullscreen} title={fullscreen === "none" ? t.wheel.enterFullscreen : t.wheel.exitFullscreen}>
                  {fullscreen === "none" ? <Maximize2 /> : <Shrink />}
                </Button>
              </div>
            </div>

            <div className={cn(grid ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "")}>
              {visibleWheels.map((w) => (
                <div key={w.id} className={cn(grid && "rounded-2xl border border-border p-2", grid && w.id === active.id && "ring-2 ring-primary")}>
                  {grid && (
                    <button type="button" onClick={() => dispatch({ type: "setActive", wheelId: w.id })} className="mb-1 block w-full truncate text-center text-sm font-bold hover:text-primary">
                      {w.title}
                    </button>
                  )}
                  <WheelStage
                    ref={(h) => {
                      if (h) stages.current.set(w.id, h);
                      else stages.current.delete(w.id);
                    }}
                    wheel={w}
                    compact={grid}
                    onSpinStart={onSpinStart}
                    onResult={onResult}
                    playWinSound={!batchSpin.current}
                  />
                  {grid && (
                    <p className="mt-2 min-h-6 truncate text-center text-sm" aria-live="polite">
                      {lastResults[w.id] ? (
                        <>
                          <span className="text-muted-fg">{t.wheel.result} </span>
                          <strong>{lastResults[w.id]}</strong>
                        </>
                      ) : (
                        <span className="text-muted-fg">{t.wheel.notSpun}</span>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {!grid && (
                <Button variant="primary" size="lg" onClick={() => spinOne(active.id)} disabled={activeSpinning} className="min-w-40">
                  <Zap /> {activeSpinning ? t.wheel.spinning : t.wheel.spin}
                </Button>
              )}
              {state.wheels.length > 1 && (
                <Button variant={grid ? "primary" : "outline"} size="lg" onClick={spinAll} disabled={spinningIds.size > 0}>
                  <Expand /> {fmt(t.wheel.spinAll, { n: state.wheels.length })}
                </Button>
              )}
            </div>
            {!grid && lastResults[active.id] && (
              <p className="mt-3 text-center text-sm text-muted-fg">
                {t.wheel.lastResult} <strong className="text-fg">{lastResults[active.id]}</strong>
              </p>
            )}
            <p className="mt-2 hidden text-center text-xs text-muted-fg sm:block">
              {t.wheel.tipBefore} <kbd className="rounded border border-border px-1">{t.wheel.spaceKey}</kbd> {t.wheel.tipAfter}
            </p>
            {fullscreen === "css" && (
              <Button className="absolute end-3 top-3" size="icon" onClick={toggleFullscreen} aria-label={t.wheel.exitFullscreen}>
                <X />
              </Button>
            )}
            <WinnerDialog
              open={winnerOpen}
              segment={winner?.segment ?? null}
              wheelTitle={state.wheels.find((w) => w.id === winner?.wheelId)?.title ?? ""}
              eliminating={!!winner && shouldEliminate(state.wheels.find((w) => w.id === winner.wheelId) ?? active)}
              onClose={() => closeWinner()}
              onRemove={() => closeWinner(true)}
              onSpinAgain={() => {
                closeWinner();
                const id = winner?.wheelId ?? active.id;
                setTimeout(() => spinOne(id), 120);
              }}
              onHistory={() => {
                closeWinner();
                setSettingsTab("history");
                setMobileTab("settings");
                document.getElementById("wheel-settings")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          </div>

          {/* Wheel management */}
          <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-xs">
            <Button size="sm" variant="ghost" onClick={() => dispatch({ type: "duplicateWheel", wheelId: active.id })} disabled={state.wheels.length >= MAX_WHEELS}>
              <Copy /> {t.wheel.duplicateWheel}
            </Button>
            {state.wheels.length > 1 && (
              <>
                <Button size="sm" variant="ghost" onClick={() => downloadFile("wheels.json", wheelsToJSON(state.wheels), "application/json")}>
                  {t.wheel.exportAll}
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    if (confirm(fmt(t.wheel.confirmDelete, { title: active.title }))) dispatch({ type: "removeWheel", wheelId: active.id });
                  }}
                >
                  <Trash2 /> {t.wheel.deleteWheel}
                </Button>
              </>
            )}
          </div>

          {/* Mobile panel switcher */}
          <div className="mt-4 lg:hidden">
            <div className="flex rounded-xl bg-muted p-1" role="tablist" aria-label={t.wheel.panels}>
              {(["entries", "settings"] as const).map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={mobileTab === tab}
                  onClick={() => setMobileTab(tab)}
                  className={cn("flex-1 rounded-lg py-2 text-sm font-semibold", mobileTab === tab ? "bg-card shadow-sm" : "text-muted-fg")}
                >
                  {tab === "entries" ? fmt(t.wheel.entriesTab, { n: active.entries.length }) : t.wheel.settingsTab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Left: entries */}
        <section
          aria-label={t.wheel.entries}
          className={cn(
            "rounded-3xl border border-border bg-card p-4 shadow-sm lg:col-start-1 lg:row-start-1",
            mobileTab !== "entries" && "max-lg:hidden",
            hideEditor && "lg:hidden",
          )}
        >
          <EntryEditor wheel={active} wheelCount={state.wheels.length} dispatch={dispatch} notify={notify} />
        </section>

        {/* Right: settings */}
        <section
          id="wheel-settings"
          aria-label={t.wheel.settings}
          className={cn("scroll-mt-20 rounded-3xl border border-border bg-card p-4 shadow-sm lg:row-start-1", hideEditor ? "lg:col-start-2" : "lg:col-start-3", mobileTab !== "settings" && "max-lg:hidden")}
        >
          <SettingsPanel
            wheel={active}
            tab={settingsTab}
            onTab={setSettingsTab}
            dispatch={dispatch}
            notify={notify}
            hideEditor={hideEditor}
            onHideEditor={(v) => dispatch({ type: "setPrefs", patch: { hideEditor: v } })}
          />
        </section>
      </div>

      <ShareDialog open={shareOpen} onClose={() => setShareOpen(false)} wheels={state.wheels} activeId={active.id} />

      <p className="sr-only" aria-live="assertive" role="status">
        {announcement}
      </p>
      {notice && (
        <div
          role={notice.kind === "error" ? "alert" : "status"}
          className={cn(
            "fixed bottom-4 left-1/2 z-[130] w-[min(92vw,28rem)] -translate-x-1/2 rounded-2xl px-4 py-3 text-sm font-medium shadow-xl",
            notice.kind === "error" ? "bg-danger text-white" : "bg-fg text-bg",
          )}
        >
          {notice.text}
        </div>
      )}
    </div>
  );
}
