# Portfolio Template Style Guide

Source image: `template.png`  
Canvas size: `1024 x 1536`

This guide extracts the visual language from the template and turns it into reusable CSS, design tokens, and implementation rules for a 1:1 portfolio build.

## Visual Identity

The design is a premium dark developer portfolio with a futuristic but polished feel.

Core traits:

- Deep navy/black page background.
- Electric purple primary accent.
- White high-contrast typography.
- Soft glass panels with thin blue-gray borders.
- Subtle purple and blue glow effects.
- 3D illustrated hero artwork.
- Rounded buttons and cards.
- Smooth hover states and floating UI elements.
- Minimal navigation with active purple state.

## Fonts

The exact font cannot be extracted from a PNG, but the closest visual match is:

```css
font-family: "Inter", "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Recommended setup:

- Use **Inter** for the whole site.
- Use **Manrope** or **Sora** for large headings if a more premium headline feel is wanted.
- Keep letter spacing normal. Do not use negative tracking.

Suggested font imports:

```tsx
import { Inter, Manrope } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
```

Suggested CSS:

```css
body {
  font-family: var(--font-inter), system-ui, sans-serif;
}

h1,
h2,
h3 {
  font-family: var(--font-manrope), var(--font-inter), system-ui, sans-serif;
  font-weight: 800;
  letter-spacing: 0;
}
```

## Color Palette

Pixel samples and visual matching from the template:

| Token | Hex | Usage |
| --- | --- | --- |
| `--bg` | `#000510` | Main page background. |
| `--bg-deep` | `#000713` | Section background and dark gradients. |
| `--bg-soft` | `#030B19` | Card and skill tile base. |
| `--surface` | `#07111F` | Elevated panels. |
| `--surface-2` | `#0B1728` | Cards, project panels, icon tiles. |
| `--surface-3` | `#101B2E` | Hover surfaces. |
| `--border` | `rgba(114, 131, 165, 0.35)` | Main card border. |
| `--border-soft` | `rgba(148, 163, 184, 0.18)` | Inner dividers and subtle outlines. |
| `--text` | `#F8F8FF` | Main white text. |
| `--text-soft` | `#E5E7F2` | Secondary white text. |
| `--muted` | `#CBD5E1` | Body copy. |
| `--muted-2` | `#94A3B8` | Labels and metadata. |
| `--purple` | `#6537EC` | Sampled hero purple. |
| `--purple-bright` | `#7C3AED` | Primary accent. |
| `--purple-light` | `#A78BFA` | Small labels and active nav. |
| `--blue` | `#2563EB` | Secondary glow and gradient support. |
| `--cyan` | `#06B6D4` | React/Tailwind tech icon accent. |
| `--green` | `#22C55E` | MongoDB/Node accent. |
| `--amber` | `#F59E0B` | Fast learner icon accent. |
```

CSS variables:

```css
:root {
  --bg: #000510;
  --bg-deep: #000713;
  --bg-soft: #030b19;
  --surface: #07111f;
  --surface-2: #0b1728;
  --surface-3: #101b2e;

  --border: rgba(114, 131, 165, 0.35);
  --border-soft: rgba(148, 163, 184, 0.18);

  --text: #f8f8ff;
  --text-soft: #e5e7f2;
  --muted: #cbd5e1;
  --muted-2: #94a3b8;

  --purple: #6537ec;
  --purple-bright: #7c3aed;
  --purple-light: #a78bfa;
  --blue: #2563eb;
  --cyan: #06b6d4;
  --green: #22c55e;
  --amber: #f59e0b;
}
```

## Background

The page uses a very dark base with large soft radial glows.

```css
body {
  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(circle at 72% 11%, rgba(37, 99, 235, 0.22), transparent 32rem),
    radial-gradient(circle at 36% 22%, rgba(124, 58, 237, 0.16), transparent 28rem),
    radial-gradient(circle at 50% 52%, rgba(37, 99, 235, 0.10), transparent 40rem),
    linear-gradient(180deg, #000510 0%, #000713 48%, #000510 100%);
}
```

Important:

- Keep the background almost black.
- Glows should be subtle, not bright.
- Avoid large visible gradient blobs.

## Layout

Main container:

```css
.container {
  width: min(100% - 72px, 1160px);
  margin-inline: auto;
}
```

Section spacing:

```css
.section {
  padding-block: 44px;
}

.hero {
  min-height: 640px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 48px;
}
```

Responsive:

```css
@media (max-width: 900px) {
  .container {
    width: min(100% - 32px, 1160px);
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 48px;
  }
}
```

## Typography Scale

Hero eyebrow:

```css
.hero-eyebrow {
  color: var(--purple-light);
  font-size: 20px;
  font-weight: 700;
}
```

Hero heading:

```css
.hero-title {
  max-width: 560px;
  font-size: clamp(56px, 7vw, 84px);
  line-height: 0.98;
  font-weight: 800;
}

.hero-title span {
  display: block;
  color: var(--purple-bright);
  text-shadow: 0 0 36px rgba(124, 58, 237, 0.35);
}
```

Body copy:

```css
.lead {
  max-width: 470px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.65;
}
```

Section label:

```css
.section-kicker {
  color: var(--purple-light);
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
}
```

Section heading:

```css
.section-title {
  color: var(--text);
  font-size: clamp(28px, 3vw, 36px);
  line-height: 1.15;
  font-weight: 800;
}
```

Card title:

```css
.card-title {
  color: var(--text);
  font-size: 22px;
  line-height: 1.2;
  font-weight: 800;
}
```

## Navigation

The navbar is transparent over the page background.

```css
.navbar {
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
  font-size: 20px;
  font-weight: 800;
}

.nav-logo-icon {
  color: var(--purple-bright);
  filter: drop-shadow(0 0 14px rgba(124, 58, 237, 0.65));
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 44px;
}

.nav-link {
  position: relative;
  color: var(--text-soft);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

.nav-link.active {
  color: var(--purple-light);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 28px;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--purple-bright);
  transform: translateX(-50%);
  box-shadow: 0 0 16px rgba(124, 58, 237, 0.8);
}
```

## Buttons

Primary button:

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 26px;
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
  box-shadow:
    0 14px 34px rgba(79, 70, 229, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 18px 44px rgba(79, 70, 229, 0.36),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}
```

Secondary button:

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 24px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  font-size: 16px;
  font-weight: 700;
  background: rgba(7, 17, 31, 0.45);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.btn-secondary:hover {
  border-color: rgba(167, 139, 250, 0.55);
  background: rgba(15, 23, 42, 0.72);
  transform: translateY(-2px);
}
```

Shared transition:

```css
.btn-primary,
.btn-secondary,
.card,
.skill-tile {
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}
```

## Glass Panels

Used by the About section, project cards, tech stack rail, and skill tiles.

```css
.glass-panel {
  border: 1px solid var(--border);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(11, 23, 40, 0.76), rgba(3, 11, 25, 0.84)),
    rgba(7, 17, 31, 0.72);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(18px);
}
```

Project card:

```css
.project-card {
  border: 1px solid var(--border);
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(10, 22, 39, 0.86), rgba(4, 12, 25, 0.96));
  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(167, 139, 250, 0.5);
  box-shadow:
    0 26px 70px rgba(0, 0, 0, 0.42),
    0 0 34px rgba(124, 58, 237, 0.12);
}
```

Skill tile:

```css
.skill-tile {
  min-height: 122px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(12, 24, 42, 0.92), rgba(5, 13, 28, 0.96));
  display: grid;
  place-items: center;
  gap: 10px;
}

