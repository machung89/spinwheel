import type { AppState } from "@/types/wheel";
import { sanitizeAppState } from "@/features/wheel-engine/validate";

const PREFIX = "whirlpick:v1:";

export function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

export function safeSet(key: string, value: string): boolean {
  try {
    localStorage.setItem(PREFIX + key, value);
    return true;
  } catch {
    return false; // Private mode or quota exceeded.
  }
}

export function safeRemove(key: string) {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    /* ignore */
  }
}

export function loadAppState(storageKey: string): AppState | null {
  const raw = safeGet(`app:${storageKey}`);
  if (!raw) return null;
  try {
    return sanitizeAppState(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveAppState(storageKey: string, state: AppState): boolean {
  return safeSet(`app:${storageKey}`, JSON.stringify(state));
}
