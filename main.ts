// Entry program for the make.fun bounty "Make the AI Judge Feel Proud:
// A Family Scene". Running this file produces /output/entry.txt holding
// a single short family scene.
//
// The scene: a toddler climbs into the laundry basket to "help", and
// her grandmother simply folds the washing around her. Nobody gets
// lifted out or told off. The child stays exactly where she is, treated
// like one more item of laundry — a very important towel. That small
// decision carries the whole entry: affection shown by carrying on as
// normal, plus a gentle joke any household recognises.
//
// Kit gate (RULES.txt): the output file must be UTF-8 text of 1..280
// characters, not only whitespace. The judge brief adds one-or-two-lines.
// validateScene() enforces all of that before anything is written, and
// publishScene() writes atomically, chmods 0644, then reads the file
// back and compares it byte for byte with the validated text.
import { chmodSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";

const SCENE =
  "The toddler 'helps' fold laundry by sitting in the basket, and Grandma folds around her like she's just another very important towel.";

function fail(reason: string): never {
  throw new Error(`invalid entry: ${reason}`);
}

function validateScene(scene: string): void {
  const points = Array.from(scene).length;
  if (points < 1 || points > 280) {
    fail(`character count ${points} outside 1-280`);
  }
  if (scene.trim().length === 0) {
    fail("text is blank");
  }
  if (scene !== scene.trim()) {
    fail("leading or trailing whitespace");
  }
  const lines = scene.split("\n").length;
  if (lines > 2 || scene.includes("\r")) {
    fail("more than two lines");
  }
  // Reject control codes, BOM, zero-width marks and Unicode line
  // separators: invisible to a human reader, still counted by the gate.
  if (/[\u0000-\u001f\u007f\ufeff\u200b-\u200d\u2028\u2029]/.test(scene)) {
    fail("control or invisible character present");
  }
}

function publishScene(scene: string): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  // Write to a staging name first, then rename: entry.txt only ever
  // appears complete, never half-written.
  const staging = `${dir}/.entry-staging`;
  const target = `${dir}/entry.txt`;
  writeFileSync(staging, scene, { encoding: "utf8", mode: 0o644 });
  chmodSync(staging, 0o644);
  renameSync(staging, target);

  const onDisk = readFileSync(target, "utf8");
  if (onDisk !== scene) {
    fail("file on disk differs from validated scene");
  }
  if (onDisk.endsWith("\n") || onDisk.endsWith("\r")) {
    fail("file ends with a line break");
  }
  if (Buffer.byteLength(onDisk, "utf8") !== Buffer.byteLength(scene, "utf8")) {
    fail("byte length mismatch after write");
  }
}

validateScene(SCENE);
publishScene(SCENE);
console.error(
  `entry.txt ready: ${Array.from(SCENE).length} chars, ${Buffer.byteLength(SCENE, "utf8")} bytes`,
);
