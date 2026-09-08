import { CompanyKey } from '../../types/company';
import { SeriesRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface SEOAnalyticsProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function SEOAnalytics({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Authority proxy',
}: SEOAnalyticsProps) {
  return (
    <SectionBlock
      id="seo-section"
      index="05"
      title="Search Presence"
      subtitle="Authority proxy with backlinks, indexed pages, and speed."
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

export const SearchPresence = SEOAnalytics;
export type SearchPresenceProps = SEOAnalyticsProps;
