import Link from "next/link";
import { Lead } from "@/lib/types";
import { getPropertyById } from "@/lib/mock-data";
import { Card, Pill } from "@/components/ui";

function riskTone(risk: Lead["riskGap"]) {
  if (risk === "Low") return "success";
  if (risk === "Medium") return "warning";
  return "danger";
}

export function LeadsTable({ rows }: { rows: Lead[] }) {
  return (
    <Card title="Lead workflow table">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-slate-500">
            <tr className="border-b border-slate-100">
              <th className="py-2">Name</th><th className="py-2">Property</th><th className="py-2">Source</th><th className="py-2">Stage</th><th className="py-2">Risk / gap</th><th className="py-2">Next action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((lead) => {
              const property = getPropertyById(lead.propertyId);
              return (
                <tr key={lead.id} className="border-b border-slate-100 align-top">
                  <td className="py-3 font-medium text-slate-900"><Link href={`/leads/${lead.id}`}>{lead.name}</Link></td>
                  <td className="py-3 text-slate-600">{property?.name}</td>
                  <td className="py-3 text-slate-600">{lead.source}</td>
                  <td className="py-3"><Pill text={lead.stage} /></td>
                  <td className="py-3"><Pill text={lead.riskGap} tone={riskTone(lead.riskGap)} /></td>
                  <td className="py-3 text-slate-600">{lead.nextAction}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
