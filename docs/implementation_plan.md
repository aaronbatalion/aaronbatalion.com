# Implementation Plan - aaronbatalion.com Redesign

## Goal Description
Re-imagine the design of `aaronbatalion.com` to be more than just a list of links. The new design will aggregate content from Medium, X, and Threads, presenting them with a modern, premium aesthetic (glassmorphism, clean typography, micro-interactions).

## User Review Required
- [ ] **Design Direction**: Confirm the "Modern/Glassmorphism" aesthetic.
- [ ] **Tech Stack**: Confirm using standard CSS/Astro components without a heavy UI framework (as per user preference for Vanilla CSS).

## Proposed Changes

### Feature: Link Aggregation & Redesign

#### [NEW] `src/components/LinkCard.astro`
- A new component to display individual links.
- Props: `title`, `url`, `date`, `platform` (optional, inferred if missing), `icon` (optional, inferred if missing).
- Logic:
    - `platform` and `icon` are determined from the `url` domain if not manually provided.
    - Fallback to a generic icon if no match found.

#### [MODIFY] `src/pages/index.astro`
- Remove the old list-based layout.
- Import `LinkCard`.
- Load data from a new JSON file (e.g., `data/links.json`) containing manually selected links.
    - Structure: `[{ title, url, date }, ...]`
- Render cards in a grid/masonry layout.

#### [MODIFY] `static/css/main.css`
- Define CSS variables for the new theme (colors, spacing, shadows).
- Add utility classes for glassmorphism (`backdrop-filter`, `background-opacity`).
- Add animations (fade-in, slide-up).

#### [NEW] `src/documents/design_system.md`
- Briefly document the design tokens (colors, fonts).

## Verification Plan

### Automated Tests
- `npm run dev` to verify the build passes.
- Check console for errors.

### Manual Verification
- Visual check: Ensure the site looks "premium" and not basic.
- Link check: Verify all cards link to the correct destination.
- Responsive check: Resize browser to ensure mobile compatibility.
