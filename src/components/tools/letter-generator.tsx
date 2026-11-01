"use client";

import { CaseSensitive } from "lucide-react";
import { useState } from "react";
import { sample, randomInt } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { Field, Input, SegmentedControl, Switch } from "@/components/ui/fields";
import { ToolShell } from "./tool-shell";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const VOWELS = new Set(["A", "E", "I", "O", "U"]);
// Letters that are awkward in category games like "name a thing that starts with…"
const HARD = new Set(["Q", "U", "V", "X", "Y", "Z"]);

export function LetterGenerator() {
  const { t: d, fmt } = useI18n();
  const t = d.letter;
  const [set, setSet] = useState<"all" | "vowels" | "consonants">("all");
  const [kase, setKase] = useState<"upper" | "lower" | "both">("upper");
  const [count, setCount] = useState(1);
  const [unique, setUnique] = useState(true);
  const [skipHard, setSkipHard] = useState(false);
  const [result, setResult] = useState<string[]>([]);
  const [used, setUsed] = useState<string[]>([]);
  const [error, setError] = useState("");

  const pool = ALPHABET.filter((l) => (set === "vowels" ? VOWELS.has(l) : set === "consonants" ? !VOWELS.has(l) : true)).filter((l) => !(skipHard && HARD.has(l)));

  const generate = () => {
    setError("");
    if (pool.length === 0) return setError(t.errNone);
    if (unique && count > pool.length) return setError(fmt(t.errUnique, { n: pool.length }));
    const picked = unique ? sample(pool, count) : Array.from({ length: count }, () => pool[randomInt(pool.length)]);
    const cased = picked.map((l) => (kase === "lower" ? l.toLowerCase() : kase === "both" ? `${l}${l.toLowerCase()}` : l));
    setResult(cased);
    setUsed((u) => [...cased, ...u].slice(0, 26));
    track("tool_used", { tool: "letter_generator", count });
  };

  return (
    <ToolShell>
      <div className="grid gap-6 md:grid-cols-[minmax(0,320px)_1fr]">
        <div className="space-y-4">
          <SegmentedControl
            label={t.letters}
            value={set}
            onChange={setSet}
            options={[
              { value: "all", label: t.all },
              { value: "vowels", label: t.vowels },
              { value: "consonants", label: t.consonants },
            ]}
          />
          <SegmentedControl
            label={t.case}
            value={kase}
            onChange={setKase}
            options={[
              { value: "upper", label: "ABC" },
              { value: "lower", label: "abc" },
              { value: "both", label: "Aa" },
            ]}
          />
          <Field label={t.howMany} htmlFor="letter-count">
            <Input id="letter-count" type="number" min={1} max={26} value={count} onChange={(e) => setCount(Math.max(1, Math.min(26, Number(e.target.value) || 1)))} />
          </Field>
          <Switch label={t.noRepeats} checked={unique} onChange={setUnique} />
          <Switch label={t.skipHard} description={t.skipHardDesc} checked={skipHard} onChange={setSkipHard} />
          {error && (
            <p className="text-sm text-danger" role="alert">
              {error}
            </p>
          )}
          <Button variant="primary" size="lg" className="w-full" onClick={generate}>
            <CaseSensitive /> {count > 1 ? t.pickMany : t.pickOne}
          </Button>
        </div>
        <div className="flex min-h-56 flex-col rounded-2xl bg-muted p-5" aria-live="polite">
          {result.length === 0 ? (
            <p className="m-auto text-muted-fg">{t.empty}</p>
          ) : (
            <ul key={used.length} className="animate-pop m-auto flex flex-wrap justify-center gap-3">
              {result.map((l, i) => (
                <li key={i} className={`font-black ${result.length === 1 ? "text-8xl sm:text-9xl" : "rounded-2xl bg-card px-4 py-2 text-4xl shadow-sm"}`} style={{ fontFamily: "var(--font-display)" }}>
                  {l}
                </li>
              ))}
            </ul>
          )}
          {used.length > result.length && <p className="mt-4 text-center text-xs text-muted-fg">{fmt(t.recent, { list: used.slice(result.length).join(" ") })}</p>}
        </div>
      </div>
    </ToolShell>
  );
}
