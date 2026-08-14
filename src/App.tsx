import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
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
import {
  CompanyKey,
  SeriesRow,
  PaidMatrixRow,
  CompetitiveRankingChart,
  CompetitiveSnapshot,
  LinkedInPresence,
  InstagramPresence,
  WebsiteReach,
  SearchPresence,
  VideoPresence,
  PaidPresence,
  DigitalPresenceAcrossChannels,
  CompetitiveGapsSummary,
  DataTransparency,
} from './components/CompetitiveLandscape';

type Screen = 'landing' | 'intelligence' | 'competitors';
type Company = 'NVIDIA' | 'OpenAI' | 'Microsoft' | 'Salesforce' | 'Zoho';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
};

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

const crossPlatformData = snapshotData;

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

function generateAIResponse(company: Company, question: string): string {
  const q = question.toLowerCase();
  if (q.includes('expand') || q.includes('growth') || q.includes('strategy') || q.includes('why are they expanding')) {
    return `CORTEX intelligence indicates that ${company} is expanding rapidly by turning its core technological depth into a comprehensive enterprise platform relationship. By bundling multi-product capabilities and establishing strong partner distribution channels, ${company} is scaling revenue per customer while locking in platform stickiness.`;
  }
  if (q.includes('competitor') || q.includes('rival') || q.includes('who are') || q.includes('strongest competitor')) {
    if (company === 'NVIDIA') {
      return `Primary direct competitors for NVIDIA include AMD (accelerating in AI inference and training accelerators), Intel (enterprise server and silicon), and Qualcomm (edge computing and mobile chips). In hyperscale silicon, custom chips like Google TPU, AWS Inferentia, and Meta MTIA also present long-term competitive dynamics.`;
    } else if (company === 'OpenAI') {
      return `Primary direct competitors for OpenAI include Google / DeepMind (Gemini ecosystem), Anthropic (Claude platform), and Microsoft / Azure AI (both a key partner and sovereign infrastructure provider), alongside open-weight initiatives like Meta Llama.`;
    } else if (company === 'Microsoft') {
      return `Primary competitors across business lines include Amazon AWS and Google Cloud in infrastructure, Salesforce in enterprise CRM, and Apple and Google in consumer platforms and developer ecosystems.`;
    } else if (company === 'Salesforce') {
      return `Primary direct competitors include Microsoft Dynamics 365, HubSpot, Oracle CX Cloud, and SAP CRM, competing aggressively on AI agent workflows and unified customer data platforms.`;
    } else {
      return `Primary direct competitors for ${company} include Freshworks, HubSpot, Salesforce, and Microsoft 365, focusing on cost-effective, all-in-one software suites for SMBs and mid-market enterprises.`;
    }
  }
  if (q.includes('signal') || q.includes('what signal') || q.includes('transformation') || q.includes('detected')) {
    return `Key transformation signals detected for ${company}: (1) Accelerated deployment of AI-powered workflows across the core product line; (2) Strategic expansion of ecosystem cloud marketplace distribution; (3) Increasing focus on zero-trust enterprise security and developer tooling to protect the core moat.`;
  }
  if (q.includes('challenge') || q.includes('risk') || q.includes('vulnerabilit') || q.includes('weakness')) {
    return `Identified vulnerabilities for ${company} include managing customer acquisition cost at scale, navigating evolving international compliance standards, and maintaining high engineering velocity amid aggressive competitor feature matching.`;
  }
  if (q.includes('founded') || q.includes('hq') || q.includes('employee') || q.includes('fact')) {
    return `${company} maintains a high confidence intelligence profile with verified presence across enterprise software, cloud services, and international hubs. Source aggregation confirms strong market positioning.`;
  }
  return `Based on accumulated primary source intelligence for ${company}, ${company} is leveraging sustained R&D investments and high user affinity to defend its core market position while driving systematic cross-sell adoption across enterprise buyers.`;
}

function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [company, setCompany] = useState<Company>('NVIDIA');
  const [input, setInput] = useState('');
  const [isResearching, setIsResearching] = useState(false);
  const [researchStep, setResearchStep] = useState(0);
  const [reportReady, setReportReady] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
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
    setChatMessages([]);
    setScreen('intelligence');
  };

  const openBlank = () => {
    setReportReady(false);
    setIsResearching(false);
    setResearchStep(0);
    setChatMessages([]);
    setScreen('intelligence');
  };

  const askQuestion = (overridePrompt?: string) => {
    const question = (overridePrompt ?? chatInput).trim();
    if (!question) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      role: 'user',
      content: question,
      timestamp: timeString,
    };

    const assistantMsg: ChatMessage = {
      id: `assistant-${Date.now() + 1}-${Math.random().toString(36).slice(2, 7)}`,
      role: 'assistant',
      content: generateAIResponse(company, question),
      timestamp: timeString,
    };

    setChatMessages((messages) => [...messages, userMsg, assistantMsg]);
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

