import { CompanyKey, HistoryItem } from '../types/company';

export const mockHistory: HistoryItem[] = [
  {
    name: 'OpenAI',
    monogram: 'O',
    industry: 'Artificial intelligence',
    time: 'Yesterday',
    preview: 'An accelerating platform story shaped by distribution and model capability.',
    color: '#9074f5',
    bgGradient: 'linear-gradient(135deg, #a58dfa 0%, #9074f5 50%, #7d5ef0 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.22)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  {
    name: 'Microsoft',
    monogram: 'M',
    industry: 'Enterprise software',
    time: '3 days ago',
    preview: 'Deep enterprise reach continues to turn intelligence into workflow advantage.',
    color: '#63a4f7',
    bgGradient: 'linear-gradient(135deg, #7eb8fa 0%, #63a4f7 50%, #4d92f5 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.22)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  {
    name: 'Salesforce',
    monogram: 'S',
    industry: 'Cloud software',
    time: '8 days ago',
    preview: 'A broad customer system repositioning around trusted AI and data.',
    color: '#fa955c',
    bgGradient: 'linear-gradient(135deg, #fca978 0%, #fa955c 50%, #f58043 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.22)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  {
    name: 'Zoho',
    monogram: 'Z',
    industry: 'Business software',
    time: '12 days ago',
    preview: 'A quietly expansive suite with an increasingly differentiated point of view.',
    color: '#f47380',
    bgGradient: 'linear-gradient(135deg, #f98b96 0%, #f47380 50%, #ec5a6a 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.22)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
];

export const mockExampleCompanies = ['OpenAI', 'Microsoft', 'Salesforce', 'Zoho'];

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
