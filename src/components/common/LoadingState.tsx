import { Sparkles } from 'lucide-react';

export interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = 'Loading intelligence...' }: LoadingStateProps) {
  return (
    <div className="loading-state-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '24px', justifyContent: 'center' }}>
      <Sparkles size={18} className="animate-spin" style={{ color: '#8b5cf6' }} />
      <span style={{ fontSize: '14px', color: '#94a3b8' }}>{label}</span>
    </div>
  );
}
