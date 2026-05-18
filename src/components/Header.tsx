import { useEffect, useState } from "react";
import logo from "@/assets/logo-prolav.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#antes-depois", label: "Antes & Depois" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a
          href="#inicio"
          aria-label="PROLAV — ir para o início"
          className={`flex items-center rounded-2xl ${focusRing}`}
        >
          <span className="flex items-center rounded-2xl bg-white px-3 py-1.5 shadow-card ring-1 ring-black/5">
            <img
              src={logo}
              alt="PROLAV Higienização & Estética"
              draggable={false}
              className="h-11 w-auto select-none md:h-14"
            />
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-md px-1 py-1 text-sm font-medium transition-colors ${focusRing} ${
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent-glow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5582000000000"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden min-h-11 items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-105 md:inline-flex ${focusRing}`}
        >
          Solicitar orçamento
        </a>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-md md:hidden ${focusRing} ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="mx-4 mb-3 rounded-2xl border border-border bg-background p-4 shadow-card md:hidden">
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-3 text-sm font-medium text-foreground hover:bg-secondary ${focusRing}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5582000000000"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground ${focusRing}`}
            >
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
