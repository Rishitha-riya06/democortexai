import { ReactNode } from 'react';

export interface ReferenceCardProps {
  title: string;
  children: ReactNode;
}

export function ReferenceCard({ title, children }: ReferenceCardProps) {
  return (
    <div className="reference-card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export interface ReferenceSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export function ReferenceSection({ number, title, children }: ReferenceSectionProps) {
  return (
    <section className="reference-section">
      <p className="reference-kicker">{number} / analysis</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function ReferenceList({
  items,
  accent = false,
}: {
  items: string[];
  accent?: boolean;
}) {
  return (
    <ul className={`reference-list ${accent ? 'accent-list' : ''}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ReferenceNumberedList({ items }: { items: string[] }) {
  return (
    <ol className="reference-numbered-list">
      {items.map((item, index) => (
        <li key={item}>
          <span>{index + 1}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}
