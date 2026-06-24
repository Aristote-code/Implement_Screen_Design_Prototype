import { useState } from "react";
import { HeartPulse, Activity, Thermometer, Wind, Scale, ArrowDown, ChevronDown, ChevronRight, Pencil, Check } from "lucide-react";
import { VITALS_LATEST, VITAL_GROUPS, type VitalRow, type AiMode } from "@/data/consultation";

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

// Single-value vitals for this visit's entry form (Figma "Recent vitals" — node 60:27944).
// Blood pressure is handled separately (systolic / diastolic); BMI is computed.
const VISIT_FIELDS: { key: keyof VisitVitals; label: string; ph: string }[] = [
  { key: "pulse", label: "Pulse (Beat/Min)", ph: "72" },
  { key: "temp", label: "Temp (°C)", ph: "36.8" },
  { key: "resp", label: "Resp. Rate (Breath/Min)", ph: "18" },
  { key: "o2", label: "O₂ Sat (%)", ph: "98" },
  { key: "weight", label: "Weight (Kg)", ph: "80" },
  { key: "height", label: "Height (Cm)", ph: "170" },
];

interface VisitVitals {
  sys: string;
  dia: string;
  pulse: string;
  temp: string;
  resp: string;
  o2: string;
  weight: string;
  height: string;
}

const DEFAULTS: VisitVitals = { sys: "120", dia: "80", pulse: "72", temp: "36.8", resp: "18", o2: "98", weight: "80", height: "170" };

const num = (s: string) => s.replace(/[^0-9.]/g, "");

function computeBmi(v: VisitVitals) {
  const w = parseFloat(v.weight);
  const h = parseFloat(v.height) / 100;
  if (!w || !h) return "—";
  const b = w / (h * h);
  return isFinite(b) ? b.toFixed(1) : "—";
}

// This visit's vitals — measured by the nurse, entered/edited inline (pencil → inputs →
// checkmark to save), matching the Figma "Recent vitals" edit pattern.
function VisitVitalsPanel({ recorded, onRecord }: { recorded: boolean; onRecord?: () => void }) {
  const [editing, setEditing] = useState(false);
  const [v, setV] = useState<VisitVitals>(DEFAULTS);
  const set = (key: keyof VisitVitals, raw: string) => setV((p) => ({ ...p, [key]: num(raw) }));
  const bmi = computeBmi(v);

  function save() {
    setEditing(false);
    onRecord?.();
  }

  const inputCls =
    "w-[110px] rounded-[10px] border border-[#e9eaec] px-3 py-2 text-right text-[14px] text-[#111827] outline-none focus:border-[#2f78ee] placeholder:text-[#9aa6b6]";

  return (
    <div className="mt-6 rounded-[14px] border border-[#e9eaec] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[16px] font-bold text-[#111827]">This visit&apos;s vitals</h3>
        {(recorded || editing) &&
          (editing ? (
            <button
              onClick={save}
              title="Save vitals"
              className="inline-flex items-center gap-1.5 rounded-[10px] bg-[#0b9487] px-3 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-[#0a8478]"
            >
              <Check className="size-4" /> Save
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              title="Edit vitals"
              className="grid size-8 place-items-center rounded-[8px] border border-[#e9eaec] text-[#687588] transition-colors hover:border-[#2f78ee] hover:text-[#2f78ee]"
            >
              <Pencil className="size-4" />
            </button>
          ))}
      </div>

      {!recorded && !editing ? (
        <div className="mt-3">
          <p className="text-[13px] text-[#687588]">Not recorded yet for this visit.</p>
          <button
            onClick={() => setEditing(true)}
            className="mt-3 rounded-[10px] bg-[#2f78ee] px-5 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-[#2a6cd8]"
          >
            Record vital signs
          </button>
        </div>
      ) : (
        <div className="mt-4 divide-y divide-[#f1f2f4]">
          {/* Blood pressure — systolic / diastolic */}
          <div className="flex items-center justify-between gap-3 py-2.5">
            <span className="text-[13px] font-medium text-[#687588]">PB (Mm/Hg)</span>
            {editing ? (
              <div className="flex items-center gap-2">
                <input value={v.sys} onChange={(e) => set("sys", e.target.value)} placeholder="Systolic" className="w-[96px] rounded-[10px] border border-[#e9eaec] px-3 py-2 text-center text-[14px] text-[#111827] outline-none focus:border-[#2f78ee] placeholder:text-[#9aa6b6]" />
                <span className="text-[#9aa6b6]">/</span>
                <input value={v.dia} onChange={(e) => set("dia", e.target.value)} placeholder="Diastolic" className="w-[96px] rounded-[10px] border border-[#e9eaec] px-3 py-2 text-center text-[14px] text-[#111827] outline-none focus:border-[#2f78ee] placeholder:text-[#9aa6b6]" />
              </div>
            ) : (
              <span className="text-[14px] font-bold text-[#111827]">{v.sys || "—"}/{v.dia || "—"}</span>
            )}
          </div>

          {VISIT_FIELDS.map((f) => (
            <div key={f.key} className="flex items-center justify-between gap-3 py-2.5">
              <span className="text-[13px] font-medium text-[#687588]">{f.label}</span>
              {editing ? (
                <input value={v[f.key]} onChange={(e) => set(f.key, e.target.value)} placeholder={f.ph} className={inputCls} />
              ) : (
                <span className="text-[14px] font-bold text-[#111827]">{v[f.key] || "—"}</span>
              )}
            </div>
          ))}

          {/* BMI — computed from weight + height (read-only) */}
          <div className="flex items-center justify-between gap-3 py-2.5">
            <span className="text-[13px] font-medium text-[#687588]">BMI</span>
            <span className="text-[14px] font-bold text-[#111827]">
              {bmi}
              <span className="ml-1.5 text-[11px] font-medium text-[#9aa6b6]">auto</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VitalSigns({
  aiMode = "none",
  recorded = false,
  onRecord,
}: {
  aiMode?: AiMode;
  recorded?: boolean;
  onRecord?: () => void;
}) {
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

      {/* Vitals are measured by the nurse — no AI. Recording this visit's vitals is the step
          that unlocks the AI differential. */}
      {aiMode === "suggest" && !recorded && (
        <p className="mt-2 text-[13px] leading-relaxed text-[#687588]">
          Measured at the bedside by the nurse — record this visit&apos;s vital signs to continue.
        </p>
      )}

      {/* Past readings (history). */}
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

      {/* This visit's vitals — editable entry/edit form. */}
      <VisitVitalsPanel recorded={recorded} onRecord={onRecord} />

      <div className="mt-5">
        <button className="rounded-[10px] border border-[#e9eaec] px-5 py-3 text-[14px] font-bold text-[#111827] transition-colors hover:border-[#2f78ee] hover:text-[#2f78ee]">
          Start triage assessment
        </button>
      </div>
    </div>
  );
}
