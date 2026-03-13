import { StatusBadge } from "@/components/status-badge";
import { formatCompactTime, formatDateLabel } from "@/lib/time";
import type { FixLog } from "@/lib/types";

type FixLogCardProps = {
  fix: FixLog;
};

export function FixLogCard({ fix }: FixLogCardProps) {
  return (
    <article className="rounded-[24px] border border-[var(--line)] bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
            {fix.module}
          </p>
          <h3 className="mt-2 text-[24px] font-bold leading-tight text-[var(--ink)]">
            {fix.problem_found}
          </h3>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-[var(--muted)]">
            {formatDateLabel(fix.date)}
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--ink)]">
            {formatCompactTime(fix.date)}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            错因逻辑
          </p>
          <p className="mt-2 text-base leading-7 text-[var(--ink)]">
            {fix.error_logic}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            修复动作
          </p>
          <p className="mt-2 text-base leading-7 text-[var(--ink)]">
            {fix.repair_action}
          </p>
        </div>
        <div className="rounded-2xl bg-[var(--brand-soft)] px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              同类复检结果
            </p>
            <StatusBadge label={fix.result_note} tone="good" />
          </div>
          <p className="mt-2 text-base leading-7 text-[var(--ink)]">
            {fix.same_type_check}
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            下次复检：{formatDateLabel(fix.next_recheck_date)}
          </p>
        </div>
      </div>
    </article>
  );
}
