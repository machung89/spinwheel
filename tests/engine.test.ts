import { describe, expect, it } from "vitest";
import { computeSegments, mod, planSpin, rotationForAngle, segmentIndexAtRotation, spinEase } from "@/features/wheel-engine/engine";
import { makeWheel } from "@/features/wheel-engine/defaults";

describe("geometry", () => {
  it("splits equal segments", () => {
    const s = computeSegments(makeWheel({ title: "t", entries: ["a", "b", "c", "d"] }));
    expect(s.map((x) => [x.start, x.end])).toEqual([[0, 90], [90, 180], [180, 270], [270, 360]]);
    expect(s[0].probability).toBe(0.25);
  });
  it("ignores weights outside weighted mode and uses them inside it", () => {
    const entries = [{ text: "a", weight: 3 }, { text: "b", weight: 1 }];
    expect(computeSegments(makeWheel({ title: "t", entries }))[0].end).toBe(180);
    expect(computeSegments(makeWheel({ title: "t", entries, mode: "weighted" }))[0].end).toBe(270);
  });
  it("skips disabled and blank entries", () => {
    const w = makeWheel({ title: "t", entries: [{ text: "a" }, { text: "b", enabled: false }, { text: "  " }, { text: "c" }] });
    expect(computeSegments(w).map((s) => s.entry.text)).toEqual(["a", "c"]);
  });
  it("finds the segment under the pointer", () => {
    const s = computeSegments(makeWheel({ title: "t", entries: ["a", "b", "c", "d"] }));
    expect(segmentIndexAtRotation(s, 0)).toBe(0);
    expect(segmentIndexAtRotation(s, -100)).toBe(1);
    expect(segmentIndexAtRotation(s, 45)).toBe(3);
    expect(segmentIndexAtRotation(s, 360 * 7 + 1)).toBe(3);
  });
  it("computes the rotation that puts an angle under the pointer", () => {
    for (const current of [0, 123.4, 3617, -50]) {
      for (const angle of [0, 10, 179.5, 359]) {
        const r = rotationForAngle(current, angle, 5);
        expect(r).toBeGreaterThanOrEqual(current + 5 * 360);
        expect(r).toBeLessThan(current + 6 * 360);
        expect(mod(-r, 360)).toBeCloseTo(angle, 6);
      }
    }
  });
});

describe("planSpin", () => {
  it("always lands on the pre-selected winner", () => {
    const entries = Array.from({ length: 37 }, (_, i) => ({ text: `#${i}`, weight: (i % 5) + 1 }));
    const w = makeWheel({ title: "t", entries, mode: "weighted" });
    let rotation = 0;
    for (let i = 0; i < 2000; i++) {
      const plan = planSpin(w, rotation)!;
      expect(segmentIndexAtRotation(plan.segments, plan.to)).toBe(plan.winnerIndex);
      expect(plan.to - plan.from).toBeGreaterThanOrEqual(3 * 360);
      rotation = plan.to;
    }
  });
  it("handles a thousand entries", () => {
    const w = makeWheel({ title: "t", entries: Array.from({ length: 1000 }, (_, i) => `n${i}`) });
    const plan = planSpin(w, 0)!;
    expect(segmentIndexAtRotation(plan.segments, plan.to)).toBe(plan.winnerIndex);
  });
  it("returns null when nothing can win", () => {
    expect(planSpin(makeWheel({ title: "t", entries: [] }), 0)).toBeNull();
  });
  it("easing is monotonic and ends exactly on target", () => {
    expect(spinEase(0)).toBe(0);
    expect(spinEase(1)).toBe(1);
    let prev = 0;
    for (let t = 0.01; t <= 1; t += 0.01) {
      const v = spinEase(t);
      expect(v).toBeGreaterThanOrEqual(prev);
      prev = v;
    }
  });
});
