import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CompanyKey, SeriesRow } from '../types';

export interface BarRowProps {
  row: SeriesRow;
  metricLabel?: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function BarRow({ row, metricLabel, companyLabels, companyColors }: BarRowProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bar-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ['--bar-color' as string]: companyColors[row.key] }}
    >
      <span className="bar-company">
        {companyLabels[row.key]}
        {row.key === 'target' ? ' (you)' : ''}
      </span>
      <div className="bar-track-h">
        <motion.div
          className="bar-fill-h"
          initial={{ width: 0 }}
          whileInView={{ width: `${row.pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ backgroundColor: companyColors[row.key] }}
        />
        <span className="bar-value-h" style={{ color: companyColors[row.key] }}>
          {row.raw}
        </span>
      </div>
      <AnimatePresence>
        {hovered && row.sub && (
          <motion.div
            className="bar-tooltip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
          >
            <p className="tooltip-company" style={{ color: companyColors[row.key] }}>
              {companyLabels[row.key]}
            </p>
            <p className="tooltip-metric">
              {metricLabel}: <strong>{row.raw}</strong>
            </p>
            {row.sub.map((s) => (
              <div key={s.label} className="tooltip-sub">
                <span>{s.label}</span>
                <strong>{s.value}</strong>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export interface PrimaryChartProps {
  rows: SeriesRow[];
  metricLabel: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function PrimaryChart({ rows, metricLabel, companyLabels, companyColors }: PrimaryChartProps) {
  return (
    <div className="primary-chart">
      <div className="chart-metric-label">{metricLabel}</div>
      <div className="bar-rows">
        {rows.map((row) => (
          <BarRow
            key={row.key}
            row={row}
            metricLabel={metricLabel}
            companyLabels={companyLabels}
            companyColors={companyColors}
          />
        ))}
      </div>
      {rows[0]?.sub && (
        <div className="sub-metrics-grid">
          {rows[0].sub.map((s) => (
            <div key={s.label} className="sub-metric-col">
              <p className="sub-metric-label">{s.label}</p>
              {rows.map((row) => (
                <div key={row.key} className="sub-metric-cell" style={{ color: companyColors[row.key] }}>
                  <span className="sub-dot" style={{ backgroundColor: companyColors[row.key] }} />
                  <span className="sub-company">{companyLabels[row.key]}</span>
                  <strong>{row.sub?.find((x) => x.label === s.label)?.value ?? '—'}</strong>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
