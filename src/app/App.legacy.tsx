import { useCallback, useEffect, useRef, useState } from "react";
import Consultations from "@/imports/Consultations/index";
import PatienFile from "@/imports/PatienFile-1/index";
import PatienFileModal from "@/imports/PatienFile-2/index";
import Toast from "@/imports/Toast/index";
import PatientFileAiRecordingWarning from "@/imports/PatientFileAiRecordingWarning/index";
import PatientFileAiTranscribing from "@/imports/PatientFileAiTranscribing/index";
import PatientFileAiChatActive from "@/imports/PatientFileAiChatActive/index";
import PatientFileAiPanelEmpty from "@/imports/PatientFileAiPanelEmpty/index";
import PatientFileFinalised from "@/imports/PatientFileFinalised/index";
import PatientFileSignFinaliseModal from "@/imports/PatientFileSignFinaliseModal/index";

type Page = "consultations" | "patient-file";
type ModalState = "none" | "consent" | "recording" | "processing" | "warning" | "declined" | "signfinalise" | "finalised";
type Popover = { title: string; options: string[]; rect: OverlayRect; key?: string } | null;

interface OverlayRect { top: number; left: number; width: number; height: number }

const STEP_LABELS = ["Medical History", "Physical Examination", "Diagnosis", "Laboratory", "Procedures", "Patient Movements", "Perscribe"];
const RIGHT_TABS = ["Medical Info", "Personal Info", "AI assistant"];
const DROPDOWNS: Record<string, string[]> = {
  "Visit department:": ["All", "Emergency", "Outpatient", "Maternity", "Pediatrics"],
  "Vital signs": ["Yesterday: 02:00 pa", "Today: 08:00 am", "Today: 06:00 pm"],
  "HP: Health post diagnosis": ["HP: Health post diagnosis", "Presumptive diagnosis", "Confirmed diagnosis"],
  "Blood": ["Blood", "Urine", "Serum", "Stool", "Vaginal fluid", "Sputum", "Urethral"],
  "Lab Order": ["Lab Order", "Lab Result"],
  "Select Procedure": ["Wound dressing", "Nebulisation", "Injection", "Suture removal"],
  "General Services": ["General Services", "Nursing Procedures", "Consumables"],
  "Select Medicine": ["Salbutamol inhaler", "Amoxicillin 500mg", "Paracetamol 500mg", "ORS sachet"],
  "Nurse": ["Nurse", "Doctor", "Triage", "Pharmacist"],
};
const PATIENT_NAMES = ["Jack Maa", "Manzi dider", "Gisa Arlette", "Abraham Kamau", "Abayizera Bertrand", "Abayo Yvette", "Mushimiyimana Bertin", "Ngoga Frank"];

function findInPath(e: React.MouseEvent, test: (el: HTMLElement) => boolean): HTMLElement | null {
  let el = e.target as HTMLElement | null;
  for (let i = 0; i < 16 && el; i++) { if (test(el)) return el; el = el.parentElement; }
  return null;
}

function findByText(root: Element, text: string): Element | null {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) if (node.textContent?.trim() === text) return node.parentElement;
  return null;
}

// The app is rendered at a fixed 1440px width and scaled to the viewport via CSS `zoom`
// on #root. getBoundingClientRect returns post-zoom (visual) pixels, but overlay buttons
// are positioned in the screen's natural (pre-zoom) coordinate space — so we divide
// measured rects by the live scale factor to keep them aligned at any zoom.
function appScale(): number {
  const root = document.getElementById("root");
  if (!root) return 1;
  const w = root.clientWidth;
  const gw = root.getBoundingClientRect().width;
  return w && gw ? gw / w : 1;
}

function toOverlayRect(el: Element, container: Element): OverlayRect {
  const er = el.getBoundingClientRect();
  const cr = container.getBoundingClientRect();
  const s = appScale();
  return { top: (er.top - cr.top) / s, left: (er.left - cr.left) / s, width: er.width / s, height: er.height / s };
}

function clickableAncestor(el: Element | null, minW = 40, minH = 28): Element | null {
  let node = el;
  const s = appScale();
  for (let i = 0; i < 8 && node; i++) {
    const r = node.getBoundingClientRect();
    if (r.width / s >= minW && r.height / s >= minH) return node;
    node = node.parentElement;
  }
  return el;
}

