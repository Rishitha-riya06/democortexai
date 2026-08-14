import { CompanyKey, SnapshotCategory } from './types';
import { SectionBlock } from './SectionBlock';
import { CrossPlatformChart } from './charts/CrossPlatformChart';

export interface DigitalPresenceAcrossChannelsProps {
  data: SnapshotCategory[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function DigitalPresenceAcrossChannels({
  data,
  insight,
  companyLabels,
  companyColors,
}: DigitalPresenceAcrossChannelsProps) {
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
