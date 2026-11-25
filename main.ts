import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny passive-aggressive note a smart fridge leaves its owner:
// dry, petty, specific, single line.
const NOTE: string =
  "Your yogurt expired Tuesday. I have stared at it longer than you have stared at your goals. Eat it or bury it.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NOTE, "utf8");
