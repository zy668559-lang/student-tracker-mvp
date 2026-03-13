function normalizeDate(value: string) {
  return new Date(value);
}

export function formatDateLabel(value: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric"
  }).format(normalizeDate(value));
}

export function formatCompactTime(value: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(normalizeDate(value));
}
