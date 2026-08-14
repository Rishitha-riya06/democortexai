import { CompanyKey, HistoryItem } from '../types/company';

export const mockHistory: HistoryItem[] = [
  { name: 'NVIDIA', monogram: 'N', industry: 'Semiconductors', time: '2 hours ago', preview: 'Strong technology positioning with significant momentum in AI infrastructure.', color: '#91a66d' },
  { name: 'OpenAI', monogram: 'O', industry: 'Artificial intelligence', time: 'Yesterday', preview: 'An accelerating platform story shaped by distribution and model capability.', color: '#c6a0c8' },
  { name: 'Microsoft', monogram: 'M', industry: 'Enterprise software', time: '3 days ago', preview: 'Deep enterprise reach continues to turn intelligence into workflow advantage.', color: '#a7c5d1' },
  { name: 'Salesforce', monogram: 'S', industry: 'Cloud software', time: '8 days ago', preview: 'A broad customer system repositioning around trusted AI and data.', color: '#c5b58c' },
  { name: 'Zoho', monogram: 'Z', industry: 'Business software', time: '12 days ago', preview: 'A quietly expansive suite with an increasingly differentiated point of view.', color: '#e1a99d' },
];

export const mockExampleCompanies = ['NVIDIA', 'Stripe', 'HubSpot', 'Zoho'];

export const mockCompanyColors: Record<CompanyKey, string> = {
  target: '#6d4aff',
  compA: '#3b82f6',
  compB: '#22a06b',
  compC: '#e8833a',
};

export const mockCompanyLabels: Record<CompanyKey, string> = {
  target: 'NVIDIA',
  compA: 'AMD',
  compB: 'Intel',
  compC: 'Qualcomm',
};
