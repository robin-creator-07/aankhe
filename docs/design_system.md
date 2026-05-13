# Ankahe Design System

## Core Aesthetic
A warm, calm, human-centric design system avoiding clinical lines or AI slop. It feels like a premium private document studio.

## Design Tokens

### Colors
- `ankahe-bg`: `#F8F1EA` (Warm paper background)
- `ankahe-surface`: `#FFFDF8` (Soft white panels)
- `ankahe-surface-soft`: `#F3E7DD` (Interaction states and highlights)
- `ankahe-text`: `#2A211D` (Deep warm dark brown/black)
- `ankahe-muted`: `#756A63` (Subtle text)
- `ankahe-border`: `#E7D9CF` (Gentle dividers)
- `ankahe-accent`: `#B96F55` (Terracotta primary accent)
- `ankahe-accent-dark`: `#3A2923` (Deep contrast variation)

### Typography
- Primary Sans (`font-sans`): `Manrope` (Clean, geometric, clear)
- Display Serif (`font-display`): `Spectral` (Elegant, literary, warm)

### Interaction Standards
- **Wait Time:** 150-250ms for small interactions, 300-500ms for screen transitions.
- **Controls:** Scale inputs, soft selection chips, avoiding standard radio buttons.
- **Elevation:** Shadows are avoided when possible. Surface layers are distinguished by 1px borders or subtle color shifts.

## Component Standards

### Mode Cards
Wide, simple layouts summarizing the intent. Use clear borders.

### Multi-Select & Option Chips
Replaced standard selects with large, tappable `<button>` elements wrapped in flex layouts. Great for mobile. Uses border states instead of heavy background fills until selected.

### Privacy Toggles
Icons + Text indicating exactly who can see what. Colors map to trust (Green = Safe/None).

### Artifact Canvas
Uses generous padding (`p-16`) and 1 column on center to mimic a deep readable document.

## Voice
Calm, clear, warm, non-judgmental. Not clinical, not manipulative. 
"Your manual will start taking shape here." instead of "No data generated."
"Say it once. Be understood."
