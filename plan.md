# Phase-by-Phase Portfolio Implementation Plan

## Summary

Create `C:\Users\vaibh\Desktop\protofolio\plan.md` as the execution guide, then build the portfolio in controlled phases so quality stays high. The final website will be responsive coded UI, not pasted component PNGs. The collected markdown files and PNG crops will be used as reference material for visual accuracy.

Primary references:
- `stack.md`
- `style.md`
- `components/README.md`
- `components/navbar.md`
- `components/hero.md`
- `components/hero-visual-assets.md`
- `components/about-section.md`
- `components/projects-section.md`
- `components/project-card.md`
- `components/skills-section.md`
- `components/shared-ui.md`
- `components/images/*.png`
- `template.png`
- `avartar/ChatGPT Image May 29, 2026, 05_25_41 PM.png`

## Phase 1: Project Foundation

Create the Next.js app foundation first, with no visual complexity yet.

Tasks:
- Scaffold Next.js App Router with TypeScript, Tailwind CSS, ESLint, and `src/` directory.
- Install `framer-motion`, `lucide-react`, and `simple-icons`.
- Configure `next/font/google` with Inter and Manrope.
- Copy the real avatar image into `public/avatar.png`.
- Create base folders:
  - `src/app`
  - `src/components`
  - `src/data`
  - `src/lib`
- Confirm `npm run build` passes before styling begins.

Quality gate:
- App renders a blank dark page.
- No extracted `components/images/*.png` are imported into source code.
- Avatar is available from `/avatar.png`.

## Phase 2: Global Design System

Implement the full visual foundation from `style.md` before building sections.

References:
- `style.md`
- `components/shared-ui.md`
- `components/images/buttons-and-badges.png`

Tasks:
- Add CSS variables for background, surfaces, borders, text, purple accents, cyan, green, and amber.
- Add body background with dark navy base and subtle radial glows.
- Add reusable utility classes:
  - `.container`
  - `.section`
  - `.glass-panel`
  - `.btn-primary`
  - `.btn-secondary`
  - `.section-kicker`
  - `.section-title`
  - `.float-soft`
- Add responsive breakpoints for desktop, tablet, and mobile.
- Add smooth transitions, hover lifts, text glow, and card shadows.

Quality gate:
- Visual tokens match `style.md`.
- Buttons match `components/images/hero-actions.png` and `components/images/navbar-cta-button.png`.
- Background matches the dark premium feeling of `template.png`.

## Phase 3: Data And Shared Components

Create reusable data and primitive components so later sections stay clean.

References:
- `components/README.md`
- `components/shared-ui.md`
- `components/project-card.md`
- `components/skills-section.md`

Tasks:
- Create `src/data/portfolio.ts` with:
  - nav links
  - hero tech stack
  - about features
  - projects
  - skills
- Create shared components:
  - `Button`
  - `SectionHeader`
  - `TechIcon`
  - `GlassPanel`
- Use Lucide icons for UI actions.
- Use Simple Icons or inline brand SVG wrappers for technology logos.

Quality gate:
- Shared components support all button, badge, tag, and icon patterns needed later.
- No section-specific layout is mixed into shared primitives.

## Phase 4: Navbar

Build the navbar exactly from the extracted component.

References:
- `components/navbar.md`
- `components/images/navbar.png`
- `components/images/logo.png`
- `components/images/nav-links-active-state.png`
- `components/images/navbar-cta-button.png`

Tasks:
- Create `src/components/Navbar.tsx`.
- Implement logo with purple code icon and `DevPortfolio`.
- Add nav links: Home, About, Skills, Projects, Experience, Contact.
- Add active purple `Home` state with small glowing dot.
- Add `Let's Talk` gradient CTA button.
- Add mobile compact behavior with menu icon or simplified nav.

Quality gate:
- Desktop navbar matches spacing and color from `navbar.png`.
- CTA matches `navbar-cta-button.png`.
- Mobile navbar does not overflow.

## Phase 5: Hero Text And Tech Rail

