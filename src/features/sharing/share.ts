/**
 * Share links: a compact, versioned encoding of one or more wheels stored in
 * the URL fragment (`#s=...`). Fragments are never sent to the server, so the
 * wheel contents stay between the sender and the recipient.
 *
 * Format:  "<codec>.<base64url payload>"
 *   codec "1" = deflate-raw compressed JSON (CompressionStream)
 *   codec "0" = uncompressed UTF-8 JSON (fallback for old browsers)
 *
 * Payload (schema version 1):
 *   { v: 1, w: [{ t: title, e: [[text, weight, color, emoji, hidden, description, image, enabled]], d: designDiff, s: settingsDiff }] }
 * Tuple fields are trimmed from the end when empty; design/settings only
 * contain values that differ from the defaults. History, tallies and uploaded
 * (data URL) images are intentionally excluded.
 */
import type { Wheel } from "@/types/wheel";
import { DEFAULT_DESIGN, DEFAULT_SETTINGS, MAX_WHEELS } from "@/features/wheel-engine/defaults";
import { sanitizeWheel } from "@/features/wheel-engine/validate";
import { AppError } from "@/i18n/errors";

export const SHARE_PARAM = "s";
export const SHARE_SCHEMA_VERSION = 1;
/** Links beyond this length may be truncated by some chat apps. */
export const SHARE_URL_SOFT_LIMIT = 8000;

type Tuple = [string, ...unknown[]];

function diff<T extends object>(value: T, defaults: T): Partial<T> {
  const out: Partial<T> = {};
  for (const key of Object.keys(value) as (keyof T)[]) {
    const v = value[key];
    const d = defaults[key];
    if (v && typeof v === "object" && d && typeof d === "object") {
      const nested = diff(v as object, d as object);
      if (Object.keys(nested).length) out[key] = nested as T[keyof T];
    } else if (v !== d) {
      out[key] = v;
    }
  }
  return out;
}

export function toPayload(wheels: Wheel[]) {
  return {
    v: SHARE_SCHEMA_VERSION,
    w: wheels.slice(0, MAX_WHEELS).map((w) => ({
      t: w.title,
      e: w.entries.map((e) => {
        const image = e.image && e.image.startsWith("https://") ? e.image : null;
        const t: unknown[] = [e.text, e.weight === 1 ? null : e.weight, e.color ?? null, e.emoji ?? null, e.hidden ?? null, e.description ?? null, image, e.enabled ? null : 0];
        while (t.length > 1 && t[t.length - 1] === null) t.pop();
        return t as Tuple;
      }),
      d: diff(w.design, DEFAULT_DESIGN),
      s: diff(w.settings, DEFAULT_SETTINGS),
    })),
  };
}

export function fromPayload(payload: unknown): Wheel[] {
  if (!payload || typeof payload !== "object") throw new AppError("shareInvalid");
  const p = payload as { v?: unknown; w?: unknown };
  if (p.v !== SHARE_SCHEMA_VERSION) throw new AppError("shareNewer");
  if (!Array.isArray(p.w)) throw new AppError("shareNoWheels");
  const wheels: Wheel[] = [];
  for (const raw of p.w.slice(0, MAX_WHEELS)) {
    if (!raw || typeof raw !== "object") continue;
    const r = raw as { t?: unknown; e?: unknown; d?: unknown; s?: unknown };
    const entries = Array.isArray(r.e)
      ? r.e.filter(Array.isArray).map((t: unknown[]) => ({
          text: t[0],
          weight: t[1] ?? 1,
          color: t[2] ?? undefined,
          emoji: t[3] ?? undefined,
          hidden: t[4] ?? undefined,
          description: t[5] ?? undefined,
          image: t[6] ?? undefined,
          enabled: t[7] !== 0,
        }))
      : [];
    const s = (r.s && typeof r.s === "object" ? r.s : {}) as Record<string, unknown>;
    const wheel = sanitizeWheel({
      title: r.t,
      entries,
      design: { ...DEFAULT_DESIGN, ...(r.d as object) },
      settings: { ...DEFAULT_SETTINGS, ...s, sound: { ...DEFAULT_SETTINGS.sound, ...(s.sound as object) } },
    });
    if (wheel) wheels.push(wheel);
  }
  if (wheels.length === 0) throw new AppError("shareNoValid");
  return wheels;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToBytes(s: string): Uint8Array {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4);
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function pipe(bytes: Uint8Array, stream: CompressionStream | DecompressionStream): Promise<Uint8Array> {
  const res = new Response(new Blob([bytes as BlobPart]).stream().pipeThrough(stream));
  return new Uint8Array(await res.arrayBuffer());
}

export async function encodeShare(wheels: Wheel[]): Promise<string> {
  const json = new TextEncoder().encode(JSON.stringify(toPayload(wheels)));
  if (typeof CompressionStream === "function") {
    return "1." + bytesToBase64Url(await pipe(json, new CompressionStream("deflate-raw")));
  }
  return "0." + bytesToBase64Url(json);
}

const MAX_DECODED_BYTES = 2_000_000;

export async function decodeShare(code: string): Promise<Wheel[]> {
  const dot = code.indexOf(".");
  const codec = code.slice(0, dot);
  let bytes: Uint8Array;
  try {
    bytes = base64UrlToBytes(code.slice(dot + 1));
    if (codec === "1") bytes = await pipe(bytes, new DecompressionStream("deflate-raw"));
    else if (codec !== "0") throw new AppError("shareDamaged");
  } catch {
    throw new AppError("shareDamaged");
  }
  if (bytes.length > MAX_DECODED_BYTES) throw new AppError("shareTooLarge");
  let payload: unknown;
  try {
    payload = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new AppError("shareDamaged");
  }
  return fromPayload(payload);
}

export async function buildShareUrl(wheels: Wheel[], base: string): Promise<string> {
  const url = new URL(base);
  url.hash = `${SHARE_PARAM}=${await encodeShare(wheels)}`;
  return url.toString();
}

/** Reads a share code from a location hash like "#s=1.abc". */
export function readShareCode(hash: string): string | null {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  return params.get(SHARE_PARAM);
}
