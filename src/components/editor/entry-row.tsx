"use client";

import { ChevronDown, Copy, Eye, EyeOff, ImagePlus, Trash2, X } from "lucide-react";
import { memo, useId, useRef, useState } from "react";
import type { WheelEntry } from "@/types/wheel";
import type { Action } from "@/features/wheel-engine/reducer";
import { MAX_WEIGHT, MIN_WEIGHT } from "@/features/wheel-engine/defaults";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/fields";
import { cn } from "@/lib/cn";
import { isValidImageUrl, processImageFile } from "./image-utils";
import { useI18n } from "@/i18n/provider";

interface Props {
  entry: WheelEntry;
  index: number;
  color: string;
  wheelId: string;
  weighted: boolean;
  wins?: number;
  maskHidden: boolean;
  dispatch: (a: Action) => void;
  onError: (msg: string) => void;
}

/** Keeps a local draft so partial input like "0." isn't clobbered while typing. */
function WeightInput({ value, label, title, onCommit }: { value: number; label: string; title: string; onCommit: (v: number) => void }) {
  const [draft, setDraft] = useState(String(value));
  const [prev, setPrev] = useState(value);
  if (prev !== value) {
    setPrev(value);
    setDraft(String(value));
  }
  return (
    <Input
      type="number"
      inputMode="decimal"
      min={MIN_WEIGHT}
      max={MAX_WEIGHT}
      step="any"
      value={draft}
      onChange={(e) => {
        setDraft(e.target.value);
        const n = Number(e.target.value);
        if (e.target.value !== "" && Number.isFinite(n) && n > 0) onCommit(n);
      }}
      onBlur={() => setDraft(String(value))}
      aria-label={label}
      title={title}
      className="h-8 w-16 px-2 text-end tabular-nums"
    />
  );
}

export const EntryRow = memo(function EntryRow({ entry, index, color, wheelId, weighted, wins, maskHidden, dispatch, onError }: Props) {
  const { t, fmt, errorText } = useI18n();
  const e = t.editor;
  const name = entry.text || fmt(e.entryN, { n: index + 1 });
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const update = (patch: Partial<WheelEntry>) => dispatch({ type: "updateEntry", wheelId, entryId: entry.id, patch });

  const onFile = async (file?: File) => {
    if (!file) return;
    try {
      update({ image: await processImageFile(file) });
    } catch (err) {
      onError(errorText(err));
    }
  };

  return (
    <li className={cn("entry-row rounded-xl border border-transparent", open && "border-border bg-muted/50", !entry.enabled && "opacity-55")}>
      <div className="flex items-center gap-1.5 px-1 py-1">
        <label className="relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden rounded-md border border-black/10" style={{ background: color }} title={e.segmentColor}>
          <span className="sr-only">{fmt(e.colorFor, { name })}</span>
          <input type="color" value={entry.color ?? color} onChange={(e) => update({ color: e.target.value.toUpperCase() })} className="absolute inset-0 cursor-pointer opacity-0" />
        </label>
        <Input
          value={entry.text}
          onChange={(e) => update({ text: e.target.value })}
          aria-label={fmt(e.entryN, { n: index + 1 })}
          placeholder={fmt(e.entryN, { n: index + 1 })}
          className={cn("h-8 min-w-0 flex-1", !entry.enabled && "line-through")}
          maxLength={200}
        />
        {weighted && <WeightInput value={entry.weight} label={fmt(e.weightFor, { name })} title={e.weightTitle} onCommit={(weight) => update({ weight })} />}
        {wins !== undefined && (
          <span className="w-8 shrink-0 text-center text-xs font-semibold tabular-nums text-muted-fg" title={e.wins}>
            {wins}
          </span>
        )}
        <Button size="iconSm" variant="ghost" onClick={() => update({ enabled: !entry.enabled })} aria-label={entry.enabled ? e.hideFromWheel : e.showOnWheel} title={entry.enabled ? e.hideFromWheel : e.showOnWheel}>
          {entry.enabled ? <Eye /> : <EyeOff />}
        </Button>
        <Button size="iconSm" variant="ghost" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={id} aria-label={e.moreOptions} title={e.moreOptionsTitle}>
          <ChevronDown className={cn("transition-transform", open && "rotate-180")} />
        </Button>
        <Button size="iconSm" variant="danger" onClick={() => dispatch({ type: "removeEntry", wheelId, entryId: entry.id })} aria-label={fmt(e.deleteEntry, { name })} title={e.delete}>
          <Trash2 />
        </Button>
      </div>
      {open && (
        <div id={id} className="space-y-3 px-2 pt-1 pb-3">
          <div className="grid grid-cols-[5rem_1fr] gap-2">
            <Input value={entry.emoji ?? ""} onChange={(e) => update({ emoji: e.target.value.slice(0, 16) || undefined })} placeholder={e.emoji} aria-label={e.emoji} maxLength={16} />
            <Input value={entry.description ?? ""} onChange={(e) => update({ description: e.target.value || undefined })} placeholder={e.descriptionPlaceholder} aria-label={e.description} maxLength={1000} />
          </div>
          <Textarea
            value={entry.hidden ?? ""}
            onChange={(e) => update({ hidden: e.target.value || undefined })}
            placeholder={e.hiddenPlaceholder}
            aria-label={e.hiddenLabel}
            className={cn("min-h-16", maskHidden && entry.hidden && "blur-[3px] focus:blur-none")}
            maxLength={1000}
          />
          <div className="flex flex-wrap items-center gap-2">
            {entry.image ? (
              <span className="flex items-center gap-2">
                <img src={entry.image} alt="" className="h-9 w-9 rounded-full border border-border object-cover" />
                <Button size="sm" variant="ghost" onClick={() => update({ image: undefined })}>
                  <X /> {e.removeImage}
                </Button>
              </span>
            ) : (
              <>
                <Button size="sm" onClick={() => fileRef.current?.click()}>
                  <ImagePlus /> {e.uploadImage}
                </Button>
                <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={(e) => void onFile(e.target.files?.[0])} />
                <form
                  className="flex min-w-40 flex-1 gap-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!isValidImageUrl(imageUrl)) return onError(t.errors.imageHttps);
                    update({ image: imageUrl });
                    setImageUrl("");
                  }}
                >
                  <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder={e.imageUrlPlaceholder} aria-label={e.imageUrlLabel} className="h-8" />
                  <Button size="sm" type="submit" variant="secondary">
                    {e.add}
                  </Button>
                </form>
              </>
            )}
            <Button size="sm" variant="ghost" className="ms-auto" onClick={() => dispatch({ type: "duplicateEntry", wheelId, entryId: entry.id })}>
              <Copy /> {e.duplicate}
            </Button>
          </div>
        </div>
      )}
    </li>
  );
});
