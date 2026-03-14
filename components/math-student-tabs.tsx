"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mathTabs = [
  {
    href: "/student/math-demo",
    label: "首页",
    shortLabel: "Dashboard"
  },
  {
    href: "/student/math-demo/metrics",
    label: "三项总表",
    shortLabel: "Progress"
  },
  {
    href: "/student/math-demo/fixes",
    label: "修复记录",
    shortLabel: "Fix Log"
  },
  {
    href: "/student/math-demo/compare",
    label: "前后对比",
    shortLabel: "Compare"
  }
];

export function MathStudentTabs() {
  const pathname = usePathname();

  return (
    <nav className="soft-scrollbar -mx-1 overflow-x-auto px-1">
      <div className="flex min-w-max gap-2">
        {mathTabs.map((tab) => {
          const active = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-2xl border px-4 py-3 transition ${
                active
                  ? "border-[rgba(27,92,255,0.22)] bg-[var(--brand)] text-white shadow-sm"
                  : "border-[var(--line)] bg-[var(--panel)] text-[var(--ink)]"
              }`}
            >
              <p className="text-sm font-semibold">{tab.label}</p>
              <p
                className={`mt-1 text-[11px] uppercase tracking-[0.2em] ${
                  active ? "text-white/75" : "text-[var(--muted)]"
                }`}
              >
                {tab.shortLabel}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
