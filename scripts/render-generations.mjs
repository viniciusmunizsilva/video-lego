import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
const baseUrl=process.env.BASE_URL||"http://127.0.0.1:5173";
const outputDir=path.resolve("renders/generations-04-frames");
const outputFile=path.resolve("renders/generations-04.mp4");
const width=1080,height=1920,fps=30,frameCount=150;
await rm(outputDir,{recursive:true,force:true});await mkdir(outputDir,{recursive:true});await mkdir(path.dirname(outputFile),{recursive:true});
const browser=await chromium.launch({headless:true,args:["--use-gl=angle","--use-angle=swiftshader"]});
const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
page.on("console",m=>{if(m.type()==="error")console.error("[browser]",m.text());});page.on("pageerror",e=>console.error("[pageerror]",e.message));
await page.goto(`${baseUrl}/src/scenes/generations-preview.html?frame=0`,{waitUntil:"networkidle"});
await page.waitForFunction("typeof window.__renderFrame === 'function'");
for(let frame=0;frame<frameCount;frame++){await page.evaluate(f=>window.__renderFrame(f),frame);await page.locator("#stage canvas").screenshot({path:path.join(outputDir,`frame-${String(frame).padStart(4,"0")}.png`)});if(frame%30===0)console.log(`Rendered ${frame+1}/${frameCount}`);}
await browser.close();
const result=spawnSync("ffmpeg",["-y","-framerate",String(fps),"-i",path.join(outputDir,"frame-%04d.png"),"-frames:v",String(frameCount),"-c:v","libx264","-pix_fmt","yuv420p","-crf","17","-movflags","+faststart","-vf","scale=1080:1920:flags=lanczos",outputFile],{stdio:"inherit"});
if(result.error)throw result.error;if(result.status!==0)process.exit(result.status||1);console.log(`Rendered: ${outputFile}`);
