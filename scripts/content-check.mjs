import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const files = ["app/layout.jsx", "app/page.jsx", "app/schedule/page.jsx"];
const content = await Promise.all(files.map((file) => readFile(file, "utf8"))).then((parts) => parts.join("\n"));

for (const phrase of [
  "Useful AI,",
  "under observation.",
  "The interesting work begins after the model answers.",
  "Bring one",
  "Open available times",
  "https://calendar.app.google/zrhcrUpvDfyRHhgy7",
]) {
  assert.ok(content.includes(phrase), `Missing required phrase: ${phrase}`);
}

for (const phrase of ["Kevin Lim", "Success Stories", "#process", "Privacy Policy", "Terms of Service"]) {
  assert.ok(!content.includes(phrase), `Found removed or unsupported content: ${phrase}`);
}
