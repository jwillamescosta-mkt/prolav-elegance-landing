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

const fieldClass =
  "mt-1 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

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
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="relative overflow-hidden gradient-hero py-24 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div className="text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">Contato</span>
          <h2 id="contato-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="mt-4 max-w-md text-white/90 md:text-lg">
            Solicite um orçamento sem compromisso. Respondemos em até 1 hora útil.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <div aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl glass-dark text-accent-glow">
                <Phone className="h-4 w-4" />
              </div>
              <a href="tel:+5582000000000" className="text-white hover:text-accent-glow">(82) 0000-0000</a>
            </li>
            <li className="flex items-center gap-3">
              <div aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl glass-dark text-accent-glow">
                <Mail className="h-4 w-4" />
              </div>
              <a href="mailto:contato@prolav.com.br" className="text-white hover:text-accent-glow">contato@prolav.com.br</a>
            </li>
            <li className="flex items-center gap-3">
              <div aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl glass-dark text-accent-glow">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-white">Maceió — Alagoas</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-border bg-background p-6 shadow-elegant md:p-8"
          noValidate
          aria-labelledby="contato-heading"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="contato-nome" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Nome
              </label>
              <input
                id="contato-nome"
                type="text"
                autoComplete="name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contato-nome-erro" : undefined}
                {...register("name")}
                className={fieldClass}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p id="contato-nome-erro" role="alert" className="mt-1 text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contato-email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  E-mail
                </label>
                <input
                  id="contato-email"
                  type="email"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contato-email-erro" : undefined}
                  {...register("email")}
                  className={fieldClass}
                  placeholder="voce@email.com"
                />
                {errors.email && (
                  <p id="contato-email-erro" role="alert" className="mt-1 text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contato-telefone" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Telefone
                </label>
                <input
                  id="contato-telefone"
                  type="tel"
                  autoComplete="tel"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "contato-telefone-erro" : undefined}
                  {...register("phone")}
                  className={fieldClass}
                  placeholder="(82) 99999-9999"
                />
                {errors.phone && (
                  <p id="contato-telefone-erro" role="alert" className="mt-1 text-xs text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="contato-mensagem" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Mensagem
              </label>
              <textarea
                id="contato-mensagem"
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contato-mensagem-erro" : undefined}
                {...register("message")}
                rows={4}
                className={`${fieldClass} resize-none`}
                placeholder="Conte sobre seu projeto"
              />
              {errors.message && (
                <p id="contato-mensagem-erro" role="alert" className="mt-1 text-xs text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
