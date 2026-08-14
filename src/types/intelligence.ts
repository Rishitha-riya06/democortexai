export type ConfidenceLevel = 'High confidence' | 'Medium confidence' | 'Low confidence';

export interface IntelligenceSection {
  number: string;
  title: string;
  content?: string;
  items?: string[];
  cards?: {
    title: string;
    description: string;
    confidence?: ConfidenceLevel;
  }[];
}

export interface MoatAnalysis {
  quote: string;
  author?: string;
}
