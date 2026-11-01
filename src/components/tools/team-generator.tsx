"use client";

import { Check, ClipboardCopy, Shuffle, Users } from "lucide-react";
import { useState } from "react";
import { shuffle } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { Field, Input, SegmentedControl, Textarea } from "@/components/ui/fields";
import { ToolShell, copyText } from "./tool-shell";

const TEAM_COLORS = ["#5B5BF0", "#FF6B5B", "#2EC4B6", "#FF9F1C", "#9D4EDD", "#E63946", "#06D6A0", "#118AB2"];

/** Deals a shuffled list round-robin so team sizes differ by at most one. */
export function makeTeams<T>(items: readonly T[], teamCount: number): T[][] {
  const teams: T[][] = Array.from({ length: teamCount }, () => []);
  shuffle(items).forEach((item, i) => teams[i % teamCount].push(item));
  return teams;
}

export function TeamGenerator() {
  const { t: d, fmt } = useI18n();
  const t = d.team;
  const [text, setText] = useState(t.sample);
  const [by, setBy] = useState<"teams" | "size">("teams");
  const [count, setCount] = useState(3);
  const [names, setNames] = useState("");
  const [teams, setTeams] = useState<string[][]>([]);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const people = [...new Set(text.split(/\r?\n|,/).map((s) => s.trim()).filter(Boolean))];
  const teamNames = names.split(",").map((s) => s.trim()).filter(Boolean);

  const generate = () => {
    setError("");
    if (people.length < 2) return setError(t.errMin);
    const n = by === "teams" ? count : Math.ceil(people.length / count);
    if (n < 1 || n > people.length) return setError(fmt(t.errRange, { n: people.length }));
    setTeams(makeTeams(people, n));
    track("tool_used", { tool: "team_generator", people: people.length, teams: n });
  };

  const label = (i: number) => teamNames[i] || fmt(t.team, { n: i + 1 });
  const asText = teams.map((tm, i) => `${label(i)}: ${tm.join(", ")}`).join("\n");

  return (
    <ToolShell>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="space-y-4">
          <Field label={fmt(t.names, { n: people.length })} htmlFor="team-names" hint={t.namesHint}>
            <Textarea id="team-names" value={text} onChange={(e) => setText(e.target.value)} rows={10} />
          </Field>
          <SegmentedControl
            label={t.splitBy}
            value={by}
            onChange={setBy}
            options={[
              { value: "teams", label: t.byTeams },
              { value: "size", label: t.bySize },
            ]}
          />
          <Field label={by === "teams" ? t.byTeams : t.bySize} htmlFor="team-count">
            <Input id="team-count" type="number" min={1} max={100} value={count} onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value) || 1)))} />
          </Field>
          <Field label={t.teamNames} htmlFor="team-labels" hint={t.teamNamesHint}>
            <Input id="team-labels" value={names} onChange={(e) => setNames(e.target.value)} placeholder={t.teamNamesPlaceholder} />
          </Field>
          {error && (
            <p className="text-sm text-danger" role="alert">
              {error}
            </p>
          )}
          <Button variant="primary" size="lg" className="w-full" onClick={generate}>
            <Shuffle /> {teams.length ? t.again : t.generate}
          </Button>
        </div>
        <div aria-live="polite">
          {teams.length === 0 ? (
            <div className="flex h-full min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-border p-6 text-center text-muted-fg">
              <Users className="mb-2 size-8" aria-hidden="true" />
              {t.placeholder}
            </div>
          ) : (
            <>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-bold">{fmt(t.count, { n: teams.length })}</h2>
                <Button
                  size="sm"
                  onClick={async () => {
                    setCopied(await copyText(asText));
                    setTimeout(() => setCopied(false), 1500);
                  }}
                >
                  {copied ? <Check /> : <ClipboardCopy />} {copied ? d.common.copied : t.copy}
                </Button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {teams.map((tm, i) => (
                  <li key={i} className="animate-pop overflow-hidden rounded-2xl border border-border">
                    <h3 className="px-4 py-2 font-bold text-white" style={{ background: TEAM_COLORS[i % TEAM_COLORS.length] }}>
                      {label(i)} <span className="font-medium opacity-80">· {tm.length}</span>
                    </h3>
                    <ol className="space-y-1 px-4 py-3 text-sm">
                      {tm.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
