import { useEffect, useState } from "react";
import { Search, Plus, ArrowRight, CheckCircle2, X } from "lucide-react";
import {
  LAB_CATEGORIES,
  LAB_SAMPLES,
  LAB_CATALOG,
  LAB_RESULTS,
  RADIOLOGY_TABS,
  RADIOLOGY_GROUPS,
  RADIOLOGY_RESULTS,
  AUDIOLOGY_TABS,
  AUDIOLOGY_TESTS,
  AUDIOLOGY_RESULTS,
  type LabResult,
} from "@/data/consultation";

type Category = "Laboratory" | "Radiology" | "Audiology";

const MODE_TABS: Record<Category, [string, string]> = {
  Laboratory: ["Lab Order", "Lab Result"],
  Radiology: [RADIOLOGY_TABS[0], RADIOLOGY_TABS[1]],
  Audiology: [AUDIOLOGY_TABS[0], AUDIOLOGY_TABS[1]],
};

const RESULT_BY: Record<Category, string> = {
  Laboratory: "Lab results are added by lab technician",
  Radiology: "Results are added by a Radiologist",
  Audiology: "Results are added by an Audiologist",
};

function Radio({ on }: { on: boolean }) {
  return (
    <span className={`grid size-5 shrink-0 place-items-center rounded-full border-2 ${on ? "border-[#2f78ee]" : "border-[#cbd5e0]"}`}>
      {on && <span className="size-2.5 rounded-full bg-[#2f78ee]" />}
    </span>
  );
}

