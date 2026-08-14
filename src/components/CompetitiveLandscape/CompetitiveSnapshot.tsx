import { CompanyKey, SnapshotCategory } from './types';
import { SectionBlock } from './SectionBlock';
import { GroupedBarChart } from './charts/GroupedBarChart';

export interface CompetitiveSnapshotProps {
  data: SnapshotCategory[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function CompetitiveSnapshot({
  data,
  insight,
  companyLabels,
  companyColors,
}: CompetitiveSnapshotProps) {
  return (
    <SectionBlock
      id="snapshot-section"
      index="01"
      title="Competitive Snapshot"
      subtitle="Relative digital presence across the major channels."
      insight={insight}
    >
      <GroupedBarChart
        data={data}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </SectionBlock>
  );
}
