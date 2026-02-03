import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/constants";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const chips = [
  "Figma",
  "Design Systems",
  "Prototipado",
  "Branding",
  "UI Motion",
  "Adobe Photoshop",
  "Premiere Pro",
  "UX Research (light)"
];

export function About() {
  return (
    <section id="sobre-mi" className="container py-16 md:py-20">
      <Reveal>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Sobre mí</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">{site.bio}</p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <Card className="border-border/70 bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle>Perfil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/about.jpg"
                  alt="Foto profesional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Ubicación: <span className="font-medium text-foreground">{site.location}</span>. Me enfoco en
                interfaces limpias, jerarquía clara y experiencias con detalle.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="border-border/70 bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle>Skills (chips)</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <Badge key={c} variant="secondary" className="bg-secondary text-secondary-foreground">
                  {c}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
