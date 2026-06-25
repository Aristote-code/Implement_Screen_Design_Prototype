import { useState } from "react";
import { AlertTriangle, MessageSquareQuote, FileText, CheckCircle2 } from "lucide-react";
import { REVIEW_QUEUE, REVIEW_ACTIONS, type ReviewItem } from "@/data/consultation";

const KIND_LABEL: Record<ReviewItem["flagKind"], string> = {
  allergy: "Allergy",
  dose: "Dose",
  contradiction: "Contradiction",
};

type Resolution = (typeof REVIEW_ACTIONS)[number];

function ReviewCard({ item }: { item: ReviewItem }) {
  const [resolved, setResolved] = useState<Resolution | null>(null);

  return (
    <div className="rounded-[16px] bg-white p-5 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[16px] font-bold text-[#111827]">{item.patient}</p>
          <p className="mt-0.5 text-[12px] text-[#687588]">{item.identifier}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f3c0c0] bg-[#fdecec] px-2.5 py-1 text-[11px] font-bold text-[#b42318]">
          <AlertTriangle className="size-3.5" /> {KIND_LABEL[item.flagKind]} flag
        </span>
      </div>

      <p className="mt-3 text-[14px] font-semibold leading-relaxed text-[#b42318]">{item.flag}</p>

      <div className="mt-3 space-y-2">
        <div className="flex items-start gap-2 rounded-[10px] bg-[#f7f8fa] px-3 py-2.5">
          <MessageSquareQuote className="mt-0.5 size-4 shrink-0 text-[#687588]" />
          <p className="text-[13px] leading-relaxed text-[#111827]">
            <span className="font-semibold text-[#687588]">Heard in consultation · </span>
            {item.transcript}
          </p>
        </div>
        <div className="flex items-start gap-2 rounded-[10px] bg-[#f7f8fa] px-3 py-2.5">
          <FileText className="mt-0.5 size-4 shrink-0 text-[#687588]" />
          <p className="text-[13px] leading-relaxed text-[#111827]">
            <span className="font-semibold text-[#687588]">Extracted · </span>
            {item.extracted}
          </p>
        </div>
      </div>

      {resolved ? (
        <p className="mt-4 inline-flex items-center gap-1.5 rounded-[10px] border border-[#bfe6d4] bg-[#eafaf2] px-3 py-2 text-[13px] font-semibold text-[#1f7a55]">
          <CheckCircle2 className="size-4" /> {resolved === "Dismiss flag" ? "Flag dismissed" : resolved === "Request review" ? "Sent to the treating clinician" : "Escalated to senior review"}
        </p>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {REVIEW_ACTIONS.map((a) => (
            <button
              key={a}
              onClick={() => setResolved(a)}
              className={`rounded-[10px] px-4 py-2 text-[13px] font-bold transition-colors ${
                a === "Escalate"
                  ? "bg-[#e03137] text-white hover:bg-[#c62027]"
                  : a === "Request review"
                    ? "bg-[#2f78ee] text-white hover:bg-[#2a6cd8]"
                    : "border border-[#e9eaec] text-[#111827] hover:bg-[#f7f8fa]"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ReviewQueue() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[28px] font-bold text-[#111827]">Review queue ({REVIEW_QUEUE.length})</h1>
        <p className="mt-1 text-[14px] text-[#687588]">Consultations the AI quality gate flagged for a reviewing clinician.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {REVIEW_QUEUE.map((item, i) => (
          <ReviewCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
