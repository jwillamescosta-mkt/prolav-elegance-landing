import { Star } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    name: "Marina Albuquerque",
    role: "Cliente residencial",
    quote: "Meu sofá voltou a parecer novo. O atendimento foi impecável, do orçamento à entrega.",
  },
  {
    name: "Rafael Cavalcanti",
    role: "Empresário",
    quote: "Contratamos para o escritório inteiro. Profissionalismo e resultado acima da expectativa.",
  },
  {
    name: "Juliana Mendes",
    role: "Arquiteta",
    quote: "Indico para todos os meus clientes. Cuidado com cada peça e acabamento premium.",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-heading" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Depoimentos</span>
          <h2 id="depoimentos-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Quem confia, recomenda
          </h2>
        </div>

        <div ref={ref} className={`mt-14 grid gap-6 md:grid-cols-3 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass rounded-3xl p-7 shadow-elegant transition-transform hover:-translate-y-1"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-sm font-bold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
