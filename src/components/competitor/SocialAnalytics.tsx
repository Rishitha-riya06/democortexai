import { CompanyKey } from '../../types/company';
import { SeriesRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface LinkedInPresenceProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function LinkedInPresence({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Followers',
}: LinkedInPresenceProps) {
  return (
    <SectionBlock
      id="linkedin-section"
      index="02"
      title="LinkedIn Presence"
      subtitle="Follower count with growth, engagement, and publishing signals."
      insight={insight}
    >
      <PrimaryChart
        rows={data}
        metricLabel={metricLabel}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </SectionBlock>
  );
}

export interface InstagramPresenceProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function InstagramPresence({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Followers',
}: InstagramPresenceProps) {
  return (
    <SectionBlock
      id="instagram-section"
      index="03"
      title="Instagram Presence"
      subtitle="Follower count and engagement rate, side by side."
      insight={insight}
    >
      <PrimaryChart
        rows={data}
        metricLabel={metricLabel}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </SectionBlock>
  );
}

export interface SocialAnalyticsProps {
  linkedInData: SeriesRow[];
  instagramData: SeriesRow[];
  linkedInInsight: string;
  instagramInsight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function SocialAnalytics({
  linkedInData,
  instagramData,
  linkedInInsight,
  instagramInsight,
  companyLabels,
  companyColors,
}: SocialAnalyticsProps) {
  return (
    <>
      <LinkedInPresence
        data={linkedInData}
        insight={linkedInInsight}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
      <InstagramPresence
        data={instagramData}
        insight={instagramInsight}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </>
  );
}
