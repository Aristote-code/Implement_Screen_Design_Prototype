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

The gating is **advisory**: a section whose prerequisite isn't met shows a dashed "waiting"
note instead of AI suggestions, but the nurse can still document that section manually at any
time. AI never blocks a clinical action (PRD 5.9). Safety flags (e.g. a penicillin-allergy
collision) are surfaced prominently but still never block — the clinician decides.

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
