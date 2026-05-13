/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComposedManual, ComposedSection, ManualState, ModeConfig, Visibility } from "./schemaTypes";
import { PROTOCOL_MANIFEST } from "./protocolManifest";

export function composeManual(
  state: ManualState, 
  options: { viewMode?: "private" | "public", excludedSections?: string[] } = {}
): ComposedManual {
  const { viewMode = "private", excludedSections = [] } = options;
  const config = PROTOCOL_MANIFEST[state.mode];
  const answers = state.answers;
  const visibility = state.visibilityByQuestion;

  const answeredQuestions = Object.keys(answers);
  const shareableCount = answeredQuestions.filter(id => visibility[id] === "share").length;
  const privateCount = answeredQuestions.filter(id => visibility[id] === "private").length;

  // Manual generation logic
  const composedSections: ComposedSection[] = config.sections
    .filter(section => !excludedSections.includes(section.id))
    .map(section => {
      const sectionQuestions = config.questions.filter(q => q.sectionId === section.id);
      const sectionAnswers = sectionQuestions.filter(q => !!answers[q.id]);
      
      const details: string[] = [];
      
      sectionAnswers.forEach(q => {
        const val = answers[q.id];
        const vis = visibility[q.id] || q.defaultVisibility;
        
        // Only include if not hidden
        if (vis === "hide") return;
        
        // Hide private fields if viewing in public mode
        if (viewMode === "public" && vis === "private") return;

        let formattedAnswer = "";
        if (Array.isArray(val)) {
          if (val.length === 1) formattedAnswer = val[0];
          else if (val.length === 2) formattedAnswer = val.join(" and ");
          else if (val.length > 2) formattedAnswer = val.slice(0, -1).join(", ") + ", and " + val[val.length - 1];
        } else {
          formattedAnswer = String(val);
        }
        
        if (q.manualTemplate) {
          // ensure lowercase formatting for some things if we want, but letting the user's string fall through is better.
          // if it's multiple choice, let's lowercase it so it fits into middle of sentences?
          // Actually, our templates: "When I am overwhelmed, it helps if you offer {answer}."
          // If the option is "Being listened to", we lowercase it: "being listened to".
          if (["select", "multiSelect", "yesNoMaybe", "pairedChoice"].includes(q.type)) {
            formattedAnswer = formattedAnswer.toLowerCase();
          }
          details.push(q.manualTemplate.replace("{answer}", formattedAnswer));
        } else {
          details.push(`${q.label} ${formattedAnswer}`);
        }
      });

      return {
        id: section.id,
        title: section.title,
        description: section.description,
        details
      };
    }).filter(s => s.details.length > 0);

  // Determine "At a Glance" - a bit hard without AI, but we use a template
  let atAGlance = "Your manual will start taking shape as you answer a few more questions.";
  if (answeredQuestions.length > 3) {
    if (state.mode === "me") {
      const name = answers["M_01"];
      if (name) {
        atAGlance = `${name} connects best through intentional communication and thoughtful attention. This manual reflects how to understand, care for, and collaborate with ${name}.`;
      } else {
        atAGlance = `I connect best through intentional communication and thoughtful attention. This manual reflects how to understand, care for, and collaborate with me.`;
      }
    } else {
      atAGlance = "I do my best work when expectations are clear and communication is transparent. This guide outlines my professional rhythm, focus needs, and feedback preferences.";
    }
  }

  return {
    id: `manual-${Date.now()}`,
    mode: state.mode,
    title: config.name,
    subtitle: config.label,
    atAGlance,
    sections: composedSections,
    hasPrivateItems: privateCount > 0,
    answeredCount: answeredQuestions.length,
    shareableCount,
    privateCount
  };
}
