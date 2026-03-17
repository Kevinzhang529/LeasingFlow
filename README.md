# LeasingFlow Demo

LeasingFlow is a **workflow automation and leasing operations layer** for Australian property management teams, focused on Sydney/NSW leasing workflows.

> This demo is intentionally **not** a core property management system.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Mock data-first architecture

## Demo pages

- `/dashboard`: KPI cards, pipeline overview, and AI-assisted workflow value summary
- `/leads`: Leads operations table (name, property, source, stage, risk/gap, next action)
- `/leads/[id]`: Lead detail with timeline + mock AI summary
- `/application-review`: Application checklist with uploaded and missing documents
- `/automation-settings`: Reminder timing, no-show recovery, stalled lead alerts
- `/privacy-audit`: Data minimisation and consent/audit placeholders

## Product positioning reflected in UI

- Supports enquiry -> inspection -> application pipeline orchestration
- Designed to reduce lead leakage through structured next actions and reminders
- Standardises renter information collection with explicit document checklist phase
- Privacy-aware stage design:
  - enquiry = minimal data
  - application = expanded data + consent placeholders

## Mock data included

- 3 properties
- 12 leads across all pipeline stages
- inspection and follow-up timeline events
- 4 applications with realistic document completion states
- mocked AI responses for:
  - intent classification
  - follow-up draft
  - missing document summary

Mock records live in `lib/mock-data.ts`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Assumptions

- This is an investor/demo-quality front-end with no backend persistence.
- AI outputs are static/mock and do not call external models.
- Compliance views are placeholders only and not legal advice.

## Suggested extension path (Supabase + OpenAI)

### Supabase integration

1. Create tables: `properties`, `leads`, `lead_events`, `applications`, `documents`, `automation_settings`, `audit_events`.
2. Replace `lib/mock-data.ts` selectors with server data functions in `lib/data/`.
3. Add row-level security policies for agency-level tenancy.
4. Implement webhook/event ingestion for listing portals and messaging providers.

### OpenAI integration

1. Add server route handlers in `app/api/ai/*`.
2. Generate intent labels and follow-up drafts from conversation + lead stage context.
3. Add document-gap summarisation from uploaded doc metadata (not raw files initially).
4. Store generated outputs with audit metadata (`model`, `prompt_version`, `timestamp`).

## Folder structure

```text
app/
  dashboard/
  leads/
    [id]/
  application-review/
  automation-settings/
  privacy-audit/
components/
  app-shell.tsx
  kpi-cards.tsx
  leads-table.tsx
  pipeline-overview.tsx
  ui.tsx
lib/
  mock-data.ts
  types.ts
```
