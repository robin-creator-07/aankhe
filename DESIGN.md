# Design

## Core Aesthetic

Ankahe uses a warm, calm, human-centric product system. It should feel like a premium private document studio: soft paper, deep ink, clear controls, gentle dividers, and restrained color used for action, state, and trust.

The full brand design reference lives at `docs/brand/DESIGN.md`.

## Scene

A person is writing sensitive context before a work conversation, care conversation, repair conversation, or handoff. They need clarity, privacy, and a useful manual more than decoration.

## Colors

- `ankahe-bg`: warm paper background.
- `ankahe-surface`: soft panel and document surface.
- `ankahe-surface-soft`: interaction rails, selected control surrounds, and low-emphasis callouts.
- `ankahe-text`: deep warm ink for body and headings.
- `ankahe-muted`: secondary warm text with WCAG AA contrast.
- `ankahe-border`: gentle dividers.
- `ankahe-accent`: terracotta action color with WCAG AA contrast for text pairings.
- `ankahe-accent-dark`: deep terracotta-brown for high-contrast accent text.
- `ankahe-on-accent`: light text on accent surfaces.
- `ankahe-sage`, `ankahe-clay`, `ankahe-oat`: supporting warmth and trust accents.
- Semantic status colors should be warm-tokenized equivalents, not default Tailwind slate, green, amber, or red utilities.

## Typography

- Primary sans: Manrope for product UI, labels, buttons, help text, and body text.
- Display serif: Spectral for editorial headings, reflective prompts, and manual artifact prose.
- Fonts are self-hosted from `public/fonts`.
- Keep product labels compact and readable. Avoid oversized display treatment inside controls.
- Do not declare Spectral weights that are not present locally.

## Components

- Mode cards are wide, simple choices with clear borders and direct actions.
- Segmented controls use tappable buttons with explicit selected state semantics.
- Visibility controls pair icon and text, and never rely on color alone.
- Storage controls must explain what happens to the user's answers.
- The artifact canvas uses generous padding and a document-like column.
- Footer and navigation links must be real links or clearly non-interactive text.

## Interaction

- Small interactions should use 150-250ms transitions.
- Screen transitions can use 300-500ms if they clarify state.
- Respect `prefers-reduced-motion`.
- Touch targets should be at least 44px by 44px on mobile and for primary navigation.
- Focus indicators must remain visible and high contrast.

## Clutter Rules

- One primary action per area.
- Remove copy that repeats the heading.
- Do not use nested cards.
- Do not add decorative blobs, gradient text, glass panels, metric cards, or gamified progress visuals.

## Voice

Calm, clear, warm, non-judgmental. Prefer plain privacy language over technical explanations. Use canonical terms from `docs/brand/glossary.md`.
