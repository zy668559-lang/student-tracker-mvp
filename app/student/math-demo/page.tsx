import Link from "next/link";
import { MetricOverviewCard } from "@/components/metric-overview-card";
import { SectionCard } from "@/components/section-card";
import { getLatestMetricSnapshots, getMathDemoStudent, getTodayFixLogs } from "@/lib/student-data";
import { formatDateLabel } from "@/lib/time";

const orderedMetrics = ["题型入手", "关系识别", "步骤稳定"];

export default function MathDemoHomePage() {
  const student = getMathDemoStudent();
  const metrics = getLatestMetricSnapshots(student.student_id).sort(
    (left, right) =>
      orderedMetrics.indexOf(left.metric_name) - orderedMetrics.indexOf(right.metric_name)
  );
  const latestFixes = getTodayFixLogs(student.student_id).slice(-3).reverse();

  return (
    <>
      <SectionCard
        eyebrow="Dashboard"
        title="数学学习追踪"
        description="首页只保留最适合直播讲解的内容，先让家长在 5 秒内看懂：函数已稳，几何还在修。"
        size="large"
      >
        <div className="rounded-[26px] bg-slate-950 p-5 text-white">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                Current Stage
              </p>
              <h3 className="mt-2 text-[34px] font-bold leading-tight">
                {student.current_stage}
              </h3>
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
              几何重点修复
            </div>
          </div>
          <p className="mt-4 text-[17px] leading-8 text-slate-200">
            {student.status_note}
          </p>
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="Progress"
        title="三项变化，一眼看懂"
        description="当前只看题型入手、关系识别、步骤稳定，避免直播时信息太散。"
        size="large"
      >
        <div className="grid gap-4">
          {metrics.map((metric) => (
            <MetricOverviewCard
              key={metric.snapshot_id}
              metric={metric}
              compact
              emphasis="large"
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="Fix Log"
        title="最近在修什么"
        description="把最近三次真实修复压成一屏，家长能直接看到“不是加题量，是修入口、修关系、修步骤”。"
        size="large"
      >
        <div className="grid gap-3">
          {latestFixes.map((fix) => (
            <div
              key={fix.fix_id}
              className="rounded-[24px] border border-[var(--line)] bg-white px-5 py-4"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[22px] font-bold leading-tight text-[var(--ink)]">
                  {fix.module}
                </h3>
                <p className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                  {formatDateLabel(fix.date)}
                </p>
              </div>
              <p className="mt-3 text-[17px] leading-8 text-[var(--muted)]">
                {fix.same_type_check}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="Compare"
        title="前后对比入口"
        description="最适合直播展示的，是让家长直接看“以前怎么做，现在怎么做”。"
        size="large"
      >
        <div className="grid gap-3">
          <Link
            href="/student/math-demo/compare"
            className="block rounded-[24px] border border-[var(--line)] bg-white p-5 transition hover:border-[rgba(27,92,255,0.35)] hover:shadow-sm"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Before / After
            </p>
            <h3 className="mt-2 text-[30px] font-bold leading-tight text-[var(--ink)]">
              4 个核心变化
            </h3>
            <p className="mt-3 text-[17px] leading-8 text-[var(--muted)]">
              二次函数入手、几何读图、辅助线思路、证明链条完整度，直接看修复前后差别。
            </p>
          </Link>
          <Link
            href="/student/math-live"
            className="block rounded-[24px] border border-[var(--line)] bg-slate-950 p-5 text-white transition hover:bg-slate-900"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
              Live View
            </p>
            <h3 className="mt-2 text-[28px] font-bold leading-tight">
              打开直播极简版
            </h3>
            <p className="mt-3 text-[17px] leading-8 text-slate-200">
              只保留当前阶段、三项变化、前后对比，适合直播全屏直接展示。
            </p>
          </Link>
        </div>
      </SectionCard>
    </>
  );
}
