# Cena 02 — passagem pelos universos

## Duração e formato
- 00:04–00:11 do vídeo principal.
- 7 segundos; 210 quadros a 30 fps.
- Vertical 9:16, alvo 1080 × 1920.

## Conceito
Uma viagem contínua por sete dioramas cinematográficos construídos proceduralmente com geometria Three.js e tijolos reutilizáveis. Cada mundo ocupa uma estação da travessia; a câmera avança ao longo do eixo Z, com pequenas oscilações e cortes de luz entre universos.

## Sequência visual
1. Magia e fantasia — castelo, torres, lua e foco mágico (referência visual ao universo de Harry Potter, sem reproduzir personagens ou brasões oficiais).
2. Galáxia — nave, planeta e estrelas (referência espacial a Star Wars, sem logotipos ou veículos idênticos).
3. Heróis — skyline e figura de armadura original (referência ao gênero de super-heróis/Marvel, sem reproduzir personagens identificáveis).
4. Aventura jurássica — dinossauro e selva (referência ao gênero de Jurassic Park, sem marca ou logotipo).
5. Cidade da noite — skyline gótico, lua e guardião encapuzado original (referência ao imaginário de Batman, sem emblema oficial ou personagem idêntico).
6. Lendas dos mares — navio, velas e oceano (referência a Piratas do Caribe, sem personagens ou símbolos específicos).
7. Segredos antigos — templo, colunas e relíquia dourada (referência à aventura arqueológica de Indiana Jones, sem personagem ou logotipo).

## Linguagem visual
- Mesma paleta âmbar/azul, materiais plásticos e escala de miniatura da abertura.
- Dioramas individuais sobre bases de construção; cenário escuro e reflexivo.
- Títulos curtos em tipografia HTML sobreposta, não gerados dentro dos modelos.
- Transições por flashes breves sincronizáveis com trilha.

## Prévia e render
- Página: `src/scenes/universes-preview.html`
- Quadro determinístico: `?frame=0` até `?frame=209`.
- Exportador: `scripts/render-universes.mjs`.
- Comandos: `npm run dev` e, em outro terminal, `npm run render:universes`.
- MP4 esperado: `renders/universes-02.mp4`.

## Limitações
Esta é uma prévia procedural estilizada, não uma reprodução oficial de sets licenciados. A geometria de cada diorama precisa de revisão visual em navegador e o MP4 precisa ser renderizado e assistido antes de aprovação. Não há áudio incorporado; a edição final deve sincronizar whooshes, impactos e trilha.
