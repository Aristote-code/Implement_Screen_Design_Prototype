import { useState } from "react";
import { Check } from "lucide-react";
import type { Patient } from "@/data/patients";
import { SIGN_FINALISE_FIELDS, QUALITY_GATE } from "@/data/consultation";

const CONFIRMATIONS = [
  "I have reviewed all AI-generated fields and confirm they are clinically accurate.",
  "I take clinical responsibility for this record.",
];

export default function SignFinaliseModal({
  patient,
  onCancel,
  onConfirm,
}: {
  patient: Patient;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const [checked, setChecked] = useState([false, false]);
  const ready = checked.every(Boolean);

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
          <span className="rounded-md border border-[#bfe6d4] bg-[#eafaf2] px-3 py-1.5 text-[12px] font-semibold text-[#2f9d6e]">
            ✓ {QUALITY_GATE}
          </span>
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
            onClick={onConfirm}
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
