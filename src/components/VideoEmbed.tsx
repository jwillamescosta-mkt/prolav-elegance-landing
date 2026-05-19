import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  src?: string;
  title: string;
  poster?: string;
};

function toEmbedUrl(src: string): string | null {
  // YouTube
  const yt = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  // Vimeo
  const vm = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?title=0&byline=0`;
  return null;
}

export function VideoEmbed({ src, title, poster }: Props) {
  if (!src) {
    return (
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center gradient-brand">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/40">
            <Play className="h-7 w-7 text-white" aria-hidden="true" />
          </div>
          <span className="sr-only">Vídeo em breve: {title}</span>
        </div>
      </AspectRatio>
    );
  }

  const embed = toEmbedUrl(src);

  if (embed) {
    return (
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={embed}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={16 / 9}>
      <video
        src={src}
        poster={poster}
        controls
        preload="metadata"
        className="h-full w-full object-cover"
      >
        <track kind="captions" />
      </video>
    </AspectRatio>
  );
}
