import { motion } from 'framer-motion';
import { Company } from '../types/company';
import { useCompetitors } from '../hooks/useCompetitors';
import { CompetitorHeader } from '../components/competitor/CompetitorHeader';
import { CompetitorSelector } from '../components/competitor/CompetitorSelector';
import { DigitalScore } from '../components/competitor/DigitalScore';
import { BenchmarkTable } from '../components/competitor/BenchmarkTable';
import { LinkedInPresence } from '../components/competitor/LinkedInPresence';
import { SocialAnalytics } from '../components/competitor/SocialAnalytics';
import { WebsiteAnalytics } from '../components/competitor/WebsiteAnalytics';
import { SEOAnalytics } from '../components/competitor/SEOAnalytics';
import { VideoAnalytics } from '../components/competitor/VideoAnalytics';
import { PaidAdsAnalytics } from '../components/competitor/PaidAdsAnalytics';
import { OpportunityCards } from '../components/competitor/OpportunityCards';
import { GapAnalysis } from '../components/competitor/GapAnalysis';
import { DataTransparency } from '../components/competitor/DataTransparency';
import { kiddikindCoverageNote } from '../data/kiddikind';

export interface CompetitorAnalyticsProps {
  company: Company;
  onBack: () => void;
}

export function CompetitorAnalytics({ company, onBack }: CompetitorAnalyticsProps) {
  const isKiddikind = company === 'Kiddikind';

  const {
    snapshotData,
    instagramData,
    linkedInData,
    websiteData,
    seoData,
    videoData,
    paidMatrix,
    crossPlatformData,
    sectionInsights,
    gapInsights,
    companyLabels,
    companyColors,
  } = useCompetitors(company);

  return (
    <motion.main
      className="competitor-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CompetitorHeader company={company} onBack={onBack} />

      <CompetitorSelector
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <DigitalScore
        company={company}
        snapshotData={snapshotData}
        companyLabels={companyLabels}
        companyColors={companyColors}
        trendAvailable={!isKiddikind}
        trendUnavailableNote="Trend data not found — this run captured a single point in time, so there is no month-over-month series to plot."
      />

      <BenchmarkTable
        data={snapshotData}
        insight={sectionInsights.snapshot}
        companyLabels={companyLabels}
        companyColors={companyColors}
        subtitle={isKiddikind ? kiddikindCoverageNote : undefined}
      />

      <LinkedInPresence
        data={linkedInData}
        insight={sectionInsights.linkedin}
        companyLabels={companyLabels}
        companyColors={companyColors}
        subtitle={
          isKiddikind
            ? 'Company page followers, where a page could be resolved.'
            : undefined
        }
      />

      <SocialAnalytics
        instagramData={instagramData}
        instagramInsight={sectionInsights.instagram}
        companyLabels={companyLabels}
        companyColors={companyColors}
        subtitle={
          isKiddikind
            ? 'Follower count with engagement rate, posting cadence, and Reels share.'
            : undefined
        }
      />

      <WebsiteAnalytics
        data={websiteData}
        insight={sectionInsights.website}
        companyLabels={companyLabels}
        companyColors={companyColors}
        metricLabel={isKiddikind ? 'Linking root domains' : undefined}
        title={isKiddikind ? 'Website & Technical Health' : undefined}
        subtitle={
          isKiddikind
            ? 'Linking root domains with Lighthouse SEO, performance, and index coverage.'
            : undefined
        }
      />

      <SEOAnalytics
        data={seoData}
        insight={sectionInsights.seo}
        companyLabels={companyLabels}
        companyColors={companyColors}
        metricLabel={isKiddikind ? 'Ranking keywords' : undefined}
        subtitle={
          isKiddikind
            ? 'Ranking keywords with backlink profile and spam score, via Moz.'
            : undefined
        }
      />

      <VideoAnalytics
        data={videoData}
        insight={sectionInsights.video}
        companyLabels={companyLabels}
        companyColors={companyColors}
        subtitle={
          isKiddikind
            ? 'YouTube subscribers, where a channel could be resolved.'
            : undefined
        }
      />

      <PaidAdsAnalytics
        matrix={paidMatrix}
        insight={sectionInsights.paid}
        companyLabels={companyLabels}
        companyColors={companyColors}
        subtitle={
          isKiddikind
            ? 'Detected advertising activity across Meta, Google, and video — AI-Overview inference, not an Ad Library lookup.'
            : undefined
        }
      />

      <OpportunityCards
        data={crossPlatformData}
        insight={sectionInsights.cross}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <GapAnalysis insights={gapInsights} />

      <DataTransparency
        sourcesCount={isKiddikind ? '5 agents · 3 of 5 complete' : undefined}
        confidence={isKiddikind ? 'Sourced — no estimates' : undefined}
        updatedText={isKiddikind ? 'Generated 2026-09-08, 07:50 UTC' : undefined}
      />
    </motion.main>
  );
}

export const CompetitorPage = CompetitorAnalytics;
