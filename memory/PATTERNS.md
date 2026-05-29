# PATTERNS - Premium Portfolio
> Updated: 2026-05-29

## Data Fetching
- No established data fetching pattern yet.

## Error Handling
- No established error handling pattern yet.

## State Management
- No established state management pattern yet.

## File Structure
- Next.js app source lives in `src/`; routes live in `src/app`; future shared UI, data, and helpers live in `src/components`, `src/data`, and `src/lib`.
- Site-level metadata and shared project copy live in `src/lib/site.ts`.

## Auth
- No auth pattern exists; this portfolio has no auth requirement.

## Forms
- No form pattern exists yet.

## Styling
- Tailwind CSS is loaded from `src/app/globals.css`; visual tokens and effects are documented in `style.md`.
- Global design tokens, shared utility classes, button styles, glass panels, and motion helpers live in `src/app/globals.css`.

## Testing
- Run `npm run lint` and `npm run build` before marking an implementation phase complete.
- After browser QA screenshots, remove temporary `.playwright-mcp/` and screenshot artifacts before handoff.
