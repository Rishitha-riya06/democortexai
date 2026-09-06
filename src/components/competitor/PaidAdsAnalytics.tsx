import { CompanyKey } from '../../types/company';
import { LinkedInRow, PaidMatrixRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PaidMatrix } from './charts/PaidMatrix';
import { LinkedInChecklist } from './charts/LinkedInChecklist';

export interface PaidAdsAnalyticsProps {
  matrix: PaidMatrixRow[];
  linkedInData: LinkedInRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function PaidAdsAnalytics({
  matrix,
  linkedInData,
  insight,
  companyLabels,
  companyColors,
}: PaidAdsAnalyticsProps) {
  return (
    <SectionBlock
      id="paid-section"
      index="06"
      title="Paid Presence"
      subtitle="Detected advertising activity across Meta, Google, and video — plus LinkedIn presence at a glance."
      insight={insight}
    >
      <div className="paid-split">
        <div className="paid-split-col">
          <PaidMatrix
            matrix={matrix}
            companyLabels={companyLabels}
            companyColors={companyColors}
          />
        </div>
        <div className="paid-split-col">
          <LinkedInChecklist
            data={linkedInData}
            companyLabels={companyLabels}
            companyColors={companyColors}
          />
        </div>
      </div>
    </SectionBlock>
  );
}

export const PaidPresence = PaidAdsAnalytics;
export type PaidPresenceProps = PaidAdsAnalyticsProps;
