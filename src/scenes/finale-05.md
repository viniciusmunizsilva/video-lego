# Segmento 05 — grande revelação (23–30s)

## Objetivo
Fechar o filme com uma construção 3D memorável: peças individuais convergem em profundidade e se encaixam para formar o título **CENA EM CENA**. A assinatura LEGO surge em uma placa vermelha construída como objeto físico, seguida pela frase de campanha.

## Direção visual
- Formato vertical 9:16, linguagem de trailer cinematográfico.
- Fundo azul-noite, luz principal âmbar e recorte azul.
- Letras construídas por pequenos tijolos 3D, com studs visíveis e quatro cores da paleta.
- Movimento de convergência em ondas, com rotações que desaceleram ao encaixar.
- Placa vermelha tridimensional com assinatura LEGO, revelada depois da montagem do título.
- Partículas discretas em órbita e aproximação suave de câmera; manter o texto como protagonista.

## Timeline — 210 quadros / 30 fps
| Tempo | Ação |
|---|---|
| 0.0–0.6s | Campo escuro, peças dispersas em profundidade; luz revela o espaço. |
| 0.6–4.5s | Tijolos convergem em ondas e montam as letras CENA / EM / CENA. |
| 4.5–5.4s | Placa vermelha com a assinatura LEGO cresce e se estabiliza abaixo do título. |
| 5.5–7.0s | Entra a frase “TODO FILME COMEÇA COM UMA CENA. E A PRÓXIMA PODE SER SUA.”; composição segura para leitura. |

## Texto de tela
- Título: CENA EM CENA
- Assinatura: LEGO
- Fechamento: TODO FILME COMEÇA COM UMA CENA. E A PRÓXIMA PODE SER SUA.

## Implementação
- Prévia: `src/scenes/finale-preview.html`
- Quadro determinístico: `?frame=0..209` e `window.__renderFrame(frame)`.
- Renderizador: `npm run render:finale`.
- Saída esperada: `renders/finale-05.mp4`.

## Limitações e validação
O título é construído com geometria procedural inspirada em tijolos, e a assinatura LEGO é uma representação tipográfica aplicada à placa 3D — não é um arquivo vetorial oficial da marca. O enquadramento, a legibilidade em celular, o encaixe visual, a performance e o resultado em movimento precisam ser revisados no navegador e no MP4. Esta cena foi escrita no repositório, mas ainda não foi renderizada nem aprovada visualmente.
