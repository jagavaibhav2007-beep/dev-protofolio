# DECISIONS - Premium Portfolio
> Updated: 2026-05-29

---
**2026-05-29 - ADDED - Global CSS design system**
What: Added Phase 2 design tokens, global background, glass panel styles, buttons, typography helpers, pills, badges, motion helpers, and responsive layout utilities in `src/app/globals.css`.
Why: The portfolio needs a stable visual foundation from `style.md` before section components are built.
Impact: Future components should reuse these global classes instead of redefining token-level CSS.
⛔ DO NOT: Recreate button, glass panel, section typography, pill, badge, or float animation styles locally inside section components.

---
**2026-05-29 - CHANGED - Site metadata source**
What: Moved site name and description into `src/lib/site.ts` and reused it from the root layout metadata.
Why: Centralizing site-level copy makes the scaffold easier to understand and safer to edit in future phases.
Impact: Page metadata now reads from `siteConfig` instead of hardcoded strings in `src/app/layout.tsx`.
⛔ DO NOT: Duplicate site name or description literals in page/layout files; update `src/lib/site.ts` instead.

---
**2026-05-29 - ADDED - Next.js project foundation**
What: Added the Next.js App Router scaffold with TypeScript, Tailwind CSS, ESLint, Framer Motion, Lucide React, Simple Icons, base `src/` folders, and `public/avatar.png`.
Why: Phase 1 required a verified app foundation before visual styling begins.
Impact: Future implementation should build inside `src/` and use `/avatar.png` for the user avatar.
⛔ DO NOT: Add section UI before completing Phase 2 global design tokens from `style.md`.

---
**2026-05-29 - ADDED - Docs-memory folder**
What: Added a `memory/` folder with six project memory files: MEMORY, PATTERNS, GOTCHAS, BUGS, PROGRESS, and DECISIONS.
Why: The user requested persistent markdown memory files using the local docs-memory skill.
Impact: Future sessions should load `memory/` before making project changes.
⛔ DO NOT: Start implementation work without first reading all six files in `memory/`.

---
**2026-05-29 - ADDED - Phase implementation plan**
What: Added `plan.md` with a phased build strategy for the portfolio website.
Why: The user wanted quality-preserving implementation phases instead of building everything at once.
Impact: Website implementation should follow the phase order in `plan.md`.
⛔ DO NOT: Skip directly to full-page implementation without completing and checking the earlier foundation phases.

---
**2026-05-29 - CHANGED - Component crops as references only**
What: Component PNG crops were created for analysis and reference, not for direct website rendering.
Why: The user explicitly wants responsive code rather than pasted PNG sections.
Impact: The final app may use the user's avatar image, but must recreate UI panels, cards, buttons, and decorative objects with code.
⛔ DO NOT: Import `components/images/*.png` into the portfolio page as replacement UI sections.

---
**2026-05-29 - ADDED - User avatar replacement**
What: The final website should use the user's avatar from `avartar/` instead of the avatar shown in `template.png`.
Why: The user stated the template avatar is a placeholder and their avatar image is already provided.
Impact: Hero and about avatar compositions must preserve the template placement while swapping in the provided avatar.
⛔ DO NOT: Recreate or keep the template avatar as the final person image.
