import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FileText,
  Calendar,
  Pencil,
} from "lucide-react";
import { patients, type Patient } from "@/data/patients";

const TABS = ["All pending", "Today", "This Week", "This Month"];

const COLUMNS: { key: string; label: string; sortable?: boolean; align?: "right" }[] = [
  { key: "id", label: "#", sortable: true },
  { key: "patient", label: "Patient", sortable: true },
  { key: "identifier", label: "Identifier", sortable: true },
  { key: "gender", label: "Gender", sortable: true },
  { key: "date", label: "Date", sortable: true },
  { key: "address", label: "Adress", sortable: true },
  { key: "phone", label: "Phone", sortable: true },
  { key: "action", label: "Action", align: "right" },
];

// Shared grid template keeps the header and every row in perfect column alignment.
const GRID = "grid grid-cols-[48px_minmax(190px,1.6fr)_140px_96px_150px_120px_150px_148px] items-center gap-4";

function Avatar({ patient }: { patient: Patient }) {
  if (patient.avatar) {
    return <img src={patient.avatar} alt="" className="size-9 shrink-0 rounded-full object-cover" />;
  }
  return (
    <span
      className="flex size-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
      style={{ backgroundColor: patient.initialsBg, color: patient.initialsFg }}
    >
      {patient.initials}
    </span>
  );
}

function ActionButton({
  color,
  icon: Icon,
  unread,
}: {
  color: string;
  icon: typeof FileText;
  unread?: boolean;
}) {
  return (
    <button
      className="relative grid size-9 place-items-center rounded-[10px] transition-transform hover:scale-105"
      style={{ backgroundColor: color }}
    >
      <Icon className="size-[18px] text-white" strokeWidth={2} />
      {unread && (
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-white bg-[#e03137]" />
      )}
    </button>
  );
}

export default function Consultations({ onSelectPatient }: { onSelectPatient?: (p: Patient) => void }) {
  const [tab, setTab] = useState(TABS[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const rows = patients.filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7 lg:p-8">
      {/* Header + tabs */}
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-[#f1f2f4]">
        <div className="pb-5">
          <h1 className="text-[24px] font-bold leading-tight text-[#111827]">Consultations (7)</h1>
          <p className="mt-1 text-[14px] text-[#687588]">Manage your consultations</p>
        </div>
        <nav className="flex items-center gap-6 sm:gap-8">
          {TABS.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`-mb-px border-b-2 pb-5 text-[14px] transition-colors ${
                  active
                    ? "border-[#2f78ee] font-bold text-[#2f78ee]"
                    : "border-transparent font-medium text-[#111827] hover:text-[#2f78ee]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <button className="flex shrink-0 items-center justify-between gap-3 rounded-[12px] border border-[#e9eaec] px-5 py-4 text-[14px] text-[#111827] transition-colors hover:bg-[#fafafa] sm:w-[320px]">
          <span>
            Visit department: <span className="font-bold text-[#2f78ee]">All</span>
          </span>
          <ChevronDown className="size-5 text-[#687588]" />
        </button>
        <div className="flex flex-1 items-center gap-3 rounded-[12px] border border-[#e9eaec] px-5 py-4 focus-within:border-[#2f78ee]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search patient"
            className="w-full bg-transparent text-[14px] text-[#111827] outline-none placeholder:text-[#687588]"
          />
          <Search className="size-5 shrink-0 text-[#111827]" strokeWidth={2} />
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[1040px]">
          {/* Column header */}
          <div className={`${GRID} rounded-[10px] bg-[#fafafa] px-6 py-3.5`}>
            {COLUMNS.map((col) => (
              <div
                key={col.key}
                className={`flex items-center gap-1 text-[12px] font-semibold text-[#687588] ${
                  col.align === "right" ? "justify-end" : ""
                }`}
              >
                {col.label}
                {col.sortable && <ChevronsUpDown className="size-3.5 text-[#cbd5e0]" />}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectPatient?.(p)}
              className="group cursor-pointer border-b border-[#f1f2f4] transition-colors hover:bg-[#fafbfc]"
            >
              <div className={`${GRID} px-6 py-3`} style={{ minHeight: 64 }}>
                <div className="text-[14px] text-[#111827]">{p.id}</div>

                <div className="flex items-center gap-3">
                  <Avatar patient={p} />
                  <span className="truncate text-[14px] font-medium text-[#111827]">{p.name}</span>
                </div>

                <div className="text-[14px] text-[#111827]">{p.identifier}</div>
                <div className="text-[14px] text-[#111827]">{p.gender}</div>

                <div className="text-[14px] leading-[1.4] text-[#111827]">
                  <div>{p.date}</div>
                  <div>{p.time}</div>
                </div>

                <div className="text-[14px] text-[#111827]">{p.address}</div>
                <div className="text-[14px] text-[#111827]">{p.phone}</div>

                <div className="flex items-center justify-end gap-2">
                  <ActionButton color="#FFD023" icon={FileText} unread={p.unread} />
                  <ActionButton color="#FE964A" icon={Calendar} />
                  <ActionButton color="#2F78EE" icon={Pencil} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((n) => Math.max(1, n - 1))}
            className="grid size-9 place-items-center rounded-[10px] border border-[#e9eaec] text-[#687588] transition-colors hover:bg-[#fafafa]"
          >
            <ChevronLeft className="size-4" />
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`grid size-9 place-items-center rounded-[10px] text-[14px] transition-colors ${
                page === n ? "bg-[#f1f2f4] font-bold text-[#111827]" : "text-[#687588] hover:bg-[#fafafa]"
              }`}
            >
              {n}
            </button>
          ))}
          <span className="px-1 text-[14px] text-[#687588]">…</span>
          <button
            onClick={() => setPage(10)}
            className={`grid size-9 place-items-center rounded-[10px] text-[14px] transition-colors ${
              page === 10 ? "bg-[#f1f2f4] font-bold text-[#111827]" : "text-[#687588] hover:bg-[#fafafa]"
            }`}
          >
            10
          </button>
          <button
            onClick={() => setPage((n) => Math.min(10, n + 1))}
            className="grid size-9 place-items-center rounded-[10px] border border-[#e9eaec] text-[#687588] transition-colors hover:bg-[#fafafa]"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[14px] text-[#687588]">Showing 1 to 8 of 50 entries</span>
          <button className="flex items-center gap-2 rounded-[10px] border border-[#e9eaec] px-3 py-2 text-[14px] text-[#111827] transition-colors hover:bg-[#fafafa]">
            Show 8
            <ChevronUp className="size-4 text-[#687588]" />
          </button>
        </div>
      </div>
    </div>
  );
}
