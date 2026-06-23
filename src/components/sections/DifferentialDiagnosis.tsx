import { useState } from "react";
import { Trash2 } from "lucide-react";
import { DIAGNOSIS_OPTIONS, AI_DIAGNOSIS_SUGGESTIONS, type AiBasis, type AiMode, type AiSuggestion } from "@/data/consultation";
import SelectField from "./SelectField";
import { AiSuggestions, AiTag } from "./AiSuggestionCard";

interface DiagEntry {
  id: string;
  label: string;
  basis?: AiBasis;
}

export default function DifferentialDiagnosis({ aiMode = "none" }: { aiMode?: AiMode }) {
  const [entries, setEntries] = useState<DiagEntry[]>(() =>
    aiMode === "accepted"
      ? AI_DIAGNOSIS_SUGGESTIONS.map((d) => ({ id: d.id, label: d.label, basis: d }))
      : [],
  );

  function addManual(val: string) {
    setEntries((e) => [...e, { id: `m-${e.length}-${val}`, label: val }]);
  }

  function accept(s: AiSuggestion) {
    setEntries((e) => (e.some((x) => x.id === s.id) ? e : [...e, { id: s.id, label: s.label, basis: s }]));
  }

  function remove(id: string) {
    setEntries((e) => e.filter((x) => x.id !== id));
  }

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <h2 className="mb-5 text-[20px] font-bold text-[#111827]">Differential Diagnosis</h2>

      {aiMode === "suggest" && (
        <AiSuggestions
          heading="AI differential suggestions"
          note="Reasoned from the chief complaint and the vitals you recorded. Accept to add to the differential."
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
    </div>
  );
}
