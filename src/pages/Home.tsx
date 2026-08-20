import { motion } from 'framer-motion';
import { ArrowUpRight, Plus, Search } from 'lucide-react';
import { HistoryItem } from '../types/company';
import { mockExampleCompanies, mockHistory } from '../data/mockCompanies';
import { RecentAnalysisCard } from '../components/dashboard/RecentAnalysisCard';
import { useRef } from 'react';

export interface HomeProps {
  input: string;
  setInput: (value: string) => void;
  onAnalyze: (value: string) => void;
  onHistory: (item: HistoryItem) => void;
  onNew: () => void;
  historyList?: HistoryItem[];
}

export function Home({
  input,
  setInput,
  onAnalyze,
  onHistory,
  onNew,
  historyList = mockHistory,
}: HomeProps) {
  const heroRef = useRef<HTMLElement>(null);
  function handleHeroMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect || !heroRef.current) return;
    heroRef.current.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    heroRef.current.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <motion.main
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="hero-section" ref={heroRef} onMouseMove={handleHeroMouseMove}>
        {/* Existing ambient orbs */}
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="cursor-glow" aria-hidden="true" />

        {/* Decorative floating shapes — edges/corners only */}
        <div className="hero-shape hero-shape-blob-1" aria-hidden="true" />
        <div className="hero-shape hero-shape-blob-2" aria-hidden="true" />
        <div className="hero-shape hero-shape-blob-3" aria-hidden="true" />
        <div className="hero-shape hero-shape-blob-4" aria-hidden="true" />
        <div className="hero-shape hero-shape-ring-1" aria-hidden="true" />
        <div className="hero-shape hero-shape-ring-2" aria-hidden="true" />
        <div className="hero-shape hero-shape-ring-3" aria-hidden="true" />

        <div className="eyebrow">
          <span className="eyebrow-line" /> Company intelligence, reimagined
        </div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.12 }}
        >
          Understand any company
          <br />
          <em>before you pitch.</em>
        </motion.h1>
        <p className="hero-copy">
          AI-powered company intelligence built from public data.
          <br />
          Quietly thorough. Immediately useful.
        </p>

        <form
          className="company-search"
          onSubmit={(event) => {
            event.preventDefault();
            onAnalyze(input);
          }}
        >
          <Search size={19} />
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter a company to understand..."
            aria-label="Company name"
          />
          <button type="submit">
            <ArrowUpRight size={18} />
          </button>
        </form>

        <div className="example-row">
          <span>Try an analysis</span>
          {mockExampleCompanies.map((name) => (
            <button key={name} onClick={() => onAnalyze(name)}>
              {name}
            </button>
          ))}
        </div>
      </section>

      <section className="history-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow small">Your workspace</p>
            <h2>Recent intelligence</h2>
          </div>
          <p>
            Continue where
            <br />
            you left off.
          </p>
        </div>
        <div className="history-grid">
          {historyList.map((item, index) => (
            <RecentAnalysisCard
              key={item.name}
              item={item}
              index={index}
              onClick={() => onHistory(item)}
            />
          ))}
          <button className="history-add" onClick={onNew}>
            <span className="card-ambient-light" />
            <span className="card-concentric-rings" />
            <div className="card-top">
              <span className="company-avatar">
                <Plus size={18} />
              </span>
            </div>
            <div className="history-add-bottom">
              <strong>
                New company
                <br />
                analysis
              </strong>
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>
      </section>

      <footer className="footer-note">
        <span>Built for better conversations.</span>
        <span>© CORTEX / 2024</span>
      </footer>
    </motion.main>
  );
}

export const LandingPage = Home;
