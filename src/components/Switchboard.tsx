/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModeId, StorageMode } from "../lib/schemaTypes";
import { SoftButton } from "./SoftButton";
import { StorageModeToggle } from "./StorageModeToggle";
import { motion } from "motion/react";
import { SAMPLE_PERSONAL_STATE, SAMPLE_WORK_STATE } from "../lib/sampleState";
import { cn } from "../lib/utils";

interface SwitchboardProps {
  onStart: (mode: ModeId) => void;
  onTrySample: (sample: any) => void;
  storageMode: StorageMode;
  onStorageModeChange: (mode: StorageMode) => void;
}

export function Switchboard({ onStart, onTrySample, storageMode, onStorageModeChange }: SwitchboardProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-24 bg-ankahe-bg">
      {/* Hero */}
      <section className="text-center space-y-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-display font-medium tracking-tight text-ankahe-text leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Say it once. <br className="hidden md:block" /> Be understood.
        </motion.h1>
        <motion.p 
          className="text-xl text-ankahe-muted max-w-2xl mx-auto pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A private place to write what usually goes unsaid. <br className="hidden md:block" />
          For work, care, hard conversations, and the people who matter.
        </motion.p>
      </section>

      <section className="flex justify-center">
        <div className="max-w-lg text-center space-y-4">
          <p className="text-sm font-mono text-ankahe-muted/80 uppercase tracking-wide">
            Nothing is saved. Keep your link, QR, image, or PDF before leaving.
          </p>
        </div>
      </section>

      {/* Modes */}
      <section className="grid md:grid-cols-2 gap-6">
        <ModeCard 
          id="me"
          title="Me"
          label="How to understand me"
          description="Write the things people should know before they guess wrong."
          themeColor="ankahe-clay"
          onClick={() => onStart("me")}
          onSampleClick={() => onTrySample(SAMPLE_PERSONAL_STATE)}
        />
        <ModeCard 
          id="work"
          title="Work"
          label="How to work with me"
          description="Share how you focus, decide, talk, and build trust."
          themeColor="ankahe-sage"
          onClick={() => onStart("work")}
          onSampleClick={() => onTrySample(SAMPLE_WORK_STATE)}
        />
      </section>

      {/* Settings / Footer */}
      <section className="flex flex-col items-center gap-6 border-t border-ankahe-border pt-16 pb-12">
        <div className="space-y-4 text-center pb-8 border-b border-ankahe-border/50 max-w-xl mx-auto">
          <h3 className="font-semibold text-ankahe-text">Storage Mode</h3>
          <StorageModeToggle value={storageMode} onChange={onStorageModeChange} />
          <p className="text-sm text-ankahe-muted leading-relaxed">
            {storageMode === "url" 
              ? "Answers are saved inside your link. If you share the link, others see your answers."
              : "Answers live only in this tab's memory. They vanish if you refresh or close."}
          </p>
        </div>
      </section>
    </div>
  );
}

function ModeCard({ title, label, description, onClick, onSampleClick }: any) {
  return (
    <motion.article 
      whileHover={{ y: -2 }}
      className="bg-ankahe-surface border border-ankahe-border p-8 rounded-lg transition-all hover:shadow-sm"
    >
      <div className="space-y-3 mb-8">
        <h2 className="text-3xl font-display font-medium text-ankahe-text">{title}</h2>
        <p className="text-sm font-semibold text-ankahe-accent uppercase tracking-wider">{label}</p>
        <p className="text-ankahe-muted leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center gap-4">
        <SoftButton size="md" className="rounded-md" onClick={onClick}>Start a manual</SoftButton>
        <button 
          onClick={onSampleClick}
          className="min-h-11 inline-flex items-center text-sm font-medium text-ankahe-muted hover:text-ankahe-text transition-colors underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ankahe-accent focus-visible:ring-offset-2"
        >
          See a sample
        </button>
      </div>
    </motion.article>
  );
}
