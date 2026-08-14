import { CompanyKey, PaidMatrixRow } from './types';
import { SectionBlock } from './SectionBlock';
import { PaidMatrix } from './charts/PaidMatrix';

export interface PaidPresenceProps {
  matrix: PaidMatrixRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function PaidPresence({
  matrix,
  insight,
  companyLabels,
  companyColors,
}: PaidPresenceProps) {
  return (
    <SectionBlock
      id="paid-section"
      index="07"
      title="Paid Presence"
      subtitle="Detected advertising activity across Meta, Google, LinkedIn, and video."
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
