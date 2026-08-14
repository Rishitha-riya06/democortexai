import { GapInsightItem } from './types';

export interface CompetitiveGapsSummaryProps {
  insights?: GapInsightItem[];
}

const defaultGapInsights: GapInsightItem[] = [
  {
    metric: 'Instagram engagement',
    text: "AMD's 5.4% engagement rate is 2.6x the target's 2.1% — the widest relative gap on the page.",
    tag: 'Largest gap',
  },
  {
    metric: 'YouTube subscribers',
    text: "Qualcomm leads with 11K subscribers vs the target's 1.2K — a 9.2x difference.",
    tag: 'Falling behind',
  },
  {
    metric: 'Website reach',
    text: 'The target leads with 12.4M monthly visits, 51% ahead of Intel.',
    tag: 'Ahead',
  },
  {
    metric: 'Paid presence',
    text: 'AMD is the only competitor detected across all four paid channels.',
    tag: 'Watch',
  },
];

export function CompetitiveGapsSummary({ insights = defaultGapInsights }: CompetitiveGapsSummaryProps) {
  return (
    <section className="gap-insights-section">
      <div className="gap-heading">
        <p className="eyebrow small">Read between the numbers</p>
        <h2>
          Competitive
          <br />
          <em>gaps.</em>
        </h2>
      </div>
      <div className="gap-insights-grid">
        {insights.map((ins) => (
          <div key={ins.metric} className="gap-insight-card">
            <span className="gap-insight-tag">{ins.tag}</span>
            <h3>{ins.metric}</h3>
            <p>{ins.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
