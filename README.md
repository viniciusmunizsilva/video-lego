# LEGO — CENA EM CENA

Projeto acadêmico de produção audiovisual para um vídeo promocional vertical de 30 segundos.

## Conceito
**Todo filme começa com uma cena. E a próxima pode ser sua.** O festival convida o público a explorar cenários, descobrir detalhes, construir e recriar cenas inspiradas em universos do cinema.

## Objetivo
Produzir um vídeo publicitário vertical, com linguagem de trailer cinematográfico, que desperte curiosidade e vontade de participar do evento, equilibrando nostalgia, aventura, criatividade e encantamento para crianças e adultos.

## Especificações
- Duração: 30 segundos.
- Formato: vertical 9:16; resolução-alvo 1080 × 1920; 30 fps.
- Idioma: português brasileiro.
- Entrega: MP4 com narração, trilha, efeitos sonoros e legendas; manter cenas e assets separados.

## Direção de arte
- Estética cinematográfica premium em mundo de miniaturas construído com peças LEGO.
- Plástico brilhante, studs e encaixes visíveis, escala coerente e minifiguras com aparência de brinquedo.
- Luz principal âmbar/dourada e luz secundária azul profunda; fundos escuros, contraste controlado, profundidade de campo, reflexos e fachos volumétricos.
- Paleta: Midnight #10131D, Cinema Blue #172D50, Amber #F5A623, LEGO Red #E72B20, Brick Yellow #F2D44C e Warm White #E8E2D9.
- Não gerar textos publicitários nas imagens. Tipografia, datas, local, horário e informações oficiais entram na pós-produção.
- Evitar colagens, moodboards como material final, sequências estáticas e aparência genérica de vídeo gerado por IA.

## Universos escolhidos
Harry Potter, Star Wars, Marvel, Jurassic Park, Batman, Piratas do Caribe e Indiana Jones. São referências visuais distintas, reunidas por uma mesma direção de fotografia.

## Linguagem de animação
Fluxo híbrido: paralaxe 2.5D para cenários e camadas; Three.js para peças/objetos que precisam girar, voar ou encaixar; composição e edição final com textos e áudio em timeline.

## Roteiro-base — 30 segundos
| Tempo | Momento | Conteúdo |
|---|---|---|
| 0–4s | A sessão vai começar | Projetor acende, facho atravessa a poeira, aproximação e claquete. |
| 4–11s | Entre nos universos | Montagem rápida de fantasia, espaço, super-heróis, dinossauros e aventura. |
| 11–18s | Você faz parte | Estúdio, credencial, peças sendo encaixadas e cenários sendo construídos. |
| 18–23s | Para todas as gerações | Criança explora um cenário; adulto aprecia uma construção. Montagem paralela. |
| 23–30s | A grande estreia | Peças se encaixam para formar a composição/título; tela final com assinatura e informações confirmadas. |

## Narração de trabalho
“Algumas histórias nunca saem da nossa memória. E se você pudesse entrar nelas? Explore universos, descubra detalhes e construa suas próprias cenas. Uma experiência para todas as gerações. LEGO apresenta: CENA EM CENA. Todo filme começa com uma cena. E a próxima pode ser sua.” Ajustar pausas e locução durante o animatic para caber em 30 segundos.

## Pipeline
1. Direção de arte e storyboard técnico.
2. Geração/criação dos assets individuais.
3. Preparação de PNGs com transparência real para objetos; backgrounds verticais independentes.
4. Separação em foreground, midground, background e elementos animáveis.
5. Composição e animação 2.5D/Three.js.
6. Narração, trilha, efeitos e legendas.
7. Renderização e controle de qualidade em 1080 × 1920, 30 fps.

## Regras dos assets
- Um objeto por arquivo; nunca entregar colagem como asset.
- Objetos isolados: PNG com canal alfa real, sem tabuleiro quadriculado desenhado.
- Cenários: imagem vertical 9:16 independente, sem objetos que serão compostos separadamente.
- Nomear em kebab-case e manter originais.
- Registrar prompt, finalidade, dimensão, formato e limitações em `assets/README.md`.
- Não afirmar que um arquivo está transparente sem validar o canal alfa.
- Imagens geradas anteriormente nesta conversa são referências até serem copiadas e tecnicamente validadas.

## Informações pendentes
Data, local, horários, perfil oficial, identidade oficial da campanha e informações de entrada/inscrição precisam ser confirmados pela organização. Confirmar também as permissões aplicáveis antes de qualquer publicação pública.

## Estado atual
O repositório começou vazio. Esta documentação registra o escopo e a direção criativa. Os assets gerados na conversa ainda não foram copiados para o repositório como arquivos binários validados. A abertura está em produção.

## Estrutura planejada
- `docs/creative-direction.md`
- `docs/production-plan.md`
- `assets/opening/projector/`
- `assets/opening/clapperboard/`
- `assets/opening/studio-background/`
- `assets/opening/bricks/`
- `assets/universes/`
- `assets/production-studio/`
- `assets/finale/`
- `scenes/01-opening/` até `scenes/05-finale/`
- `audio/` e `renders/`


## Atualização de produção — abertura 01

A abertura de 4 segundos foi implementada em Three.js com projetor procedural, peças em profundidade, claquete articulada, batida visual, flash e ponte para um castelo fantástico genérico. A cena possui timeline determinística por quadro (`?frame=0..119`).

O exportador local está em `scripts/render-opening.mjs`. O render final depende de executar localmente as instruções em `scripts/README.md`; o MP4 ainda não foi gerado nem validado nesta sessão. Os efeitos sonoros são cues documentados, não áudio incorporado.


## Como executar e renderizar
Consulte [`scripts/README.md`](scripts/README.md) para instalação, visualização local, renderização de segmentos, solução de problemas e checklist de validação. A montagem integral de 30 segundos permanece uma etapa posterior.


## Segmento 02 — universos cinematográficos
A sequência de 7 segundos está em [`src/scenes/universes-preview.html`](src/scenes/universes-preview.html), com especificação em [`src/scenes/universes-02.md`](src/scenes/universes-02.md). Para exportar, use `npm run render:universes` conforme o guia em [`scripts/README.md`](scripts/README.md). A cena é uma interpretação procedural de gêneros/universos, não uma reprodução de sets ou personagens oficiais.


## Segmento 03 — bastidores da imaginação
A cena de estúdio está em [`src/scenes/production-studio-preview.html`](src/scenes/production-studio-preview.html), com especificação em [`src/scenes/production-studio-03.md`](src/scenes/production-studio-03.md). Inclui câmera de cinema, refletores, bancada de montagem, credencial e tijolos animados. Render local: `npm run render:production-studio`.
