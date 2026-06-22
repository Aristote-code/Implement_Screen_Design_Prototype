import { useSource } from "@/components/SourceContext";

// Inline "Ai" pill + Source link — drop next to any AI-added field or row.
// The "Ai" badge is purely a marker (non-interactive). "Source" jumps to the AI
// transcription and highlights the lines the value was extracted from.
// Pass `source` (TRANSCRIPT turn indices) for the default behaviour, or `onSource` to override.
export function AiPill({ source, onSource }: { source?: number[]; onSource?: () => void }) {
  const ctx = useSource();
  const handleSource = onSource ?? (source ? () => ctx?.view(source) : undefined);
  return (
    <div className="flex items-center gap-1.5">
      <span className="rounded border border-[#5eead4] bg-[#f0fdfa] px-1.5 py-0.5 text-[10px] font-bold text-[#0b9487]">
        Ai
      </span>
      {handleSource && (
        <button
          onClick={handleSource}
          className="text-[12px] font-semibold text-[#0b9487] underline underline-offset-2 hover:text-[#0a8478]"
        >
          Source
        </button>
      )}
    </div>
  );
}
