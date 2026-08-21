import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Company } from '../../types/company';
import { ConfidenceBadge, ReportTag } from '../analysis/ConfidenceBadge';
import {
  ReferenceCard,
  ReferenceList,
  ReferenceNumberedList,
} from '../analysis/IntelligenceCard';
import { ReportSection } from './ReportSection';

export interface ReportPreviewProps {
  company: Company;
  onOverviewClick?: () => void;
  onShare?: () => void;
}

export function ReportPreview({ company, onOverviewClick, onShare }: ReportPreviewProps) {
  const isOpenAI = company === 'OpenAI';
  const displayCompany = isOpenAI ? 'OpenAI' : company;

  return (
    <article className="report-view report-reference">
      <header className="reference-header">
        <div className="reference-brand">
          <span className="reference-logo">{displayCompany.charAt(0)}</span>
          <div>
            <strong>{displayCompany}</strong>
            <span>Enterprise Technology &amp; Cloud Services</span>
          </div>
        </div>
        <div className="reference-status">
          <span>Company intelligence</span>
          <span className="reference-confidence">High confidence</span>
          <span>18 sources</span>
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
            <h1>{displayCompany}</h1>
            <p className="reference-subtitle">
              Enterprise Technology &amp; Cloud Services
            </p>
          </div>
          <button className="reference-action" onClick={onOverviewClick}>
            Company overview <ArrowUpRight size={12} />
          </button>
        </div>

        <div className="reference-facts">
          <span>
            <b>Founded</b> 2015
          </span>
          <span>
            <b>HQ</b> San Francisco, CA
          </span>
          <span>
            <b>Employees</b> 1,000–5,000
          </span>
        </div>

        <div className="reference-summary">
          <p>
            {displayCompany} is a leading technology company operating in the
            software and enterprise technology space, headquartered in San
            Francisco, California. The company develops and delivers AI-powered
            products and services for businesses and consumers.
          </p>
          <div className="reference-tags">
            <ReportTag>Artificial intelligence</ReportTag>
            <ReportTag>Cloud services</ReportTag>
            <ReportTag>Software</ReportTag>
          </div>
        </div>
      </section>

      <div className="reference-source-row">
        <span className="reference-kicker">Accumulated primary sources</span>
        <ConfidenceBadge label="Company website" />
        <ConfidenceBadge label="Press release" />
        <ConfidenceBadge label="Industry report" />
        <ConfidenceBadge label="News" />
        <ConfidenceBadge label="Company filings" />
      </div>

      <ReportSection number="01" title="Business Overview">
        <p>
          {displayCompany} has established a prominent market position through
          continuous innovation, scalable enterprise infrastructure, and
          customer-centric product expansion across international markets.
        </p>
      </ReportSection>

      <ReportSection number="02" title="Market Landscape">
        <p>
          {displayCompany} competes in a high-growth market driven by rapid cloud
          adoption, digital automation, and enterprise workflow optimization.
        </p>
        <div className="reference-columns">
          <ReferenceCard title="Primary direct competitors">
            <ConfidenceBadge label="Google / DeepMind" />
            <ConfidenceBadge label="Microsoft / Azure AI" />
            <ConfidenceBadge label="Anthropic" />
          </ReferenceCard>
          <ReferenceCard title="Key sector movements">
            <ReferenceList
              items={[
                'Increased adoption of AI across enterprise workflows',
                'Expansion of cloud infrastructure and platform services',
                'Focus on responsible AI and data security',
              ]}
            />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="03" title="Transformation Signals">
        <ReferenceNumberedList
          items={[
            'Accelerated adoption of AI-driven features across the company’s flagship product line.',
            'Expansion of strategic ecosystem channel partnerships and cloud marketplace distribution.',
            'Investments in customer success automation and zero-trust security infrastructure.',
          ]}
        />
      </ReportSection>

      <ReportSection number="04" title="Business Challenges &amp; Vulnerabilities">
        <ReferenceList
          accent
          items={[
            'Navigating competitive and regulatory dynamics within the rapidly expanding enterprise buyer landscape.',
            'Maintaining rapid engineering delivery while scaling compliance controls globally.',
            'Managing customer acquisition cost and retention across digital channels.',
          ]}
        />
      </ReportSection>

      <ReportSection number="05" title="Technology &amp; Innovation Signals">
        <div className="reference-columns three">
          <ReferenceCard title="Proprietary research">
            <p>Continued investment in foundational models and applied AI research.</p>
            <ConfidenceBadge label="High confidence" accent />
          </ReferenceCard>
          <ReferenceCard title="Integrated delivery and analytics">
            <p>Platform offerings provide greater value through connected services.</p>
            <ConfidenceBadge label="Medium confidence" accent />
          </ReferenceCard>
          <ReferenceCard title="Developer ecosystem">
            <p>Developer tooling and software capabilities reinforce platform adoption.</p>
            <ConfidenceBadge label="Medium confidence" accent />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="06" title="Growth &amp; Strategic Direction">
        <ReferenceList
          items={[
            'Targeting enterprise expansion via multi-product bundling and custom enterprise licensing.',
            'Geographic expansion across EMEA and APAC key regional hubs.',
            'Investments in AI research to augment core product productivity features.',
          ]}
        />
      </ReportSection>

      <ReportSection number="07" title="Competitive Intelligence &amp; Moat Analysis">
        <div className="reference-quote">
          “{displayCompany} maintains a strong market affinity by combining high
          product reliability with intuitive user experiences, creating
          significant customer retention and organic word-of-mouth adoption.”
        </div>
      </ReportSection>
    </article>
  );
}

export const ReportView = ReportPreview;
export type ReportViewProps = ReportPreviewProps;
