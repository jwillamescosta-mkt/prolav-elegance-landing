# Aplicação profissional da logomarca

## Diagnóstico

O arquivo `src/assets/logo-prolav.png` está salvo como **RGB sem canal alpha** (1264×848). Ou seja: o "fundo" branco/claro que aparece atrás da logo **faz parte da imagem** — não é um efeito do Header. Por isso a logo aparece como um retângulo colado sobre o Hero escuro e sobre o footer claro, com aspecto pouco profissional.

A solução não é CSS — é substituir o asset por um PNG real com transparência (RGBA) e ajustar o enquadramento para que a marca tenha respiro consistente.

## O que será feito

1. **Gerar nova logomarca em PNG transparente (RGBA)**
   - Reaproveitar a logo atual como referência via `imagegen--edit_image`, removendo qualquer fundo e exportando em PNG transparente.
   - Enquadramento apertado em volta do símbolo + wordmark, com pequena margem uniforme (sem áreas mortas que aumentem a "caixa" visual).
   - Salvar em `src/assets/logo-prolav.png` (mesmo caminho — sem mudanças de import).
   - Validar via Python/PIL que o arquivo é `RGBA` e que os cantos têm alpha = 0.

2. **Refinos finos de aplicação (Header e Footer)**
   - `Header.tsx`: trocar `gap-2` por `gap-3`, manter `h-14 md:h-16`, e adicionar `select-none` + `draggable={false}` na `<img>` para tratamento mais profissional.
   - `Footer.tsx`: manter `h-14`, adicionar `select-none` e alinhar verticalmente com o texto.
   - Nenhuma alteração de cor, gradiente, layout de seções ou conteúdo.

3. **QA visual**
   - Verificar a logo isolada (nova versão) em fundo escuro e em fundo claro para confirmar que não há halo, borda branca ou retângulo residual.

## Fora de escopo

- Criar versão monocromática branca (usuário recusou).
- Alterar Hero, cores da marca, tipografia ou demais seções.
- Mudar a estrutura de navegação / rotas.