Build the left hero column before the visual scene.

References:
- `components/hero.md`
- `components/images/hero-section.png`
- `components/images/hero-copy.png`
- `components/images/hero-title.png`
- `components/images/hero-actions.png`
- `components/images/hero-tech-stack-rail.png`

Tasks:
- Create `src/components/Hero.tsx`.
- Add eyebrow `Hi, I'm`.
- Add two-line heading:
  - `Full Stack`
  - `Developer`
- Add body copy exactly from template.
- Add `View My Work` and `Download CV` buttons.
- Add `Tech Stack` label and icon-only glass tech rail.
- Add responsive layout where hero text stacks cleanly on mobile.

Quality gate:
- Typography size, weight, and line height visually match `hero-title.png`.
- Tech rail matches `hero-tech-stack-rail.png`.
- Buttons align and size like `hero-actions.png`.

## Phase 6: Hero Visual Scene

Build the right hero composition carefully as coded/responsive UI.

References:
- `components/hero-visual-assets.md`
- `components/images/hero-visual-composition.png`
- `components/images/hero-main-avatar-desk.png`
- `components/images/floating-code-window.png`
- `components/images/floating-code-icon.png`
- `components/images/server-cloud-graphic.png`
- `components/images/desk-mug-plant.png`
- `avartar/ChatGPT Image May 29, 2026, 05_25_41 PM.png`

Tasks:
- Create `src/components/HeroVisual.tsx`.
- Use `/avatar.png` as the real person image.
- Recreate the desk scene with CSS/HTML:
  - dark desk platform
  - laptop panel in front of avatar
  - mug with code icon
  - plant in white pot
  - floating code window
  - floating code icon
  - server stack with cloud and status lights
  - subtle dotted purple connector line
- Layer elements with absolute positioning.
- Add soft purple/blue glow behind the avatar.
- Add subtle floating animation to code window, code icon, and server/cloud.

Quality gate:
- The hero visual keeps the same composition as `hero-visual-composition.png`.
- The real avatar replaces the template person.
- The scene remains responsive and does not overlap text on tablet/mobile.
- No extracted hero PNGs are rendered in the site.

## Phase 7: About Section

Build the full glass about panel.

References:
- `components/about-section.md`
- `components/images/about-section.png`
- `components/images/about-avatar-card.png`
- `components/images/about-experience-badge.png`
- `components/images/about-copy.png`
- `components/images/about-feature-row.png`
- `components/images/about-button.png`

Tasks:
- Create `src/components/About.tsx`.
- Add wide rounded glass panel.
- Add avatar card using `/avatar.png`.
- Add floating `3+ Years Experience` badge.
- Add `ABOUT ME` kicker, heading, and paragraph.
- Add three feature blocks:
  - Clean Code
  - Problem Solver
  - Fast Learner
- Add `More About Me` secondary button.
- Add responsive stacking.

Quality gate:
- Panel radius, border, and glass effect match `about-section.png`.
- Avatar card and badge match the placement in `about-avatar-card.png`.
- Feature row spacing matches `about-feature-row.png`.

## Phase 8: Projects Section And Project Cards

Build projects with coded mock screenshots, not pasted PNGs.

References:
- `components/projects-section.md`
- `components/project-card.md`
- `components/images/projects-section.png`
- `components/images/projects-header.png`
- `components/images/project-card-analytics.png`
- `components/images/project-card-ecommerce.png`
- `components/images/project-card-devchat.png`
- `components/images/project-image-analytics.png`
- `components/images/project-image-ecommerce.png`
- `components/images/project-image-devchat.png`
- `components/images/featured-badge.png`
- `components/images/project-tags-row.png`
- `components/images/live-demo-link.png`

Tasks:
- Create `src/components/Projects.tsx`.
- Create `src/components/ProjectCard.tsx`.
- Add section header with `PROJECTS`, `Things I've Built`, and `View All Projects`.
- Build three project cards:
  - Analytics Dashboard
  - E-Commerce Platform
  - DevChat
