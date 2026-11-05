import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:5173";
const outputDir = path.resolve("renders/opening-01-frames");
const outputFile = path.resolve("renders/opening-01.mp4");
const width = 1080;
const height = 1920;
const fps = 30;
const frameCount = 120;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await mkdir(path.dirname(outputFile), { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width, height },
  deviceScaleFactor: 1,
});
page.on("console", message => {
  if (message.type() === "error") console.error("[browser]", message.text());
});
page.on("pageerror", error => console.error("[pageerror]", error.message));

for (let frame = 0; frame < frameCount; frame += 1) {
  const url = `${baseUrl}/src/scenes/opening-preview.html?frame=${frame}`;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.locator("#stage canvas").screenshot({
    path: path.join(outputDir, `frame-${String(frame).padStart(4, "0")}.png`),
    omitBackground: false,
  });
  if (frame % 20 === 0) console.log(`Rendered ${frame + 1}/${frameCount}`);
}
await browser.close();

const ffmpeg = spawnSync("ffmpeg", [
  "-y",
  "-framerate", String(fps),
  "-i", path.join(outputDir, "frame-%04d.png"),
  "-frames:v", String(frameCount),
  "-c:v", "libx264",
  "-pix_fmt", "yuv420p",
  "-crf", "17",
  "-movflags", "+faststart",
  "-vf", "scale=1080:1920:flags=lanczos",
  outputFile,
], { stdio: "inherit" });

if (ffmpeg.error) throw ffmpeg.error;
if (ffmpeg.status !== 0) process.exit(ffmpeg.status || 1);
console.log(`Rendered: ${outputFile}`);
