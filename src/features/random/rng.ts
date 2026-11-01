/**
 * Cryptographically secure, unbiased random helpers.
 *
 * Every result here comes from the Web Crypto API (`crypto.getRandomValues`),
 * which is available in all modern browsers, Node 19+, and Cloudflare Workers.
 * Math.random() is never used for anything that decides an outcome.
 *
 * Unbiased integers use rejection sampling: a raw value is drawn from a
 * power-of-two range and discarded if it falls in the final, partial "bucket"
 * that would make some results more likely than others (modulo bias).
 */

const TWO_32 = 0x1_0000_0000;
const TWO_53 = 2 ** 53;

function getCrypto(): Crypto {
  const c = globalThis.crypto;
  if (!c || typeof c.getRandomValues !== "function") {
    throw new Error("Secure random numbers are not available in this environment.");
  }
  return c;
}

const buffer = new Uint32Array(2);

export function randomUint32(): number {
  getCrypto().getRandomValues(buffer);
  return buffer[0];
}

/** Uniform 53-bit integer in [0, 2^53). */
function randomUint53(): number {
  getCrypto().getRandomValues(buffer);
  return (buffer[0] & 0x1f_ffff) * TWO_32 + buffer[1];
}

/** Uniform integer in [0, n). Unbiased for any 1 <= n <= 2^53. */
export function randomInt(n: number): number {
  if (!Number.isInteger(n) || n < 1 || n > TWO_53) {
    throw new RangeError(`randomInt: n must be an integer in [1, 2^53], got ${n}`);
  }
  if (n === 1) return 0;
  if (n <= TWO_32) {
    // Largest multiple of n that fits in 32 bits; values >= limit are rejected.
    const limit = TWO_32 - (TWO_32 % n);
    let x: number;
    do x = randomUint32();
    while (x >= limit);
    return x % n;
  }
  const limit = TWO_53 - (TWO_53 % n);
  let x: number;
  do x = randomUint53();
  while (x >= limit);
  return x % n;
}

/** Uniform integer in [min, max] inclusive. */
export function randomIntBetween(min: number, max: number): number {
  if (max < min) [min, max] = [max, min];
  return min + randomInt(max - min + 1);
}

/** Uniform float in [0, 1) with 53 bits of precision. */
export function randomFloat(): number {
  return randomUint53() / TWO_53;
}

/** Scale used to turn decimal weights into integers (3 decimal places). */
export const WEIGHT_SCALE = 1000;

/** Converts a user weight to the integer "ticket" count used for selection. */
export function weightToTickets(weight: number): number {
  if (!Number.isFinite(weight) || weight <= 0) return 0;
  return Math.max(1, Math.round(weight * WEIGHT_SCALE));
}

/**
 * Weighted pick. Each weight becomes an integer number of tickets, one ticket
 * is drawn uniformly with randomInt(totalTickets), and the entry owning that
 * ticket wins. P(i) = tickets[i] / totalTickets exactly — no floating point
 * accumulation error and no modulo bias.
 */
export function weightedIndex(weights: readonly number[]): number {
  const tickets = weights.map(weightToTickets);
  const total = tickets.reduce((a, b) => a + b, 0);
  if (total <= 0) throw new RangeError("weightedIndex: at least one weight must be positive");
  let ticket = randomInt(total);
  for (let i = 0; i < tickets.length; i++) {
    if (ticket < tickets[i]) return i;
    ticket -= tickets[i];
  }
  // Unreachable: ticket < total by construction.
  return tickets.length - 1;
}

/** Fisher–Yates shuffle (returns a new array). */
export function shuffle<T>(items: readonly T[]): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Picks `count` distinct items uniformly (partial Fisher–Yates). */
export function sample<T>(items: readonly T[], count: number): T[] {
  const out = items.slice();
  const k = Math.min(count, out.length);
  for (let i = 0; i < k; i++) {
    const j = i + randomInt(out.length - i);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out.slice(0, k);
}

/** Short random identifier for entries and wheels (not security sensitive, but crypto-backed). */
export function randomId(prefix = ""): string {
  getCrypto().getRandomValues(buffer);
  return prefix + buffer[0].toString(36) + buffer[1].toString(36).slice(0, 4);
}
