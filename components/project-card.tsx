"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/constants";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <m.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Card className="group overflow-hidden border-border/70 bg-card/70 backdrop-blur">
          <div className="relative aspect-[16/10]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </div>

          <CardHeader className="gap-2">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.slice(0, 3).map((t) => (
                <Badge key={t} variant="secondary" className="bg-secondary text-secondary-foreground">
                  {t}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs"
                  >
                    <Icon className="h-4 w-4 opacity-80" />
                    {s.label}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2">
              <Button onClick={() => setOpen(true)} className="w-full rounded-full">
                Ver caso
              </Button>

              {project.liveUrl ? (
                <Button asChild variant="outline" className="w-full rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                </Button>
              ) : (
                <Button variant="outline" className="w-full rounded-full" disabled>
                  Live demo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </m.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[640px]">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5">
            <div className="grid gap-2 text-sm">
              <div>
                <span className="font-medium">Rol:</span>{" "}
                <span className="text-muted-foreground">{project.role}</span>
              </div>
              <div>
                <span className="font-medium">Problema:</span>{" "}
                <span className="text-muted-foreground">{project.problem}</span>
              </div>
              <div>
                <span className="font-medium">Solución:</span>{" "}
                <span className="text-muted-foreground">{project.solution}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Resultados</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {project.liveUrl ? (
                <Button asChild className="w-full sm:w-auto rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Abrir Live demo
                  </a>
                </Button>
              ) : (
                <Button className="w-full sm:w-auto rounded-full" disabled>
                  Abrir Live demo
                </Button>
              )}

              <Button variant="outline" className="w-full sm:w-auto rounded-full" onClick={() => setOpen(false)}>
                Cerrar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
