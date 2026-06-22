import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Mic, CheckCircle2, Sparkles, Pencil } from "lucide-react";
import type { Patient } from "@/data/patients";
import {
  CONSULTATION_STEPS,
  HISTORY_ENTRIES,
  PLACEHOLDER_COMPLAINT,
  AI_COMPLAINT,
  AI_EXTRACTED_SUMMARY,
  AI_SOURCES,
} from "@/data/consultation";
import StepTracker from "@/components/StepTracker";
import PatientPanel, { type PanelTab } from "@/components/PatientPanel";
import { AiPill } from "@/components/sections/AiSuggestionCard";
import { SourceContext, type SourceApi, type SourceHighlight } from "@/components/SourceContext";
import VitalSigns from "@/components/sections/VitalSigns";
import DifferentialDiagnosis from "@/components/sections/DifferentialDiagnosis";
import Laboratory from "@/components/sections/Laboratory";
import Procedures from "@/components/sections/Procedures";
import Prescribe from "@/components/sections/Prescribe";
import PatientMovement from "@/components/sections/PatientMovement";
import historyAvatar from "@/assets/avatars/man3.png";

export type PatientFileMode = "idle" | "recording" | "warning" | "declined" | "finalised";

function RecordingTimer() {
  const [seconds, setSeconds] = useState(154);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const text = `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`;
  return <p className="text-[16px] font-bold tabular-nums text-[#991b1b]">{text}</p>;
}

function Banner({ mode, onStart, onStop }: { mode: PatientFileMode; onStart: () => void; onStop: () => void }) {
  if (mode === "idle")
    return (
      <div className="flex items-center justify-between gap-3 rounded-[10px] bg-[#f1fefa] px-5 py-2 shadow-[0_5px_15px_0_rgba(0,0,0,0.05)]">
        <span className="min-w-0 text-[14px] font-bold text-[#111827]">
          Start AI recording — transcript will be live in the right panel
        </span>
        <button
          onClick={onStart}
          className="flex shrink-0 items-center gap-2 rounded-[6px] bg-[#0b9487] px-3 py-[5px] text-[16px] font-bold text-white transition-colors hover:bg-[#0a8478]"
        >
          <Mic className="size-[18px]" /> Start Recording
        </button>
      </div>
    );
  if (mode === "recording")
    return (
      <div className="flex items-center justify-between gap-3 rounded-[10px] bg-[#fee2e2] px-5 py-2 shadow-[0_5px_15px_0_rgba(0,0,0,0.05)]">
        <span className="min-w-0 text-[14px] font-medium text-[#111827]">
          Recording in progress — AI transcript is being generated in the right panel
        </span>
        <div className="flex shrink-0 items-center gap-[10px]">
          <div className="flex items-center gap-4">
            <span className="relative inline-flex size-3 items-center justify-center">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#ef4444] opacity-60" />
              <span className="relative inline-flex size-3 rounded-full bg-[#ef4444]" />
            </span>
            <RecordingTimer />
          </div>
          <button
            onClick={onStop}
            className="rounded-[6px] bg-[#ef4444] px-3 py-[5px] text-[16px] font-bold text-white transition-colors hover:bg-[#dc2626]"
          >
            Stop Recording
          </button>
        </div>
      </div>
    );
  if (mode === "warning")
    return (
      <div className="flex items-center justify-between gap-4 rounded-[14px] border border-[#86efac] bg-[#f0fdf4] px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="size-4 shrink-0 text-[#16a34a]" />
          <span className="text-[14px] font-semibold text-[#16a34a]">
            Quality gate: Complete — 8 fields extracted with high confidence
          </span>
          <span className="rounded-[4px] bg-[#16a34a]/10 px-2 py-0.5 text-[11px] font-bold text-[#16a34a]">De-ID ✓</span>
        </div>
        <span className="shrink-0 text-[12px] text-[#687588]">Review each section and sign to finalise</span>
      </div>
    );
  if (mode === "declined")
    return (
      <div className="rounded-[14px] bg-[#fef6e0] px-5 py-3.5">
        <span className="text-[14px] font-semibold text-[#92400e]">
          AI processing was declined for this consultation — documentation is manual.
        </span>
      </div>
    );
  return (
    <div className="flex items-center gap-2.5 rounded-[14px] bg-[#eafaf2] px-5 py-3.5">
      <CheckCircle2 className="size-4 shrink-0 text-[#2f9d6e]" />
      <span className="text-[14px] font-semibold text-[#1f7a55]">Consultation finalised — record signed and locked.</span>
    </div>
  );
}

function ChiefComplaint({ mode }: { mode: PatientFileMode }) {
  const [value, setValue] = useState(PLACEHOLDER_COMPLAINT);
  const isAiFilled = mode === "warning" || mode === "finalised";

  if (isAiFilled) {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-bold text-[#111827]">Chief Complaint</span>
          <AiPill source={AI_SOURCES.complaint} />
        </div>
        <p className="rounded-[12px] border border-[#d6efe6] bg-[#f3fbf7] p-4 text-[14px] leading-relaxed text-[#1f7a55]">
          {AI_COMPLAINT}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <span className="text-[14px] font-bold text-[#111827]">Chief Complaint</span>
      <div className="rounded-[12px] border border-[#e9eaec] p-4 focus-within:border-[#2f78ee]">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, 200))}
          rows={2}
          className="w-full resize-none bg-transparent text-[14px] leading-relaxed text-[#111827] outline-none"
        />
        <div className="mt-1 text-[12px] text-[#9aa6b6]">{value.length}/200</div>
      </div>
    </div>
  );
}

