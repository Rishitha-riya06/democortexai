import { GapInsightItem } from '../../types/competitor';
import { mockDefaultGapInsights } from '../../data/mockCompetitors';

export interface GapAnalysisProps {
  insights?: GapInsightItem[];
}

export function GapAnalysis({ insights = mockDefaultGapInsights }: GapAnalysisProps) {
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

export const CompetitiveGapsSummary = GapAnalysis;
export type CompetitiveGapsSummaryProps = GapAnalysisProps;
