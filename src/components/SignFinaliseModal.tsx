import { useState } from "react";
import { Check, AlertTriangle } from "lucide-react";
import type { Patient } from "@/data/patients";
import { SIGN_FINALISE_FIELDS, QUALITY_GATE } from "@/data/consultation";
import type { SafetyFlag } from "@/components/sections/Prescribe";

const CONFIRMATIONS = [
  "I have reviewed all AI-generated fields and confirm they are clinically accurate.",
  "I take clinical responsibility for this record.",
];

type FlagState = "open" | "corrected" | "justified";

export default function SignFinaliseModal({
  patient,
  flags = [],
  onCancel,
  onConfirm,
}: {
  patient: Patient;
  flags?: SafetyFlag[];
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const [checked, setChecked] = useState([false, false]);
  // Journey C: the quality gate flags a safety concern; the clinician must correct it or
  // confirm with a justification before the gate clears and the record can be signed.
  const [flagState, setFlagState] = useState<FlagState[]>(() => flags.map(() => "open"));
  const [justifyOpen, setJustifyOpen] = useState<number | null>(null);
  const [justifyText, setJustifyText] = useState<Record<number, string>>({});

  const allFlagsResolved = flagState.every((s) => s !== "open");
  const ready = checked.every(Boolean) && allFlagsResolved;

  function resolve(i: number, state: FlagState) {
    setFlagState((arr) => arr.map((s, idx) => (idx === i ? state : s)));
    setJustifyOpen(null);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onCancel}>
      <div
        className="max-h-[90vh] w-full max-w-[600px] overflow-y-auto rounded-[16px] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.3)] sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[24px] font-bold text-[#111827]">Sign &amp; Finalise Record</h2>
        <p className="mt-1 text-[14px] text-[#687588]">This action cannot be undone without a formal correction note</p>

        <p className="mt-5 text-[14px] text-[#687588]">
          Patient: <span className="font-bold text-[#111827]">{patient.name} — {patient.identifier}</span>
        </p>

        {/* Journey C — safety flags raised by the quality gate */}
        {flags.length > 0 && (
          <div className="mt-5 space-y-2">
            <p className="text-[13px] font-semibold text-[#b42318]">Safety {flags.length === 1 ? "flag" : "flags"} — resolve before signing</p>
            {flags.map((f, i) => (
              <div key={i} className="rounded-[12px] border border-[#f3c0c0] bg-[#fdecec] p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-[#b42318]" />
                  <div className="min-w-0">
                    <p className="text-[14px] font-bold text-[#b42318]">{f.label}</p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-[#9a3a34]">{f.text}</p>
                  </div>
                </div>

                {flagState[i] === "open" && (
                  <div className="mt-3">
                    {justifyOpen === i ? (
                      <div className="space-y-2">
                        <textarea
                          value={justifyText[i] ?? ""}
                          onChange={(e) => setJustifyText((t) => ({ ...t, [i]: e.target.value }))}
                          rows={2}
                          placeholder="Justification (logged) — e.g. confirmed no true penicillin allergy with patient…"
                          className="w-full resize-none rounded-[8px] border border-[#f3c0c0] bg-white px-3 py-2 text-[13px] text-[#111827] outline-none focus:border-[#b42318] placeholder:text-[#c08a86]"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => (justifyText[i] || "").trim() && resolve(i, "justified")}
                            disabled={!(justifyText[i] || "").trim()}
                            className={`rounded-[8px] px-3 py-1.5 text-[12px] font-bold text-white ${
                              (justifyText[i] || "").trim() ? "bg-[#b42318] hover:bg-[#911b16]" : "cursor-not-allowed bg-[#b42318]/40"
                            }`}
                          >
                            Save justification
                          </button>
                          <button onClick={() => setJustifyOpen(null)} className="rounded-[8px] border border-[#e9eaec] px-3 py-1.5 text-[12px] font-semibold text-[#687588]">
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <button onClick={() => resolve(i, "corrected")} className="rounded-[8px] bg-[#2f78ee] px-3 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[#2a6cd8]">
                          Correct — remove from prescription
                        </button>
                        <button onClick={() => setJustifyOpen(i)} className="rounded-[8px] border border-[#b42318] px-3 py-1.5 text-[12px] font-bold text-[#b42318] transition-colors hover:bg-[#fdecec]">
                          Confirm with justification
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {flagState[i] === "corrected" && (
                  <p className="mt-2 flex items-center gap-1.5 text-[12px] font-semibold text-[#1f7a55]">
                    <Check className="size-3.5" strokeWidth={3} /> Corrected — removed from the prescription
                  </p>
                )}
                {flagState[i] === "justified" && (
                  <p className="mt-2 text-[12px] font-semibold text-[#9a6a00]">
                    Confirmed with justification: <span className="font-normal italic">{justifyText[i]}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-5">
          <p className="text-[13px] font-semibold text-[#687588]">AI-generated fields reviewed</p>
          <div className="mt-2 divide-y divide-[#f1f2f4]">
            {SIGN_FINALISE_FIELDS.map((f) => (
              <div key={f.label} className="flex items-center justify-between py-3">
                <span className="flex items-center gap-2">
                  <span className="rounded bg-[#0b9487] px-1.5 py-0.5 text-[10px] font-bold text-white">AI</span>
                  <span className="text-[14px] font-medium text-[#111827]">{f.label}</span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[14px] font-semibold text-[#111827]">{f.status}</span>
                  <Check className="size-4 text-[#55c790]" strokeWidth={3} />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#f1f2f4] pt-4">
          <span className="text-[13px] font-semibold text-[#687588]">Quality gate</span>
          {flags.length > 0 && !allFlagsResolved ? (
            <span className="rounded-md border border-[#f3c0c0] bg-[#fdecec] px-3 py-1.5 text-[12px] font-semibold text-[#b42318]">
              Needs review — {flagState.filter((s) => s === "open").length} safety {flagState.filter((s) => s === "open").length === 1 ? "flag" : "flags"}
            </span>
          ) : (
            <span className="rounded-md border border-[#bfe6d4] bg-[#eafaf2] px-3 py-1.5 text-[12px] font-semibold text-[#2f9d6e]">
              ✓ {QUALITY_GATE}
            </span>
          )}
        </div>

        <div className="mt-5 space-y-3 border-t border-[#f1f2f4] pt-5">
          {CONFIRMATIONS.map((label, i) => (
            <button
              key={i}
              onClick={() => setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)))}
              className="flex w-full items-start gap-3 text-left"
            >
              <span
                className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-[5px] border-2 transition-colors ${
                  checked[i] ? "border-[#2f78ee] bg-[#2f78ee]" : "border-[#cbd5e0]"
                }`}
              >
                {checked[i] && <Check className="size-3 text-white" strokeWidth={3} />}
              </span>
              <span className="text-[14px] text-[#111827]">{label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={onCancel}
            className="rounded-[10px] border border-[#111827] px-6 py-3 text-[14px] font-bold text-[#111827] transition-colors hover:bg-[#fafafa]"
          >
            Cancel
          </button>
          <button
            onClick={() => ready && onConfirm()}
            disabled={!ready}
            className={`flex-1 rounded-[10px] px-6 py-3 text-[14px] font-bold text-white transition-colors ${
              ready ? "bg-[#2f78ee] hover:bg-[#2a6cd8]" : "cursor-not-allowed bg-[#2f78ee]/50"
            }`}
          >
            Sign &amp; Finalise
          </button>
        </div>
      </div>
    </div>
  );
}
