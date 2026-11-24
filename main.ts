// Patch Notes entry: one line, at most 160 characters.
// Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt, exactly as the
// competition harness expects. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v1.6.3: fixed a bug where the tongue probed the same sore spot 400 times a day, despite repeated warnings from the user.";

if (LINE.length > 160) {
  throw new Error(`line is ${LINE.length} characters, over the 160 limit`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be empty or only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
