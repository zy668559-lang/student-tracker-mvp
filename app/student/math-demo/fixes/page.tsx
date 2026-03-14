import { FixLogCard } from "@/components/fix-log-card";
import { SectionCard } from "@/components/section-card";
import { getMathDemoStudent, getTodayFixLogs } from "@/lib/student-data";

export default function MathFixesPage() {
  const student = getMathDemoStudent();
  const fixes = getTodayFixLogs(student.student_id);

  return (
    <SectionCard
      eyebrow="Fix Log"
      title="当天问题当天修复记录"
      description="重点给家长看三次真实修复：函数怎么稳住，几何怎么找入口，链条怎么补完整。"
      size="large"
    >
      <div className="grid gap-4">
        {fixes.map((fix) => (
          <FixLogCard key={fix.fix_id} fix={fix} emphasis="large" />
        ))}
      </div>
    </SectionCard>
  );
}
