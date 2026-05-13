import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80),
  email: z.string().trim().email("E-mail inválido").max(120),
  phone: z.string().trim().min(8, "Telefone inválido").max(20),
  message: z.string().trim().min(5, "Conte um pouco mais").max(800),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    reset();
  };

  return (
    <section id="contato" className="relative overflow-hidden gradient-hero py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div className="text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contato</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="mt-4 max-w-md text-white/80 md:text-lg">
            Solicite um orçamento sem compromisso. Respondemos em até 1 hora útil.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl glass-dark text-accent">
                <Phone className="h-4 w-4" />
              </div>
              <span className="text-white/90">(82) 0000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl glass-dark text-accent">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-white/90">contato@prolav.com.br</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl glass-dark text-accent">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-white/90">Maceió — Alagoas</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-3xl p-6 shadow-elegant md:p-8"
          noValidate
        >
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Nome</label>
              <input
                {...register("name")}
                className="mt-1 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                placeholder="Seu nome completo"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground">E-mail</label>
                <input
                  {...register("email")}
                  className="mt-1 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  placeholder="voce@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Telefone</label>
                <input
                  {...register("phone")}
                  className="mt-1 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  placeholder="(82) 99999-9999"
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Mensagem</label>
              <textarea
                {...register("message")}
                rows={4}
                className="mt-1 w-full resize-none rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                placeholder="Conte sobre seu projeto"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
