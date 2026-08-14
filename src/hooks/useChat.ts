import { useState } from 'react';
import { ChatMessage } from '../types/chat';
import { Company } from '../types/company';
import { chatService } from '../services/chatService';

export function useChat(company: Company) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = async (overridePrompt?: string) => {
    const question = (overridePrompt ?? input).trim();
    if (!question) return;

    const userMsg = chatService.createMessage('user', question);
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const answer = await chatService.queryIntelligence(company, question);
    const assistantMsg = chatService.createMessage('assistant', answer);

    setMessages((prev) => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  const clearMessages = () => {
    setMessages([]);
    setInput('');
  };

  return {
    messages,
    setMessages,
    input,
    setInput,
    isLoading,
    askQuestion,
    clearMessages,
    suggestedPrompts: chatService.getSuggestedPrompts(),
  };
}
