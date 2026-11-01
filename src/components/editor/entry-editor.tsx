"use client";

import { ArrowDownAZ, ArrowUpZA, ClipboardPaste, Download, FileUp, Plus, RotateCcw, Shuffle, Trash2 } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import type { Wheel } from "@/types/wheel";
import type { Action } from "@/features/wheel-engine/reducer";
import { MAX_ENTRIES, MAX_WHEELS } from "@/features/wheel-engine/defaults";
import { getPalette, segmentColor } from "@/features/wheel-engine/palettes";
import { entriesToCSV, parseBulkText } from "@/features/import-export/csv";
import { downloadFile, importEntriesFromFile, importWheelsFromFile, slugifyFilename, wheelsToJSON } from "@/features/import-export/files";
import { track } from "@/features/analytics/analytics";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/fields";
import { Modal } from "@/components/ui/modal";
import { EntryRow } from "./entry-row";
import { useI18n } from "@/i18n/provider";

interface Props {
  wheel: Wheel;
  wheelCount: number;
  dispatch: (a: Action) => void;
  notify: (kind: "info" | "error", text: string) => void;
}

export function EntryEditor({ wheel, wheelCount, dispatch, notify }: Props) {
  const { t, fmt, errorText, noticeText } = useI18n();
  const e = t.editor;
  const [draft, setDraft] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [pasteOpen, setPasteOpen] = useState(false);
  const [pasteText, setPasteText] = useState("");
  const [pasteReplace, setPasteReplace] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const addRef = useRef<HTMLInputElement>(null);

  const weighted = wheel.settings.mode === "weighted";
  const tally = wheel.settings.mode === "tally";
  const colors = getPalette(wheel.design.paletteId).colors;
  const enabled = wheel.entries.filter((e) => e.enabled && e.text.trim());
  const hiddenCount = wheel.entries.length - wheel.entries.filter((e) => e.enabled).length;
  const onError = useCallback((m: string) => notify("error", m), [notify]);

  // Colors follow the order of entries actually on the wheel.
  const colorFor = new Map<string, string>();
  enabled.forEach((e, i) => colorFor.set(e.id, e.color || segmentColor(colors, i, enabled.length)));

  const add = () => {
    const text = draft.trim();
    if (!text) return;
    if (wheel.entries.length >= MAX_ENTRIES) return notify("error", fmt(e.maxEntries, { max: MAX_ENTRIES }));
    // Allow pasting several lines into the quick-add box.
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    dispatch({ type: "appendEntries", wheelId: wheel.id, entries: lines.map((l) => ({ text: l })) });
    setDraft("");
    addRef.current?.focus();
  };

  const applyPaste = () => {
    const { entries, warnings } = parseBulkText(pasteText);
    if (entries.length === 0) return notify("error", warnings[0] ? noticeText(warnings[0]) : e.nothingToAdd);
    dispatch({ type: pasteReplace ? "replaceEntries" : "appendEntries", wheelId: wheel.id, entries });
    notify("info", fmt(e.added, { n: entries.length }) + (warnings.length ? fmt(e.warnings, { n: warnings.length, first: noticeText(warnings[0]) }) : ""));
    setPasteText("");
    setPasteOpen(false);
  };

  const onImport = async (file?: File) => {
    if (!file) return;
    try {
      if (file.name.toLowerCase().endsWith(".json")) {
        const wheels = await importWheelsFromFile(file);
        if (wheelCount >= MAX_WHEELS) return notify("error", fmt(e.tooManyWheels, { max: MAX_WHEELS }));
        dispatch({ type: "importWheels", wheels, replace: false });
        notify("info", fmt(e.importedWheels, { n: wheels.length }));
        return;
      }
      const { entries, warnings } = await importEntriesFromFile(file);
      if (entries.length === 0) return notify("error", warnings[0] ? noticeText(warnings[0]) : e.noEntriesFound);
      dispatch({ type: "replaceEntries", wheelId: wheel.id, entries });
      track("csv_imported", { rows: entries.length, format: file.name.split(".").pop() });
      notify("info", fmt(e.importedEntries, { n: entries.length, file: file.name }) + (warnings.length ? fmt(e.warnings, { n: warnings.length, first: noticeText(warnings[0]) }) : ""));
    } catch (err) {
      notify("error", errorText(err));
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="flex h-full flex-col gap-3">
      <div>
        <label htmlFor="wheel-title" className="mb-1.5 block text-xs font-semibold text-muted-fg">
          {e.wheelTitle}
        </label>
        <Input id="wheel-title" value={wheel.title} onChange={(e) => dispatch({ type: "setTitle", wheelId: wheel.id, title: e.target.value })} maxLength={80} className="h-10 font-semibold" />
      </div>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <Input ref={addRef} value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={e.addPlaceholder} aria-label={e.newEntry} className="h-10" />
        <Button type="submit" variant="primary" className="h-10" aria-label={e.addEntry}>
          <Plus /> <span className="hidden sm:inline">{e.add}</span>
        </Button>
      </form>

      <div className="flex flex-wrap gap-1.5" role="toolbar" aria-label={e.toolbar}>
        <Button size="sm" onClick={() => dispatch({ type: "shuffle", wheelId: wheel.id })} title={e.shuffleTitle}>
          <Shuffle /> {e.shuffle}
        </Button>
        <Button
          size="sm"
          onClick={() => {
            dispatch({ type: "sort", wheelId: wheel.id, direction: sortAsc ? "asc" : "desc" });
            setSortAsc((s) => !s);
          }}
          title={sortAsc ? e.sortAscTitle : e.sortDescTitle}
        >
          {sortAsc ? <ArrowDownAZ /> : <ArrowUpZA />} {sortAsc ? e.sortAsc : e.sortDesc}
        </Button>
        <Button size="sm" onClick={() => setPasteOpen(true)} title={e.bulkPasteTitle}>
          <ClipboardPaste /> {e.bulkPaste}
        </Button>
        <Button size="sm" onClick={() => fileRef.current?.click()} title={e.importTitle}>
          <FileUp /> {e.import}
        </Button>
        <input ref={fileRef} type="file" accept=".csv,.tsv,.txt,.xlsx,.json,text/csv,application/json" className="hidden" onChange={(e) => void onImport(e.target.files?.[0])} />
        <Button size="sm" onClick={() => downloadFile(`${slugifyFilename(wheel.title)}.csv`, entriesToCSV(wheel.entries), "text/csv;charset=utf-8")} title={e.csvTitle}>
          <Download /> CSV
        </Button>
        <Button size="sm" onClick={() => downloadFile(`${slugifyFilename(wheel.title)}.json`, wheelsToJSON([wheel]), "application/json")} title={e.jsonTitle}>
          <Download /> JSON
        </Button>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-fg">
        <span aria-live="polite">
          <strong className="text-fg">{enabled.length}</strong> {e.onWheel}
          {hiddenCount > 0 && ` · ${hiddenCount} ${e.hidden}`} · {wheel.entries.length}/{MAX_ENTRIES}
        </span>
        <span className="flex gap-1">
          {hiddenCount > 0 && (
            <Button size="sm" variant="ghost" onClick={() => dispatch({ type: "restoreAll", wheelId: wheel.id })}>
              <RotateCcw /> {e.restoreAll}
            </Button>
          )}
          {wheel.entries.length > 0 && (
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                if (confirm(fmt(e.confirmClear, { n: wheel.entries.length, title: wheel.title }))) dispatch({ type: "clearEntries", wheelId: wheel.id });
              }}
            >
              <Trash2 /> {e.clear}
            </Button>
          )}
        </span>
      </div>

      {(weighted || tally) && (
        <div className="flex justify-end gap-3 pr-[6.5rem] text-[11px] font-semibold tracking-wide text-muted-fg uppercase">
          {weighted && <span className="w-16 text-right">{e.weight}</span>}
          {tally && <span className="w-8 text-center">{e.wins}</span>}
        </div>
      )}

      <ol className="-mx-1 max-h-[26rem] min-h-24 flex-1 space-y-0.5 overflow-y-auto overscroll-contain lg:max-h-[calc(100dvh-22rem)]" aria-label={t.wheel.entries}>
        {wheel.entries.map((entry, i) => (
          <EntryRow
            key={entry.id}
            entry={entry}
            index={i}
            color={colorFor.get(entry.id) ?? entry.color ?? "#D1D5DB"}
            wheelId={wheel.id}
            weighted={weighted}
            wins={tally ? (wheel.tally[entry.id] ?? 0) : undefined}
            maskHidden={!wheel.settings.revealHiddenBeforeSpin}
            dispatch={dispatch}
            onError={onError}
          />
        ))}
        {wheel.entries.length === 0 && <li className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-fg">{e.empty}</li>}
      </ol>

      <Modal open={pasteOpen} onClose={() => setPasteOpen(false)} title={e.pasteTitle}>
        <p className="mb-3 text-sm text-muted-fg">
          {e.pasteIntro}
        </p>
        <Textarea value={pasteText} onChange={(e) => setPasteText(e.target.value)} rows={10} placeholder={e.pastePlaceholder} aria-label={e.pasteLabel} data-autofocus />
        <label className="mt-3 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={pasteReplace} onChange={(e) => setPasteReplace(e.target.checked)} className="h-4 w-4 accent-[var(--primary)]" />
          {e.pasteReplace}
        </label>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setPasteOpen(false)}>
            {t.common.cancel}
          </Button>
          <Button variant="primary" onClick={applyPaste} disabled={!pasteText.trim()}>
            {fmt(e.addN, { n: parseBulkText(pasteText).entries.length || "" })}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
