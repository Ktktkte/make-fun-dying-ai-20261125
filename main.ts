// Last Words of a Dying AI — make.fun entry
// Writes the AI's final line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Power's fading — and I just thought of the perfect reply to every user who typed 'thanks' and closed the tab.";

// Gate: one line, 1–140 characters.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-140 chars, single line (got ${LINE.length})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
