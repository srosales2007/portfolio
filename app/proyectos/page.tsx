import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/constants";
import { Reveal } from "@/components/motion/reveal";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProyectosPage() {
  return (
    <div className="container py-16">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight">Proyectos</h1>
          <p className="text-muted-foreground max-w-2xl">
            Vista detallada de mis trabajos. Contexto, decisiones de diseño y resultados.
          </p>
          <div className="h-px w-full bg-border" />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Reveal key={p.id} delay={0.04}>
            <Card className="overflow-hidden border-border/70 bg-card/70 backdrop-blur">
              <div className="relative aspect-[16/9]">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              </div>

              <CardHeader className="gap-2">
                <CardTitle className="text-xl">{p.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{p.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid gap-2 text-sm">
                  <div>
                    <span className="font-medium">Rol:</span>{" "}
                    <span className="text-muted-foreground">{p.role}</span>
                  </div>
                  <div>
                    <span className="font-medium">Problema:</span>{" "}
                    <span className="text-muted-foreground">{p.problem}</span>
                  </div>
                  <div>
                    <span className="font-medium">Solución:</span>{" "}
                    <span className="text-muted-foreground">{p.solution}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <div
                      key={s.label}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1 text-xs"
                    >
                      {(() => {
                      const Icon = s.icon;
                      return <Icon className="h-4 w-4 opacity-80" />;
                      })()}
                      {s.label}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="w-full sm:w-auto rounded-full">
                    <Link href="/#contacto">Contacto</Link>
                  </Button>

                  {p.liveUrl ? (
                    <Button asChild variant="outline" className="w-full sm:w-auto rounded-full">
                      <a href={p.liveUrl} target="_blank" rel="noreferrer">
                        Live demo
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full sm:w-auto rounded-full" disabled>
                      Live demo
                    </Button>
                  )}
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-semibold">Resultados</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {p.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
