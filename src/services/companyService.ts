import { HistoryItem } from '../types/company';
import { mockHistory } from '../data/mockCompanies';

export const companyService = {
  getRecentAnalyses(): Promise<HistoryItem[]> {
    return Promise.resolve(mockHistory);
  },

  searchCompanies(query: string): Promise<HistoryItem | undefined> {
    const normalized = query.trim().toLowerCase();
    const match = mockHistory.find((item) => item.name.toLowerCase() === normalized);
    return Promise.resolve(match);
  },
};
