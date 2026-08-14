import { AnalysisState } from '../types/analysis';

export interface AnalysisStore extends AnalysisState {
  setCompany: (company: string) => void;
  setIsResearching: (isResearching: boolean) => void;
  setResearchStep: (step: number) => void;
  setReportReady: (ready: boolean) => void;
  reset: () => void;
}

export const initialAnalysisState: AnalysisState = {
  company: 'NVIDIA',
  isResearching: false,
  researchStep: 0,
  reportReady: false,
};
