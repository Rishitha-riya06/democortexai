import { motion } from 'framer-motion';
import { Company } from '../types/company';
import { CompanyHeader } from '../components/analysis/CompanyHeader';
import { ReportPreview } from '../components/reports/ReportPreview';

export interface CompanyOverviewProps {
  company: Company;
  onBack: () => void;
  onCompetitors: () => void;
}

export function CompanyOverview({
  company,
  onBack,
  onCompetitors,
}: CompanyOverviewProps) {
  return (
    <motion.main
      className="intelligence-page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <CompanyHeader
        company={company}
        onBack={onBack}
        onCompetitors={onCompetitors}
      />
      <ReportPreview company={company} />
    </motion.main>
  );
}
