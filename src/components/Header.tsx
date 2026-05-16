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
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="PROLAV Higienização & Estética"
            draggable={false}
            className="h-10 w-auto select-none md:h-12"
          />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
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
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-105 md:inline-flex"
        >
          Solicitar orçamento
        </a>
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="glass mx-4 mb-3 rounded-2xl p-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5582000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground"
            >
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
