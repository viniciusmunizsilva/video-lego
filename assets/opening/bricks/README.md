# Procedural brick asset

The first brick asset is built as reusable Three.js geometry instead of a generated raster image. This gives the production exact control over color, rotation, scale, camera, lighting, and animation.

## File
- `createBrick.js`: creates a rounded plastic brick with a configurable stud grid.

## Example
```js
import * as THREE from "three";
import { createBrick, BRICK_PALETTE } from "./createBrick.js";

const brick = createBrick({
  color: BRICK_PALETTE.red,
  studsX: 2,
  studsZ: 4,
});
scene.add(brick);
```

## Technical notes
- Three.js module; requires Three.js and `RoundedBoxGeometry` addon.
- The brick body and studs are separate meshes, so studs can be animated or highlighted independently.
- The object origin is centered horizontally and at the bottom of the body (y=0).
- The geometry is LEGO-inspired and intended as a stylized academic campaign asset; it is not an official LEGO CAD model.
- For final renders, use an alpha-enabled WebGLRenderer and transparent scene background; verify PNG alpha after export.
