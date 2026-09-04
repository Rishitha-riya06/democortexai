import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export type Screen = 'landing' | 'intelligence' | 'competitors';

export interface TopbarProps {
  screen: Screen;
  onHome: () => void;
  onNew: () => void;
}

export function Topbar({ screen, onHome, onNew }: TopbarProps) {
  // Past a short scroll the bar collapses into a floating white pill that
  // stays pinned for the rest of the page.
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 90);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-nav${docked ? ' is-docked' : ''}`}>
      <div className="top-nav-inner">
        {/* Both marks share one slot and cross-fade, so the swap happens
            inside the same collapsing motion rather than popping. */}
        <div className="nav-brand">
          <button className="wordmark" onClick={onHome} aria-label="Go to 7thSense home">
            <span className="wm-seven">
              7<sup>th</sup>
            </span>
            <span className="wm-sense">sense</span>
          </button>

          <button className="wm-tile" onClick={onHome} aria-label="Go to 7thSense home" tabIndex={-1}>
            7
          </button>
        </div>

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

        <div className="nav-actions">
          <button className="nav-pill nav-pill-ghost" type="button">
            Sign up
          </button>
          <button className="nav-pill nav-pill-lime" type="button">
            Log in
          </button>
          <button className="menu-button" aria-label="Open menu">
            <Menu size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}
