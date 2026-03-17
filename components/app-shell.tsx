import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/leads", label: "Leads" },
  { href: "/application-review", label: "Application Review" },
  { href: "/automation-settings", label: "Automation Settings" },
  { href: "/privacy-audit", label: "Privacy & Audit" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="text-lg font-semibold text-slate-900">LeasingFlow</p>
            <p className="text-sm text-slate-500">Leasing operations layer for NSW teams</p>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-slate-200 bg-white px-3 py-1.5">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">{children}</main>
    </div>
  );
}
