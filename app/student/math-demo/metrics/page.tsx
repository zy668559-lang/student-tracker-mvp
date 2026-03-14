import { MetricOverviewCard } from "@/components/metric-overview-card";
import { SectionCard } from "@/components/section-card";
import { getLatestMetricSnapshots, getMathDemoStudent } from "@/lib/student-data";

const orderedMetrics = ["题型入手", "关系识别", "步骤稳定"];

export default function MathMetricsPage() {
  const student = getMathDemoStudent();
  const metrics = getLatestMetricSnapshots(student.student_id).sort(
    (left, right) =>
      orderedMetrics.indexOf(left.metric_name) - orderedMetrics.indexOf(right.metric_name)
  );

  return (
    <SectionCard
      eyebrow="Metrics"
      title="数学三项追踪总表"
      description="数学版固定只追三条：题型入手、关系识别、步骤稳定。函数看稳不稳，几何看入口和链条。"
      size="large"
    >
      <div className="grid gap-4">
        {metrics.map((metric) => (
          <MetricOverviewCard
            key={metric.snapshot_id}
            metric={metric}
            emphasis="large"
          />
        ))}
      </div>
    </SectionCard>
  );
}
