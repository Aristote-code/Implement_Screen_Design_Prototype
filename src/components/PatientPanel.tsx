import { useState, useRef, useEffect } from "react";
import { Pencil, Sparkles, Send, Play, Pause } from "lucide-react";
import type { Patient } from "@/data/patients";
import { ALLERGIES, ACTIVE_PROBLEMS, CURRENT_MEDICATION, TRANSCRIPT, PERSONAL_INFO } from "@/data/consultation";
import { useSource } from "@/components/SourceContext";

const TABS = ["Medical Info", "Personal Info", "AI assistant"] as const;
type Tab = (typeof TABS)[number];

function SectionHeader({ label, edit }: { label: string; edit?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px] text-[#687588]">{label}</span>
      {edit && (
        <button className="grid size-6 place-items-center rounded-md bg-[#2f78ee] text-white">
          <Pencil className="size-3" strokeWidth={2.4} />
        </button>
      )}
    </div>
  );
}

function MedicalInfo() {
  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <SectionHeader label="Allergies" edit />
        <p className="text-[15px] font-bold text-[#e03137]">{ALLERGIES}</p>
      </div>
      <div className="space-y-1.5">
        <SectionHeader label="Active problems" edit />
        <ul className="list-disc space-y-1 pl-5">
          {ACTIVE_PROBLEMS.map((p) => (
            <li key={p} className="text-[15px] font-bold text-[#111827]">{p}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-1.5">
        <SectionHeader label="Current medication" />
        <ul className="list-disc space-y-1 pl-5">
          {CURRENT_MEDICATION.map((m) => (
            <li key={m} className="text-[15px] font-bold text-[#111827]">{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="flex flex-col gap-4">
      {PERSONAL_INFO.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-1">
          <p className="text-[12px] font-normal text-[#687588]">{label}</p>
          <p className="text-[14px] font-semibold text-[#111827]">{value}</p>
        </div>
      ))}
    </div>
  );
}

const AUDIO_BARS = [4, 8, 14, 10, 6, 12, 16, 8, 4, 10, 14, 8, 6, 10, 12, 16, 8, 4, 6, 10, 14, 8, 4, 6, 10, 12, 16, 8, 4, 6, 10, 8, 14, 10, 6, 12, 8, 4, 10, 6];
const AUDIO_TOTAL = 227; // 3:47

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(84); // 1:24

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setTime((t) => (t >= AUDIO_TOTAL ? AUDIO_TOTAL : t + 1)), 1000);
    return () => clearInterval(id);
  }, [playing]);

  const pad = (n: number) => String(n).padStart(2, "0");
  const fmt = (s: number) => `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
  const pct = time / AUDIO_TOTAL;

  return (
    <div className="flex items-center gap-3 rounded-[12px] bg-[#0b9487]/10 px-3 py-2.5">
      <button
        onClick={() => setPlaying((p) => !p)}
        className="grid size-8 shrink-0 place-items-center rounded-full bg-[#0b9487] text-white transition-colors hover:bg-[#0a8478]"
      >
        {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5 translate-x-[1px]" />}
      </button>
      <div className="flex flex-1 items-end gap-[2px] overflow-hidden">
        {AUDIO_BARS.map((h, i) => (
          <span
            key={i}
            className={`inline-block w-[3px] shrink-0 rounded-full transition-colors ${
              i / AUDIO_BARS.length <= pct ? "bg-[#0b9487]" : "bg-[#0b9487]/30"
            }`}
            style={{ height: h }}
          />
        ))}
      </div>
      <span className="shrink-0 text-[11px] font-semibold tabular-nums text-[#0b9487]">
        {fmt(time)} / {fmt(AUDIO_TOTAL)}
      </span>
    </div>
  );
}

function Transcription() {
  const ctx = useSource();
  const highlight = ctx?.highlight ?? null;
  const refs = useRef<Record<number, HTMLDivElement | null>>({});

  // On each Source click, scroll the first cited line into view within the panel.
  useEffect(() => {
    if (!highlight || highlight.turns.length === 0) return;
    refs.current[highlight.turns[0]]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [highlight?.n]);

  return (
    <div className="space-y-4">
      {highlight && (
        <div className="flex items-center justify-between gap-2 rounded-[10px] border border-[#5eead4] bg-[#f0fdfa] px-3 py-2">
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#0b9487]">
            <Sparkles className="size-3.5" /> AI source — highlighted below
          </span>
          <button
            onClick={ctx?.clear}
            className="shrink-0 text-[12px] font-semibold text-[#0b9487] underline underline-offset-2 hover:text-[#0a8478]"
          >
            Clear
          </button>
        </div>
      )}
      {/* Formal stacked transcript — every turn on one side, speaker beneath speaker (not chat
          bubbles). A coloured left accent distinguishes clinician from patient. */}
      {TRANSCRIPT.map((line, i) => {
        const isPatient = line.speaker === "Patient";
        const hi = !!highlight?.turns.includes(i);
        return (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`border-l-2 py-1.5 pl-3 transition-all duration-300 ${
              hi
                ? "rounded-r-[8px] border-[#0b9487] bg-[#0b9487]/10"
                : isPatient
                  ? "border-[#0b9487]"
                  : "border-[#2f78ee]"
            }`}
          >
            <span className={`text-[11px] font-bold uppercase tracking-wide ${isPatient ? "text-[#0b9487]" : "text-[#2f78ee]"}`}>
              {line.speaker}
            </span>
            <p className="mt-0.5 text-[14px] leading-relaxed text-[#111827]">{line.text}</p>
          </div>
        );
      })}
      <AudioPlayer />
    </div>
  );
}

type ChatMsg = { role: "user" | "ai"; text: string; turn?: number };

const INITIAL_CHAT: ChatMsg[] = [
  { role: "user", text: "What did the patient say about fever?" },
  {
    role: "ai",
    text: 'The patient specifically denied having a fever. In Patient turn 3, they stated: "No fever. Just wheezing and fast breathing." This is consistent with an asthmatic presentation.',
    turn: 3,
  },
  { role: "user", text: "Is the resp rate value reliable?" },
  {
    role: "ai",
    text: "Yes. The patient reported approximately 50-60 breaths per minute in Patient turn 6. The AI extracted 55 breaths/min as a conservative midpoint.",
    turn: 6,
  },
];

function Chat() {
  const [msgs, setMsgs] = useState<ChatMsg[]>(INITIAL_CHAT);
  const [q, setQ] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  function send() {
    const text = q.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setQ("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          role: "ai",
          text: "Based on the consultation transcript, the AI is analyzing your question. This is a prototype — live AI responses will appear here during an active recording.",
        },
      ]);
    }, 800);
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [msgs]);

  return (
    <div className="space-y-3">
      {msgs.map((m, i) =>
        m.role === "user" ? (
          <div key={i} className="flex justify-end">
            <span className="max-w-[85%] rounded-[20px] border border-[#e9eaec] bg-white px-4 py-2.5 text-[14px] text-[#111827]">
              {m.text}
            </span>
          </div>
        ) : (
          <div key={i} className="space-y-1.5">
            <p className="text-[14px] leading-relaxed text-[#111827]">{m.text}</p>
            {m.turn !== undefined && (
              <span className="inline-block rounded-full border border-[#0b9487] px-2.5 py-0.5 text-[11px] font-semibold text-[#0b9487]">
                Turn {m.turn}
              </span>
            )}
          </div>
        )
      )}
      <div ref={endRef} />
      <div className="flex items-center gap-2 rounded-[12px] border border-[#e9eaec] px-3 py-2.5 focus-within:border-[#0b9487]">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a question about this consultation..."
          className="w-full bg-transparent text-[13px] text-[#111827] outline-none placeholder:text-[#9aa6b6]"
        />
        <button
          onClick={send}
          className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#0b9487] text-white"
        >
          <Send className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

function AiEmpty() {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 text-center">
      <span className="grid size-14 place-items-center rounded-full border border-[#eef0f3] bg-[#fafbfc]">
        <Sparkles className="size-6 text-[#cbd5e0]" />
      </span>
      <p className="max-w-[260px] text-[14px] leading-relaxed text-[#687588]">
        AI processing was declined for this consultation. This has been logged. Please document manually.
      </p>
    </div>
  );
}

function AiAssistant({ aiAvailable, recording = false }: { aiAvailable: boolean; recording?: boolean }) {
  const ctx = useSource();
  // During recording the live transcript is most useful; once recording stops the chat
  // ("ask the AI about this consultation") is front-and-centre so it's clearly discoverable.
  const [sub, setSub] = useState<"transcription" | "chat">(recording ? "transcription" : "chat");

  // A "Source" click always lands on the transcription sub-tab.
  useEffect(() => {
    if (ctx?.highlight) setSub("transcription");
  }, [ctx?.highlight?.n]);

  if (!aiAvailable) return <AiEmpty />;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-1 rounded-[10px] bg-[#f5f6f7] p-1">
        {(["transcription", "chat"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSub(s)}
            className={`rounded-[7px] py-2 text-[13px] font-bold transition-colors ${
              sub === s ? "bg-[#0b9487] text-white" : "text-[#9aa6b6]"
            }`}
          >
            {s === "transcription" ? "AI transcription" : "AI Chat"}
          </button>
        ))}
      </div>
      {sub === "transcription" ? <Transcription /> : <Chat />}
    </div>
  );
}

export default function PatientPanel({
  patient,
  tab,
  onTab,
  aiAvailable = true,
  recording = false,
  className = "",
}: {
  patient: Patient;
  tab: Tab;
  onTab: (t: Tab) => void;
  aiAvailable?: boolean;
  recording?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] ${className}`}
    >
      {/* Profile */}
      <div className="flex flex-col items-center gap-3 pb-6">
        {patient.avatar ? (
          <img src={patient.avatar} alt="" className="size-20 rounded-full object-cover" />
        ) : (
          <span
            className="grid size-20 place-items-center rounded-full text-[24px] font-bold"
            style={{ backgroundColor: patient.initialsBg, color: patient.initialsFg }}
          >
            {patient.initials}
          </span>
        )}
        <h2 className="text-[22px] font-bold text-[#111827]">{patient.name}</h2>
        <span className="rounded-full bg-[#eaf1ff] px-3 py-1 text-[12px] font-semibold text-[#2f78ee]">
          {patient.identifier}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#f1f2f4]">
        {TABS.map((t) => {
          const active = t === tab;
          return (
            <button
              key={t}
              onClick={() => onTab(t)}
              className={`-mb-px whitespace-nowrap border-b-2 pb-3 text-[14px] transition-colors ${
                active
                  ? "border-[#0b9487] font-bold text-[#0b9487]"
                  : "border-transparent font-bold text-[#111827] hover:text-[#0b9487]"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="pt-5">
        {tab === "Medical Info" && <MedicalInfo />}
        {tab === "Personal Info" && <PersonalInfo />}
        {tab === "AI assistant" && <AiAssistant aiAvailable={aiAvailable} recording={recording} />}
      </div>
    </div>
  );
}

export type { Tab as PanelTab };
