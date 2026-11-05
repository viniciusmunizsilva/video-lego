# Abertura 01 — finalização técnica

## Cena
Duração: 4 segundos (120 frames a 30 fps), composição vertical 9:16.

## Elementos concluídos
- Projetor procedural com carcaça, rolos, lente e aro.
- Feixe de projeção âmbar.
- Peças em três cores distribuídas em planos de profundidade.
- Primeiro plano para acentuar paralaxe.
- Piso reflexivo, fundo escuro, luz principal âmbar e recorte azul.
- Claquete 3D montada por geometria, entrando pela direita.
- Haste articulada com abertura e batida.
- Flash de transição e silhueta de castelo fantástico genérico no último instante, como ponte para a sequência de universos.
- Câmera com push-in e settle.
- Modo de quadro determinístico por query string: `?frame=0` até `?frame=119`.

## Como visualizar
Servir o repositório por HTTP (ex.: `npx vite --host 0.0.0.0`) e abrir `/src/scenes/opening-preview.html`. A página usa Three.js via CDN.

Para visualizar um quadro exato, abrir `/src/scenes/opening-preview.html?frame=96`. A página pausa no quadro selecionado e oculta os controles.

## Timing de referência
| Tempo | Ação |
|---|---|
| 0.0–1.8s | Projetor, feixe e peças; aproximação suave |
| 1.8–2.6s | Claquete entra pela direita |
| 2.6–3.1s | Haste abre |
| 3.1–3.3s | Haste fecha/bate |
| 3.6–4.0s | Flash e castelo fantástico começa a aparecer |

## Áudio a sincronizar na montagem
- 0.00s: ruído baixo de projetor/ambiente.
- 0.45s: motor do projetor ganha presença.
- 2.75s: whoosh curto da entrada da claquete.
- 3.24s: impacto seco de claquete.
- 3.72s: riser/impacto de transição para o próximo universo.

Não há áudio embutido na prévia; os marcadores acima são cues para a montagem.

## Limitações conhecidas
- O projetor e a claquete são modelos estilizados feitos com geometria procedural; não são réplicas oficiais de produto.
- O feixe é aproximado com cone transparente e fog, não volumetria física completa.
- A silhueta de castelo é uma ponte genérica de fantasia; não representa um cenário oficial de franquia.
- A página é uma prévia de animação, não o MP4 final. O áudio, correção de cor e render final ainda precisam ser feitos na etapa de edição geral do vídeo.
