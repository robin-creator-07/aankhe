# Ankahe Brand Design

## Design Position

Ankahe is a warm private manual studio. It should feel calm, practical, and carefully made: paper, ink, terracotta, clay, oat, sage, and precise controls.

The brand is related to Reflections through restraint and privacy, but Ankahe is more structured and artifact-led.

## Scene

A person is writing sensitive context at a desk, likely before a work conversation, care conversation, repair conversation, or handoff. They need clarity, privacy, and a useful document more than atmosphere.

This scene calls for a light warm interface with restrained color and strong readability.

## Color Strategy

Use a restrained product palette.

- Warm paper backgrounds.
- Soft tinted surfaces.
- Deep warm ink for text.
- Terracotta for primary actions and selected states.
- Sage as a secondary trust/support accent.
- Clay and oat for warmth and low-emphasis structure.

Color should guide action, state, and hierarchy. It should not decorate empty space.

## Token Roles

- `ankahe-bg`: page background, warm paper.
- `ankahe-surface`: primary panels and document surfaces.
- `ankahe-surface-soft`: rails, selected surrounds, soft callouts.
- `ankahe-text`: main ink.
- `ankahe-muted`: secondary text with WCAG AA contrast.
- `ankahe-border`: quiet dividers.
- `ankahe-accent`: terracotta action and selection.
- `ankahe-accent-dark`: high-contrast terracotta-brown text.
- `ankahe-on-accent`: light text on accent surfaces.
- `ankahe-sage`: support and trust accent.
- `ankahe-clay`: warm secondary accent.
- `ankahe-oat`: gentle highlight.
- `ankahe-success`, `ankahe-warning`, `ankahe-danger`: semantic states expressed in the Ankahe palette.

## Typography

Manrope is the product face. Spectral is the editorial/manual face.

Use Manrope for task surfaces and Spectral for moments where the manual should feel composed. Avoid Spectral in small controls, dense labels, or data-like status rows.

## Components

- Mode cards are wide, simple, and visibly selectable.
- Visibility controls pair text, icon, selected state, and screen-reader state.
- Storage mode controls must name what happens to the user's answers.
- Artifact surfaces should feel like a document, not a dashboard.
- Navigation and footer items must be real links or clearly non-interactive text.

## Clutter Rules

- One primary action per area.
- Remove copy that repeats the heading.
- Prefer inline explanation to extra panels.
- Use cards only for real choices, repeated items, or framed tools.
- Never put cards inside cards.
- Do not add decorative metrics, badges, blobs, gradient text, or glassmorphism.

## Motion

Use motion only for state changes, reveals, and feedback. Keep transitions between 150 and 250ms for controls, and respect `prefers-reduced-motion`.

## Accessibility

Design for WCAG AA contrast, visible focus, named controls, semantic landmarks, reduced motion, keyboard access, and 44px touch targets.
