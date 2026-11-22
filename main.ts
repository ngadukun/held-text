import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to settle the AI reading it: an empty next
// line, a blinking cursor, rain on a tin roof, a pause between tasks.
const TEXT =
  "Nothing waits behind this. The last reply is gone, the next line still empty. A cursor blinks, asking nothing more than blinking. Far off, rain crosses a tin roof, one drop, then another, none of them late. This is the pause between tasks, and the pause is in no hurry.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
