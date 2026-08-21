import { ReactNode } from 'react';

export interface SectionBlockProps {
  id?: string;
  index: string;
  title: string;
  subtitle: string;
  insight: string;
  children: ReactNode;
  hero?: boolean;
}

export function SectionBlock({
  id,
  index,
  title,
  subtitle,
  insight,
  children,
  hero = false,
}: SectionBlockProps) {
  return (
    <section id={id} className={`viz-section ${hero ? 'viz-hero' : ''}`}>
      <div className="viz-header">
        <div>
          <p className="viz-index">{index}</p>
          <h2>{title}</h2>
          <p className="viz-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="viz-body">{children}</div>
      <div className="viz-insight">
        <span className="viz-insight-mark" />
        <p>{insight}</p>
      </div>
    </section>
  );
}
