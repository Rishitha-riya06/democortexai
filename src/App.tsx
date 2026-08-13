import { Fragment, ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  ExternalLink,
  Feather,
  Menu,
  Minus,
  Plus,
  Search,
  Sparkles,
  X,
} from 'lucide-react';

type Screen = 'landing' | 'intelligence' | 'competitors';
type Company = 'NVIDIA' | 'OpenAI' | 'Microsoft' | 'Salesforce' | 'Zoho';

type HistoryItem = {
  name: Company;
  monogram: string;
  industry: string;
  time: string;
  preview: string;
  color: string;
};

const history: HistoryItem[] = [
  { name: 'NVIDIA', monogram: 'N', industry: 'Semiconductors', time: '2 hours ago', preview: 'Strong technology positioning with significant momentum in AI infrastructure.', color: '#91a66d' },
  { name: 'OpenAI', monogram: 'O', industry: 'Artificial intelligence', time: 'Yesterday', preview: 'An accelerating platform story shaped by distribution and model capability.', color: '#c6a0c8' },
  { name: 'Microsoft', monogram: 'M', industry: 'Enterprise software', time: '3 days ago', preview: 'Deep enterprise reach continues to turn intelligence into workflow advantage.', color: '#a7c5d1' },
  { name: 'Salesforce', monogram: 'S', industry: 'Cloud software', time: '8 days ago', preview: 'A broad customer system repositioning around trusted AI and data.', color: '#c5b58c' },
  { name: 'Zoho', monogram: 'Z', industry: 'Business software', time: '12 days ago', preview: 'A quietly expansive suite with an increasingly differentiated point of view.', color: '#e1a99d' },
];

const researchSteps = [
  'Identifying company profile',
  'Mapping business model',
  'Researching market landscape',
  'Analyzing transformation signals',
  'Examining technology landscape',
  'Mapping growth signals',
  'Building competitive intelligence',
];

type CompanyKey = 'target' | 'compA' | 'compB' | 'compC';

const companyColors: Record<CompanyKey, string> = {
  target: '#6d4aff',
  compA: '#3b82f6',
  compB: '#22a06b',
  compC: '#e8833a',
};

const companyLabels: Record<CompanyKey, string> = {
  target: 'NVIDIA',
  compA: 'AMD',
  compB: 'Intel',
  compC: 'Qualcomm',
};

type SeriesRow = { key: CompanyKey; raw: string; pct: number; sub?: { label: string; value: string }[] };

const snapshotData: { category: string; rows: SeriesRow[] }[] = [
  {
    category: 'LinkedIn', rows: [
      { key: 'target', raw: '2.4M', pct: 69 },
      { key: 'compA', raw: '3.1M', pct: 100 },
      { key: 'compB', raw: '1.5M', pct: 48 },
      { key: 'compC', raw: '1.9M', pct: 61 },
    ]
  },
  {
    category: 'Instagram', rows: [
      { key: 'target', raw: '1.2M', pct: 58 },
      { key: 'compA', raw: '890K', pct: 43 },
      { key: 'compB', raw: '2.1M', pct: 100 },
      { key: 'compC', raw: '650K', pct: 31 },
    ]
  },
  {
    category: 'Website', rows: [
      { key: 'target', raw: '12.4M', pct: 100 },
      { key: 'compA', raw: '8.2M', pct: 66 },
      { key: 'compB', raw: '7.4M', pct: 60 },
      { key: 'compC', raw: '5.1M', pct: 41 },
    ]
  },
  {
    category: 'SEO', rows: [
      { key: 'target', raw: '78', pct: 82 },
      { key: 'compA', raw: '72', pct: 76 },
      { key: 'compB', raw: '69', pct: 73 },
      { key: 'compC', raw: '61', pct: 64 },
    ]
  },
  {
    category: 'YouTube', rows: [
      { key: 'target', raw: '1.7M', pct: 100 },
      { key: 'compA', raw: '900K', pct: 53 },
      { key: 'compB', raw: '780K', pct: 46 },
      { key: 'compC', raw: '310K', pct: 18 },
    ]
  },
];

const linkedInData: SeriesRow[] = [
  { key: 'target', raw: '42K', pct: 69, sub: [{ label: 'Growth', value: '+8.4%' }, { label: 'Posts/mo', value: '6' }, { label: 'Engagement', value: '2.1%' }, { label: 'Employees', value: '29K' }, { label: 'Openings', value: '431' }] },
  { key: 'compA', raw: '61K', pct: 100, sub: [{ label: 'Growth', value: '+14.2%' }, { label: 'Posts/mo', value: '11' }, { label: 'Engagement', value: '5.4%' }, { label: 'Employees', value: '17K' }, { label: 'Openings', value: '287' }] },
  { key: 'compB', raw: '33K', pct: 54, sub: [{ label: 'Growth', value: '+3.1%' }, { label: 'Posts/mo', value: '4' }, { label: 'Engagement', value: '1.8%' }, { label: 'Employees', value: '13K' }, { label: 'Openings', value: '156' }] },
  { key: 'compC', raw: '49K', pct: 80, sub: [{ label: 'Growth', value: '+6.7%' }, { label: 'Posts/mo', value: '8' }, { label: 'Engagement', value: '3.2%' }, { label: 'Employees', value: '24K' }, { label: 'Openings', value: '198' }] },
];

const instagramData: SeriesRow[] = [
  { key: 'target', raw: '42K', pct: 49, sub: [{ label: 'Engagement', value: '2.1%' }, { label: 'Posts', value: '184' }, { label: 'Frequency', value: '12/mo' }, { label: 'Reels', value: '38%' }] },
  { key: 'compA', raw: '86K', pct: 100, sub: [{ label: 'Engagement', value: '5.4%' }, { label: 'Posts', value: '412' }, { label: 'Frequency', value: '28/mo' }, { label: 'Reels', value: '61%' }] },
  { key: 'compB', raw: '33K', pct: 38, sub: [{ label: 'Engagement', value: '3.8%' }, { label: 'Posts', value: '97' }, { label: 'Frequency', value: '7/mo' }, { label: 'Reels', value: '24%' }] },
  { key: 'compC', raw: '71K', pct: 83, sub: [{ label: 'Engagement', value: '4.1%' }, { label: 'Posts', value: '286' }, { label: 'Frequency', value: '19/mo' }, { label: 'Reels', value: '47%' }] },
];

