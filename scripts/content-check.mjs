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
