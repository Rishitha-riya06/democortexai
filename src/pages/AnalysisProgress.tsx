import { motion } from 'framer-motion';
import { Company } from '../types/company';
import { CompanyHeader } from '../components/analysis/CompanyHeader';
import { AnalysisProgress as AnalysisProgressView } from '../components/analysis/AnalysisProgress';

export interface AnalysisProgressPageProps {
  company: Company;
  isResearching: boolean;
  researchStep: number;
  onBack: () => void;
  onCompetitors: () => void;
}

export function AnalysisProgressPage({
  company,
  isResearching,
  researchStep,
  onBack,
  onCompetitors,
}: AnalysisProgressPageProps) {
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
      <AnalysisProgressView
        company={company}
        isResearching={isResearching}
        researchStep={researchStep}
      />
    </motion.main>
  );
}

export const AnalysisProgress = AnalysisProgressPage;
