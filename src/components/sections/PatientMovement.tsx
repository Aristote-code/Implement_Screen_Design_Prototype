import { useState } from "react";
import { Scan, Check, Plus, Shuffle, X } from "lucide-react";
import type { Patient } from "@/data/patients";
import { AI_COMPLAINT, DIAGNOSIS_OPTIONS } from "@/data/consultation";
import PatientMovementModal from "./PatientMovementModal";

const ACTIONS = [
  { key: "preview", label: "Preview", icon: Scan },
  { key: "complete", label: "Complete visit", icon: Check },
  { key: "admit", label: "Admit Patient", icon: Plus },
  { key: "transfer", label: "Transfer Patient", icon: Shuffle },
] as const;

function PreviewModal({ patient, onClose }: { patient: Patient; onClose: () => void }) {
  const rows: [string, string][] = [
    ["Patient", `${patient.name} — ${patient.identifier}`],
    ["Chief complaint", AI_COMPLAINT],
    ["Diagnosis", DIAGNOSIS_OPTIONS[0]],
    ["Vitals", "PB 110/30 · Pulse 60 · Temp 39°C · Resp 60"],
    ["Status", "Ready to sign & finalise"],
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="w-full max-w-[560px] rounded-[16px] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.3)] sm:p-7" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-bold text-[#111827]">Visit Preview</h2>
          <button onClick={onClose} className="text-[#687588] hover:text-[#111827]">
            <X className="size-5" />
          </button>
        </div>
        <div className="mt-5 divide-y divide-[#f1f2f4]">
          {rows.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <span className="shrink-0 text-[13px] font-semibold text-[#687588] sm:w-[140px]">{k}</span>
              <span className="text-[14px] text-[#111827] sm:text-right">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PatientMovement({
  patient,
  onCompleteVisit,
  reviewedCount = 0,
  totalSteps = 7,
}: {
  patient: Patient;
  onCompleteVisit: () => void;
  reviewedCount?: number;
  totalSteps?: number;
}) {
  const [open, setOpen] = useState<null | "Admit Patient" | "Transfer Patient" | "preview">(null);
  const allReviewed = reviewedCount >= totalSteps;

  function handle(key: (typeof ACTIONS)[number]["key"]) {
    if (key === "complete") { if (allReviewed) onCompleteVisit(); }
    else if (key === "admit") setOpen("Admit Patient");
    else if (key === "transfer") setOpen("Transfer Patient");
    else setOpen("preview");
  }

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[20px] font-bold text-[#111827]">Patient Movement</h2>
        {!allReviewed && (
          <span className="text-[13px] text-[#687588]">
            {reviewedCount} of {totalSteps} sections reviewed — visit each step tab to unlock sign-off
          </span>
        )}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ACTIONS.map(({ key, label, icon: Icon }) => {
          const isComplete = key === "complete";
          const disabled = isComplete && !allReviewed;
          return (
            <button
              key={key}
              onClick={() => handle(key)}
              disabled={disabled}
              title={disabled ? `Review all ${totalSteps} sections before signing off` : undefined}
              className={`flex items-center gap-3 rounded-[12px] border px-4 py-3.5 text-left transition-colors ${
                disabled
                  ? "cursor-not-allowed border-[#e9eaec] opacity-40"
                  : "border-[#e9eaec] hover:border-[#2f78ee] hover:bg-[#f7faff]"
              }`}
            >
              <span className={`grid size-9 shrink-0 place-items-center rounded-[10px] ${disabled ? "bg-[#f3f4f6] text-[#9aa6b6]" : "bg-[#eaf1ff] text-[#2f78ee]"}`}>
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <span className="text-[14px] font-semibold text-[#111827]">{label}</span>
            </button>
          );
        })}
      </div>

      {(open === "Admit Patient" || open === "Transfer Patient") && (
        <PatientMovementModal initialTab={open} onClose={() => setOpen(null)} />
      )}
      {open === "preview" && <PreviewModal patient={patient} onClose={() => setOpen(null)} />}
    </div>
  );
}
