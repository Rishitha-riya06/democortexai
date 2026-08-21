import { ConfidenceLevel } from '../types/intelligence';

export function getConfidenceBadgeClass(confidence: ConfidenceLevel | string): string {
  switch (confidence) {
    case 'High confidence':
      return 'reference-confidence';
    case 'Medium confidence':
      return 'reference-confidence-medium';
    case 'Low confidence':
      return 'reference-confidence-low';
    default:
      return 'reference-confidence';
  }
}
