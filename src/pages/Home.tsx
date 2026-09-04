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

// Example analysis targets — companies you can point 7thSense at.
const MARQUEE = [
  'OpenAI',
  'Microsoft',
  'Salesforce',
  'Zoho',
  'NVIDIA',
  'Stripe',
  'Datadog',
  'Snowflake',
];

const CAPABILITIES = [
  {
    index: '01 / Company Profile',
    title: 'Understand who they actually are',
    copy: 'Ten questions that establish the basics before anything else: what the company does in its own words, how it makes money, and who runs it.',
    points: [
      'What the company does, and how it describes itself',
      'Business model, products and services',
      'Leadership, headquarters and markets served',
    ],
    mock: [
      ['Business model', 'B2B SaaS'],
      ['Industry', 'Enterprise software'],
      ['Headquarters', 'San Jose, CA'],
    ],
    bar: 82,
  },
  {
    index: '02 / Market & Competitors',
    title: 'See the whole competitive set',
    copy: 'Eight questions that place the company in its market — who it is really up against, what separates it from them, and which way the industry is moving.',
    points: [
      'Who the key competitors actually are',
      'Market positioning and what differentiates them',
      'Segments, partnerships and target industries',
    ],
    mock: [
      ['Key competitors', '6 identified'],
      ['Positioning', 'Premium / enterprise'],
      ['Segments served', '4'],
    ],
    bar: 64,
  },
  {
    index: '03 / Digital Presence',
    title: 'Measure every channel they run',
    copy: 'The deepest dimension at thirty-six metrics: LinkedIn, Instagram, website and SEO, video, and paid advertising — then benchmarked side by side against the competitive set.',
    points: [
      'LinkedIn, Instagram and YouTube reach and engagement',
      'Site performance, indexing, backlinks and publishing cadence',
      'Live ad activity, creative themes and landing pages',
    ],
    mock: [
      ['LinkedIn followers', '128K'],
      ['Digital Presence Score', '72 / 100'],
      ['Biggest channel gap', 'Paid search'],
    ],
    bar: 72,
  },
  {
    index: '04 / Technology Stack',
    title: 'Know what they are built on',
    copy: 'Ten questions on the engineering surface — frameworks, CMS, hosting and tooling — read straight off what the company already exposes publicly.',
    points: [
      'Frameworks, CMS and JavaScript libraries',
      'Cloud provider, hosting and CDN',
      'Analytics, security headers and public APIs',
    ],
    mock: [
      ['CMS', 'Contentful'],
      ['Cloud provider', 'AWS'],
      ['Analytics', 'GA4 · Segment'],
    ],
    bar: 88,
  },
  {
    index: '05 / Growth Signals',
    title: 'Catch the moment worth acting on',
    copy: 'Twelve questions about movement: hiring, launches, announcements, expansion and acquisitions — each with a date attached, so outreach lands while it is still relevant.',
    points: [
      'Hiring activity, open roles and which departments',
      'Product launches, press and AI initiatives',
      'Expansion, new locations, partnerships and acquisitions',
    ],
    mock: [
      ['Open roles', '34'],
      ['Hiring trend', '+18% QoQ'],
      ['Latest launch', '3 days ago'],
    ],
    bar: 91,
  },
  {
    index: '06 / Customer Signals',
    title: 'Hear what their customers say',
    copy: 'Nine questions across Google, Trustpilot, G2 and Capterra — not just the score, but what gets praised, what gets criticised, and where sentiment sits overall.',
    points: [
      'Ratings and review volume across every platform',
      'What customers praise most',
      'Most common complaints and overall sentiment',
    ],
    mock: [
      ['Google rating', '4.6 (2,140)'],
      ['G2 sentiment', 'Positive'],
      ['Top complaint', 'Onboarding time'],
    ],
    bar: 76,
  },
  {
    index: '07 / Insight & Opportunity',
    title: 'Hand over something people read',
    copy: 'The synthesis layer. Eight outputs drawn from everything above — executive summary, SWOT, risks, and the talking points your team actually takes into the meeting.',
    points: [
      'Executive summary and full SWOT',
      'Opportunities, risks and key insights',
      'Sales talking points and service fit',
    ],
    mock: [
      ['SWOT', 'Complete'],
      ['Opportunities', '5 surfaced'],
      ['Talking points', '9'],
    ],
    bar: 85,
  },
];

