# CLAUDE.md — Handoff de produção | LEGO CENA EM CENA

Este arquivo é o briefing operacional principal para continuar e concluir o filme. Leia-o inteiro antes de alterar qualquer coisa. Trabalhe diretamente neste repositório, preserve o que já está bom e não peça ao usuário para repetir decisões registradas aqui.

## 1. Missão

Entregar um vídeo promocional cinematográfico chamado **LEGO CENA EM CENA**, com exatamente 30 segundos, pensado para Reels/Stories e reprodução vertical.

**Entrega obrigatória**
- Duração: 30,00 s (900 frames).
- Proporção: 9:16.
- Resolução final: 1080 × 1920.
- Frame rate: 30 fps constante.
- Container: MP4, vídeo H.264, pixel format yuv420p, faststart.
- Idioma: português brasileiro.
- Visual: mundo de miniaturas construído com tijolos de encaixe e minifiguras originais, com fotografia de trailer cinematográfico.
- O filme completo precisa ter continuidade de cor, escala, movimento, som e narrativa. Não basta entregar cinco MP4s separados.

O conceito verbal central é: **“Todo filme começa com uma cena. E a próxima pode ser sua.”**

## 2. Direção criativa aprovada

O usuário escolheu uma linguagem cinematográfica, moderna, com animação híbrida 3D + paralaxe. O resultado não pode parecer uma sequência de imagens estáticas, um slideshow ou um conjunto de imagens genéricas com zoom artificial.

### Aparência
- Miniaturas e cenários construídos com peças físicas estilizadas: corpos de tijolo, studs visíveis, encaixes legíveis, plástico com brilho/clearcoat e bevels discretos.
- Iluminação principal âmbar/dourada e recorte azul profundo.
- Fundos escuros com contraste controlado, profundidade de campo, reflexos e fachos volumétricos quando contribuírem para a leitura.
- Câmera com movimentos intencionais: dolly, push-in, travelling, orbitas curtas e parallax real entre planos.
- Partículas e poeira apenas como acentos; não poluir a imagem.
- Composição sempre desenhada para celular. Texto curto, grande e com contraste alto; respeitar margens seguras.
- Manter continuidade de exposição, balanço de branco, materiais e paleta entre todas as cenas.

### Paleta existente
- Midnight: #10131D
- Cinema Blue: #172D50
- Amber: #F5A623
- LEGO Red: #E72B20
- Brick Yellow: #F2D44C
- Warm White: #E8E2D9

O módulo `src/three/createBrick.js` exporta `createBrick()` e `BRICK_PALETTE`. Reutilize-o em vez de criar tijolos inconsistentes em cada cena.

### Universos escolhidos pelo usuário
1. Harry Potter — magia/fantasia, castelo e luz arcana.
2. Star Wars — galáxia, nave e planeta.
3. Marvel — cidade e super-herói.
4. Jurassic Park — dinossauro e selva.
5. Batman — cidade gótica e vigilante.
6. Piratas do Caribe — navio e oceano.
7. Indiana Jones — templo e relíquia arqueológica.

Trate esses nomes como referências criativas de universo/gênero. Prefira personagens, veículos, brasões, logotipos, cenários e silhuetas originais que evoquem o gênero sem copiar assets oficiais ou reproduzir personagens protegidos de forma idêntica. Não invente que há licença ou autorização. Se a organização fornecer assets oficiais aprovados, documente a origem e use apenas os arquivos efetivamente fornecidos.

## 3. Estrutura narrativa e timeline fechada

A soma deve ser exatamente 30 segundos:

| Segmento | Timecode | Duração | Frames | Função |
|---|---:|---:|---:|---|
| 01 — Abertura | 00:00–00:04 | 4 s | 120 | Projetor, feixe, claquete, flash e transição |
| 02 — Universos | 00:04–00:11 | 7 s | 210 | Viagem por sete mundos cinematográficos |
| 03 — Bastidores | 00:11–00:18 | 7 s | 210 | Estúdio, câmeras, luzes, bancada e construção |
| 04 — Gerações | 00:18–00:23 | 5 s | 150 | Adulto e criança constroem juntos |
| 05 — Grande revelação | 00:23–00:30 | 7 s | 210 | Tijolos formam CENA / EM / CENA; assinatura e slogan |
| **Total** | **00:00–00:30** | **30 s** | **900** | |

