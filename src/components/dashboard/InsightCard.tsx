export interface InsightCardProps {
  tag: string;
  metric: string;
  text: string;
}

export function InsightCard({ tag, metric, text }: InsightCardProps) {
  return (
    <div className="gap-insight-card">
      <span className="gap-insight-tag">{tag}</span>
      <h3>{metric}</h3>
      <p>{text}</p>
    </div>
  );
}
