# Header: visibilidade da logo + Acessibilidade WCAG AA

## Problema observado
Nas screenshots: ao rolar, o header fica com fundo "glass" claro e a logo PROLAV (azul-marinho + verde sobre transparente) perde contraste — o "P" e o tagline somem contra o gradiente translúcido. No topo (hero escuro), a logo é legível mas pequena.

## Mudanças no Header (`src/components/Header.tsx`)

1. **Aumentar logo**: `h-10 md:h-12` → `h-12 md:h-14` (subtle, sem quebrar layout).
2. **Container com contraste sempre garantido**:
   - Envolver o `<img>` em um "badge" arredondado com fundo branco sólido + leve sombra: `bg-white rounded-xl px-3 py-1.5 shadow-card`.
   - Aplicar em ambos os estados (topo e scrolled) — fica como uma "placa" da marca, profissional e sempre legível tanto sobre o hero escuro quanto sobre o glass.
   - Padding interno respeita a área de respiro da logo.
3. **Estado scrolled**: trocar `glass` (muito translúcido) por `bg-background/95 backdrop-blur-md border-b border-border` — fundo quase sólido, melhor contraste para nav links e logo.
4. **Nav links no topo (hero)**: o branco atual `text-white/90` está OK (>4.5:1 sobre navy). Manter, mas garantir `focus-visible:ring-2 ring-accent ring-offset-2` em todos os links e botões.

## Acessibilidade WCAG 2.1 AA — varredura global

### Header / Navegação
- `<header>` já é landmark; adicionar `<nav aria-label="Principal">` no desktop e `aria-label="Menu mobile"` no mobile.
- Botão hamburger: adicionar `aria-expanded={open}` e `aria-controls="mobile-menu"`; o painel mobile recebe `id="mobile-menu"`.
- Adicionar **skip link** ("Pular para o conteúdo") no topo de `__root.tsx`, visível só com foco, indo para `#main`.

### Landmarks & estrutura
- `routes/index.tsx`: o `<main>` deve ter `id="main"` e ser único (já é).
- Cada `<section>` recebe `aria-labelledby` apontando para o H2 da seção.
- Garantir hierarquia de headings: 1× H1 (Hero), H2 por seção, H3 dentro.

### Contraste de cores (token review em `src/styles.css`)
- Verificar `--muted-foreground` (`oklch(0.52 0.03 255)` ≈ #5A6A7E) sobre `--background` branco: ~4.6:1 ✅ AA para texto normal. Manter.
- Texto branco sobre overlay do Hero: o `bg-black/30` atual pode não bastar em alguns gradientes. Aumentar para `bg-black/45` ou adicionar `text-shadow` já existente — validar com checker.
- Botão `bg-accent` (verde #1FCE8F) com `text-accent-foreground` (navy escuro): ~7:1 ✅.
- Badge "Higienização Premium em Maceió": texto branco sobre `glass-dark` (navy translúcido) — OK.

### Componentes interativos
- Todos os `<a>`/`<button>` ganham `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`.
- `WhatsAppFloat`: confirmar `aria-label="Falar no WhatsApp"` e tamanho mínimo 44×44px.
- Ícone-only buttons (Instagram/Facebook no Footer, menu mobile): já têm `aria-label` — auditar todos.
- `MouseBubbles`: marcar container com `aria-hidden="true"` e `pointer-events-none` (decorativo).

### Imagens
- `alt` descritivos em todas as `<img>`. Imagens puramente decorativas (blobs, bolhas) → `aria-hidden="true"` ou via CSS background.
- Logo no Header: `alt="PROLAV — Higienização & Estética"` (já está).

### Formulário (Contact)
- Cada `<Input>`/`<Textarea>` com `<Label htmlFor>` associado.
- Mensagens de erro com `aria-describedby` e `role="alert"`.
- `aria-required="true"` em campos obrigatórios.

### Motion & preferências do usuário
- Adicionar bloco global em `styles.css`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
  ```
- `useParallax` já respeita `prefers-reduced-motion` ✅.

### Idioma & meta
- `__root.tsx`: confirmar `<html lang="pt-BR">`.
- Garantir `<title>` único por rota (já está em `index.tsx`).

### Tap targets (mobile)
- Botões/links principais ≥ 44×44px. Ajustar `px-7 py-3.5` está OK; auditar ícones do Footer (`h-9 w-9` → `h-11 w-11` ou `min-h-11 min-w-11`).

## Fora de escopo
- Refatorar layouts/seções, mudar copy, alterar paleta da marca, criar versão monocromática da logo, alterar navegação (manter âncoras hash atuais).

## Validação
Após implementar: screenshot do header no topo e após scroll (desktop + mobile 375px) para confirmar contraste da logo, e checagem visual de focus rings em tab navigation.
