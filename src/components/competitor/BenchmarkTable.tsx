import { CompanyKey } from '../../types/company';
import { SnapshotCategory } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { GroupedBarChart } from './charts/GroupedBarChart';

export interface BenchmarkTableProps {
  data: SnapshotCategory[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  title?: string;
  subtitle?: string;
}

export function BenchmarkTable({
  data,
  insight,
  companyLabels,
  companyColors,
  title = 'Competitive Snapshot',
  subtitle = 'Relative digital presence across the major channels.',
}: BenchmarkTableProps) {
  return (
    <SectionBlock
      id="snapshot-section"
      index="01"
      title={title}
      subtitle={subtitle}
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

export const CompetitiveSnapshot = BenchmarkTable;
export type CompetitiveSnapshotProps = BenchmarkTableProps;
