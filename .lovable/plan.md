## Objetivo

Adicionar duas novas seções de mídia à landing page e modernizar a seção de depoimentos com carrossel deslizante automático.

---

## 1. Nova seção: Vídeos (`Videos.tsx`)

**Posição na página:** entre `BeforeAfter` e `Testimonials` — fluxo natural: resultado estático → resultado em movimento → prova social.

**Estrutura:**
- Eyebrow "Em movimento" + título "Veja a PROLAV em ação" + subtítulo curto.
- Grid responsivo de **3 cards de vídeo** (1 col mobile, 2 col tablet, 3 col desktop).
- Cada card: `AspectRatio 16:9`, borda arredondada `rounded-3xl`, `shadow-card` → `shadow-card-hover` no hover, leve `-translate-y-1`.
- Placeholder com play icon centralizado e gradiente `gradient-brand` enquanto o vídeo não é fornecido.
- Componente `<VideoEmbed src="" title="" />` preparado para receber:
  - YouTube/Vimeo (iframe responsivo com `loading="lazy"`, `allowfullscreen`, `title` descritivo).
  - MP4 self-hosted (tag `<video>` com `controls`, `preload="metadata"`, `poster`).
- Detecção automática do tipo via regex no `src` (youtube.com, youtu.be, vimeo.com → iframe; resto → `<video>`).
- Array `videos` no topo do arquivo, fácil de editar quando o usuário enviar os links:
  ```ts
  const videos = [
    { src: "", title: "Higienização de sofá", description: "..." },
    { src: "", title: "Impermeabilização", description: "..." },
    { src: "", title: "Equipe em campo", description: "..." },
  ];
  ```

**Acessibilidade:** `aria-labelledby`, `title` em iframes, `<track>` legenda opcional, foco visível nos cards.

---

## 2. Nova seção: Demo de Impermeabilização (`WaterproofDemo.tsx`)

**Posição:** logo após `Services` (ilustra visualmente o serviço que mais beneficia de prova animada).

**Layout split (2 colunas em desktop, empilhado mobile):**
- **Esquerda:** título "Impermeabilização que você vê funcionar", parágrafo explicando o teste da gota d'água, bullets curtos (repele líquidos, protege tecidos, secagem rápida), CTA secundário para WhatsApp.
- **Direita:** card `rounded-3xl shadow-elegant` com `AspectRatio 9:16` ou `1:1` segurando o GIF/vídeo curto:
  - Componente `<WaterproofMedia src="" />` que aceita `.gif`, `.webp` animado ou `.mp4` (auto-detecta extensão).
  - Para MP4: `<video autoplay muted loop playsinline>` (essencial para autoplay mobile).
  - Para GIF/WEBP: `<img>` com `loading="lazy"`.
  - Badge flutuante "Resultado real" sobre o canto com `glass` + accent.
  - Placeholder com gradiente animado + ícone de gota d'água enquanto o asset não é fornecido.

**Acessibilidade:** `alt` descritivo, `prefers-reduced-motion` desativa autoplay e mostra poster estático.

---

## 3. Refactor: Depoimentos com carrossel deslizante (`Testimonials.tsx`)

**Mudanças:**
- Mover array `testimonials` para arquivo dedicado `src/data/testimonials.ts` para facilitar adição futura (cada item: `name, role, quote, rating, avatar?`).
- Aumentar para 6 depoimentos iniciais (mantendo os 3 atuais + 3 novos plausíveis no mesmo tom).
- Substituir grid estático por **Embla Carousel** (já instalado, usado em `BeforeAfter`) com plugin **autoplay**:
  - `bun add embla-carousel-autoplay`
  - `loop: true`, `align: "start"`, `dragFree: true`
  - Plugin Autoplay: `delay: 4000ms`, `stopOnInteraction: false`, `stopOnMouseEnter: true`.
- Slides responsivos: 1 card mobile, 2 tablet, 3 desktop (via `basis-full md:basis-1/2 lg:basis-1/3`).
- Animação moderna:
  - Transição suave com `ease-brand` cubic-bezier já no design system.
  - Cards inativos com `opacity-60 scale-95` e card ativo `opacity-100 scale-100` usando `api.on("select")` para tracking do índice.
  - Hover em card: `-translate-y-2` + `shadow-card-hover`.
- Indicadores de progresso (dots) abaixo do carrossel, clicáveis, com estado ativo em `bg-accent`.
- Setas `CarouselPrevious/Next` reposicionadas (visíveis no desktop, ocultas no mobile — gesto de arrastar).
- Respeitar `prefers-reduced-motion`: desabilita autoplay automaticamente.

**Acessibilidade:**
- `aria-roledescription="carousel"` já vem do componente Carousel.
- `aria-live="polite"` no container de slides.
- Botão "Pausar/Reproduzir" autoplay com `aria-pressed`.
- Foco visível nos dots e setas.

---

## 4. Integração final

- `src/routes/index.tsx`: importar e posicionar:
  ```
  Hero → About → Services → WaterproofDemo → BeforeAfter → Videos → Testimonials → Contact → Footer
  ```
- Adicionar links no `Header.tsx` se desejado (a confirmar — atualmente não há link para Antes/Depois; manter consistência).

---

## Fora de escopo

- Não vou inserir URLs de vídeos reais (aguardando do usuário).
- Não vou gerar/criar o GIF de impermeabilização (aguardando asset do usuário).
- Sem alteração de paleta, copy das outras seções, ou refactor de layouts existentes.
- Sem versão monocromática da logo.

---

## Arquivos a criar/editar

**Criar:**
- `src/components/sections/Videos.tsx`
- `src/components/sections/WaterproofDemo.tsx`
- `src/components/VideoEmbed.tsx`
- `src/components/WaterproofMedia.tsx`
- `src/data/testimonials.ts`

**Editar:**
- `src/components/sections/Testimonials.tsx` (refactor para carrossel)
- `src/routes/index.tsx` (ordem das seções)
- `package.json` (add `embla-carousel-autoplay`)
