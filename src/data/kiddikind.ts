import { CompanyKey } from '../types/company';
import {
  GapInsightItem,
  PaidMatrixRow,
  SeriesRow,
  SnapshotCategory,
} from '../types/competitor';

/**
 * Kiddikind (Wenova Brands Private Limited) — 7th Sense intelligence run.
 * Generated 2026-09-08 07:50 UTC · job 370ee52a… · partial run, 2 of 5 agents incomplete.
 *
 * Every value below is taken verbatim from that run. Anything the run did not
 * return is written as "Not found" rather than estimated or filled in.
 */

export const NOT_FOUND = 'Not found';

/* ------------------------------------------------------------------ */
/* Company analysis report                                             */
/* ------------------------------------------------------------------ */

export const kiddikindProfile = {
  name: 'Kiddikind',
  legalEntity: 'Wenova Brands Private Limited',
  industry: 'Children’s Nutrition & D2C Consumer Goods',
  domain: 'kiddikind.com',
  generated: '2026-09-08, 07:50 UTC',
  jobId: '370ee52a…',
  runStatus: 'Partial run — 2 of 5 agents incomplete',
  confidence: 'Sourced',
  sourceCount: '5 agents · 3 of 5 complete',
  tagline:
    'India’s 1st D-Fibre & Gut-First Kid’s Nutrition Brand — doctor-created, millet-based baby & toddler nutrition, sold D2C at kiddikind.com.',
  founded: NOT_FOUND,
  hq: 'Chennai, India',
  employees: NOT_FOUND,
  tags: ['Child nutrition', 'Direct-to-consumer', 'Millet-based foods'],
  sources: [
    'Company website',
    'Google AI Overview',
    'Instagram Graph',
    'Lighthouse',
    'Moz',
  ],
};

export const kiddikindGlance: { label: string; value: string; note: string }[] = [
  {
    label: 'Instagram followers',
    value: '73,967',
    note: '1.9% engagement · 55.35 posts/mo cadence',
  },
  {
    label: 'Website SEO score',
    value: '85/100',
    note: 'Lighthouse, kiddikind.com',
  },
  {
    label: 'Site performance',
    value: '33/100',
    note: '9.3s largest contentful paint — slow',
  },
  {
    label: 'Linking root domains',
    value: '60',
    note: 'vs 351 and 735 for the two tracked rivals',
  },
  {
    label: 'LinkedIn presence',
    value: NOT_FOUND,
    note: 'No company page resolved for the client',
  },
  {
    label: 'Paid ad spend',
    value: '$0',
    note: 'Organic-only across all 3 channels',
  },
];

export const kiddikindExecutiveSummary =
  'Wenova Brands Private Limited operates Kiddikind as a doctor-founded, D2C child nutrition brand, leveraging pediatric validation and a clean-label millet-based product line to capture premium market share from health-conscious parents. While headquartered in Chennai, the company has successfully expanded its reach through strategic quick-commerce partnerships with Blinkit and Amazon India, alongside direct global shipping to key markets in North America, Europe, and the Middle East. This robust distribution network is supported by high-volume digital content marketing, though the brand’s digital footprint carries a significant technical liability with a poor Lighthouse performance score of 33/100 that undermines its otherwise strong SEO foundation.';

export const kiddikindCompanyProfile: { label: string; value: string }[] = [
  {
    label: 'Description',
    value:
      'Kiddikind is an Indian e-commerce brand that sells baby and toddler products, including millet-based teething supports, snack sticks, and nutritious baby food developed by Dr. Dhanasekaran. The company offers bundles such as the Kiddikind Miracles Bundle and Chewboo Freedom Mega Bundle, with free shipping across India on orders above Rs.500.',
  },
  {
    label: 'Business model',
    value:
      'A Direct-to-Consumer baby and child wellness brand combining clean-label nutrition with parenting utility hardware. Revenue flows through its D2C website, curated bundles, subscription commerce, and an omnichannel push into quick-commerce, pharmacies, and supermarkets.',
  },
  {
    label: 'Leadership',
    value:
      'Co-founder & CEO Mohamed Muqthar; co-founder & Director Dr. Dhanasekhar Kesavelu; co-founder & Director Kotteeswaran. Mohammed Aqdhas heads Growth & Business Development; Venkitraman Anand is a Strategic Advisor.',
  },
  {
    label: 'Headquarters',
    value:
      'No 17, Mahalakshmi Street, Kalaivanar Nagar, Padi, Chennai 600050, India. No clinical branches, hospitals, or offices — sells online and through retail partners.',
  },
  {
    label: 'Global presence',
    value:
      'Manufacturing localized entirely in India; ships cross-border to the US, Canada, UK, continental Europe, UAE, Saudi Arabia, Malaysia, and Singapore.',
  },
  {
    label: 'Contact',
    value: 'cc@kiddikind.com · +91 73389 23389',
  },
];

