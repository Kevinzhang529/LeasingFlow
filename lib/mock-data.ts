import { Application, AuditEvent, AutomationSetting, Lead, Property } from "@/lib/types";

export const properties: Property[] = [
  { id: "p1", name: "8/22 Coogee Bay Rd", suburb: "Coogee", weeklyRent: 980, bedrooms: 2 },
  { id: "p2", name: "14 York St", suburb: "Sydney CBD", weeklyRent: 1200, bedrooms: 2 },
  { id: "p3", name: "2/11 Pacific Hwy", suburb: "North Sydney", weeklyRent: 860, bedrooms: 1 },
];

export const leads: Lead[] = [
  {
    id: "l1", name: "Olivia Chen", propertyId: "p1", source: "Domain", stage: "enquiry", riskGap: "Medium", nextAction: "Send first inspection options", firstResponseMinutes: 12, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Today, 9:06 AM", status: "done" },
      { label: "Booking link sent", at: "Today, 9:18 AM", status: "done" },
      { label: "Reminder sent", at: "Pending", status: "pending" },
      { label: "Inspection attended", at: "Pending", status: "pending" },
      { label: "Application started", at: "Pending", status: "pending" }
    ],
    ai: {
      intentClassification: "High intent — wants move-in within 3 weeks.",
      followUpDraft: "Hi Olivia, thanks for your enquiry on 8/22 Coogee Bay Rd. I’ve opened Saturday and Monday slots—would you like me to reserve one for you?",
      missingDocumentsSummary: "Too early for document collection. Keep to minimal contact details until application stage."
    }
  },
  {
    id: "l2", name: "Noah Patel", propertyId: "p1", source: "realestate.com.au", stage: "booked inspection", riskGap: "Low", nextAction: "Inspection reminder at T-24h", firstResponseMinutes: 8, inspectionDate: "Thu 4:30 PM", consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Yesterday, 10:12 AM", status: "done" },
      { label: "Booking link sent", at: "Yesterday, 10:20 AM", status: "done" },
      { label: "Reminder sent", at: "Scheduled for tomorrow", status: "pending" },
      { label: "Inspection attended", at: "Pending", status: "pending" },
      { label: "Application started", at: "Pending", status: "pending" }
    ],
    ai: {
      intentClassification: "Warm intent — compares 2-bedroom options in eastern suburbs.",
      followUpDraft: "Hi Noah, looking forward to seeing you at Thursday’s inspection. I’ll share parking details one hour before.",
      missingDocumentsSummary: "No document gap yet. Trigger application checklist only after attendance."
    }
  },
  {
    id: "l3", name: "Ava Nguyen", propertyId: "p2", source: "Referral", stage: "attended", riskGap: "Medium", nextAction: "Nudge to start application", firstResponseMinutes: 18, inspectionDate: "Tue 5:00 PM", consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Mon, 11:03 AM", status: "done" },
      { label: "Booking link sent", at: "Mon, 11:21 AM", status: "done" },
      { label: "Reminder sent", at: "Tue, 8:00 AM", status: "done" },
      { label: "Inspection attended", at: "Tue, 5:42 PM", status: "done" },
      { label: "Application started", at: "Pending", status: "pending" }
    ],
    ai: {
      intentClassification: "Likely renter — asked about lease term flexibility.",
      followUpDraft: "Hi Ava, great meeting you at 14 York St. If helpful I can send the secure application link now and hold your place in review order.",
      missingDocumentsSummary: "Pending income proof and ID upload once application starts."
    }
  },
  {
    id: "l4", name: "Ethan Brooks", propertyId: "p2", source: "Domain", stage: "application in progress", riskGap: "High", nextAction: "Request missing payslips", firstResponseMinutes: 15, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Sun, 2:15 PM", status: "done" },
      { label: "Booking link sent", at: "Sun, 2:28 PM", status: "done" },
      { label: "Reminder sent", at: "Mon, 8:30 AM", status: "done" },
      { label: "Inspection attended", at: "Mon, 6:05 PM", status: "done" },
      { label: "Application started", at: "Mon, 8:16 PM", status: "done" }
    ],
    ai: {
      intentClassification: "Committed applicant — wants quick approval.",
      followUpDraft: "Hi Ethan, thanks for submitting your application. We still need your latest two payslips to progress this for owner review today.",
      missingDocumentsSummary: "Missing 2 latest payslips and one supporting bank statement."
    }
  },
  {
    id: "l5", name: "Mia Wilson", propertyId: "p3", source: "realestate.com.au", stage: "ready for review", riskGap: "Low", nextAction: "Assign to PM for owner pack", firstResponseMinutes: 6, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Fri, 9:40 AM", status: "done" },
      { label: "Booking link sent", at: "Fri, 9:46 AM", status: "done" },
      { label: "Reminder sent", at: "Sat, 10:00 AM", status: "done" },
      { label: "Inspection attended", at: "Sat, 11:20 AM", status: "done" },
      { label: "Application started", at: "Sat, 12:01 PM", status: "done" }
    ],
    ai: {
      intentClassification: "Ready-to-close applicant.",
      followUpDraft: "Hi Mia, your application is complete and queued for review. We’ll update you once the owner has considered it.",
      missingDocumentsSummary: "No critical document gaps detected."
    }
  },
  { id: "l6", name: "Liam Davis", propertyId: "p3", source: "Walk-in", stage: "enquiry", riskGap: "High", nextAction: "Call to confirm interest", firstResponseMinutes: 33, consentCaptured: false,
    timeline: [
      { label: "Enquiry received", at: "Today, 10:51 AM", status: "done" },
      { label: "Booking link sent", at: "Pending", status: "pending" },
      { label: "Reminder sent", at: "Pending", status: "pending" },
      { label: "Inspection attended", at: "Pending", status: "pending" },
      { label: "Application started", at: "Pending", status: "pending" }
    ], ai: { intentClassification: "Unclear intent — incomplete contact details.", followUpDraft: "Hi Liam, thanks for dropping in today. Can I confirm your preferred inspection time for 2/11 Pacific Hwy?", missingDocumentsSummary: "Collect consent and preferred contact method before any further data capture." }},
  { id: "l7", name: "Sophie Clarke", propertyId: "p1", source: "Domain", stage: "booked inspection", riskGap: "Medium", nextAction: "Auto reminder + SMS fallback", firstResponseMinutes: 11, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Wed, 7:15 PM", status: "done" },
      { label: "Booking link sent", at: "Wed, 7:26 PM", status: "done" },
      { label: "Reminder sent", at: "Scheduled", status: "pending" },
      { label: "Inspection attended", at: "Pending", status: "pending" },
      { label: "Application started", at: "Pending", status: "pending" }
    ], ai: { intentClassification: "Strong intent — multiple follow-up questions.", followUpDraft: "Hi Sophie, your Coogee inspection is confirmed. I’ll send access instructions and expected inspection duration shortly.", missingDocumentsSummary: "No document request until post-inspection." }},
  { id: "l8", name: "Jack Turner", propertyId: "p2", source: "Referral", stage: "attended", riskGap: "Low", nextAction: "Share application link", firstResponseMinutes: 9, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Tue, 8:50 AM", status: "done" },
      { label: "Booking link sent", at: "Tue, 8:59 AM", status: "done" },
      { label: "Reminder sent", at: "Wed, 9:00 AM", status: "done" },
      { label: "Inspection attended", at: "Wed, 6:30 PM", status: "done" },
      { label: "Application started", at: "Pending", status: "pending" }
    ], ai: { intentClassification: "Moderate intent — considering move timing.", followUpDraft: "Hi Jack, thanks for attending York St. I can hold your priority position if you start the application today.", missingDocumentsSummary: "Prepare checklist with ID, income proof, and rental ledger." }},
  { id: "l9", name: "Isabella Hart", propertyId: "p3", source: "realestate.com.au", stage: "application in progress", riskGap: "Medium", nextAction: "Request rental ledger", firstResponseMinutes: 14, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Mon, 1:04 PM", status: "done" },
      { label: "Booking link sent", at: "Mon, 1:18 PM", status: "done" },
      { label: "Reminder sent", at: "Tue, 10:00 AM", status: "done" },
      { label: "Inspection attended", at: "Tue, 12:15 PM", status: "done" },
      { label: "Application started", at: "Tue, 12:50 PM", status: "done" }
    ], ai: { intentClassification: "Good fit — stable employment indicated.", followUpDraft: "Hi Isabella, thanks for your submission. To finalise your file we just need your latest rental ledger.", missingDocumentsSummary: "Missing rental ledger only." }},
  { id: "l10", name: "Lucas Reed", propertyId: "p1", source: "Domain", stage: "ready for review", riskGap: "Low", nextAction: "Compile owner summary", firstResponseMinutes: 7, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Thu, 3:40 PM", status: "done" },
      { label: "Booking link sent", at: "Thu, 3:47 PM", status: "done" },
      { label: "Reminder sent", at: "Fri, 8:00 AM", status: "done" },
      { label: "Inspection attended", at: "Fri, 11:45 AM", status: "done" },
      { label: "Application started", at: "Fri, 12:10 PM", status: "done" }
    ], ai: { intentClassification: "Complete application ready.", followUpDraft: "Hi Lucas, your application is now complete and ready for owner review. We’ll keep you updated at each milestone.", missingDocumentsSummary: "No missing documents." }},
  { id: "l11", name: "Charlotte King", propertyId: "p2", source: "realestate.com.au", stage: "booked inspection", riskGap: "Low", nextAction: "Send transport details", firstResponseMinutes: 5, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Today, 8:12 AM", status: "done" },
      { label: "Booking link sent", at: "Today, 8:17 AM", status: "done" },
      { label: "Reminder sent", at: "Scheduled", status: "pending" },
      { label: "Inspection attended", at: "Pending", status: "pending" },
      { label: "Application started", at: "Pending", status: "pending" }
    ], ai: { intentClassification: "High responsiveness expected.", followUpDraft: "Hi Charlotte, your inspection is booked. I’ll message transport and building entry details 1 hour before start.", missingDocumentsSummary: "No document collection yet." }},
  { id: "l12", name: "Benjamin Scott", propertyId: "p3", source: "Referral", stage: "enquiry", riskGap: "Medium", nextAction: "SMS booking link", firstResponseMinutes: 21, consentCaptured: true,
    timeline: [
      { label: "Enquiry received", at: "Yesterday, 6:48 PM", status: "done" },
      { label: "Booking link sent", at: "Yesterday, 7:09 PM", status: "done" },
      { label: "Reminder sent", at: "Pending", status: "pending" },
      { label: "Inspection attended", at: "Pending", status: "pending" },
      { label: "Application started", at: "Pending", status: "pending" }
    ], ai: { intentClassification: "Potentially price-sensitive lead.", followUpDraft: "Hi Benjamin, I can offer two inspection windows this week for Pacific Hwy. Which one suits best?", missingDocumentsSummary: "No document request yet; maintain minimal info at enquiry stage." }}
];

