import { CompareCaseCard } from "@/components/compare-case-card";
import { SectionCard } from "@/components/section-card";
import { getLiveCompareCases, getMathDemoStudent } from "@/lib/student-data";

export default function MathComparePage() {
  const student = getMathDemoStudent();
  const cases = getLiveCompareCases(student.student_id);

  return (
    <SectionCard
      eyebrow="Compare"
      title="真实前后对比"
      description="数学版重点只看四个变化：二次函数入手、几何读图、辅助线思路、证明链条完整度。"
      size="large"
    >
      <div className="grid gap-4">
        {cases.map((item) => (
          <CompareCaseCard key={item.case_id} item={item} emphasis="large" />
        ))}
      </div>
    </SectionCard>
  );
}