export const kiddikindSwot = {
  strengths: [
    'Doctor-founded, pediatrician-endorsed formulation strategy.',
    'Clean-label, millet-based products — ‘Millet Miracles’ and ‘Chewboo’.',
    'Directly addresses parental demand for gut-health focused, allergen-free nutrition.',
  ],
  weaknesses: [
    'Heavy reliance on a Direct-to-Consumer model and specific digital community building.',
    'Potential fragility in offline retail distribution and broader market reach.',
    'Trails legacy companies with established supply chains.',
  ],
  opportunities: [
    'Surging consumer preference for sustainable ancient grains and ‘real foods’.',
    'Plant-based, prebiotic-rich lines align with that shift.',
    'Room to capture a larger share of the premium, health-conscious parenting segment.',
  ],
  threats: [
    'Intense competition in the crowded baby food sector.',
    'High barrier to entry for infant nutrition brands.',
    'Established players and new entrants copying its clean-label narrative.',
  ],
};

export const kiddikindMarketPositioning =
  'India’s first gut-first, premium D2C nutrition brand for infants and children, owned by Wenova Brands. Differentiates from legacy FMCG through pediatrician-backed formulation and a “millet-first” approach emphasizing dietary fiber and clean-label ingredients.';

export const kiddikindDifferentiators = [
  'India’s first edible millet-based teethers.',
  'Clean-label snacks free from added sugar, salt, gluten, nuts, dairy, and GMOs.',
  'Doctor-led credibility and a “D-Fibre” focus versus synthetic or refined-wheat competitors.',
];

export const kiddikindNamedCompetitors = [
  'Early Foods',
  'Slurrp Farm',
  'Little Joys',
  'Nutriburp',
  'Troovy Foods',
  'Tummy Friendly Foods',
  'Little Cherry Mom',
];

export const kiddikindCustomerSegments = [
  'Health-conscious parents and caregivers of infants and toddlers, 6 months to 6+ years.',
  'Parents navigating weaning and teething stages.',
  'Households managing dietary restrictions — gluten, nut, dairy, and sugar avoidance.',
  'Parents of picky eaters looking for clean-label everyday snacks.',
];

export const kiddikindIndustryTrends =
  'Pediatric nutrition is shifting toward clean-label, allergen-free options prioritizing gut health and prebiotics over high-sugar, wheat-based snacks — favoring ancient grains like millet.';

export const kiddikindTrendImplications = [
  'The millet-first positioning is aligned with where the category is already moving.',
  'Clinical validation is becoming the primary differentiator as clean-label claims commoditize.',
  'Quick-commerce is the fastest-growing route to urban parents in this category.',
];

export const kiddikindPartnerships = [
  'Tata 1mg — pharmacy distribution partner.',
  'Blinkit — quick-commerce availability.',
  'Amazon India — marketplace distribution.',
];

export const kiddikindEcosystemSignals = [
  'Pediatrician co-founder Dr. Dhanasekhar Kesavelu provides clinical credibility competitors cannot easily match.',
  'Quick-commerce partnerships with Blinkit and Amazon India extend reach beyond the D2C site.',
  'Cross-border shipping to 8 markets is already operational without local manufacturing.',
];

export const kiddikindSentiment = {
  status: 'Unavailable',
  body:
    'Resolved place “Kiddie Academy of Canyon Springs” does not match “Kiddikind” — flagged as a likely name collision and discarded rather than reported. As a D2C-only brand with no physical storefront, Kiddikind has no matchable Google Maps listing; this is an honest gap, not a failed lookup.',
  positives: [NOT_FOUND],
  watch: [NOT_FOUND],
};