export const applications: Application[] = [
  { id: "a1", leadId: "l4", propertyId: "p2", stage: "in progress", uploadedDocs: ["Photo ID", "Bank statement"], missingDocs: ["2 x latest payslips"], notes: "Applicant requested same-day processing." },
  { id: "a2", leadId: "l5", propertyId: "p3", stage: "ready for review", uploadedDocs: ["Photo ID", "Payslips", "Employment letter", "Rental ledger"], missingDocs: [], notes: "Complete pack. Suitable for owner review." },
  { id: "a3", leadId: "l9", propertyId: "p3", stage: "in progress", uploadedDocs: ["Photo ID", "Payslips", "Employment letter"], missingDocs: ["Rental ledger"], notes: "One missing document; automated reminder set." },
  { id: "a4", leadId: "l10", propertyId: "p1", stage: "ready for review", uploadedDocs: ["Photo ID", "Payslips", "Rental ledger", "Reference contact"], missingDocs: [], notes: "Ready for owner packet generation." },
];

export const automationSettings: AutomationSetting[] = [
  { key: "reminder-timing", label: "Inspection reminder timing", description: "Automatic reminders before booked inspections.", value: "T-24h email + T-2h SMS" },
  { key: "no-show-recovery", label: "No-show recovery", description: "Workflow when prospect misses inspection.", value: "Auto rebook link + follow-up in 2h" },
  { key: "stalled-alerts", label: "Stalled lead alerts", description: "Alert leasing manager if no activity.", value: "No stage movement for 36h" },
];

export const auditEvents: AuditEvent[] = [
  { id: "e1", actor: "System", action: "Enquiry form submitted with minimal fields (name, mobile, email)", timestamp: "Today 9:06 AM", dataScope: "enquiry-minimal" },
  { id: "e2", actor: "LeasingFlow Bot", action: "Consent checkbox logged before inspection booking", timestamp: "Today 9:18 AM", dataScope: "enquiry-minimal" },
  { id: "e3", actor: "Agent - Sarah P", action: "Application link issued after attended inspection", timestamp: "Tue 6:00 PM", dataScope: "application-expanded" },
  { id: "e4", actor: "Applicant", action: "Uploaded identity and income documents", timestamp: "Tue 7:15 PM", dataScope: "application-expanded" },
  { id: "e5", actor: "System", action: "Document gap summary generated (mock AI)", timestamp: "Tue 7:17 PM", dataScope: "application-expanded" },
];

export const pipelineOrder = ["enquiry", "booked inspection", "attended", "application in progress", "ready for review"] as const;

export const getPropertyById = (id: string) => properties.find((property) => property.id === id);
export const getLeadById = (id: string) => leads.find((lead) => lead.id === id);
