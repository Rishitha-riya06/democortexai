import { CompanyKey, SeriesRow } from './types';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface LinkedInPresenceProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function LinkedInPresence({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Followers',
}: LinkedInPresenceProps) {
  return (
    <SectionBlock
      id="linkedin-section"
      index="02"
      title="LinkedIn Presence"
      subtitle="Follower count with growth, engagement, and publishing signals."
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
