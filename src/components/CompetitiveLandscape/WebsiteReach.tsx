import { CompanyKey, SeriesRow } from './types';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface WebsiteReachProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function WebsiteReach({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Monthly visits',
}: WebsiteReachProps) {
  return (
    <SectionBlock
      id="website-section"
      index="04"
      title="Website Reach"
      subtitle="Estimated monthly traffic with source and regional signals."
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
