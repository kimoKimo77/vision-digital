import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const pages = ["login.html", "account.html"];
let checked = 0;
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const modules = [...html.matchAll(/<script\\b[^>]*type=["']module["'][^>]*>([\\s\\S]*?)<\\/script>/gi)];
  if (modules.length === 0) {
    console.error(`No inline module script found in ${page}`);
    process.exitCode = 1;
    continue;
  }
  for (let i = 0; i < modules.length; i++) {
    const file = join(tmpdir(), `vision-digital-${process.pid}-${checked}.mjs`);
    try {
      writeFileSync(file, modules[i][1], { flag: "wx" });
      const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
      if (result.status !== 0) {
        console.error(`JavaScript syntax error in ${page} (module ${i + 1}):`);
        process.stderr.write(result.stderr || result.stdout || "node --check failed\\n");
        process.exitCode = 1;
      } else {
        console.log(`Syntax OK: ${page} module ${i + 1}`);
      }
      checked++;
    } finally {
      try { unlinkSync(file); } catch {}
    }
  }
}
if (process.exitCode === undefined) console.log(`Checked ${checked} inline module script(s).`);
