import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const files = ["app/layout.jsx", "app/page.jsx", "app/schedule/page.jsx"];
const content = await Promise.all(files.map((file) => readFile(file, "utf8"))).then((parts) => parts.join("\n"));

for (const phrase of [
  "Independent R&D",
  "Independent R&amp;D",
  "AI safety, workflow automation, and infrastructure design.",
  "Pursuing",
  "unreasonable effectiveness.",
  "Things I’ve been building.",
  "Provenance Inspector",
  "ACS adapters",
  "Capability",
  "Evidence",
  "Control",
  "https://agentcontrolstandard.org/",
  "Making the pieces work together.",
  "Beat the hell out of it. Believe the evidence.",
  "I’ve been developing software since the 1990s",
  "Bring one",
  "Open available times",
  "https://calendar.app.google/zrhcrUpvDfyRHhgy7",
]) {
  assert.ok(content.includes(phrase), `Missing required phrase: ${phrase}`);
}

for (const phrase of ["Kevin Lim", "Success Stories", "#process", "Privacy Policy", "Terms of Service"]) {
  assert.ok(!content.includes(phrase), `Found removed or unsupported content: ${phrase}`);
}

for (const id of ["hammer", "provenance-inspector", "acs-adapters"]) {
  assert.match(content, new RegExp(`<article id="${id}">`), `Missing project ID: ${id}`);
}

const outputFiles = {
  home: "out/index.html",
  schedule: "out/schedule/index.html",
  robots: "out/robots.txt",
  sitemap: "out/sitemap.xml",
};
let output;
try {
  output = await Promise.all(Object.values(outputFiles).map((file) => readFile(file, "utf8")));
} catch {
  throw new Error("Built output is missing. Run `npm run build` before `npm test`.");
}
const [home, schedule, robots, sitemap] = output;

function attribute(tag, name) {
  return tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*["']([^"']*)["']`, "i"))?.[1];
}

function metaValue(html, key) {
  const tag = [...html.matchAll(/<meta\b[^>]*>/gi)].find((match) => {
    const tag = match[0];
    return attribute(tag, "name") === key || attribute(tag, "property") === key;
  });
  return tag && attribute(tag[0], "content")?.replaceAll("&amp;", "&");
}

function canonical(html) {
  const tag = [...html.matchAll(/<link\b[^>]*>/gi)].find((match) =>
    attribute(match[0], "rel")?.split(/\s+/).includes("canonical"),
  );
  return tag && attribute(tag[0], "href");
}

function identityGraph(html) {
  const script = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].find(
    (match) => attribute(match[0], "type") === "application/ld+json",
  );
  assert.ok(script, "Missing identity JSON-LD in built HTML");
  return JSON.parse(script[2]);
}

assert.equal(canonical(home), "https://rockwoodlab.com/", "Home canonical URL is incorrect");
assert.equal(canonical(schedule), "https://rockwoodlab.com/schedule/", "Schedule canonical URL is incorrect");
assert.equal(metaValue(home, "og:title"), "Rockwood Lab | Independent R&D", "Home Open Graph title is incorrect");
assert.equal(metaValue(schedule, "og:title"), "Schedule a conversation | Rockwood Lab", "Schedule Open Graph title is incorrect");
assert.equal(metaValue(schedule, "og:description"), "Choose a time to talk with Rockwood Lab about a practical system, research question, or possible experiment.", "Schedule Open Graph description is incorrect");
assert.equal(metaValue(home, "og:url"), "https://rockwoodlab.com/", "Home Open Graph URL is incorrect");
assert.equal(metaValue(schedule, "og:url"), "https://rockwoodlab.com/schedule/", "Schedule Open Graph URL is incorrect");

const graph = identityGraph(home)["@graph"];
assert.ok(Array.isArray(graph), "Identity JSON-LD graph is not an array");
const organization = graph.find((item) => item["@id"] === "https://rockwoodlab.com/#rockwood-lab");
const person = graph.find((item) => item["@id"] === "https://rockwoodlab.com/#brent-rockwood");
assert.deepEqual(organization, {
  "@type": "Organization",
  "@id": "https://rockwoodlab.com/#rockwood-lab",
  name: "Rockwood Lab",
  url: "https://rockwoodlab.com/",
  email: "brent@rockwoodlab.com",
}, "Organization JSON-LD is incorrect");
assert.deepEqual(person, {
  "@type": "Person",
  "@id": "https://rockwoodlab.com/#brent-rockwood",
  name: "Brent Rockwood",
  url: "https://rockwoodlab.com/#about",
  email: "brent@rockwoodlab.com",
  worksFor: { "@id": "https://rockwoodlab.com/#rockwood-lab" },
}, "Person JSON-LD is incorrect");

assert.ok(robots.includes("User-agent: *\nAllow: /"), "robots.txt must allow crawling");
assert.ok(robots.includes("Sitemap: https://rockwoodlab.com/sitemap.xml"), "robots.txt must reference the sitemap");
for (const url of ["https://rockwoodlab.com/", "https://rockwoodlab.com/schedule/"]) {
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Sitemap is missing ${url}`);
}
for (const [html, label] of [[home, "home"], [schedule, "schedule"]]) {
  for (const id of ["main"]) assert.ok(html.includes(`id="${id}"`), `${label} output is missing #${id}`);
}
for (const id of ["hammer", "provenance-inspector", "acs-adapters"]) {
  assert.ok(home.includes(`id="${id}"`), `Built home output is missing #${id}`);
}
assert.ok(home.includes('href="/schedule/"'), "Built home output is missing the schedule link");

for (const [html, href, label] of [
  [home, "https://github.com/brentrockwood/hammer", "Repository: Hammer on GitHub"],
  [home, "https://github.com/brentrockwood/provenance-inspector-extension", "Repository: Provenance Inspector extension on GitHub"],
  [home, "https://github.com/brentrockwood/pi-acs-core", "Pi ACS adapter repository on GitHub"],
  [home, "https://github.com/brentrockwood/opencode-acs-core", "OpenCode ACS adapter repository on GitHub"],
  [schedule, "https://calendar.app.google/zrhcrUpvDfyRHhgy7", "Open available times in Google Calendar"],
]) {
  const anchor = [...html.matchAll(/<a\b[^>]*>/gi)].find((match) => attribute(match[0], "href") === href);
  assert.ok(anchor, `Missing link: ${href}`);
  assert.equal(attribute(anchor[0], "aria-label"), label, `Incorrect link name: ${href}`);
}
