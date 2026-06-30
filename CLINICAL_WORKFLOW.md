# eFiche — Clinical Workflow & AI Behaviour (context document)

This is the source of truth for **how the consultation flows** and **where AI is allowed to
help**. It exists because the design must follow the real clinical process, not a convenient
UI order. Read this before changing any section in `src/components/sections/` or the patient
file flow. It encodes the PRD (`AI Enablement - Product Requirements Document`) plus the
clinical corrections raised by the review team (Alphonse, Ziga, Csandrine).

## The golden rule

> The consultation is a **causal chain**. Each step produces the input for the next. AI may
> *suggest* at a step, but only **after** the step it depends on is done. AI never invents a
> step out of order, and never replaces a measurement or a result.

```
Chief complaint        AI DRAFTS it from the recording. Editable by the nurse.
      │
      ▼
Vital signs            NURSE MEASURES at the bedside. NO AI. No badge, no source, no advisory.
      │                (If the patient *said* a value out loud, AI may note it — never fill it.)
      ▼
Differential diagnosis AI SUGGESTS — only after vitals exist. Reasoned from complaint + vitals.
      │                The nurse accepts / dismisses each. Manual entry always allowed.
      ▼
Lab tests (order)      AI SUGGESTS which tests — only after a differential exists.
      │
      ▼
Lab results            TECHNICIAN enters them. NO AI fills results. Once back, AI INTERPRETS:
      │                flags abnormal values and what they may indicate.
      ▼
Working diagnosis      Nurse CONFIRMS — only after results are back.
      │
      ▼
Procedures             AI SUGGESTS — only after the diagnosis is confirmed.
Prescriptions          AI SUGGESTS — only after the diagnosis is confirmed.
                       Every suggestion is checked against allergies / current meds; collisions
                       are flagged (and the flag persists on the committed item).
```

## What AI may and may not do

| Step | AI role | Hard "no" |
|---|---|---|
| Chief complaint | Draft from transcript, with a Source link | — (must stay editable) |
| Vital signs | **Nothing** | No badge, no Source, no auto-fill, no advisory on the measurement |

Vital signs are entered/edited inline by the nurse (Figma `60:27944` "Vitals for pregnant" /
`60:23744` "Physical examination"): a pencil flips the "this visit's vitals" panel into input
fields — BP as Systolic/Diastolic, the rest as number inputs, BMI auto-computed from
weight+height — and a checkmark saves. Saving is what records the vitals and unlocks the AI
differential.

| Differential | Suggest with reasoning (transcript Source **or** cited guideline) | Don't suggest before vitals |
| Lab order | Suggest appropriate tests with reasoning | Don't suggest before a differential |
| Lab results | Interpret / flag abnormal values | Don't enter or invent result values |
| Procedures | Suggest with reasoning | Don't suggest before the diagnosis is confirmed |
| Prescriptions | Suggest with reasoning + allergy/interaction check | Don't suggest before the diagnosis is confirmed |

## Two kinds of "why" (every AI output must explain itself)

1. **Heard in the consultation** → a **Source** link that jumps to the transcript turns.
2. **From clinical knowledge** (not said in the room, e.g. "also consider pneumonia") → a cited
   **guideline reference** + plain reasoning. There is no transcript moment, so there is no
   Source link — the guideline citation is the provenance.

A bare "Ai" badge with no reasoning is not acceptable.

## Advisory, not blocking

The gating is **advisory**: a section whose prerequisite isn't met simply doesn't show its AI
suggestions yet, but the nurse can still document that section manually at any time. AI never
blocks a clinical action (PRD 5.9). Safety flags (e.g. a penicillin-allergy collision) are
surfaced prominently but still never block — the clinician decides.

## The step tracker = clinical progress

The tracker at the top reflects **actual progress through the workflow**, not scroll position:
a step **ticks** once its work is done, the first unfinished step is **current**, later steps
are **pale**. It's the single guide for "where am I" — which is why sections no longer carry
their own "waiting/locked" notes. Completion per step: Medical History (complaint drafted) ·
Physical Examination (vitals recorded) · Diagnosis (a differential exists) · Laboratory (results
back) · Procedures (≥1 added) · Perscribe (≥1 added) · Patient Movements (visit finalised).

## How this maps to the code

- `aiMode: "none" | "suggest" | "accepted"` (`src/data/consultation.ts`), derived in
  `src/screens/PatientFile.tsx` from the consultation `mode`
  (idle/declined → none, post-recording → suggest, finalised → accepted).
- `PatientFile` owns the workflow gates and passes them down:
  `vitalsRecorded` → unlocks Differential · `differentialCount > 0` → unlocks Lab order ·
  `labResultsReady` → reveals results/interpretation and the "Confirm diagnosis" action ·
  `diagnosisConfirmed` → unlocks Procedures + Prescriptions.
- Shared AI UI in `src/components/sections/AiSuggestionCard.tsx`:
  `AiSuggestions` (advisory accept/dismiss block), `AiTag` (committed-row "Why?" provenance
  popover), `LockedNote` (waiting state), `StepDone` (green completion tick).

## Before designing anything clinical

If a clinical detail is unclear (what a measurement means, what order things happen in, what a
result implies), **ask Alphonse or Csandrine on Slack before building it** — don't guess. The
AI build tools will faithfully build whatever they're told; the clinical correctness has to come
from us.

