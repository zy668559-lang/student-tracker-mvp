import type { ReactNode } from "react";

type SectionCardProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  size?: "default" | "large";
};

export function SectionCard({
  eyebrow,
  title,
  description,
  children,
  size = "default"
}: SectionCardProps) {
  const large = size === "large";

  return (
    <section
      className={`rounded-[28px] border border-[var(--line)] bg-[var(--panel)] shadow-sm backdrop-blur-md ${
        large ? "p-5" : "p-4"
      }`}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-bold leading-tight text-[var(--ink)] ${
          large ? "text-[34px]" : "text-[30px]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 leading-7 text-[var(--muted)] ${large ? "text-[17px]" : "text-base"}`}>
          {description}
        </p>
      ) : null}
      <div className={large ? "mt-6" : "mt-5"}>{children}</div>
    </section>
  );
}
