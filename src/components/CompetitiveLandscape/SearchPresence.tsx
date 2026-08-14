import { CompanyKey, SeriesRow } from './types';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface SearchPresenceProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function SearchPresence({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Authority proxy',
}: SearchPresenceProps) {
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
