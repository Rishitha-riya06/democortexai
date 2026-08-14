import { ReactNode } from 'react';
import { Sparkles, History, PlusCircle, BarChart3, Settings } from 'lucide-react';

export interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onNavigate?: (screen: string) => void;
  children?: ReactNode;
}

export function Sidebar({ isOpen = false, onClose, onNavigate }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <aside className="app-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <div className="sidebar-brand">
        <span className="wordmark-mark">C</span>ORTEX
      </div>
      <nav className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button onClick={() => onNavigate?.('landing')} className="sidebar-link">
          <History size={16} /> Recent Intelligence
        </button>
        <button onClick={() => onNavigate?.('new')} className="sidebar-link">
          <PlusCircle size={16} /> New Analysis
        </button>
        <button onClick={() => onNavigate?.('competitors')} className="sidebar-link">
          <BarChart3 size={16} /> Competitor Landscape
        </button>
        <button onClick={() => onNavigate?.('chat')} className="sidebar-link">
          <Sparkles size={16} /> AI Chat
        </button>
        <button className="sidebar-link muted">
          <Settings size={16} /> Settings
        </button>
      </nav>
    </aside>
  );
}
