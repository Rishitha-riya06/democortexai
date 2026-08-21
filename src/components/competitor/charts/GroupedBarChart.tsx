import { motion } from 'framer-motion';
import { CompanyKey } from '../../../types/company';
import { SnapshotCategory } from '../../../types/competitor';

export interface GroupedBarChartProps {
  data: SnapshotCategory[];
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function GroupedBarChart({ data, companyLabels, companyColors }: GroupedBarChartProps) {
  return (
    <div className="grouped-chart">
      {data.map((group) => (
        <div key={group.category} className="grouped-category">
          <p className="grouped-cat-label">{group.category}</p>
          <div className="grouped-rows">
            {group.rows.map((row) => (
              <div
                key={row.key}
                className="grouped-bar-row"
                style={{ ['--bar-color' as string]: companyColors[row.key] }}
              >
                <span className="grouped-bar-company">{companyLabels[row.key]}</span>
                <div className="grouped-bar-track">
                  <motion.div
                    className="grouped-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ backgroundColor: companyColors[row.key] }}
                  />
                </div>
                <span className="grouped-bar-value" style={{ color: companyColors[row.key] }}>
                  {row.raw}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
