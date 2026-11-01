"use client";

import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { randomInt } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { Input, Switch } from "@/components/ui/fields";
import { ToolShell } from "./tool-shell";

type Answer = "yes" | "no" | "maybe";
const STYLE: Record<Answer, string> = {
  yes: "bg-[#06D6A0] text-[#053b2c]",
  no: "bg-[#EF476F] text-white",
  maybe: "bg-[#FFD166] text-[#4a3500]",
};

export function YesNoPicker() {
  const { t: d, fmt } = useI18n();
  const t = d.yesno;
  const words: Record<Answer, string> = { yes: t.yes, no: t.no, maybe: t.maybe };
  const [question, setQuestion] = useState("");
  const [maybe, setMaybe] = useState(false);
  const [bestOf, setBestOf] = useState(false);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [tally, setTally] = useState<Answer[]>([]);
  const [log, setLog] = useState<{ q: string; a: Answer }[]>([]);
  const [key, setKey] = useState(0);

  const ask = () => {
    const options: Answer[] = maybe ? ["yes", "no", "maybe"] : ["yes", "no"];
    let result: Answer;
    const votes: Answer[] = [];
    if (bestOf) {
      // Best of three (yes/no only): the first answer to win twice is the result.
      while (votes.filter((v) => v === "yes").length < 2 && votes.filter((v) => v === "no").length < 2) votes.push(randomInt(2) ? "yes" : "no");
      result = votes.filter((v) => v === "yes").length === 2 ? "yes" : "no";
    } else result = options[randomInt(options.length)];
    setAnswer(result);
    setTally(votes);
    setKey((k) => k + 1);
    setLog((l) => [{ q: question.trim() || t.noQuestion, a: result }, ...l].slice(0, 10));
    track("tool_used", { tool: "yes_no_picker", maybe, best_of: bestOf });
  };

  return (
    <ToolShell>
      <form
        className="mx-auto flex max-w-xl flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          ask();
        }}
      >
        <label htmlFor="yn-question" className="sr-only">
          {t.question}
        </label>
        <Input id="yn-question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder={t.placeholder} className="h-12 text-center text-base" maxLength={140} />
        <div
          key={key}
          className={`animate-pop mt-6 flex h-44 w-44 items-center justify-center rounded-full px-4 text-center text-4xl font-black shadow-lg sm:text-5xl ${answer ? STYLE[answer] : "bg-muted text-muted-fg"}`}
          aria-live="polite"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {answer ? words[answer] : <HelpCircle className="size-14" aria-label={t.noAnswer} />}
        </div>
        {tally.length > 0 && <p className="mt-3 text-sm text-muted-fg">{fmt(t.votes, { list: tally.map((v) => words[v]).join(", ") })}</p>}
        <div className="mt-6 grid w-full max-w-sm gap-1">
          <Switch
            label={t.includeMaybe}
            checked={maybe && !bestOf}
            onChange={(v) => {
              setMaybe(v);
              if (v) setBestOf(false);
            }}
          />
          <Switch
            label={t.bestOf3}
            description={t.bestOf3Desc}
            checked={bestOf}
            onChange={(v) => {
              setBestOf(v);
              if (v) setMaybe(false);
            }}
          />
        </div>
        <Button type="submit" variant="primary" size="lg" className="mt-5 min-w-48">
          {t.ask}
        </Button>
      </form>
      {log.length > 0 && (
        <div className="mx-auto mt-8 max-w-xl">
          <h2 className="text-sm font-bold">{t.recent}</h2>
          <ol className="mt-2 space-y-1 text-sm">
            {log.map((l, i) => (
              <li key={i} className="flex justify-between gap-3">
                <span className="truncate text-muted-fg">{l.q}</span>
                <strong>{words[l.a]}</strong>
              </li>
            ))}
          </ol>
        </div>
      )}
    </ToolShell>
  );
}
