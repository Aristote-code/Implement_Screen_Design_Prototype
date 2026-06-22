import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import AppShell from "@/components/AppShell";
import Consultations from "@/screens/Consultations";
import PatientFile, { type PatientFileMode } from "@/screens/PatientFile";
import ConsentModal from "@/components/ConsentModal";
import SignFinaliseModal from "@/components/SignFinaliseModal";
import PreConsultModal from "@/components/PreConsultModal";
import { patients, type Patient } from "@/data/patients";

type Screen = "consultations" | "patient";
type Modal = "none" | "preconsult" | "consent" | "signfinalise";

function ProcessingToast() {
  return (
    <div className="fixed bottom-6 right-6 z-40 w-[340px] animate-in slide-in-from-bottom-4 fade-in rounded-[14px] border border-[#eef0f3] bg-white p-4 shadow-[0_16px_40px_-8px_rgba(17,24,39,0.18)]">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#0b9487]/10">
          <Sparkles className="size-4 animate-pulse text-[#0b9487]" />
        </span>
        <div>
          <p className="text-[14px] font-bold text-[#111827]">AI processing consultation…</p>
          <p className="mt-0.5 text-[13px] text-[#687588]">Analyzing consultation data: re-identifying, running quality checks…</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("consultations");
  const [patient, setPatient] = useState<Patient>(patients[0]);
  const [mode, setMode] = useState<PatientFileMode>("idle");
  const [modal, setModal] = useState<Modal>("none");
  const [processing, setProcessing] = useState(false);

  // Stop Recording → brief processing toast → Warning (quality gate).
  useEffect(() => {
    if (!processing) return;
    const t = setTimeout(() => {
      setProcessing(false);
      setMode("warning");
    }, 2200);
    return () => clearTimeout(t);
  }, [processing]);

  function openPatient(p: Patient) {
    setPatient(p);
    setMode("idle");
    setModal("preconsult");
    setProcessing(false);
    setScreen("patient");
  }

  function backToConsultations() {
    setModal("none");
    setProcessing(false);
    setScreen("consultations");
  }

  return (
    <AppShell onBack={screen === "patient" ? backToConsultations : undefined}>
      <div key={screen === "patient" ? `patient-${mode}` : "consultations"} className="animate-in fade-in duration-300">
        {screen === "consultations" ? (
          <Consultations onSelectPatient={openPatient} />
        ) : (
          <PatientFile
            patient={patient}
            mode={mode}
            onStartRecording={() => setModal("consent")}
            onStopRecording={() => setProcessing(true)}
            onCompleteVisit={() => setModal("signfinalise")}
          />
        )}
      </div>

      {modal === "preconsult" && (
        <PreConsultModal patient={patient} onClose={() => setModal("none")} />
      )}

      {modal === "consent" && (
        <ConsentModal
          onCancel={() => setModal("none")}
          onConfirm={(choice) => {
            setModal("none");
            setMode(choice === "decline" ? "declined" : "recording");
          }}
        />
      )}

      {modal === "signfinalise" && (
        <SignFinaliseModal
          patient={patient}
          onCancel={() => setModal("none")}
          onConfirm={() => {
            setModal("none");
            setMode("finalised");
          }}
        />
      )}

      {processing && <ProcessingToast />}
    </AppShell>
  );
}
