import { Card, Pill } from "@/components/ui";
import { auditEvents, leads } from "@/lib/mock-data";

export default function PrivacyAuditPage() {
  const consentCount = leads.filter((lead) => lead.consentCaptured).length;

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-slate-900">Privacy & Audit Log</h1>
        <p className="mt-1 text-sm text-slate-500">Privacy-aware workflow placeholders for NSW rental process stages.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Data minimisation by stage">
          <div className="space-y-3 text-sm text-slate-600">
            <p><span className="font-medium text-slate-900">Enquiry stage:</span> Capture minimal data only (name, contact, property interest).</p>
            <p><span className="font-medium text-slate-900">Application stage:</span> Expand to supporting identity/income documents with explicit consent.</p>
            <p><span className="font-medium text-slate-900">Consent flag:</span> {consentCount}/{leads.length} leads have consent captured in this demo.</p>
          </div>
        </Card>
        <Card title="Compliance boundaries (demo)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>No automated screening decisions in this demo.</li>
            <li>No credit scoring or legal compliance engine included.</li>
            <li>Audit records shown as placeholders for future policy mapping.</li>
          </ul>
        </Card>
      </div>
      <Card title="Activity log">
        <div className="space-y-2">
          {auditEvents.map((event) => (
            <div key={event.id} className="flex flex-col gap-2 rounded-xl border border-slate-100 p-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">{event.action}</p>
                <p className="text-xs text-slate-500">{event.actor} · {event.timestamp}</p>
              </div>
              <Pill text={event.dataScope} tone={event.dataScope === "enquiry-minimal" ? "success" : "warning"} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
