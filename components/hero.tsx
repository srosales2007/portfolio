import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(60,93,177,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-neko-bg dark:bg-[hsl(var(--background))]" />
      </div>

      <div className="container py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  UI/UX · Freelance
                </Badge>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {site.location}
                </Badge>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  2026
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{site.name}</h1>

              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">{site.title}</span> — {site.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#proyectos">Ver trabajos</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#contacto">Contacto</a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Figma · Prototipado · Branding · Adobe Photoshop · Premiere Pro
              </p>

              <div className="pt-2">
                <Link href="/proyectos" className="text-sm text-neko-primary hover:underline">
                  Ver lista detallada de proyectos →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-emerald-500/10 to-violet-500/15 blur-2xl" />
              <div className="rounded-3xl border border-border bg-white/60 p-4 backdrop-blur dark:bg-white/5">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/avatar.jpg"
                    alt={`${site.name} portrait`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Reemplaza <code>/public/avatar.jpg</code> por tu foto.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
