# Typography And Interface Language

## Typography Role

Ankahe uses type to create calm structure. The interface should feel like a private document studio: legible controls around a warm editorial artifact.

## Font Families

- Manrope is the product UI face.
- Spectral is the editorial/manual face.

Manrope handles navigation, controls, labels, buttons, help text, and body UI. Spectral handles display headings, reflective prompts, artifact titles, and manual prose moments.

## Local Font Files

The app loads fonts from `public/fonts`.

- `Manrope-Variable.woff2` for UI weights.
- `Spectral-Regular.woff2` for editorial regular text.
- `Spectral-Bold.woff2` for editorial emphasis.
- `Spectral-Italic.woff2` for quiet reflective emphasis.

Do not declare Spectral 500 or 600 unless those files are added.

## Scale

- Use restrained product type in controls.
- Reserve large Spectral for screen titles and artifact surfaces.
- Keep labels compact and high contrast.
- Keep prose line length around 65 to 75 characters.
- Do not use viewport-scaled font sizes.
- Letter spacing should be zero for normal text. Use uppercase tracking only for rare labels.

## Interface Language

Controls should use familiar product language:

- Include
- Keep private
- Omit
- Continue
- Back
- Copy link
- Export PDF
- Download image

Avoid metaphorical controls:

- Reveal
- Unlock
- Transform
- Activate
- Complete journey

## Layout Language

Ankahe should prefer:

- Full-width bands.
- Clear panels.
- Gentle dividers.
- Document-like columns.
- Inline controls over modals.
- One primary action per decision area.

Avoid:

- Cards inside cards.
- Repeated identical card grids.
- Decorative blobs or orbs.
- Gradient text.
- Glass panels as a default surface.
- Metric blocks that make the user feel scored.

## Touch And Responsive Standards

- Interactive targets must be at least 44px in the active dimension.
- Segmented controls must expose selected state through semantics and visible styling.
- Header and footer links must remain tappable on mobile.
- Text must wrap without overlapping controls.
- Mobile should keep the next action visible without crowding the writing surface.
