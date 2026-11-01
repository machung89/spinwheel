"use client";

import { RotateCw } from "lucide-react";
import { useRef, useState } from "react";
import { randomInt } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import type { TodLevel } from "@/data/truth-or-dare";
import type { TodContent } from "@/content/types";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { Input, SegmentedControl } from "@/components/ui/fields";
import { ToolShell } from "./tool-shell";

type Kind = "truth" | "dare";

/** Prompts are passed in by the server page so only the active language's prompts are shipped. */
export function TruthOrDareGenerator({ prompts }: { prompts: TodContent }) {
  const { t: d, fmt } = useI18n();
  const t = d.tod;
  const levels: { value: TodLevel; label: string; description: string }[] = [
    { value: "kids", label: t.kids, description: t.kidsDesc },
    { value: "teens", label: t.teens, description: t.teensDesc },
    { value: "adults", label: t.adults, description: t.adultsDesc },
  ];
  const [level, setLevel] = useState<TodLevel>("kids");
  const [card, setCard] = useState<{ kind: Kind; text: string } | null>(null);
  const [players, setPlayers] = useState("");
  const [turn, setTurn] = useState(0);
  const [key, setKey] = useState(0);
  // Remember used prompts per list so nothing repeats until the list runs out.
  const used = useRef(new Map<string, Set<number>>());

  const names = players.split(",").map((s) => s.trim()).filter(Boolean);
  const current = names.length ? names[turn % names.length] : null;

  const draw = (kind: Kind | "random") => {
    const k: Kind = kind === "random" ? (randomInt(2) ? "truth" : "dare") : kind;
    const list = (k === "truth" ? prompts.truths : prompts.dares)[level];
    const id = `${level}:${k}`;
    let seen = used.current.get(id);
    if (!seen || seen.size >= list.length) used.current.set(id, (seen = new Set()));
    const remaining = list.map((_, i) => i).filter((i) => !seen!.has(i));
    const pick = remaining[randomInt(remaining.length)];
    seen.add(pick);
    setCard({ kind: k, text: list[pick] });
    setKey((x) => x + 1);
    track("tool_used", { tool: "truth_or_dare", level, kind: k });
  };

  return (
    <ToolShell>
      <div className="mx-auto max-w-2xl">
        <SegmentedControl label={t.ageGroup} value={level} onChange={setLevel} options={levels.map((l) => ({ value: l.value, label: l.label }))} />
        <p className="mt-2 text-center text-xs text-muted-fg">{levels.find((l) => l.value === level)?.description}</p>
        <label className="mt-4 block text-xs font-semibold text-muted-fg" htmlFor="tod-players">
          {t.players}
        </label>
        <Input id="tod-players" value={players} onChange={(e) => setPlayers(e.target.value)} placeholder={t.playersPlaceholder} className="mt-1.5" />

        <div
          key={key}
          className={`animate-pop mt-6 flex min-h-56 flex-col items-center justify-center rounded-3xl p-6 text-center shadow-lg ${
            card?.kind === "truth" ? "bg-[#118AB2] text-white" : card?.kind === "dare" ? "bg-[#EF476F] text-white" : "bg-muted text-muted-fg"
          }`}
          aria-live="polite"
        >
          {current && <p className="mb-2 text-sm font-semibold opacity-90">{fmt(t.turn, { name: current })}</p>}
          {card ? (
            <>
              <p className="text-xs font-black tracking-[0.3em] uppercase opacity-80">{card.kind === "truth" ? t.truth : t.dare}</p>
              <p className="mt-3 text-xl font-bold sm:text-2xl">{card.text}</p>
            </>
          ) : (
            <p>{t.begin}</p>
          )}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <Button size="lg" onClick={() => draw("truth")} className="bg-[#118AB2] text-white hover:bg-[#0e7696]">
            {t.truth}
          </Button>
          <Button size="lg" variant="primary" onClick={() => draw("random")}>
            {t.random}
          </Button>
          <Button size="lg" onClick={() => draw("dare")} className="bg-[#EF476F] text-white hover:bg-[#d93d62]">
            {t.dare}
          </Button>
        </div>
        {names.length > 1 && (
          <div className="mt-3 text-center">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setTurn((n) => n + 1);
                setCard(null);
              }}
            >
              <RotateCw /> {t.next}
            </Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
