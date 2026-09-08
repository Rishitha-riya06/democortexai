import { CompanyKey } from '../../types/company';
import { SnapshotCategory } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { CrossPlatformChart } from './charts/CrossPlatformChart';

export interface OpportunityCardsProps {
  data: SnapshotCategory[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function OpportunityCards({
  data,
  insight,
  companyLabels,
  companyColors,
}: OpportunityCardsProps) {
  return (
    <SectionBlock
      id="cross-section"
      index="08"
      title="Digital Presence Across Channels"
      subtitle="The full competitive picture in one view."
      insight={insight}
      hero
    >
      <CrossPlatformChart
        data={data}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </SectionBlock>
  );
}

export const DigitalPresenceAcrossChannels = OpportunityCards;
export type DigitalPresenceAcrossChannelsProps = OpportunityCardsProps;
