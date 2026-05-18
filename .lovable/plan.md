
# Logo oficial PROLAV + Design System

## 1. Logo oficial (asset)

A imagem enviada (`user-uploads://ProLav.png`) é a versão oficial: símbolo "P" navy + curva verde com gota azul, ao lado do wordmark "PROLAV" (PRO navy / LAV verde) com tagline "Higienização & Estética".

Ações:
- Copiar para `src/assets/logo-prolav.png` (substitui o asset atual gerado por IA). Mantém todos os imports existentes (`@/assets/logo-prolav.png`) — zero refactor em `Header.tsx`/`Footer.tsx`.
- Criar também `src/assets/logo-prolav-mark.png` (somente o símbolo "P", recortado via PIL a partir do oficial) para usos compactos: favicon, WhatsApp float, mobile muito estreito, OG image quadrada.
- Copiar `public/favicon.png` a partir do mark, e referenciar no `__root.tsx` head.
- Validar com PIL: ambos RGBA, alpha=0 nos cantos, dimensões adequadas (logo full ~1920px largura, mark ~512×512).

Não será criada versão monocromática (decisão anterior do usuário). Sobre fundo escuro do Hero, a logo oficial colorida funciona porque o símbolo tem verde brilhante e o wordmark será trocado por uma variante com wordmark branco **apenas se necessário** — proposta: por padrão usamos a oficial em todos os contextos; se o "PRO" navy ficar pouco legível no Hero (não há logo no Hero hoje, só no Header sobre gradient), avaliamos.

## 2. Design System — tokens em `src/styles.css`

Hoje os tokens já existem mas estão dispersos. Vou consolidar e documentar uma paleta extraída diretamente da logo oficial, mais escalas de tipografia, espaçamento, raios, sombras, gradientes e animações.

### 2.1 Cores da marca (extraídas da logo)
- **Navy** `#152C5B` → `--brand-navy` (primary)
- **Green** `#1FCE8F` → `--brand-green` (accent)
- **Drop Blue** `#3FA9F5` → `--brand-blue` (highlight/detalhes)
- **Slate** `#5A6A7E` → `--brand-slate` (tagline / muted-foreground)

Todas re-expressas em `oklch()` e mapeadas para os tokens semânticos já existentes (`--primary`, `--accent`, `--primary-glow`, `--muted-foreground`, etc.), mais escalas `-50…-900` para cada cor da marca.

### 2.2 Gradientes
- `--gradient-brand`: navy → blue → green (diagonal 135°)
- `--gradient-hero`: navy profundo com glow verde + azul (mantém Hero atual, recalibrado para as cores oficiais)
- `--gradient-soft`: white → navy-50
- `--gradient-accent`: green → blue (CTAs secundários)

### 2.3 Tipografia
- Manter Inter como fonte principal.
- Escala de display tokenizada via `@theme`: `--text-display-1` (clamp 3rem–5rem), `--text-display-2`, `--text-h1…h4`, `--text-body`, `--text-caption`.
- Pesos: 400 / 500 / 600 / 700 / 800.
- Tracking e leading definidos por nível.

### 2.4 Espaçamento, raio, sombras
- Raios: `--radius` 0.875rem (mantém), mais `--radius-pill` 9999px.
- Sombras: `--shadow-elegant`, `--shadow-glow`, `--shadow-card`, `--shadow-card-hover`.
- Escala de seção: `--section-py` (clamp 4rem–8rem) e container `--container-px`.

### 2.5 Glass / efeitos
- Manter `.glass` e `.glass-dark` com tokens recalibrados para as cores oficiais.

### 2.6 Motion
- Keyframes existentes (`fade-in-up`, `float`, `bubble-rise`) ficam.
- Adicionar `--ease-brand: cubic-bezier(0.22, 1, 0.36, 1)` e `--duration-base: 600ms` para padronizar.

## 3. Aplicação consistente

- `Header.tsx`: logo oficial, `h-10 md:h-12`, `gap-3`, `select-none`, `draggable={false}` (já está assim — só troca o asset).
- `Footer.tsx`: idem, `h-10`.
- `WhatsAppFloat.tsx`: continua com ícone de WhatsApp (não usa logo).
- Favicon: novo, derivado do mark.
- Meta `og:image`: usar versão oficial (1200×630, fundo navy claro) — gerada via PIL a partir do logo oficial.

## 4. Fora de escopo
- Refazer layout das seções (Hero, About, Services, etc.) — apenas se algum token mudar tanto que quebre o visual, faço o ajuste mínimo correspondente.
- Versão branca monocromática da logo.
- Mudanças de copy ou estrutura de navegação.

## Detalhes técnicos
- `src/styles.css` será reorganizado em blocos comentados: `/* === Brand Palette === */`, `/* === Semantic Tokens === */`, `/* === Gradients === */`, `/* === Typography Scale === */`, `/* === Motion === */`, `/* === Utilities === */`.
- Conversão hex→oklch feita com `culori`/cálculo manual; valores fixados como literais oklch no CSS (sem dependência runtime).
- QA: após aplicar, abrir o preview em `/` e validar Header (logo nítida sobre gradient), Footer (logo nítida sobre branco) e responsivo mobile.