- Build coded mini screenshot mockups inside cards:
  - analytics chart mockup
  - e-commerce grid mockup
  - chat UI mockup
- Add first-card `Featured` badge.
- Add project tags with brand icons.
- Add `Live Demo` links with arrow icons.
- Add hover lift and subtle purple border glow.

Quality gate:
- Card sizing and spacing match `projects-section.png`.
- Each card resembles its matching reference crop without using the crop as an image.
- Mobile project cards stack cleanly.

## Phase 9: Skills Section

Build the skills grid exactly as coded tiles.

References:
- `components/skills-section.md`
- `components/images/skills-section.png`
- `components/images/skills-header.png`
- `components/images/skill-tile-react.png`
- `components/images/skill-tile-next.png`
- `components/images/skill-tile-node.png`
- `components/images/skill-tile-typescript.png`
- `components/images/skill-tile-mongodb.png`
- `components/images/skill-tile-postgresql.png`
- `components/images/skill-tile-tailwind.png`
- `components/images/skill-tile-git.png`
- `components/images/skill-tile-docker.png`

Tasks:
- Create `src/components/Skills.tsx`.
- Add `SKILLS` kicker and `Tech I Work With` heading.
- Add nine tiles:
  - React
  - Next.js
  - Node.js
  - TypeScript
  - MongoDB
  - PostgreSQL
  - Tailwind CSS
  - Git
  - Docker
- Use brand-colored icons.
- Add stable tile dimensions and hover states.
- Add responsive grid: one row on desktop, four columns on tablet, two columns on mobile.

Quality gate:
- Desktop grid matches `skills-section.png`.
- Individual tiles match the extracted skill tile crops.
- Labels stay centered and readable on mobile.

## Phase 10: Page Composition And Motion

Assemble all sections and add restrained animation.

References:
- `template.png`
- `components/images/full-template.png`
- all component markdown files

Tasks:
- Compose sections in `src/app/page.tsx`:
  - Navbar
  - Hero
  - About
  - Projects
  - Skills
- Add Framer Motion reveal wrappers where useful.
- Add staggered reveals for project and skill cards.
- Ensure scrolling feels smooth.
- Keep the first viewport focused on the hero, not a marketing landing page.

Quality gate:
- Page order matches the template.
- Animations are subtle and premium.
- No layout shift during load.

## Phase 11: Responsive QA And Visual Matching

Compare the coded website against all collected references.

References:
- `components/images/full-template.png`
- `components/images/navbar.png`
- `components/images/hero-section.png`
- `components/images/about-section.png`
- `components/images/projects-section.png`
- `components/images/skills-section.png`

Tasks:
- Run `npm run build`.
- Start local dev server.
- Check desktop viewport around `1024px`.
- Check mobile viewport around `390px`.
- Fix spacing, text overflow, card sizing, and visual mismatches.
- Search source code to confirm extracted PNGs are not imported.
- Confirm only `/avatar.png` is used as the real image asset.

Quality gate:
- Build passes.
- Desktop visually tracks the original template closely.
- Mobile is polished and readable.
- No extracted component PNG is rendered in the app.

## Phase 12: Final Polish

Do final small improvements after the full page exists.

Tasks:
- Tune exact spacing between hero, about, projects, and skills.
- Tune glass opacity and border colors.
- Tune avatar scaling in hero and about card.
- Tune hover states.
- Add metadata title and description.
- Remove unused code.
- Run final `npm run build`.

Quality gate:
- The result feels premium, smooth, and close to `template.png`.
- The final UI is responsive coded implementation, not image-pasted layout.
- The collected markdown and PNG files remain as references for future adjustments.

## Assumptions

- `plan.md` will be created at the workspace root during implementation.
- The folder remains named `avartar`; the implementation copies its image to `public/avatar.png`.
- The final page keeps the template content for v1 unless replaced later.
- Project preview areas are coded UI mockups, not pasted screenshots.
- The final site will not include extra sections beyond what appears in the template.
