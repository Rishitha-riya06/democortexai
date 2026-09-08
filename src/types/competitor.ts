import { CompanyKey } from './company';

export type { CompanyKey };

export interface SubMetric {
  label: string;
  value: string;
}

export interface SeriesRow {
  key: CompanyKey;
  raw: string;
  pct: number;
  sub?: SubMetric[];
}

export interface SnapshotCategory {
  category: string;
  rows: SeriesRow[];
}

export type PaidStatus = 'detected' | 'none' | 'unknown';

export interface PaidMatrixRow {
  key: CompanyKey;
  meta: PaidStatus;
  google: PaidStatus;
  linkedin: PaidStatus;
  video: PaidStatus;
}

export interface GapInsightItem {
  metric: string;
  text: string;
  tag: string;
}

export interface CompetitorBenchmark {
  category: string;
  targetValue: string;
  topCompetitor: string;
  topValue: string;
  difference: string;
}
