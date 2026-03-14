import { StatusBadge } from "@/components/status-badge";
import type { MetricSnapshot } from "@/lib/types";

type MetricOverviewCardProps = {
  metric: MetricSnapshot;
  compact?: boolean;
  emphasis?: "default" | "large";
};

const trendToneMap: Record<string, "good" | "warn" | "neutral"> = {
  up: "good",
  steady: "neutral",
  watch: "warn"
};

const trendTextMap: Record<string, string> = {
  up: "最近在变稳",
  steady: "基本稳定",
  watch: "还需盯紧"
};

export function MetricOverviewCard({
  metric,
  compact = false,
  emphasis = "default"
}: MetricOverviewCardProps) {
  const large = emphasis === "large";

  return (
    <article
      className={`rounded-[24px] border border-[var(--line)] bg-white ${
        large ? "p-5" : "p-4"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
            {metric.metric_value_text}
          </p>
          <h3
            className={`mt-2 font-bold leading-tight text-[var(--ink)] ${
              large ? "text-[28px]" : "text-[24px]"
            }`}
          >
            {metric.metric_name}
          </h3>
        </div>
        <StatusBadge
          label={trendTextMap[metric.trend] ?? "继续跟踪"}
          tone={trendToneMap[metric.trend] ?? "neutral"}
        />
      </div>

      <div className={`grid gap-3 ${compact ? "mt-4" : "mt-5"}`}>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            当前状态
          </p>
          <p className={`mt-2 font-semibold text-[var(--ink)] ${large ? "text-xl leading-8" : "text-lg"}`}>
            {metric.current_status}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            最近变化
          </p>
          <p className={`mt-2 leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {metric.recent_change}
          </p>
        </div>
        <div className="rounded-2xl bg-[var(--brand-soft)] px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            下一步重点
          </p>
          <p className={`mt-2 font-medium leading-7 text-[var(--ink)] ${large ? "text-[17px]" : "text-base"}`}>
            {metric.next_focus}
          </p>
        </div>
      </div>
    </article>
  );
}
