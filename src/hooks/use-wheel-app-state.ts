"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import type { AppState, WheelPreset } from "@/types/wheel";
import { makeAppState } from "@/features/wheel-engine/defaults";
import { reducer } from "@/features/wheel-engine/reducer";
import { loadAppState, saveAppState } from "@/features/storage/storage";
import { decodeShare, readShareCode } from "@/features/sharing/share";
import { useI18n } from "@/i18n/provider";

/**
 * App state for one wheel page. The server render uses the page's preset;
 * after hydration the saved state for this page (if any) is restored from
 * LocalStorage and a share link in the URL fragment is merged in.
 */
export function useWheelAppState(storageKey: string, preset?: WheelPreset) {
  const { t, fmt, errorText } = useI18n();
  const [state, dispatch] = useReducer(reducer, preset, (p?: WheelPreset) => makeAppState(p, true));
  const [hydrated, setHydrated] = useState(false);
  const [notice, setNotice] = useState<{ kind: "info" | "error"; text: string } | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    const saved = loadAppState(storageKey);
    if (saved) dispatch({ type: "load", state: saved });
    const code = readShareCode(window.location.hash);
    if (code) {
      decodeShare(code)
        .then((wheels) => {
          if (cancelled) return;
          dispatch({ type: "importWheels", wheels, replace: !saved });
          setNotice({ kind: "info", text: wheels.length > 1 ? fmt(t.wheel.sharedLoadedMany, { n: wheels.length }) : fmt(t.wheel.sharedLoaded, { title: wheels[0].title }) });
        })
        .catch((e: unknown) => !cancelled && setNotice({ kind: "error", text: errorText(e) }))
        .finally(() => {
          history.replaceState(null, "", window.location.pathname + window.location.search);
          if (!cancelled) setHydrated(true);
        });
    } else setHydrated(true);
    return () => {
      cancelled = true;
    };
    // Runs once per page: restoring state must not re-run when the dictionary object changes.
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      if (!saveAppState(storageKey, state)) {
        setNotice({ kind: "error", text: t.wheel.saveFailed });
      }
    }, 400);
    return () => clearTimeout(saveTimer.current);
  }, [state, hydrated, storageKey, t]);

  return { state, dispatch, hydrated, notice, setNotice } as const;
}

export type { AppState };
