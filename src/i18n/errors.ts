import en, { type Dict } from "./dictionaries/en";
import { fmt } from "./config";

export type ErrorCode = keyof Dict["errors"];

export interface Notice {
  code: ErrorCode;
  params?: Record<string, string | number>;
}

/**
 * Error with a translatable code. `message` is English (useful in logs and tests);
 * the UI shows the localized text via translateError().
 */
export class AppError extends Error {
  constructor(
    public code: ErrorCode,
    public params: Record<string, string | number> = {},
  ) {
    super(fmt(en.errors[code], params));
  }
}

export function translateNotice(dict: Dict, n: Notice): string {
  return fmt(dict.errors[n.code], n.params);
}

export function translateError(dict: Dict, e: unknown): string {
  if (e instanceof AppError) return fmt(dict.errors[e.code], e.params);
  return dict.errors.unknown;
}
