import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react';
import { HistoryItem } from '../types/company';
import { mockExampleCompanies, mockHistory } from '../data/mockCompanies';
import { RecentAnalysisCard } from '../components/dashboard/RecentAnalysisCard';
import { useLayoutEffect, useRef, useState } from 'react';

export interface HomeProps {
  input: string;
  setInput: (value: string) => void;
  onAnalyze: (value: string) => void;
  onHistory: (item: HistoryItem) => void;
  onNew: () => void;
  historyList?: HistoryItem[];
}

const MARQUEE = [
  { name: 'Amazon', logo: '/amazon.svg' },
  { name: 'Johnson & Johnson', logo: '/jnj.svg' },
  { name: 'JPMorgan Chase', logo: '/jpmorgan.svg' },
  { name: 'Bank of America', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg' },
  { name: 'UBS', logo: '/ubs.svg' },
  { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' }
];



const PLANS = [
  {
    tier: 'Pay as you go',
    copy: 'No minimum commitment\nPause or cancel anytime',
    price: '$3',
    priceOriginal: null,
    period: '/ analysis',
    points: [
      '7 intelligence dimensions',
      '93 tracked metrics',
      '36 digital presence signals',
      'Executive summary & SWOT',
      'Source-linked findings',
      'Export to PDF & Word',
    ],
    cta: 'Get Started',
  },
  {
    tier: 'Monthly',
    copy: 'No minimum commitment\nPause or cancel anytime',
    price: '$14',
    priceOriginal: '$15',
    period: '/ 5 analyses',
    points: [
      '7 intelligence dimensions',
      '93 tracked metrics',
      '36 digital presence signals',
      'Executive summary & SWOT',
      'Source-linked findings',
      'Export to PDF & Word',
    ],
    cta: 'Get Started',
    badge: 'Save $1',
  },
];



function CheckMark() {
  return (
    <svg className="lp-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 10.2l2.6 2.6L14 7.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Home({
  input,
  setInput,
  onAnalyze,
  onHistory,
  historyList = mockHistory,
}: HomeProps) {
  const lightZoneRef = useRef<HTMLDivElement>(null);
  const darkZoneRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAnnounce, setShowAnnounce] = useState(true);

  // ── Page theme ────────────────────────────────────────────────────
  // The page runs dark → light → dark, like the reference: hero and
  // stats on dark, the middle of the page light, then back to dark for
  // the closing sections. One canvas colour at a time, so no two blocks
  // can ever disagree and show a seam.
  const { scrollYProgress: intoLight } = useScroll({
    target: lightZoneRef,
    offset: ['start 88%', 'start 52%'],
  });
  const { scrollYProgress: backToDark } = useScroll({
    target: darkZoneRef,
    offset: ['start 88%', 'start 52%'],
  });
  const rawTheme = useTransform<number, number>(
    [intoLight, backToDark],
    ([toLight, toDark]) => Math.min(Math.max(toLight - toDark, 0), 1)
  );
  const theme = useSpring(rawTheme, { stiffness: 90, damping: 24, mass: 1 });

  const pageBg = useTransform(theme, [0, 1], ['#1a1d26', '#ffffff']);
  // Text fades on the same 0→1 scroll range as the background, but on its
  // own curve rather than a straight linear cross-fade. bg and ink move in
  // opposite directions (dark→light bg, light→dark ink) across that same
  // range, so any two monotonic curves connecting opposite corners are
  // mathematically guaranteed to cross somewhere — a plain linear fade
  // crosses in the middle of the whole range, putting both at nearly the
  // same mid-gray for a long, sustained stretch of scrolling. Instead, ink
  // holds its start value for most of the range, then swaps over a narrow
  // 12% band placed after the background is already mostly light — the
  // crossing still happens (unavoidable), but it's compressed into a brief
  // flip instead of a slow fade, so it reads as a fast, deliberate swap
  // rather than a stretch of unreadable text. Same two endpoint colors,
  // same scroll range, same spring — only how ink gets from one to the
  // other changes.
  const pageInk = useTransform(theme, [0, 0.7, 0.82, 1], ['#ffffff', '#ffffff', '#14151c', '#14151c']);
  const pageInkMuted = useTransform(theme, [0, 0.7, 0.82, 1], ['#a7adba', '#a7adba', '#5c5f6b', '#5c5f6b']);
  const pageAccent = useTransform(theme, [0, 1], ['#d3fb52', '#4d7c0f']);
  const panel = useTransform(theme, [0, 1], ['#242832', '#f5f5f2']);
  const panelHover = useTransform(theme, [0, 1], ['#2c313d', '#ecece7']);
  const hairline = useTransform(theme, [0, 1], ['rgba(255,255,255,0.11)', 'rgba(20,21,30,0.1)']);
  const outline = useTransform(theme, [0, 1], ['rgba(255,255,255,0.34)', 'rgba(20,21,30,0.22)']);
  const chip = useTransform(theme, [0, 1], ['#ffffff', '#f5f5f2']);
  const planCard = useTransform(theme, [0, 1], ['#242832', '#eef0f3']);
  const heroVeil = useTransform(theme, [0, 1], [1, 0]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const channels: Array<[string, MotionValue<string> | MotionValue<number>]> = [
      ['--page-bg', pageBg],
      ['--page-ink', pageInk],
      ['--page-ink-muted', pageInkMuted],
      ['--page-accent', pageAccent],
      ['--panel', panel],
      ['--panel-hover', panelHover],
      ['--hairline', hairline],
      ['--outline', outline],
      ['--chip', chip],
      ['--plan-card', planCard],
      ['--hero-veil', heroVeil],
    ];

    // Same colors, same trigger points, same easing as before — this only
    // changes *when* the writes happen. Each of the 11 vars was previously
    // written to :root synchronously on its own 'change' event, and every
    // one of those writes forces a full-page style recalc. On the very
    // first scroll tick that handler runs cold (unoptimized by the JS
    // engine) and can eat the frame, which is what made the first scroll
    // gesture feel like it did nothing. Coalescing into one write per
    // animation frame removes that stall without altering the transition.
    let pending = false;
    const flush = () => {
      pending = false;
      channels.forEach(([prop, value]) => root.style.setProperty(prop, String(value.get())));
    };
    const scheduleFlush = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(flush);
    };

    flush();
    const stops = channels.map(([, value]) => value.on('change', scheduleFlush));

    const applyDarkFlag = (v: number) =>
      document.body.classList.toggle('lp-page-dark', v < 0.5);
    applyDarkFlag(theme.get());
    const stopFlag = theme.on('change', applyDarkFlag);

    return () => {
      stops.forEach((stop) => stop());
      stopFlag();
      document.body.classList.remove('lp-page-dark');
      channels.forEach(([prop]) => root.style.removeProperty(prop));
    };
  }, [
    pageBg,
    pageInk,
    pageInkMuted,
    pageAccent,
    panel,
    panelHover,
    hairline,
    outline,
    chip,
    planCard,
    heroVeil,
    theme,
  ]);

  return (
    <motion.main
      className="landing-page lp-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {showAnnounce && (
        <div className="lp-announce lp-bleed">
          <span>New quarter. New pipeline.</span>
          <a
            href="#dimensions"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('dimensions')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See what 7thSense finds <ArrowRight size={15} />
          </a>
          <button
            className="lp-announce-x"
            onClick={() => setShowAnnounce(false)}
            aria-label="Dismiss"
          >
            <X size={17} />
          </button>
        </div>
      )}

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="lp-hero lp-bleed">
        <div className="lp-wrap">
          <span className="lp-pill">7thSense for revenue teams</span>

          <motion.h1
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Understand any
            <br />
            company fast
          </motion.h1>

          <p className="lp-hero-sub">
            Everything a good analyst would find about an account, assembled from
            public data before your first call
          </p>

          <form
            className="lp-search"
            id="analyse"
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
            <button type="submit" aria-label="Run analysis">
              <ArrowUpRight size={19} />
            </button>
          </form>

          <div className="lp-try">
            <span>Try an analysis</span>
            {mockExampleCompanies.map((name) => (
              <button key={name} onClick={() => onAnalyze(name)}>
                {name}
              </button>
            ))}
          </div>



          <div className="lp-stats">
            <div className="lp-stat">
              <b>7</b>
              <span>intelligence dimensions</span>
            </div>
            <div className="lp-stat">
              <b>93</b>
              <span>tracked metrics</span>
            </div>
            <div className="lp-stat">
              <b>36</b>
              <span>digital presence signals</span>
            </div>
            <div className="lp-stat">
              <b>0</b>
              <span>paid data APIs</span>
            </div>
          </div>

          <p className="lp-trust">Point it at any public company — here are a few to start with</p>
        </div>

        <div className="lp-marquee">
          <div className="lp-marquee-track">
            {[...MARQUEE, ...MARQUEE].map((company, i) => (
              <div className="lp-chip-white" key={`${company.name}-${i}`}>
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── light zone begins ────────────────────────────────────── */}
      <div ref={lightZoneRef} />



      {/* ── light zone begins ────────────────────────────────────── */}
      <div ref={lightZoneRef} />

      <section className="lp-section history-section">
        <div className="lp-wrap">
          <div className="lp-head">
            <h2>Pick up where you left off</h2>
            <p>
              Every analysis your team has run stays in the workspace, dated and ready
              to reopen.
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
          </div>
        </div>
      </section>

      <section className="lp-section lp-feature">
        <div className="lp-wrap">
          <div className="lp-head">
            <h2>
              See the bigger picture.
              <br />
              Stay ahead of every competitor.
            </h2>
            <p>
              7thSense tracks digital presence the way a research team would — channel
              by channel, competitor by competitor — so the gap between you and them
              is never a guess.
            </p>
          </div>
          <div className="lp-feature-grid">
            <div className="lp-feature-image">
              <img
                src="/digital-presence.png"
                alt="Digital presence intelligence dashboard showing competitive ranking trends and channel-by-channel benchmarks across LinkedIn, YouTube, website and SEO"
              />
            </div>
            <div className="lp-feature-copy">
              <span className="eyebrow small">
                <span className="eyebrow-line" />
                Digital presence intelligence
              </span>
              <h3>Every channel, benchmarked against the accounts you're chasing</h3>
              <p>
                LinkedIn, YouTube, website and SEO, paid — 36 signals tracked side by
                side with your competitors and updated as their presence moves, so you
                always know exactly where you stand and what changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section" id="pricing">
        <div className="lp-wrap">
          <div className="lp-head">
            <h2>From your first analysis to a full research programme</h2>
          </div>
          <div className="lp-cards-2">
            {PLANS.map((plan) => (
              <div className="lp-plan-ref" key={plan.tier}>
                {plan.badge && <div className="lp-plan-badge">{plan.badge}</div>}
                <div className="lp-plan-tier-ref">{plan.tier}</div>
                <p className="lp-plan-copy-ref">
                  {plan.copy.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="lp-plan-price-block">
                  {plan.priceOriginal && (
                    <span className="lp-plan-price-strike">{plan.priceOriginal}</span>
                  )}
                  <span className="lp-plan-price">{plan.price}</span>
                  <span className="lp-plan-period">{plan.period}</span>
                </div>
                <hr className="lp-plan-div" />
                <ul className="lp-plan-list">
                  {plan.points.map((point) => (
                    <li key={point}>
                      <span className="lp-plan-check">
                        <CheckMark />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="lp-plan-btn" type="button">
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── dark zone begins ─────────────────────────────────────── */}
      <div ref={darkZoneRef} />

      <section className="lp-section">
        <div className="lp-wrap">
          <div className="lp-head">
            <h2>One system connecting public data, competitors and buying signals at scale</h2>
          </div>
          <div className="lp-metrics">
            <div className="lp-metric">
              <b>3.4x</b>
              <p>more context going into first calls, versus teams researching by hand</p>
            </div>
            <div className="lp-metric">
              <b>2 min</b>
              <p>from a company name to a sourced brief the whole account team can read</p>
            </div>
            <div className="lp-metric">
              <b>94%</b>
              <p>of findings traced to a primary source, so nothing goes into a pitch unchecked</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-quote lp-wrap">
        <div className="lp-quote-eyebrow">Why teams use 7thSense</div>
        <blockquote>
          “We stopped opening fifteen tabs before every call. The brief is already
          there, and it cites where each line came from.”
        </blockquote>
        <div className="lp-quote-by">
          Revenue operations lead
          <br />
          Enterprise software
        </div>
      </section>

      <div className="lp-wrap">
        <section className="lp-cta">
          <h2>Ready to understand your next account?</h2>
          <p>Run your first analysis now — it takes about two minutes.</p>
          <button className="lp-btn lp-btn-lime" type="button">
            Get started free
          </button>
        </section>
      </div>



      <footer className="lp-foot-vucko lp-wrap">
        <div className="vucko-head">
          <h2>Let's build<br />something great</h2>
          <a href="mailto:hello@7thsense.com" className="vucko-email">hello@7thsense.com</a>
        </div>

        <hr className="vucko-line" />

        <div className="vucko-links-area">
          <div className="vucko-col">
            <h4>Product</h4>
            <button type="button">Analysis</button>
            <button type="button">Competitors</button>
            <button type="button">Signals</button>
          </div>
          <div className="vucko-col">
            <h4>Company</h4>
            <button type="button">About</button>
            <button type="button">Careers</button>
            <button type="button">Contact</button>
          </div>
          <div className="vucko-col">
            <h4>Resources</h4>
            <button type="button">Docs</button>
            <button type="button">Method</button>
            <button type="button">Sources</button>
          </div>
        </div>

        <div className="vucko-bottom">
          <div className="vucko-meta">
            <span>© 7thSense / 2024</span>
            <button type="button">Privacy</button>
            <button type="button">Terms</button>
          </div>
          <h1 className="vucko-big-logo">7THSENSE™</h1>
        </div>
      </footer>
    </motion.main>
  );
}

export const LandingPage = Home;
