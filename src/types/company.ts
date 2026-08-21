export type Company = 'NVIDIA' | 'OpenAI' | 'Microsoft' | 'Salesforce' | 'Zoho' | string;

export type CompanyKey = 'target' | 'compA' | 'compB' | 'compC';

export interface HistoryItem {
  name: string;
  monogram: string;
  industry: string;
  time: string;
  preview: string;
  color: string;
  textColor?: string;
  accentColor?: string;
  bgGradient?: string;
  glowColor?: string;
  avatarBg?: string;
  avatarColor?: string;
  borderColor?: string;
}

export interface CompanyOverviewInfo {
  name: string;
  industry: string;
  category: string;
  founded: string;
  hq: string;
  employees: string;
  summary: string;
  tags: string[];
}
