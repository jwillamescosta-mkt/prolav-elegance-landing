import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { MouseBubbles } from "@/components/MouseBubbles";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WaterproofDemo } from "@/components/sections/WaterproofDemo";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Videos } from "@/components/sections/Videos";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROLAV — Higienização & Estética Premium em Maceió" },
      {
        name: "description",
        content:
          "Higienização profissional de sofás, colchões e tapetes em Maceió. Tecnologia premium, equipe especialista e resultado que transforma seu ambiente.",
      },
      { property: "og:title", content: "PROLAV — Higienização & Estética Premium" },
      {
        property: "og:description",
        content: "Seu sofá novo de novo. Higienização premium para sua casa ou empresa.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="main" className="relative">
      <MouseBubbles />
      <Header />
      <Hero />
      <About />
      <Services />
      <WaterproofDemo />
      <BeforeAfter />
      <Videos />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <Toaster richColors position="top-right" />
    </main>
  );
}
