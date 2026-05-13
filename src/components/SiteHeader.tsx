import { Link } from "react-router-dom";
import { ModeId } from "../lib/schemaTypes";

interface SiteHeaderProps {
  onStart?: (mode: ModeId) => void;
}

export function SiteHeader({ onStart }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-ankahe-bg/90 backdrop-blur-md border-b border-ankahe-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display font-semibold text-ankahe-accent-dark text-xl sm:text-2xl hover:text-ankahe-accent transition-colors"
        >
          Ankahe
        </Link>
        <nav className="flex gap-4 sm:gap-8 text-sm font-medium text-ankahe-muted">
          <Link to="/manual/me" className="hover:text-ankahe-text transition-colors">Me</Link>
          <Link to="/manual/work" className="hover:text-ankahe-text transition-colors">Work</Link>
          <button className="hover:text-ankahe-text transition-colors opacity-50 cursor-not-allowed hidden sm:block" title="Coming soon">Talk</button>
          <button className="hover:text-ankahe-text transition-colors opacity-50 cursor-not-allowed hidden sm:block" title="Coming soon">Us</button>
        </nav>
      </div>
    </header>
  );
}
