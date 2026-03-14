import { StudentTabs } from "@/components/student-tabs";
import { getDemoStudent } from "@/lib/student-data";
import { formatDateLabel } from "@/lib/time";

export default function EnglishDemoLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const student = getDemoStudent();

  return (
    <main className="dashboard-shell min-h-screen px-3 py-4 sm:px-4 sm:py-5">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[430px] flex-col gap-4 rounded-[32px] border border-white/55 bg-[rgba(248,250,252,0.7)] p-3 shadow-[var(--shadow)] backdrop-blur-xl sm:p-4">
        <header className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                Live Dashboard
              </p>
              <h1 className="mt-2 text-[28px] font-bold leading-tight text-[var(--ink)]">
                {student.display_name}
              </h1>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {student.grade} · {student.subject}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white px-3 py-2 text-right shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Updated
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--ink)]">
                {formatDateLabel(student.updated_at)}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-950 px-4 py-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300">
                  Current Stage
                </p>
                <p className="mt-1 text-lg font-semibold">{student.current_stage}</p>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
                持续跟踪中
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-200">{student.target_band}</p>
          </div>
        </header>

        <StudentTabs />

        <div className="flex flex-1 flex-col gap-4">{children}</div>
      </div>
    </main>
  );
}