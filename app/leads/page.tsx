import { LeadsTable } from "@/components/leads-table";
import { leads } from "@/lib/mock-data";

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-slate-900">Leads</h1>
        <p className="mt-1 text-sm text-slate-500">Operational view to prevent lead leakage and enforce consistent next actions.</p>
      </section>
      <LeadsTable rows={leads} />
    </div>
  );
}
