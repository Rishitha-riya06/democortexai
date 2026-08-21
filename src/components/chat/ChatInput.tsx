import { FormEvent } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Company } from '../../types/company';

export interface ChatInputProps {
  company: Company;
  input: string;
  setInput: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export function ChatInput({
  company,
  input,
  setInput,
  onSubmit,
  disabled = false,
}: ChatInputProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSubmit();
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <Sparkles size={17} />
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder={`Ask anything about ${company}...`}
        aria-label={`Ask anything about ${company}`}
        disabled={disabled}
      />
      <button type="submit" aria-label="Send question" disabled={disabled || !input.trim()}>
        <ArrowUpRight size={17} />
      </button>
    </form>
  );
}
