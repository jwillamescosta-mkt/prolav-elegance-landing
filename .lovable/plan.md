## Landing Page PROLAV

Landing page única, sofisticada e responsiva alinhada ao Brandbook (Royal Navy #1B3A5F, Tech Green #00D9A3, Structure Grey, Light Grey, tipografia Inter).

### Estrutura (single route `/` com âncoras + rotas auxiliares apenas se necessário)

1. **Header fixo** — logo PROLAV + menu (Início, Quem Somos, Serviços, Antes/Depois, Depoimentos, Contato) + CTA WhatsApp.
2. **Hero** — fundo escuro Royal Navy com gradient + glassmorphism card central, headline "Seu sofá novo de novo." + subheadline, CTA "Solicitar orçamento" e "Ver serviços". Imagem placeholder de alta qualidade.
3. **Quem Somos** — texto institucional + grid de imagens placeholder da equipe/operação, com efeito parallax leve no scroll.
4. **Serviços** — 3 cards (Sofás & Estofados, Colchões, Tapetes & Carpetes) com ícones Lucide, hover sutil, glass cards.
5. **Antes & Depois** — carrossel (Embla, já disponível em ui/carousel) com slider comparativo simples (divisor arrastável) entre duas imagens placeholder.
6. **Depoimentos** — carrossel/grid de 3–4 depoimentos, fade-in ao entrar no viewport.
7. **Contato** — formulário (nome, email, telefone, mensagem) com validação Zod + toast de sucesso (sem backend, apenas UI). Card glassmorphism. Info de contato placeholder ao lado.
8. **Footer** — logo, copyright, redes sociais.
9. **Botão flutuante WhatsApp** — fixo bottom-right, visível em todas as seções.

### Interatividade

- **Bolhas seguindo o mouse**: componente global `MouseBubbles` montado no root, gera bolhas SVG/CSS com gradiente azul→verde claro, opacidade baixa, animação de subida e fade. Throttled, desativado em `prefers-reduced-motion` e em telas mobile.
- **Parallax**: hook `useParallax` baseado em scroll Y aplicado a backgrounds das seções Hero e Quem Somos (translate Y suave).
- **Glassmorphism**: classe utilitária `.glass` em styles.css usando backdrop-blur + bg semitransparente + border sutil. Aplicado em Hero card, cards de serviço e card de contato.
- **Animações**: fade-in/scale-in via IntersectionObserver (hook `useInView`).

### Design system

- Atualizar `src/styles.css`: tokens em oklch correspondentes ao Brandbook (primary = Royal Navy, accent = Tech Green, muted = Structure/Light Grey), gradientes (`--gradient-brand`), sombras elegantes, `--glass-bg`, `--glass-border`. Importar Inter via Google Fonts.
- Logo PROLAV copiado para `src/assets/logo-prolav.png`.
- Sem custom colors em componentes — apenas tokens semânticos.

### Arquitetura técnica

- Rota única `src/routes/index.tsx` compondo seções como componentes em `src/components/sections/` (Hero, About, Services, BeforeAfter, Testimonials, Contact, Footer).
- Componentes compartilhados em `src/components/`: `Header`, `WhatsAppFloat`, `MouseBubbles`, `BeforeAfterSlider`.
- Hooks em `src/hooks/`: `useParallax`, `useInView`, `usePrefersReducedMotion`.
- Form com `react-hook-form` + `zod` (já instalados). Submit apenas exibe toast (Sonner).
- SEO: `head()` com title "PROLAV — Higienização & Estética Premium em Maceió", description, og tags.
- Responsivo mobile-first, container max-w-7xl, espaçamento generoso.

### Fora de escopo

- Backend / envio real do formulário (placeholder).
- Imagens reais (placeholders neutros conforme escolhido).
- Integração WhatsApp real — link `https://wa.me/55XXXXXXXXXXX` com placeholder.
