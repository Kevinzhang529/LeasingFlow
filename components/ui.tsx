import { ReactNode } from "react";

export function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      {title && <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</h3>}
      {children}
    </section>
  );
}

export function Pill({ text, tone = "default" }: { text: string; tone?: "default" | "success" | "warning" | "danger" }) {
  const classes = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-rose-100 text-rose-700",
  };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${classes[tone]}`}>{text}</span>;
}
