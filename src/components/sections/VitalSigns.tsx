import { useState } from "react";
import { HeartPulse, Activity, Thermometer, Wind, Scale, ArrowDown, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { VITALS_LATEST, VITAL_GROUPS, VITAL_ADVISORY, type VitalRow } from "@/data/consultation";

const ICONS: Record<VitalRow["key"], typeof HeartPulse> = {
  pb: HeartPulse,
  pulse: Activity,
  temp: Thermometer,
  resp: Wind,
  weight: Scale,
};

const TONE: Record<VitalRow["tone"], string> = {
  green: "bg-[#e7f7ef] text-[#2f9d6e]",
  yellow: "bg-[#fdf6e3] text-[#b58a00]",
  red: "bg-[#fdecec] text-[#e03137]",
  blue: "bg-[#eaf1ff] text-[#2f78ee]",
};

function Row({ row }: { row: VitalRow }) {
  const Icon = ICONS[row.key];
  return (
    <div className="flex items-center gap-3 rounded-[10px] bg-[#f7f8fa] px-4 py-3">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#111827]">
        <Icon className="size-[18px]" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] text-[#687588]">{row.label}</p>
        <p className="text-[14px] font-bold text-[#111827]">{row.value}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold ${TONE[row.tone]}`}>
          <ArrowDown className="size-3" strokeWidth={2.5} /> Decreased
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wide text-[#9aa6b6]">Normal</span>
      </div>
    </div>
  );
}

export default function VitalSigns({ advisory = false }: { advisory?: boolean }) {
  const [openGroup, setOpenGroup] = useState(0);

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#111827]">Vital signs</h2>
        <div className="flex items-center gap-5 text-[14px] font-semibold">
          <button className="text-[#0b9487]">View chart</button>
          <button className="text-[#2f78ee]">Expand all</button>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {VITAL_GROUPS.map((group, i) => {
          const open = openGroup === i;
          return (
            <div key={group}>
              <button
                onClick={() => setOpenGroup(open ? -1 : i)}
                className="flex w-full items-center justify-between rounded-[10px] px-1 py-2 text-left"
              >
                <span className="text-[16px] font-bold text-[#111827]">{group}</span>
                {open ? (
                  <ChevronDown className="size-5 text-[#687588]" />
                ) : (
                  <ChevronRight className="size-5 text-[#687588]" />
                )}
              </button>
              {open && (
                <div className="mt-2 space-y-2">
                  {VITALS_LATEST.map((row, idx) => (
                    <Row key={`${row.key}-${idx}`} row={row} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {advisory && (
        <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#cdeee9] bg-[#f6fffd] px-4 py-3">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-[#0b9487]" />
          <div>
            <span className="text-[12px] font-bold text-[#0b9487]">AI advisory</span>
            <p className="mt-0.5 text-[12px] leading-relaxed text-[#687588]">{VITAL_ADVISORY}</p>
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button className="rounded-[10px] bg-[#2f78ee] px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#2a6cd8]">
          Add vital signs
        </button>
        <button className="rounded-[10px] bg-[#2f78ee] px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#2a6cd8]">
          Start triage assessment
        </button>
      </div>
    </div>
  );
}
