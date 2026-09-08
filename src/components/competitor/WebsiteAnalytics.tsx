import { CompanyKey } from '../../types/company';
import { SeriesRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface WebsiteAnalyticsProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
  title?: string;
  subtitle?: string;
}

export function WebsiteAnalytics({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Monthly visits',
  title = 'Website Reach',
  subtitle = 'Estimated monthly traffic with source and regional signals.',
}: WebsiteAnalyticsProps) {
  return (
    <SectionBlock
      id="website-section"
      index="04"
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

export const WebsiteReach = WebsiteAnalytics;
export type WebsiteReachProps = WebsiteAnalyticsProps;
