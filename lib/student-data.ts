import compareCasesJson from "@/data/compare_cases.json";
import fixLogsJson from "@/data/fix_logs.json";
import metricSnapshotsJson from "@/data/metric_snapshots.json";
import studentsJson from "@/data/students.json";
import type { CompareCase, FixLog, MetricSnapshot, Student } from "@/lib/types";

const students = studentsJson as Student[];
const metricSnapshots = metricSnapshotsJson as MetricSnapshot[];
const fixLogs = fixLogsJson as FixLog[];
const compareCases = compareCasesJson as CompareCase[];

export function getDemoStudent() {
  const student = students.find((item) => item.student_id === "english-demo");

  if (!student) {
    throw new Error("Demo student not found.");
  }

  return student;
}

export function getLatestMetricSnapshots(studentId: string) {
  const latestByMetric = new Map<string, MetricSnapshot>();

  metricSnapshots
    .filter((item) => item.student_id === studentId)
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime())
    .forEach((snapshot) => {
      if (!latestByMetric.has(snapshot.metric_name)) {
        latestByMetric.set(snapshot.metric_name, snapshot);
      }
    });

  return Array.from(latestByMetric.values());
}

export function getRecentMetricTimeline(studentId: string, recentDays: number) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const latestTimestamp = metricSnapshots
    .filter((item) => item.student_id === studentId)
    .reduce((latest, item) => Math.max(latest, new Date(item.date).getTime()), 0);
  const threshold = latestTimestamp - recentDays * msPerDay;

  return getLatestMetricSnapshots(studentId).map((metric) => {
    const points = metricSnapshots
      .filter(
        (item) =>
          item.student_id === studentId &&
          item.metric_name === metric.metric_name &&
          new Date(item.date).getTime() >= threshold
      )
      .sort((left, right) => new Date(left.date).getTime() - new Date(right.date).getTime())
      .map((item) => ({
        date: item.date,
        value: item.metric_value_text,
        note: item.recent_change
      }));

    return {
      metricName: metric.metric_name,
      trendLabel:
        metric.trend === "up"
          ? "持续变稳"
          : metric.trend === "watch"
            ? "继续盯住"
            : "暂时平稳",
      tone:
        metric.trend === "up"
          ? ("good" as const)
          : metric.trend === "watch"
            ? ("warn" as const)
            : ("neutral" as const),
      points
    };
  });
}

export function getTodayFixLogs(studentId: string) {
  return fixLogs
    .filter((item) => item.student_id === studentId)
    .sort((left, right) => new Date(left.date).getTime() - new Date(right.date).getTime());
}

export function getLiveCompareCases(studentId: string) {
  return compareCases
    .filter((item) => item.student_id === studentId && item.show_in_live)
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
}
