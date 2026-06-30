import { useEffect, useState } from "react";
import { Trash2, ArrowRight, Sparkles } from "lucide-react";
import { DIAGNOSIS_OPTIONS, AI_DIAGNOSIS_SUGGESTIONS, AI_DX_REVIEW, type AiBasis, type AiCategory, type AiMode, type AiSuggestion } from "@/data/consultation";
import SelectField from "./SelectField";
import { AiSuggestions, AiTag, CategoryPill, StepDone, UndoBtn } from "./AiSuggestionCard";

interface DiagEntry {
  id: string;
  label: string;
  basis?: AiBasis;
  review?: { category: AiCategory; note: string };
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
  // Pending AI suggestions (controlled) and committed entries are separate so a confirmed
  // item can be un-confirmed back into the suggestions list.
  const [pending, setPending] = useState<AiSuggestion[]>(aiMode === "accepted" ? [] : AI_DIAGNOSIS_SUGGESTIONS);
  const [entries, setEntries] = useState<DiagEntry[]>(() =>
    aiMode === "accepted" ? AI_DIAGNOSIS_SUGGESTIONS.map((d) => ({ id: d.id, label: d.label, basis: d })) : [],
  );

  useEffect(() => {
    onCountChange?.(entries.length);
  }, [entries.length, onCountChange]);

  function accept(s: AiSuggestion) {
    setEntries((e) => (e.some((x) => x.id === s.id) ? e : [...e, { id: s.id, label: s.label, basis: s }]));
    setPending((p) => p.filter((x) => x.id !== s.id));
  }
  function dismiss(s: AiSuggestion) {
    setPending((p) => p.filter((x) => x.id !== s.id));
  }
  function undo(id: string) {
    setEntries((e) => e.filter((x) => x.id !== id));
    const s = AI_DIAGNOSIS_SUGGESTIONS.find((x) => x.id === id);
    if (s) setPending((p) => (p.some((x) => x.id === id) ? p : [s, ...p]));
  }
  function addManual(val: string) {
    // AI reviews the nurse's pick against the presentation; a poor fit is gently flagged.
    const review = AI_DX_REVIEW[val];
    setEntries((e) => [...e, { id: `m-${e.length}-${val}`, label: val, review }]);
  }

  const showConfirm = aiMode === "suggest" && resultsReady && entries.length > 0 && !diagnosisConfirmed;
  const confirmed = diagnosisConfirmed || aiMode === "accepted";

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <h2 className="mb-5 text-[20px] font-bold text-[#111827]">Differential Diagnosis</h2>

      {/* The clinician leads — manual entry sits on top; AI suggestions are advisory, below. */}
      <div className="mb-4">
        <p className="mb-1.5 text-[13px] font-semibold text-[#687588]">Add a diagnosis</p>
        <SelectField options={DIAGNOSIS_OPTIONS} placeholder="Select or type a diagnosis" onChange={addManual} />
      </div>

      {entries.length > 0 && (
        <div className="mb-4 space-y-2">
          {entries.map((e) => (
            <div
              key={e.id}
              className={`rounded-[10px] border px-4 py-3 ${e.review ? "border-[#f3d9b0] bg-[#fffdf8]" : "border-[#e9eaec]"}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <span className="truncate text-[14px] font-semibold text-[#111827]">{e.label}</span>
                  {e.basis && <AiTag basis={e.basis} />}
                  {e.review && <CategoryPill category={e.review.category} />}
                </div>
                {e.basis ? (
                  <UndoBtn onClick={() => undo(e.id)} />
                ) : (
                  <button
                    onClick={() => setEntries((arr) => arr.filter((x) => x.id !== e.id))}
                    className="shrink-0 text-[#e03137] transition-colors hover:text-[#b91c1c]"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
              {e.review && (
                <div className="mt-2 flex items-start gap-2 text-[12px] leading-relaxed text-[#9a6a00]">
                  <Sparkles className="mt-0.5 size-3.5 shrink-0 text-[#c97000]" />
                  <span>
                    <span className="font-bold">AI review · </span>
                    {e.review.note}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {aiMode === "suggest" && unlocked && (
        <AiSuggestions
          heading="AI differential suggestions"
          note="Advisory — reasoned from the chief complaint and the vitals you recorded. Accept to add to your differential above."
          suggestions={pending}
          onAccept={accept}
          onDismiss={dismiss}
        />
      )}

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
