/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ModeConfig, ManualState, Visibility, ComposedManual } from "../lib/schemaTypes";
import { QuestionStep } from "./QuestionStep";
import { cn } from "../lib/utils";
import { THEME_ENGINE } from "../lib/themeEngine";
import { ChevronLeft, ChevronRight, LayoutDashboard, Palette } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FormRendererProps {
  config: ModeConfig;
  state: ManualState;
  updateAnswer: (id: string, val: any) => void;
  updateVisibility: (id: string, vis: Visibility) => void;
  onFinish: () => void;
}

export function FormRenderer({
  config,
  state,
  updateAnswer,
  updateVisibility,
  onFinish
}: FormRendererProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const theme = THEME_ENGINE[config.id];

  const currentQuestion = config.questions[currentStepIndex];
  const section = config.sections.find(s => s.id === currentQuestion.sectionId);
  const sectionIndex = config.sections.findIndex(s => s.id === section?.id);
  
  const progress = ((currentStepIndex + 1) / config.questions.length) * 100;

  const next = () => {
    if (currentStepIndex < config.questions.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo(0, 0);
    } else {
      onFinish();
    }
  };

  const back = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="space-y-12">
      {/* Header / Section Indicator */}
      <header className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-ankahe-muted uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className={cn("px-2 py-0.5 rounded bg-ankahe-surface-soft text-ankahe-text")}>
              Section {sectionIndex + 1}
            </span>
            <span>{section?.title}</span>
          </div>
          <span>{currentStepIndex + 1} / {config.questions.length}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-ankahe-surface-soft rounded-full overflow-hidden">
          <motion.div 
            className={cn("h-full bg-ankahe-accent")}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          />
        </div>
      </header>

      {/* Main Form Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <QuestionStep
            question={currentQuestion}
            value={state.answers[currentQuestion.id]}
            onChange={(val) => updateAnswer(currentQuestion.id, val)}
            visibility={state.visibilityByQuestion[currentQuestion.id] || currentQuestion.defaultVisibility}
            onVisibilityChange={(vis) => updateVisibility(currentQuestion.id, vis)}
            onNext={next}
            onBack={back}
            isFirst={currentStepIndex === 0}
            isLast={currentStepIndex === config.questions.length - 1}
          />
        </motion.div>
      </AnimatePresence>

      {/* Quick Nav */}
      <div className="hidden md:flex flex-wrap gap-2 pt-12 border-t border-ankahe-border">
        {config.questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrentStepIndex(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              i === currentStepIndex ? "w-6 bg-ankahe-accent-dark" : (state.answers[q.id] ? "bg-ankahe-accent/50" : "bg-ankahe-surface-soft hover:bg-ankahe-border")
            )}
          />
        ))}
      </div>
    </div>
  );
}
