import { ReactNode, useState } from 'react';

export interface TooltipProps {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="tooltip-box"
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '6px',
            padding: '4px 8px',
            backgroundColor: '#1a1b26',
            color: '#e2e8f0',
            fontSize: '11px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 50,
            pointerEvents: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