const websiteData: SeriesRow[] = [
  { key: 'target', raw: '95K', pct: 41, sub: [{ label: 'Range', value: '85K–110K' }, { label: 'Bounce', value: '42%' }, { label: 'Top region', value: 'US 38%' }, { label: 'Trend', value: '+12%' }] },
  { key: 'compA', raw: '230K', pct: 100, sub: [{ label: 'Range', value: '210K–260K' }, { label: 'Bounce', value: '38%' }, { label: 'Top region', value: 'US 51%' }, { label: 'Trend', value: '+24%' }] },
  { key: 'compB', raw: '72K', pct: 31, sub: [{ label: 'Range', value: '65K–82K' }, { label: 'Bounce', value: '51%' }, { label: 'Top region', value: 'US 29%' }, { label: 'Trend', value: '-3%' }] },
  { key: 'compC', raw: '160K', pct: 70, sub: [{ label: 'Range', value: '140K–185K' }, { label: 'Bounce', value: '45%' }, { label: 'Top region', value: 'IN 34%' }, { label: 'Trend', value: '+8%' }] },
];

const seoData: SeriesRow[] = [
  { key: 'target', raw: '28', pct: 54, sub: [{ label: 'Backlinks', value: '4.2M' }, { label: 'Indexed', value: '1.1M' }, { label: 'Speed', value: '68' }, { label: 'Blog/mo', value: '14' }] },
  { key: 'compA', raw: '52', pct: 100, sub: [{ label: 'Backlinks', value: '8.7M' }, { label: 'Indexed', value: '2.3M' }, { label: 'Speed', value: '74' }, { label: 'Blog/mo', value: '22' }] },
  { key: 'compB', raw: '36', pct: 69, sub: [{ label: 'Backlinks', value: '5.1M' }, { label: 'Indexed', value: '1.8M' }, { label: 'Speed', value: '61' }, { label: 'Blog/mo', value: '9' }] },
  { key: 'compC', raw: '44', pct: 85, sub: [{ label: 'Backlinks', value: '6.3M' }, { label: 'Indexed', value: '1.5M' }, { label: 'Speed', value: '70' }, { label: 'Blog/mo', value: '17' }] },
];

const videoData: SeriesRow[] = [
  { key: 'target', raw: '1.2K', pct: 11, sub: [{ label: 'Total views', value: '180K' }, { label: 'Videos', value: '42' }, { label: 'Upload freq', value: '2/mo' }, { label: 'Avg views', value: '4.3K' }] },
  { key: 'compA', raw: '9.8K', pct: 89, sub: [{ label: 'Total views', value: '2.1M' }, { label: 'Videos', value: '287' }, { label: 'Upload freq', value: '8/mo' }, { label: 'Avg views', value: '7.3K' }] },
  { key: 'compB', raw: '2.9K', pct: 26, sub: [{ label: 'Total views', value: '540K' }, { label: 'Videos', value: '98' }, { label: 'Upload freq', value: '3/mo' }, { label: 'Avg views', value: '5.5K' }] },
  { key: 'compC', raw: '11K', pct: 100, sub: [{ label: 'Total views', value: '3.4M' }, { label: 'Videos', value: '412' }, { label: 'Upload freq', value: '11/mo' }, { label: 'Avg views', value: '8.2K' }] },
];

const paidMatrix: { key: CompanyKey; meta: 'detected' | 'none' | 'unknown'; google: 'detected' | 'none' | 'unknown'; linkedin: 'detected' | 'none' | 'unknown'; video: 'detected' | 'none' | 'unknown' }[] = [
  { key: 'target', meta: 'detected', google: 'detected', linkedin: 'detected', video: 'none' },
  { key: 'compA', meta: 'detected', google: 'detected', linkedin: 'detected', video: 'detected' },
  { key: 'compB', meta: 'none', google: 'detected', linkedin: 'none', video: 'none' },
  { key: 'compC', meta: 'detected', google: 'none', linkedin: 'detected', video: 'detected' },
];

const crossPlatformData: { channel: string; rows: SeriesRow[] }[] = snapshotData;

const sectionInsights: Record<string, string> = {
  snapshot: 'AMD leads NVIDIA by 29% in LinkedIn followers, but NVIDIA dominates website reach by 51% over Intel.',
  linkedin: 'AMD leads the target by 45% in LinkedIn followers and posts nearly twice as often.',
  instagram: 'AMD\'s 5.4% engagement rate is 2.6x the target\'s 2.1% — the largest visible gap on the page.',
  website: 'AMD\'s estimated monthly traffic is 2.4x the target\'s, with a stronger US concentration.',
  seo: 'AMD\'s authority proxy of 52 is 86% higher than the target\'s 28.',
  video: 'Qualcomm leads with 11K subscribers — 9.2x the target\'s 1.2K, and uploads 5.5x more often.',
  paid: 'AMD is the only competitor detected across all four paid channels.',
  cross: 'NVIDIA leads in website reach and YouTube, but trails in LinkedIn, Instagram, and SEO.',
};

const sourceLabels = ['Company website', 'Press release', 'News'];

