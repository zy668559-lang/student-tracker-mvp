import { CompareCaseCard } from "@/components/compare-case-card";
import { SectionCard } from "@/components/section-card";
import { getDemoStudent, getLiveCompareCases } from "@/lib/student-data";

export default function EnglishComparePage() {
  const student = getDemoStudent();
  const cases = getLiveCompareCases(student.student_id);

  return (
    <SectionCard
      eyebrow="Compare"
      title="真实错题前后对比"
      description="四个案例直接看修复前怎么错、为什么错、修完以后怎么改。"
    >
      <div className="grid gap-4">
        {cases.map((item) => (
          <CompareCaseCard key={item.case_id} item={item} />
        ))}
      </div>
    </SectionCard>
  );
}