const PLANS = [
  {
    tier: 'Basic',
    title: 'Start free',
    copy: 'Run your first analyses and see the full report format before committing to anything.',
    points: ['5 company analyses a month', 'Full intelligence brief', 'Source-linked findings'],
    cta: 'Run an analysis',
    lime: false,
  },
  {
    tier: 'Pro',
    title: 'Analyse and compare',
    copy: 'For teams working a defined account list who need competitive context on every one of them.',
    points: [
      'Unlimited analyses',
      'Competitor benchmarking',
      'Weekly signal digest',
      'Shared workspace',
    ],
    cta: 'Talk to our team',
    lime: true,
  },
  {
    tier: 'Enterprise',
    title: 'Run the whole programme',
    copy: 'For revenue orgs that want intelligence wired into the tools their teams already work in.',
    points: [
      'Everything in Analyse and compare',
      'API and CRM sync',
      'Custom signal rules',
      'Dedicated support',
    ],
    cta: 'Contact sales',
    lime: false,
  },
];

const FAQS = [
  {
    q: 'Where does 7thSense get its data?',
    a: 'Public sources only — company websites, job boards, social channels, app and review platforms, and published press. The whole scope is deliberately built without paid data APIs, and every finding links back to the page it came from, so you can check the working.',
  },
  {
    q: 'What exactly gets analysed?',
    a: 'Seven dimensions, ninety-three metrics: Company Profile, Market & Competitors, Digital Presence, Technology Stack, Growth Signals, Customer Signals, and a final Insight & Opportunity layer that synthesises the rest into a summary, SWOT and talking points.',
  },
  {
    q: 'How current is the information?',
    a: 'Analyses run against live sources the moment you request them. Saved reports keep the date they were generated, and signals are timestamped so you can tell a three-day-old change from a three-month-old one.',
  },
  {
    q: 'Can I share a report outside my team?',
    a: 'Yes. Any analysis exports as a PDF or Word document, or as a link that keeps the source citations intact.',
  },
  {
    q: 'Does 7thSense work for private companies?',
    a: 'Yes. Coverage is naturally thinner where a company discloses less, so the report tells you how confident it is in each section rather than filling gaps with guesses.',
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
  const pageInk = useTransform(theme, [0, 1], ['#ffffff', '#14151c']);
  const pageInkMuted = useTransform(theme, [0, 1], ['#a7adba', '#5c5f6b']);
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

    const stops = channels.map(([prop, value]) => {
      root.style.setProperty(prop, String(value.get()));
      return value.on('change', (v: string | number) =>
        root.style.setProperty(prop, String(v))
      );
    });

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

          <div className="lp-hero-cards">
            <div className="lp-card">
              <h3>Run an analysis free</h3>
              <p>
                Enter a company name and get a full intelligence brief back in about
                two minutes. No account needed.
              </p>
              <button className="lp-btn lp-btn-ghost" type="button">
                Get started
              </button>
            </div>
            <div className="lp-card">
              <h3>Talk to our team</h3>
              <p>
                See how 7thSense fits the accounts your team already works, and what it
                surfaces across a full territory.
              </p>
              <button className="lp-btn lp-btn-lime" type="button">
                Request a demo
              </button>
            </div>
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
            {[...MARQUEE, ...MARQUEE].map((name, i) => (
              <div className="lp-chip" key={`${name}-${i}`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── light zone begins ────────────────────────────────────── */}
      <div ref={lightZoneRef} />

      <section className="lp-section" id="dimensions">
        <div className="lp-wrap">
          <div className="lp-head">
            <h2>Understand the right accounts, and then win them.</h2>
            <p>
              Every analysis runs the same seven dimensions — ninety-three questions
              in all — so two companies are always compared on the same basis.
            </p>
          </div>

          {CAPABILITIES.map((cap) => (
            <div className="lp-cap" key={cap.index}>
              <div className="lp-cap-copy">
                <div className="lp-cap-index">{cap.index}</div>
                <h3>{cap.title}</h3>
                <p>{cap.copy}</p>
                <ul>
                  {cap.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="lp-mock" aria-hidden="true">
                {cap.mock.map(([label, value]) => (
                  <div className="lp-mock-row" key={label}>
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
                <div className="lp-mock-bar">
                  <i style={{ width: `${cap.bar}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <section className="lp-section">
        <div className="lp-wrap">
          <div className="lp-head">
            <h2>From your first analysis to a full research programme</h2>
          </div>
          <div className="lp-cards-3">
            {PLANS.map((plan) => (
              <div className="lp-plan" key={plan.title}>
                <div className="lp-plan-tier">{plan.tier}</div>
                <h3>{plan.title}</h3>
                <p>{plan.copy}</p>
                <ul>
                  {plan.points.map((point) => (
                    <li key={point}>
                      <CheckMark />
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="lp-plan-cta" type="button">
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

      <section className="lp-faq lp-wrap">
        <h2>FAQs</h2>
        {FAQS.map((faq, i) => (
          <div className={`lp-faq-item${openFaq === i ? ' is-open' : ''}`} key={faq.q}>
            <button
              className="lp-faq-q"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
            >
              {faq.q}
              <i>{openFaq === i ? '−' : '+'}</i>
            </button>
            <motion.div
              className="lp-faq-a"
              initial={false}
              animate={{
                height: openFaq === i ? 'auto' : 0,
                opacity: openFaq === i ? 1 : 0,
              }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              {faq.a}
            </motion.div>
          </div>
        ))}
      </section>

      <footer className="lp-foot lp-wrap">
        <div className="lp-foot-top">
          <div className="lp-foot-tag">
            Company intelligence, assembled from public data — built for better
            conversations.
          </div>
          <div className="lp-foot-cols">
            <div className="lp-foot-col">
              <h4>Product</h4>
              <button type="button">Analysis</button>
              <button type="button">Competitors</button>
              <button type="button">Signals</button>
              <button type="button">Reports</button>
            </div>
            <div className="lp-foot-col">
              <h4>Company</h4>
              <button type="button">About</button>
              <button type="button">Careers</button>
              <button type="button">Contact</button>
            </div>
            <div className="lp-foot-col">
              <h4>Resources</h4>
              <button type="button">Docs</button>
              <button type="button">Method</button>
              <button type="button">Sources</button>
            </div>
          </div>
        </div>

        {/* Drawn as SVG so textLength can stretch the lockup to exactly the
            page width at any viewport — the same edge-to-edge treatment the
            reference gives its footer wordmark. */}
        <div className="lp-wordmark">
          <svg
            className="lp-wordmark-svg"
            viewBox="0 0 1200 300"
            role="img"
            aria-label="7thSense"
          >
            <text
              x="0"
              y="252"
              textLength="1200"
              lengthAdjust="spacingAndGlyphs"
              fontFamily="Anton, 'Archivo Black', sans-serif"
              fontSize="286"
            >
              7
              <tspan fontSize="112" dy="-118">th</tspan>
              <tspan dy="118">sense</tspan>
            </text>
          </svg>
        </div>
        <div className="lp-wordmark-tag">Strategy. Insight. Impact.</div>

        <div className="lp-foot-fine">
          <span>Built for better conversations.</span>
          <span>© 7thSense / 2024</span>
        </div>
      </footer>
    </motion.main>
  );
}

export const LandingPage = Home;
