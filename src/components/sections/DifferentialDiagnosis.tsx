import { useEffect, useState } from "react";
import { Trash2, ArrowRight } from "lucide-react";
import { DIAGNOSIS_OPTIONS, AI_DIAGNOSIS_SUGGESTIONS, type AiBasis, type AiMode, type AiSuggestion } from "@/data/consultation";
import SelectField from "./SelectField";
import { AiSuggestions, AiTag, StepDone } from "./AiSuggestionCard";

interface DiagEntry {
  id: string;
  label: string;
  basis?: AiBasis;
}

export default function DifferentialDiagnosis({
  aiMode = "none",
  unlocked = true,
  resultsReady = false,
  diagnosisConfirmed = false,
  onCountChange,
  onConfirmDiagnosis,
}: {
  aiMode?: AiMode;
  unlocked?: boolean;
  resultsReady?: boolean;
  diagnosisConfirmed?: boolean;
  onCountChange?: (n: number) => void;
  onConfirmDiagnosis?: () => void;
}) {
  const [entries, setEntries] = useState<DiagEntry[]>(() =>
    aiMode === "accepted"
      ? AI_DIAGNOSIS_SUGGESTIONS.map((d) => ({ id: d.id, label: d.label, basis: d }))
      : [],
  );

  // Report the differential count up so the Laboratory section can unlock test ordering.
  useEffect(() => {
    onCountChange?.(entries.length);
  }, [entries.length, onCountChange]);

  function addManual(val: string) {
    setEntries((e) => [...e, { id: `m-${e.length}-${val}`, label: val }]);
  }

  function accept(s: AiSuggestion) {
    setEntries((e) => (e.some((x) => x.id === s.id) ? e : [...e, { id: s.id, label: s.label, basis: s }]));
  }

  function remove(id: string) {
    setEntries((e) => e.filter((x) => x.id !== id));
  }

  const showConfirm = aiMode === "suggest" && resultsReady && entries.length > 0 && !diagnosisConfirmed;
  const confirmed = diagnosisConfirmed || aiMode === "accepted";

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <h2 className="mb-5 text-[20px] font-bold text-[#111827]">Differential Diagnosis</h2>

      {aiMode === "suggest" && unlocked && (
        <AiSuggestions
          heading="AI differential suggestions"
          note="Reasoned from the chief complaint and the vital signs you recorded. Accept to add to the differential."
          suggestions={AI_DIAGNOSIS_SUGGESTIONS}
          onAccept={accept}
        />
      )}

      {entries.length > 0 && (
        <div className="mb-4 space-y-2">
          {entries.map((e) => (
            <div
              key={e.id}
              className="flex items-center justify-between gap-3 rounded-[10px] border border-[#e9eaec] px-4 py-3"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="truncate text-[14px] font-semibold text-[#111827]">{e.label}</span>
                {e.basis && <AiTag basis={e.basis} />}
              </div>
              <button
                onClick={() => remove(e.id)}
                className="shrink-0 text-[#e03137] transition-colors hover:text-[#b91c1c]"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <SelectField options={DIAGNOSIS_OPTIONS} placeholder="Add a diagnosis" onChange={addManual} />

      {showConfirm && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[12px] border border-[#cdeee9] bg-[#f6fffd] px-4 py-3">
          <p className="text-[13px] text-[#687588]">
            Lab results are back. Confirm the working diagnosis to proceed to procedures and prescriptions.
          </p>
          <button
            onClick={onConfirmDiagnosis}
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#0b9487] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#0a8478]"
          >
            Confirm working diagnosis <ArrowRight className="size-4" />
          </button>
        </div>
      )}

      {confirmed && (
        <div className="mt-4">
          <StepDone>Working diagnosis confirmed — treatment can be planned</StepDone>
        </div>
      )}
    </div>
  );
}
