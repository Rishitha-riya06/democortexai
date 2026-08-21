import { motion } from 'framer-motion';
import { Company } from '../types/company';
import { ChatMessage } from '../types/chat';
import { CompanyHeader } from '../components/analysis/CompanyHeader';
import { ChatWindow } from '../components/chat/ChatWindow';

export interface CompanyChatProps {
  company: Company;
  messages: ChatMessage[];
  input: string;
  setInput: (value: string) => void;
  onAsk: (overridePrompt?: string) => void;
  onBack: () => void;
  onCompetitors: () => void;
}

export function CompanyChat({
  company,
  messages,
  input,
  setInput,
  onAsk,
  onBack,
  onCompetitors,
}: CompanyChatProps) {
  return (
    <motion.main
      className="intelligence-page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <CompanyHeader
        company={company}
        onBack={onBack}
        onCompetitors={onCompetitors}
      />
      <ChatWindow
        company={company}
        messages={messages}
        input={input}
        setInput={setInput}
        onAsk={onAsk}
      />
    </motion.main>
  );
}
