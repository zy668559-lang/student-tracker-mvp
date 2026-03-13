import { MetricOverviewCard } from "@/components/metric-overview-card";
import { SectionCard } from "@/components/section-card";
import { getDemoStudent, getLatestMetricSnapshots } from "@/lib/student-data";

const orderedMetrics = ["阅读定位", "语言稳定", "作文输出稳定度"];

export default function EnglishMetricsPage() {
  const student = getDemoStudent();
  const metrics = getLatestMetricSnapshots(student.student_id).sort(
    (left, right) =>
      orderedMetrics.indexOf(left.metric_name) - orderedMetrics.indexOf(right.metric_name)
  );

  return (
    <SectionCard
      eyebrow="Metrics"
      title="英语三项追踪总表"
      description="三项固定追踪，方便家长看到每一项现在在哪、最近怎么变、下一步盯什么。"
    >
      <div className="grid gap-4">
        {metrics.map((metric) => (
          <MetricOverviewCard key={metric.snapshot_id} metric={metric} />
        ))}
      </div>
    </SectionCard>
  );
}
