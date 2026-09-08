import { CompanyKey } from '../../types/company';
import { PaidMatrixRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PaidMatrix } from './charts/PaidMatrix';

export interface PaidAdsAnalyticsProps {
  matrix: PaidMatrixRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  title?: string;
  subtitle?: string;
}

export function PaidAdsAnalytics({
  matrix,
  insight,
  companyLabels,
  companyColors,
  title = 'Paid Presence',
  subtitle = 'Detected advertising activity across Meta, Google, and video.',
}: PaidAdsAnalyticsProps) {
  return (
    <SectionBlock
      id="paid-section"
      index="07"
      title={title}
      subtitle={subtitle}
      insight={insight}
    >
      <PaidMatrix
        matrix={matrix}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </SectionBlock>
  );
}

export const PaidPresence = PaidAdsAnalytics;
export type PaidPresenceProps = PaidAdsAnalyticsProps;
