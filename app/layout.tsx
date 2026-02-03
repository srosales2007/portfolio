import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MotionProvider } from "@/components/motion/motion-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { absoluteUrl } from "@/lib/utils";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`
  },
  description: `${site.title} en ${site.location}. ${site.tagline}`,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: `${site.tagline} · ${site.location}`,
    url: absoluteUrl("/"),
    siteName: site.name,
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: `${site.name} OpenGraph`
      }
    ],
    locale: "es_CR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
    images: [absoluteUrl("/og.png")]
  },
  alternates: {
    canonical: absoluteUrl("/")
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionProvider>
            <div className="min-h-dvh bg-background text-foreground">
              <Navbar />
              <main className="pt-16">{children}</main>
              <Footer />
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
