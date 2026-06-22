import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Lightweight dropdown used by the Diagnosis / Procedures / Prescribe sections.
export default function SelectField({
  value,
  options,
  placeholder,
  onChange,
  className = "",
}: {
  value?: string;
  options: string[];
  placeholder: string;
  onChange?: (v: string) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 rounded-[10px] border border-[#e9eaec] px-4 py-3.5 text-[14px] transition-colors hover:bg-[#fafafa]"
      >
        <span className={value ? "font-medium text-[#111827]" : "text-[#687588]"}>{value || placeholder}</span>
        <ChevronDown className={`size-5 shrink-0 text-[#687588] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="absolute z-20 mt-1 max-h-[240px] w-full overflow-auto rounded-[10px] border border-[#e9eaec] bg-white py-1 shadow-[0_12px_32px_rgba(17,24,39,0.12)]">
          {options.map((opt, i) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => {
                  onChange?.(opt);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left text-[14px] hover:bg-[#f0f6ff] ${
                  i === 0 ? "font-medium text-[#2f78ee]" : "text-[#111827]"
                }`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