export default function PatientFile({
  patient,
  mode,
  onStartRecording,
  onStopRecording,
  onCompleteVisit,
}: {
  patient: Patient;
  mode: PatientFileMode;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onCompleteVisit: () => void;
}) {
  const [activeStep, setActiveStep] = useState(1);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set([0, 1]));
  const [panelTab, setPanelTab] = useState<PanelTab>("Medical Info");
  const [highlight, setHighlight] = useState<SourceHighlight | null>(null);
  const sourceClicks = useRef(0);

  useEffect(() => {
    setPanelTab(mode === "idle" ? "Medical Info" : "AI assistant");
  }, [mode]);

  const showAiBanner = mode === "recording" || mode === "warning";
  const aiFilled = mode === "warning" || mode === "finalised";

  // "Source" on any AI-added field opens the AI transcription and highlights the cited turns.
  const viewSource = useCallback((turns: number[]) => {
    sourceClicks.current += 1;
    setPanelTab("AI assistant");
    setHighlight({ turns, n: sourceClicks.current });
  }, []);

  const sourceApi = useMemo<SourceApi>(
    () => ({ view: viewSource, highlight, clear: () => setHighlight(null) }),
    [viewSource, highlight],
  );

  function handleStepClick(i: number) {
    setActiveStep(i);
    setVisitedSteps((prev) => new Set([...prev, i]));
  }

  return (
    <div className="space-y-5">
      <Banner mode={mode} onStart={onStartRecording} onStop={onStopRecording} />

      <SourceContext.Provider value={sourceApi}>
      <div className="grid gap-5 lg:grid-cols-[1fr_minmax(340px,400px)]">
        {/* Left column */}
        <div className="min-w-0 space-y-5">
          <StepTracker
            steps={CONSULTATION_STEPS}
            activeIndex={activeStep}
            onStepClick={handleStepClick}
            className="z-10 lg:sticky lg:top-[104px]"
          />

          <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7">
            <h1 className="text-[20px] font-bold text-[#111827]">Medical History</h1>

            {showAiBanner && (
              <div className="mt-4 flex items-start gap-2 rounded-[8px] border-l-4 border-[#2f78ee] bg-[#eff6ff] px-4 py-3">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-[#2f78ee]" />
                <div className="space-y-1">
                  <p className="text-[13px] leading-relaxed text-[#1d4ed8]">{AI_EXTRACTED_SUMMARY}</p>
                  <button
                    onClick={() => viewSource(AI_SOURCES.complaint)}
                    className="text-[12px] font-semibold text-[#2f78ee] underline underline-offset-2 hover:text-[#1d4ed8]"
                  >
                    View source
                  </button>
                </div>
              </div>
            )}

            <div className="mt-5">
              <ChiefComplaint mode={mode} />
            </div>

            <div className="mt-5 space-y-3">
              {HISTORY_ENTRIES.map((h, i) => (
                <div key={i} className="rounded-[12px] bg-[#f3f8ff] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={historyAvatar} alt="" className="size-9 shrink-0 rounded-full object-cover" />
                      <div>
                        <p className="text-[14px] font-bold text-[#111827]">{h.author}</p>
                        <p className="mt-0.5 text-[13px] text-[#687588]">{h.text}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <span className="text-[12px] text-[#687588]">{h.date}</span>
                      <Pencil className="size-4 text-[#9aa6b6]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <VitalSigns />
          <DifferentialDiagnosis aiFilled={aiFilled} />
          <Laboratory />
          <Procedures aiFilled={aiFilled} />
          <Prescribe aiFilled={aiFilled} />
          <PatientMovement
            patient={patient}
            onCompleteVisit={onCompleteVisit}
            reviewedCount={visitedSteps.size}
            totalSteps={CONSULTATION_STEPS.length}
          />
        </div>

        <PatientPanel
          patient={patient}
          tab={panelTab}
          onTab={setPanelTab}
          aiAvailable={mode !== "declined"}
          className="z-10 lg:sticky lg:top-[104px] lg:max-h-[calc(100vh-128px)] lg:self-start lg:overflow-y-auto"
        />
      </div>
      </SourceContext.Provider>
    </div>
  );
}
