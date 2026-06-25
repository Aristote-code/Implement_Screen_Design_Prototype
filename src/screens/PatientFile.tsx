import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Mic, CheckCircle2, Pencil } from "lucide-react";
import type { Patient } from "@/data/patients";
import {
  CONSULTATION_STEPS,
  HISTORY_ENTRIES,
  PLACEHOLDER_COMPLAINT,
  AI_COMPLAINT,
  AI_SOURCES,
  type AiMode,
} from "@/data/consultation";
import StepTracker from "@/components/StepTracker";
import PatientPanel, { type PanelTab } from "@/components/PatientPanel";
import { AiTag } from "@/components/sections/AiSuggestionCard";
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
  // Post-recording success is shown as a toast (in App), not a banner here.
  if (mode === "warning") return null;
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
  const isAiFilled = mode === "warning" || mode === "finalised";
  // AI may DRAFT the complaint from the recording, but it stays editable (PRD 5.8 — every
  // extracted field is editable). The clinician can accept, refine, or rewrite it.
  const [value, setValue] = useState(isAiFilled ? AI_COMPLAINT : PLACEHOLDER_COMPLAINT);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-[14px] font-bold text-[#111827]">Chief Complaint</span>
        {isAiFilled && (
          <AiTag
            basis={{
              source: AI_SOURCES.complaint,
              rationale: "Drafted from the recording — patient described shortness of breath and wheezing worsening over 2 days.",
            }}
          />
        )}
      </div>
      <div
        className={`rounded-[12px] border p-4 focus-within:border-[#2f78ee] ${
          isAiFilled ? "border-[#d6efe6] bg-[#f3fbf7]" : "border-[#e9eaec]"
        }`}
      >
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, 400))}
          rows={isAiFilled ? 4 : 2}
          className="w-full resize-none bg-transparent text-[14px] leading-relaxed text-[#111827] outline-none"
        />
        <div className="mt-1 flex items-center justify-between text-[12px] text-[#9aa6b6]">
          <span>{isAiFilled ? "AI-drafted — edit freely before signing" : ""}</span>
          <span>{value.length}/400</span>
        </div>
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
  const [panelTab, setPanelTab] = useState<PanelTab>("Medical Info");
  const [highlight, setHighlight] = useState<SourceHighlight | null>(null);
  const sourceClicks = useRef(0);
  // One ref per left-column section, in the same order as CONSULTATION_STEPS.
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Flow: after recording the AI does NOT auto-commit downstream sections. It surfaces
  // advisory suggestions the clinician accepts/dismisses ("suggest"). Once finalised, the
  // accepted items are shown committed + locked ("accepted").
  const aiMode: AiMode = mode === "warning" ? "suggest" : mode === "finalised" ? "accepted" : "none";

  // Clinical workflow gating. AI suggestions in each section only surface once the step they
  // depend on is done — mirroring the real sequence: vitals → differential → order labs →
  // results back → confirm diagnosis → procedures/prescriptions. This gates SUGGESTIONS only;
  // the nurse can still document any section manually at any time. In finalised ("accepted")
  // mode the whole chain is already complete. (PatientFile remounts per mode, so these
  // initialise correctly each time a mode is entered.)
  const flowComplete = aiMode === "accepted";
  const [vitalsRecorded, setVitalsRecorded] = useState(flowComplete);
  const [differentialCount, setDifferentialCount] = useState(0);
  const [labResultsReady, setLabResultsReady] = useState(flowComplete);
  const [diagnosisConfirmed, setDiagnosisConfirmed] = useState(flowComplete);
  const [procedureCount, setProcedureCount] = useState(0);
  const [prescriptionCount, setPrescriptionCount] = useState(0);

  // The step tracker reflects ACTUAL clinical progress (not scroll): a step ticks once its
  // work is done, the first unfinished step is "current", later steps are pale. The order
  // matches CONSULTATION_STEPS and the completion is monotonic, so the first unfinished index
  // is the active step.
  const stepDone = [
    aiMode !== "none", // Medical History — chief complaint drafted/available
    vitalsRecorded, // Physical Examination — vitals measured
    differentialCount > 0, // Diagnosis — a working differential exists
    labResultsReady, // Laboratory — results back from the technician
    procedureCount > 0, // Procedures
    prescriptionCount > 0, // Perscribe
    aiMode === "accepted", // Patient Movements — visit finalised
  ];
  const firstUnfinished = stepDone.indexOf(false);
  const activeStep = firstUnfinished === -1 ? CONSULTATION_STEPS.length : firstUnfinished;
  // Visit is signable once the clinical steps (history → prescribe) are complete.
  const clinicalDone = stepDone.slice(0, 6).filter(Boolean).length;

  // What the right panel shows by clinical context (Sandrine, Jun 25): recording → live
  // transcript; reviewing (pre-treatment) → AI assistant; treatment/prescribing → Medical Info
  // (allergies + current meds, the safety-critical context). Only switches when the context
  // itself changes, so the nurse's manual tab choice within a context is preserved.
  const panelContext =
    mode === "recording" ? "recording" : mode === "idle" || mode === "declined" ? "idle" : diagnosisConfirmed ? "treatment" : "review";
  useEffect(() => {
    setPanelTab(panelContext === "idle" || panelContext === "treatment" ? "Medical Info" : "AI assistant");
  }, [panelContext]);

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

  // Clicking a tracker step just scrolls to its section — it does not change progress
  // (progress is driven by the clinical workflow, not navigation).
  function handleStepClick(i: number) {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
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

          <div
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
            className="scroll-mt-[220px] rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.06)] sm:p-7"
          >
            <h1 className="text-[20px] font-bold text-[#111827]">Medical History</h1>

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

          <div ref={(el) => { sectionRefs.current[1] = el; }} className="scroll-mt-[220px]">
            <VitalSigns aiMode={aiMode} recorded={vitalsRecorded} onRecord={() => setVitalsRecorded(true)} />
          </div>
          <div ref={(el) => { sectionRefs.current[2] = el; }} className="scroll-mt-[220px]">
            <DifferentialDiagnosis
              aiMode={aiMode}
              unlocked={vitalsRecorded}
              resultsReady={labResultsReady}
              diagnosisConfirmed={diagnosisConfirmed}
              onCountChange={setDifferentialCount}
              onConfirmDiagnosis={() => setDiagnosisConfirmed(true)}
            />
          </div>
          <div ref={(el) => { sectionRefs.current[3] = el; }} className="scroll-mt-[220px]">
            <Laboratory
              aiMode={aiMode}
              unlocked={differentialCount > 0}
              resultsReady={labResultsReady}
              onResultsReady={() => setLabResultsReady(true)}
            />
          </div>
          <div ref={(el) => { sectionRefs.current[4] = el; }} className="scroll-mt-[220px]">
            <Procedures aiMode={aiMode} unlocked={diagnosisConfirmed} onCountChange={setProcedureCount} />
          </div>
          <div ref={(el) => { sectionRefs.current[5] = el; }} className="scroll-mt-[220px]">
            <Prescribe aiMode={aiMode} unlocked={diagnosisConfirmed} onCountChange={setPrescriptionCount} />
          </div>
          <div ref={(el) => { sectionRefs.current[6] = el; }} className="scroll-mt-[220px]">
            <PatientMovement
              patient={patient}
              onCompleteVisit={onCompleteVisit}
              reviewedCount={clinicalDone}
              totalSteps={6}
            />
          </div>
        </div>

        <PatientPanel
          patient={patient}
          tab={panelTab}
          onTab={setPanelTab}
          aiAvailable={mode !== "declined"}
          recording={mode === "recording"}
          className="z-10 lg:sticky lg:top-[104px] lg:max-h-[calc(100vh-128px)] lg:self-start lg:overflow-y-auto"
        />
      </div>
      </SourceContext.Provider>
    </div>
  );
}
