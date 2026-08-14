import { ExternalLink } from 'lucide-react';
import { mockSourceLabels } from '../../data/mockAnalysis';

export interface SourceChipsProps {
  sources?: string[];
  onSelectSource?: (source: string) => void;
}

export function SourceChips({
  sources = mockSourceLabels,
  onSelectSource,
}: SourceChipsProps) {
  return (
    <div className="reference-source-row">
      <span className="reference-kicker">Accumulated primary sources</span>
      {sources.map((source) => (
        <span
          key={source}
          className="reference-pill"
          onClick={() => onSelectSource?.(source)}
          style={{ cursor: onSelectSource ? 'pointer' : 'default' }}
        >
          {source}
          <ExternalLink size={9} />
        </span>
      ))}
    </div>
  );
}
