import { CompanyOverviewInfo } from './company';
import { IntelligenceSection } from './intelligence';

export interface CompanyReportData {
  company: string;
  category: string;
  confidence: string;
  sourceCount: number;
  sources: string[];
  overview: CompanyOverviewInfo;
  sections: IntelligenceSection[];
}