## Known follow-up

- The empty / loading patient-file state still needs the specific Figma frame to match exactly
  (node ID outstanding). Current behaviour: idle = "Start recording" prompt; post-recording =
  review banner; declined = manual-documentation banner; processing = transient toast.
- **Minor non-AI polish (deferrable — flagged Jun 26, not blocking, no AI impact):**
  (a) Procedures → manual **Add** moves items to the Submitted tab but gives no feedback / doesn't
  switch tabs; (b) Prescribe → manual **Submit** adds the row with no confirmation toast (Print
  buttons are decorative). Both are on the manual paths only; the AI accept/undo flows are unaffected.

## Review log — Jun 25 (Sandrine) · "close this week"

Tone shifted positive ("I love the progress"). Feedback is now specific. Deadline: close the
design this week — finish outstanding items, **add no new scope**. Status against the agreed list:

| # | Item | Status |
|---|---|---|
| 1 | Pre-consultation context card (pop-up on opening a patient file) | ✅ Done — `PreConsultModal` (known conditions, allergy in red, last visit, current meds). "Innovate, don't copy theirs." |
| 2 | "Why" reasoning on every AI suggestion | ✅ Done — `AiTag` "Why?" popover. NOTE: shown as plain words (Aristote's earlier call); Sandrine's existing impl uses a transcript **Source ↗ link** + a guideline note — open question whether to restore the clickable Source link. |
| 3 | AI red flag for allergy/drug conflicts | ✅ Done — Amoxicillin shows a red flag; reword to "Check for allergies — this may be counter-effective." (PRD 5.9) |
| 4 | Remove AI from vital signs | ✅ Done — vitals are nurse-measured; inline pencil→inputs→save entry form. |
| 5 | Lab results — remove confirm/mark; auto-populate | ✅ Done — no "mark received"; results populate once a test is ordered; AI flags abnormals + interprets. |
| 6 | Make the AI chat visible / demonstrated | ✅ Done — after recording stops, the AI-assistant panel defaults to the **Chat** sub-tab (seeded Q&A + ask box). |
| 7 | Unconfirm / undo on confirmed AI items | ✅ Done — `AiSuggestions` controlled per-section; confirmed AI items show **Undo** (returns to suggestions); manual entries keep delete. |
| 8 | Right panel content by section | ✅ Done — default tab follows context: recording→transcript, reviewing→AI assistant, treatment→Medical Info (allergies+meds); switches only on context change. |
| 9 | Journey B / C / D screens | ✅ Done — B declined banner; **C (flagged)**: a prescribed safety flag (e.g. Amoxicillin allergy) surfaces at sign-off and must be corrected or justified before signing; **D**: `ReviewQueue` screen (via "Review queue" on Consultations) lists flagged consultations with flag reason + transcript span + extracted data and dismiss/request-review/escalate. |

**All Jun 25 items closed.** Only deliberately-not-done option: the clickable transcript Source ↗ link ("why" stays plain words per Aristote). Parallel task still open: recreating screens as 1440px Figma frames (page id 104:11532; Screen 1 done, Screen 2 partial).

Reaffirmed (3rd meeting): AI is to **smooth the process, not prove a point** — suggestions appear
proactively (before the nurse acts), each with a "why", all editable; the nurse stays the decision-maker.

## Review log — Jun 29 (Dr. Kamugundu, clinical lead)

Clinical-lead review. Big concrete addition: the **H1000 CDS category/colour/priority taxonomy**
(`H1000_Category_Reference_Frontend`). Status:

| Item | Status |
|---|---|
| **Category + colour + priority** on every AI suggestion (DDx / Investigations / Prescriptions / Procedures). red=critical, amber=important soon, blue=refer, green=manageable at HC, gray=unlikely/avoid; sorted most-urgent first | ✅ Done — `AiCategory` on `AiBasis`, `CategoryPill` rendered on suggestion cards + committed rows; suggestions sorted by priority. Mock categories assigned per the H1000 doc. |
| Manual **"Add"** control above AI suggestions ("driver's seat") | ✅ Done — Differential puts the Add field on top, AI suggestions below; Procedures + Prescribe moved their AI block beneath the manual UI. |
| **History of Present Illness** field after Chief Complaint | ✅ Done — Chief Complaint is now one line; HPI is the narrative. Both AI-drafted + editable (`EditableNote`). |
| Transcript looks like WhatsApp → **formal stacked** (speaker beneath speaker), like the MoH product | ✅ Done — `Transcription` now stacks every turn on one side with a coloured left accent (clinician vs patient), no chat bubbles. (Raw transcript stays background-only by design.) |
| AI **vitals trend analysis** over time (5-yr data points, "uncontrolled", suggests labs) — not just ↑/↓ | ⬜ TODO — add an AI trend/insight note on vitals reasoning over historical readings. (Refines "no AI in vitals": AI never *enters* a value, but may *analyse* the trend.) |
| AI gently **flags a wrong manual entry** ("considering the presentation…, this doesn't seem like X — consider Y?") | ⬜ TODO — needs Sandrine to confirm the principle/wording. Don't delegate/scold; suggest. |

Exact category sets per step are in `H1000_Category_Reference_Frontend (1).html` (Downloads). Backend
field is `action_category` (new) / `category` (legacy); `color` + `priority` always returned.
