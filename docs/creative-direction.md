# Direção de arte — LEGO CENA EM CENA

## Princípio visual
Um mundo cinematográfico em miniatura, construído com peças LEGO e fotografado como publicidade premium. Todos os universos devem parecer filmados no mesmo estúdio e sob a mesma direção de fotografia.

## Look
- Macro cinematográfica e escala de miniatura convincente.
- Plástico brilhante, studs, encaixes e juntas nítidos.
- Contraste entre sombras profundas e highlights quentes.
- Luz principal âmbar/dourada; recorte e ambientes em azul profundo.
- Reflexos controlados em pisos e superfícies.
- Profundidade de campo rasa nos closes; maior leitura nos planos gerais.
- Poeira volumétrica e partículas apenas quando ajudam a leitura do facho de luz.
- Câmera com movimento deliberado e suave, sem movimentos aleatórios.

## Paleta
| Nome | Hex | Uso |
|---|---|---|
| Midnight | #10131D | Fundos e sombras |
| Cinema Blue | #172D50 | Contraluz e ambientes |
| Amber | #F5A623 | Luz principal e highlights |
| LEGO Red | #E72B20 | Acentos e peças |
| Brick Yellow | #F2D44C | Acentos e peças |
| Warm White | #E8E2D9 | Luz e tipografia |

## Regras de continuidade
1. Minifiguras sempre com proporções de brinquedo.
2. Escala relativa consistente entre minifiguras, peças, cenários e objetos.
3. Evitar letras, logotipos e textos gerados em imagens.
4. Não misturar gêneros/franquias no mesmo cenário, salvo transição intencional.
5. Usar as franquias como universos distintos; manter unidade por iluminação, lente, materiais e enquadramento.
6. Produzir em 9:16; não gerar masters horizontais como substitutos do formato final.
7. Produzir assets em arquivos individuais, não painéis.

## Direção de animação
Híbrida: paralaxe 2.5D para cenários e camadas pictóricas; Three.js para peças/objetos que precisam girar, encaixar, voar ou ter geometria consistente. A animação final do título deve ser controlada por geometria/peças 3D, com tipografia inserida/controlada na composição.

## Regras para transparência
Um asset isolado só é aceito como PNG transparente quando o arquivo entregue tiver canal alfa e fundo efetivamente transparente. Um padrão quadriculado desenhado na imagem não conta como transparência. Se a geração produzir fundo opaco, remover o fundo em pós-produção e validar o alfa antes de cadastrar como final.
