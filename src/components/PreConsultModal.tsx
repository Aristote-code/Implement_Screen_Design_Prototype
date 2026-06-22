import { X } from "lucide-react";
import type { Patient } from "@/data/patients";
import { PRE_CONSULTATION } from "@/data/consultation";

// AI pre-consultation brief, shown the moment a patient file opens — before the
// consultation begins. Mirrors the hand-rolled modal pattern used by ConsentModal /
// SignFinaliseModal (backdrop click + inner stopPropagation to close).
export default function PreConsultModal({
  patient,
  onClose,
}: {
  patient: Patient;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] rounded-[16px] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.3)] animate-in zoom-in-95 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#0b9487] px-1.5 py-0.5 text-[12px] font-bold text-white">Ai</span>
            <h2 className="text-[22px] font-bold text-[#111827]">Pre-consultation summary</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid size-8 shrink-0 place-items-center rounded-lg text-[#687588] transition-colors hover:bg-[#f5f6f7] hover:text-[#111827]"
          >
            <X className="size-5" />
          </button>
        </div>
        <p className="mt-1 text-[13px] text-[#687588]">
          {patient.name} · {patient.identifier} — Advisory only · De-ID ✓
        </p>

        <div className="mt-4 divide-y divide-[#f1f2f4]">
          <div className="space-y-2 py-4 first:pt-0 last:pb-0">
            <p className="text-[13px] font-semibold text-[#687588]">Known conditions</p>
            <ul className="list-disc space-y-1 pl-5 text-[14px] text-[#111827] marker:text-[#cbd5e0]">
              {PRE_CONSULTATION.knownConditions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
            <p className="text-[13px] font-semibold text-[#687588]">Active allergy</p>
            <p className="text-[14px] font-semibold text-[#e03137]">{PRE_CONSULTATION.allergies}</p>
          </div>
          <div className="space-y-1 py-4 first:pt-0 last:pb-0">
            <p className="text-[13px] font-semibold text-[#687588]">Last visit</p>
            <p className="text-[14px] text-[#111827]">
              {PRE_CONSULTATION.lastVisit.date} — {PRE_CONSULTATION.lastVisit.summary}
            </p>
          </div>
          <div className="space-y-2 py-4 first:pt-0 last:pb-0">
            <p className="text-[13px] font-semibold text-[#687588]">Current medications</p>
            <ul className="list-disc space-y-1 pl-5 text-[14px] text-[#111827] marker:text-[#cbd5e0]">
              {PRE_CONSULTATION.currentMeds.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-[10px] bg-[#2f78ee] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#2a6cd8]"
        >
          Start consultation
        </button>
      </div>
    </div>
  );
}
