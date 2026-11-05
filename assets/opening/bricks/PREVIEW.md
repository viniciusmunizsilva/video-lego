# Preview 3D das peças — abertura

## O que foi criado
- `preview.html`: cena de estudo em Three.js no formato vertical 9:16.
- Usa `createBrick.js` para montar três peças com geometria procedural: vermelho 2×4 (hero), amarelo 2×2 e azul 1×3.
- Luz quente principal e recorte azul, câmera em perspectiva e animação sutil de flutuação/rotação.

## Como visualizar
Abra `src/three/preview.html` por um servidor local (por exemplo, Live Server ou `python -m http.server` na raiz do repositório) para permitir os imports ES modules. O navegador precisa de acesso à internet para carregar Three.js pelo CDN.

## Render transparente
O preview é uma composição de estudo com fundo escuro. Para exportar PNG com alfa, remover/ocultar o plano de fundo e configurar `scene.background = null`; manter `WebGLRenderer({ alpha: true, preserveDrawingBuffer: true })` e exportar o canvas após o render. Verificar o canal alfa do PNG final.
