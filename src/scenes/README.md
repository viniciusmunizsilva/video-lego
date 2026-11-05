# Opening scene preview

Open `opening-preview.html` in a local dev server. It imports Three.js from jsDelivr and the reusable procedural brick module from `src/three/createBrick.js`.

## Composition
- Vertical 9:16 stage.
- Procedural projector body, reels, lens and warm projection beam.
- Six floating bricks in staggered depth layers.
- Foreground bricks to exaggerate parallax.
- Dark studio wall and reflective floor.
- Amber key light and blue rim light.
- Four-second looping camera push-in and gentle object motion.

## Controls
The preview runs automatically. It is a visual prototype, not a final 1080×1920 video render. For final export, lock the timeline to deterministic frame time (30 fps × 4 seconds), remove random initial values, render at 1080×1920 and composite audio/claquette separately.

## Current limitations
- Projector is a procedural stylized model, not a photogrammetric replica.
- The cone is a simple transparent beam approximation; production volumetrics can be improved with shader/fog passes.
- No clapperboard has been animated in this preview yet.
- The browser preview requires network access to load Three.js from jsDelivr.
