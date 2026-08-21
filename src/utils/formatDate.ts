export function formatTimeString(date: Date = new Date()): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function formatRelativeDate(timeString: string): string {
  return timeString;
}
