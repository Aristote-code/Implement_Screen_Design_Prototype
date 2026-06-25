import { useState, type ReactNode } from "react";
import { Sparkles, Check, X, AlertTriangle, CheckCircle2, RotateCcw } from "lucide-react";
import type { AiBasis, AiSuggestion } from "@/data/consultation";

// Reverse a confirmed AI item — returns it to the suggestions list (Sandrine, Jun 25:
// confirming an AI suggestion must be undoable).
export function UndoBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title="Unconfirm"
      className="inline-flex shrink-0 items-center gap-1 rounded-[8px] border border-[#e9eaec] px-2 py-1 text-[12px] font-semibold text-[#687588] transition-colors hover:border-[#2f78ee] hover:text-[#2f78ee]"
    >
      <RotateCcw className="size-3.5" /> Undo
    </button>
  );
}

// Green confirmation that a workflow step is complete (e.g. "vital signs recorded").
export function StepDone({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-[12px] border border-[#bfe6d4] bg-[#eafaf2] px-4 py-2.5 text-[13px] font-semibold text-[#1f7a55]">
      <CheckCircle2 className="size-4 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

// Safety flag (allergy collision / interaction / dose). Surfaced prominently — never blocks.
function WarningNote({ warning }: { warning: NonNullable<AiBasis["warning"]> }) {
  return (
    <div className="mt-2 flex items-start gap-2 rounded-[8px] border border-[#f3c0c0] bg-[#fdecec] px-3 py-2 text-[12px] font-medium leading-relaxed text-[#b42318]">
      <AlertTriangle className="mt-0.5 size-4 shrink-0" />
      <span>
        <span className="font-bold uppercase tracking-wide">{warning.kind} flag · </span>
        {warning.text}
      </span>
    </div>
  );
}

// The "why" behind an AI output. Provenance is stated in plain words (not a link or chip, to
// keep it uncluttered): transcript-backed → "from the consultation"; knowledge-backed → the
// cited guideline. The rationale carries the clinical reasoning.
function Why({ basis }: { basis: AiBasis }) {
  const notes: string[] = [];
  if (basis.source) notes.push("From what was said during the consultation.");
  if (basis.guideline) notes.push(`From clinical guidance — ${basis.guideline}.`);
  return (
    <div className="space-y-1.5 text-[12px] leading-relaxed text-[#687588]">
      {basis.rationale && <p>{basis.rationale}</p>}
      {notes.length > 0 && <p className="font-medium text-[#9aa6b6]">{notes.join(" ")}</p>}
    </div>
  );
}

// Compact provenance marker for a COMMITTED row: an "Ai" badge + a "Why?" disclosure that
// pops the reasoning (and Source/guideline). Turns red when the item carries a safety flag.
export function AiTag({ basis }: { basis: AiBasis }) {
  const [open, setOpen] = useState(false);
  const danger = !!basis.warning;
  return (
    <span className="relative inline-flex items-center gap-1.5 align-middle">
      <span
        className={`rounded border px-1.5 py-0.5 text-[10px] font-bold ${
          danger ? "border-[#f3c0c0] bg-[#fdecec] text-[#b42318]" : "border-[#5eead4] bg-[#f0fdfa] text-[#0b9487]"
        }`}
      >
        Ai
      </span>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`text-[12px] font-semibold underline underline-offset-2 ${
          danger ? "text-[#b42318] hover:text-[#911b16]" : "text-[#0b9487] hover:text-[#0a8478]"
        }`}
      >
        Why?
      </button>
      {open && (
        <>
          <button className="fixed inset-0 z-20 cursor-default" aria-hidden onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-30 mt-1.5 w-[268px] rounded-[12px] border border-[#e9eaec] bg-white p-3 text-left shadow-[0_16px_40px_-8px_rgba(17,24,39,0.22)]">
            <Why basis={basis} />
            {basis.warning && <WarningNote warning={basis.warning} />}
          </div>
        </>
      )}
    </span>
  );
}

// Advisory block (PRD 5.9): AI proposes items, each with its reasoning. The clinician
// Accepts (commits it) or Dismisses. CONTROLLED — the parent section owns the pending list
// (so a confirmed item can be returned here via Undo). Nothing is auto-committed.
export function AiSuggestions({
  heading = "AI suggestions",
  note,
  suggestions,
  acceptLabel = "Add",
  onAccept,
  onDismiss,
}: {
  heading?: string;
  note?: string;
  suggestions: AiSuggestion[];
  acceptLabel?: string;
  onAccept: (s: AiSuggestion) => void;
  onDismiss?: (s: AiSuggestion) => void;
}) {
  if (!suggestions.length) return null;

  return (
    <div className="mb-4 rounded-[14px] border border-[#cdeee9] bg-[#f6fffd] p-4">
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <Sparkles className="size-4 text-[#0b9487]" />
        <span className="text-[13px] font-bold text-[#0b9487]">{heading}</span>
        <span className="rounded-full bg-[#0b9487]/10 px-2 py-0.5 text-[11px] font-semibold text-[#0b9487]">
          Advisory — review before adding
        </span>
      </div>
      {note && <p className="mb-3 mt-1 text-[12px] text-[#687588]">{note}</p>}
      <div className="mt-3 space-y-2.5">
        {suggestions.map((s) => (
          <div
            key={s.id}
            className={`rounded-[10px] border bg-white p-3 ${s.warning ? "border-[#f3c0c0]" : "border-[#e3f1ee]"}`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-[14px] font-semibold text-[#111827]">{s.label}</p>
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  onClick={() => onDismiss?.(s)}
                  title="Dismiss"
                  className="grid size-7 place-items-center rounded-[8px] border border-[#e9eaec] text-[#687588] transition-colors hover:bg-[#f7f8fa]"
                >
                  <X className="size-4" />
                </button>
                <button
                  onClick={() => onAccept(s)}
                  className="inline-flex items-center gap-1 rounded-[8px] bg-[#0b9487] px-2.5 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[#0a8478]"
                >
                  <Check className="size-3.5" /> {acceptLabel}
                </button>
              </div>
            </div>
            <div className="mt-2">
              <Why basis={s} />
            </div>
            {s.warning && <WarningNote warning={s.warning} />}
          </div>
        ))}
      </div>
    </div>
  );
}
