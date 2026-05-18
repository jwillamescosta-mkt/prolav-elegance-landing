import { Sofa, BedDouble, Layers, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Sofa,
    title: "Sofás & Estofados",
    desc: "Higienização profunda que remove manchas, ácaros e odores, devolvendo o aspecto de novo.",
  },
  {
    icon: BedDouble,
    title: "Colchões",
    desc: "Limpeza e sanitização que eliminam micro-organismos para um sono mais saudável.",
  },
  {
    icon: Layers,
    title: "Tapetes & Carpetes",
    desc: "Tratamento especializado para tecidos delicados, com secagem rápida e perfume suave.",
  },
];

export function Services() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="servicos" aria-labelledby="servicos-heading" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Serviços</span>
          <h2 id="servicos-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Cuidado especializado para cada superfície
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Soluções premium para o conforto e a saúde do seu lar ou empresa.
          </p>
        </div>

        <div ref={ref} className={`mt-14 grid gap-6 md:grid-cols-3 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {services.map((s) => (
            <div
              key={s.title}
              className="group glass relative overflow-hidden rounded-3xl p-7 shadow-elegant transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand text-primary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Solicitar
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
