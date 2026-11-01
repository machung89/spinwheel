"use client";

import { Check, ClipboardCopy, Dices } from "lucide-react";
import { useState } from "react";
import { randomInt, randomIntBetween } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { Field, Input, Switch } from "@/components/ui/fields";
import { ToolShell, copyText } from "./tool-shell";

const MAX_COUNT = 1000;
const MAX_ABS = Number.MAX_SAFE_INTEGER / 2;

/** Draws `count` integers in [min, max]; unique draws use a sparse Fisher–Yates so huge ranges stay fast. */
export function drawNumbers(min: number, max: number, count: number, unique: boolean): number[] {
  const range = max - min + 1;
  if (!unique) return Array.from({ length: count }, () => randomIntBetween(min, max));
  const swapped = new Map<number, number>();
  const out: number[] = [];
  for (let i = 0; i < count; i++) {
    const j = i + randomInt(range - i);
    const vj = swapped.get(j) ?? j;
    swapped.set(j, swapped.get(i) ?? i);
    out.push(min + vj);
  }
  return out;
}

export function NumberGenerator() {
  const { t: d, fmt } = useI18n();
  const t = d.number;
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [unique, setUnique] = useState(true);
  const [sorted, setSorted] = useState(false);
  const [result, setResult] = useState<number[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setError("");
    const lo = Number(min);
    const hi = Number(max);
    const n = Number(count);
    if (![lo, hi, n].every(Number.isInteger)) return setError(t.errWhole);
    if (Math.abs(lo) > MAX_ABS || Math.abs(hi) > MAX_ABS) return setError(t.errBounds);
    if (lo > hi) return setError(t.errOrder);
    if (n < 1 || n > MAX_COUNT) return setError(fmt(t.errCount, { max: MAX_COUNT }));
    if (unique && n > hi - lo + 1) return setError(fmt(t.errUnique, { n: hi - lo + 1 }));
    let nums = drawNumbers(lo, hi, n, unique);
    if (sorted) nums = nums.slice().sort((a, b) => a - b);
    setResult(nums);
    setHistory((h) => [nums.join(", "), ...h].slice(0, 10));
    track("tool_used", { tool: "number_generator", count: n });
  };

  return (
    <ToolShell>
      <div className="grid gap-6 md:grid-cols-[minmax(0,320px)_1fr]">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            generate();
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            <Field label={t.min} htmlFor="rng-min">
              <Input id="rng-min" inputMode="numeric" value={min} onChange={(e) => setMin(e.target.value)} />
            </Field>
            <Field label={t.max} htmlFor="rng-max">
              <Input id="rng-max" inputMode="numeric" value={max} onChange={(e) => setMax(e.target.value)} />
            </Field>
          </div>
          <Field label={t.howMany} htmlFor="rng-count">
            <Input id="rng-count" inputMode="numeric" value={count} onChange={(e) => setCount(e.target.value)} />
          </Field>
          <Switch label={t.noRepeats} description={t.noRepeatsDesc} checked={unique} onChange={setUnique} />
          <Switch label={t.sort} checked={sorted} onChange={setSorted} />
          {error && (
            <p className="text-sm text-danger" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" variant="primary" size="lg" className="w-full">
            <Dices /> {t.generate}
          </Button>
        </form>
        <div className="flex min-h-56 flex-col rounded-2xl bg-muted p-5" aria-live="polite">
          {result.length === 0 ? (
            <p className="m-auto text-center text-muted-fg">{t.empty}</p>
          ) : result.length === 1 ? (
            <p key={history.length} className="animate-pop m-auto text-7xl font-black tabular-nums sm:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
              {result[0].toLocaleString()}
            </p>
          ) : (
            <ul key={history.length} className="animate-pop flex flex-wrap gap-2">
              {result.map((n, i) => (
                <li key={i} className="rounded-xl bg-card px-3 py-1.5 font-bold tabular-nums shadow-sm">
                  {n.toLocaleString()}
                </li>
              ))}
            </ul>
          )}
          {result.length > 0 && (
            <div className="mt-4 flex justify-end">
              <Button
                size="sm"
                onClick={async () => {
                  setCopied(await copyText(result.join(", ")));
                  setTimeout(() => setCopied(false), 1500);
                }}
              >
                {copied ? <Check /> : <ClipboardCopy />} {copied ? d.common.copied : d.common.copy}
              </Button>
            </div>
          )}
        </div>
      </div>
      {history.length > 1 && (
        <div className="mt-6">
          <h2 className="text-sm font-bold">{t.previous}</h2>
          <ol className="mt-2 space-y-1 text-sm text-muted-fg">
            {history.slice(1).map((h, i) => (
              <li key={i} className="truncate">
                {h}
              </li>
            ))}
          </ol>
        </div>
      )}
    </ToolShell>
  );
}
