import { Droplets } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  src?: string;
  alt?: string;
  ratio?: number;
};

export function WaterproofMedia({
  src,
  alt = "Demonstração de impermeabilização: gotas de água escorrem sem penetrar no tecido",
  ratio = 1,
}: Props) {
  const isVideo = !!src && /\.(mp4|webm|mov)(\?|$)/i.test(src);

  return (
    <AspectRatio ratio={ratio}>
      {!src ? (
        <div className="flex h-full w-full items-center justify-center gradient-hero">
          <div className="flex flex-col items-center gap-3 text-white/90">
            <div className="flex h-16 w-16 animate-float items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-md">
              <Droplets className="h-7 w-7" aria-hidden="true" />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Demonstração em breve
            </span>
          </div>
        </div>
      ) : isVideo ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      )}
    </AspectRatio>
  );
}
