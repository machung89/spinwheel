"use client";

import { Check, ClipboardCopy, Download, Link2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { Wheel } from "@/types/wheel";
import { buildShareUrl, SHARE_URL_SOFT_LIMIT } from "@/features/sharing/share";
import { downloadFile, slugifyFilename, wheelsToJSON } from "@/features/import-export/files";
import { track } from "@/features/analytics/analytics";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useI18n } from "@/i18n/provider";

export function ShareDialog({ open, onClose, wheels, activeId }: { open: boolean; onClose: () => void; wheels: Wheel[]; activeId: string }) {
  const { t, fmt } = useI18n();
  const [scope, setScope] = useState<"active" | "all">("active");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const selected = scope === "all" ? wheels : wheels.filter((w) => w.id === activeId);
  const hasUploads = selected.some((w) => w.entries.some((e) => e.image?.startsWith("data:")));

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setError("");
    buildShareUrl(selected, window.location.origin + window.location.pathname)
      .then((u) => !cancelled && setUrl(u))
      .catch(() => !cancelled && setError(t.share.createFailed));
    return () => {
      cancelled = true;
    };
    // Rebuild only when the dialog opens or the scope changes.
  }, [open, scope]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      track("wheel_shared", { wheels: selected.length, length: url.length });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setError(t.share.clipboardFailed);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={t.share.title}>
      <p className="text-sm text-muted-fg">
        {t.share.intro}
      </p>
      {wheels.length > 1 && (
        <div className="mt-4 flex gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" checked={scope === "active"} onChange={() => setScope("active")} className="accent-[var(--primary)]" /> {t.share.thisWheel}
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" checked={scope === "all"} onChange={() => setScope("all")} className="accent-[var(--primary)]" /> {fmt(t.share.allWheels, { n: wheels.length })}
          </label>
        </div>
      )}
      <div className="mt-4 flex gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-border bg-muted px-3">
          <Link2 className="size-4 shrink-0 text-muted-fg" />
          <input readOnly value={url} aria-label={t.share.linkLabel} onFocus={(e) => e.currentTarget.select()} className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none" />
        </div>
        <Button variant="primary" onClick={copy} disabled={!url} className="h-10">
          {copied ? <Check /> : <ClipboardCopy />} {copied ? t.common.copied : t.common.copy}
        </Button>
      </div>
      {hasUploads && <p className="mt-3 text-xs text-muted-fg">{t.share.uploadsNote}</p>}
      {url.length > SHARE_URL_SOFT_LIMIT && (
        <p className="mt-3 text-xs text-danger">{fmt(t.share.longLink, { n: url.length.toLocaleString() })}</p>
      )}
      {error && <p className="mt-3 text-sm text-danger">{error}</p>}
      <div className="mt-5 border-t border-border pt-4">
        <Button size="sm" onClick={() => downloadFile(`${slugifyFilename(selected[0]?.title ?? "wheels")}.json`, wheelsToJSON(selected), "application/json")}>
          <Download /> {t.share.downloadJson}
        </Button>
      </div>
    </Modal>
  );
}
