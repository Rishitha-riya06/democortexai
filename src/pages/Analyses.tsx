import { motion } from 'framer-motion';
import { HistoryItem } from '../types/company';
import { mockHistory } from '../data/mockCompanies';
import { RecentAnalysisCard } from '../components/dashboard/RecentAnalysisCard';

export interface AnalysesProps {
  historyList?: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export function Analyses({ historyList = mockHistory, onSelect }: AnalysesProps) {
  return (
    <motion.main
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="history-section" style={{ paddingTop: '80px' }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow small">History</p>
            <h2>All Saved Analyses</h2>
          </div>
        </div>
        <div className="history-grid">
          {historyList.map((item, index) => (
            <RecentAnalysisCard
              key={item.name}
              item={item}
              index={index}
              onClick={() => onSelect(item)}
            />
          ))}
        </div>
      </section>
    </motion.main>
  );
}
