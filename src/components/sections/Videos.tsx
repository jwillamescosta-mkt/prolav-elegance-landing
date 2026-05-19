import { VideoEmbed } from "@/components/VideoEmbed";
import { useInView } from "@/hooks/use-in-view";

type VideoItem = {
  src?: string;
  title: string;
  description: string;
};

// Substitua os `src` pelos links definitivos (YouTube, Vimeo ou .mp4).
const videos: VideoItem[] = [
  {
    src: "",
    title: "Higienização de sofá",
    description: "Veja o processo completo: extração, higienização e secagem.",
  },
  {
    src: "",
    title: "Impermeabilização premium",
    description: "Aplicação técnica que protege o tecido contra líquidos e manchas.",
  },
  {
    src: "",
    title: "Equipe PROLAV em campo",
    description: "Bastidores de um atendimento com padrão de excelência.",
  },
];

export function Videos() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Em movimento
          </span>
          <h2
            id="videos-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Veja a PROLAV em ação
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Resultados reais, capturados em vídeo nos serviços do dia a dia.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {videos.map((v) => (
            <article
              key={v.title}
              className="group overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <VideoEmbed src={v.src} title={v.title} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
