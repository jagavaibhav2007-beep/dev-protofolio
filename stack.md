# Portfolio Website Stack

## Recommended Stack

Use **Next.js + TypeScript + Tailwind CSS + Framer Motion**.

This is the best stack for recreating the provided `template.png` as a premium, smooth, 1:1 portfolio website.

## Core Technologies

| Purpose | Choice | Why |
| --- | --- | --- |
| Framework | Next.js | Best for modern portfolio sites, fast routing, SEO, image optimization, and deployment. |
| Language | TypeScript | Keeps components, project data, and props clean and reliable. |
| Styling | Tailwind CSS | Perfect for matching the dark premium layout, gradients, spacing, borders, and responsive design quickly. |
| Animation | Framer Motion | Smooth section reveals, hover states, button motion, floating hero elements, and polished micro-interactions. |
| Icons | Lucide React + Simple Icons | Lucide for UI icons, Simple Icons for tech logos like React, Next.js, Node.js, TypeScript, MongoDB, Tailwind, Git, and Docker. |
| Images | Next Image | Optimized rendering for the avatar, project screenshots, and decorative 3D assets. |
| Deployment | Vercel | Easiest and fastest deployment path for a Next.js portfolio. |

## Design Direction

The website should copy the template closely:

- Dark navy/black background with subtle radial lighting.
- Purple primary accent for active navigation, buttons, headings, and glows.
- Large hero section with "Full Stack Developer" typography.
- 3D illustrated developer/avatar hero visual.
- Glassy bordered panels with soft shadows.
- Smooth rounded project cards.
- Tech stack icon rail in the hero.
- About section with avatar card and feature highlights.
- Project cards with screenshots, tags, and demo links.
- Skills grid with large recognizable technology icons.

## Suggested Packages

```bash
npm install next react react-dom typescript tailwindcss framer-motion lucide-react simple-icons
```

If using the standard Next.js starter, install with:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
```

Then add:

```bash
npm install framer-motion lucide-react simple-icons
```

## File Structure

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx
  data/
    projects.ts
    skills.ts
  assets/
    images/
```

## Visual Assets Needed

To match the template 1:1, the site should use:

- A high-quality 3D developer/avatar hero image.
- A second portrait/card version of the same avatar for the About section.
- Three project preview screenshots.
- Floating decorative assets: code window, server/cloud graphic, laptop/table visual, small code icon, and plant/mug elements.

These can be recreated with generated bitmap images or manually exported from the provided template if you have the rights to use them.

## Styling Notes

Use CSS variables for the main palette:

```css
:root {
  --background: #020817;
  --surface: #07111f;
  --surface-soft: #0b1728;
  --border: rgba(148, 163, 184, 0.22);
  --text: #f8fafc;
  --muted: #cbd5e1;
  --purple: #7c3aed;
  --purple-bright: #8b5cf6;
}
```

Recommended fonts:

- **Inter** for clean UI text.
- **Manrope** or **Sora** for a slightly more premium headline feel.

## Final Recommendation

Build this as a **Next.js App Router project with TypeScript, Tailwind CSS, Framer Motion, Lucide React, Simple Icons, and Vercel deployment**.

This stack is modern, fast, easy to maintain, and strong enough to reproduce the exact premium visual style from `template.png`.