interface InteractiveLayerProps {
  rootRef: React.RefObject<HTMLDivElement>;
  activeStep: number;
  onStepClick: (i: number) => void;
  activeRightTab: number;
  onRightTabClick: (i: number) => void;
  chiefComplaint: string;
  onChiefComplaintChange: (v: string) => void;
  differential: string;
  onDifferentialChange: (v: string) => void;
  labSearch: string;
  onLabSearchChange: (v: string) => void;
  showRightTabs: boolean;
  onOpenPopover: (p: Popover) => void;
  selectedDropdowns: Record<string, string>;
  selectedTests: string[];
  onToggleTest: (t: string) => void;
  urgent: boolean;
  onToggleUrgent: () => void;
  aiSubTab: number;
  onAiSubTabClick: (i: number) => void;
  onAction: (label: string, rect: OverlayRect) => void;
  chatQuery: string;
  onChatQueryChange: (v: string) => void;
  onSendChat: () => void;
}

function InteractiveLayer(props: InteractiveLayerProps) {
  const { rootRef, onOpenPopover } = props;
  const [stepRects, setStepRects] = useState<(OverlayRect | null)[]>([]);
  const [rightTabRects, setRightTabRects] = useState<(OverlayRect | null)[]>([]);
  const [chiefRect, setChiefRect] = useState<OverlayRect | null>(null);
  const [diffRect, setDiffRect] = useState<OverlayRect | null>(null);
  const [labRect, setLabRect] = useState<OverlayRect | null>(null);
  const [dropdownRects, setDropdownRects] = useState<{ label: string; rect: OverlayRect }[]>([]);
  const [testRects, setTestRects] = useState<{ label: string; rect: OverlayRect }[]>([]);
  const [actionRects, setActionRects] = useState<{ label: string; rect: OverlayRect }[]>([]);
  const [urgentRect, setUrgentRect] = useState<OverlayRect | null>(null);
  const [chatRect, setChatRect] = useState<OverlayRect | null>(null);
  const [aiSubRects, setAiSubRects] = useState<(OverlayRect | null)[]>([]);

  const measure = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    setStepRects(STEP_LABELS.map((label) => clickableAncestor(findByText(root, label), 55, 52)).map((el) => el ? toOverlayRect(el, root) : null));
    setRightTabRects(RIGHT_TABS.map((label) => clickableAncestor(findByText(root, label), 60, 30)).map((el) => el ? toOverlayRect(el, root) : null));
    setAiSubRects(["AI transcription", "AI Chat"].map((label) => clickableAncestor(findByText(root, label), 80, 28)).map((el) => el ? toOverlayRect(el, root) : null));

    const counter = findByText(root, "50/200");
    const chief = clickableAncestor(counter, 200, 70);
    if (chief) { const r = toOverlayRect(chief, root); setChiefRect({ ...r, height: Math.max(44, r.height - 24) }); }
    const diff = clickableAncestor(findByText(root, "HP: Health post diagnosis"), 220, 38);
    setDiffRect(diff ? toOverlayRect(diff, root) : null);
    const lab = clickableAncestor(findByText(root, "Search test or panel"), 150, 36);
    setLabRect(lab ? toOverlayRect(lab, root) : null);

    setDropdownRects(Object.keys(DROPDOWNS).map((label) => {
      const el = clickableAncestor(findByText(root, label), label.includes("Blood") ? 40 : 110, 28);
      return el ? { label, rect: toOverlayRect(el, root) } : null;
    }).filter(Boolean) as { label: string; rect: OverlayRect }[]);

    const tests = ["Complete Blood Count", "White Blood Cell Count", "White blood cells", "Hematocrit", "Peripheral Blood Smear", "Full Blood Count (FBC/NFS)", "Red blood cells", "Hemoglobin", "Platelets", "Lymphocytes"];
    setTestRects(tests.map((label) => {
      const el = clickableAncestor(findByText(root, label), 120, 28);
      return el ? { label, rect: toOverlayRect(el, root) } : null;
    }).filter(Boolean) as { label: string; rect: OverlayRect }[]);
    const actions = ["Add vital signs", "Start triage assessment", "AI generated potential diagnosis", "AI generated potential prescription", "Submit", "Preview", "Complete visit", "Admit Patient", "Transfer Patient"];
    setActionRects(actions.map((label) => {
      const el = clickableAncestor(findByText(root, label), 90, 28);
      return el ? { label, rect: toOverlayRect(el, root) } : null;
    }).filter(Boolean) as { label: string; rect: OverlayRect }[]);
    const urgentEl = clickableAncestor(findByText(root, "Mark test(s)as urgent"), 160, 28);
    setUrgentRect(urgentEl ? toOverlayRect(urgentEl, root) : null);
    const chatEl = clickableAncestor(findByText(root, "Ask a question about this consultation..."), 180, 28);
    setChatRect(chatEl ? toOverlayRect(chatEl, root) : null);
  }, [rootRef]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setTimeout(measure, 100));
    window.addEventListener("resize", measure);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", measure); };
  }, [measure]);

  const btn = { position: "absolute", background: "transparent", border: "none", cursor: "pointer", zIndex: 30, opacity: 0 } as const;
  const input = { position: "absolute", background: "transparent", border: "none", outline: "none", fontFamily: "Manrope, sans-serif", fontSize: "12px", color: "#111827", zIndex: 31 } as const;

  return <div className="absolute inset-0 z-20 pointer-events-none">
    {stepRects.map((r, i) => r && <button key={STEP_LABELS[i]} title={STEP_LABELS[i]} onClick={(e) => { e.stopPropagation(); props.onStepClick(i); }} style={{ ...btn, pointerEvents: "auto", ...r }} />)}
    {props.showRightTabs && rightTabRects.map((r, i) => r && (
      <div key={RIGHT_TABS[i]} className="absolute pointer-events-none bg-white" style={{ top: r.top, left: r.left - 6, width: r.width + 12, height: r.height, zIndex: 24 }}>
        <div className={`flex h-full items-center justify-center text-[14px] font-bold ${props.activeRightTab === i ? "text-[#0b9487]" : "text-[#111827]"}`}>{RIGHT_TABS[i]}</div>
        {props.activeRightTab === i && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0b9487]" />}
      </div>
    ))}
    {props.showRightTabs && rightTabRects.map((r, i) => r && <button key={`hit-${RIGHT_TABS[i]}`} title={RIGHT_TABS[i]} onClick={(e) => { e.stopPropagation(); props.onRightTabClick(i); }} style={{ ...btn, pointerEvents: "auto", ...r }} />)}
    {aiSubRects.map((r, i) => r && (
      <div key={`aisub-${i}`} className={`absolute pointer-events-none rounded-[6px] ${props.aiSubTab === i ? "bg-[#0b9487]" : "bg-[#f9f9f9]"}`} style={{ top: r.top, left: r.left, width: r.width, height: r.height, zIndex: 24 }}>
        <div className={`flex h-full items-center justify-center text-[14px] font-bold ${props.aiSubTab === i ? "text-white" : "text-[#9f9f9f]"}`}>{i === 0 ? "AI transcription" : "AI Chat"}</div>
      </div>
    ))}
    {aiSubRects.map((r, i) => r && <button key={`aisub-hit-${i}`} title={i === 0 ? "AI transcription" : "AI Chat"} onClick={(e) => { e.stopPropagation(); props.onAiSubTabClick(i); }} style={{ ...btn, pointerEvents: "auto", ...r }} />)}

    {dropdownRects.map(({ label, rect }) => props.selectedDropdowns[label] && <div key={`sel-${label}`} className="absolute pointer-events-none bg-white px-1 text-[12px] font-bold text-[#2f78ee]" style={{ top: rect.top + Math.max(6, rect.height / 2 - 10), left: rect.left + 18, maxWidth: rect.width - 42, zIndex: 25 }}>{props.selectedDropdowns[label]}</div>)}
    {testRects.map(({ label, rect }) => props.selectedTests.includes(label) && <div key={`check-${label}`} className="absolute pointer-events-none flex items-center justify-center rounded-full bg-[#0b9487] text-[11px] font-bold text-white" style={{ top: rect.top + 6, left: rect.left + rect.width - 24, width: 18, height: 18, zIndex: 25 }}>✓</div>)}
    {urgentRect && <button title="Mark urgent" onClick={(e) => { e.stopPropagation(); props.onToggleUrgent(); }} style={{ ...btn, pointerEvents: "auto", ...urgentRect }} />}
    {urgentRect && props.urgent && <div className="absolute pointer-events-none rounded-[8px] border-2 border-[#ef4444] bg-[#fff5f5]/70" style={{ top: urgentRect.top, left: urgentRect.left, width: urgentRect.width, height: urgentRect.height, zIndex: 24 }} />}
    {actionRects.map(({ label, rect }) => <button key={`action-${label}`} title={label} onClick={(e) => { e.stopPropagation(); props.onAction(label, rect); }} style={{ ...btn, pointerEvents: "auto", ...rect }} />)}
    {dropdownRects.map(({ label, rect }) => <button key={label} title={`${label} dropdown`} onClick={(e) => { e.stopPropagation(); onOpenPopover({ title: label.replace(":", ""), options: DROPDOWNS[label], rect, key: label }); }} style={{ ...btn, pointerEvents: "auto", ...rect }} />)}
    {testRects.map(({ label, rect }) => <button key={label} title={`Select ${label}`} onClick={(e) => { e.stopPropagation(); props.onToggleTest(label); }} style={{ ...btn, pointerEvents: "auto", ...rect }} />)}
    {chiefRect && <textarea value={props.chiefComplaint} onChange={(e) => props.onChiefComplaintChange(e.target.value.slice(0, 200))} style={{ ...input, pointerEvents: "auto", resize: "none", top: chiefRect.top, left: chiefRect.left, width: chiefRect.width, height: chiefRect.height, lineHeight: 1.6, padding: "8px 10px" }} />}
    {diffRect && <input value={props.differential} onChange={(e) => props.onDifferentialChange(e.target.value)} style={{ ...input, pointerEvents: "auto", top: diffRect.top, left: diffRect.left, width: diffRect.width, height: diffRect.height, padding: "0 12px" }} />}
    {labRect && <input value={props.labSearch} onChange={(e) => props.onLabSearchChange(e.target.value)} style={{ ...input, pointerEvents: "auto", top: labRect.top, left: labRect.left, width: labRect.width - 28, height: labRect.height, padding: "0 12px" }} />}
    {chatRect && <input value={props.chatQuery} onChange={(e) => props.onChatQueryChange(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") props.onSendChat(); }} placeholder="Ask a question about this consultation..." style={{ ...input, pointerEvents: "auto", top: chatRect.top, left: chatRect.left, width: Math.max(120, chatRect.width - 34), height: chatRect.height, padding: "0 8px" }} />}
    {chatRect && <button title="Send chat" onClick={(e) => { e.stopPropagation(); props.onSendChat(); }} style={{ ...btn, pointerEvents: "auto", top: chatRect.top, left: chatRect.left + chatRect.width - 32, width: 32, height: chatRect.height }} />}
    {props.urgent && <div className="absolute rounded-md border-2 border-[#0b9487] pointer-events-none" style={{ top: 0, left: 0, width: 1, height: 1, opacity: 0 }} />}
  </div>;
}

function ConsentEnhancer({ choice, onChoice }: { choice: "consent" | "decline"; onChoice: (v: "consent" | "decline") => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rects, setRects] = useState<{ consent?: OverlayRect; decline?: OverlayRect }>({});

  const measure = useCallback(() => {
    const root = ref.current?.parentElement;
    if (!root) return;
    const consent = clickableAncestor(findByText(root, "Consent to full AI assistance"), 360, 76);
    const decline = clickableAncestor(findByText(root, "Decline AI processing"), 360, 76);
    setRects({
      consent: consent ? toOverlayRect(consent, root) : undefined,
      decline: decline ? toOverlayRect(decline, root) : undefined,
    });
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setTimeout(measure, 80));
    window.addEventListener("resize", measure);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", measure); };
  }, [measure]);

  const option = (kind: "consent" | "decline", rect?: OverlayRect) => rect ? (
    <button
      key={kind}
      aria-label={kind === "consent" ? "Consent to full AI assistance" : "Decline AI processing"}
      onClick={(e) => { e.stopPropagation(); onChoice(kind); }}
      className="absolute z-[80] cursor-pointer rounded-[10px] bg-transparent"
      style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
    >
      <span className={`absolute inset-0 rounded-[10px] pointer-events-none ${choice === kind ? "border border-[#2f78ee]" : "border border-[#e5e7eb]"}`} />
      <span className={`absolute left-[20px] top-[17px] size-[20px] rounded-full pointer-events-none ${choice === kind ? "border-[5px] border-[#2f78ee]" : "border border-[#cbd5e0] bg-white"}`} />
    </button>
  ) : null;

  return <div ref={ref} className="absolute inset-0 z-[70] pointer-events-none">{option("consent", rects.consent)}{option("decline", rects.decline)}</div>;
}

function PrototypePopover({ popover, onClose, onSelect }: { popover: Popover; onClose: () => void; onSelect?: (key: string, value: string) => void }) {
  if (!popover) return null;
  return <div className="absolute z-[10000] rounded-[10px] border border-[#e9eaec] bg-white shadow-[0_12px_32px_rgba(17,24,39,0.16)] overflow-hidden" style={{ top: popover.rect.top + popover.rect.height + 6, left: popover.rect.left, width: Math.max(220, popover.rect.width) }}>
    <div className="px-4 py-3 text-[12px] font-bold text-[#687588] border-b border-[#f1f2f4]">{popover.title}</div>
    {popover.options.map((option, i) => <button key={option} onClick={() => { if (popover.key) onSelect?.(popover.key, option); onClose(); }} className={`block w-full px-4 py-3 text-left text-[14px] font-medium hover:bg-[#f0f6ff] ${i === 0 ? "text-[#2f78ee]" : "text-[#111827]"}`}>{option}</button>)}
  </div>;
}

const SCREEN_CLASS = "size-full min-h-screen relative overflow-auto";

// Single wrapper for every screen: owns the scroll root + ref, injects the shared
// keyframes, and remounts (via `key`) on screen change so the fade-in replays.
function Screen({ screenId, onClick, cursorCss, rootRef, children }: {
  screenId: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  cursorCss?: string;
  rootRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}) {
  return (
    <div key={screenId} ref={rootRef} className={SCREEN_CLASS} onClick={onClick} style={{ animation: "screenFade 0.28s ease both" }}>
      {/* screenFade is opacity-only on purpose: a lingering transform here would make this
          div a containing block for position:fixed children (Stop button / toast). */}
      <style>{`@keyframes screenFade{from{opacity:0}to{opacity:1}}@keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes recPulse{0%,100%{opacity:1}50%{opacity:0.25}}${cursorCss ?? ""}`}</style>
      {children}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("consultations");
  const [modal, setModal] = useState<ModalState>("none");
  const [consentChoice, setConsentChoice] = useState<"consent" | "decline">("consent");
  const [activeStep, setActiveStep] = useState(0);
  const [activeRightTab, setActiveRightTab] = useState(0);
  const [chiefComplaint, setChiefComplaint] = useState("");
  const [differential, setDifferential] = useState("");
  const [labSearch, setLabSearch] = useState("");
  const [popover, setPopover] = useState<Popover>(null);
  const [selectedDropdowns, setSelectedDropdowns] = useState<Record<string, string>>({});
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [urgent, setUrgent] = useState(false);
  const [aiSubTab, setAiSubTab] = useState(0);
  const [chatQuery, setChatQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [finaliseReturn, setFinaliseReturn] = useState<ModalState>("warning");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (modal === "processing") { const t = setTimeout(() => setModal("warning"), 4000); return () => clearTimeout(t); } }, [modal]);

  // Scale the fixed 1440px design to fill the viewport width on any screen.
  useEffect(() => {
    const root = document.getElementById("root");
    const apply = () => { if (root) (root.style as { zoom?: string }).zoom = String(window.innerWidth / 1440); };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  function goToStep(i: number) {
    setActiveStep(i);
    const root = rootRef.current;
    const label = STEP_LABELS[i];
    const target = root ? findByText(root, label) : null;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }

  function handlePrototypeAction(label: string, rect: OverlayRect) {
    if (label === "Complete visit") { setFinaliseReturn(modal === "warning" || modal === "declined" ? modal : "none"); setModal("signfinalise"); setPopover(null); return; }
    if (label === "Submit") {
      setPopover({ title: "Lab order submitted", options: selectedTests.length ? selectedTests.map((t) => `${t} ordered${urgent ? " — urgent" : ""}`) : ["No tests selected yet", "Select tests first"], rect });
      return;
    }
    if (label === "Preview") {
      setPopover({ title: `Visit preview — ${selectedPatient || "Patient"}`, options: [chiefComplaint || "Chief complaint not entered", differential || "Diagnosis not entered", selectedTests.length ? `${selectedTests.length} lab tests selected` : "No lab tests selected"], rect });
      return;
    }
    setPopover({ title: label, options: [`${label} panel opened`, "Continue editing"], rect });
  }

  function sendChat() {
    if (!chatQuery.trim()) return;
    setPopover({ title: "AI Chat", options: [`Asked: ${chatQuery.trim()}`, `AI response drafted${selectedPatient ? ` for ${selectedPatient}` : ""}`], rect: { top: 120, left: 820, width: 260, height: 40 } });
    setChatQuery("");
  }

  const layerProps = { rootRef, activeStep, onStepClick: goToStep, activeRightTab, onRightTabClick: setActiveRightTab, chiefComplaint, onChiefComplaintChange: setChiefComplaint, differential, onDifferentialChange: setDifferential, labSearch, onLabSearchChange: setLabSearch, showRightTabs: modal !== "recording", onOpenPopover: setPopover, selectedDropdowns, selectedTests, onToggleTest: (t: string) => setSelectedTests((a) => a.includes(t) ? a.filter(x => x !== t) : [...a, t]), urgent, onToggleUrgent: () => setUrgent(v => !v), aiSubTab, onAiSubTabClick: setAiSubTab, onAction: handlePrototypeAction, chatQuery, onChatQueryChange: setChatQuery, onSendChat: sendChat };

  function handleConsultationsClick(e: React.MouseEvent<HTMLDivElement>) {
    const cell = findInPath(e, (el) => el.dataset?.name === "Table Cell" && el.className.includes("h-[64px]"));
    if (cell) {
      let row: HTMLElement | null = cell;
      for (let i = 0; i < 6 && row; i++) { const t = row.textContent ?? ""; const name = PATIENT_NAMES.find((n) => t.includes(n)); if (name) { setSelectedPatient(name); break; } row = row.parentElement; }
      setActiveStep(0); setModal("none"); setPage("patient-file");
    }
    const tab = findInPath(e, (el) => el.dataset?.name === "Tab Atom");
    if (tab) setPopover({ title: "Consultation filter", options: ["All pending", "Today", "This Week", "This Month"], rect: toOverlayRect(tab, e.currentTarget) });
    const dept = findInPath(e, (el) => (el.textContent ?? "").includes("Visit department"));
    if (dept) setPopover({ title: "Visit department", options: DROPDOWNS["Visit department:"], rect: toOverlayRect(dept, e.currentTarget) });
  }

  function handlePatientFileClick(e: React.MouseEvent<HTMLDivElement>) {
    if (findInPath(e, (el) => el.dataset?.name === "chevron-left" || (el.tagName === "P" && el.textContent === "Back"))) { setPage("consultations"); return; }
    if (findInPath(e, (el) => el.className?.includes?.("bg-[#0b9487]") || (el.textContent ?? "").includes("Start Recording"))) { setModal("consent"); return; }
    if (findInPath(e, (el) => (el.textContent ?? "").includes("View chart"))) setPopover({ title: "Vital signs chart", options: ["PB 110/30 — decreased", "Pulse 84 — normal", "Resp. Rate 55 — increased", "Weight 74kg — stable"], rect: { top: 130, left: 520, width: 260, height: 40 } });
  }

  function handleConsentClick(e: React.MouseEvent<HTMLDivElement>) {
    if (findInPath(e, (el) => el.dataset?.name === "chevron-left" || (el.tagName === "P" && el.textContent === "Back"))) { setModal("none"); return; }
    const option = findInPath(e, (el) => el.dataset?.name === "Input Area" && el.className.includes("rounded-[10px]"));
    if (option) setConsentChoice((option.textContent ?? "").includes("Decline") ? "decline" : "consent");
    const btn = findInPath(e, (el) => el.tagName === "BUTTON" && el.dataset?.name === "Button");
    if (btn) { const text = btn.textContent ?? ""; if (text.includes("Cancel")) setModal("none"); if (text.includes("Confirm")) setModal(consentChoice === "decline" ? "declined" : "recording"); }
  }

  function handleRecordingClick(e: React.MouseEvent<HTMLDivElement>) {
    if (findInPath(e, (el) => el.dataset?.name === "chevron-left" || (el.tagName === "P" && el.textContent === "Back"))) { setModal("none"); setPage("consultations"); return; }
    if (findInPath(e, (el) => el.className?.includes?.("bg-[#ef4444]") || (el.textContent ?? "").includes("Stop Recording"))) setModal("processing");
  }

  function handleSignFinaliseClick(e: React.MouseEvent<HTMLDivElement>) {
    if (findInPath(e, (el) => el.dataset?.name === "chevron-left" || (el.tagName === "P" && el.textContent === "Back"))) { setModal(finaliseReturn); return; }
    const btn = findInPath(e, (el) => el.dataset?.name === "Button");
    if (btn) { const text = btn.textContent ?? ""; if (text.includes("Cancel")) setModal(finaliseReturn); else if (text.includes("Sign")) setModal("finalised"); }
  }

  // Used by the terminal screens (Finalised / AI declined): the only exit is Back → consultations.
  function handleBackOnly(e: React.MouseEvent<HTMLDivElement>) {
    if (findInPath(e, (el) => el.dataset?.name === "chevron-left" || (el.tagName === "P" && el.textContent === "Back"))) { setModal("none"); setPage("consultations"); }
  }


  const popoverEl = <PrototypePopover popover={popover} onClose={() => setPopover(null)} onSelect={(k, v) => setSelectedDropdowns((d) => ({ ...d, [k]: v }))} />;

  if (page === "consultations") return <Screen screenId="consultations" rootRef={rootRef} onClick={handleConsultationsClick} cursorCss={`[data-name="Table Cell"].h-\[64px\], [data-name="Tab Atom"], [data-name="Input Area"]{cursor:pointer}`}><Consultations />{popoverEl}</Screen>;
  if (modal === "recording") return <Screen screenId="recording" rootRef={rootRef} onClick={handleRecordingClick} cursorCss={`.bg-\[\#ef4444\], [data-name="Tab Atom"], [data-name="Input Area"]{cursor:pointer}`}>{aiSubTab === 1 ? <PatientFileAiChatActive /> : <PatientFileAiTranscribing />}<InteractiveLayer key="recording" {...layerProps} /><button onClick={(e) => { e.stopPropagation(); setModal("processing"); }} className="fixed top-[104px] right-[40px] z-[9999] flex items-center gap-[10px] rounded-[10px] bg-[#ef4444] px-[20px] py-[12px] text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(239,68,68,0.4)]" style={{ fontFamily: "Manrope, sans-serif", animation: "slideUp 0.3s ease-out" }}><span className="inline-block size-[10px] rounded-full bg-white" style={{ animation: "recPulse 1.2s ease-in-out infinite" }} />Stop Recording</button>{popoverEl}</Screen>;
  if (modal === "consent") return <Screen screenId="consent" rootRef={rootRef} onClick={handleConsentClick} cursorCss={`button[data-name="Button"],[data-name="Input Area"]{cursor:pointer}`}><PatienFileModal /><ConsentEnhancer choice={consentChoice} onChoice={setConsentChoice} />{popoverEl}</Screen>;
  if (modal === "signfinalise") return <Screen screenId="signfinalise" rootRef={rootRef} onClick={handleSignFinaliseClick} cursorCss={`[data-name="Button"]{cursor:pointer}`}><PatientFileSignFinaliseModal />{popoverEl}</Screen>;
  if (modal === "warning") return <Screen screenId="warning" rootRef={rootRef} onClick={handlePatientFileClick} cursorCss={`[data-name="Tab Atom"], [data-name="Input Area"]{cursor:pointer}`}>{aiSubTab === 1 ? <PatientFileAiChatActive /> : <PatientFileAiRecordingWarning />}<InteractiveLayer key="warning" {...layerProps} />{popoverEl}</Screen>;
  if (modal === "finalised") return <Screen screenId="finalised" rootRef={rootRef} onClick={handleBackOnly} cursorCss={`[data-name="Tab Atom"], [data-name="Input Area"]{cursor:pointer}`}><PatientFileFinalised /><InteractiveLayer key="finalised" {...layerProps} />{popoverEl}</Screen>;
  if (modal === "declined") return <Screen screenId="declined" rootRef={rootRef} onClick={handleBackOnly} cursorCss={`[data-name="Tab Atom"], [data-name="Input Area"]{cursor:pointer}`}><PatientFileAiPanelEmpty /><InteractiveLayer key="declined" {...layerProps} />{popoverEl}</Screen>;

  return <Screen screenId="overview" rootRef={rootRef} onClick={handlePatientFileClick} cursorCss={`.bg-\[\#0b9487\], [data-name="Tab Atom"], [data-name="Input Area"]{cursor:pointer}`}><PatienFile /><InteractiveLayer key="patient-file" {...layerProps} />{popoverEl}{modal === "processing" && <div className="fixed bottom-[32px] right-[32px] w-[340px] z-[9999]" style={{ animation: "slideUp 0.3s ease-out" }}><Toast /></div>}</Screen>;
}
