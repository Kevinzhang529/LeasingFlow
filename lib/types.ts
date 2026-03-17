export type PipelineStage =
  | "enquiry"
  | "booked inspection"
  | "attended"
  | "application in progress"
  | "ready for review";

export type LeadSource = "Domain" | "realestate.com.au" | "Referral" | "Walk-in";

export interface Property {
  id: string;
  name: string;
  suburb: string;
  weeklyRent: number;
  bedrooms: number;
}

export interface TimelineEvent {
  label: string;
  at: string;
  status: "done" | "pending";
}

export interface MockAI {
  intentClassification: string;
  followUpDraft: string;
  missingDocumentsSummary: string;
}

export interface Lead {
  id: string;
  name: string;
  propertyId: string;
  source: LeadSource;
  stage: PipelineStage;
  riskGap: "Low" | "Medium" | "High";
  nextAction: string;
  firstResponseMinutes: number;
  inspectionDate?: string;
  timeline: TimelineEvent[];
  ai: MockAI;
  consentCaptured: boolean;
}

export interface Application {
  id: string;
  leadId: string;
  propertyId: string;
  stage: "in progress" | "ready for review";
  uploadedDocs: string[];
  missingDocs: string[];
  notes: string;
}

export interface AutomationSetting {
  key: string;
  label: string;
  description: string;
  value: string;
}

export interface AuditEvent {
  id: string;
  actor: string;
  action: string;
  timestamp: string;
  dataScope: "enquiry-minimal" | "application-expanded";
}
