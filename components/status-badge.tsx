type StatusBadgeProps = {
  label: string;
  tone?: "good" | "warn" | "neutral";
};

const toneStyles = {
  good: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warn: "bg-amber-50 text-amber-700 border-amber-200",
  neutral: "bg-slate-100 text-slate-700 border-slate-200"
};

export function StatusBadge({
  label,
  tone = "neutral"
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}
