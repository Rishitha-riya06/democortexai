import { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

export interface ConfidenceBadgeProps {
  label: string;
  accent?: boolean;
}

export function ConfidenceBadge({ label, accent = false }: ConfidenceBadgeProps) {
  return (
    <span className={`reference-pill ${accent ? 'accent' : ''}`}>
      {label}
      <ExternalLink size={9} />
    </span>
  );
}

export function ReportPill({ label, accent = false }: ConfidenceBadgeProps) {
  return <ConfidenceBadge label={label} accent={accent} />;
}

export function ReportTag({ children }: { children: ReactNode }) {
  return <span className="reference-tag">{children}</span>;
}
