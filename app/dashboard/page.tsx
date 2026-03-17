import { KpiCards } from "@/components/kpi-cards";
import { LeadsTable } from "@/components/leads-table";
import { PipelineOverview } from "@/components/pipeline-overview";
import { Card } from "@/components/ui";
import { leads } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Track leasing workflow from enquiry to application readiness.</p>
      </section>
      <KpiCards />
      <PipelineOverview />
      <Card title="AI-assisted workflow highlights">
        <div className="grid gap-3 md:grid-cols-3 text-sm text-slate-600">
          <p>• Intent classification helps prioritise high-intent leads without collecting extra personal data early.</p>
          <p>• Follow-up drafts reduce response lag and standardise communication tone across the leasing team.</p>
          <p>• Document gap summaries flag missing items only at application stage to align with privacy-aware design.</p>
        </div>
      </Card>
      <LeadsTable rows={leads.slice(0, 6)} />
    </div>
  );
}
