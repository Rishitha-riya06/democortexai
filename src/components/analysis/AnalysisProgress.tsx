import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Check, Circle, Feather, Search, Sparkles } from 'lucide-react';
import { Company } from '../../types/company';
import { mockResearchSteps } from '../../data/mockAnalysis';

export interface AnalysisProgressProps {
  company: Company;
  isResearching: boolean;
  researchStep: number;
  steps?: string[];
  onAnalyze: (value: string) => void;
}

export function AnalysisProgress({
  company,
  isResearching,
  researchStep,
  steps = mockResearchSteps,
  onAnalyze,
}: AnalysisProgressProps) {
  const [query, setQuery] = useState('');
  const percentage = Math.round(((researchStep + 1) / steps.length) * 100);

  return (
    <section className="research-view">
      <div className="research-kicker">
        <Sparkles size={16} /> Live research
      </div>
      <h1>
        {isResearching ? (
          <>
            Building a point of view
            <br />
            <em>on {company}.</em>
          </>
        ) : (
          <>
            Tell us which company
            <br />
            <em>you want to understand.</em>
          </>
        )}
      </h1>
      {isResearching ? (
        <div className="research-panel">
          <div className="research-panel-top">
            <span>Researching {company}</span>
            <span>{percentage}%</span>
          </div>
          <div className="progress-track">
            <motion.div
              className="progress-value"
              animate={{ width: `${percentage}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
          <div className="research-list">
            {steps.map((step, index) => (
              <div
                key={step}
                className={
                  index < researchStep
                    ? 'complete'
                    : index === researchStep
                      ? 'active'
                      : ''
                }
              >
                <span className="research-icon">
                  {index < researchStep ? (
                    <Check size={13} />
                  ) : index === researchStep ? (
                    <Circle size={9} fill="currentColor" />
                  ) : (
                    <span />
                  )}
                </span>
                {step}
                <span className="step-state">
                  {index < researchStep
                    ? 'Complete'
                    : index === researchStep
                      ? 'In progress'
                      : 'Queued'}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-company-prompt">
          <form
            className="company-search"
            style={{ margin: '0 auto 24px' }}
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) onAnalyze(query.trim());
            }}
          >
            <Search size={19} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a company name or website..."
              aria-label="Company name"
            />
            <button type="submit">
              <ArrowUpRight size={18} />
            </button>
          </form>
          <p>
            Start with a name, website, or short description. CORTEX will map
            the business, market, signals, and competitive context.
          </p>
          <div className="prompt-hint">
            <Feather size={15} /> The clearer the question, the sharper the
            brief.
          </div>
        </div>
      )}
    </section>
  );
}
