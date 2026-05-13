import { Link } from 'react-router-dom';
import { ModeId } from '../lib/schemaTypes';

interface SiteHeaderProps {
  onStart?: (mode: ModeId) => void;
}

export function SiteHeader({ onStart }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-ankahe-bg/90 backdrop-blur-md border-b border-ankahe-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="min-h-11 inline-flex items-center font-display font-semibold text-ankahe-accent-dark text-xl sm:text-2xl hover:text-ankahe-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ankahe-accent focus-visible:ring-offset-2"
        >
          Ankahe
        </Link>
        <nav aria-label="Primary" className="flex gap-1 sm:gap-4 text-sm font-medium text-ankahe-muted">
          <Link to="/manual/me" className="min-h-11 min-w-11 inline-flex items-center justify-center px-2 hover:text-ankahe-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ankahe-accent focus-visible:ring-offset-2">Me</Link>
          <Link to="/manual/work" className="min-h-11 min-w-11 inline-flex items-center justify-center px-2 hover:text-ankahe-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ankahe-accent focus-visible:ring-offset-2">Work</Link>
          <button type="button" disabled aria-disabled="true" className="min-h-11 min-w-11 px-2 text-ankahe-muted/60 cursor-not-allowed hidden sm:inline-flex items-center justify-center" title="Coming soon">Talk</button>
          <button type="button" disabled aria-disabled="true" className="min-h-11 min-w-11 px-2 text-ankahe-muted/60 cursor-not-allowed hidden sm:inline-flex items-center justify-center" title="Coming soon">Us</button>
        </nav>
      </div>
    </header>
  );
}
