import { useState } from "react";
import { Pill, ArrowRight, Printer, Trash2 } from "lucide-react";
import { MEDICINE_OPTIONS, AI_PRESCRIPTIONS, AI_SOURCES } from "@/data/consultation";
import SelectField from "./SelectField";
import { AiPill } from "./AiSuggestionCard";

interface Rx {
  id: number;
  medication: string;
  quantity: string;
  notes: string;
  ai?: boolean;
}

export default function Prescribe({ aiFilled = false }: { aiFilled?: boolean }) {
  const aiRx: Rx[] = AI_PRESCRIPTIONS.map((r, i) => ({
    id: i + 1,
    medication: r.name,
    quantity: "1",
    notes: "—",
    ai: true,
  }));
  const [medicine, setMedicine] = useState<string>();
  const [quantity, setQuantity] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [list, setList] = useState<Rx[]>(() => (aiFilled ? aiRx : []));
  const [nextId, setNextId] = useState(aiFilled ? aiRx.length + 1 : 1);

  function reset() {
    setMedicine(undefined);
    setQuantity("");
    setDuration("");
    setNotes("");
  }

  function submit() {
    if (!medicine) return;
    setList((l) => [...l, { id: nextId, medication: medicine, quantity: quantity || "1", notes: notes || "—" }]);
    setNextId((n) => n + 1);
    reset();
  }

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <h2 className="mb-5 text-[20px] font-bold text-[#111827]">Prescribe</h2>

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
                <div className="min-w-[420px]">
                  <div className="grid grid-cols-[1.4fr_0.8fr_1.4fr_auto] gap-3 rounded-t-[10px] bg-[#fafafa] px-4 py-3 text-[12px] font-semibold text-[#687588]">
                    <span>Medication</span>
                    <span>Quantity</span>
                    <span>Notes</span>
                    <span />
                  </div>
                  {list.map((rx) => (
                    <div key={rx.id} className="grid grid-cols-[1.4fr_0.8fr_1.4fr_auto] items-center gap-3 border-b border-[#f1f2f4] px-4 py-3 text-[14px] text-[#111827]">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="truncate font-medium">{rx.medication}</span>
                        {rx.ai && <AiPill source={AI_SOURCES.prescriptions} />}
                      </div>
                      <span>{rx.quantity}</span>
                      <span className="text-[13px] text-[#687588]">{rx.notes}</span>
                      <button onClick={() => setList((l) => l.filter((x) => x.id !== rx.id))} className="text-[#e03137] transition-colors hover:text-[#b91c1c]">
                        <Trash2 className="size-5" />
                      </button>
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
