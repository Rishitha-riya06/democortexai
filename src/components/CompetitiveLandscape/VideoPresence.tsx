import { CompanyKey, SeriesRow } from './types';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface VideoPresenceProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function VideoPresence({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Subscribers',
}: VideoPresenceProps) {
  return (
    <SectionBlock
      id="video-section"
      index="06"
      title="Video Presence"
      subtitle="YouTube subscribers with views, upload frequency, and catalog size."
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
