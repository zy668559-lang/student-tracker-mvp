import { MetricOverviewCard } from "@/components/metric-overview-card";
import { SectionCard } from "@/components/section-card";
import { getDemoStudent, getLatestMetricSnapshots } from "@/lib/student-data";

const orderedMetrics = ["阅读定位", "语言稳定（搭配/逻辑词/词形）", "作文输出稳定度"];

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
      description="重点只看三条主线：阅读定位、语言稳定、作文输出稳定度。每一条都明确现在卡在哪、下一步怎么压。"
    >
      <div className="grid gap-4">
        {metrics.map((metric) => (
          <MetricOverviewCard key={metric.snapshot_id} metric={metric} />
        ))}
      </div>
    </SectionCard>
  );
}