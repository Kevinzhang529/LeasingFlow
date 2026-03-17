import { Card, Pill } from "@/components/ui";
import { applications, getLeadById, getPropertyById } from "@/lib/mock-data";

export default function ApplicationReviewPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-slate-900">Application Review</h1>
        <p className="mt-1 text-sm text-slate-500">Checklist-first review to standardise renter information collection.</p>
      </section>
      <div className="grid gap-4 lg:grid-cols-2">
        {applications.map((application) => {
          const lead = getLeadById(application.leadId);
          const property = getPropertyById(application.propertyId);
          return (
            <Card key={application.id}>
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">{lead?.name}</h2>
                  <p className="text-sm text-slate-500">{property?.name}</p>
                </div>
                <Pill text={application.stage} tone={application.stage === "ready for review" ? "success" : "warning"} />
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-slate-900">Uploaded documents</p>
                  <ul className="mt-1 list-disc pl-5 text-slate-600">
                    {application.uploadedDocs.map((doc) => <li key={doc}>{doc}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Missing documents</p>
                  {application.missingDocs.length ? (
                    <ul className="mt-1 list-disc pl-5 text-rose-600">
                      {application.missingDocs.map((doc) => <li key={doc}>{doc}</li>)}
                    </ul>
                  ) : (
                    <p className="mt-1 text-emerald-700">No missing documents.</p>
                  )}
                </div>
                <p className="text-slate-600"><span className="font-medium text-slate-900">Notes:</span> {application.notes}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
