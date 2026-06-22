import { useState } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { ADMIT_DEPARTMENTS, TRANSFER_HOSPITALS } from "@/data/consultation";
import SelectField from "./SelectField";

type MoveTab = "Admit Patient" | "Transfer Patient";
const TABS: MoveTab[] = ["Admit Patient", "Transfer Patient"];

export default function PatientMovementModal({ initialTab, onClose }: { initialTab: MoveTab; onClose: () => void }) {
  const [tab, setTab] = useState<MoveTab>(initialTab);
  const [value, setValue] = useState<string>();
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState<string | null>(null);

  const isAdmit = tab === "Admit Patient";

  function switchTab(t: MoveTab) {
    setTab(t);
    setValue(undefined);
    setNotes("");
    setDone(null);
  }

  function submit() {
    setDone(isAdmit ? "Patient admitted successfully" : "External transfer created successfully");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="w-full max-w-[620px] rounded-[16px] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.3)] sm:p-7" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-bold text-[#111827]">Patient Movements</h2>
          <button onClick={onClose} className="text-[#687588] hover:text-[#111827]">
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-4 flex gap-8 border-b border-[#f1f2f4]">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className={`-mb-px border-b-2 pb-3 text-[14px] transition-colors ${
                t === tab ? "border-[#2f78ee] font-bold text-[#2f78ee]" : "border-transparent font-medium text-[#111827]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-5">
          <SelectField
            value={value}
            options={isAdmit ? ADMIT_DEPARTMENTS : TRANSFER_HOSPITALS}
            placeholder={isAdmit ? "Select department" : "Select hospital"}
            onChange={setValue}
          />
        </div>

        <div className="mt-5">
          <label className="text-[14px] font-bold text-[#111827]">{isAdmit ? "Admission Notes" : "Transfer Notes"}</label>
          <div className="mt-2 rounded-[12px] border border-[#e9eaec] p-4 focus-within:border-[#2f78ee]">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value.slice(0, 200))}
              rows={2}
              placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean l"
              className="w-full resize-none bg-transparent text-[14px] leading-relaxed text-[#111827] outline-none placeholder:text-[#9aa6b6]"
            />
            <div className="mt-1 text-[12px] text-[#9aa6b6]">{notes.length}/200</div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span className="text-[14px] font-bold text-[#111827]">{isAdmit ? "Admit" : "Transfer"}</span>
          <button onClick={submit} className="grid size-9 place-items-center rounded-[10px] bg-[#2f78ee] text-white transition-colors hover:bg-[#2a6cd8]">
            <ArrowRight className="size-5" />
          </button>
        </div>

        {done && (
          <div className="mt-5 flex items-center justify-between gap-3 rounded-[12px] border border-[#bfe6d4] bg-[#eafaf2] px-4 py-3 animate-in fade-in slide-in-from-bottom-2">
            <span className="flex items-center gap-2 text-[14px] font-semibold text-[#2f9d6e]">
              <CheckCircle2 className="size-5" /> {done}
            </span>
            <button onClick={onClose} className="text-[#2f9d6e] hover:text-[#1f7a55]">
              <X className="size-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
