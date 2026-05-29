# GOTCHAS - Premium Portfolio
> Updated: 2026-05-29

## Assets
- `components/images/` - contains reference crops from `template.png`. Use as visual references, not final rendered website images.
- `avartar/` - folder name is misspelled but contains the user's avatar image. Use the existing folder unless renaming is explicitly requested.

## Next.js
- `next-env.d.ts` - Next.js generates triple-slash references that project ESLint may flag. Ignore the generated file in ESLint.
- `tsconfig include` - broad `**/*.tsx` includes reference skill examples outside the app. Scope TypeScript to `src/**/*.ts`, `src/**/*.tsx`, config files, and `.next/types`.
- `.next` during dev - running production build while `next dev` is active can leave localhost serving stale missing static assets. Stop and restart the dev server after builds.

## Tailwind CSS
- No project-specific Tailwind CSS gotchas discovered yet.

## Framer Motion
- No project-specific Framer Motion gotchas discovered yet.
