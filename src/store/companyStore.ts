import { Company, HistoryItem } from '../types/company';
import { mockHistory } from '../data/mockCompanies';

export interface CompanyStoreState {
  currentCompany: Company;
  history: HistoryItem[];
}

export const initialCompanyState: CompanyStoreState = {
  currentCompany: 'NVIDIA',
  history: mockHistory,
};
