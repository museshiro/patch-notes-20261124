import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "v3.1.0: Fixed bug where sneeze interrupt fires only when " +
  "both hands are full and mouth is 90% full.";

if (line.length === 0 || line.trim().length === 0) {
  throw new Error("entry must not be empty");
}
if (line.length > 160) {
  throw new Error("entry must be at most 160 characters");
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
