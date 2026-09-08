import { useMemo } from 'react';
import {
  mockCrossPlatformData,
  mockDefaultGapInsights,
  mockInstagramData,
  mockLinkedInData,
  mockPaidMatrix,
  mockSectionInsights,
  mockSeoData,
  mockSnapshotData,
  mockVideoData,
  mockWebsiteData,
} from '../data/mockCompetitors';
import { mockCompanyColors, mockCompanyLabels } from '../data/mockCompanies';
import {
  kiddikindCompanyColors,
  kiddikindCompanyLabels,
  kiddikindCrossPlatformData,
  kiddikindGapInsights,
  kiddikindInstagramData,
  kiddikindLinkedInData,
  kiddikindPaidMatrix,
  kiddikindSectionInsights,
  kiddikindSeoData,
  kiddikindSnapshotData,
  kiddikindVideoData,
  kiddikindWebsiteData,
} from '../data/kiddikind';

export function useCompetitors(company?: string) {
  const isKiddikind = company === 'Kiddikind';

  return useMemo(() => {
    if (isKiddikind) {
      return {
        snapshotData: kiddikindSnapshotData,
        instagramData: kiddikindInstagramData,
        linkedInData: kiddikindLinkedInData,
        websiteData: kiddikindWebsiteData,
        seoData: kiddikindSeoData,
        videoData: kiddikindVideoData,
        paidMatrix: kiddikindPaidMatrix,
        crossPlatformData: kiddikindCrossPlatformData,
        sectionInsights: kiddikindSectionInsights,
        gapInsights: kiddikindGapInsights,
        companyLabels: kiddikindCompanyLabels,
        companyColors: kiddikindCompanyColors,
      };
    }

    return {
      snapshotData: mockSnapshotData,
      instagramData: mockInstagramData,
      linkedInData: mockLinkedInData,
      websiteData: mockWebsiteData,
      seoData: mockSeoData,
      videoData: mockVideoData,
      paidMatrix: mockPaidMatrix,
      crossPlatformData: mockCrossPlatformData,
      sectionInsights: mockSectionInsights,
      gapInsights: mockDefaultGapInsights,
      companyLabels: mockCompanyLabels,
      companyColors: mockCompanyColors,
    };
  }, [isKiddikind]);
}
