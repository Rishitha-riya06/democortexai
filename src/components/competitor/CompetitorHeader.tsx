import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Company } from '../../types/company';

export interface CompetitorHeaderProps {
  company: Company;
  onBack: () => void;
  onPresent?: () => void;
}

export function CompetitorHeader({ company, onBack, onPresent }: CompetitorHeaderProps) {
  return (
    <>
      <div className="competitor-header">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={16} /> {company} intelligence
        </button>
        <div className="present-label">
          <span className="nav-dot" /> Presentation view
        </div>
        <button className="present-button" onClick={onPresent}>
          <span /> Present mode <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="competitor-title">
        <div>
          <p className="eyebrow small">
            <span className="eyebrow-line" /> Comparative intelligence / 02
          </p>
          <h1>
            Competitive
            <br />
            <em>landscape.</em>
          </h1>
        </div>
        <p>
          How {company}&apos;s digital presence compares
          <br />
          with its closest competitors.
        </p>
      </div>
    </>
  );
}
