# Ankahe Design System

## Core Aesthetic
A warm, calm, human-centric design system avoiding clinical lines or AI slop. It feels like a premium private document studio.

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
- `ankahe-success`, `ankahe-warning`, `ankahe-danger`: semantic status colors expressed as Ankahe tokens, not default Tailwind colors.

### Typography
- Primary Sans (`font-sans`): `Manrope` (Clean, geometric, clear)
- Display Serif (`font-display`): `Spectral` (Elegant, literary, warm)

### Interaction Standards
- **Wait Time:** 150-250ms for small interactions, 300-500ms for screen transitions.
- **Controls:** Scale inputs, soft selection chips, avoiding standard radio buttons.
- **Targets:** Touch and navigation controls are at least 44px in their interactive dimension.
- **Elevation:** Shadows are avoided when possible. Surface layers are distinguished by 1px borders or subtle color shifts.

## Component Standards

### Mode Cards
Wide, simple layouts summarizing the intent. Use clear borders.

### Multi-Select & Option Chips
Replaced standard selects with large, tappable `<button>` elements wrapped in flex layouts. Great for mobile. Uses border states instead of heavy background fills until selected.

### Privacy Toggles
Icons + Text indicating exactly who can see what. Selected state is exposed semantically, not only visually.

### Artifact Canvas
Uses generous padding (`p-16`) and 1 column on center to mimic a deep readable document.

## Voice
Calm, clear, warm, non-judgmental. Not clinical, not manipulative. 
"Your manual will start taking shape here." instead of "No data generated."
"Say it once. Be understood."