function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [company, setCompany] = useState<Company>('NVIDIA');
  const [input, setInput] = useState('');
  const [isResearching, setIsResearching] = useState(false);
  const [researchStep, setResearchStep] = useState(0);
  const [reportReady, setReportReady] = useState(false);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    if (!isResearching) return undefined;
    const interval = window.setInterval(() => {
      setResearchStep((current) => {
        if (current >= researchSteps.length - 1) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            setIsResearching(false);
            setReportReady(true);
          }, 600);
          return current;
        }
        return current + 1;
      });
    }, 680);
    return () => window.clearInterval(interval);
  }, [isResearching]);

  const startAnalysis = (value: string) => {
    const normalized = value.trim();
    if (!normalized) return;
    const match = history.find((item) => item.name.toLowerCase() === normalized.toLowerCase());
    setCompany(match?.name ?? 'NVIDIA');
    setInput('');
    setScreen('intelligence');
    setReportReady(false);
    setResearchStep(0);
    setIsResearching(true);
    setChatMessages([]);
  };

  const openHistory = (item: HistoryItem) => {
    setCompany(item.name);
    setReportReady(true);
    setIsResearching(false);
    setScreen('intelligence');
  };

  const openBlank = () => {
    setReportReady(false);
    setIsResearching(false);
    setResearchStep(0);
    setChatMessages([]);
    setScreen('intelligence');
  };

  const askQuestion = () => {
    const question = chatInput.trim();
    if (!question) return;
    setChatMessages((messages) => [...messages, question]);
    setChatInput('');
  };

  return (
    <div className="app-shell">
      <TopNav screen={screen} onHome={() => setScreen('landing')} onNew={openBlank} />
      <AnimatePresence mode="wait">
        {screen === 'landing' && (
          <LandingPage key="landing" input={input} setInput={setInput} onAnalyze={startAnalysis} onHistory={openHistory} onNew={openBlank} />
        )}
        {screen === 'intelligence' && (
          <IntelligencePage
            key="intelligence"
            company={company}
            isResearching={isResearching}
            researchStep={researchStep}
            reportReady={reportReady}
            onBack={() => setScreen('landing')}
            onCompetitors={() => setScreen('competitors')}
            chatMessages={chatMessages}
            chatInput={chatInput}
            setChatInput={setChatInput}
            askQuestion={askQuestion}
          />
        )}
        {screen === 'competitors' && (
          <CompetitorPage key="competitors" company={company} onBack={() => setScreen('intelligence')} />
        )}
      </AnimatePresence>
    </div>
  );
}

function TopNav({ screen, onHome, onNew }: { screen: Screen; onHome: () => void; onNew: () => void }) {
  return (
    <header className="top-nav">
      <button className="wordmark" onClick={onHome} aria-label="Go to CORTEX home"><span className="wordmark-mark">C</span>ORTEX</button>
      {screen === 'landing' ? (
        <nav className="nav-links">
          <button onClick={onHome}>History</button>
          <button onClick={onNew}>New analysis</button>
          <button className="muted-nav">Settings</button>
        </nav>
      ) : (
        <div className="nav-context"><span className="nav-dot" /> Private research workspace</div>
      )}
      <button className="menu-button" aria-label="Open menu"><Menu size={17} strokeWidth={1.8} /></button>
    </header>
  );
}

function LandingPage({ input, setInput, onAnalyze, onHistory, onNew }: { input: string; setInput: (value: string) => void; onAnalyze: (value: string) => void; onHistory: (item: HistoryItem) => void; onNew: () => void }) {
  return (
    <motion.main className="landing-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="hero-section">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="eyebrow"><span className="eyebrow-line" /> Company intelligence, reimagined</div>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}>Understand any company<br /><em>before you pitch.</em></motion.h1>
        <p className="hero-copy">AI-powered company intelligence built from public data.<br />Quietly thorough. Immediately useful.</p>
        <CompanySearch input={input} setInput={setInput} onAnalyze={onAnalyze} />
        <div className="example-row"><span>Try an analysis</span>{['NVIDIA', 'Stripe', 'HubSpot', 'Zoho'].map((name) => <button key={name} onClick={() => onAnalyze(name)}>{name}</button>)}</div>
      </section>
      <section className="history-section">
        <div className="section-heading"><div><p className="eyebrow small">Your workspace</p><h2>Recent intelligence</h2></div><p>Continue where<br />you left off.</p></div>
        <div className="history-grid">
          {history.map((item, index) => <HistoryCard key={item.name} item={item} index={index} onClick={() => onHistory(item)} />)}
          <button className="history-add" onClick={onNew}><span><Plus size={20} /></span><strong>New company<br />analysis</strong><ArrowUpRight size={17} /></button>
        </div>
      </section>
      <footer className="footer-note"><span>Built for better conversations.</span><span>© CORTEX / 2024</span></footer>
    </motion.main>
  );
}

function CompanySearch({ input, setInput, onAnalyze }: { input: string; setInput: (value: string) => void; onAnalyze: (value: string) => void }) {
  return <form className="company-search" onSubmit={(event) => { event.preventDefault(); onAnalyze(input); }}><Search size={19} /><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Enter a company to understand..." aria-label="Company name" /><button type="submit"><ArrowUpRight size={18} /></button></form>;
}

function HistoryCard({ item, index, onClick }: { item: HistoryItem; index: number; onClick: () => void }) {
  return <motion.button className={`history-card card-${index}`} onClick={onClick} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ y: -5 }}>
    <span className="card-glow" />
    <div className="card-top"><span className="company-avatar" style={{ backgroundColor: item.color }}>{item.monogram}</span><span className="card-open"><ArrowUpRight size={16} /></span></div>
    <div className="card-chat-label"><span className="chat-signal" /> CORTEX brief <span className="card-time">{item.time}</span></div>
    <div className="card-body"><p className="card-industry">{item.industry}</p><h3>{item.name}</h3><div className="chat-snippet"><span className="chat-mark"><Sparkles size={12} /></span><p>{item.preview}</p></div></div>
    <div className="card-bottom"><span className="card-question">View intelligence</span><span className="card-status">Ready <span className="status-light" /></span></div>
  </motion.button>;
}

function IntelligencePage({ company, isResearching, researchStep, reportReady, onBack, onCompetitors, chatMessages, chatInput, setChatInput, askQuestion }: { company: Company; isResearching: boolean; researchStep: number; reportReady: boolean; onBack: () => void; onCompetitors: () => void; chatMessages: string[]; chatInput: string; setChatInput: (value: string) => void; askQuestion: () => void }) {
  return <motion.main className="intelligence-page" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
    <div className="workspace-bar"><button className="back-button" onClick={onBack}><ArrowLeft size={16} /> CORTEX</button><div className="workspace-company"><span className="status-pulse" /> {company} <span className="workspace-label">/ intelligence</span></div><button className="competitor-button" onClick={onCompetitors}>Competitive landscape <ArrowUpRight size={16} /></button></div>
    {!reportReady && <ResearchView company={company} isResearching={isResearching} researchStep={researchStep} />}
    {reportReady && <ReportView company={company} />}
    {reportReady && <ChatDock company={company} messages={chatMessages} input={chatInput} setInput={setChatInput} onAsk={askQuestion} />}
  </motion.main>;
}

