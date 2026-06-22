import { createContext, useContext } from "react";

// Shared "AI evidence" plumbing. Any AI-added field renders an <AiPill source={...} />;
// clicking its "Source" calls `view(turns)` which opens the AI transcription and
// highlights the transcript lines (TRANSCRIPT indices) the AI used to extract that value.
export interface SourceHighlight {
  turns: number[];
  // increments on every Source click so re-clicking the same field re-triggers the scroll/flash
  n: number;
}

export interface SourceApi {
  view: (turns: number[]) => void;
  highlight: SourceHighlight | null;
  clear: () => void;
}

export const SourceContext = createContext<SourceApi | null>(null);
export const useSource = () => useContext(SourceContext);
