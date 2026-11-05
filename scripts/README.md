# Execução e renderização local

## Requisitos
- Node.js 20 ou superior.
- FFmpeg instalado e disponível no PATH.
- Dependências npm do projeto.
- Chromium do Playwright.

## Primeira configuração
Na raiz do repositório:

```bash
npm install
npx playwright install chromium
```

## Visualizar uma cena
Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:
- Abertura: `http://localhost:5173/src/scenes/opening-preview.html`
- Universos: `http://localhost:5173/src/scenes/universes-preview.html`
- Bastidores: `http://localhost:5173/src/scenes/production-studio-preview.html`
- Gerações: `http://localhost:5173/src/scenes/generations-preview.html`
- Grande revelação: `http://localhost:5173/src/scenes/finale-preview.html`

Para pausar em um quadro específico, acrescente `?frame=NN`. Abertura: 0–119. Universos: 0–209. Bastidores: 0–209. Gerações: 0–149. Grande revelação: 0–209.

## Renderizar MP4
Com o servidor Vite em execução, abra outro terminal:

```bash
npm run render:opening
npm run render:universes
npm run render:production-studio
npm run render:generations
npm run render:finale
```

Os arquivos serão gerados em `renders/opening-01.mp4` e `renders/universes-02.mp4` e `renders/production-studio-03.mp4` e `renders/generations-04.mp4` e `renders/finale-05.mp4`.

## Renderizar o vídeo completo
As cenas acima são segmentos independentes. A montagem final de 30 segundos ainda precisa combinar os segmentos, cenas de participação e gerações, trilha, locução, efeitos e tela final. Não tratar segmentos individuais como vídeo final.

## Solução de problemas
- `ffmpeg: command not found`: instale FFmpeg e reinicie o terminal.
- Chromium ausente: execute `npx playwright install chromium`.
- Falha ao carregar Three.js: confirme conexão com internet (a prévia importa Three.js do jsDelivr).
- Página em branco: mantenha `npm run dev` ativo e acesse pelo endereço local, não abrindo o HTML diretamente como `file://`.
- Render com erro de WebGL: atualize driver gráfico/Chromium; em ambiente sem GPU, tente `npx playwright install --with-deps chromium` e habilite SwiftShader nas opções do Chromium.

## Checklist obrigatório de validação
Antes de aprovar qualquer MP4:
1. Reproduzir o vídeo inteiro, não apenas conferir um frame.
2. Conferir enquadramento 9:16 e resolução 1080 × 1920.
3. Conferir 30 fps, duração, cortes e ausência de quadros pretos involuntários.
4. Conferir textos, marcas, anatomia dos modelos e consistência de escala.
5. Ouvir áudio e verificar sincronismo de claquete, impactos e transições.
6. Só marcar como aprovado depois de revisão visual e sonora humana.


## Renderização determinística
Os scripts mantêm uma única página Chromium aberta e solicitam cada quadro por índice, em vez de depender do tempo real de reprodução. Isso reduz variação entre quadros e acelera a captura. A sequência dos universos usa 210 quadros (7 segundos × 30 fps).


## Renderização automatizada no GitHub
O workflow `.github/workflows/render-segments.yml` executa os cinco renderizadores em push para `main`/`master` ou por disparo manual e publica os MP4s como artifact por 7 dias. A execução só pode ser considerada bem-sucedida quando o GitHub Actions concluir o job; a revisão visual dos arquivos continua obrigatória.
