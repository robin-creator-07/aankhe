# Design

## Core Aesthetic

Ankahe uses a warm, calm, human-centric product system. It should feel like a premium private document studio: soft paper, clear controls, gentle dividers, and restrained color used for action, state, and trust.

## Colors

- `ankahe-bg`: warm paper background.
- `ankahe-surface`: soft panel surface.
- `ankahe-surface-soft`: interaction rails, selected control surrounds, and low-emphasis callouts.
- `ankahe-text`: deep warm ink for body and headings.
- `ankahe-muted`: secondary warm text with WCAG AA contrast.
- `ankahe-border`: gentle dividers.
- `ankahe-accent`: terracotta action color with WCAG AA contrast for text pairings.
- `ankahe-accent-dark`: deep terracotta-brown for high-contrast accent text.
- Semantic status colors should be warm-tokenized equivalents, not default Tailwind slate, green, amber, or red utilities.

## Typography

- Primary sans: Manrope for product UI, labels, buttons, and body text.
- Display serif: Spectral for editorial headings and manual artifact prose.
- Keep product labels compact and readable. Avoid oversized display treatment inside controls.

## Components

- Mode cards are wide, simple choices with clear borders and direct actions.
- Segmented controls use tappable buttons with explicit selected state semantics.
- Visibility controls pair icon and text, and never rely on color alone.
- The artifact canvas uses generous padding and a document-like column.
- Footer and navigation links must be real links or clearly non-interactive text.

## Interaction

- Small interactions should use 150-250ms transitions.
- Screen transitions can use 300-500ms if they clarify state.
- Respect `prefers-reduced-motion`.
- Touch targets should be at least 44px by 44px on mobile and for primary navigation.
- Focus indicators must remain visible and high contrast.

## Voice

Calm, clear, warm, non-judgmental. Prefer plain privacy language over technical explanations.
