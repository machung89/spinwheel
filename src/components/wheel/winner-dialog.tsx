"use client";

import { ClipboardCopy, History, RotateCw, Trash2, Check } from "lucide-react";
import { useState } from "react";
import type { Segment } from "@/types/wheel";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useI18n } from "@/i18n/provider";

interface Props {
  open: boolean;
  segment: Segment | null;
  wheelTitle: string;
  eliminating: boolean;
  onClose: () => void;
  onSpinAgain: () => void;
  onRemove: () => void;
  onHistory: () => void;
}

export function WinnerDialog({ open, segment, wheelTitle, eliminating, onClose, onSpinAgain, onRemove, onHistory }: Props) {
  const { t, fmt } = useI18n();
  const [copied, setCopied] = useState(false);
  if (!segment) return null;
  const { entry } = segment;

  const copy = async () => {
    const text = [entry.text, entry.description, entry.hidden].filter(Boolean).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={t.winner.title} className="text-center" hideTitle>
      <p className="text-sm font-semibold tracking-wide text-muted-fg uppercase">{wheelTitle}</p>
      <p className="mt-1 text-sm font-medium text-primary">{t.winner.title}</p>
      <div className="animate-pop mx-auto mt-4 flex flex-col items-center gap-3">
        {entry.image ? (
          // User-supplied image; next/image isn't useful for data URLs.
          <img src={entry.image} alt="" className="h-24 w-24 rounded-full border-4 object-cover shadow" style={{ borderColor: segment.color }} />
        ) : entry.emoji ? (
          <span className="text-6xl" aria-hidden="true">
            {entry.emoji}
          </span>
        ) : (
          <span className="h-4 w-20 rounded-full" style={{ background: segment.color }} aria-hidden="true" />
        )}
        <p className="text-3xl font-black break-words sm:text-4xl" style={{ fontFamily: "var(--font-display)" }} data-autofocus tabIndex={-1}>
          {entry.text}
        </p>
        {entry.description && <p className="text-muted-fg">{entry.description}</p>}
      </div>
      {entry.hidden && (
        <div className="mt-5 rounded-2xl border border-primary/30 bg-primary-soft p-4 text-start">
          <p className="mb-1 text-xs font-bold tracking-wide text-primary uppercase">{t.winner.revealed}</p>
          <p className="whitespace-pre-wrap">{entry.hidden}</p>
        </div>
      )}
      <p className="mt-4 text-xs text-muted-fg">
        {fmt(t.winner.chance, { p: (segment.probability * 100).toFixed(segment.probability < 0.01 ? 2 : 1) })}
        {eliminating && t.winner.willRemove}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Button variant="primary" onClick={onSpinAgain} className="col-span-2 sm:col-span-1">
          <RotateCw /> {t.winner.spinAgain}
        </Button>
        {eliminating ? (
          <Button onClick={onClose}>{t.winner.done}</Button>
        ) : (
          <>
            <Button onClick={onRemove}>
              <Trash2 /> {t.winner.remove}
            </Button>
            <Button onClick={onClose}>{t.winner.keep}</Button>
          </>
        )}
        <Button onClick={copy} aria-live="polite">
          {copied ? <Check /> : <ClipboardCopy />} {copied ? t.common.copied : t.common.copy}
        </Button>
      </div>
      <Button variant="ghost" size="sm" onClick={onHistory} className="mt-3">
        <History /> {t.winner.viewHistory}
      </Button>
    </Modal>
  );
}
