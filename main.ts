// One-Star Review of Something Essential — make.fun entry
// Writes the winning one-star review (see SCREENING.md, candidate #1, 24/25)
// to $MAKEFUN_OUTPUT_DIR/entry.txt when set, else /output/entry.txt.
// Node 22, stdlib only, no network. Paths resolve from this file's own
// directory, never from process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // entrypoint lives at the repo root; no repo files are read.

const LINE =
  "One star. Sleep demands eight hours and delivers six, then vanishes the night before my 6:47 alarm. I woke up rested once, in 2019. I still mention it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
