import { ReactNode } from 'react';
import { Topbar, Screen } from './Topbar';

export interface AppLayoutProps {
  screen: Screen;
  onHome: () => void;
  onNew: () => void;
  children: ReactNode;
}

export function AppLayout({ screen, onHome, onNew, children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <Topbar screen={screen} onHome={onHome} onNew={onNew} />
      {children}
    </div>
  );
}
