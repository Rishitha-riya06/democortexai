import { useState } from 'react';
import { reportService } from '../services/reportService';
import { CompanyReportData } from '../types/report';

export function useReport(company: string) {
  const [report, setReport] = useState<CompanyReportData>(() =>
    reportService.getCompanyReport(company)
  );

  const refreshReport = (newCompany: string) => {
    setReport(reportService.getCompanyReport(newCompany));
  };

  return {
    report,
    sources: reportService.getSources(),
    refreshReport,
  };
}
