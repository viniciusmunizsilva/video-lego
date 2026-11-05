# Render local da abertura

## Requisitos
- Node.js 20+
- FFmpeg instalado e disponível no PATH
- Dependências instaladas com `npm install`
- Chromium do Playwright instalado com `npx playwright install chromium`

## Passos
1. Em um terminal, execute `npm run dev`.
2. Em outro terminal, execute `npm run render:opening`.
3. O MP4 será criado em `renders/opening-01.mp4`.

Para usar outro endereço do servidor: `BASE_URL=http://localhost:4173 npm run render:opening`.

## Especificação
- 1080 × 1920
- 9:16
- 30 fps
- 120 quadros / 4 segundos
- H.264, yuv420p, faststart
- Sem áudio nesta etapa. Os cues de áudio estão em `src/scenes/opening-finalization.md`.

O script captura cada quadro usando `?frame=N`, de forma que a animação não dependa da taxa de atualização ou do tempo de carregamento do navegador.
