import { Reveal } from "@/components/motion/reveal";
import { skills } from "@/lib/constants";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="container py-16 md:py-20">
      <Reveal>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Herramientas y fortalezas principales (ajusta porcentajes según tu nivel real).
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.03}>
            <Card className="border-border/70 bg-card/70 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{s.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-3 w-full rounded-full bg-secondary overflow-hidden border border-border">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.value}%</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