.skill-tile:hover {
  transform: translateY(-4px);
  border-color: rgba(167, 139, 250, 0.48);
  background: linear-gradient(180deg, rgba(16, 31, 54, 0.95), rgba(8, 18, 36, 0.98));
}
```

## Hero Effects

Hero image area:

```css
.hero-visual {
  position: relative;
  min-height: 560px;
}

.hero-visual::before {
  content: "";
  position: absolute;
  inset: 18% 10% 4% 4%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.22), transparent 64%);
  filter: blur(18px);
  z-index: -1;
}
```

Floating elements:

```css
.float-soft {
  animation: floatSoft 5.5s ease-in-out infinite;
}

.float-delay {
  animation: floatSoft 6.4s ease-in-out infinite;
  animation-delay: -1.6s;
}

@keyframes floatSoft {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -12px, 0);
  }
}
```

Hero table/platform shadow:

```css
.hero-platform {
  filter:
    drop-shadow(0 28px 48px rgba(0, 0, 0, 0.45))
    drop-shadow(0 0 34px rgba(124, 58, 237, 0.18));
}
```

## Tech Stack Rail

```css
.tech-rail {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 18px 22px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(7, 17, 31, 0.58);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.tech-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
}
```

Icon colors:

```css
.icon-react { color: #00d8ff; }
.icon-next { color: #ffffff; }
.icon-node { color: #39ff14; }
.icon-ts { color: #3178c6; }
.icon-mongo { color: #22c55e; }
.icon-tailwind { color: #38bdf8; }
.icon-postgres { color: #336791; }
.icon-git { color: #f05032; }
.icon-docker { color: #2496ed; }
```

## About Section

The about section is a wide glass panel with two columns.

```css
.about-panel {
  display: grid;
  grid-template-columns: 390px 1fr;
  gap: 64px;
  padding: 42px;
}

.about-avatar-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.56);
  border-radius: 22px;
  background:
    radial-gradient(circle at 50% 18%, rgba(124, 58, 237, 0.9), transparent 62%),
    linear-gradient(180deg, #3226a7 0%, #07111f 100%);
}

.experience-badge {
  position: absolute;
  right: -48px;
  top: 42%;
  width: 96px;
  min-height: 88px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(7, 17, 31, 0.92);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.32);
}
```

Feature blocks:

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  box-shadow: 0 12px 28px rgba(124, 58, 237, 0.28);
}
```

## Project Cards

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.project-image {
  aspect-ratio: 16 / 8.25;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  background: #080f1f;
}

.project-body {
  padding: 20px 22px 24px;
}

.project-description {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.55;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.project-tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  color: var(--text-soft);
  font-size: 12px;
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.13);
}

.project-link {
  color: var(--purple-light);
  font-weight: 700;
  text-decoration: none;
}
```

Featured badge:

```css
.featured-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  min-height: 38px;
  padding: 0 16px;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  background: linear-gradient(135deg, #8b5cf6, #5b21b6);
  box-shadow: 0 12px 28px rgba(124, 58, 237, 0.35);
}
```

## Borders And Radius

Use these exact radius levels:

```css
:root {
  --radius-button: 10px;
  --radius-tile: 12px;
  --radius-card: 18px;
  --radius-image: 12px;
  --radius-panel: 28px;
}
```

Where they appear:

- Buttons: `10px`
- Small pills/tags: `999px`
- Tech rail: `12px`
- Skill tiles: `12px`
- Project cards: `18px`
- Avatar image card: `22px`
- About panel: `28px`

## Shadows

Soft elevation:

```css
box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
```

Deep panel:

```css
box-shadow:
  0 24px 80px rgba(0, 0, 0, 0.34),
  inset 0 1px 0 rgba(255, 255, 255, 0.04);
```

Purple glow:

```css
box-shadow:
  0 18px 44px rgba(79, 70, 229, 0.36),
  0 0 34px rgba(124, 58, 237, 0.18);
```

Text glow:

```css
text-shadow: 0 0 36px rgba(124, 58, 237, 0.35);
```

## Motion

Use smooth, restrained movement.

Recommended Framer Motion values:

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
```

Hover:

```ts
whileHover={{ y: -6, scale: 1.01 }}
whileTap={{ scale: 0.98 }}
```

Rules:

- Buttons move up `2px` on hover.
- Cards move up `4px` to `6px` on hover.
- Floating hero elements move vertically around `12px`.
- Section reveals should be fast and subtle.
- Do not use bouncy spring animations for the main layout.

## Image Treatment

Hero avatar:

- Large 3D character render.
- Warm skin tones contrast against cool dark environment.
- Hoodie should stay very dark.
- Purple/blue rim lighting around objects.
- Main visual should sit on the right side on desktop.

Project images:

- Rounded screenshots.
- Border around screenshot.
- Keep screenshots bright enough to stand out against the dark cards.

About avatar:

- Same character style as hero.
- Cropped chest-up.
- Purple background gradient.
- Thin purple border.

## Complete Base CSS

```css
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(circle at 72% 11%, rgba(37, 99, 235, 0.22), transparent 32rem),
    radial-gradient(circle at 36% 22%, rgba(124, 58, 237, 0.16), transparent 28rem),
    radial-gradient(circle at 50% 52%, rgba(37, 99, 235, 0.10), transparent 40rem),
    linear-gradient(180deg, #000510 0%, #000713 48%, #000510 100%);
  font-family: var(--font-inter), system-ui, sans-serif;
}

a {
  color: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

img {
  display: block;
  max-width: 100%;
}

::selection {
  color: #fff;
  background: rgba(124, 58, 237, 0.72);
}
```

## Implementation Checklist

- Use `#000510` as the main background.
- Use purple `#7C3AED` for primary buttons, active nav, labels, and glow.
- Use glass cards with `rgba` backgrounds instead of flat solid cards.
- Keep borders thin and blue-gray.
- Use high-contrast white headings.
- Use muted blue-gray body text.
- Keep card radius between `12px` and `28px`.
- Animate hover and section reveals subtly.
- Use 3D generated assets or high-quality exported image assets to match the template.
- Keep the first viewport focused on the hero, not a landing-page explanation.
