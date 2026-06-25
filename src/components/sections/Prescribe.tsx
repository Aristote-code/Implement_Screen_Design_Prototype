import { useEffect, useState } from "react";
import { Pill, ArrowRight, Printer, Trash2 } from "lucide-react";
import { MEDICINE_OPTIONS, AI_PRESCRIPTION_SUGGESTIONS, type AiBasis, type AiMode, type AiSuggestion } from "@/data/consultation";
import SelectField from "./SelectField";
import { AiSuggestions, AiTag, UndoBtn } from "./AiSuggestionCard";

interface Rx {
  id: string;
  medication: string;
  quantity: string;
  notes: string;
  basis?: AiBasis;
}

export default function Prescribe({
  aiMode = "none",
  unlocked = true,
  onCountChange,
}: {
  aiMode?: AiMode;
  unlocked?: boolean;
  onCountChange?: (n: number) => void;
}) {
  const [medicine, setMedicine] = useState<string>();
  const [quantity, setQuantity] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [pending, setPending] = useState<AiSuggestion[]>(aiMode === "accepted" ? [] : AI_PRESCRIPTION_SUGGESTIONS);
  const [list, setList] = useState<Rx[]>(() =>
    aiMode === "accepted"
      ? AI_PRESCRIPTION_SUGGESTIONS.map((r) => ({ id: r.id, medication: r.label, quantity: "1", notes: "—", basis: r }))
      : [],
  );
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    onCountChange?.(list.length);
  }, [list.length, onCountChange]);

  function reset() {
    setMedicine(undefined);
    setQuantity("");
    setDuration("");
    setNotes("");
  }
  function submit() {
    if (!medicine) return;
    setList((l) => [...l, { id: `m${nextId}`, medication: medicine, quantity: quantity || "1", notes: notes || "—" }]);
    setNextId((n) => n + 1);
    reset();
  }
  function acceptAi(s: AiSuggestion) {
    setList((l) => (l.some((x) => x.id === s.id) ? l : [...l, { id: s.id, medication: s.label, quantity: "1", notes: "—", basis: s }]));
    setPending((p) => p.filter((x) => x.id !== s.id));
  }
  function dismissAi(s: AiSuggestion) {
    setPending((p) => p.filter((x) => x.id !== s.id));
  }
  function undo(id: string) {
    setList((l) => l.filter((x) => x.id !== id));
    const s = AI_PRESCRIPTION_SUGGESTIONS.find((x) => x.id === id);
    if (s) setPending((p) => (p.some((x) => x.id === id) ? p : [s, ...p]));
  }

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <h2 className="mb-5 text-[20px] font-bold text-[#111827]">Prescribe</h2>

      {aiMode === "suggest" && unlocked && (
        <AiSuggestions
          heading="AI medication suggestions"
          note="Based on the confirmed diagnosis. Each is checked against the patient's allergies and current medication. Accept to add to the prescription."
          suggestions={pending}
          acceptLabel="Prescribe"
          onAccept={acceptAi}
          onDismiss={dismissAi}
        />
      )}

      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        {/* Left: medicine + form */}
        <div className="space-y-4">
          <SelectField value={medicine} options={MEDICINE_OPTIONS} placeholder="Select Medicine" onChange={setMedicine} />

          {medicine && (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <label className="text-[13px] text-[#687588]">Quantity</label>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="10"
                  className="mt-1 w-full rounded-[10px] border border-[#e9eaec] px-4 py-3 text-[14px] text-[#111827] outline-none focus:border-[#2f78ee] placeholder:text-[#9aa6b6]"
                />
              </div>
              <div>
                <label className="text-[13px] text-[#687588]">Duration (Days)</label>
                <input
                  value={duration}
                  onChange={(e) => setDuration(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="10"
                  className="mt-1 w-full rounded-[10px] border border-[#e9eaec] px-4 py-3 text-[14px] text-[#111827] outline-none focus:border-[#2f78ee] placeholder:text-[#9aa6b6]"
                />
              </div>
              <div>
                <label className="text-[13px] text-[#687588]">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Lorem ipsum dolor sit amet, consectetuer"
                  className="mt-1 w-full resize-none rounded-[10px] border border-[#e9eaec] px-4 py-3 text-[14px] text-[#111827] outline-none focus:border-[#2f78ee] placeholder:text-[#9aa6b6]"
                />
              </div>
              <div className="flex items-center gap-5">
                <span className="text-[14px] font-bold text-[#111827]">Submit</span>
                <button onClick={submit} className="grid size-9 place-items-center rounded-[10px] bg-[#2f78ee] text-white transition-colors hover:bg-[#2a6cd8]">
                  <ArrowRight className="size-5" />
                </button>
                <span className="text-[14px] font-bold text-[#111827]">Print</span>
                <button className="grid size-9 place-items-center rounded-[10px] bg-[#fe964a] text-white transition-colors hover:bg-[#f0852f]">
                  <Printer className="size-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: prescription list */}
        <div>
          <h3 className="text-[16px] font-bold text-[#2f78ee]">Prescription</h3>
          {list.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <span className="grid size-16 place-items-center rounded-full bg-[#f1f6ff] text-[#2f78ee]">
                <Pill className="size-7" strokeWidth={1.8} />
              </span>
              <p className="text-[14px] text-[#687588]">Opps add some medecines</p>
            </div>
          ) : (
            <div className="mt-3">
              <div className="overflow-x-auto">
                <div className="min-w-[440px]">
                  <div className="grid grid-cols-[1.4fr_0.7fr_1.2fr_auto] gap-3 rounded-t-[10px] bg-[#fafafa] px-4 py-3 text-[12px] font-semibold text-[#687588]">
                    <span>Medication</span>
                    <span>Quantity</span>
                    <span>Notes</span>
                    <span />
                  </div>
                  {list.map((rx) => (
                    <div key={rx.id} className="grid grid-cols-[1.4fr_0.7fr_1.2fr_auto] items-center gap-3 border-b border-[#f1f2f4] px-4 py-3 text-[14px] text-[#111827]">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="truncate font-medium">{rx.medication}</span>
                        {rx.basis && <AiTag basis={rx.basis} />}
                      </div>
                      <span>{rx.quantity}</span>
                      <span className="text-[13px] text-[#687588]">{rx.notes}</span>
                      {rx.basis ? (
                        <UndoBtn onClick={() => undo(rx.id)} />
                      ) : (
                        <button onClick={() => setList((l) => l.filter((x) => x.id !== rx.id))} className="text-[#e03137] transition-colors hover:text-[#b91c1c]">
                          <Trash2 className="size-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[14px] font-bold text-[#111827]">Print</span>
                <button className="grid size-9 place-items-center rounded-[10px] bg-[#fe964a] text-white transition-colors hover:bg-[#f0852f]">
                  <Printer className="size-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
