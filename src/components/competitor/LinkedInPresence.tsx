import { CompanyKey } from '../../types/company';
import { SeriesRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface LinkedInPresenceProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
  title?: string;
  subtitle?: string;
}

export function LinkedInPresence({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Followers',
  title = 'LinkedIn Presence',
  subtitle = 'Follower count with growth, posting cadence, and hiring signals.',
}: LinkedInPresenceProps) {
  return (
    <SectionBlock
      id="linkedin-section"
      index="02"
      title={title}
      subtitle={subtitle}
      insight={insight}
    >
      <PrimaryChart
        rows={data}
        metricLabel={metricLabel}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </SectionBlock>
  );
}
