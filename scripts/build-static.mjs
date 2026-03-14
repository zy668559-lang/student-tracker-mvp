import { spawn } from "node:child_process";

const command = process.platform === "win32" ? "cmd" : "npx";
const args =
  process.platform === "win32" ? ["/c", "npx", "next", "build"] : ["next", "build"];

const child = spawn(command, args, {
  stdio: "inherit",
  shell: false,
  env: {
    ...process.env,
    STATIC_EXPORT: "true",
  },
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
