import { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Pause, Play, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: !prefersReducedMotion,
    }),
  );

  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (!api) return;
    setSnaps(api.scrollSnapList());
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const toggleAutoplay = useCallback(() => {
    const ap = autoplay.current;
    if (isPlaying) {
      ap.stop();
      setIsPlaying(false);
    } else {
      ap.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Depoimentos
          </span>
          <h2
            id="depoimentos-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Quem confia, recomenda
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Histórias reais de quem viveu a experiência PROLAV.
          </p>
        </div>

        <div className="relative mt-14">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start", dragFree: false }}
            plugins={prefersReducedMotion ? [] : [autoplay.current]}
            className="mx-auto"
            aria-label="Depoimentos de clientes"
          >
            <CarouselContent className="-ml-4" aria-live="polite">
              {testimonials.map((t, i) => {
                const isActive = i === selected;
                return (
                  <CarouselItem
                    key={t.name}
                    className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <figure
                      className={cn(
                        "glass h-full rounded-3xl p-7 shadow-card transition-all duration-500",
                        "hover:-translate-y-2 hover:shadow-card-hover",
                        isActive ? "scale-100 opacity-100" : "scale-[0.96] opacity-70",
                      )}
                      style={{ transitionTimingFunction: "var(--ease-brand)" }}
                    >
                      <div className="flex gap-0.5 text-accent" aria-label={`${t.rating ?? 5} de 5 estrelas`}>
                        {Array.from({ length: t.rating ?? 5 }).map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-sm font-bold text-primary-foreground">
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">
                            {t.name}
                          </div>
                          <div className="text-xs text-muted-foreground">{t.role}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious
              aria-label="Depoimento anterior"
              className="hidden md:flex -left-4 lg:-left-12"
            />
            <CarouselNext
              aria-label="Próximo depoimento"
              className="hidden md:flex -right-4 lg:-right-12"
            />
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar depoimento">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === selected}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === selected ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/50",
                  )}
                />
              ))}
            </div>

            {!prefersReducedMotion && (
              <button
                type="button"
                onClick={toggleAutoplay}
                aria-pressed={isPlaying}
                aria-label={isPlaying ? "Pausar rotação automática" : "Retomar rotação automática"}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
              >
                {isPlaying ? (
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