Não altere a duração total. Se ajustar timing interno, preserve os timecodes e a quantidade de frames por segmento, salvo decisão fundamentada e documentada.

### Textos já definidos nas cenas
- Cena 03: “BASTIDORES DA IMAGINAÇÃO”, “LUZES, CÂMERA... CRIATIVIDADE!”, “A CENA TAMBÉM É SUA”.
- Cena 04: “A IMAGINAÇÃO NÃO TEM IDADE”, “CRIAR É MELHOR JUNTOS”, “MEMÓRIAS QUE SE CONSTROEM”.
- Cena 05: “CENA / EM / CENA” e “TODO FILME COMEÇA COM UMA CENA. E A PRÓXIMA PODE SER SUA.”

Evite encher o filme de texto. Priorize imagem e ritmo. Não acrescente datas, endereço, preços, ingressos, horários, patrocinadores ou CTA factual sem confirmação da organização. Se esses dados forem fornecidos depois, reserve uma área limpa e legível na cartela final.

## 4. Estado atual do repositório — leia antes de começar

Repositório: https://github.com/viniciusmunizsilva/video-lego

Há cinco protótipos de cena implementados:
- `src/scenes/opening-preview.html` — abertura de 4 s.
- `src/scenes/universes-preview.html` — universos, 7 s.
- `src/scenes/production-studio-preview.html` — bastidores, 7 s.
- `src/scenes/generations-preview.html` — gerações, 5 s.
- `src/scenes/finale-preview.html` — grande revelação, 7 s.

Documentação existente:
- `src/scenes/opening-finalization.md`
- `src/scenes/universes-02.md`
- `src/scenes/production-studio-03.md`
- `src/scenes/generations-04.md`
- `src/scenes/finale-05.md`
- `src/scenes/README.md`
- `scripts/README.md`
- `README.md`

Renderizadores:
- `scripts/render-opening.mjs`
- `scripts/render-universes.mjs`
- `scripts/render-production-studio.mjs`
- `scripts/render-generations.mjs`
- `scripts/render-finale.mjs`

Comandos npm existentes:
- `npm run dev`
- `npm run render:opening`
- `npm run render:universes`
- `npm run render:production-studio`
- `npm run render:generations`
- `npm run render:finale`

Stack atual: Three.js 0.166.1, Vite 6, Playwright 1.49, Node.js 20 e FFmpeg. As cenas usam Three.js; as páginas importam Three.js por CDN jsDelivr e usam o módulo local `src/three/createBrick.js`.

**Importante: existência de código não significa cena aprovada.** Até que você execute o pipeline, assista aos vídeos e revise os resultados, trate tudo como protótipo. Não diga ao usuário que o vídeo foi renderizado, está pronto ou foi validado se isso não for verdade.

### Pontos técnicos que precisam ser auditados imediatamente
1. Abrir e testar cada uma das cinco páginas no navegador real.
2. Confirmar que cada cena define `window.__renderFrame(frame)` e que cada quadro é determinístico, sem depender de `performance.now()`, aleatoriedade não semeada ou estado acumulado entre chamadas.
3. O renderizador da abertura navega novamente para cada frame e captura o canvas. Os demais mantêm a página aberta e chamam `__renderFrame`. Verifique consistência e erros de console.
4. `scripts/render-finale.mjs` deve usar a mesma estratégia robusta dos outros scripts: `BASE_URL` configurável, limpeza da pasta de frames antes de renderizar, screenshot do canvas e tratamento de falha de browser/FFmpeg. Hoje ele usa URL fixa e não limpa a pasta antiga; corrija se necessário.
5. Os scripts devem falhar com exit code diferente de zero quando houver erro de página, WebGL, captura ou FFmpeg. Não basta imprimir erro no console e continuar.
6. O workflow `.github/workflows/render-segments.yml` já existe, mas verifique se a execução mais recente terminou com sucesso. Não presuma sucesso apenas porque iniciou.
7. O workflow precisa executar os cinco renderizadores existentes, depois montar o filme completo e publicar os MP4s finais como artefatos. Hoje ele só tem etapa de renderização de segmentos; implemente a montagem final.
8. Não incluir `renders/` com centenas de PNGs ou MP4s grandes no Git sem necessidade; usar artefatos de Actions ou armazenamento indicado pelo usuário.

