import { useState } from "react";

type Choice = "consent" | "decline";

const OPTIONS: { value: Choice; title: string; desc: string }[] = [
  {
    value: "consent",
    title: "Consent to full AI assistance",
    desc: "Recording, transcription, structured note extraction and clinical advisory suggestions",
  },
  {
    value: "decline",
    title: "Decline AI processing",
    desc: "Manual documentation only. No recording starts. Decline will be logged for audit.",
  },
];

export default function ConsentModal({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: (choice: Choice) => void;
}) {
  const [choice, setChoice] = useState<Choice>("consent");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onCancel}>
      <div
        className="w-full max-w-[560px] rounded-[16px] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.3)] sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[24px] font-bold text-[#111827]">AI Processing Consent</h2>
        <p className="mt-1 text-[14px] text-[#687588]">Patient consent is required before any recording begins</p>

        <p className="mt-5 rounded-[10px] bg-[#fafafa] p-4 text-[14px] leading-relaxed text-[#4b5563]">
          This consultation may be recorded and processed by AI to assist with clinical documentation. The patient has
          the right to decline AI processing and still receive full care. The offer and their response will be logged.
        </p>

        <div className="mt-4 space-y-3">
          {OPTIONS.map((opt) => {
            const active = choice === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setChoice(opt.value)}
                className={`flex w-full items-start gap-3 rounded-[12px] border p-4 text-left transition-colors ${
                  active ? "border-[#2f78ee] bg-[#f7faff]" : "border-[#e9eaec] hover:border-[#cbd5e0]"
                }`}
              >
                <span
                  className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 ${
                    active ? "border-[#2f78ee]" : "border-[#cbd5e0]"
                  }`}
                >
                  {active && <span className="size-2.5 rounded-full bg-[#2f78ee]" />}
                </span>
                <span>
                  <span className="text-[15px] font-semibold text-[#111827]">{opt.title}</span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-[#687588]">{opt.desc}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={onCancel}
            className="rounded-[10px] border border-[#111827] px-6 py-3 text-[14px] font-bold text-[#111827] transition-colors hover:bg-[#fafafa]"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(choice)}
            className="flex-1 rounded-[10px] bg-[#2f78ee] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#2a6cd8]"
          >
            {choice === "decline" ? "Confirm decline" : "Confirm & Start Recording"}
          </button>
        </div>
      </div>
    </div>
  );
}
