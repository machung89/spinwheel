"use client";

import { Dices } from "lucide-react";
import { useState } from "react";
import { randomIntBetween } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import { playTick, unlockAudio } from "@/features/sound/sound";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/fields";
import { ToolShell } from "./tool-shell";

const SIDES = [4, 6, 8, 10, 12, 20, 100];
const PIPS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[28, 28], [72, 72]],
  3: [[28, 28], [50, 50], [72, 72]],
  4: [[28, 28], [72, 28], [28, 72], [72, 72]],
  5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]],
  6: [[28, 26], [72, 26], [28, 50], [72, 50], [28, 74], [72, 74]],
};

function Die({ value, sides }: { value: number; sides: number }) {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20 sm:h-24 sm:w-24" role="img" aria-label={`${value}`}>
      <rect x="4" y="4" width="92" height="92" rx="18" fill="var(--card)" stroke="var(--border-strong)" strokeWidth="3" />
      {sides === 6 ? (
        PIPS[value].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="9" fill="var(--fg)" />)
      ) : (
        <text x="50" y="54" textAnchor="middle" dominantBaseline="middle" fontSize={value >= 100 ? 30 : 40} fontWeight="900" fill="var(--fg)">
          {value}
        </text>
      )}
    </svg>
  );
}

export function DiceRoller() {
  const { t: d, fmt } = useI18n();
  const t = d.dice;
  const [count, setCount] = useState(2);
  const [sides, setSides] = useState(6);
  const [modifier, setModifier] = useState(0);
  const [values, setValues] = useState<number[]>([]);
  const [rolls, setRolls] = useState<{ label: string; total: number }[]>([]);
  const [rollKey, setRollKey] = useState(0);

  const roll = () => {
    unlockAudio();
    playTick("wood", 0.5);
    const v = Array.from({ length: count }, () => randomIntBetween(1, sides));
    const total = v.reduce((a, b) => a + b, 0) + modifier;
    setValues(v);
    setRollKey((k) => k + 1);
    setRolls((r) => [{ label: `${count}d${sides}${modifier ? (modifier > 0 ? `+${modifier}` : modifier) : ""}: ${v.join(" + ")}`, total }, ...r].slice(0, 12));
    track("tool_used", { tool: "dice_roller", dice: count, sides });
  };

  const total = values.reduce((a, b) => a + b, 0) + modifier;

  return (
    <ToolShell>
      <div className="grid gap-6 md:grid-cols-[minmax(0,280px)_1fr]">
        <div className="space-y-4">
          <Field label={t.count} htmlFor="dice-count">
            <Input id="dice-count" type="number" min={1} max={12} value={count} onChange={(e) => setCount(Math.max(1, Math.min(12, Number(e.target.value) || 1)))} />
          </Field>
          <Field label={t.sides} htmlFor="dice-sides">
            <Select id="dice-sides" value={sides} onChange={(e) => setSides(Number(e.target.value))}>
              {SIDES.map((s) => (
                <option key={s} value={s}>
                  {fmt(t.sideOption, { s })}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={t.modifier} htmlFor="dice-mod" hint={t.modifierHint}>
            <Input id="dice-mod" type="number" min={-100} max={100} value={modifier} onChange={(e) => setModifier(Math.max(-100, Math.min(100, Number(e.target.value) || 0)))} />
          </Field>
          <Button variant="primary" size="lg" className="w-full" onClick={roll}>
            <Dices /> {fmt(t.roll, { spec: `${count}d${sides}` })}
          </Button>
        </div>
        <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl bg-muted p-5" aria-live="polite">
          {values.length === 0 ? (
            <p className="text-muted-fg">{t.empty}</p>
          ) : (
            <>
              <ul key={rollKey} className="flex flex-wrap justify-center gap-3">
                {values.map((v, i) => (
                  <li key={i} className="animate-dice">
                    <Die value={v} sides={sides} />
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-lg">
                {t.total} <strong className="text-3xl font-black tabular-nums">{total}</strong>
                {modifier !== 0 && <span className="ms-2 text-sm text-muted-fg">{fmt(t.includes, { m: modifier > 0 ? `+${modifier}` : modifier })}</span>}
              </p>
            </>
          )}
        </div>
      </div>
      {rolls.length > 1 && (
        <div className="mt-6">
          <h2 className="text-sm font-bold">{t.history}</h2>
          <ol className="mt-2 space-y-1 text-sm">
            {rolls.slice(1).map((r, i) => (
              <li key={i} className="flex justify-between gap-3 text-muted-fg">
                <span className="truncate">{r.label}</span>
                <strong className="text-fg tabular-nums">{r.total}</strong>
              </li>
            ))}
          </ol>
        </div>
      )}
    </ToolShell>
  );
}