export const kiddikindKeyInsights =
  'KiddiKind’s defensibility comes from pairing pediatrician-led clinical trust with a “D-Fibre” functional niche — addressing parental anxiety over infant GI discomfort, not just nutrition generally. Anchoring premium D2C positioning on prebiotic ancient grains (ragi, jowar) creates a high barrier for competitors offering mere “healthy snacks” without medical validation.';

export const kiddikindRisks =
  'Reliance on organic D2C and quick-commerce (Blinkit) exposes the brand to margin compression against larger FMCG spenders. The niche gut-health/millet focus limits total addressable market versus broader baby-food categories. Heavy dependence on named medical endorsers (Dr. Dhanasekhar, Dr. Sivaraman) is a reputational single point of failure.';

export const kiddikindRecommendations: { title: string; body: string }[] = [
  {
    title: 'Leverage clinical authority',
    body:
      'Center Dr. Dhanasekaran Kesavelu’s pediatric expertise as the primary trust signal for US and UK D2C expansion — content dominance built on medical validation, not generic wellness copy.',
  },
  {
    title: 'Monetize quick-commerce velocity',
    body:
      'Use the Blinkit partnership to train urban parents on rapid replenishment of Chewboo and millet crunchies, converting one-off trial into recurring basket volume.',
  },
  {
    title: 'Integrate accessibility tools',
    body:
      'Bundle milk warmers and feeding tools with the nutrition line rather than positioning them as a separate category, so the hardware reinforces the nutrition narrative.',
  },
];

export const kiddikindTalkingPoints = [
  'You are selling to a pediatrician-founded D2C brand that treats its formulations as medical interventions, not generic snacks.',
  'Your pitch must demonstrate how it supports their “zero junk” and gut-health integrity — anything that doesn’t enhance clinical credibility will be rejected outright.',
  'Focus on scaling their trusted, science-backed narrative to new segments without diluting the clean-label promise.',
  'Their Lighthouse performance score of 33/100 and 9.3s largest paint is a concrete, measurable problem you can fix and show before/after on.',
];

/* ------------------------------------------------------------------ */
/* Competitive analysis report                                         */
/* ------------------------------------------------------------------ */

export const kiddikindCompanyLabels: Record<CompanyKey, string> = {
  target: 'Kiddikind',
  compA: 'Early Foods',
  compB: 'Slurrp Farm',
} as Record<CompanyKey, string>;

export const kiddikindCompanyColors: Record<CompanyKey, string> = {
  target: '#7c5cff',
  compA: '#3b82f6',
  compB: '#22a06b',
} as Record<CompanyKey, string>;

export const kiddikindSnapshotData: SnapshotCategory[] = [
  {
    category: 'Instagram',
    rows: [
      { key: 'target', raw: '73,967', pct: 12 },
      { key: 'compA', raw: '206,483', pct: 34 },
      { key: 'compB', raw: '600,949', pct: 100 },
    ],
  },
  {
    category: 'LinkedIn',
    rows: [
      { key: 'target', raw: NOT_FOUND, pct: 0 },
      { key: 'compA', raw: '24', pct: 100 },
      { key: 'compB', raw: NOT_FOUND, pct: 0 },
    ],
  },
  {
    category: 'Linking domains',
    rows: [
      { key: 'target', raw: '60', pct: 8 },
      { key: 'compA', raw: '351', pct: 48 },
      { key: 'compB', raw: '735', pct: 100 },
    ],
  },
  {
    category: 'SEO',
    rows: [
      { key: 'target', raw: '2', pct: 1 },
      { key: 'compA', raw: '90', pct: 39 },
      { key: 'compB', raw: '230', pct: 100 },
    ],
  },
  {
    category: 'YouTube',
    rows: [
      { key: 'target', raw: NOT_FOUND, pct: 0 },
      { key: 'compA', raw: NOT_FOUND, pct: 0 },
      { key: 'compB', raw: '46,200', pct: 100 },
    ],
  },
];

