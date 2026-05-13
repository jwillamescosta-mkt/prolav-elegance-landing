import { useEffect, useRef } from "react";

type Bubble = {
  id: number;
  x: number;
  y: number;
  size: number;
  drift: number;
  duration: number;
};

export function MouseBubbles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastRef.current < 55) return;
      lastRef.current = now;

      const bubble: Bubble = {
        id: ++idRef.current,
        x: e.clientX,
        y: e.clientY,
        size: 8 + Math.random() * 18,
        drift: (Math.random() - 0.5) * 80,
        duration: 1800 + Math.random() * 1400,
      };

      const node = document.createElement("span");
      node.className = "pointer-events-none fixed rounded-full";
      node.style.left = `${bubble.x - bubble.size / 2}px`;
      node.style.top = `${bubble.y - bubble.size / 2}px`;
      node.style.width = `${bubble.size}px`;
      node.style.height = `${bubble.size}px`;
      node.style.background =
        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(0,217,163,0.35) 55%, rgba(27,58,95,0.15) 100%)";
      node.style.boxShadow = "inset 0 0 8px rgba(255,255,255,0.6), 0 0 12px rgba(0,217,163,0.25)";
      node.style.border = "1px solid rgba(255,255,255,0.4)";
      node.style.setProperty("--bx", `${bubble.drift}px`);
      node.style.animation = `bubble-rise ${bubble.duration}ms ease-out forwards`;
      node.style.zIndex = "9";
      el.appendChild(node);

      window.setTimeout(() => node.remove(), bubble.duration + 100);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={containerRef} aria-hidden className="pointer-events-none fixed inset-0 z-[9] overflow-hidden" />;
}
