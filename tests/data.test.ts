import { describe, expect, it } from "vitest";
import { makeAppState, makeWheel } from "@/features/wheel-engine/defaults";
import { reducer } from "@/features/wheel-engine/reducer";
import { sanitizeAppState } from "@/features/wheel-engine/validate";
import { buildShareUrl, decodeShare, encodeShare, readShareCode } from "@/features/sharing/share";
import { entriesToCSV, historyToCSV, parseBulkText, parseCSV, rowsToEntries } from "@/features/import-export/csv";
import { parseWheelsJSON, wheelsToJSON } from "@/features/import-export/files";

describe("reducer", () => {
  it("records spins, tallies and eliminates", () => {
    let s = makeAppState({ title: "t", entries: ["a", "b"] });
    const w = s.wheels[0];
    const rec = { entryId: w.entries[0].id, text: "a", at: 1, entryCount: 2, weight: 1, probability: 0.5 };
    s = reducer(s, { type: "recordSpin", wheelId: w.id, record: rec, eliminate: true });
    s = reducer(s, { type: "recordSpin", wheelId: w.id, record: rec, eliminate: false });
    const w2 = s.wheels[0];
    expect(w2.history.map((h) => h.n)).toEqual([2, 1]);
    expect(w2.tally[w.entries[0].id]).toBe(2);
    expect(w2.entries[0].enabled).toBe(false);
    s = reducer(s, { type: "restoreAll", wheelId: w.id });
    expect(s.wheels[0].entries.every((e) => e.enabled)).toBe(true);
  });
  it("caps wheels at 8 and keeps at least one", () => {
    let s = makeAppState();
    for (let i = 0; i < 12; i++) s = reducer(s, { type: "addWheel" });
    expect(s.wheels.length).toBe(8);
    for (const w of [...s.wheels]) s = reducer(s, { type: "removeWheel", wheelId: w.id });
    expect(s.wheels.length).toBe(1);
  });
  it("sorts naturally", () => {
    let s = makeAppState({ title: "t", entries: ["item 10", "item 2", "Apple"] });
    s = reducer(s, { type: "sort", wheelId: s.activeId, direction: "asc" });
    expect(s.wheels[0].entries.map((e) => e.text)).toEqual(["Apple", "item 2", "item 10"]);
  });
});

describe("validation", () => {
  it("rejects garbage and repairs bad fields", () => {
    expect(sanitizeAppState(null)).toBeNull();
    expect(sanitizeAppState({ version: 2, wheels: [] })).toBeNull();
    const s = sanitizeAppState({
      version: 1,
      wheels: [
        {
          title: 5,
          entries: [{ text: "ok", weight: -4, color: "red", image: "javascript:alert(1)" }, { nope: 1 }],
          design: { paletteId: "nope", borderWidth: 999 },
        },
      ],
    })!;
    const e = s.wheels[0].entries;
    expect(e.length).toBe(1);
    expect(e[0].weight).toBeGreaterThan(0);
    expect(e[0].color).toBeUndefined();
    expect(e[0].image).toBeUndefined();
    expect(s.wheels[0].design.borderWidth).toBe(24);
    expect(s.wheels[0].design.paletteId).toBe("whirl");
    expect(s.wheels[0].title).toBe("My Wheel");
  });
});

describe("share links", () => {
  it("round-trips wheels and drops private data", async () => {
    const w = makeWheel({
      title: "Class 4B",
      entries: [
        { text: "Ana", weight: 2, hidden: "Q1", emoji: "A" },
        { text: "Ben", enabled: false, image: "data:image/png;base64,AAAA" },
        { text: "Cy", image: "https://example.com/c.png" },
      ],
      mode: "weighted",
      paletteId: "ocean",
    });
    w.history.push({ n: 1, entryId: "x", text: "Ana", at: 1, entryCount: 3, weight: 2, probability: 0.5 });
    const code = await encodeShare([w]);
    expect(code.startsWith("1.")).toBe(true);
    const [back] = await decodeShare(code);
    expect(back.title).toBe("Class 4B");
    expect(back.entries.map((e) => [e.text, e.weight, e.enabled, e.hidden, e.emoji])).toEqual([
      ["Ana", 2, true, "Q1", "A"],
      ["Ben", 1, false, undefined, undefined],
      ["Cy", 1, true, undefined, undefined],
    ]);
    expect(back.entries[1].image).toBeUndefined();
    expect(back.entries[2].image).toBe("https://example.com/c.png");
    expect(back.settings.mode).toBe("weighted");
    expect(back.design.paletteId).toBe("ocean");
    expect(back.history).toEqual([]);
  });
  it("builds and reads URLs", async () => {
    const url = await buildShareUrl([makeWheel()], "https://spinwheelge.com/");
    const code = readShareCode(new URL(url).hash)!;
    expect((await decodeShare(code))[0].entries.length).toBe(8);
  });
  it("gives clear errors for broken links", async () => {
    await expect(decodeShare("1.%%%")).rejects.toThrow(/damaged/);
    await expect(decodeShare("0." + btoa('{"v":9}'))).rejects.toThrow(/newer/);
  });
});

describe("CSV and JSON", () => {
  it("parses quoted CSV with headers", () => {
    const rows = parseCSV('Name,Weight,Color,Hidden\r\n"Smith, Jo",2,ff0000,"Say ""hi"""\nBo,x,,\n');
    const { entries, warnings } = rowsToEntries(rows);
    expect(entries).toEqual([{ text: "Smith, Jo", weight: 2, color: "#FF0000", hidden: 'Say "hi"' }, { text: "Bo" }]);
    expect(warnings.length).toBe(1);
  });
  it("detects semicolon CSV and headerless files", () => {
    expect(rowsToEntries(parseCSV("a;3\nb;1")).entries).toEqual([
      { text: "a", weight: 3 },
      { text: "b", weight: 1 },
    ]);
  });
  it("parses pasted spreadsheet cells", () => {
    expect(parseBulkText("x\t2\ny\t1\n\n").entries).toEqual([
      { text: "x", weight: 2 },
      { text: "y", weight: 1 },
    ]);
    expect(parseBulkText("one\ntwo").entries.map((e) => e.text)).toEqual(["one", "two"]);
  });
  it("round-trips entries through CSV and neutralises formulas", () => {
    const w = makeWheel({ title: "t", entries: [{ text: "=SUM(A1)", weight: 1.5 }, { text: 'Quote "q"' }] });
    const csv = entriesToCSV(w.entries);
    expect(csv).toContain("'=SUM(A1)");
    const back = rowsToEntries(parseCSV(csv)).entries;
    expect(back[1].text).toBe('Quote "q"');
    expect(back[0].weight).toBe(1.5);
  });
  it("exports history", () => {
    const csv = historyToCSV([{ n: 1, entryId: "e", text: "A", at: 0, entryCount: 2, weight: 1, probability: 0.5 }]);
    expect(csv.split("\r\n")[1]).toBe("1,A,1970-01-01T00:00:00.000Z,2,1,0.500000");
  });
  it("round-trips JSON exports and accepts string arrays", () => {
    const w = makeWheel({ title: "J", entries: ["a", "b"] });
    expect(parseWheelsJSON(wheelsToJSON([w]))[0].entries.map((e) => e.text)).toEqual(["a", "b"]);
    expect(parseWheelsJSON('["x","y"]')[0].entries.length).toBe(2);
    expect(() => parseWheelsJSON("{")).toThrow(/valid JSON/);
    expect(() => parseWheelsJSON('{"a":1}')).toThrow();
  });
});
