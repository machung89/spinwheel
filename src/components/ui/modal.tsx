"use client";

import { AnimatePresence, LazyMotion, m, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/provider";

const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

/** Portal target: the fullscreen element when one is active, so dialogs stay visible in fullscreen. */
function usePortalTarget(open: boolean) {
  const [target, setTarget] = useState<Element | null>(null);
  useEffect(() => {
    if (open) setTarget(document.fullscreenElement ?? document.body);
  }, [open]);
  return target;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
  hideTitle,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
  hideTitle?: boolean;
}) {
  const { t } = useI18n();
  const target = usePortalTarget(open);
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusFirst = () => {
      const el = panel?.querySelector<HTMLElement>("[data-autofocus], button, [href], input, select, textarea");
      el?.focus();
    };
    const t = setTimeout(focusFirst, 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey, true);
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!target) return null;
  return createPortal(
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6">
          <m.div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn("relative max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-card p-5 text-fg shadow-2xl sm:p-6", className)}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            <div className={cn("mb-4 flex items-start justify-between gap-4", hideTitle && "sr-only")}>
              <h2 id={titleId} className="text-lg font-bold">
                {title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.common.closeDialog}
              className="absolute end-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-fg hover:bg-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-ring"
            >
              <X className="size-4" />
            </button>
            {children}
          </m.div>
        </div>
      )}
      </AnimatePresence>
    </LazyMotion>,
    target,
  );
}
