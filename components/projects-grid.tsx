"use client";

import Link from "next/link";
import { projects } from "@/lib/constants";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";

export function ProjectsGrid() {
  return (
    <section id="proyectos" className="container py-16 md:py-20">
      <Reveal>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Proyectos</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Selección de trabajos con enfoque en claridad, estética y resultados.
            </p>
          </div>

          <Button asChild variant="outline" className="rounded-full">
            <Link href="/proyectos">Ver todos</Link>
          </Button>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((p, i) => (
          <Reveal key={p.id} delay={i * 0.03}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

