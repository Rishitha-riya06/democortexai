import { ExternalLink } from 'lucide-react';
import { ConfidenceBadge, ReportTag } from '../analysis/ConfidenceBadge';
import {
  ReferenceCard,
  ReferenceList,
  ReferenceNumberedList,
} from '../analysis/IntelligenceCard';
import { ReportSection } from './ReportSection';
import {
  kiddikindCompanyProfile,
  kiddikindCustomerSegments,
  kiddikindDifferentiators,
  kiddikindEcosystemSignals,
  kiddikindExecutiveSummary,
  kiddikindGlance,
  kiddikindIndustryTrends,
  kiddikindKeyInsights,
  kiddikindMarketPositioning,
  kiddikindNamedCompetitors,
  kiddikindPartnerships,
  kiddikindProfile,
  kiddikindRecommendations,
  kiddikindRisks,
  kiddikindSentiment,
  kiddikindSwot,
  kiddikindTalkingPoints,
  kiddikindTrendImplications,
} from '../../data/kiddikind';

export interface KiddikindReportProps {
  onShare?: () => void;
}

export function KiddikindReport({ onShare }: KiddikindReportProps) {
  return (
    <article className="report-view report-reference">
      <header className="reference-header">
        <div className="reference-brand">
          <span className="reference-logo">K</span>
          <div>
            <strong>{kiddikindProfile.name}</strong>
            <span>{kiddikindProfile.industry}</span>
          </div>
        </div>
        <div className="reference-status">
          <span>Company intelligence</span>
          <span className="reference-confidence">Sourced</span>
          <span>{kiddikindProfile.runStatus}</span>
        </div>
        <button
          className="reference-share"
          onClick={onShare}
          aria-label="Share report"
        >
          <ExternalLink size={13} />
        </button>
      </header>

      <section className="reference-intro">
        <div className="reference-title-row">
          <div>
            <p className="reference-kicker">Company intelligence</p>
            <h1>{kiddikindProfile.name}</h1>
            <p className="reference-subtitle">{kiddikindProfile.tagline}</p>
          </div>
        </div>

        <div className="reference-facts">
          <span>
            <b>Domain</b> {kiddikindProfile.domain}
          </span>
          <span>
            <b>Founded</b> {kiddikindProfile.founded}
          </span>
          <span>
            <b>HQ</b> {kiddikindProfile.hq}
          </span>
          <span>
            <b>Employees</b> {kiddikindProfile.employees}
          </span>
          <span>
            <b>Generated</b> {kiddikindProfile.generated}
          </span>
        </div>

        <div className="reference-summary">
          <p>{kiddikindExecutiveSummary}</p>
          <div className="reference-tags">
            {kiddikindProfile.tags.map((tag) => (
              <ReportTag key={tag}>{tag}</ReportTag>
            ))}
          </div>
        </div>
      </section>

      <div className="reference-source-row">
        <span className="reference-kicker">Accumulated primary sources</span>
        {kiddikindProfile.sources.map((source) => (
          <ConfidenceBadge key={source} label={source} />
        ))}
      </div>

      <ReportSection number="01" title="At a Glance">
        <p className="reference-subtitle">
          Real, sourced figures only — every metric below was returned by this
          run. Anything the run could not resolve is marked as not found rather
          than estimated.
        </p>
        <div className="reference-columns three">
          {kiddikindGlance.slice(0, 3).map((item) => (
            <ReferenceCard key={item.label} title={item.label}>
              <p>
                <strong>{item.value}</strong>
                <br />
                {item.note}
              </p>
            </ReferenceCard>
          ))}
        </div>
        <div className="reference-columns three">
          {kiddikindGlance.slice(3).map((item) => (
            <ReferenceCard key={item.label} title={item.label}>
              <p>
                <strong>{item.value}</strong>
                <br />
                {item.note}
              </p>
            </ReferenceCard>
          ))}
        </div>
      </ReportSection>

      <ReportSection number="02" title="Business Overview">
        <p>{kiddikindExecutiveSummary}</p>
      </ReportSection>

      <ReportSection number="03" title="Company Profile">
        <div className="reference-columns three">
          {kiddikindCompanyProfile.slice(0, 3).map((item) => (
            <ReferenceCard key={item.label} title={item.label}>
              <p>{item.value}</p>
            </ReferenceCard>
          ))}
        </div>
        <div className="reference-columns three">
          {kiddikindCompanyProfile.slice(3).map((item) => (
            <ReferenceCard key={item.label} title={item.label}>
              <p>{item.value}</p>
            </ReferenceCard>
          ))}
        </div>
      </ReportSection>

      <ReportSection number="04" title="SWOT Analysis">
        <p className="reference-subtitle">
          Cross-references verified company intelligence against market and
          competitor findings — every point below is traceable to a specific
          fact already collected, not an independent judgment.
        </p>
        <div className="reference-columns">
          <ReferenceCard title="Strengths">
            <ReferenceList items={kiddikindSwot.strengths} />
          </ReferenceCard>
          <ReferenceCard title="Weaknesses">
            <ReferenceList accent items={kiddikindSwot.weaknesses} />
          </ReferenceCard>
        </div>
        <div className="reference-columns">
          <ReferenceCard title="Opportunities">
            <ReferenceList items={kiddikindSwot.opportunities} />
          </ReferenceCard>
          <ReferenceCard title="Threats">
            <ReferenceList accent items={kiddikindSwot.threats} />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="05" title="Market Positioning Narrative">
        <p>{kiddikindMarketPositioning}</p>
        <div className="reference-columns">
          <ReferenceCard title="Named competitors">
            {kiddikindNamedCompetitors.map((name) => (
              <ConfidenceBadge key={name} label={name} />
            ))}
          </ReferenceCard>
          <ReferenceCard title="Business differentiators">
            <ReferenceList items={kiddikindDifferentiators} />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="06" title="Ideal Customer &amp; Segment Fit">
        <ReferenceNumberedList items={kiddikindCustomerSegments} />
      </ReportSection>

      <ReportSection number="07" title="Industry &amp; Market Trajectory">
        <p>{kiddikindIndustryTrends}</p>
        <div className="reference-columns">
          <ReferenceCard title="Key sector movements">
            <ReferenceList
              items={[
                'Clean-label, allergen-free formulation is becoming table stakes.',
                'Gut health and prebiotics are displacing high-sugar, wheat-based snacks.',
                'Ancient grains such as millet are gaining shelf and search share.',
              ]}
            />
          </ReferenceCard>
          <ReferenceCard title="What this means for Kiddikind">
            <ReferenceList items={kiddikindTrendImplications} />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="08" title="Partnership &amp; Ecosystem Signals">
        <div className="reference-columns">
          <ReferenceCard title="Partnerships">
            <ReferenceList items={kiddikindPartnerships} />
          </ReferenceCard>
          <ReferenceCard title="Credibility signals">
            <ReferenceList items={kiddikindEcosystemSignals} />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="09" title="Customer Sentiment Snapshot">
        <p>{kiddikindSentiment.body}</p>
        <div className="reference-columns">
          <ReferenceCard title="Positive signals">
            <ReferenceList items={kiddikindSentiment.positives} />
          </ReferenceCard>
          <ReferenceCard title="Watch areas">
            <ReferenceList accent items={kiddikindSentiment.watch} />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="10" title="Key Insights &amp; Risks">
        <div className="reference-columns">
          <ReferenceCard title="Key insights">
            <p>{kiddikindKeyInsights}</p>
          </ReferenceCard>
          <ReferenceCard title="Risks">
            <p>{kiddikindRisks}</p>
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="11" title="Recommendations &amp; Service Fitment">
        <div className="reference-columns three">
          {kiddikindRecommendations.map((rec) => (
            <ReferenceCard key={rec.title} title={rec.title}>
              <p>{rec.body}</p>
            </ReferenceCard>
          ))}
        </div>
      </ReportSection>

      <ReportSection number="12" title="Sales Talking Points">
        <ReferenceNumberedList items={kiddikindTalkingPoints} />
      </ReportSection>
    </article>
  );
}
