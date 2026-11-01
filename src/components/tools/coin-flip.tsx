"use client";

import { Coins } from "lucide-react";
import { useRef, useState } from "react";
import { randomInt } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import { playWin, unlockAudio } from "@/features/sound/sound";
import { useI18n } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { ToolShell } from "./tool-shell";

type Side = "heads" | "tails";

function Face({ side, label }: { side: Side; label: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center rounded-full border-[6px] px-3 text-center text-xl font-black tracking-widest uppercase shadow-inner [backface-visibility:hidden]"
      style={{
        background: side === "heads" ? "radial-gradient(circle at 35% 30%, #FFE08A, #F2B705 60%, #C98C00)" : "radial-gradient(circle at 35% 30%, #E5E7EB, #A3A8B8 60%, #6B7280)",
        borderColor: side === "heads" ? "#B07D00" : "#5B6170",
        color: side === "heads" ? "#6B4A00" : "#2F3440",
        transform: side === "tails" ? "rotateY(180deg)" : undefined,
      }}
    >
      {label}
    </div>
  );
}

export function CoinFlip() {
  const { t: d, fmt } = useI18n();
  const t = d.coin;
  const [side, setSide] = useState<Side | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [counts, setCounts] = useState({ heads: 0, tails: 0 });
  const [streak, setStreak] = useState(0);
  const [recent, setRecent] = useState<Side[]>([]);
  const [batch, setBatch] = useState<{ heads: number; tails: number; n: number } | null>(null);
  const rotation = useRef(0);
  const coinRef = useRef<HTMLDivElement>(null);
  const word = (s: Side) => (s === "heads" ? t.heads : t.tails);

  const record = (results: Side[]) => {
    setCounts((c) => ({ heads: c.heads + results.filter((r) => r === "heads").length, tails: c.tails + results.filter((r) => r === "tails").length }));
    setRecent((r) => [...results.slice(-20).reverse(), ...r].slice(0, 20));
  };

  const flip = () => {
    if (flipping) return;
    unlockAudio();
    setBatch(null);
    const result: Side = randomInt(2) === 0 ? "heads" : "tails";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Spin 5 full turns and land on the chosen face (0deg = heads, 180deg = tails).
    const current = rotation.current % 360;
    const target = rotation.current - current + 360 * 5 + (result === "tails" ? 180 : 0);
    rotation.current = target;
    setFlipping(true);
    if (coinRef.current) {
      coinRef.current.style.transition = reduce ? "none" : "transform 1.4s cubic-bezier(0.2, 0.7, 0.2, 1)";
      coinRef.current.style.transform = `rotateY(${target}deg)`;
    }
    setTimeout(
      () => {
        setSide(result);
        setFlipping(false);
        setStreak((s) => (result === side ? s + 1 : 1));
        record([result]);
        playWin("pop", 0.4);
        track("tool_used", { tool: "coin_flip", flips: 1 });
      },
      reduce ? 50 : 1400,
    );
  };

  const flipMany = (n: number) => {
    const results: Side[] = Array.from({ length: n }, () => (randomInt(2) === 0 ? "heads" : "tails"));
    const heads = results.filter((r) => r === "heads").length;
    setBatch({ heads, tails: n - heads, n });
    record(results);
    track("tool_used", { tool: "coin_flip", flips: n });
  };

  const total = counts.heads + counts.tails;

  return (
    <ToolShell>
      <div className="flex flex-col items-center">
        <div className="[perspective:900px]">
          <div ref={coinRef} className="relative h-44 w-44 [transform-style:preserve-3d] sm:h-52 sm:w-52">
            <Face side="heads" label={t.headsCap} />
            <Face side="tails" label={t.tailsCap} />
          </div>
        </div>
        <p className="mt-5 h-9 text-2xl font-black first-letter:uppercase" aria-live="polite">
          {flipping ? t.flipping : side ? fmt(t.result, { side: side === "heads" ? t.headsCap : t.tailsCap }) : t.ready}
        </p>
        {side && !flipping && streak > 1 && <p className="text-sm text-muted-fg">{fmt(t.streak, { n: streak, side: word(side) })}</p>}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Button variant="primary" size="lg" onClick={flip} disabled={flipping} className="min-w-40">
            <Coins /> {t.flip}
          </Button>
          <Button size="lg" onClick={() => flipMany(10)} disabled={flipping}>
            {t.flip10}
          </Button>
          <Button size="lg" onClick={() => flipMany(100)} disabled={flipping}>
            {t.flip100}
          </Button>
        </div>
        {batch && (
          <p className="mt-4 text-center" aria-live="polite">
            {fmt(t.batch, { n: batch.n, h: batch.heads, t: batch.tails, p: Math.round((batch.heads / batch.n) * 100) })}
          </p>
        )}
        {total > 0 && (
          <div className="mt-8 w-full max-w-md">
            <div className="flex justify-between text-sm font-semibold">
              <span>
                {t.headsCap} {counts.heads}
              </span>
              <span className="text-muted-fg">{fmt(t.flips, { n: total })}</span>
              <span>
                {t.tailsCap} {counts.tails}
              </span>
            </div>
            <div className="mt-2 flex h-3 overflow-hidden rounded-full bg-muted">
              <div className="bg-[#F2B705] transition-all" style={{ width: `${(counts.heads / total) * 100}%` }} />
              <div className="flex-1 bg-[#A3A8B8]" />
            </div>
            <p className="mt-3 text-center text-xs tracking-widest text-muted-fg" aria-label={t.recent}>
              {recent.map((r) => (r === "heads" ? t.headsCap[0] : t.tailsCap[0])).join(" ")}
            </p>
            <div className="mt-3 text-center">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setCounts({ heads: 0, tails: 0 });
                  setRecent([]);
                  setBatch(null);
                  setStreak(0);
                }}
              >
                {t.reset}
              </Button>
            </div>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
