# Accessibility audit — agent-friendly-site

Audited implementation commit: `619fb47`. Scope: `/` and `/schedule/`, served from a fresh local production export. No implementation changes were made during this audit.

## Result

No accessibility regressions identified in the branch diff. Axe-core 4.13.0 reported zero violations across 12 combinations: two pages, light/dark themes, and viewport widths of 1440, 390, and 320 CSS pixels. Rules included WCAG 2 A/AA, 2.1 AA, 2.2 AA, and best practices. This is not a WCAG conformance certification.

## Findings

### Medium: text-spacing overrides cause horizontal overflow (pre-existing)

In `app/globals.css`, the large hero text and grid sizing do not fully accommodate expanded letter/word spacing on narrow screens. Applying line-height 1.5, letter-spacing .12em, word-spacing .16em, and paragraph bottom margins of 2em gives:

- Homepage: scroll width 414px at both 390px and 320px viewport widths.
- Schedule: scroll width 339px at 320px; no overflow at 390px.

The homepage overflow was reproduced on the deployed site at 390px, also measuring 414px. The branch does not modify CSS or hero text. This is a text-spacing/reflow usability issue, relevant to WCAG 1.4.12 and 1.4.10; overflow alone does not establish that text is lost or that either criterion definitively fails.

Suggested follow-up: let grid children shrink and allow oversized headings to wrap when necessary. Verify typography at normal spacing before accepting a CSS change; do not just hide overflow.

### Low: label on a generic container (pre-existing)

`app/page.jsx`: `<div className="projects" aria-label="Recent work">` has no role supporting an accessible name. Axe flags this for manual review (`aria-prohibited-attr`), not as an automatic violation. The surrounding section already has a heading and accessible name.

Suggested follow-up: remove the redundant container label. Do not add a role purely to retain it. The same markup is on the deployed site.

### Low: mixed theme-toggle semantics (pre-existing)

`components/ThemeToggle.jsx` combines a changing action name ("Switch to light/dark mode") with `aria-pressed` representing whether dark mode is active. The button works with Space, but action wording plus pressed state can be confusing.

Suggested follow-up: either keep the action label and remove `aria-pressed`, or use a stable name such as "Dark mode" with the pressed state. This component is unchanged by the branch.

## Checks that passed

- Default text spacing: no horizontal overflow at 1440, 390, or 320px on either page.
- Keyboard: first Tab reveals the skip link; Enter followed by Tab reaches the first main-content link on both pages, skipping navigation.
- Theme button responds to Space and exposes a visible 2px focus outline.
- Accessibility-tree inspection: meaningful landmarks, heading hierarchy, native links/buttons, distinct project repository names, and a booking link naming Google Calendar.
- New accessible link names contain the visible label wording.
- Document language is declared; decorative SVGs/arrows are hidden from assistive technology.
- Source review confirms reduced-motion support and no changes to styling or motion behavior.
- Build and content checks pass.

Axe could not resolve contrast for the decorative contact arrow on the homepage. It is hidden from assistive technology and inherits the same light foreground/dark background as its surrounding link; this does not indicate a text-contrast defect. The only other incomplete check was the generic-container label above. Schedule returned no incomplete checks.

## Limits and reproduction

Tests used Chromium browser automation and accessibility snapshots, not a human-operated VoiceOver/NVDA session. A 320px viewport exercises narrow reflow but is not a native browser zoom test. Full keyboard traversal, OS high-contrast mode, text-only zoom, and third-party Google Calendar booking remain untested. No booking was submitted.

Run `npm run build && npm test`, then serve `out/`. Axe was loaded temporarily from the already installed `node_modules/axe-core/axe.min.js`; no dependency was added. For text spacing, apply the values above through a temporary browser stylesheet and compare `document.documentElement.scrollWidth` with `innerWidth`.

Recommendation: the branch is suitable for review without an accessibility regression blocker. Address the pre-existing findings in a small follow-up, with visual review of the heading-wrap change.
