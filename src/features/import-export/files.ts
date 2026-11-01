import type { AppState, Wheel } from "@/types/wheel";
import { MAX_WHEELS } from "@/features/wheel-engine/defaults";
import { sanitizeWheel } from "@/features/wheel-engine/validate";
import { parseCSV, rowsToEntries, type ImportResult } from "./csv";
import { AppError } from "@/i18n/errors";

export const MAX_IMPORT_BYTES = 5 * 1024 * 1024;
export const JSON_FORMAT = "spinwheelge-wheels";

export function downloadFile(filename: string, content: string | Blob, type = "text/plain;charset=utf-8") {
  const blob = typeof content === "string" ? new Blob([content], { type }) : content;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function slugifyFilename(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "wheel";
}

export function wheelsToJSON(wheels: Wheel[]): string {
  return JSON.stringify(
    {
      format: JSON_FORMAT,
      version: 1,
      exportedAt: new Date().toISOString(),
      wheels: wheels.map(({ id: _id, history: _h, tally: _t, ...rest }) => rest),
    },
    null,
    2,
  );
}

/** Accepts our export format, a single wheel object, or a plain array of strings. */
export function parseWheelsJSON(text: string): Wheel[] {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new AppError("notJson");
  }
  let candidates: unknown[];
  if (Array.isArray(data)) {
    if (data.every((x) => typeof x === "string")) {
      candidates = [{ title: "Imported Wheel", entries: data.map((text) => ({ text })) }];
    } else candidates = data;
  } else if (data && typeof data === "object" && Array.isArray((data as { wheels?: unknown }).wheels)) {
    candidates = (data as { wheels: unknown[] }).wheels;
  } else if (data && typeof data === "object" && Array.isArray((data as { entries?: unknown }).entries)) {
    candidates = [data];
  } else {
    throw new AppError("badJson");
  }
  const wheels = candidates.slice(0, MAX_WHEELS).map((w) => sanitizeWheel(w)).filter((w): w is Wheel => w !== null);
  if (wheels.length === 0) throw new AppError("noValidWheels");
  return wheels;
}

function checkSize(file: File) {
  if (file.size > MAX_IMPORT_BYTES) throw new AppError("fileTooLarge");
}

export async function importEntriesFromFile(file: File): Promise<ImportResult> {
  checkSize(file);
  const name = file.name.toLowerCase();
  if (name.endsWith(".xlsx")) {
    const { readSheet } = await import("read-excel-file/universal");
    let rows: unknown[][];
    try {
      rows = (await readSheet(file)) as unknown[][];
    } catch {
      throw new AppError("excelUnreadable");
    }
    return rowsToEntries(rows);
  }
  if (name.endsWith(".xls")) throw new AppError("xlsUnsupported");
  if (name.endsWith(".csv") || name.endsWith(".tsv") || name.endsWith(".txt") || file.type.startsWith("text/")) {
    return rowsToEntries(parseCSV(await file.text()));
  }
  throw new AppError("unsupportedFile");
}

export async function importWheelsFromFile(file: File): Promise<Wheel[]> {
  checkSize(file);
  return parseWheelsJSON(await file.text());
}

export type { AppState };
