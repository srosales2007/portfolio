import { Reveal } from "@/components/motion/reveal";
import { socialLinks } from "@/lib/constants";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contacto" className="container py-16 md:py-20">
      <Reveal>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contacto</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            ¿Listo para construir algo limpio, moderno y fácil de usar? Escríbeme y te respondo.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Links rápidos</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              LinkedIn, Behance, email y WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((i) => {
                const Icon = i.icon;
                return (
                  <a
                    key={i.label}
                    href={i.href}
                    target={i.href.startsWith("http") ? "_blank" : undefined}
                    rel={i.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm
                               text-foreground hover:bg-secondary transition"
                  >
                    <Icon className="h-4 w-4 opacity-80" />
                    {i.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 text-xs text-muted-foreground">
              Tip: actualiza tus URLs en <code>lib/constants.ts</code>.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