export const kiddikindInstagramData: SeriesRow[] = [
  {
    key: 'target',
    raw: '73,967',
    pct: 12,
    sub: [
      { label: 'Engagement', value: '1.9%' },
      { label: 'Posts', value: '583' },
      { label: 'Cadence', value: '55.35/mo' },
      { label: 'Reels', value: '65%' },
    ],
  },
  {
    key: 'compA',
    raw: '206,483',
    pct: 34,
    sub: [
      { label: 'Engagement', value: '0.05%' },
      { label: 'Posts', value: NOT_FOUND },
      { label: 'Cadence', value: NOT_FOUND },
      { label: 'Reels', value: NOT_FOUND },
    ],
  },
  {
    key: 'compB',
    raw: '600,949',
    pct: 100,
    sub: [
      { label: 'Engagement', value: '0.1%' },
      { label: 'Posts', value: NOT_FOUND },
      { label: 'Cadence', value: NOT_FOUND },
      { label: 'Reels', value: NOT_FOUND },
    ],
  },
];

export const kiddikindLinkedInData: SeriesRow[] = [
  {
    key: 'target',
    raw: NOT_FOUND,
    pct: 0,
    sub: [
      { label: 'Company page', value: NOT_FOUND },
      { label: 'Followers', value: NOT_FOUND },
    ],
  },
  {
    key: 'compA',
    raw: '24',
    pct: 100,
    sub: [
      { label: 'Company page', value: 'Resolved' },
      { label: 'Followers', value: '24' },
    ],
  },
  {
    key: 'compB',
    raw: NOT_FOUND,
    pct: 0,
    sub: [
      { label: 'Company page', value: NOT_FOUND },
      { label: 'Followers', value: NOT_FOUND },
    ],
  },
];

export const kiddikindWebsiteData: SeriesRow[] = [
  {
    key: 'target',
    raw: '60',
    pct: 8,
    sub: [
      { label: 'SEO score', value: '85/100' },
      { label: 'Performance', value: '33/100' },
      { label: 'Largest paint', value: '9.3s' },
      { label: 'Indexed pages', value: '62' },
    ],
  },
  {
    key: 'compA',
    raw: '351',
    pct: 48,
    sub: [
      { label: 'SEO score', value: NOT_FOUND },
      { label: 'Performance', value: NOT_FOUND },
      { label: 'Largest paint', value: NOT_FOUND },
      { label: 'Indexed pages', value: NOT_FOUND },
    ],
  },
  {
    key: 'compB',
    raw: '735',
    pct: 100,
    sub: [
      { label: 'SEO score', value: NOT_FOUND },
      { label: 'Performance', value: NOT_FOUND },
      { label: 'Largest paint', value: NOT_FOUND },
      { label: 'Indexed pages', value: NOT_FOUND },
    ],
  },
];

export const kiddikindSeoData: SeriesRow[] = [
  {
    key: 'target',
    raw: '2',
    pct: 1,
    sub: [
      { label: 'Linking domains', value: '60' },
      { label: 'Spam score', value: '8%' },
      { label: 'Blog posts', value: '7' },
    ],
  },
  {
    key: 'compA',
    raw: '90',
    pct: 39,
    sub: [
      { label: 'Linking domains', value: '351' },
      { label: 'Spam score', value: '1%' },
      { label: 'Blog posts', value: NOT_FOUND },
    ],
  },
  {
    key: 'compB',
    raw: '230',
    pct: 100,
    sub: [
      { label: 'Linking domains', value: '735' },
      { label: 'Spam score', value: '2%' },
      { label: 'Blog posts', value: NOT_FOUND },
    ],
  },
];

export const kiddikindVideoData: SeriesRow[] = [
  {
    key: 'target',
    raw: NOT_FOUND,
    pct: 0,
    sub: [
      { label: 'Channel', value: NOT_FOUND },
      { label: 'Upload freq', value: NOT_FOUND },
      { label: 'Avg views', value: NOT_FOUND },
    ],
  },
  {
    key: 'compA',
    raw: NOT_FOUND,
    pct: 0,
    sub: [
      { label: 'Channel', value: NOT_FOUND },
      { label: 'Upload freq', value: NOT_FOUND },
      { label: 'Avg views', value: NOT_FOUND },
    ],
  },
  {
    key: 'compB',
    raw: '46,200',
    pct: 100,
    sub: [
      { label: 'Channel', value: 'Resolved' },
      { label: 'Upload freq', value: '~1.3/mo' },
      { label: 'Avg views', value: '480' },
    ],
  },
];

