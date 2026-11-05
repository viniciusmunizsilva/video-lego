import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const frames = 210;
const width = 1080;
const height = 1920;
const fps = 30;
const output = resolve("renders/finale-05.mp4");
const frameDir = resolve("renders/finale-frames");
await mkdir(frameDir, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-webgl"] });
const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
page.on("console", message => { if (message.type() === "error") console.error(message.text()); });
page.on("pageerror", error => console.error(error));
await page.goto("http://127.0.0.1:5173/src/scenes/finale-preview.html", { waitUntil: "networkidle" });
await page.waitForFunction(() => typeof window.__renderFrame === "function");
for (let frame = 0; frame < frames; frame++) {
  await page.evaluate(frame => window.__renderFrame(frame), frame);
  await page.screenshot({ path: resolve(frameDir, `frame-${String(frame).padStart(4, "0")}.png`) });
  if (frame % 30 === 0) console.log(`Captured ${frame}/${frames}`);
}
await browser.close();
const ffmpeg = spawnSync("ffmpeg", ["-y", "-framerate", String(fps), "-i", resolve(frameDir, "frame-%04d.png"), "-frames:v", String(frames), "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "-movflags", "+faststart", "-vf", `scale=${width}:${height}:flags=lanczos`, output], { stdio: "inherit" });
if (ffmpeg.error) throw ffmpeg.error;
if (ffmpeg.status !== 0) process.exit(ffmpeg.status ?? 1);
console.log(`Rendered ${output}`);