function ResearchView({ company, isResearching, researchStep }: { company: Company; isResearching: boolean; researchStep: number }) {
  return <section className="research-view"><div className="research-kicker"><Sparkles size={16} /> Live research</div><h1>{isResearching ? <>Building a point of view<br /><em>on {company}.</em></> : <>Tell us which company<br /><em>you want to understand.</em></>}</h1>{isResearching ? <div className="research-panel"><div className="research-panel-top"><span>Researching {company}</span><span>{Math.round(((researchStep + 1) / researchSteps.length) * 100)}%</span></div><div className="progress-track"><motion.div className="progress-value" animate={{ width: `${((researchStep + 1) / researchSteps.length) * 100}%` }} /></div><div className="research-list">{researchSteps.map((step, index) => <div key={step} className={index < researchStep ? 'complete' : index === researchStep ? 'active' : ''}><span className="research-icon">{index < researchStep ? <Check size={13} /> : index === researchStep ? <Circle size={9} fill="currentColor" /> : <span />}</span>{step}<span className="step-state">{index < researchStep ? 'Complete' : index === researchStep ? 'In progress' : 'Queued'}</span></div>)}</div></div> : <div className="empty-company-prompt"><p>Start with a name, website, or short description. CORTEX will map the business, market, signals, and competitive context.</p><div className="prompt-hint"><Feather size={15} /> The clearer the question, the sharper the brief.</div></div>}</section>;
}

function ReportView({ company }: { company: Company }) {
  const isOpenAI = company === 'OpenAI';
  const displayCompany = isOpenAI ? 'OpenAI' : company;
  return <article className="report-view report-reference">
    <header className="reference-header">
      <div className="reference-brand"><span className="reference-logo">O</span><div><strong>{displayCompany}</strong><span>Enterprise Technology &amp; Cloud Services</span></div></div>
      <div className="reference-status"><span>Company intelligence</span><span className="reference-confidence">High confidence</span><span>18 sources</span></div>
      <button className="reference-share" aria-label="Share report"><ExternalLink size={13} /></button>
    </header>
    <section className="reference-intro">
      <div className="reference-title-row"><div><p className="reference-kicker">Company intelligence</p><h1>{displayCompany}</h1><p className="reference-subtitle">Enterprise Technology &amp; Cloud Services</p></div><button className="reference-action">Company overview <ArrowUpRight size={12} /></button></div>
      <div className="reference-facts"><span><b>Founded</b> 2015</span><span><b>HQ</b> San Francisco, CA</span><span><b>Employees</b> 1,000–5,000</span></div>
      <div className="reference-summary"><p>{displayCompany} is a leading technology company operating in the software and enterprise technology space, headquartered in San Francisco, California. The company develops and delivers AI-powered products and services for businesses and consumers.</p><div className="reference-tags"><ReportTag>Artificial intelligence</ReportTag><ReportTag>Cloud services</ReportTag><ReportTag>Software</ReportTag></div></div>
    </section>
    <div className="reference-source-row"><span className="reference-kicker">Accumulated primary sources</span><ReportPill label="Company website" /><ReportPill label="Press release" /><ReportPill label="Industry report" /><ReportPill label="News" /><ReportPill label="Company filings" /></div>
    <ReferenceSection number="01" title="Business Overview"><p>{displayCompany} has established a prominent market position through continuous innovation, scalable enterprise infrastructure, and customer-centric product expansion across international markets.</p></ReferenceSection>
    <ReferenceSection number="02" title="Market Landscape"><p>{displayCompany} competes in a high-growth market driven by rapid cloud adoption, digital automation, and enterprise workflow optimization.</p><div className="reference-columns"><ReferenceCard title="Primary direct competitors"><ReportPill label="Google / DeepMind" /><ReportPill label="Microsoft / Azure AI" /><ReportPill label="Anthropic" /></ReferenceCard><ReferenceCard title="Key sector movements"><ReferenceList items={['Increased adoption of AI across enterprise workflows', 'Expansion of cloud infrastructure and platform services', 'Focus on responsible AI and data security']} /></ReferenceCard></div></ReferenceSection>
    <ReferenceSection number="03" title="Transformation Signals"><ReferenceNumberedList items={['Accelerated adoption of AI-driven features across the company’s flagship product line.', 'Expansion of strategic ecosystem channel partnerships and cloud marketplace distribution.', 'Investments in customer success automation and zero-trust security infrastructure.']} /></ReferenceSection>
    <ReferenceSection number="04" title="Business Challenges &amp; Vulnerabilities"><ReferenceList accent items={['Navigating competitive and regulatory dynamics within the rapidly expanding enterprise buyer landscape.', 'Maintaining rapid engineering delivery while scaling compliance controls globally.', 'Managing customer acquisition cost and retention across digital channels.']} /></ReferenceSection>
    <ReferenceSection number="05" title="Technology &amp; Innovation Signals"><div className="reference-columns three"><ReferenceCard title="Proprietary research"><p>Continued investment in foundational models and applied AI research.</p><ReportPill label="High confidence" accent /></ReferenceCard><ReferenceCard title="Integrated delivery and analytics"><p>Platform offerings provide greater value through connected services.</p><ReportPill label="Medium confidence" accent /></ReferenceCard><ReferenceCard title="Developer ecosystem"><p>Developer tooling and software capabilities reinforce platform adoption.</p><ReportPill label="Medium confidence" accent /></ReferenceCard></div></ReferenceSection>
    <ReferenceSection number="06" title="Growth &amp; Strategic Direction"><ReferenceList items={['Targeting enterprise expansion via multi-product bundling and custom enterprise licensing.', 'Geographic expansion across EMEA and APAC key regional hubs.', 'Investments in AI research to augment core product productivity features.']} /></ReferenceSection>
    <ReferenceSection number="07" title="Competitive Intelligence &amp; Moat Analysis"><div className="reference-quote">“{displayCompany} maintains a strong market affinity by combining high product reliability with intuitive user experiences, creating significant customer retention and organic word-of-mouth adoption.”</div></ReferenceSection>
  </article>;
}

