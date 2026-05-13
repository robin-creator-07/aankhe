export function SiteFooter() {
  return (
    <footer className="border-t border-ankahe-border/50 bg-ankahe-surface">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-ankahe-accent-dark tracking-tight text-xl">
              Ankahe
            </h3>
            <p className="text-ankahe-muted text-sm leading-relaxed max-w-xs">
              A private place to write what usually goes unsaid. Built for
              clarity, empathy, and better understanding.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-ankahe-accent-dark uppercase tracking-widest">
              Manuals
            </h4>
            <nav className="flex flex-col gap-3 text-sm text-ankahe-muted">
              <span className="hover:text-ankahe-text transition-colors cursor-pointer">Me Manual</span>
              <span className="hover:text-ankahe-text transition-colors cursor-pointer">Work Manual</span>
              <span className="text-ankahe-muted/50 cursor-not-allowed">Talk Manual (Coming Soon)</span>
              <span className="text-ankahe-muted/50 cursor-not-allowed">Us Manual (Coming Soon)</span>
            </nav>
          </div>

          {/* Privacy Promise */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-ankahe-accent-dark uppercase tracking-widest">
              Our Promise
            </h4>
            <p className="text-sm text-ankahe-muted leading-relaxed">
              No accounts. No databases. Your data lives only in your browser
              memory or specifically crafted URLs. When you close the tab, it's
              gone for good.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ankahe-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-ankahe-muted uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Ankahe</span>
          <span>v1.0 MVP</span>
        </div>
      </div>
    </footer>
  );
}
