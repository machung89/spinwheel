import { describe, expect, it } from "vitest";
import { randomInt, randomIntBetween, sample, shuffle, weightedIndex, weightToTickets } from "@/features/random/rng";

// Chi-square critical values at p = 0.001 for the given degrees of freedom.
const CHI2_999: Record<number, number> = { 2: 13.82, 5: 20.52, 9: 27.88 };
function chiSquare(observed: number[], expected: number[]) {
  return observed.reduce((s, o, i) => s + (o - expected[i]) ** 2 / expected[i], 0);
}

describe("randomInt", () => {
  it("stays in range", () => {
    for (const n of [1, 2, 3, 7, 10, 1000, 2 ** 32, 2 ** 40]) {
      for (let i = 0; i < 2000; i++) {
        const x = randomInt(n);
        expect(Number.isInteger(x) && x >= 0 && x < n).toBe(true);
      }
    }
  });
  it("is uniform (chi-square, 10 buckets)", () => {
    const counts = new Array(10).fill(0);
    const N = 100_000;
    for (let i = 0; i < N; i++) counts[randomInt(10)]++;
    expect(chiSquare(counts, new Array(10).fill(N / 10))).toBeLessThan(CHI2_999[9]);
  });
  it("is uniform for a non power of two near 2^32 (rejection sampling)", () => {
    // n = 3 * 2^30: naive modulo would make the lowest third twice as likely.
    const n = 3 * 2 ** 30;
    const thirds = [0, 0, 0];
    const N = 60_000;
    for (let i = 0; i < N; i++) thirds[Math.floor(randomInt(n) / 2 ** 30)]++;
    expect(chiSquare(thirds, [N / 3, N / 3, N / 3])).toBeLessThan(CHI2_999[2]);
  });
  it("rejects invalid input", () => {
    expect(() => randomInt(0)).toThrow();
    expect(() => randomInt(1.5)).toThrow();
    expect(() => randomInt(2 ** 54)).toThrow();
  });
  it("supports inclusive ranges", () => {
    const seen = new Set<number>();
    for (let i = 0; i < 2000; i++) seen.add(randomIntBetween(-2, 2));
    expect([...seen].sort((a, b) => a - b)).toEqual([-2, -1, 0, 1, 2]);
  });
});

describe("weightedIndex", () => {
  it("matches weights (chi-square)", () => {
    const weights = [1, 2, 3, 4, 0.5, 9.5];
    const total = weights.reduce((a, b) => a + b);
    const counts = new Array(weights.length).fill(0);
    const N = 120_000;
    for (let i = 0; i < N; i++) counts[weightedIndex(weights)]++;
    expect(chiSquare(counts, weights.map((w) => (w / total) * N))).toBeLessThan(CHI2_999[5]);
  });
  it("never picks zero-weight entries", () => {
    for (let i = 0; i < 5000; i++) expect(weightedIndex([0, 1, 0])).toBe(1);
  });
  it("converts decimals to integer tickets", () => {
    expect(weightToTickets(0.001)).toBe(1);
    expect(weightToTickets(2.5)).toBe(2500);
    expect(weightToTickets(-1)).toBe(0);
  });
  it("throws when all weights are zero", () => {
    expect(() => weightedIndex([0, 0])).toThrow();
  });
});

describe("shuffle / sample", () => {
  it("keeps all elements", () => {
    const a = Array.from({ length: 50 }, (_, i) => i);
    expect(shuffle(a).sort((x, y) => x - y)).toEqual(a);
  });
  it("produces uniform permutations of 3 items", () => {
    const counts = new Map<string, number>();
    const N = 60_000;
    for (let i = 0; i < N; i++) {
      const k = shuffle([1, 2, 3]).join("");
      counts.set(k, (counts.get(k) ?? 0) + 1);
    }
    expect(counts.size).toBe(6);
    expect(chiSquare([...counts.values()], new Array(6).fill(N / 6))).toBeLessThan(CHI2_999[5]);
  });
  it("samples distinct items", () => {
    expect(new Set(sample([1, 2, 3, 4, 5], 3)).size).toBe(3);
  });
});
