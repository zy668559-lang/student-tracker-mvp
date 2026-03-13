import Link from "next/link";
import { MetricOverviewCard } from "@/components/metric-overview-card";
import { SectionCard } from "@/components/section-card";
import { StatusBadge } from "@/components/status-badge";
import {
  getDemoStudent,
  getLatestMetricSnapshots,
  getRecentMetricTimeline,
  getTodayFixLogs
} from "@/lib/student-data";
import { formatCompactTime, formatDateLabel } from "@/lib/time";

export default function EnglishDemoHomePage() {
  const student = getDemoStudent();
  const metrics = getLatestMetricSnapshots(student.student_id);
  const recentTimeline = getRecentMetricTimeline(student.student_id, 7);
  const todayFixes = getTodayFixLogs(student.student_id);

  return (
    <>
      <SectionCard
        eyebrow="Dashboard"
        title="现在在追什么"
        description="首页只放最关键的信息，家长一眼就能看出最近追踪重点和当天动作。"
      >
        <div className="rounded-[24px] bg-slate-950 p-5 text-white">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                Current Status
              </p>
              <h2 className="mt-2 text-[30px] font-bold leading-tight">
                {student.current_stage}
              </h2>
            </div>
            <StatusBadge label="稳步修复中" tone="good" />
          </div>
          <p className="mt-4 text-base leading-7 text-slate-200">
            {student.status_note}
          </p>
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="Progress"
        title="三项核心追踪总览"
        description="不是泛泛刷题，而是把问题拆成三条线单独看。"
      >
        <div className="grid gap-3">
          {metrics.map((metric) => (
            <MetricOverviewCard key={metric.snapshot_id} metric={metric} compact />
          ))}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="Trend"
        title="最近 7 天变化"
        description="只看近一周，方便直播时直接说明哪里开始变稳了。"
      >
        <div className="grid gap-3">
          {recentTimeline.map((timeline) => (
            <div
              key={timeline.metricName}
              className="rounded-[22px] border border-[var(--line)] bg-white px-4 py-4"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {timeline.metricName}
                </h3>
                <StatusBadge label={timeline.trendLabel} tone={timeline.tone} />
              </div>
              <div className="mt-3 grid gap-2">
                {timeline.points.map((point) => (
                  <div
                    key={`${timeline.metricName}-${point.date}`}
                    className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-[var(--ink)]">
                        {point.value}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {point.note}
                      </p>
                    </div>
                    <p className="shrink-0 text-xs font-medium text-[var(--muted)]">
                      {formatDateLabel(point.date)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="Fix Log"
        title="当天问题当天修"
        description="今天抓到的卡点，今天就给动作，不留到下一轮。"
      >
        <div className="grid gap-3">
          {todayFixes.map((fix) => (
            <div
              key={fix.fix_id}
              className="rounded-[22px] border border-[var(--line)] bg-white px-4 py-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {fix.module}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--ink)]">
                    {fix.problem_found}
                  </h3>
                </div>
                <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {formatCompactTime(fix.date)}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                修复动作：<span className="font-medium text-[var(--ink)]">{fix.repair_action}</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                复检结果：<span className="font-medium text-[var(--ink)]">{fix.same_type_check}</span>
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/student/english-demo/fixes"
          className="mt-4 flex items-center justify-between rounded-[24px] border border-[var(--line)] bg-slate-950 px-4 py-4 text-white transition hover:bg-slate-900"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
              Detail View
            </p>
            <p className="mt-1 text-base font-semibold">进入完整修复记录</p>
          </div>
          <span className="text-sm text-slate-300">Fix Log</span>
        </Link>
      </SectionCard>

      <SectionCard
        eyebrow="Compare"
        title="真实错题前后对比"
        description="不靠一句‘有进步了’，直接看修复前后差别。"
      >
        <Link
          href="/student/english-demo/compare"
          className="block rounded-[24px] border border-[var(--line)] bg-white p-5 transition hover:border-[rgba(27,92,255,0.35)] hover:shadow-sm"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Before / After
          </p>
          <h3 className="mt-2 text-[26px] font-bold leading-tight text-[var(--ink)]">
            看 4 个真实修复案例
          </h3>
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">
            完形、阅读、语言点、作文分别怎么错，为什么错，修完以后怎么做。
          </p>
        </Link>
      </SectionCard>

      <SectionCard
        eyebrow="Next Step"
        title="下阶段重点"
        description="下一步不会换一堆新题型，而是继续把还不稳的地方压实。"
      >
        <div className="grid gap-3">
          {[student.main_focus_1, student.main_focus_2, student.main_focus_3].map(
            (focus, index) => (
              <div
                key={focus}
                className="flex gap-3 rounded-[22px] border border-[var(--line)] bg-white px-4 py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-base font-bold text-[var(--brand)]">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-semibold text-[var(--ink)]">{focus}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    按固定顺序持续追，不做临时加码。
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </SectionCard>
    </>
  );
}
