import Link from "next/link";
import { getLatestMetricSnapshots, getLiveCompareCases, getMathDemoStudent } from "@/lib/student-data";

const orderedMetrics = ["题型入手", "关系识别", "步骤稳定"];

export default function MathLivePage() {
  const student = getMathDemoStudent();
  const metrics = getLatestMetricSnapshots(student.student_id).sort(
    (left, right) =>
      orderedMetrics.indexOf(left.metric_name) - orderedMetrics.indexOf(right.metric_name)
  );
  const cases = getLiveCompareCases(student.student_id);

  return (
    <main className="dashboard-shell min-h-screen px-3 py-4 sm:px-4 sm:py-5">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[430px] flex-col gap-4 rounded-[32px] border border-white/55 bg-[rgba(248,250,252,0.72)] p-3 shadow-[var(--shadow)] backdrop-blur-xl sm:p-4">
        <section className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm backdrop-blur-md">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
            Live View
          </p>
          <h1 className="mt-3 text-[34px] font-bold leading-tight text-[var(--ink)]">
            当前阶段
          </h1>
          <div className="mt-5 rounded-[24px] bg-slate-950 p-5 text-white">
            <p className="text-[36px] font-bold leading-tight">{student.current_stage}</p>
            <p className="mt-4 text-[17px] leading-8 text-slate-200">{student.status_note}</p>
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm backdrop-blur-md">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
            Progress
          </p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-[var(--ink)]">
            三项变化
          </h2>
          <div className="mt-6 grid gap-4">
            {metrics.map((metric) => (
              <article key={metric.snapshot_id} className="rounded-[24px] border border-[var(--line)] bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[28px] font-bold leading-tight text-[var(--ink)]">
                    {metric.metric_name}
                  </h3>
                  <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-sm font-medium text-[var(--brand)]">
                    {metric.metric_value_text}
                  </span>
                </div>
                <p className="mt-4 text-[17px] leading-8 text-[var(--ink)]">{metric.current_status}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm backdrop-blur-md">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
            Compare
          </p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-[var(--ink)]">
            前后对比
          </h2>
          <div className="mt-6 grid gap-3">
            {cases.map((item) => (
              <div key={item.case_id} className="rounded-[22px] border border-[var(--line)] bg-white px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {item.module}
                </p>
                <p className="mt-2 text-[20px] font-semibold leading-8 text-[var(--ink)]">
                  {item.after_change}
                </p>
                <p className="mt-2 text-[16px] leading-7 text-[var(--muted)]">
                  以前：{item.before_problem}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/student/math-demo"
          className="rounded-[24px] border border-[var(--line)] bg-slate-950 px-5 py-4 text-center text-[17px] font-semibold text-white"
        >
          返回数学完整追踪页
        </Link>
      </div>
    </main>
  );
}
