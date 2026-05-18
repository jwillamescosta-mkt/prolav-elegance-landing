import { ShieldCheck, Leaf, Award } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const pillars = [
  { icon: ShieldCheck, title: "Confiança", desc: "Equipe treinada, processos seguros e produtos certificados." },
  { icon: Leaf, title: "Renovação", desc: "Tecnologia que devolve frescor e prolonga a vida dos seus estofados." },
  { icon: Award, title: "Premium", desc: "Padrão de excelência para clientes que valorizam qualidade." },
];

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="quem-somos" aria-labelledby="quem-somos-heading" className="relative gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          ref={ref}
          className={`grid gap-12 md:grid-cols-2 md:items-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Quem Somos</span>
            <h2 id="quem-somos-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Especialistas em transformar ambientes
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A PROLAV nasceu em Maceió com uma missão clara: elevar o padrão da higienização
              de estofados. Combinamos tecnologia, produtos premium e cuidado artesanal para
              entregar um resultado que se vê — e se sente — em cada fibra.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Atendemos famílias e empresas que valorizam um lar saudável, livre de ácaros,
              fungos e bactérias, sem abrir mão da estética e do conforto.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-foreground">{p.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow shadow-elegant" />
              <div className="mt-12 aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-glow shadow-elegant" />
              <div className="col-span-2 aspect-[16/7] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-glow to-accent shadow-elegant" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
