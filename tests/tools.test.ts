import { describe, expect, it } from "vitest";
import { drawNumbers } from "@/components/tools/number-generator";
import { makeTeams } from "@/components/tools/team-generator";
import { parsePastedComments, parseVideoId } from "@/features/youtube/youtube";

describe("random number generator", () => {
  it("draws unique numbers in range, including the whole range", () => {
    const all = drawNumbers(1, 50, 50, true);
    expect(new Set(all).size).toBe(50);
    expect(Math.min(...all)).toBe(1);
    expect(Math.max(...all)).toBe(50);
  });
  it("handles huge ranges and negatives", () => {
    const big = drawNumbers(-(2 ** 50), 2 ** 50, 100, true);
    expect(new Set(big).size).toBe(100);
    expect(big.every((n) => Number.isInteger(n) && Math.abs(n) <= 2 ** 50)).toBe(true);
  });
});

describe("team generator", () => {
  it("keeps team sizes within one of each other and loses nobody", () => {
    const people = Array.from({ length: 13 }, (_, i) => `p${i}`);
    const teams = makeTeams(people, 3);
    expect(teams.map((t) => t.length).sort()).toEqual([4, 4, 5]);
    expect(teams.flat().sort()).toEqual(people.slice().sort());
  });
});

describe("youtube helpers", () => {
  it("parses common URL shapes", () => {
    for (const u of ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://youtu.be/dQw4w9WgXcQ?t=3", "https://youtube.com/shorts/dQw4w9WgXcQ", "dQw4w9WgXcQ"]) {
      expect(parseVideoId(u)).toBe("dQw4w9WgXcQ");
    }
    expect(parseVideoId("https://example.com/watch?v=dQw4w9WgXcQ")).toBeNull();
  });
  it("parses pasted comments", () => {
    expect(parsePastedComments("@ann: hi: there\nbob").map((c) => [c.author, c.text])).toEqual([
      ["ann", "hi: there"],
      ["bob", ""],
    ]);
  });
});
