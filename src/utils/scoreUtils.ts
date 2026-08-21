import { SeriesRow, SnapshotCategory } from '../types/competitor';

export function getTargetMetric(group: SnapshotCategory | undefined) {
  if (!group) return { val: '—', rankStr: '—', rankNum: 0 };
  const targetItem = group.rows.find((r: SeriesRow) => r.key === 'target');
  const sorted = [...group.rows].sort((a, b) => b.pct - a.pct);
  const rank = sorted.findIndex((r: SeriesRow) => r.key === 'target') + 1;
  return {
    val: targetItem?.raw ?? '—',
    rankStr: `Rank #${rank} / ${group.rows.length}`,
    rankNum: rank,
  };
}
