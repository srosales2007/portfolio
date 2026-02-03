import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/constants";

import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section id="testimonios" className="container py-16 md:py-20">
      <Reveal>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Testimonios</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Opiniones (ficticias) para ejemplo. Sustitúyelas por reales cuando tengas.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.04}>
            <Card className="border-border/70 bg-card/70 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground">“{t.quote}”</p>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{t.name}</span> · {t.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
