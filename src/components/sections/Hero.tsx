import { ArrowRight, Sparkles } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";

export function Hero() {
  const blobRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden gradient-hero"
    >
      <div ref={blobRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute right-0 top-1/2 h-[28rem] w-[28rem] rounded-full bg-primary-glow/15 blur-3xl" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center md:px-8">
        <div className="glass-dark inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs font-medium text-white animate-fade-in-up">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Higienização Premium em Maceió
        </div>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl animate-fade-in-up"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
        >
          Seu sofá <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(0,217,163,0.45)]">novo de novo</span>.
        </h1>
        <p
          className="mt-6 max-w-2xl text-pretty text-base text-white/95 md:text-lg animate-fade-in-up"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
        >
          Higienização profissional de estofados, colchões e tapetes com tecnologia
          exclusiva — eliminamos micro-organismos e devolvemos o frescor ao seu ambiente.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row animate-fade-in-up">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-105"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicos"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
          >
            Ver serviços
          </a>
        </div>

        <div className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-4 animate-fade-in-up">
          {[
            { v: "+500", l: "Estofados higienizados" },
            { v: "100%", l: "Produtos hipoalergênicos" },
            { v: "5★", l: "Avaliação dos clientes" },
          ].map((s) => (
            <div key={s.l} className="glass-dark rounded-2xl px-3 py-4 text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/70 md:text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
