import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { site } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Skills", href: "/#skills" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Contacto", href: "/#contacto" }
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/#inicio" className="font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-neko-navy px-2 py-1 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden sm:inline-flex rounded-full bg-neko-navy hover:bg-[#0B1D4A]"
          >
            <Link href="/#contacto">Contacto</Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

