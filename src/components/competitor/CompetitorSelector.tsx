import { CompanyKey } from '../../types/company';

export interface CompetitorSelectorProps {
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  selectedKey?: CompanyKey;
  onSelect?: (key: CompanyKey) => void;
}

export function CompetitorSelector({
  companyLabels,
  companyColors,
  selectedKey,
  onSelect,
}: CompetitorSelectorProps) {
  const keys = Object.keys(companyLabels) as CompanyKey[];

  return (
    <div className="legend-bar">
      <span className="legend-label">Legend</span>
      {keys.map((key) => (
        <span
          key={key}
          className={`legend-item ${key === 'target' ? 'legend-target' : ''} ${selectedKey === key ? 'selected' : ''}`}
          onClick={() => onSelect?.(key)}
          style={{ cursor: onSelect ? 'pointer' : 'default' }}
        >
          <span className="legend-dot" style={{ backgroundColor: companyColors[key] }} />
          {companyLabels[key]}
          {key === 'target' ? ' (target)' : ''}
        </span>
      ))}
    </div>
  );
}
