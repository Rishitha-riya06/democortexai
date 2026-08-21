import { Menu } from 'lucide-react';

export type Screen = 'landing' | 'intelligence' | 'competitors';

export interface TopbarProps {
  screen: Screen;
  onHome: () => void;
  onNew: () => void;
}

export function Topbar({ screen, onHome, onNew }: TopbarProps) {
  return (
    <header className="top-nav">
      <button className="wordmark" onClick={onHome} aria-label="Go to CORTEX home">
        <span className="wordmark-mark">C</span>ORTEX
      </button>
      {screen === 'landing' ? (
        <nav className="nav-links">
          <button onClick={onHome}>History</button>
          <button onClick={onNew}>New analysis</button>
          <button className="muted-nav">Settings</button>
        </nav>
      ) : (
        <div className="nav-context">
          <span className="nav-dot" /> Private research workspace
        </div>
      )}
      <button className="menu-button" aria-label="Open menu">
        <Menu size={17} strokeWidth={1.8} />
      </button>
    </header>
  );
}