## 5. Tarefas obrigatórias — execute nesta ordem

### Fase A — Auditoria e correção dos protótipos
- Leia o código das cinco cenas, módulos compartilhados e renderizadores.
- Execute `npm install`, instale Chromium do Playwright e verifique FFmpeg.
- Rode Vite e abra as cinco páginas.
- Capture frames de referência no início, meio e fim de cada cena.
- Revise composição, recortes, colisões, escalas, geometria, iluminação, sombras, textos e continuidade.
- Corrija bugs e inconsistências; não faça redesign arbitrário do que já funciona.
- Garanta que os textos HTML permaneçam legíveis em 1080×1920 e não fiquem cortados por causa do viewport do Playwright.
- Verifique especificamente a animação dos tijolos e a posição da construção na cena 04; houve ajustes de posição sem validação visual anterior.
- Verifique a cena 05: título formado por tijolos, placa, marca e slogan devem caber no frame e manter hierarquia clara.

### Fase B — Renderização dos cinco segmentos
Renderize os cinco segmentos, cada um com sua quantidade exata de frames:
- `renders/opening-01.mp4` — 120 frames.
- `renders/universes-02.mp4` — 210 frames.
- `renders/production-studio-03.mp4` — 210 frames.
- `renders/generations-04.mp4` — 150 frames.
- `renders/finale-05.mp4` — 210 frames.

Especificações de cada arquivo: 1080×1920, 30 fps, H.264, yuv420p. Use FFmpeg e verifique com ffprobe a duração, dimensões, frame rate e contagem de frames. Se a captura 1080×1920 ficar pesada, otimize o processo sem reduzir a qualidade de entrega.

### Fase C — Montagem do filme completo
Criar um script reprodutível, por exemplo `scripts/assemble-film.mjs` ou `scripts/assemble-film.sh`, e um comando npm `npm run render:film`.

A montagem deve:
- Concatenar os cinco segmentos na ordem e duração exatas da tabela da seção 3.
- Garantir exatamente 900 frames e 30 segundos.
- Corrigir eventuais diferenças de codec, timebase, pixel format e dimensões antes da concatenação.
- Criar transições suaves apenas onde a narrativa pede; não inserir transições que aumentem a duração além de 30 s. Preferir cortes motivados por flash, movimento, luz ou match cut.
- Incluir uma camada de áudio com trilha cinematográfica licenciada/royalty-free ou fornecida pelo usuário, efeitos sonoros e, se houver, locução.
- Não baixar, copiar ou usar músicas comerciais protegidas sem autorização. Não gerar locução com informação inventada.
- Se não houver arquivos de áudio autorizados disponíveis, entregar o vídeo visual final e um mapa de áudio detalhado com timecodes; não fingir que o áudio foi incorporado.
- Criar saída `renders/lego-cena-em-cena-final.mp4`.
- Criar também uma versão de revisão sem áudio, se isso ajudar a depurar.

### Fase D — Som e ritmo
A trilha deve soar como trailer de aventura/descoberta, com progressão e resolução emocional, sem competir com os textos.
Cues já documentados:
- 00:00: ruído baixo de projetor/ambiente.
- 00:00.45: motor do projetor cresce.
- 00:02.75: whoosh da entrada da claquete.
- 00:03.24: impacto seco da claquete.
- 00:03.72: riser/impacto para o universo seguinte.
- 00:04–00:11: transições e acentos para os universos.
- 00:11–00:18: textura de estúdio, encaixes e pequenos impactos de peças.
- 00:18–00:23: música abre e aquece para o momento intergeracional.
- 00:23–00:30: build musical, montagem dos tijolos, impacto da marca e sustentação do slogan.
Use áudio real licenciado ou fornecido. Se a locução for usada, ela deve caber no ritmo e ser inteligível em celular. Não é obrigatório manter a locução de trabalho do README se ela não funcionar na duração.

