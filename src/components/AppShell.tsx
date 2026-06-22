import type { ReactNode } from "react";
import type { ComponentType } from "react";
import {
  LayoutGrid,
  UserPlus,
  Calendar,
  ClipboardList,
  Users,
  FileText,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import SurgeriesIcon from "@/components/icons/SurgeriesIcon";
import { headerAvatar } from "@/data/patients";

// Side menu items mirror the Figma sidebar (node 60:29440), in order.
const NAV: { icon: ComponentType<{ className?: string }>; label: string; active?: boolean }[] = [
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: UserPlus, label: "Consultations", active: true },
  { icon: SurgeriesIcon, label: "Surgeries" },
  { icon: Calendar, label: "Past visits" },
  { icon: ClipboardList, label: "Appointments" },
  { icon: Users, label: "Emergency" },
];

// Collapsed icon-only rail (Figma node 60:16075): 128px wide = 64px icon column +
// 32px padding each side; 56px items; active item is a solid-blue rounded square.
// Hidden on mobile, where the content takes the full width.
function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[128px] shrink-0 flex-col items-center border-r border-[#e9eaec] bg-white px-8 py-6 sm:flex">
      {NAV.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          title={label}
          className={`grid h-[56px] w-16 place-items-center rounded-[10px] transition-colors ${
            active
              ? "bg-[#2f78ee] text-white"
              : "text-[#a0aec0] hover:bg-[#f3f8ff] hover:text-[#2f78ee]"
          }`}
        >
          <Icon className="size-6" />
        </button>
      ))}
    </aside>
  );
}

function TopBar({ onBack }: { onBack?: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-[88px] shrink-0 items-center justify-between gap-4 border-b border-[#f1f2f4] bg-white px-5 lg:px-8">
      <div className="flex items-center gap-4 lg:gap-6">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-[16px] font-bold text-[#111827] transition-colors hover:text-[#2f78ee]"
          >
            <ChevronLeft className="size-5" /> Back
          </button>
        )}
        <div className="flex items-center gap-2.5">
          <FileText className="size-7 text-[#2f78ee]" strokeWidth={2.2} />
          <span className="text-[22px] font-extrabold tracking-tight text-[#111827]">eFiche</span>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-5">
        <button className="flex items-center gap-3 rounded-[12px] border border-[#e9eaec] px-4 py-2.5 text-[14px] font-medium text-[#111827] transition-colors hover:bg-[#fafafa]">
          Nurse
          <ChevronDown className="size-4 text-[#687588]" />
        </button>

        <button className="relative flex size-10 items-center justify-center text-[#687588] transition-colors hover:text-[#111827]">
          <MessageSquare className="size-6" strokeWidth={2} />
          <span className="absolute right-1.5 top-1.5 size-2 rounded-full border border-white bg-[#e03137]" />
        </button>

        <button className="flex items-center gap-1.5">
          <img src={headerAvatar} alt="" className="size-9 rounded-full object-cover" />
          <ChevronDown className="size-4 text-[#687588]" />
        </button>
      </div>
    </header>
  );
}

export default function AppShell({ children, onBack }: { children: ReactNode; onBack?: () => void }) {
  return (
    <div className="flex min-h-screen w-full bg-[#f1f2f4] text-[#111827]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onBack={onBack} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
