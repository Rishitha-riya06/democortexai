import { ReactNode } from 'react';

export interface ReportSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export function ReportSection({ number, title, children }: ReportSectionProps) {
  return (
    <section className="reference-section">
      <p className="reference-kicker">{number} / analysis</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
