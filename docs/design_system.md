# Ankahe Design System

## Core Aesthetic

A warm, calm, human-centric product system avoiding clinical lines, generic AI styling, and clutter. It feels like a premium private document studio: clear controls around a useful manual artifact.

Brand-level rules live in `docs/brand/`.

## Design Tokens

### Colors

- `ankahe-bg`: warm paper background, defined in OKLCH.
- `ankahe-surface`: soft panel surface, tinted instead of pure white.
- `ankahe-surface-soft`: interaction states and highlights.
- `ankahe-text`: deep warm ink.
- `ankahe-muted`: secondary warm text, tuned for WCAG AA contrast.
- `ankahe-border`: gentle dividers.
- `ankahe-accent`: darker terracotta primary accent, tuned for WCAG AA with `ankahe-on-accent`.
- `ankahe-accent-dark`: deep contrast variation.
- `ankahe-on-accent`: warm light text on primary accent surfaces.
- `ankahe-sage`, `ankahe-clay`, `ankahe-oat`: supporting warmth and trust accents.
- `ankahe-success`, `ankahe-warning`, `ankahe-danger`: semantic status colors expressed as Ankahe tokens, not default Tailwind colors.

### Typography

- Primary Sans (`font-sans`): `Manrope`, self-hosted from `public/fonts/Manrope-Variable.woff2`.
- Display Serif (`font-display`): `Spectral`, self-hosted from `public/fonts/Spectral-Regular.woff2`, `Spectral-Bold.woff2`, and `Spectral-Italic.woff2`.
- Use Manrope for product controls, labels, and dense UI.
- Use Spectral for screen titles, reflective prompts, and artifact prose.
- Do not declare Spectral 500 or 600 unless matching local files are added.

### Interaction Standards

- **Wait Time:** 150-250ms for small interactions, 300-500ms for screen transitions.
- **Controls:** Scale inputs, soft selection chips, and segmented buttons should expose selected state semantically.
- **Targets:** Touch and navigation controls are at least 44px in their interactive dimension.
- **Elevation:** Shadows are avoided when possible. Surface layers are distinguished by 1px borders or subtle color shifts.
- **Focus:** Focus indicators must stay visible and high contrast.

## Component Standards

### Mode Cards

Wide, simple layouts summarizing the intent. Use clear borders and direct actions.

### Multi-Select And Option Chips

Use large, tappable `<button>` elements wrapped in flex layouts. Border and text states should communicate selection before heavy background fills.

### Visibility Controls

Use icon plus text to state exactly what will be included, private, or omitted. Selected state must be exposed semantically, not only visually.

### Storage Mode Controls

Copy must explain the consequence:

- Memory only: answers stay in browser memory.
- Save in link: answers are encoded into the URL.

### Artifact Canvas

Use generous padding and a centered document column. The artifact should feel like a readable manual, not a dashboard report.

## Clutter Rules

- One primary action per area.
- Avoid nested cards.
- Avoid repeated identical card grids.
- Avoid gradient text, decorative blobs, glass panels, and metric blocks.
- Use color for action, state, and trust, not empty decoration.

## Voice

Calm, clear, warm, non-judgmental. Not clinical, not manipulative, not gamified.

Use "Your manual will start taking shape here." instead of "No data generated."

Use "Say it once. Be understood." as a brand line only where it supports the task.
