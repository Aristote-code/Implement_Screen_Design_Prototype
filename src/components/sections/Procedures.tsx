import { useState } from "react";
import { Search, Plus, Check, Trash2 } from "lucide-react";
import { PROCEDURE_TABS, PROCEDURE_OPTIONS, SERVICE_TABS, PROCEDURE_SERVICES, AI_PROCEDURES, AI_SOURCES } from "@/data/consultation";
import SelectField from "./SelectField";
import { AiPill } from "./AiSuggestionCard";

interface SubmittedItem {
  id: number;
  name: string;
  qty: number;
  ai?: boolean;
}

function Checkbox({ on }: { on: boolean }) {
  return (
    <span className={`grid size-5 shrink-0 place-items-center rounded-[5px] border-2 transition-colors ${on ? "border-[#2f78ee] bg-[#2f78ee]" : "border-[#cbd5e0]"}`}>
      {on && <Check className="size-3 text-white" strokeWidth={3} />}
    </span>
  );
}

export default function Procedures({ aiFilled = false }: { aiFilled?: boolean }) {
  const aiItems: SubmittedItem[] = AI_PROCEDURES.map((p, i) => ({ id: i + 1, name: p.name, qty: 1, ai: true }));
  const [tab, setTab] = useState(aiFilled ? "Submitted Procedures" : PROCEDURE_TABS[0]);
  const [serviceTab, setServiceTab] = useState(SERVICE_TABS[0]);
  const [procedure, setProcedure] = useState<string>();
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [qty, setQty] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<SubmittedItem[]>(() => (aiFilled ? aiItems : []));
  const [nextId, setNextId] = useState(aiFilled ? aiItems.length + 1 : 1);

  const config = PROCEDURE_SERVICES[serviceTab];
  const items = config.items.filter((i) => i.toLowerCase().includes(search.trim().toLowerCase()));

  function toggle(name: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  function add() {
    const toAdd = [...checked];
    if (!toAdd.length) return;
    let id = nextId;
    const additions = toAdd.map((name) => ({
      id: id++,
      name,
      qty: config.quantity ? Math.max(1, parseInt(qty[name] || "1", 10) || 1) : 1,
    }));
    setSubmitted((s) => [...s, ...additions]);
    setNextId(id);
    setChecked(new Set());
    setQty({});
  }

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
      <h2 className="text-[20px] font-bold text-[#111827]">Procedures</h2>

      <div className="mt-4 flex gap-8 border-b border-[#f1f2f4]">
        {PROCEDURE_TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`-mb-px flex items-center gap-2 border-b-2 pb-3 text-[14px] transition-colors ${
              t === tab ? "border-[#2f78ee] font-bold text-[#2f78ee]" : "border-transparent font-medium text-[#111827]"
            }`}
          >
            {t}
            {t === "Submitted Procedures" && submitted.length > 0 && (
              <span className="grid size-5 place-items-center rounded-full bg-[#2f78ee] text-[11px] font-bold text-white">{submitted.length}</span>
            )}
          </button>
        ))}
      </div>

      {tab === "Procedures" ? (
        <>
          <div className="mt-5">
            <SelectField value={procedure} options={PROCEDURE_OPTIONS} placeholder="Select Procedure" onChange={setProcedure} />
          </div>

          <div className="mt-6 flex flex-wrap gap-6 border-b border-[#f1f2f4]">
            {SERVICE_TABS.map((s) => (
              <button
                key={s}
                onClick={() => { setServiceTab(s); setChecked(new Set()); setQty({}); }}
                className={`-mb-px border-b-2 pb-3 text-[14px] transition-colors ${
                  s === serviceTab ? "border-[#2f78ee] font-bold text-[#2f78ee]" : "border-transparent font-medium text-[#111827]"
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
              placeholder="Search service"
              className="w-full bg-transparent text-[14px] text-[#111827] outline-none placeholder:text-[#687588]"
            />
          </div>

          <div className="mt-4 divide-y divide-[#f1f2f4] rounded-[12px] border border-[#f1f2f4]">
            {items.map((name) => {
              const on = checked.has(name);
              return (
                <div key={name} className="flex items-center justify-between gap-3 px-4 py-3.5">
                  <button onClick={() => toggle(name)} className="flex items-center gap-3 text-left">
                    <Checkbox on={on} />
                    <span className="text-[14px] font-semibold text-[#111827]">{name}</span>
                  </button>
                  {config.quantity && (
                    <input
                      value={qty[name] ?? ""}
                      onChange={(e) => setQty((q) => ({ ...q, [name]: e.target.value.replace(/[^0-9]/g, "") }))}
                      placeholder="Quantity"
                      className="w-[120px] rounded-[8px] border border-[#e9eaec] px-3 py-2 text-[14px] text-[#111827] outline-none focus:border-[#2f78ee] placeholder:text-[#9aa6b6]"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-[14px] font-bold text-[#111827]">Add</span>
            <button onClick={add} className="grid size-9 place-items-center rounded-[10px] bg-[#2f78ee] text-white transition-colors hover:bg-[#2a6cd8]">
              <Plus className="size-5" strokeWidth={2.5} />
            </button>
            {checked.size > 0 && <span className="text-[13px] font-medium text-[#687588]">{checked.size} selected</span>}
          </div>
        </>
      ) : (
        <div className="mt-5 space-y-3">
          {submitted.length === 0 ? (
            <p className="py-8 text-center text-[14px] text-[#687588]">No procedures submitted yet.</p>
          ) : (
            submitted.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded-[10px] bg-[#f7f8fa] px-4 py-4">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="text-[14px] text-[#111827]">{item.name} ({item.qty}X)</span>
                  {item.ai && <AiPill source={AI_SOURCES.procedures} />}
                </div>
                <button onClick={() => setSubmitted((s) => s.filter((x) => x.id !== item.id))} className="shrink-0 text-[#e03137] transition-colors hover:text-[#b91c1c]">
                  <Trash2 className="size-5" />
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
