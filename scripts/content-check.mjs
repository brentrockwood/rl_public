import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const files = ["app/data.jsx", "app/layout.jsx", "app/page.jsx"];
const content = await Promise.all(files.map((file) => readFile(file, "utf8"))).then((parts) => parts.join("\n"));

for (const phrase of [
  "Practical AI systems for real work.",
  "Three decades",
  "Have an AI workflow worth improving?",
]) {
  assert.ok(content.includes(phrase), `Missing required phrase: ${phrase}`);
}

for (const phrase of ["Kevin Lim", "Hello to Hired", "Success Stories", "#process"]) {
  assert.ok(!content.includes(phrase), `Found removed content: ${phrase}`);
}
