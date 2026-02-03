import { site, socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            {site.title} · {site.location}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2026 · Hecho con Next.js + Tailwind + Framer Motion
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {socialLinks.map((i) => {
            const Icon = i.icon;
            return (
              <a
                key={i.label}
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : undefined}
                rel={i.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm
                           text-foreground hover:bg-secondary transition"
              >
                <Icon className="h-4 w-4 opacity-80" />
                {i.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