function IntelligencePage({ company, isResearching, researchStep, reportReady, onBack, onCompetitors, chatMessages, chatInput, setChatInput, askQuestion }: { company: Company; isResearching: boolean; researchStep: number; reportReady: boolean; onBack: () => void; onCompetitors: () => void; chatMessages: ChatMessage[]; chatInput: string; setChatInput: (value: string) => void; askQuestion: (overridePrompt?: string) => void }) {
  return <motion.main className="intelligence-page" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
    <div className="workspace-bar"><button className="back-button" onClick={onBack}><ArrowLeft size={16} /> CORTEX</button><div className="workspace-company"><span className="status-pulse" /> {company} <span className="workspace-label">/ intelligence</span></div><button className="competitor-button" onClick={onCompetitors}>Competitive landscape <ArrowUpRight size={16} /></button></div>
    {!reportReady && <ResearchView company={company} isResearching={isResearching} researchStep={researchStep} />}
    {reportReady && <>
      <ReportView company={company} />
      <ChatSection company={company} messages={chatMessages} input={chatInput} setInput={setChatInput} onAsk={askQuestion} />
    </>}
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



function ChatSection({ company, messages, input, setInput, onAsk }: { company: Company; messages: ChatMessage[]; input: string; setInput: (value: string) => void; onAsk: (overridePrompt?: string) => void }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section className="chat-conversation-section">
      <div className="chat-section-header">
        <div className="reference-kicker"><Sparkles size={13} /> 08 / Interactive Intelligence</div>
        <h2>Ask CORTEX about {company}</h2>
        <p className="chat-section-subtitle">
          Query primary sources, business signals, and competitive insights in real-time.
        </p>
      </div>

      <div className="chat-box-card">
        <div className="chat-messages-container" tabIndex={0} aria-label="Conversation thread">
          {messages.length === 0 ? (
            <div className="chat-empty-thread">
              <div className="chat-empty-icon"><Sparkles size={18} /></div>
              <p className="chat-empty-title">Continuous Intelligence Thread</p>
              <p className="chat-empty-desc">
                Ask specific questions about {company}’s strategy, competitors, transformation signals, or business vulnerabilities.
              </p>
            </div>
          ) : (
            <div className="chat-messages-list">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`chat-message-row ${msg.role === 'user' ? 'user-message' : 'assistant-message'}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.role === 'assistant' ? (
                    <div className="chat-avatar">
                      <Sparkles size={14} />
                    </div>
                  ) : (
                    <div className="chat-user-avatar">
                      <span>You</span>
                    </div>
                  )}
                  <div className="chat-message-bubble">
                    <div className="chat-message-meta">
                      <span className="chat-author">{msg.role === 'assistant' ? 'CORTEX' : 'You'}</span>
                      {msg.timestamp && <span className="chat-timestamp">{msg.timestamp}</span>}
                    </div>
                    <p className={msg.role === 'assistant' ? 'chat-answer' : 'chat-question-text'}>
                      {msg.content}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="chat-bottom-bar">
          <form
            className="chat-input"
            onSubmit={(event) => {
              event.preventDefault();
              onAsk();
            }}
          >
            <Sparkles size={17} />
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={`Ask anything about ${company}...`}
              aria-label={`Ask anything about ${company}`}
            />
            <button type="submit" aria-label="Send question">
              <ArrowUpRight size={17} />
            </button>
          </form>

          <div className="suggested-questions">
            <span>Try asking</span>
            {[
              'Why are they expanding?',
              'Who are the strongest competitors?',
              'What signals did you find?',
            ].map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => onAsk(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetitorPage({ company, onBack }: { company: Company; onBack: () => void }) {
  return (
    <motion.main className="competitor-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="competitor-header">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={16} /> {company} intelligence
        </button>
        <div className="present-label">
          <span className="nav-dot" /> Presentation view
        </div>
        <button className="present-button">
          <span /> Present mode <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="competitor-title">
        <div>
          <p className="eyebrow small">
            <span className="eyebrow-line" /> Comparative intelligence / 02
          </p>
          <h1>
            Competitive
            <br />
            <em>landscape.</em>
          </h1>
        </div>
        <p>
          How {company}&apos;s digital presence compares
          <br />
          with its closest competitors.
        </p>
      </div>

      <div className="legend-bar">
        <span className="legend-label">Legend</span>
        {(Object.keys(companyLabels) as CompanyKey[]).map((key) => (
          <span key={key} className={`legend-item ${key === 'target' ? 'legend-target' : ''}`}>
            <span className="legend-dot" style={{ backgroundColor: companyColors[key] }} />
            {companyLabels[key]}
            {key === 'target' ? ' (target)' : ''}
          </span>
        ))}
      </div>

      <CompetitiveRankingChart
        company={company}
        snapshotData={snapshotData}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <CompetitiveSnapshot
        data={snapshotData}
        insight={sectionInsights.snapshot}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <LinkedInPresence
        data={linkedInData}
        insight={sectionInsights.linkedin}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <InstagramPresence
        data={instagramData}
        insight={sectionInsights.instagram}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <WebsiteReach
        data={websiteData}
        insight={sectionInsights.website}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <SearchPresence
        data={seoData}
        insight={sectionInsights.seo}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <VideoPresence
        data={videoData}
        insight={sectionInsights.video}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <PaidPresence
        matrix={paidMatrix}
        insight={sectionInsights.paid}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <DigitalPresenceAcrossChannels
        data={crossPlatformData}
        insight={sectionInsights.cross}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <CompetitiveGapsSummary />
      <DataTransparency />
    </motion.main>
  );
}

export default App;
