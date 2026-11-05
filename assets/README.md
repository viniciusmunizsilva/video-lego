# Registro de assets

## Convenção
- Um elemento por arquivo.
- Objetos isolados: PNG com canal alfa real.
- Cenários: JPG/PNG vertical 9:16.
- Nome: `NN-descricao-variante.ext`.
- Registrar finalidade, dimensões, formato, origem e validação.

## Abertura — estado
| Asset | Estado | Observação |
|---|---|---|
| Projetor cinematográfico | Referência gerada na conversa | Imagem isolada visualmente; ainda não copiada para o repositório nem validada quanto ao canal alfa real. |
| Claquete LEGO | Referência gerada na conversa | Imagem isolada visualmente; conferir transparência real e revisar o logotipo antes de uso. |
| Estúdio cinematográfico | Background vertical gerado na conversa | Contém equipamentos/objetos integrados; não é um plate totalmente limpo. |
| Peças em primeiro plano | Pendente | Próximo asset: peças individuais vermelhas, amarelas e azuis, com alfa real. |
| Poeira/facho de luz | Pendente | Preferir efeitos procedurais em composição; não incorporar permanentemente ao projetor. |

## Histórico
Os primeiros resultados visuais exploraram a direção de arte. Não tratar automaticamente imagens compostas como masters finais ou PNGs com transparência real.


## Pacote inicial de imagens (sessão de 2026-11-05)

Os arquivos binários foram preparados localmente em `video-lego-initial-assets.zip`, mas ainda **não foram enviados ao GitHub** porque a integração disponível aceita criação de arquivos textuais e não oferece upload de conteúdo binário arbitrário.

Conteúdo do pacote:
- `projector.png` — 1086 × 1448, RGBA, canal alfa presente (0–255).
- `clapperboard.png` — 1312 × 1199, RGBA, canal alfa presente (0–255).
- `studio-background-vertical.png` — 941 × 1672, RGB, sem alfa.
- `studio-background-vertical-alt.png` — 941 × 1672, RGB, sem alfa.

A presença de canal alfa foi verificada tecnicamente com Pillow. Os fundos são imagens compostas e ainda precisam ser tratados como plates de referência, não como camadas 3D independentes.
