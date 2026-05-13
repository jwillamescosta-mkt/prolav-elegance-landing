import { useRef, useState } from "react";

type Props = {
  beforeLabel?: string;
  afterLabel?: string;
  beforeClass?: string;
  afterClass?: string;
};

export function BeforeAfterSlider({
  beforeLabel = "Antes",
  afterLabel = "Depois",
  beforeClass = "bg-gradient-to-br from-muted-foreground/40 to-muted-foreground/10",
  afterClass = "bg-gradient-to-br from-accent to-accent-glow",
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl shadow-elegant"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After (background) */}
      <div className={`absolute inset-0 ${afterClass}`}>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
          {afterLabel}
        </span>
      </div>
      {/* Before (clipped) */}
      <div
        className={`absolute inset-0 ${beforeClass}`}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <span className="absolute left-4 top-4 rounded-full bg-foreground/80 px-3 py-1 text-xs font-semibold text-background">
          {beforeLabel}
        </span>
      </div>
      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 cursor-ew-resize bg-white shadow-glow"
        style={{ left: `${pos}%` }}
        onMouseDown={(e) => handleMove(e.clientX)}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-elegant">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparar antes e depois"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
