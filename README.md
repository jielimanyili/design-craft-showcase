# Design Craft — a living showcase of design judgment

A small, hand-built portfolio piece that makes design craft *visible*: design tokens, typography, density, motion, and the states beyond the happy path. Built to be reviewed in a browser and deployable to Vercel in minutes.

**Live:** https://design-craft-showcase.vercel.app · **Repo:** https://github.com/jielimanyili/design-craft-showcase

## Why this exists

A design-systems lead role asks for two things a resume can't show: *exceptional visual and interaction taste*, and *judgment you can encode as reusable patterns*. This repo is that evidence — no UI framework, just a token system, disciplined CSS, and intent.

## What it demonstrates

| Section | Craft signal |
|---|---|
| Foundations | Three-tier tokens (primitive → semantic → component) — no one-off values |
| Typography | A small, intentional scale; hierarchy; tabular numerals; context |
| Density | Data-dense UI with a *systematic* density toggle, not a CSS hack |
| Motion | Staggered entrance, sliding indicator, accordion, toast — all respecting `prefers-reduced-motion` |
| States | Button/input states, skeleton loading, empty, error, disabled, focus-visible |

## Stack

Vite 5 · React 19 · TypeScript · hand-written CSS (design tokens). No component library — the point is the craft, not the dependency.

## Run

```bash
npm install
npm run dev       # http://localhost:5176
npm run build     # tsc --noEmit + vite build
npm run preview
```

## Deploy

Vercel is pre-configured (`vercel.json`). `npm run build` emits `dist/`.

## Performance in CI

Lighthouse CI gates four categories on every push/PR, in **both light and dark mode**:

- **`lighthouserc.json`** — asserts performance ≥ 0.95, accessibility = 1, best-practices ≥ 0.95, SEO = 1, plus LCP ≤ 2500ms and CLS ≤ 0.1, against `…/` and `…/?theme=dark`.
- **`.github/workflows/performance.yml`** — runs `build` → `lhci autorun`.
- Uploads each run to temporary public storage so a report URL is printed in the CI log.

Run locally (after `npm run build`): `npm run lhci`.

## Agent discoverability

The site publishes an ARD (Agentic Resource Discovery) manifest so agents and registries can discover it:

- `/.well-known/ard.json` — canonical ARD manifest (specVersion 1.0)
- `/.well-known/ai-catalog.json` and `/ai-catalog.json` — legacy locations, same content
- `/llms.txt` — plain-language guide for LLM crawlers

The ARD entry describes the Strata design system's agent-usable design guidance (design tokens + composition rules + evaluation criteria).

## Design notes

- One accent color (indigo), a disciplined neutral ramp, and tabular numerals for all data.
- Full light/dark theming via `data-theme` — only the semantic tier flips, primitives stay fixed; defaults to the OS preference and persists your choice.
- Focus is keyboard-visible everywhere; `prefers-reduced-motion` collapses every transition.
- Forced states (`.is-hover-demo`, `.is-active-demo`, `.is-focus-demo`) make interaction states reviewable from a static screenshot.
