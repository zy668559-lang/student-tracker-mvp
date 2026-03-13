import { FixLogCard } from "@/components/fix-log-card";
import { SectionCard } from "@/components/section-card";
import { getDemoStudent, getTodayFixLogs } from "@/lib/student-data";

export default function EnglishFixesPage() {
  const student = getDemoStudent();
  const fixes = getTodayFixLogs(student.student_id);

  return (
    <SectionCard
      eyebrow="Fix Log"
      title="当天问题当天修复记录"
      description="按时间顺序看今天怎么发现问题、怎么修、修完马上怎么复检。"
    >
      <div className="grid gap-4">
        {fixes.map((fix) => (
          <FixLogCard key={fix.fix_id} fix={fix} />
        ))}
      </div>
    </SectionCard>
  );
}
