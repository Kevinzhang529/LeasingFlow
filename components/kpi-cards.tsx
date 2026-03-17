import { leads } from "@/lib/mock-data";
import { Card } from "@/components/ui";

export function KpiCards() {
  const newEnquiries = leads.filter((lead) => lead.stage === "enquiry").length;
  const inspectionsBooked = leads.filter((lead) => lead.stage === "booked inspection").length;
  const applicationsStarted = leads.filter((lead) => lead.stage === "application in progress" || lead.stage === "ready for review").length;
  const avgResponse = Math.round(leads.reduce((acc, lead) => acc + lead.firstResponseMinutes, 0) / leads.length);

  const cards = [
    { label: "New enquiries", value: newEnquiries, note: "Last 7 days" },
    { label: "Inspections booked", value: inspectionsBooked, note: "Upcoming" },
    { label: "Applications started", value: applicationsStarted, note: "In motion" },
    { label: "Avg first response", value: `${avgResponse} min`, note: "Speed to lead" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <p className="text-sm text-slate-500">{card.label}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{card.value}</p>
          <p className="mt-2 text-xs text-slate-400">{card.note}</p>
        </Card>
      ))}
    </div>
  );
}
