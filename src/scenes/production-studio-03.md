# Cena 03 — Bastidores da imaginação

## Duração
- 00:11–00:18 do filme principal.
- 7 segundos, 210 quadros, 30 fps, vertical 9:16.

## Conceito
Mostrar que o público não apenas assiste aos universos: também pode construir, experimentar e participar. A cena é um making-of em miniatura dentro de um estúdio LEGO.

## Elementos de cenário
- Grid/truss de estúdio com três refletores e fachos âmbar/azul.
- Câmera cinematográfica principal sobre dolly, com lente e rodas.
- Câmera secundária em tripé ao fundo.
- Bancada de construção com base e tijolos que descem e se encaixam progressivamente.
- Figura construtora estilizada junto à bancada, com braços e mãos animados.
- Credencial de produção pendurada em primeiro plano.
- Mini claquete sobre a bancada.
- Peças soltas e flutuantes para profundidade.

## Ritmo
- 0–2.25s: revelar o estúdio e a câmera; texto “BASTIDORES DA IMAGINAÇÃO”.
- 2.25–4.65s: avançar até a bancada; peças começam a se encaixar; texto “LUZES, CÂMERA... CRIATIVIDADE!”.
- 4.65–7s: construtor interage com o modelo pronto; texto “A CENA TAMBÉM É SUA”.

## Direção de arte
Mesmo material plástico, escala de miniatura, fundo escuro, luz âmbar principal e recorte azul das cenas anteriores. Tipografia sobreposta em HTML para legibilidade. Geometrias originais estilizadas, sem reproduzir personagens licenciados.

## Prévia e renderização
- Prévia: `src/scenes/production-studio-preview.html`.
- Frame determinístico: `?frame=0..209`.
- Exportador: `scripts/render-production-studio.mjs`.
- Comando: `npm run render:production-studio`.
- MP4 esperado: `renders/production-studio-03.mp4`.

## Limitações e aprovação
A cena é um protótipo procedural, não uma renderização final aprovada. Verificar visualmente as mãos/figura, o movimento de encaixe, colisões, leitura dos textos e sincronismo com trilha. Não há áudio embutido.
