import { useState } from 'react';
import { Company, HistoryItem } from '../types/company';
import { mockHistory } from '../data/mockCompanies';

export function useCompany(initialCompany: Company = 'NVIDIA') {
  const [company, setCompany] = useState<Company>(initialCompany);
  const [history, setHistory] = useState<HistoryItem[]>(mockHistory);

  const selectCompany = (newCompany: Company) => {
    setCompany(newCompany);
  };

  const addHistoryItem = (item: HistoryItem) => {
    setHistory((prev) => [item, ...prev.filter((h) => h.name !== item.name)]);
  };

  return {
    company,
    setCompany,
    history,
    selectCompany,
    addHistoryItem,
  };
}