### Fase E — Controle de qualidade e entrega
Assista ao filme inteiro, não apenas aos frames isolados. Verifique:
- 30,00 s, 900 frames, 30 fps constante.
- 1080×1920, 9:16, H.264, yuv420p.
- Nenhum frame preto acidental, congelamento, flicker, glitch, tearing ou salto de câmera.
- Nenhum texto cortado, pequeno demais ou ilegível.
- Continuidade de paleta, iluminação, escala e materiais.
- Nenhuma geometria atravessando personagens/objetos de forma evidente.
- Transições intencionais e narrativa compreensível sem explicação externa.
- Áudio sem clipping, volume equilibrado e sincronismo correto, caso haja áudio.
- A cartela final permanece tempo suficiente para leitura.
- O arquivo final abre em players comuns e está pronto para upload vertical.

Gere um relatório `docs/qa-report.md` com data, comandos executados, versões das ferramentas, especificações medidas, problemas encontrados, correções, limitações e status de aprovação. Marque itens não verificados como pendentes; nunca invente resultado de QA.

## 6. Workflow GitHub Actions

Atualize `.github/workflows/render-segments.yml` (ou renomeie para `render-film.yml`) para:
1. checkout;
2. Node 20;
3. instalar dependências;
4. instalar Chromium com dependências;
5. instalar FFmpeg;
6. iniciar Vite e aguardar uma URL de cena real (não use `/` se não houver index);
7. renderizar os cinco segmentos;
8. montar o vídeo completo;
9. validar metadados com ffprobe;
10. publicar os cinco segmentos, o filme completo e o relatório QA como artifacts.

Usar `npm install` enquanto não houver package-lock; idealmente gerar e versionar `package-lock.json` e depois mudar para `npm ci`. Definir timeout adequado. Não deixar um job verde se algum renderizador falhar. Os artifacts devem ter retenção suficiente para o usuário baixar e revisar.

## 7. Organização e documentação

Manter:
- `CLAUDE.md` como briefing central e instruções de execução.
- `docs/qa-report.md` como relatório real de validação.
- `docs/audio-cue-sheet.md` com cues e fontes de áudio.
- `scripts/README.md` com comandos atualizados.
- `README.md` sem afirmações desatualizadas.
- `renders/` local/artefatos, não necessariamente versionados.

Atualize os documentos quando mudar caminhos, comandos ou estado real do projeto.

## 8. Regras de trabalho para Claude

- Comece fazendo auditoria do repositório; não reescreva tudo de uma vez.
- Faça alterações pequenas, funcionais e verificáveis.
- Preserve as cinco cenas e decisões criativas aprovadas.
- Prefira geometria procedural e assets originais; não use imagens de referência como substituto de animação 3D.
- Não use placeholders na entrega final.
- Não use texto gerado dentro de texturas/imagens quando puder compor HTML/canvas tipográfico com controle de legibilidade.
- Não altere duração, formato, proporção ou lista de universos.
- Não invente informações do evento.
- Não declare renderização, upload, revisão ou aprovação que não ocorreu.
- Após cada fase, registre os arquivos modificados, comandos executados, resultados e pendências.
- Se faltar asset oficial, áudio ou informação factual, continue com o que for possível e sinalize exatamente o que está faltando; não bloqueie todo o trabalho por detalhes não essenciais.
- Faça commits com mensagens claras e mantenha o repositório organizado.
- No final, entregue ao usuário o link do MP4, o link dos artifacts/relatório e uma explicação objetiva do que foi efetivamente renderizado e validado.

## 9. Critério de conclusão

O trabalho só está concluído quando:
1. Os cinco segmentos foram renderizados e inspecionados.
2. O filme completo foi montado em 30 segundos/900 frames.
3. O arquivo final foi validado tecnicamente e assistido.
4. Áudio está incorporado com direitos adequados, ou a ausência está explicitamente indicada.
5. O artifact do MP4 final está disponível para download.
6. O relatório de QA descreve evidências reais e limitações.

**Primeira ação ao iniciar:** auditar o estado atual do GitHub Actions e renderizar/inspecionar frames das cinco cenas existentes. Depois corrija os renderizadores, produza os segmentos e monte o filme. Não comece por criar uma sexta cena nem por substituir os protótipos sem justificativa.
