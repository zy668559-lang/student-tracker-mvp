import type { ReactNode } from "react";

type SectionCardProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionCard({
  eyebrow,
  title,
  description,
  children
}: SectionCardProps) {
  return (
    <section className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm backdrop-blur-md">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[30px] font-bold leading-tight text-[var(--ink)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{description}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}
