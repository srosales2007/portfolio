import { PageTransition } from "@/components/motion/page-transition";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsGrid } from "@/components/projects-grid";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <ProjectsGrid />
      <Skills />
      <Testimonials />
      <Contact />
    </PageTransition>
  );
}
