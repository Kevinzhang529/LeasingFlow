import { Card } from "@/components/ui";
import { automationSettings } from "@/lib/mock-data";

export default function AutomationSettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-slate-900">Automation Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Configure proactive follow-up and no-show recovery workflows.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {automationSettings.map((setting) => (
          <Card key={setting.key}>
            <h2 className="text-base font-semibold text-slate-900">{setting.label}</h2>
            <p className="mt-1 text-sm text-slate-500">{setting.description}</p>
            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">{setting.value}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
