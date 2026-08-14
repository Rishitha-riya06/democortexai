export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  sources?: string[];
}

export type SuggestedPrompt = string;
