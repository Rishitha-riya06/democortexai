import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { CompanyKey } from '../../../types/company';
import { SnapshotCategory } from '../../../types/competitor';

export interface CrossPlatformChartProps {
  data: SnapshotCategory[];
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function CrossPlatformChart({ data, companyLabels, companyColors }: CrossPlatformChartProps) {
  const channels = data.map((d) => d.category);
  const companies = Object.keys(companyLabels) as CompanyKey[];

  return (
    <div className="cross-chart">
      <div className="cross-grid">
        <div className="cross-corner" />
        {channels.map((ch) => (
          <div key={ch} className="cross-channel-header">
            {ch}
          </div>
        ))}
        {companies.map((compKey) => (
          <Fragment key={compKey}>
            <div className="cross-company-label" style={{ color: companyColors[compKey] }}>
              <span className="cross-dot" style={{ backgroundColor: companyColors[compKey] }} />
              {companyLabels[compKey]}
              {compKey === 'target' ? ' (you)' : ''}
            </div>
            {channels.map((ch) => {
              const row = data.find((d) => d.category === ch)?.rows.find((r) => r.key === compKey);
              return (
                <div
                  key={ch}
                  className="cross-cell"
                  style={{ ['--bar-color' as string]: companyColors[compKey] }}
                >
                  <div className="cross-bar-track">
                    <motion.div
                      className="cross-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row?.pct ?? 0}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      style={{ backgroundColor: companyColors[compKey] }}
                    />
                  </div>
                  <span className="cross-value">{row?.raw ?? '—'}</span>
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
