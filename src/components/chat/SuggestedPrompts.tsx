import { mockSuggestedPrompts } from '../../data/mockChat';

export interface SuggestedPromptsProps {
  prompts?: string[];
  onSelect: (prompt: string) => void;
}

export function SuggestedPrompts({
  prompts = mockSuggestedPrompts,
  onSelect,
}: SuggestedPromptsProps) {
  return (
    <div className="suggested-questions">
      <span>Try asking</span>
      {prompts.map((question) => (
        <button
          key={question}
          type="button"
          onClick={() => onSelect(question)}
        >
          {question}
        </button>
      ))}
    </div>
  );
}
