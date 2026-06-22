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

// AI-extracted / finalised chief complaint shown once recording has produced a draft.
export const AI_COMPLAINT =
  "Patient presents with shortness of breath and wheezing for 2 days, progressively worsening at night. Reports tachypnoea approximately 50–60 breaths per minute. Known asthma since 2020, Salbutamol PRN not providing relief today.";

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
export interface VitalRow {
  key: "pb" | "pulse" | "temp" | "resp" | "weight";
  label: string;
  value: string;
  tone: "green" | "yellow" | "red" | "blue";
  // When present, this row was extracted by AI — it shows an "Ai" badge + Source link
  // that highlights these TRANSCRIPT turn indices.
  aiSource?: number[];
}
export const VITALS_LATEST: VitalRow[] = [
  { key: "pb", label: "PB (Mm/Hg):", value: "110/30", tone: "green" },
  { key: "pulse", label: "Pulse (Beat/Min)", value: "60", tone: "yellow", aiSource: [4, 5] },
  { key: "temp", label: "Temp (OC)", value: "60", tone: "red" },
  { key: "resp", label: "Resp. Rate (Breath/Min)", value: "60", tone: "blue", aiSource: [4, 5] },
  { key: "weight", label: "Weight (Kg)", value: "60", tone: "yellow" },
];
export const VITAL_GROUPS = ["Yesterday: 02:00 pa", "Today: 08:00 am", "Today: 06:00 pm"];

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
}
export const LAB_RESULTS: LabResult[] = [
  { test: "Peripheral Blood Smear", range: "4.0 – 11.0", result: "8.2", status: "within", comment: "Comment goes here" },
  { test: "Protein in Urine (Albuminuria)", range: "0 – 20", result: "35", status: "below", comment: "Comment goes here" },
  { test: "Hemoglobin - HGB", range: "13.0 – 17.0", result: "10.1", status: "high", comment: "2024/08/06 09:32:21" },
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

// Transcript turns (indices into TRANSCRIPT) that back each AI-extracted entry.
// Clicking a field's "Source" opens the AI transcription and highlights these lines.
export const AI_SOURCES = {
  complaint: [1, 3, 5], // shortness of breath / wheezing / fast breathing
  diagnoses: [1, 3, 5], // respiratory symptoms → asthma / pneumonia
  procedures: [3, 5], // wheezing + fast breathing → nebulisation / O₂ monitoring
  prescriptions: [1, 3], // breathing difficulty + wheezing → bronchodilator / steroid
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

// --- AI suggestion lists (shown inline in sections before nurse confirms) ---
export const AI_DIAGNOSES = [
  { code: "J45.9", name: "Asthma, unspecified" },
  { code: "J18.9", name: "Pneumonia, unspecified" },
];

export const AI_PROCEDURES = [
  { name: "Nebulisation therapy" },
  { name: "O₂ saturation monitoring" },
];

export const AI_PRESCRIPTIONS = [
  { name: "Salbutamol 2.5mg nebuliser PRN" },
  { name: "Prednisolone 40mg OD 5 days" },
];

// --- Pre-consultation context (PRD 5.1 — shown in idle mode before recording) ---
export const PRE_CONSULTATION = {
  knownConditions: ["Benign hypertension", "Asthma (since 2020)", "Nicotine dependence"],
  allergies: "Penicillins (Skin lashes)",
  lastVisit: { date: "2024-10-12", summary: "Acute respiratory complaint — difficulty breathing" },
  currentMeds: ["Actos 30Mg oral tablet", "Altoprev 400Mg oral tablet extended"],
};
