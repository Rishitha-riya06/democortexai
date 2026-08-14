import { ExternalLink, Download, Share2 } from 'lucide-react';

export interface ExportButtonsProps {
  onShare?: () => void;
  onExport?: () => void;
}

export function ExportButtons({ onShare, onExport }: ExportButtonsProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button
        className="reference-share"
        onClick={onShare}
        aria-label="Share report"
      >
        <ExternalLink size={13} />
      </button>
      {onExport && (
        <button
          className="reference-share"
          onClick={onExport}
          aria-label="Export report"
        >
          <Download size={13} />
        </button>
      )}
    </div>
  );
}