function SelectableCard({ label, on, onToggle }: { label: string; on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center justify-between gap-2 rounded-[12px] border px-4 py-4 text-left transition-colors ${
        on ? "border-[#2f78ee] bg-[#f7faff]" : "border-[#e9eaec] hover:border-[#cbd5e0]"
      }`}
    >
      <span className="text-[13px] font-medium text-[#111827]">{label}</span>
      <Radio on={on} />
    </button>
  );
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="mt-6 flex items-center justify-between gap-3 rounded-[12px] border border-[#bfe6d4] bg-[#eafaf2] px-4 py-3 animate-in fade-in slide-in-from-bottom-2">
      <span className="flex items-center gap-2 text-[14px] font-semibold text-[#2f9d6e]">
        <CheckCircle2 className="size-5" /> {message}
      </span>
      <button onClick={onClose} className="text-[#2f9d6e] hover:text-[#1f7a55]">
        <X className="size-4" />
      </button>
    </div>
  );
}

const STATUS: Record<LabResult["status"], { label: string; cls: string }> = {
  within: { label: "Within range", cls: "text-[#2f9d6e]" },
  below: { label: "Below normal range", cls: "text-[#e03137]" },
  high: { label: "Not in normal range", cls: "text-[#e03137]" },
};

function LabResultTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-3 border-b border-[#f1f2f4] px-2 pb-3 text-[12px] font-semibold text-[#687588]">
          <span>Test</span>
          <span>Normal range (lower - upper)</span>
          <span>Result</span>
          <span>Comment</span>
        </div>
        {LAB_RESULTS.map((r, i) => (
          <div key={i} className="grid grid-cols-[1.4fr_1fr_1fr_1.4fr] items-center gap-3 border-b border-[#f1f2f4] px-2 py-3 text-[14px] text-[#111827]">
            <span className="font-medium">{r.test}</span>
            <span className="text-[#687588]">{r.range}</span>
            <span>
              <span className="font-bold">{r.result}</span>
              <span className={`mt-0.5 flex items-center gap-1 text-[11px] font-semibold ${STATUS[r.status].cls}`}>
                <span className="size-1.5 rounded-full bg-current" /> {STATUS[r.status].label}
              </span>
            </span>
            <span className="text-[13px] text-[#687588]">{r.comment}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ViewResultTable({ rows, commentLabel }: { rows: { test: string; comment: string }[]; commentLabel: string }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-[1fr_0.8fr_2.2fr] gap-3 border-b border-[#f1f2f4] px-2 pb-3 text-[12px] font-semibold text-[#687588]">
          <span>Test</span>
          <span>Result</span>
          <span>{commentLabel}</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_0.8fr_2.2fr] items-start gap-3 border-b border-[#f1f2f4] px-2 py-3 text-[14px]">
            <span className="font-medium text-[#111827]">{r.test}</span>
            <button className="flex items-center gap-1 text-[14px] font-semibold text-[#2f78ee]">
              View <ArrowRight className="size-4" />
            </button>
            <span className="text-[13px] leading-relaxed text-[#687588]">{r.comment}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Laboratory() {
  const [category, setCategory] = useState<Category>("Laboratory");
  const [mode, setMode] = useState<"request" | "result">("request");
  const [sample, setSample] = useState(LAB_SAMPLES[0]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [urgent, setUrgent] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const toggle = (key: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  function switchCategory(c: Category) {
    setCategory(c);
    setMode("request");
    setSelected(new Set());
    setUrgent(false);
    setToast(false);
  }

  function submit() {
    if (!selected.size) return;
    setToast(true);
    setSelected(new Set());
    setUrgent(false);
  }

  const labTests = LAB_CATALOG[sample].tests.filter((t) => t.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      {/* Category tabs */}
      <div className="flex flex-wrap items-center gap-8">
        {(LAB_CATEGORIES as Category[]).map((c) => (
          <button
            key={c}
            onClick={() => switchCategory(c)}
            className={`text-[18px] font-bold transition-colors ${c === category ? "text-[#2f78ee]" : "text-[#111827] hover:text-[#2f78ee]"}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Mode tabs */}
      <div className="mt-4 flex gap-8 border-b border-[#f1f2f4]">
        {MODE_TABS[category].map((label, i) => {
          const active = (i === 0) === (mode === "request");
          return (
            <button
              key={label}
              onClick={() => setMode(i === 0 ? "request" : "result")}
              className={`-mb-px border-b-2 pb-3 text-[14px] transition-colors ${
                active ? "border-[#2f78ee] font-bold text-[#2f78ee]" : "border-transparent font-medium text-[#111827]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ---------- REQUEST ---------- */}
      {mode === "request" && (
        <>
          {category === "Laboratory" && (
            <>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-b border-[#f1f2f4]">
                {LAB_SAMPLES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSample(s)}
                    className={`-mb-px border-b-2 pb-3 text-[14px] transition-colors ${
                      s === sample ? "border-[#2f78ee] font-bold text-[#2f78ee]" : "border-transparent font-medium text-[#687588] hover:text-[#111827]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-[12px] bg-[#f7f8fa] px-4 py-3.5">
                <Search className="size-5 shrink-0 text-[#687588]" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search test or panel"
                  className="w-full bg-transparent text-[14px] text-[#111827] outline-none placeholder:text-[#687588]"
                />
              </div>

              <h3 className="mt-6 text-[16px] font-bold text-[#2f78ee]">Panels</h3>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {LAB_CATALOG[sample].panels.map((p) => (
                  <SelectableCard key={p} label={p} on={selected.has(`panel:${p}`)} onToggle={() => toggle(`panel:${p}`)} />
                ))}
              </div>

              <h3 className="mt-6 text-[16px] font-bold text-[#2f78ee]">Tests</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
                {labTests.map((t, i) => (
                  <SelectableCard key={`${t}-${i}`} label={t} on={selected.has(`${t}-${i}`)} onToggle={() => toggle(`${t}-${i}`)} />
                ))}
              </div>
            </>
          )}

          {category === "Radiology" &&
            Object.entries(RADIOLOGY_GROUPS).map(([group, items]) => (
              <div key={group}>
                <h3 className="mt-6 text-[16px] font-bold text-[#2f78ee]">{group}</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((t) => (
                    <SelectableCard key={t} label={t} on={selected.has(`${group}:${t}`)} onToggle={() => toggle(`${group}:${t}`)} />
                  ))}
                </div>
              </div>
            ))}

          {category === "Audiology" && (
            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
              {AUDIOLOGY_TESTS.map((t) => (
                <SelectableCard key={t} label={t} on={selected.has(`aud:${t}`)} onToggle={() => toggle(`aud:${t}`)} />
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-6 flex items-center gap-5">
            <button onClick={() => setUrgent((u) => !u)} className="flex items-center gap-2 text-[14px] font-medium text-[#111827]">
              <span className={`grid size-5 place-items-center rounded-[5px] border-2 ${urgent ? "border-[#ef4444] bg-[#ef4444]" : "border-[#cbd5e0]"}`}>
                {urgent && <span className="size-2 rounded-[2px] bg-white" />}
              </span>
              Mark test(s) as urgent
            </button>
            <button onClick={submit} className="text-[14px] font-bold text-[#111827]">
              Submit
            </button>
            <button onClick={submit} className="grid size-9 place-items-center rounded-[10px] bg-[#2f78ee] text-white transition-colors hover:bg-[#2a6cd8]">
              <Plus className="size-5" strokeWidth={2.5} />
            </button>
            {selected.size > 0 && <span className="text-[13px] font-medium text-[#687588]">{selected.size} selected</span>}
          </div>

          {toast && <Toast message={`${category === "Laboratory" ? "Lab test" : category === "Radiology" ? "Radiology request" : "Audiology request"} submitted successfully`} onClose={() => setToast(false)} />}
        </>
      )}

      {/* ---------- RESULT ---------- */}
      {mode === "result" && (
        <>
          <div className="mt-5 flex items-center gap-2 rounded-[10px] border border-[#bfe6d4] bg-[#eafaf2] px-4 py-3">
            <CheckCircle2 className="size-5 shrink-0 text-[#2f9d6e]" />
            <span className="text-[14px] font-medium text-[#2f9d6e]">{RESULT_BY[category]}</span>
          </div>

          {category === "Laboratory" && <LabResultTable />}

          {category === "Radiology" &&
            Object.entries(RADIOLOGY_RESULTS).map(([group, rows]) => (
              <div key={group}>
                <h3 className="mt-6 text-[16px] font-bold text-[#2f78ee]">{group}</h3>
                <ViewResultTable rows={rows} commentLabel="Radiologist Comment" />
              </div>
            ))}

          {category === "Audiology" && <ViewResultTable rows={AUDIOLOGY_RESULTS} commentLabel="Audiologist Comment" />}
        </>
      )}
    </div>
  );
}
