import { notFound } from "next/navigation";
import { Card, Pill } from "@/components/ui";
import { getLeadById, getPropertyById } from "@/lib/mock-data";

export default function LeadDetailPage({ params }: { params: { id: string } }) {
  const lead = getLeadById(params.id);
  if (!lead) notFound();
  const property = getPropertyById(lead.propertyId);

  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold text-slate-900">{lead.name}</h1>
        <Pill text={lead.stage} />
        <Pill text={`${lead.riskGap} risk`} tone={lead.riskGap === "High" ? "danger" : lead.riskGap === "Medium" ? "warning" : "success"} />
      </section>
      <Card title="Lead profile">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
          <p><span className="font-medium text-slate-900">Property:</span> {property?.name} ({property?.suburb})</p>
          <p><span className="font-medium text-slate-900">Source:</span> {lead.source}</p>
          <p><span className="font-medium text-slate-900">Consent captured:</span> {lead.consentCaptured ? "Yes" : "No"}</p>
        </div>
      </Card>
      <Card title="Timeline">
        <ol className="space-y-3">
          {lead.timeline.map((event) => (
            <li key={event.label} className="flex items-start justify-between rounded-xl border border-slate-100 p-3">
              <div>
                <p className="font-medium text-slate-900">{event.label}</p>
                <p className="text-sm text-slate-500">{event.at}</p>
              </div>
              <Pill text={event.status === "done" ? "Done" : "Pending"} tone={event.status === "done" ? "success" : "warning"} />
            </li>
          ))}
        </ol>
      </Card>
      <Card title="Mock AI summary">
        <div className="space-y-3 text-sm text-slate-600">
          <p><span className="font-medium text-slate-900">Intent classification:</span> {lead.ai.intentClassification}</p>
          <p><span className="font-medium text-slate-900">Suggested follow-up:</span> {lead.ai.followUpDraft}</p>
          <p><span className="font-medium text-slate-900">Missing docs summary:</span> {lead.ai.missingDocumentsSummary}</p>
        </div>
      </Card>
    </div>
  );
}
