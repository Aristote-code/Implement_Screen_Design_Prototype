// Mock clinical content for the Patient File flow. Kept here so every screen/state
// (overview, recording, warning, finalised) reads from one source of truth.

export const CONSULTATION_STEPS = [
  "Medical History",
  "Physical Examination",
  "Diagnosis",
  "Laboratory",
  "Procedures",
  "Perscribe",
  "Patient Movements",
] as const;

export interface HistoryEntry {
  author: string;
  text: string;
  date: string;
}

export const HISTORY_ENTRIES: HistoryEntry[] = [
  { author: "John Doe - ABC health center", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean", date: "2024-10-12 20:59" },
  { author: "John Doe - ABC health center", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean", date: "2024-10-12 20:59" },
  { author: "John Doe - ABC health center", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean", date: "2024-10-12 20:59" },
];

export const PLACEHOLDER_COMPLAINT = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean l";

// AI-extracted chief complaint (short — one line) and the fuller History of Present Illness
// narrative, shown once recording has produced a draft. Both stay editable (PRD 5.8).
export const AI_COMPLAINT = "Shortness of breath and wheezing — 2 days.";
export const AI_HPI =
  "Shortness of breath and wheezing for 2 days, progressively worsening at night. Reports tachypnoea approximately 50–60 breaths per minute. Known asthma since 2020; Salbutamol PRN not providing relief today. No fever or chest pain.";
export const PLACEHOLDER_HPI = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean leo ligula, porttitor eu.";

export const AI_EXTRACTED_SUMMARY =
  "AI extracted — Shortness of breath and wheezing, 2-day onset, worsening at night. Tachypnoea ~50–60 bpm. Known asthma 2020.";

// Right-panel "Medical Info" content.
export const ALLERGIES = "Penicillins (Skin lashes)";
export const ACTIVE_PROBLEMS = [
  "Benign hypertension",
  "Diabetes hypersmolar",
  "Hyperdemia due to level 2 diabetes",
  "Nicotine dependence",
];
export const CURRENT_MEDICATION = ["Actos 30Mg oral tablet", "Altoprev 400Mg oral tablet extended"];

// Right-panel "Personal Info" tab (Figma node 60:28526) — label above value.
export const PERSONAL_INFO: { label: string; value: string }[] = [
  { label: "National ID", value: "19960000000000345" },
  { label: "Date of Birth", value: "10-10-1881" },
  { label: "Height", value: "170 Cm" },
  { label: "Weight", value: "80 Kg" },
  { label: "Blood Group", value: "O+" },
  { label: "Address", value: "Kicukiro, Kagarama" },
];

// --- Vital signs (Figma overview) ---
// NOTE: vitals are physical measurements ENTERED BY THE CLINICIAN, not extracted by AI
// from the transcript — so they carry no AI "Source". AI's only role here is an advisory
// note that reasons over the values the clinician recorded (see VITAL_ADVISORY).
export interface VitalRow {
  key: "pb" | "pulse" | "temp" | "resp" | "weight";
  label: string;
  value: string;
  tone: "green" | "yellow" | "red" | "blue";
}
export const VITALS_LATEST: VitalRow[] = [
  { key: "pb", label: "PB (Mm/Hg):", value: "110/30", tone: "green" },
  { key: "pulse", label: "Pulse (Beat/Min)", value: "60", tone: "yellow" },
  { key: "temp", label: "Temp (OC)", value: "60", tone: "red" },
  { key: "resp", label: "Resp. Rate (Breath/Min)", value: "60", tone: "blue" },
  { key: "weight", label: "Weight (Kg)", value: "60", tone: "yellow" },
];
export const VITAL_GROUPS = ["Yesterday: 02:00 pa", "Today: 08:00 am", "Today: 06:00 pm"];

// Vital signs carry NO AI. They are measured by the nurse at the bedside with equipment.
// The AI never fills them, never sources them, and shows no advisory on them. Any reasoning
// that *uses* a vital value lives downstream — in the differential / treatment suggestions,
// which reference "the vitals you recorded".

// --- Differential diagnosis ---
export const DIAGNOSIS_OPTIONS = ["HP: Health post diagnosis", "Presumptive diagnosis", "Confirmed diagnosis"];

// --- Laboratory ---
export const LAB_CATEGORIES = ["Laboratory", "Radiology", "Audiology"];
export const LAB_ORDER_TABS = ["Lab Order", "Lab Result"];
export const LAB_SAMPLES = ["Blood", "Urine", "Serum", "Stool", "Vaginal fluid", "Sputum", "Urethral"];
// Lab Order catalog: each sample type swaps its panels + tests.
export const LAB_CATALOG: Record<string, { panels: string[]; tests: string[] }> = {
  Blood: {
    panels: ["Complete Blood Count", "White Blood Cell Count"],
    tests: [
      "White blood cells", "Hematocrit", "Peripheral Blood Smear", "Full Blood Count (FBC/NFS)",
      "Red blood cells", "Mean corpuscular volume", "Monocytes", "Lymphocytes",
      "Hemoglobin", "Platelets", "Red Blood Count - RBC", "Hemoglobin - HGB",
    ],
  },
  Urine: {
    panels: ["Urine Sediment"],
    tests: ["Blood/RBCs", "Epithelial cells", "Yeast cells", "Leucocytes", "Crystals", "Urine Grain stain", "Appearance", "Casts"],
  },
  Serum: {
    panels: ["Liver Function", "Renal Function"],
    tests: ["ALT", "AST", "Bilirubin", "Creatinine", "Urea", "Albumin", "Sodium", "Potassium"],
  },
  Stool: { panels: ["Stool Analysis"], tests: ["Occult blood", "Ova & parasites", "Stool culture", "Reducing substances"] },
  "Vaginal fluid": { panels: ["Wet Mount"], tests: ["pH", "Whiff test", "Clue cells", "Yeast", "Trichomonas"] },
  Sputum: { panels: ["Sputum Analysis"], tests: ["Gram stain", "AFB smear", "Culture", "Cytology"] },
  Urethral: { panels: ["Urethral Swab"], tests: ["Gram stain", "Culture", "NAAT (GC/CT)"] },
};

export interface LabResult {
  test: string;
  range: string;
  result: string;
  status: "within" | "below" | "high";
  comment: string;
  // AI's read on an ABNORMAL result — what it might indicate. Shown only on out-of-range rows.
  // The result value itself comes from the technician; the AI only interprets it.
  aiFlag?: string;
}
export const LAB_RESULTS: LabResult[] = [
  { test: "Peripheral Blood Smear", range: "4.0 – 11.0", result: "8.2", status: "within", comment: "Comment goes here" },
  {
    test: "Protein in Urine (Albuminuria)",
    range: "0 – 20",
    result: "35",
    status: "high",
    comment: "Comment goes here",
    aiFlag: "Above range — proteinuria. Correlate with blood pressure and renal function.",
  },
  {
    test: "Hemoglobin - HGB",
    range: "13.0 – 17.0",
    result: "10.1",
    status: "below",
    comment: "2024/08/06 09:32:21",
    aiFlag: "Below range — mild anaemia, which may be contributing to the breathlessness.",
  },
];

// Radiology — request groups + results.
export const RADIOLOGY_TABS = ["Radiology Request", "Radiology Result"];
export const RADIOLOGY_GROUPS: Record<string, string[]> = {
  "X-Ray": ["Chest", "Pelvis Right", "Pelvis Left", "Spine Cervical", "Cervical Thoracic", "Cervical Lumbar"],
  "CT Scan": ["CT Brain", "CT Angiography Head", "CT Angiography Neck", "CT Angiography Chest", "CT Chest", "CT Abdomen", "CT Pelvis", "CT Spine"],
  "Ultrasound": ["FAST", "Abdominal", "Obstetric", "Cardiac", "Vascular"],
};
const RAD_COMMENT =
  "Cardiac silhouette within normal limits. Pulmonary vasculature is normal in distribution and calibre. Both lung fields are clear with no focal consolidation, mass lesion, or pneumothorax identified.";
export const RADIOLOGY_RESULTS: Record<string, { test: string; comment: string }[]> = {
  "X-Ray": [
    { test: "Chest", comment: RAD_COMMENT },
    { test: "Pelvis Right", comment: RAD_COMMENT },
  ],
  "CT Scan": [
    { test: "CT Brain", comment: RAD_COMMENT },
    { test: "CT Angiography Head", comment: RAD_COMMENT },
    { test: "CT Pelvis", comment: RAD_COMMENT },
  ],
  "Ultrasound": [
    { test: "Abdominal", comment: RAD_COMMENT },
    { test: "Obstetric", comment: RAD_COMMENT },
    { test: "Cardiac", comment: RAD_COMMENT },
  ],
};

// Audiology — request tests + results.
export const AUDIOLOGY_TABS = ["Audiology Request", "Audiology Result"];
export const AUDIOLOGY_TESTS = [
  "Otoacoustic Emissions", "Pure Tone Audiometry", "Tympanometry", "Acoustic Reflexes",
  "Tinnitus Matching", "Electronystagmography", "Hearing Aids Fitting", "Assistive Listening Devices",
];
export const AUDIOLOGY_RESULTS = [
  { test: "Pure Tone Audiometry", comment: RAD_COMMENT },
  { test: "Tympanometry", comment: RAD_COMMENT },
  { test: "Acoustic Reflexes", comment: RAD_COMMENT },
];

// --- Procedures ---
export const PROCEDURE_TABS = ["Procedures", "Submitted Procedures"];
export const PROCEDURE_OPTIONS = ["HP: Health post diagnosis", "Presumptive diagnosis", "Confirmed diagnosis"];
export const SERVICE_TABS = ["General Services", "Nursing Procedures", "Consumables"];

// Each service tab lists selectable items; Nursing/Consumables also take a quantity.
export const PROCEDURE_SERVICES: Record<string, { items: string[]; quantity: boolean }> = {
  "General Services": { items: ["Consultation", "Dressing change", "Observation bed", "Wound care"], quantity: false },
  "Nursing Procedures": { items: ["Injection (IM)", "IV cannulation", "Nebulisation", "Wound suturing"], quantity: true },
  Consumables: { items: ["Syringe 5ml", "Gloves (pair)", "Gauze pad", "IV cannula"], quantity: true },
};

// --- Prescribe ---
export const MEDICINE_OPTIONS = [
  "Folic Acid", "Tranexamic acid", "Aminocaproic acid", "Aminophenazone", "Andexanet alfa",
  "Salbutamol inhaler", "Amoxicillin 500mg", "Paracetamol 500mg",
];

// --- Patient movements ---
export const ADMIT_DEPARTMENTS = ["Emergency", "Maternity", "Pediatrics", "Surgery", "General Ward", "Outpatient"];
export const TRANSFER_HOSPITALS = ["Queen Elizabeth Hospital", "Bayview Hospital", "Central Referral Hospital", "District Hospital"];

export interface TranscriptLine {
  speaker: "Nurse" | "Patient";
  text: string;
}

export const TRANSCRIPT: TranscriptLine[] = [
  { speaker: "Nurse", text: "Good morning. How are you feeling today?" },
  { speaker: "Patient", text: "I've had difficulty breathing for 2 days now, worse at night." },
  { speaker: "Nurse", text: "Any chest pain or fever?" },
  { speaker: "Patient", text: "No fever. Just wheezing and fast breathing." },
  { speaker: "Nurse", text: "How many breaths per minute roughly?" },
  { speaker: "Patient", text: "Very fast — the monitor showed around fifty." },
];

// How AI surfaces in a section while a consultation is documented:
//  - "none"     → idle / declined: no AI involvement
//  - "suggest"  → post-recording review: AI proposes items the clinician accepts/dismisses
//  - "accepted" → finalised: the clinician already accepted the AI items; shown committed + locked
export type AiMode = "none" | "suggest" | "accepted";

// The evidence behind any AI output. The reviewers' core point: AI must always say WHY.
// There are TWO kinds of provenance and a suggestion may carry either or both:
//  - `source`    → it was HEARD in the consultation; "Source" jumps to those TRANSCRIPT turns
//  - `guideline` → it came from clinical KNOWLEDGE (not said in the room); cite the reference
//  `rationale` is the plain-language reasoning shown in both cases.
//  `warning` is a safety flag (allergy collision, interaction, dose) — surfaced, never blocking.
// Clinical action category (H1000 CDS taxonomy). Each AI suggestion is classified by what
// the clinician should DO, with a colour + priority that are consistent across every step:
// red = most urgent / critical, amber = important soon, blue = needs referral/escalation,
// green = manageable at the health centre, gray = unlikely / avoid. (Lower priority = more urgent.)
export interface AiCategory {
  label: string;
  color: "red" | "amber" | "blue" | "green" | "gray";
  priority: number;
}

export interface AiBasis {
  source?: number[];
  rationale?: string;
  guideline?: string;
  warning?: { kind: "allergy" | "interaction" | "dose"; text: string };
  category?: AiCategory;
}

export interface AiSuggestion extends AiBasis {
  id: string;
  label: string;
}

// Transcript turns (indices into TRANSCRIPT) that back the AI-extracted chief complaint.
export const AI_SOURCES = {
  complaint: [1, 3, 5], // shortness of breath / wheezing / fast breathing
} as const;

export interface AiField {
  label: string;
  status: "Accepted" | "Edited" | "Flagged";
}

export const SIGN_FINALISE_FIELDS: AiField[] = [
  { label: "Chief Complaint", status: "Accepted" },
  { label: "Resp Rate", status: "Accepted" },
  { label: "Diagnosis", status: "Accepted" },
  { label: "Medication suggestion", status: "Accepted" },
];

export const QUALITY_GATE = "Complete — 8 fields extracted with high confidence · De-ID applied";

// --- Journey D: reviewing-clinician queue (PRD §6 Journey D) ---
// Consultations the quality gate flagged. The reviewer sees the flag reason, the transcript
// span it was derived from, and the extracted data — then dismisses, requests review, or escalates.
export interface ReviewItem {
  patient: string;
  identifier: string;
  flagKind: "allergy" | "dose" | "contradiction";
  flag: string;
  transcript: string;
  extracted: string;
}
export const REVIEW_QUEUE: ReviewItem[] = [
  {
    patient: "Abayo Yvette",
    identifier: "GIKUN37353",
    flagKind: "allergy",
    flag: "Allergy collision — Amoxicillin prescribed to a patient allergic to Penicillins.",
    transcript: 'Patient: "Last time amoxicillin gave me a bad rash all over."',
    extracted: "Rx: Amoxicillin 500mg TID · Allergy on file: Penicillins",
  },
  {
    patient: "Abraham Kamau",
    identifier: "GIKUN37353",
    flagKind: "dose",
    flag: "Dose anomaly — Paracetamol 5 g/day exceeds the 4 g/day maximum.",
    transcript: 'Nurse: "Take two grams, three times a day for the pain."',
    extracted: "Rx: Paracetamol 2g × 3/day = 6g/day",
  },
  {
    patient: "Ngoga Frank",
    identifier: "GIKUN37353",
    flagKind: "contradiction",
    flag: "Contradiction — transcript states no fever, but a temperature of 39°C was recorded.",
    transcript: 'Patient: "No fever, just the cough and a runny nose."',
    extracted: "Vitals: Temp 39°C · HPI: “no fever”",
  },
];
export const REVIEW_ACTIONS = ["Dismiss flag", "Request review", "Escalate"] as const;

// --- AI advisory suggestions (PRD 5.9) ---
// Each suggestion explains WHY: either it was heard in the consultation (`source`) or it
// comes from clinical guidance (`guideline`). The clinician accepts or dismisses each.

// Differential diagnosis: one suggestion grounded in the conversation, one proposed purely
// from clinical guidance (the "consider also" case the reviewers asked for).
export const AI_DIAGNOSIS_SUGGESTIONS: AiSuggestion[] = [
  {
    id: "dx-asthma",
    label: "J45.9 — Asthma exacerbation",
    category: { label: "Initiate & refer", color: "amber", priority: 2 },
    source: [1, 3, 5],
    rationale:
      "Wheezing and progressively worsening shortness of breath over 2 days; known asthma since 2020 with no relief from Salbutamol today.",
  },
  {
    id: "dx-pneumonia",
    label: "J18.9 — Pneumonia (consider to exclude)",
    category: { label: "Refer for Dx", color: "blue", priority: 3 },
    guideline: "IMCI · Acute Respiratory Illness",
    rationale:
      "Tachypnoea ~50–60/min without bronchodilator response can indicate a lower-respiratory infection. Not raised in the conversation — proposed from clinical guidance.",
  },
];

// Investigations the AI proposes (PRD 5.9 "tests that may be appropriate").
export const AI_LAB_SUGGESTIONS: AiSuggestion[] = [
  {
    id: "lab-cxr",
    label: "Chest X-Ray (PA) — Radiology",
    category: { label: "Essential", color: "red", priority: 1 },
    guideline: "Acute Respiratory Illness pathway",
    rationale: "Differentiate an asthma exacerbation from pneumonia given the tachypnoea.",
  },
  {
    id: "lab-fbc",
    label: "Full Blood Count (FBC/NFS) — Blood",
    category: { label: "Supportive", color: "amber", priority: 2 },
    guideline: "Breathlessness work-up",
    rationale: "Screen for infection or anaemia that could be contributing to the breathlessness.",
  },
];

// AI interpretation of returned lab results (the reviewers asked: don't just say "added by
// technician" — analyse them). Shown on the Lab Result view.
export const AI_LAB_INTERPRETATION =
  "Haemoglobin 10.1 g/dL is below range — mild anaemia may be adding to the breathlessness. Urine protein mildly raised; correlate clinically. Other values within range. Consider iron studies if symptoms persist.";

export const AI_PROCEDURE_SUGGESTIONS: AiSuggestion[] = [
  {
    id: "proc-neb",
    label: "Nebulisation therapy",
    category: { label: "Perform at HC", color: "green", priority: 2 },
    source: [3, 5],
    rationale: "Active wheeze with respiratory distress — deliver a bronchodilator.",
  },
  {
    id: "proc-spo2",
    label: "O₂ saturation monitoring",
    category: { label: "Perform at HC", color: "green", priority: 2 },
    source: [5],
    rationale: "Reported respiratory rate around 50/min — monitor oxygenation.",
  },
];

export const AI_PRESCRIPTION_SUGGESTIONS: AiSuggestion[] = [
  {
    id: "rx-salb",
    label: "Salbutamol 2.5mg nebuliser PRN",
    category: { label: "Prescribe at HC", color: "green", priority: 2 },
    source: [1, 3],
    rationale: "First-line bronchodilator for an acute wheeze.",
  },
  {
    id: "rx-pred",
    label: "Prednisolone 40mg OD × 5 days",
    category: { label: "Prescribe at HC", color: "green", priority: 2 },
    guideline: "Asthma exacerbation · oral corticosteroid",
    rationale: "Short oral steroid course for a moderate exacerbation.",
  },
  {
    id: "rx-amox",
    label: "Amoxicillin 500mg TID × 5 days",
    category: { label: "After MD review", color: "amber", priority: 3 },
    guideline: "Community-acquired pneumonia",
    rationale: "Would cover bacterial pneumonia if confirmed on imaging.",
    warning: {
      kind: "allergy",
      text: "Check for allergies — this may be counter-effective. Patient is allergic to Penicillins, and Amoxicillin is a penicillin.",
    },
  },
];

// --- Pre-consultation context (PRD 5.1 — shown in idle mode before recording) ---
export const PRE_CONSULTATION = {
  knownConditions: ["Benign hypertension", "Asthma (since 2020)", "Nicotine dependence"],
  allergies: "Penicillins (Skin lashes)",
  lastVisit: { date: "2024-10-12", summary: "Acute respiratory complaint — difficulty breathing" },
  currentMeds: ["Actos 30Mg oral tablet", "Altoprev 400Mg oral tablet extended"],
};