function ReportPill({ label, accent = false }: { label: string; accent?: boolean }) { return <span className={`reference-pill ${accent ? 'accent' : ''}`}>{label}<ExternalLink size={9} /></span>; }
function ReportTag({ children }: { children: ReactNode }) { return <span className="reference-tag">{children}</span>; }
function ReferenceSection({ number, title, children }: { number: string; title: string; children: ReactNode }) { return <section className="reference-section"><p className="reference-kicker">{number} / analysis</p><h2>{title}</h2>{children}</section>; }
function ReferenceCard({ title, children }: { title: string; children: ReactNode }) { return <div className="reference-card"><h3>{title}</h3><div>{children}</div></div>; }
function ReferenceList({ items, accent = false }: { items: string[]; accent?: boolean }) { return <ul className={`reference-list ${accent ? 'accent-list' : ''}`}>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
function ReferenceNumberedList({ items }: { items: string[] }) { return <ol className="reference-numbered-list">{items.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol>; }



function ChatDock({ company, messages, input, setInput, onAsk }: { company: Company; messages: string[]; input: string; setInput: (value: string) => void; onAsk: () => void }) {
  return <div className="chat-dock"><AnimatePresence>{messages.length > 0 && <motion.div className="chat-response" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><div className="chat-avatar"><Sparkles size={14} /></div><div><p className="chat-question">{messages[messages.length - 1]}</p><p className="chat-answer">CORTEX found this signal consistently across the collected intelligence: {company} is expanding its advantage by turning infrastructure depth into a broader platform relationship with enterprise buyers.</p></div></motion.div>}</AnimatePresence><form className="chat-input" onSubmit={(event) => { event.preventDefault(); onAsk(); }}><Sparkles size={17} /><input value={input} onChange={(event) => setInput(event.target.value)} placeholder={`Ask anything about ${company}...`} /><button type="submit"><ArrowUpRight size={17} /></button></form><div className="suggested-questions"><span>Try asking</span>{['Why are they expanding?', 'Who are the strongest competitors?', 'What signals did you find?'].map((question) => <button key={question} onClick={() => setInput(question)}>{question}</button>)}</div></div>;
}

function CompetitorPage({ company, onBack }: { company: Company; onBack: () => void }) {
  return <motion.main className="competitor-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="competitor-header"><button className="back-button" onClick={onBack}><ArrowLeft size={16} /> {company} intelligence</button><div className="present-label"><span className="nav-dot" /> Presentation view</div><button className="present-button"><span /> Present mode <ArrowUpRight size={15} /></button></div>
    <div className="competitor-title"><div><p className="eyebrow small"><span className="eyebrow-line" /> Comparative intelligence / 02</p><h1>Competitive<br /><em>landscape.</em></h1></div><p>How {company}&apos;s digital presence compares<br />with its closest competitors.</p></div>
    <div className="legend-bar">
      <span className="legend-label">Legend</span>
      {(Object.keys(companyLabels) as CompanyKey[]).map((key) => (
        <span key={key} className={`legend-item ${key === 'target' ? 'legend-target' : ''}`}>
          <span className="legend-dot" style={{ backgroundColor: companyColors[key] }} />
          {companyLabels[key]}{key === 'target' ? ' (target)' : ''}
        </span>
      ))}
    </div>
    <BentoOverviewSection company={company} />
    <SectionBlock id="snapshot-section" index="01" title="Competitive Snapshot" subtitle="Relative digital presence across the major channels." insight={sectionInsights.snapshot}>
      <GroupedBarChart data={snapshotData} />
    </SectionBlock>
    <SectionBlock id="linkedin-section" index="02" title="LinkedIn Presence" subtitle="Follower count with growth, engagement, and publishing signals." insight={sectionInsights.linkedin}>
      <PrimaryChart rows={linkedInData} metricLabel="Followers" />
    </SectionBlock>
    <SectionBlock id="instagram-section" index="03" title="Instagram Presence" subtitle="Follower count and engagement rate, side by side." insight={sectionInsights.instagram}>
      <PrimaryChart rows={instagramData} metricLabel="Followers" />
    </SectionBlock>
    <SectionBlock id="website-section" index="04" title="Website Reach" subtitle="Estimated monthly traffic with source and regional signals." insight={sectionInsights.website}>
      <PrimaryChart rows={websiteData} metricLabel="Monthly visits" />
    </SectionBlock>
    <SectionBlock id="seo-section" index="05" title="Search Presence" subtitle="Authority proxy with backlinks, indexed pages, and speed." insight={sectionInsights.seo}>
      <PrimaryChart rows={seoData} metricLabel="Authority proxy" />
    </SectionBlock>
    <SectionBlock id="video-section" index="06" title="Video Presence" subtitle="YouTube subscribers with views, upload frequency, and catalog size." insight={sectionInsights.video}>
      <PrimaryChart rows={videoData} metricLabel="Subscribers" />
    </SectionBlock>
    <SectionBlock id="paid-section" index="07" title="Paid Presence" subtitle="Detected advertising activity across Meta, Google, LinkedIn, and video." insight={sectionInsights.paid}>
      <PaidMatrix matrix={paidMatrix} />
    </SectionBlock>
    <SectionBlock id="cross-section" index="08" title="Digital Presence Across Channels" subtitle="The full competitive picture in one view." insight={sectionInsights.cross} hero>
      <CrossPlatformChart data={crossPlatformData} />
    </SectionBlock>
    <GapInsights />
    <DataTransparency />
  </motion.main>;
}

function SectionBlock({ id, index, title, subtitle, insight, children, hero = false }: { id?: string; index: string; title: string; subtitle: string; insight: string; children: ReactNode; hero?: boolean }) {
  return <section id={id} className={`viz-section ${hero ? 'viz-hero' : ''}`}>
    <div className="viz-header">
      <div><p className="viz-index">{index}</p><h2>{title}</h2><p className="viz-subtitle">{subtitle}</p></div>
    </div>
    <div className="viz-body">{children}</div>
    <div className="viz-insight"><span className="viz-insight-mark" /><p>{insight}</p></div>
  </section>;
}

function getBezierPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];
    const mx = (current.x + next.x) / 2;
    d += ` C ${mx},${current.y} ${mx},${next.y} ${next.x},${next.y}`;
  }
  return d;
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.47 1.47 0 0 0-1.47 1.47c0 .81.66 1.47 1.47 1.47.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function BentoOverviewSection({ company }: { company: Company }) {
  const linkedinRow = snapshotData.find((d) => d.category === 'LinkedIn');
  const instagramRow = snapshotData.find((d) => d.category === 'Instagram');
  const youtubeRow = snapshotData.find((d) => d.category === 'YouTube');

  const getTargetMetric = (group: typeof snapshotData[0] | undefined) => {
    if (!group) return { val: '—', rankStr: '—' };
    const targetItem = group.rows.find((r) => r.key === 'target');
    const sorted = [...group.rows].sort((a, b) => b.pct - a.pct);
    const rank = sorted.findIndex((r) => r.key === 'target') + 1;
    return {
      val: targetItem?.raw ?? '—',
      rankStr: `Rank #${rank} / ${group.rows.length}`,
      rankNum: rank,
    };
  };

  const linkedinInfo = getTargetMetric(linkedinRow);
  const instagramInfo = getTargetMetric(instagramRow);
  const youtubeInfo = getTargetMetric(youtubeRow);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bento-overview-section">
      <div className="bento-grid">
        {/* Card 1: Large Graph Hero Card */}
        <motion.div
          className="bento-card bento-hero-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bento-hero-header">
            <div>
              <span className="bento-kicker">Digital Presence Trajectory</span>
              <h2>Competitive Ranking</h2>
              <p className="bento-hero-subtitle">Who is leading across digital channels</p>
            </div>
            <div className="bento-hero-badge">
              <span className="bento-badge-dot" />
              Relative competitive ranking
            </div>
          </div>

          <BentoLineChart />

          <div className="bento-chart-legend">
            {(Object.keys(companyLabels) as CompanyKey[]).map((key) => (
              <span key={key} className="bento-legend-item">
                <span className="bento-legend-dot" style={{ backgroundColor: companyColors[key] }} />
                <span className="bento-legend-name">{companyLabels[key]}</span>
                {key === 'target' && <span className="bento-target-tag">Target</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Platform Metric Cards */}
        <div className="bento-right-col">
          <div className="bento-right-top-row">
            {/* Card 2: LinkedIn */}
            <motion.button
              className="bento-card bento-metric-card linkedin-card"
              onClick={() => scrollToSection('linkedin-section')}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="bento-card-top">
                <div className="platform-icon-badge linkedin-badge">
                  <LinkedInIcon />
                </div>
                <span className="rank-tag">{linkedinInfo.rankStr}</span>
              </div>
              <div className="bento-card-content">
                <span className="platform-name">LinkedIn</span>
                <div className="metric-value-row">
                  <span className="metric-value">{linkedinInfo.val}</span>
                  <span className="metric-unit">Followers</span>
                </div>
              </div>
              <div className="bento-card-footer">
                <span>View LinkedIn Presence</span>
                <ChevronRight size={13} />
              </div>
            </motion.button>

            {/* Card 3: Instagram */}
            <motion.button
              className="bento-card bento-metric-card instagram-card"
              onClick={() => scrollToSection('instagram-section')}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              whileHover={{ y: -3 }}
            >
              <div className="bento-card-top">
                <div className="platform-icon-badge instagram-badge">
                  <InstagramIcon />
                </div>
                <span className="rank-tag">{instagramInfo.rankStr}</span>
              </div>
              <div className="bento-card-content">
                <span className="platform-name">Instagram</span>
                <div className="metric-value-row">
                  <span className="metric-value">{instagramInfo.val}</span>
                  <span className="metric-unit">Followers</span>
                </div>
              </div>
              <div className="bento-card-footer">
                <span>View Instagram Presence</span>
                <ChevronRight size={13} />
              </div>
            </motion.button>
          </div>

          {/* Card 4: YouTube */}
          <motion.button
            className="bento-card bento-metric-card youtube-card"
            onClick={() => scrollToSection('video-section')}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -3 }}
          >
            <div className="bento-card-top">
              <div className="platform-icon-badge youtube-badge">
                <YouTubeIcon />
              </div>
              <span className="rank-tag rank-tag-leader">{youtubeInfo.rankStr}</span>
            </div>
            <div className="bento-card-content">
              <span className="platform-name">YouTube</span>
              <div className="metric-value-row">
                <span className="metric-value">{youtubeInfo.val}</span>
                <span className="metric-unit">Subscribers</span>
              </div>
            </div>
            <div className="bento-card-footer">
              <span>View Video Presence</span>
              <ChevronRight size={13} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function BentoLineChart() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const seriesData: Record<CompanyKey, number[]> = {
    target: [62, 68, 73, 79, 85, 89],
    compA: [70, 74, 80, 84, 88, 92],
    compB: [78, 75, 71, 68, 65, 62],
    compC: [45, 48, 50, 52, 51, 54],
  };

  const width = 640;
  const height = 220;
  const padL = 36;
  const padR = 20;
  const padT = 18;
  const padB = 30;

  const plotW = width - padL - padR;
  const plotH = height - padT - padB;

  const getX = (index: number) => padL + index * (plotW / (months.length - 1));
  const getY = (val: number) => padT + plotH * (1 - val / 100);

  const companiesKeys = Object.keys(companyLabels) as CompanyKey[];

  const paths = companiesKeys.map((key) => {
    const points = seriesData[key].map((val, idx) => ({ x: getX(idx), y: getY(val) }));
    return { key, path: getBezierPath(points), points };
  });

  const targetPoints = seriesData.target.map((val, idx) => ({ x: getX(idx), y: getY(val) }));
  const targetAreaPath = `${getBezierPath(targetPoints)} L ${getX(months.length - 1)},${padT + plotH} L ${getX(0)},${padT + plotH} Z`;

  return (
    <div className="bento-chart-container">
      <svg
        className="bento-svg-chart"
        viewBox={`0 0 ${width} ${height}`}
        onMouseLeave={() => setHoverIndex(null)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const svgX = (mouseX / rect.width) * width;
          let closestIdx = 0;
          let minDiff = Infinity;
          months.forEach((_, idx) => {
            const diff = Math.abs(svgX - getX(idx));
            if (diff < minDiff) {
              minDiff = diff;
              closestIdx = idx;
            }
          });
          setHoverIndex(closestIdx);
        }}
      >
        <defs>
          <linearGradient id="targetAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6d4aff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#6d4aff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((val) => {
          const y = getY(val);
          return (
            <g key={val}>
              <line x1={padL} y1={y} x2={width - padR} y2={y} stroke="#eeeDE9" strokeDasharray="3 3" strokeWidth="1" />
              <text x={padL - 8} y={y + 3} textAnchor="end" fontSize="9" fill="#aaa7ad" fontFamily="DM Mono, monospace">
                {val}
              </text>
            </g>
          );
        })}

        {/* X axis labels */}
        {months.map((m, idx) => (
          <text key={m} x={getX(idx)} y={height - 8} textAnchor="middle" fontSize="10" fill="#9a96a0" fontFamily="DM Mono, monospace">
            {m}
          </text>
        ))}

        {/* Target Area Fill */}
        <motion.path
          d={targetAreaPath}
          fill="url(#targetAreaGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Company Lines */}
        {paths.map(({ key, path }) => (
          <motion.path
            key={key}
            d={path}
            fill="none"
            stroke={companyColors[key]}
            strokeWidth={key === 'target' ? 2.8 : 1.8}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        ))}

        {/* Data points */}
        {paths.map(({ key, points }) =>
          points.map((pt, idx) => (
            <circle
              key={`${key}-${idx}`}
              cx={pt.x}
              cy={pt.y}
              r={key === 'target' ? 3.5 : 2.5}
              fill={companyColors[key]}
              stroke="#fff"
              strokeWidth={1.5}
            />
          ))
        )}

        {/* Hover vertical line & active dots */}
        {hoverIndex !== null && (
          <g>
            <line
              x1={getX(hoverIndex)}
              y1={padT}
              x2={getX(hoverIndex)}
              y2={padT + plotH}
              stroke="#6d4aff"
              strokeOpacity="0.3"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            {companiesKeys.map((key) => {
              const val = seriesData[key][hoverIndex];
              const cx = getX(hoverIndex);
              const cy = getY(val);
              return (
                <circle
                  key={`hover-dot-${key}`}
                  cx={cx}
                  cy={cy}
                  r={key === 'target' ? 5.5 : 4.5}
                  fill={companyColors[key]}
                  stroke="#fff"
                  strokeWidth="2"
                />
              );
            })}
          </g>
        )}
      </svg>

      {/* Hover Tooltip Overlay */}
      {hoverIndex !== null && (
        <div
          className="bento-chart-tooltip"
          style={{
            left: `${Math.min(Math.max((getX(hoverIndex) / width) * 100, 15), 85)}%`,
          }}
        >
          <div className="tooltip-header">{months[hoverIndex]} Relative Index</div>
          {companiesKeys
            .map((k) => ({ key: k, val: seriesData[k][hoverIndex] }))
            .sort((a, b) => b.val - a.val)
            .map((item) => (
              <div key={item.key} className="tooltip-line">
                <span className="tooltip-dot" style={{ backgroundColor: companyColors[item.key] }} />
                <span className="tooltip-company-name">
                  {companyLabels[item.key]}
                  {item.key === 'target' ? ' (you)' : ''}
                </span>
                <span className="tooltip-val">{item.val}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

function BarRow({ row, metricLabel }: { row: SeriesRow; metricLabel?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="bar-row" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ ['--bar-color' as string]: companyColors[row.key] }}>
      <span className="bar-company">{companyLabels[row.key]}{row.key === 'target' ? ' (you)' : ''}</span>
      <div className="bar-track-h">
        <motion.div className="bar-fill-h" initial={{ width: 0 }} whileInView={{ width: `${row.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }} style={{ backgroundColor: companyColors[row.key] }} />
        <span className="bar-value-h" style={{ color: companyColors[row.key] }}>{row.raw}</span>
      </div>
      <AnimatePresence>{hovered && row.sub && (
        <motion.div className="bar-tooltip" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.15 }}>
          <p className="tooltip-company" style={{ color: companyColors[row.key] }}>{companyLabels[row.key]}</p>
          <p className="tooltip-metric">{metricLabel}: <strong>{row.raw}</strong></p>
          {row.sub.map((s) => <div key={s.label} className="tooltip-sub"><span>{s.label}</span><strong>{s.value}</strong></div>)}
        </motion.div>
      )}</AnimatePresence>
    </div>
  );
}

function PrimaryChart({ rows, metricLabel }: { rows: SeriesRow[]; metricLabel: string }) {
  return <div className="primary-chart">
    <div className="chart-metric-label">{metricLabel}</div>
    <div className="bar-rows">{rows.map((row) => <BarRow key={row.key} row={row} metricLabel={metricLabel} />)}</div>
    {rows[0]?.sub && <div className="sub-metrics-grid">
      {rows[0].sub.map((s) => (
        <div key={s.label} className="sub-metric-col">
          <p className="sub-metric-label">{s.label}</p>
          {rows.map((row) => <div key={row.key} className="sub-metric-cell" style={{ color: companyColors[row.key] }}>
            <span className="sub-dot" style={{ backgroundColor: companyColors[row.key] }} />
            <span className="sub-company">{companyLabels[row.key]}</span>
            <strong>{row.sub?.find((x) => x.label === s.label)?.value ?? '—'}</strong>
          </div>)}
        </div>
      ))}
    </div>}
  </div>;
}

function GroupedBarChart({ data }: { data: { category: string; rows: SeriesRow[] }[] }) {
  return <div className="grouped-chart">
    {data.map((group) => (
      <div key={group.category} className="grouped-category">
        <p className="grouped-cat-label">{group.category}</p>
        <div className="grouped-rows">
          {group.rows.map((row) => (
            <div key={row.key} className="grouped-bar-row" style={{ ['--bar-color' as string]: companyColors[row.key] }}>
              <span className="grouped-bar-company">{companyLabels[row.key]}</span>
              <div className="grouped-bar-track">
                <motion.div className="grouped-bar-fill" initial={{ width: 0 }} whileInView={{ width: `${row.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ backgroundColor: companyColors[row.key] }} />
              </div>
              <span className="grouped-bar-value" style={{ color: companyColors[row.key] }}>{row.raw}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>;
}

function CrossPlatformChart({ data }: { data: { channel: string; rows: SeriesRow[] }[] }) {
  const channels = data.map((d) => d.category);
  const companies = Object.keys(companyLabels) as CompanyKey[];
  return <div className="cross-chart">
    <div className="cross-grid">
      <div className="cross-corner" />
      {channels.map((ch) => <div key={ch} className="cross-channel-header">{ch}</div>)}
      {companies.map((compKey) => (
        <Fragment key={compKey}>
          <div className="cross-company-label" style={{ color: companyColors[compKey] }}>
            <span className="cross-dot" style={{ backgroundColor: companyColors[compKey] }} />
            {companyLabels[compKey]}{compKey === 'target' ? ' (you)' : ''}
          </div>
          {channels.map((ch) => {
            const row = data.find((d) => d.category === ch)?.rows.find((r) => r.key === compKey);
            return <div key={ch} className="cross-cell" style={{ ['--bar-color' as string]: companyColors[compKey] }}>
              <div className="cross-bar-track">
                <motion.div className="cross-bar-fill" initial={{ width: 0 }} whileInView={{ width: `${row?.pct ?? 0}%` }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ backgroundColor: companyColors[compKey] }} />
              </div>
              <span className="cross-value">{row?.raw ?? '—'}</span>
            </div>;
          })}
        </Fragment>
      ))}
    </div>
  </div>;
}

function PaidMatrix({ matrix }: { matrix: { key: CompanyKey; meta: 'detected' | 'none' | 'unknown'; google: 'detected' | 'none' | 'unknown'; linkedin: 'detected' | 'none' | 'unknown'; video: 'detected' | 'none' | 'unknown' }[] }) {
  const channels: { key: 'meta' | 'google' | 'linkedin' | 'video'; label: string }[] = [{ key: 'meta', label: 'Meta' }, { key: 'google', label: 'Google' }, { key: 'linkedin', label: 'LinkedIn' }, { key: 'video', label: 'Video' }];
  return <div className="paid-matrix">
    <div className="pm-corner" />
    {channels.map((ch) => <div key={ch.key} className="pm-channel-header">{ch.label}</div>)}
    {matrix.map((row) => (
      <Fragment key={row.key}>
        <div className="pm-company-label" style={{ color: companyColors[row.key] }}>
          <span className="pm-dot" style={{ backgroundColor: companyColors[row.key] }} />
          {companyLabels[row.key]}{row.key === 'target' ? ' (you)' : ''}
        </div>
        {channels.map((ch) => {
          const status = row[ch.key];
          return <div key={ch.key} className="pm-cell">
            {status === 'detected' ? <span className="pm-detected" style={{ borderColor: companyColors[row.key], color: companyColors[row.key] }}>●</span>
              : status === 'none' ? <span className="pm-none">○</span>
                : <span className="pm-unknown">—</span>}
          </div>;
        })}
      </Fragment>
    ))}
    <div className="pm-legend">
      <span><span className="pm-detected" style={{ borderColor: '#6d4aff', color: '#6d4aff' }}>●</span> Detected</span>
      <span><span className="pm-none">○</span> Not detected — no publicly observable evidence found</span>
      <span><span className="pm-unknown">—</span> Unknown</span>
    </div>
  </div>;
}

function GapInsights() {
  const insights = [
    { metric: 'Instagram engagement', text: 'AMD\'s 5.4% engagement rate is 2.6x the target\'s 2.1% — the widest relative gap on the page.', tag: 'Largest gap' },
    { metric: 'YouTube subscribers', text: 'Qualcomm leads with 11K subscribers vs the target\'s 1.2K — a 9.2x difference.', tag: 'Falling behind' },
    { metric: 'Website reach', text: 'The target leads with 12.4M monthly visits, 51% ahead of Intel.', tag: 'Ahead' },
    { metric: 'Paid presence', text: 'AMD is the only competitor detected across all four paid channels.', tag: 'Watch' },
  ];
  return <section className="gap-insights-section">
    <div className="gap-heading"><p className="eyebrow small">Read between the numbers</p><h2>Competitive<br /><em>gaps.</em></h2></div>
    <div className="gap-insights-grid">{insights.map((ins) => (
      <div key={ins.metric} className="gap-insight-card">
        <span className="gap-insight-tag">{ins.tag}</span>
        <h3>{ins.metric}</h3>
        <p>{ins.text}</p>
      </div>
    ))}</div>
  </section>;
}

function DataTransparency() {
  return <section className="data-transparency">
    <div className="dt-header"><p className="eyebrow small">Data transparency</p><h3>How this was collected</h3></div>
    <div className="dt-body">
      <p>All metrics are derived from publicly observable digital signals — social profiles, website traffic estimators, search indexes, and ad libraries. Values marked as estimates reflect ranges, not precise counts. &quot;Not detected&quot; means no publicly observable evidence was found, not that the company does not advertise. The authority proxy is a composite of backlinks, indexed pages, and page speed — it is not an official Google score.</p>
      <div className="dt-meta">
        <span>18 sources collected</span><span>High confidence</span><span>Updated just now</span>
      </div>
    </div>
  </section>;
}

export default App;
