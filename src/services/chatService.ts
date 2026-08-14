import { Company } from '../types/company';
import { ChatMessage } from '../types/chat';
import { getMockAIResponse, mockSuggestedPrompts } from '../data/mockChat';

export const chatService = {
  getSuggestedPrompts(): string[] {
    return mockSuggestedPrompts;
  },

  async queryIntelligence(company: Company, question: string): Promise<string> {
    return Promise.resolve(getMockAIResponse(company, question));
  },

  createMessage(role: 'user' | 'assistant', content: string): ChatMessage {
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return {
      id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      role,
      content,
      timestamp: timeString,
    };
  },
};
