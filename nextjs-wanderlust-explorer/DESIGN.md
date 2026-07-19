---
name: Modern Horizon
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#424656'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#7f4f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a06500'
  on-tertiary-container: '#fff7f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style
The design system is engineered for a high-end travel marketplace, prioritizing clarity, inspiration, and effortless navigation. The brand personality is "The Sophisticated Concierge": professional yet vibrant, reliable yet adventurous. 

The aesthetic blends **Minimalism** with subtle **Glassmorphism** to create a sense of depth and airiness. By utilizing heavy whitespace and a refined color palette, the UI recedes to let high-quality travel imagery become the focal point. The emotional goal is to evoke a sense of "planned spontaneity"—the feeling that every detail is handled, allowing the user to focus on the joy of discovery.

## Colors
The palette is rooted in a professional "Vibrant Blue" primary, used for core actions and brand markers. 

- **Primary (#0066FF):** Used for primary buttons, active states, and progress indicators.
- **Surface:** Pure White (#FFFFFF) is the primary canvas, with Very Light Gray (#F9FAFB) used to differentiate background sections and card groupings.
- **Typography:** Dark Gray/Charcoal (#1F2937) ensures high legibility and a softer contrast than pure black.
- **Semantic:** Green is reserved for success states and price-positive indicators; Amber for ratings and warnings; Red for favorites and critical errors.

## Typography
Inter is used across all levels for its systematic precision and exceptional legibility. The hierarchy relies on substantial size contrasts and weight shifts to guide the user's eye. 

Display styles use tight letter spacing and bold weights to feel impactful and editorial. Body copy is set with generous line heights to prevent visual fatigue during long reading sessions (e.g., itinerary descriptions). Labels use a slightly heavier weight (Medium 500) to remain distinct at smaller sizes.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width of 1280px for desktop to maintain optimal line lengths. 

- **Desktop:** 12-column grid with 24px gutters and 40px outer margins.
- **Tablet:** 8-column grid with 20px gutters and 24px outer margins.
- **Mobile:** 4-column grid with 16px gutters and 16px outer margins.

Spacing follows an 8px linear scale. Vertical "Section Gaps" (80px+) are intentionally large to create a high-end, airy feel, separating different types of experiences or categories clearly.

## Elevation & Depth
The design system uses **Ambient Shadows** to create a soft, tactile feel without visual clutter. Surfaces do not use heavy borders; instead, depth is communicated through subtle shifts in elevation.

- **Level 0 (Base):** Used for the main background (#FFFFFF or #F9FAFB).
- **Level 1 (Cards/Inputs):** A very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)).
- **Level 2 (Hover/Active):** Increased shadow spread (0px 10px 30px rgba(0, 0, 0, 0.08)) to indicate interactivity.
- **Level 3 (Modals/Dropdowns):** Deep, soft shadows with a slight blue tint in the umbra to maintain brand consistency.

Backdrop blurs (12px - 20px) are used on navigation bars and sticky headers to provide a sense of transparency and place.

## Shapes
The shape language is defined by large radii, reinforcing the "friendly and modern" brand attribute. 

Corners are never sharp. Standard components use a 12px radius, while larger containers like cards and image galleries utilize a 16px radius. Interactive badges and tags use a fully rounded "pill" shape to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid Vibrant Blue with white text. 12px corner radius. Heavy padding (16px 24px).
- **Secondary:** Light blue tint background (5% opacity of primary) with primary blue text.
- **Icon Buttons:** Circular or slightly rounded squares with soft shadows for "Favorite" (Red) or "Share" actions.

### Cards
- **Experience Cards:** 16px corner radius, overflow hidden for images. Content areas use generous internal padding (20px). Subtle 1px light gray border (#F3F4F6) only if on a white background.

### Inputs
- **Search/Fields:** 12px radius, background #F9FAFB, no border by default. On focus, transition to white background with a 2px Vibrant Blue border.

### Badges & Chips
- **Category Chips:** Pill-shaped, light gray background, 12px font size.
- **Status Badges:** Small dots or subtle background tints (e.g., Green for "Available").

### Skeleton States
- Used during image and price loading. Skeletons should use a soft pulse animation between #F3F4F6 and #E5E7EB, mirroring the 16px card radius.

### Navigation
- A persistent, glassmorphic top bar with a background blur (saturate 180%, blur 20px) and a bottom divider of 10% opacity.