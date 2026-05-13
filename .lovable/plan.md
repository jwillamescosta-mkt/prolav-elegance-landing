## Ajustes solicitados

### 1. Logomarca (Header e Footer)

- Gerar nova versão da logo PROLAV com **fundo transparente** via imagegen (PNG transparente), salvando em `src/assets/logo-prolav.png` (substitui a atual).
- Aumentar tamanho no `Header.tsx`: de `h-10` para `h-14 md:h-16`.
- Aumentar tamanho no `Footer.tsx`: de `h-10` para `h-14`.

### 2. Hero mais legível (`src/components/sections/Hero.tsx` + `styles.css`)

Problema atual: título branco sobre gradiente azul claro com blobs translúcidos — baixo contraste, principalmente no mobile (390px).

Mudanças:

- **Escurecer o fundo do Hero**: ajustar `--gradient-hero` para tons mais profundos de Royal Navy, e adicionar um overlay escuro sutil (`bg-black/30`) atrás do conteúdo.
- **Reforçar o título**: 
  - aumentar peso para `font-extrabold`
  - adicionar `drop-shadow-lg` / text-shadow customizado para destacar do fundo
  - manter o destaque "novo de novo" no verde Tech Green (accent), mas com glow mais forte
- **Subtítulo**: subir contraste de `text-white/80` para `text-white/95` e leve text-shadow.
- **Badge superior**: manter glassmorphism mas com borda accent mais visível.
- Garantir que blobs decorativos não passem por cima do texto (ajustar `z-index` e opacidade).  
- Mobile first.

### Fora do escopo

- Não mexer em outras seções, conteúdo ou estrutura.
- Sem alterações de backend/lógica.