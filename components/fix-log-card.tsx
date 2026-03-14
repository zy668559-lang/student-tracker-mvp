import { StatusBadge } from "@/components/status-badge";
import { formatDateLabel } from "@/lib/time";
import type { FixLog } from "@/lib/types";

type FixLogCardProps = {
  fix: FixLog;
  emphasis?: "default" | "large";
};

export function FixLogCard({
  fix,
  emphasis = "default"
}: FixLogCardProps) {
  const large = emphasis === "large";

  return (
    <article
      className={`rounded-[24px] border border-[var(--line)] bg-white ${
        large ? "p-5" : "p-4"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Fix Record
          </p>
          <h3
            className={`mt-2 font-bold leading-tight text-[var(--ink)] ${
              large ? "text-[28px]" : "text-[24px]"
            }`}
          >
            {fix.module}
          </h3>
        </div>
        <div className="text-right">
          <p className={`font-semibold text-[var(--ink)] ${large ? "text-base" : "text-sm"}`}>
            {formatDateLabel(fix.date)}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            发现的问题
          </p>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {fix.problem_found}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            当场修复
          </p>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {fix.repair_action}
          </p>
        </div>
        <div className="rounded-2xl bg-[var(--brand-soft)] px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              当前结果
            </p>
            <StatusBadge label={fix.result_note} tone="good" />
          </div>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {fix.same_type_check}
          </p>
        </div>
      </div>
    </article>
  );
}
