import { Check, Droplets, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaterproofMedia } from "@/components/WaterproofMedia";
import { useInView } from "@/hooks/use-in-view";

// Substitua pelo arquivo final (.gif, .webp animado ou .mp4 de 3-5s).
const DEMO_SRC = "";

const benefits = [
  "Repele líquidos instantaneamente",
  "Protege tecidos sem alterar o toque",
  "Secagem rápida e sem cheiro residual",
];

export function WaterproofDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="impermeabilizacao"
      aria-labelledby="impermeabilizacao-heading"
      className="relative overflow-hidden bg-secondary py-24 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 ${
          inView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Droplets className="h-4 w-4" aria-hidden="true" />
            Impermeabilização
          </span>
          <h2
            id="impermeabilizacao-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Impermeabilização que você vê funcionar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Após o tratamento, líquidos formam gotas que deslizam pelo tecido — sem
            absorção, sem mancha. Proteção invisível, resultado visível.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button asChild size="lg" className="gradient-brand text-primary-foreground shadow-elegant">
              <a href="#contato">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Quero impermeabilizar
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-elegant ring-1 ring-border">
            <WaterproofMedia src={DEMO_SRC} ratio={1} />
          </div>
          <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-2 shadow-card">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Resultado real
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
