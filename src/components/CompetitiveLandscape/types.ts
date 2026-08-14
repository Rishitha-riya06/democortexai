export type CompanyKey = 'target' | 'compA' | 'compB' | 'compC';

export type SeriesRow = {
  key: CompanyKey;
  raw: string;
  pct: number;
  sub?: { label: string; value: string }[];
};

export type SnapshotCategory = {
  category: string;
  rows: SeriesRow[];
};

export type PaidStatus = 'detected' | 'none' | 'unknown';

export type PaidMatrixRow = {
  key: CompanyKey;
  meta: PaidStatus;
  google: PaidStatus;
  linkedin: PaidStatus;
  video: PaidStatus;
};

export type GapInsightItem = {
  metric: string;
  text: string;
  tag: string;
};
