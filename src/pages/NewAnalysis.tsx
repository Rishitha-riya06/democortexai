import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Feather, Search, Sparkles } from 'lucide-react';
import { mockExampleCompanies } from '../data/mockCompanies';

export interface NewAnalysisProps {
  onStartAnalysis: (company: string) => void;
}

export function NewAnalysis({ onStartAnalysis }: NewAnalysisProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onStartAnalysis(query.trim());
    }
  };

  return (
    <motion.main
      className="intelligence-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="research-view">
        <div className="research-kicker">
          <Sparkles size={16} /> New company analysis
        </div>
        <h1>
          Tell us which company
          <br />
          <em>you want to understand.</em>
        </h1>

        <form className="company-search" onSubmit={handleSubmit} style={{ margin: '24px auto', maxWidth: '520px' }}>
          <Search size={19} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a company name or website..."
            aria-label="Company name"
          />
          <button type="submit">
            <ArrowUpRight size={18} />
          </button>
        </form>

        <div className="example-row" style={{ justifyContent: 'center' }}>
          <span>Suggestions</span>
          {mockExampleCompanies.map((name) => (
            <button key={name} type="button" onClick={() => onStartAnalysis(name)}>
              {name}
            </button>
          ))}
        </div>

        <div className="empty-company-prompt" style={{ marginTop: '32px' }}>
          <p>
            Start with a name, website, or short description. CORTEX will map
            the business, market, signals, and competitive context.
          </p>
          <div className="prompt-hint">
            <Feather size={15} /> The clearer the question, the sharper the brief.
          </div>
        </div>
      </section>
    </motion.main>
  );
}
