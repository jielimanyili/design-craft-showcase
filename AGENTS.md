# AGENTS.md

Instructions for AI agents working in this repo.

## Rules
- This is a hand-built craft showcase: keep it dependency-light (React is the only runtime dependency).
- Design tokens live in `src/styles/tokens.css` — new values go through the token layer, never hard-coded in components.
- Every change must pass `npm run build` (tsc --noEmit + vite build).
- Any new animation must respect `prefers-reduced-motion`.

## Conventions
- CSS is organized by concern:
  - `tokens.css` — design tokens (primitive → semantic → component)
  - `base.css` — reset, accessibility, container utilities
  - `components.css` — Button, spinner, skeleton, badge, toast
  - `fields.css` — TextField, empty state, error banner
  - `showcase.css` — page shell, hero, nav, sections, foundations, typography
  - `demos.css` — density table, motion, and states layouts
- Components are small and typed; type-only imports use `import type`.
