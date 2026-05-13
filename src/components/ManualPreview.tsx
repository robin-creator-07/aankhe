/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComposedManual, ComposedSection } from "../lib/schemaTypes";
import { cn } from "../lib/utils";
import { THEME_ENGINE } from "../lib/themeEngine";
import { ModeId } from "../lib/schemaTypes";
import { AlertCircle } from "lucide-react";

interface ManualPreviewProps {
  manual: ComposedManual;
  mode: ModeId;
  className?: string;
}

export function ManualPreview({ manual, mode, className }: ManualPreviewProps) {
  const theme = THEME_ENGINE[mode];

  return (
    <div className={cn("bg-ankahe-surface md:rounded-sm md:border md:border-ankahe-border p-8 md:p-14 lg:p-16 overflow-y-auto max-h-screen", className)}>
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Header */}
        <header className="space-y-6 border-b border-ankahe-border pb-12 text-center">
          <p className="text-ankahe-accent font-bold uppercase tracking-[0.2em] text-[10px]">
            {manual.subtitle}
          </p>
          <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-display font-medium text-ankahe-accent-dark tracking-tight leading-none")}>
            {manual.title}
          </h1>
        </header>

        {/* At a Glance */}
        {manual.atAGlance && (
          <section className="bg-ankahe-bg/50 p-8 md:p-12 rounded-sm border border-ankahe-border">
            <h2 className="text-[10px] font-bold text-ankahe-muted uppercase tracking-[0.15em] mb-4 text-center">At a Glance</h2>
            <p className="text-xl md:text-2xl text-ankahe-text font-display leading-relaxed text-center italic text-ankahe-accent-dark">
              “{manual.atAGlance}”
            </p>
          </section>
        )}

        {/* Sections */}
        <div className="space-y-20 py-8">
          {manual.sections.map((section: ComposedSection) => (
            <section key={section.id} className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
              <div className="space-y-4 md:sticky md:top-8">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-ankahe-accent-dark">
                  {section.title}
                </h3>
                <p className="text-sm text-ankahe-muted leading-relaxed max-w-xs">{section.description}</p>
              </div>

              <div className="space-y-6">
                {section.details.length > 0 && (
                  <div className="space-y-4">
                    {section.details.map((p, i) => (
                      <p key={i} className="text-ankahe-text leading-relaxed text-lg">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {manual.answeredCount === 0 && (
          <div className="text-center py-24 space-y-4">
            <p className="text-ankahe-muted font-display italic text-lg">Your manual will start taking shape here.</p>
          </div>
        )}

        <footer className="pt-16 pb-8 border-t border-ankahe-border text-center">
          <p className="text-[10px] text-ankahe-muted/70 uppercase tracking-[0.2em] font-medium">
            Made with Ankahe · No account · No database
          </p>
        </footer>
      </div>
    </div>
  );
}
