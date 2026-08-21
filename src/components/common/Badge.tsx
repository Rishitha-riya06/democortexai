import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`reference-tag ${variant === 'accent' ? 'accent' : ''} ${className}`}>
      {children}
    </span>
  );
}
