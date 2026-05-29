# BUGS - Premium Portfolio
> Updated: 2026-05-29

---
**2026-05-29 - Localhost Next overlay from stale dev assets**
File: `package.json:L5`
Severity: MEDIUM
Bug: Localhost showed a Next.js runtime overlay because the active dev server served HTML that referenced static chunks returning 404 after build/dev `.next` state drift.
Solution: Stopped the stale Next.js dev process and restarted `npm run dev -- -p 3000`; the page loaded with no overlay or console errors.
⛔ NEVER: Run `npm run build` while `next dev` is still serving the same workspace; stop or restart the dev server before browser QA.

---
**2026-05-29 - Workspace reference files compiled by app build**
File: `tsconfig.json:L25`
Severity: MEDIUM
Bug: `npm run build` failed because TypeScript included TSX examples inside `my-agent-skills/` that are not part of the portfolio app.
Solution: Scoped `tsconfig.json` includes to Next.js app files and ignored non-app reference folders in `eslint.config.mjs`.
⛔ NEVER: Use broad `**/*.ts` or `**/*.tsx` TypeScript includes in this workspace; scope compilation to `src/`, app config files, and `.next/types`.
