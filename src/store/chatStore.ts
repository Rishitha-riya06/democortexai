import { ChatMessage } from '../types/chat';

export interface ChatStoreState {
  messages: ChatMessage[];
  input: string;
  isStreaming: boolean;
}

export const initialChatState: ChatStoreState = {
  messages: [],
  input: '',
  isStreaming: false,
};
