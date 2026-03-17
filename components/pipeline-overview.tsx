import { leads, pipelineOrder } from "@/lib/mock-data";
import { Card } from "@/components/ui";

export function PipelineOverview() {
  return (
    <Card title="Leasing pipeline overview">
      <div className="grid gap-3 md:grid-cols-5">
        {pipelineOrder.map((stage) => {
          const count = leads.filter((lead) => lead.stage === stage).length;
          return (
            <div key={stage} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">{stage}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{count}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
