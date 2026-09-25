# Agent-friendly site: implementation handoff

Branch: `agent-friendly-site`
Source: `/Users/br/src/rl/landing_page`

## Goal and boundaries

Make the existing site easier for people and agents to understand, navigate, and cite. Preserve its design, voice, static export, and existing content. SEO improvements are useful but do not justify visual clutter. No deployment or merge in this task.

Do not invent project maturity, test results, supported provenance signals, meeting duration, pricing, or credentials. Those additions require Brent's facts and approval. No API, MCP server, agent-only site, llms.txt, new dependencies, or speculative project pages. Leave unrelated legacy components alone.

## Phase 1 — precise navigation without redesign

- Give each project article a stable ID: hammer, provenance-inspector, acs-adapters.
- Make repository link names unambiguous. Prefer short visible labels that remain attractive in narrow cards; accessible names must retain the visible wording.
- Clarify the scheduling link's Google Calendar destination, without fabricating appointment details.
- Update the existing content check for changed text and anchors.
- Preserve descriptions: new status/evidence copy is deferred pending verified facts.

Gate: parent reviews diff; npm test and npm run lint pass. Inspect desktop and mobile layout before final acceptance.

Status: reviewed and accepted by parent. GPT-5.6 Luna completed the partial first attempt; parent inspected the diff and independently passed npm test, npm run lint, and npm run build. Short visible labels preserve card layout; explicit accessible names retain their visible wording. Final browser checks follow in Phase 3.

## Phase 2 — discovery and identity metadata

- Add static-export-compatible robots.txt and sitemap.xml for homepage and schedule page only. Explicitly allow crawling and reference the sitemap; no promises about indexing.
- Add correct canonical URLs for both pages; give schedule its own Open Graph title, description, and URL.
- Add minimal Schema.org JSON-LD for Rockwood Lab (Organization) and Brent Rockwood (Person), linked by stable IDs. Use only public facts already present in active pages: name, URL, email, and relationship (Person worksFor Organization). No invented formal job title or credential, no legacy claims.
- Extend the existing dependency-free check to verify built output for canonical URLs, page-specific Open Graph, parseable identity JSON-LD, robots, sitemap, and links/anchors. Keep checks small; document that build precedes tests if required.

Gate: parent reviews diff; build, tests, lint pass; inspect actual exported HTML and static files.

Status: reviewed and accepted by parent. GPT-5.6 Luna implemented static discovery files, page metadata, identity data, and built-output checks. Parent inspected all changes and independently passed npm run build, npm test, npm run lint, and git diff --check. Browser DOM confirms valid JSON-LD and distinct canonical/Open Graph URLs.

## Phase 3 — parent acceptance and delivery

- Serve the export locally, inspect both pages at desktop and mobile widths, and verify navigation and metadata.
- Confirm no visual redesign, horizontal overflow, fabricated claims, or unnecessary additions.
- Record verification results and remaining editorial questions here.
- Commit reviewed work on the branch; do not merge or deploy.
- Contact Brent using `notify` on completion or if blocked on human approval.

Status: complete. Parent inspected homepage and schedule screenshots at 1440px and 390px widths; both pages have scrollWidth equal to viewport width. Accessibility snapshot confirms unique repository names; #hammer resolves to its article and all three project IDs exist. No CSS changes, new dependencies, unsupported factual additions, merge, or deployment. Google Calendar booking was not submitted or tested end-to-end.

Verification artifacts (temporary local files): /tmp/rl-desktop.png, /tmp/rl-mobile.png, /tmp/rl-schedule-desktop.png, /tmp/rl-schedule-mobile.png. Build-first test workflow is documented in README.md. Branch is ready for Brent's review before merge/deployment.

## Future editorial input (not blocking this implementation)

For each project: confirmed status, install/demo/documentation destination, demonstrated results, and limits. Meeting duration/format/cost only if Brent wants those published and confirms them.
