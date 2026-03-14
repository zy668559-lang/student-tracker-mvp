import type { CompareCase } from "@/lib/types";

type CompareCaseCardProps = {
  item: CompareCase;
  emphasis?: "default" | "large";
};

export function CompareCaseCard({
  item,
  emphasis = "default"
}: CompareCaseCardProps) {
  const large = emphasis === "large";

  return (
    <article
      className={`rounded-[24px] border border-[var(--line)] bg-white ${
        large ? "p-5" : "p-4"
      }`}
    >
      <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
        Compare Case
      </p>
      <h3
        className={`mt-2 font-bold leading-tight text-[var(--ink)] ${
          large ? "text-[28px]" : "text-[24px]"
        }`}
      >
        {item.module}
      </h3>

      <div className="mt-4 grid gap-3">
        <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-rose-500">
            修复前
          </p>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {item.before_problem}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            为什么会这样
          </p>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {item.before_reason}
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-600">
            修复后
          </p>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {item.after_method}
          </p>
        </div>
        <div className="rounded-2xl bg-[var(--brand-soft)] px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            核心变化
          </p>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {item.after_change}
          </p>
        </div>
      </div>
    </article>
  );
}
