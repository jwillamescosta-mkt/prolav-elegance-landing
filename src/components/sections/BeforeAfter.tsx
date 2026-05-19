import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const items = [
  { title: "Sofá de tecido bege", before: "bg-gradient-to-br from-amber-900/40 to-stone-500/30", after: "bg-gradient-to-br from-amber-50 to-stone-100" },
  { title: "Colchão king", before: "bg-gradient-to-br from-stone-700/50 to-stone-400/40", after: "bg-gradient-to-br from-white to-blue-50" },
  { title: "Tapete persa", before: "bg-gradient-to-br from-rose-900/50 to-amber-800/40", after: "bg-gradient-to-br from-rose-100 to-amber-100" },
];

export function BeforeAfter() {
  return (
    <section id="antes-depois" aria-labelledby="antes-depois-heading" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Resultados</span>
          <h2 id="antes-depois-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Antes & Depois
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Arraste o controle e veja a transformação em cada projeto.
          </p>
        </div>

        <div className="mt-14">
          <Carousel opts={{ loop: true }} className="mx-auto max-w-4xl">
            <CarouselContent>
              {items.map((it) => (
                <CarouselItem key={it.title}>
                  <div className="px-1">
                    <BeforeAfterSlider beforeClass={it.before} afterClass={it.after} />
                    <p className="mt-4 text-center text-sm font-medium text-muted-foreground">{it.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
