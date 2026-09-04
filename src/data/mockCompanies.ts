import { CompanyKey, HistoryItem } from '../types/company';

export const mockHistory: HistoryItem[] = [
  {
    name: 'OpenAI',
    monogram: 'O',
    industry: 'Artificial intelligence',
    time: 'Yesterday',
    preview: 'An accelerating platform story shaped by distribution and model capability.',
    color: '#e11d48',
    bgGradient: 'linear-gradient(135deg, #ff4d73 0%, #e11d48 50%, #a10f34 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.24)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  {
    name: 'Microsoft',
    monogram: 'M',
    industry: 'Enterprise software',
    time: '3 days ago',
    preview: 'Deep enterprise reach continues to turn intelligence into workflow advantage.',
    color: '#c22f24',
    bgGradient: 'linear-gradient(135deg, #e0503f 0%, #c22f24 50%, #8c1c17 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.24)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  {
    name: 'Salesforce',
    monogram: 'S',
    industry: 'Cloud software',
    time: '8 days ago',
    preview: 'A broad customer system repositioning around trusted AI and data.',
    color: '#bf2f78',
    bgGradient: 'linear-gradient(135deg, #e0559a 0%, #bf2f78 50%, #8a1c56 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.24)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  {
    name: 'Zoho',
    monogram: 'Z',
    industry: 'Business software',
    time: '12 days ago',
    preview: 'A quietly expansive suite with an increasingly differentiated point of view.',
    color: '#ff90bc',
    bgGradient: 'linear-gradient(135deg, #ffc2dc 0%, #ff90bc 50%, #e0578f 100%)',
    textColor: '#5b0f18',
    accentColor: '#5b0f18',
    avatarBg: 'rgba(91, 15, 24, 0.18)',
    avatarColor: '#5b0f18',
    borderColor: 'rgba(91, 15, 24, 0.25)',
  },
];

export const mockExampleCompanies = ['OpenAI', 'Microsoft', 'Salesforce', 'Zoho'];

export const mockCompanyColors: Record<CompanyKey, string> = {
  target: '#d8a7a7',
  compA: '#0d9488',
  compB: '#22a06b',
  compC: '#e8833a',
};

export const mockCompanyLabels: Record<CompanyKey, string> = {
  target: 'NVIDIA',
  compA: 'AMD',
  compB: 'Intel',
  compC: 'Qualcomm',
};
