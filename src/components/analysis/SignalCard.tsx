import { ConfidenceBadge } from './ConfidenceBadge';

export interface SignalCardProps {
  title: string;
  description: string;
  confidence?: 'High confidence' | 'Medium confidence' | 'Low confidence' | string;
}

export function SignalCard({ title, description, confidence }: SignalCardProps) {
  return (
    <div className="reference-card">
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
        {confidence && <ConfidenceBadge label={confidence} accent />}
      </div>
    </div>
  );
}