export const kiddikindPaidMatrix: PaidMatrixRow[] = [
  { key: 'target', meta: 'none', google: 'none', linkedin: 'none', video: 'none' },
  { key: 'compA', meta: 'unknown', google: 'unknown', linkedin: 'unknown', video: 'unknown' },
  { key: 'compB', meta: 'unknown', google: 'unknown', linkedin: 'unknown', video: 'unknown' },
];

export const kiddikindCrossPlatformData = kiddikindSnapshotData;

export const kiddikindSectionInsights: Record<string, string> = {
  snapshot:
    'Kiddikind trails both tracked rivals on every resolvable channel — Slurrp Farm holds 8.1x its Instagram following and 12.3x its linking root domains.',
  linkedin:
    'No LinkedIn company page resolved for Kiddikind or Slurrp Farm. Early Foods holds the only page found, at 24 followers — effectively an open channel for all three.',
  instagram:
    'Kiddikind is the smallest audience but by far the most engaged: 1.9% versus 0.1% for Slurrp Farm and 0.05% for Early Foods — a 38x engagement advantage over Early Foods.',
  website:
    'Kiddikind holds 60 linking root domains against 351 and 735 for its rivals, and its 33/100 performance score with a 9.3s largest paint is the single most fixable technical liability in the set.',
  seo:
    'An 85/100 Lighthouse SEO score is not converting into visibility — 2 ranking keywords versus 90 and 230 for the rivals, held back by a thin 60-domain backlink profile.',
  video:
    'Kiddikind has no YouTube channel found. Slurrp Farm is the only tracked entity with a resolved channel, at 46,200 subscribers and ~1.3 uploads/mo.',
  paid:
    'Kiddikind runs $0 paid spend across Meta, Google, and video — organic-only. Both tracked rivals were unresolvable this run, so their spend is unknown rather than zero.',
  cross:
    'Kiddikind leads on engagement quality alone; on reach, authority, and search visibility it is last of the three on every resolvable measure.',
};

export const kiddikindGapInsights: GapInsightItem[] = [
  {
    metric: 'Search visibility',
    text:
      'Kiddikind ranks for 2 keywords against 230 for Slurrp Farm — a 115x gap, despite holding a strong 85/100 Lighthouse SEO score.',
    tag: 'Largest gap',
  },
  {
    metric: 'Site performance',
    text:
      'A 33/100 performance score with a 9.3s largest contentful paint is actively suppressing an otherwise well-built site.',
    tag: 'Fixable now',
  },
  {
    metric: 'Instagram engagement',
    text:
      'At 1.9%, Kiddikind out-engages Slurrp Farm (0.1%) by 19x and Early Foods (0.05%) by 38x on a fraction of the audience.',
    tag: 'Ahead',
  },
  {
    metric: 'Paid presence',
    text:
      'Kiddikind records $0 spend across all three channels. Little Joys was the one active paid advertiser found in the wider set.',
    tag: 'Watch',
  },
];

export const kiddikindPaidNotes: { entity: string; note: string; channels: { label: string; value: string }[] }[] = [
  {
    entity: 'Kiddikind',
    note: 'Sourced · all 3 channels',
    channels: [
      { label: 'Meta', value: 'No paid campaigns on Facebook or Instagram — organic brand profiles only, $0 recorded spend.' },
      { label: 'Google', value: 'No active Search or Display campaigns — relies entirely on organic SEO.' },
      { label: 'YouTube', value: 'No paid in-stream or skippable video ad activity recorded.' },
    ],
  },
  {
    entity: 'Little Joys',
    note: 'Sourced · the one active paid advertiser found',
    channels: [
      { label: 'Meta', value: 'Runs extensive campaigns targeting parents with high-volume video content for direct-response conversion.' },
      { label: 'Google', value: 'Active PPC/SEM capturing high-intent searches (e.g. immunity supplements, healthy milk mixes).' },
    ],
  },
  {
    entity: 'Nutriburp',
    note: 'Sourced',
    channels: [
      { label: 'All channels', value: 'No documented paid activity on any of the 3 channels — organic and influencer growth only, same posture as Kiddikind.' },
    ],
  },
];

export const kiddikindCoverageNote =
  'Client plus 2 competitors with resolvable accounts, of 7 identified. Also identified but not queried this run (past the 3-competitor cap): Little Joys, Nutriburp, Troovy Foods, Tummy Friendly Foods, Little Cherry Mom.';
