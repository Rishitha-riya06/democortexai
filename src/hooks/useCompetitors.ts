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

export function useCompetitors() {
  const snapshotData = useMemo(() => mockSnapshotData, []);
  const linkedInData = useMemo(() => mockLinkedInData, []);
  const instagramData = useMemo(() => mockInstagramData, []);
  const websiteData = useMemo(() => mockWebsiteData, []);
  const seoData = useMemo(() => mockSeoData, []);
  const videoData = useMemo(() => mockVideoData, []);
  const paidMatrix = useMemo(() => mockPaidMatrix, []);
  const crossPlatformData = useMemo(() => mockCrossPlatformData, []);
  const sectionInsights = useMemo(() => mockSectionInsights, []);
  const gapInsights = useMemo(() => mockDefaultGapInsights, []);
  const companyLabels = useMemo(() => mockCompanyLabels, []);
  const companyColors = useMemo(() => mockCompanyColors, []);

  return {
    snapshotData,
    linkedInData,
    instagramData,
    websiteData,
    seoData,
    videoData,
    paidMatrix,
    crossPlatformData,
    sectionInsights,
    gapInsights,
    companyLabels,
    companyColors,
  };
}
