import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export interface MetricCardProps {
  className?: string;
  icon: ReactNode;
  badgeClass?: string;
  rankText?: string;
  title: string;
  value: string;
  unit: string;
  footerText?: string;
  onClick?: () => void;
  delay?: number;
}

export function MetricCard({
  className = '',
  icon,
  badgeClass = '',
  rankText,
  title,
  value,
  unit,
  footerText,
  onClick,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.button
      className={`bento-card bento-metric-card ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
    >
      <div className="bento-card-top">
        <div className={`platform-icon-badge ${badgeClass}`}>{icon}</div>
        {rankText && <span className="rank-tag">{rankText}</span>}
      </div>
      <div className="bento-card-content">
        <span className="platform-name">{title}</span>
        <div className="metric-value-row">
          <span className="metric-value">{value}</span>
          <span className="metric-unit">{unit}</span>
        </div>
      </div>
      {footerText && (
        <div className="bento-card-footer">
          <span>{footerText}</span>
          <ChevronRight size={13} />
        </div>
      )}
    </motion.button>
  );
}
