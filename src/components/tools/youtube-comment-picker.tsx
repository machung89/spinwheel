"use client";

import { Download, Gift, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { sample } from "@/features/random/rng";
import { track } from "@/features/analytics/analytics";
import { parsePastedComments, parseVideoId, type YtComment } from "@/features/youtube/youtube";
import { Button } from "@/components/ui/button";
import { Field, Input, SegmentedControl, Switch, Textarea } from "@/components/ui/fields";
import { ToolShell } from "./tool-shell";
import { useI18n } from "@/i18n/provider";

export function YouTubeCommentPicker() {
  const { t: d, fmt } = useI18n();
  const t = d.youtube;
  const [mode, setMode] = useState<"link" | "paste">("link");
  const [url, setUrl] = useState("");
  const [pasted, setPasted] = useState("");
  const [comments, setComments] = useState<YtComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [winnersCount, setWinnersCount] = useState(1);
  const [uniqueAuthors, setUniqueAuthors] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [exclude, setExclude] = useState("");
  const [winners, setWinners] = useState<YtComment[]>([]);
  const [apiAvailable, setApiAvailable] = useState(true);

  useEffect(() => {
    fetch("/api/youtube-comments/?check=1")
      .then((r) => r.json() as Promise<{ configured?: boolean }>)
      .then((d) => {
        if (d.configured) return;
        setApiAvailable(false);
        setMode("paste");
      })
      .catch(() => {});
  }, []);

  const source = mode === "paste" ? parsePastedComments(pasted) : comments;
  const excluded = new Set(exclude.split(",").map((s) => s.trim().replace(/^@/, "").toLowerCase()).filter(Boolean));
  let eligible = source.filter((c) => !excluded.has(c.author.toLowerCase()));
  if (keyword.trim()) eligible = eligible.filter((c) => c.text.toLowerCase().includes(keyword.trim().toLowerCase()));
  if (uniqueAuthors) {
    const seen = new Set<string>();
    eligible = eligible.filter((c) => (seen.has(c.channelId) ? false : (seen.add(c.channelId), true)));
  }

  const load = async () => {
    setError("");
    setInfo("");
    setWinners([]);
    if (!parseVideoId(url)) return setError(t.errLink);
    setLoading(true);
    try {
      const res = await fetch(`/api/youtube-comments/?v=${encodeURIComponent(url)}`);
      const data = (await res.json()) as { comments?: YtComment[]; truncated?: boolean; error?: string; message?: string };
      if (!res.ok) {
        if (data.error === "not_configured") {
          setMode("paste");
          setInfo(t.unavailable);
        } else setError(data.message ?? t.errLoad);
        return;
      }
      setComments(data.comments ?? []);
      setInfo(fmt(data.truncated ? t.loadedTruncated : t.loaded, { n: (data.comments ?? []).length.toLocaleString() }));
    } catch {
      setError(t.errNetwork);
    } finally {
      setLoading(false);
    }
  };

  const pick = () => {
    setError("");
    if (eligible.length === 0) return setError(t.errNoEligible);
    setWinners(sample(eligible, Math.min(winnersCount, eligible.length)));
    track("tool_used", { tool: "youtube_comment_picker", eligible: eligible.length, winners: winnersCount });
  };

  return (
    <ToolShell>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          {apiAvailable ? (
            <SegmentedControl
              label={t.source}
              value={mode}
              onChange={setMode}
              options={[
                { value: "link", label: t.link },
                { value: "paste", label: t.paste },
              ]}
            />
          ) : (
            <p className="rounded-xl bg-muted p-3 text-sm text-muted-fg">
              {t.pasteOnly}
            </p>
          )}
          {mode === "link" ? (
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                void load();
              }}
            >
              <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder={t.linkPlaceholder} aria-label={t.linkLabel} className="h-10" />
              <Button type="submit" variant="secondary" className="h-10" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : <Download />} {t.load}
              </Button>
            </form>
          ) : (
            <Field label={t.comments} htmlFor="yt-paste" hint={t.pasteHint}>
              <Textarea id="yt-paste" value={pasted} onChange={(e) => setPasted(e.target.value)} rows={8} placeholder={t.pastePlaceholder} />
            </Field>
          )}
          {info && <p className="text-sm text-muted-fg" role="status">{info}</p>}
          <div className="grid grid-cols-2 gap-3">
            <Field label={t.winners} htmlFor="yt-winners">
              <Input id="yt-winners" type="number" min={1} max={50} value={winnersCount} onChange={(e) => setWinnersCount(Math.max(1, Math.min(50, Number(e.target.value) || 1)))} />
            </Field>
            <Field label={t.mustContain} htmlFor="yt-keyword">
              <Input id="yt-keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="#giveaway" />
            </Field>
          </div>
          <Field label={t.exclude} htmlFor="yt-exclude" hint={t.excludeHint}>
            <Input id="yt-exclude" value={exclude} onChange={(e) => setExclude(e.target.value)} placeholder="mychannel, moderator1" />
          </Field>
          <Switch label={t.onePerPerson} description={t.onePerPersonDesc} checked={uniqueAuthors} onChange={setUniqueAuthors} />
          {error && <p className="text-sm text-danger" role="alert">{error}</p>}
          <Button variant="primary" size="lg" className="w-full" onClick={pick} disabled={eligible.length === 0}>
            <Gift /> {fmt(winnersCount > 1 ? t.pickMany : t.pickOne, { k: winnersCount, n: eligible.length.toLocaleString() })}
          </Button>
        </div>
        <div className="min-h-60 rounded-2xl bg-muted p-5" aria-live="polite">
          {winners.length === 0 ? (
            <p className="flex h-full items-center justify-center text-center text-muted-fg">{t.empty}</p>
          ) : (
            <ol className="space-y-3">
              {winners.map((w, i) => (
                <li key={`${w.channelId}-${i}`} className="animate-pop rounded-2xl bg-card p-4 shadow-sm">
                  <p className="text-xs font-bold tracking-wide text-primary uppercase">{t.winner} {winners.length > 1 ? `#${i + 1}` : ""}</p>
                  <p className="mt-1 text-xl font-black">@{w.author}</p>
                  {w.text && <p className="mt-1 text-sm text-muted-fg">“{w.text}”</p>}
                  {w.publishedAt && <p className="mt-1 text-xs text-muted-fg">{new Date(w.publishedAt).toLocaleString()}</p>}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
