import { CompanyKey } from '../../types/company';
import { SeriesRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface VideoAnalyticsProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function VideoAnalytics({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Subscribers',
}: VideoAnalyticsProps) {
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

export const VideoPresence = VideoAnalytics;
export type VideoPresenceProps = VideoAnalyticsProps;
