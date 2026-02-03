import type { LucideIcon } from "lucide-react";
import {
  Figma,
  Layout,
  PenTool,
  Sparkles,
  Brush,
  Video,
  Zap,
  Globe,
  Mail,
  Phone,
  Linkedin,
  ExternalLink
} from "lucide-react";

export const site = {
  name: "Santiago Rosales Arceyut",
  title: "Diseñador UI/UX",
  tagline: "Creo experiencias digitales memorables",
  location: "San José, Costa Rica",
  email: "sarceyut2007@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/tunombre",
    behance: "https://behance.net/tunombre",
    dribbble: "https://dribbble.com/tunombre",
    whatsapp: "https://wa.me/50600000000"
  },
  bio:
    "Diseñador UI/UX apasionado por crear interfaces intuitivas. 5+ años de experiencia trabajando con startups en Latam. Me enfoco en sistemas de diseño, prototipado claro y experiencias que se sienten premium."
};

export type StackItem = { label: string; icon: LucideIcon };

export type Project = {
  id: string;
  title: string;
  description: string;
  cover: string;
  tags: string[];
  stack: StackItem[];
  role: string;
  problem: string;
  solution: string;
  results: string[];
  liveUrl?: string;
};

const stackIcons: Record<string, LucideIcon> = {
  Figma,
  "Design System": Layout,
  Branding: PenTool,
  "UI Motion": Sparkles,
  "Visual Design": Brush,
  "Video Editing": Video,
  "Landing Pages": Zap,
  Web: Globe
};

