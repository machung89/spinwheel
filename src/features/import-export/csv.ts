import type { SpinRecord, Wheel, WheelEntry } from "@/types/wheel";
import { MAX_ENTRIES, MAX_ENTRY_TEXT, MAX_HIDDEN_TEXT, clampWeight } from "@/features/wheel-engine/defaults";
import { isColor, sanitizeImage } from "@/features/wheel-engine/validate";
import type { Notice } from "@/i18n/errors";

export type ImportedEntry = Partial<WheelEntry> & { text: string };

export interface ImportResult {
  entries: ImportedEntry[];
  warnings: Notice[];
}

/** RFC 4180 CSV parser (quoted fields, escaped quotes, CRLF/LF). Auto-detects , ; or tab. */
export function parseCSV(input: string): string[][] {
  const text = input.replace(/^﻿/, "");
  const firstLine = text.split(/\r?\n/, 1)[0] ?? "";
  const delimiter = [",", ";", "\t"].reduce((best, d) => (firstLine.split(d).length > firstLine.split(best).length ? d : best), ",");
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else quoted = false;
      } else field += c;
    } else if (c === '"' && field === "") {
      quoted = true;
    } else if (c === delimiter) {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((f) => f.trim() !== ""));
}

const csvField = (v: unknown): string => {
  const s = v === undefined || v === null ? "" : String(v);
  // Prefix formula-like values so spreadsheet apps don't execute them (CSV injection).
  const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
  return /[",\r\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
};

export function toCSV(rows: unknown[][]): string {
  return rows.map((r) => r.map(csvField).join(",")).join("\r\n") + "\r\n";
}

const HEADER_ALIASES: Record<string, keyof ImportedEntry> = {
  text: "text", name: "text", entry: "text", option: "text", label: "text", item: "text", names: "text",
  weight: "weight", chance: "weight", probability: "weight",
  color: "color", colour: "color",
  emoji: "emoji", icon: "emoji",
  image: "image", "image url": "image", img: "image",
  description: "description", details: "description",
  hidden: "hidden", activity: "hidden", "hidden activity": "hidden", question: "hidden", task: "hidden",
  enabled: "enabled", active: "enabled",
};

/** Converts tabular rows (CSV, Excel, pasted spreadsheet cells) into entries. */
export function rowsToEntries(rows: unknown[][]): ImportResult {
  const warnings: Notice[] = [];
  if (rows.length === 0) return { entries: [], warnings: [{ code: "fileEmpty" }] };
  const header = rows[0].map((c) => String(c ?? "").trim().toLowerCase());
  const mapped = header.map((h) => HEADER_ALIASES[h]);
  const hasHeader = mapped.includes("text");
  const columns: (keyof ImportedEntry | undefined)[] = hasHeader ? mapped : ["text", "weight", "color", "emoji", "description", "hidden"];
  const body = hasHeader ? rows.slice(1) : rows;
  const entries: ImportedEntry[] = [];
  body.forEach((row, i) => {
    const line = i + (hasHeader ? 2 : 1);
    const entry: ImportedEntry = { text: "" };
    columns.forEach((col, c) => {
      const raw = row[c];
      const v = raw === undefined || raw === null ? "" : String(raw).trim();
      if (!col || v === "") return;
      switch (col) {
        case "text":
          entry.text = v.slice(0, MAX_ENTRY_TEXT);
          break;
        case "weight": {
          const n = Number(v);
          if (Number.isFinite(n) && n > 0) entry.weight = clampWeight(n);
          else warnings.push({ code: "badWeight", params: { row: line, value: v } });
          break;
        }
        case "color": {
          const hex = v.startsWith("#") ? v : `#${v}`;
          if (isColor(hex)) entry.color = hex.toUpperCase();
          else warnings.push({ code: "badColor", params: { row: line, value: v } });
          break;
        }
        case "image": {
          const img = sanitizeImage(v);
          if (img) entry.image = img;
          else warnings.push({ code: "badImage", params: { row: line } });
          break;
        }
        case "enabled":
          entry.enabled = !/^(0|false|no|off)$/i.test(v);
          break;
        case "emoji":
          entry.emoji = v.slice(0, 16);
          break;
        case "description":
        case "hidden":
          entry[col] = v.slice(0, MAX_HIDDEN_TEXT);
          break;
      }
    });
    if (entry.text) entries.push(entry);
  });
  if (entries.length > MAX_ENTRIES) {
    warnings.push({ code: "truncated", params: { max: MAX_ENTRIES } });
    entries.length = MAX_ENTRIES;
  }
  if (entries.length === 0) warnings.push({ code: "noEntries" });
  return { entries, warnings };
}

/**
 * Bulk paste: one entry per line. Lines copied from Google Sheets/Excel are
 * tab-separated, so extra cells map to weight, color, emoji, description, hidden.
 */
export function parseBulkText(text: string): ImportResult {
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== "");
  if (lines.some((l) => l.includes("\t"))) return rowsToEntries(lines.map((l) => l.split("\t")));
  return rowsToEntries(lines.map((l) => [l]));
}

export function entriesToCSV(entries: readonly WheelEntry[]): string {
  return toCSV([
    ["text", "weight", "color", "emoji", "description", "hidden", "image", "enabled"],
    ...entries.map((e) => [
      e.text,
      e.weight,
      e.color ?? "",
      e.emoji ?? "",
      e.description ?? "",
      e.hidden ?? "",
      e.image?.startsWith("https://") ? e.image : "",
      e.enabled ? "true" : "false",
    ]),
  ]);
}

export function historyToCSV(history: readonly SpinRecord[], wheel?: Pick<Wheel, "title">): string {
  return toCSV([
    ["spin", "winner", "timestamp", "entries_on_wheel", "weight", "probability", ...(wheel ? ["wheel"] : [])],
    ...history.map((r) => [
      r.n,
      r.text,
      new Date(r.at).toISOString(),
      r.entryCount,
      r.weight,
      r.probability.toFixed(6),
      ...(wheel ? [wheel.title] : []),
    ]),
  ]);
}
