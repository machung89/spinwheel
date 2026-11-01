import type { WheelPreset } from "@/types/wheel";
import type { ToolKind } from "@/data/landing/types";
import type { TodContent } from "@/content/types";
import { WheelApp } from "@/components/wheel/wheel-app";
import { TeamGenerator } from "./team-generator";
import { NumberGenerator } from "./number-generator";
import { LetterGenerator } from "./letter-generator";
import { DiceRoller } from "./dice-roller";
import { CoinFlip } from "./coin-flip";
import { YesNoPicker } from "./yes-no-picker";
import { TruthOrDareGenerator } from "./truth-or-dare-generator";
import { YouTubeCommentPicker } from "./youtube-comment-picker";

/** Server component that renders the interactive tool for a page. Only the chosen tool's client code is loaded. */
export function ToolRenderer({ kind, storageKey, preset, templateSlug, tod }: { kind: ToolKind; storageKey: string; preset?: WheelPreset; templateSlug?: string; tod?: TodContent }) {
  switch (kind) {
    case "wheel":
      return <WheelApp storageKey={storageKey} preset={preset} templateSlug={templateSlug} />;
    case "team":
      return <TeamGenerator />;
    case "number":
      return <NumberGenerator />;
    case "letter":
      return <LetterGenerator />;
    case "dice":
      return <DiceRoller />;
    case "coin":
      return <CoinFlip />;
    case "yesno":
      return <YesNoPicker />;
    case "truthdare":
      return <TruthOrDareGenerator prompts={tod!} />;
    case "youtube":
      return <YouTubeCommentPicker />;
  }
}
