import logo from "@/assets/logo-prolav.png";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <img src={logo} alt="PROLAV" draggable={false} className="h-10 w-auto select-none" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} PROLAV Higienização & Estética. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            <Facebook className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
