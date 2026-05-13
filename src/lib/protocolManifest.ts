/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModeConfig } from "./schemaTypes";

export const PROTOCOL_MANIFEST: Record<string, ModeConfig> = {
  me: {
    id: "me",
    name: "Me Manual",
    label: "How to understand me",
    description: "Write the things people should know before they guess wrong.",
    theme: "me",
    sections: [
      { id: "basics", title: "Basics", description: "Identity and core traits." },
      { id: "rhythm", title: "Rhythm", description: "Energy and presence." },
      { id: "communication", title: "Communication", description: "Styles and preferences." },
      { id: "support", title: "Support", description: "Needs and care." },
      { id: "boundaries", title: "Boundaries", description: "Limits and space." },
      { id: "tension", title: "Tension", description: "Handling difficult moments." }
    ],
    questions: [
      { id: "M_01", mode: "me", sectionId: "basics", type: "text", label: "What name do you go by?", defaultVisibility: "share", manualTemplate: "I go by {answer}." },
      { id: "M_02", mode: "me", sectionId: "basics", type: "text", label: "What are your pronouns?", defaultVisibility: "share", manualTemplate: "My pronouns are {answer}." },
      { id: "M_03", mode: "me", sectionId: "rhythm", type: "select", options: ["I lead", "I support", "I observe first", "I match the energy"], label: "In a new group, how do you usually act?", defaultVisibility: "share", manualTemplate: "In a group, I tend to: {answer}." },
      { id: "M_04", mode: "me", sectionId: "rhythm", type: "scale", min: 1, max: 5, helperText: "1 = Needs notice, 5 = Highly spontaneous", label: "How much notice do you need for plans?", defaultVisibility: "share", manualTemplate: "On a scale of 1 (needs notice) to 5 (spontaneous), I am a {answer}." },
      { id: "M_05", mode: "me", sectionId: "communication", type: "select", options: ["Process alone first", "Talk it through live", "Write it out", "Sleep on it"], label: "When something matters, how do you prefer to process it?", defaultVisibility: "share", manualTemplate: "When something is important, I prefer to {answer}." },
      { id: "M_06", mode: "me", sectionId: "communication", type: "textarea", label: "What tone of voice helps you stay open?", defaultVisibility: "share", manualTemplate: "I stay most receptive when spoken to with {answer}." },
      { id: "M_07", mode: "me", sectionId: "support", type: "multiSelect", options: ["Being listened to", "Practical help", "Quiet company", "Space", "Distraction"], label: "When you are overwhelmed, what actually helps?", defaultVisibility: "share", manualTemplate: "When I am overwhelmed, it helps if you offer {answer}." },
      { id: "M_08", mode: "me", sectionId: "support", type: "textarea", label: "What kind of help makes things worse, even if well-meant?", defaultVisibility: "private", manualTemplate: "Please avoid {answer} when I'm stressed. It usually makes things worse." },
      { id: "M_09", mode: "me", sectionId: "boundaries", type: "textarea", label: "What is a firm boundary you have?", defaultVisibility: "private", manualTemplate: "A firm boundary for me: {answer}." },
      { id: "M_10", mode: "me", sectionId: "boundaries", type: "textarea", label: "What do people sometimes take personally about you, that is not about them?", defaultVisibility: "private", manualTemplate: "Something to know: {answer}. It is never personal." },
      { id: "M_11", mode: "me", sectionId: "tension", type: "select", options: ["Go quiet", "Try to explain", "Get defensive", "Need space"], label: "When you feel criticized, what is your first reflex?", defaultVisibility: "private", manualTemplate: "When criticized, my immediate reflex is often to {answer}." },
      { id: "M_12", mode: "me", sectionId: "tension", type: "multiSelect", options: ["A little time", "A clear apology", "Reassurance", "Humor", "A gentle check-in"], label: "After tension, what helps you reconnect?", defaultVisibility: "private", manualTemplate: "To reconnect after tension, I usually need {answer}." }
    ]
  },
  work: {
    id: "work",
    name: "Work Manual",
    label: "How to work with me",
    description: "Share how you focus, decide, talk, and build trust.",
    theme: "work",
    sections: [
      { id: "focus", title: "Focus", description: "Deep work conditions." },
      { id: "communication", title: "Communication", description: "Channels and protocols." },
      { id: "meetings", title: "Meetings", description: "Sync vs async." },
      { id: "feedback", title: "Feedback", description: "Growth and critique." },
      { id: "pressure", title: "Pressure", description: "Handling urgency." }
    ],
    questions: [
      { id: "W_01", mode: "work", sectionId: "focus", type: "multiSelect", options: ["Early morning", "Late night", "Short bursts", "Long quiet blocks", "After a clear brief"], label: "When do you usually do your best deep work?", defaultVisibility: "share", manualTemplate: "I do my best deep work in {answer}." },
      { id: "W_02", mode: "work", sectionId: "focus", type: "textarea", label: "What breaks your focus fastest?", defaultVisibility: "share", manualTemplate: "My focus is most easily broken by {answer}." },
      { id: "W_03", mode: "work", sectionId: "communication", type: "select", options: ["Chat", "Email", "Shared doc", "Voice note", "Live check-in"], label: "What is the best way to send you routine updates?", defaultVisibility: "share", manualTemplate: "For routine updates, please use {answer}." },
      { id: "W_04", mode: "work", sectionId: "communication", type: "textarea", label: "What information do you need before you can respond well?", defaultVisibility: "share", manualTemplate: "Before I can respond effectively, I usually need {answer}." },
      { id: "W_05", mode: "work", sectionId: "meetings", type: "multiSelect", options: ["Agenda", "Context", "Clear decision needed", "Pre-reading"], label: "What do you need before a meeting to make it worth your time?", defaultVisibility: "share", manualTemplate: "To make a meeting effective, I need {answer} beforehand." },
      { id: "W_06", mode: "work", sectionId: "feedback", type: "select", options: ["Written", "Live", "In the moment", "During 1:1s"], label: "How do you best receive useful feedback?", defaultVisibility: "share", manualTemplate: "I best receive feedback when it is delivered {answer}." },
      { id: "W_07", mode: "work", sectionId: "feedback", type: "textarea", label: "What makes feedback land badly for you?", defaultVisibility: "private", manualTemplate: "Feedback tends to land poorly for me if {answer}." },
      { id: "W_08", mode: "work", sectionId: "pressure", type: "textarea", label: "What counts as truly urgent to you?", defaultVisibility: "share", manualTemplate: "I consider something truly urgent only if {answer}." },
      { id: "W_09", mode: "work", sectionId: "pressure", type: "text", label: "If something is truly urgent, how should someone reach you?", defaultVisibility: "share", manualTemplate: "If it's an absolute emergency, reach me via {answer}." },
      { id: "W_10", mode: "work", sectionId: "pressure", type: "textarea", label: "What does stress look like on you at work?", defaultVisibility: "private", manualTemplate: "When I'm stressed at work, I tend to {answer}." },
      { id: "W_11", mode: "work", sectionId: "pressure", type: "textarea", label: "What is the best way to disagree with you?", defaultVisibility: "share", manualTemplate: "The most effective way to disagree with me is to {answer}." }
    ]
  }
};
