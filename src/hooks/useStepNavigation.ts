/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";

export function useStepNavigation(totalSteps: number, onFinish: () => void) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onFinish();
    }
  };

  const back = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const jumpToStep = (index: number) => {
    if (index >= 0 && index < totalSteps) {
      setCurrentStepIndex(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  return {
    currentStepIndex,
    progress,
    next,
    back,
    jumpToStep,
    isFirst: currentStepIndex === 0,
    isLast: currentStepIndex === totalSteps - 1,
  };
}
