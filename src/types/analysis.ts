export type AnalysisStepStatus = 'queued' | 'active' | 'complete';

export interface ResearchStepItem {
  id: string;
  label: string;
  status: AnalysisStepStatus;
}

export interface AnalysisState {
  company: string;
  isResearching: boolean;
  researchStep: number;
  reportReady: boolean;
}