export const projects: Project[] = [
  {
    id: "atlas-crm",
    title: "Atlas CRM — Dashboard de ventas",
    description:
      "Rediseño de un panel para leads y pipeline con enfoque en jerarquía visual y velocidad de uso.",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tags: ["Dashboard", "UX", "Design System"],
    stack: [
      { label: "Figma", icon: stackIcons.Figma },
      { label: "Design System", icon: stackIcons["Design System"] },
      { label: "Visual Design", icon: stackIcons["Visual Design"] }
    ],
    role: "UX/UI Designer (end-to-end)",
    problem:
      "El dashboard anterior era confuso y lento: demasiada información, jerarquía débil, acciones repetidas con fricción.",
    solution:
      "Reorganicé IA, definí componentes, jerarquía y estados claros para reducir clicks y acelerar decisiones.",
    results: [
      "Menos fricción en tareas repetidas",
      "UI consistente y escalable",
      "Mejor lectura de métricas"
    ],
    liveUrl: "https://example.com"
  },
  {
    id: "bravo-landing",
    title: "Bravo Landing — Conversión premium",
    description:
      "Landing optimizada para captación con narrativa visual clara, CTAs estratégicos y micro-interacciones.",
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Landing", "CRO", "Brand"],
    stack: [
      { label: "Figma", icon: stackIcons.Figma },
      { label: "Branding", icon: stackIcons.Branding },
      { label: "UI Motion", icon: stackIcons["UI Motion"] }
    ],
    role: "UI Designer + Branding",
    problem: "La marca no transmitía confianza y la propuesta de valor se perdía en la página.",
    solution: "Diseñé un layout modular, copy guiado, prueba social y CTAs repetidos con intención.",
    results: ["Mejor claridad del mensaje", "Look & feel más confiable", "Secciones reusables para campañas"],
    liveUrl: "https://example.com"
  },
  {
    id: "nova-brand",
    title: "Nova — Brand kit + UI guidelines",
    description:
      "Sistema visual completo con tokens, tipografía, color y componentes base para escalar sin inconsistencias.",
    cover:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
    tags: ["Brand", "Guidelines", "System"],
    stack: [
      { label: "Branding", icon: stackIcons.Branding },
      { label: "Visual Design", icon: stackIcons["Visual Design"] },
      { label: "Figma", icon: stackIcons.Figma }
    ],
    role: "Brand + UI System",
    problem: "Crecimiento rápido generó deuda visual y falta de consistencia.",
    solution: "Definí reglas, tokens y componentes base para diseño y producto.",
    results: ["Consistencia visual", "Menos retrabajo", "Onboarding más rápido"]
  },
  {
    id: "pulse-mobile",
    title: "Pulse App — Prototipo mobile",
    description:
      "Prototipo interactivo con onboarding corto, navegación fluida y feedback visual inmediato.",
    cover:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
    tags: ["Mobile", "Prototype", "UX"],
    stack: [
      { label: "Figma", icon: stackIcons.Figma },
      { label: "UI Motion", icon: stackIcons["UI Motion"] },
      { label: "Landing Pages", icon: stackIcons["Landing Pages"] }
    ],
    role: "UX/UI + Prototyping",
    problem: "Usuarios abandonaban onboarding por pasos largos y poco claros.",
    solution: "Simplifiqué onboarding, mejoré jerarquía y diseñé micro-feedback.",
    results: ["Onboarding más corto", "Mejor percepción de calidad", "Transiciones más claras"]
  },
  {
    id: "studio-portfolio",
    title: "Studio Portfolio — Web minimal",
    description:
      "Portafolio para estudio creativo con grid limpio, enfoque tipográfico y motion sutil.",
    cover:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Portfolio", "Web", "UI"],
    stack: [
      { label: "Web", icon: stackIcons.Web },
      { label: "Figma", icon: stackIcons.Figma },
      { label: "Visual Design", icon: stackIcons["Visual Design"] }
    ],
    role: "UI Designer",
    problem: "Necesitaban mostrar trabajos sin saturar: faltaba orden y foco.",
    solution: "Grid simple, tipografía fuerte y motion suave para dirigir atención.",
    results: ["Presentación más clara", "Look premium", "Mejor lectura"]
  },
  {
    id: "content-motion",
    title: "Motion Pack — Reels & promos",
    description:
      "Plantillas para contenido con ritmo visual consistente, cortes y reglas de motion para elevar retención.",
    cover:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop",
    tags: ["Motion", "Content", "Premiere"],
    stack: [
      { label: "Video Editing", icon: stackIcons["Video Editing"] },
      { label: "Visual Design", icon: stackIcons["Visual Design"] },
      { label: "UI Motion", icon: stackIcons["UI Motion"] }
    ],
    role: "Editor + Motion Guidelines",
    problem: "Contenido inconsistente y sin ritmo; baja retención.",
    solution: "Definí plantillas, reglas de ritmo, cortes y estilo visual.",
    results: ["Mayor consistencia", "Más velocidad de producción", "Mejor percepción de marca"]
  }
];

export const skills = [
  { name: "Figma", value: 92 },
  { name: "Prototipado", value: 88 },
  { name: "Branding", value: 82 },
  { name: "Adobe Photoshop", value: 85 },
  { name: "Premiere Pro", value: 80 },
  { name: "Illustrator", value: 75 },
  { name: "After Effects", value: 68 }
];

export const socialLinks: { label: string; icon: LucideIcon; href: string }[] = [
  { label: "Email", icon: Mail, href: `mailto:${site.email}` },
  { label: "LinkedIn", icon: Linkedin, href: site.links.linkedin },
  { label: "WhatsApp", icon: Phone, href: site.links.whatsapp },
  { label: "Behance", icon: ExternalLink, href: site.links.behance }
];

export const testimonials = [
  {
    name: "María G.",
    role: "Founder, eCommerce",
    quote:
      "Santiago convirtió una idea difusa en una interfaz clara y moderna. El resultado se siente premium y fácil de usar.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Carlos R.",
    role: "Product Manager",
    quote:
      "Excelente criterio visual y enfoque en jerarquía. El sistema de componentes nos ahorró muchísimo tiempo.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Valentina S.",
    role: "Marketing Lead",
    quote:
      "La landing quedó preciosa y comunica perfecto. Las micro-interacciones elevan la experiencia sin exagerar.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Andrés P.",
    role: "CTO, Startup",
    quote:
      "Entrega ordenada, profesional y fácil de implementar. Se nota el cuidado en detalle y consistencia.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop"
  }
];
