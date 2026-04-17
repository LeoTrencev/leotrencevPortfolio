import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Proof } from "@/components/portfolio/Proof";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { AppProvider } from "@/components/portfolio/AppContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leo Trencev — Software Engineer & Web Developer" },
      {
        name: "description",
        content:
          "Leo Trencev — Software engineering student at FINKI building modern web products, full-stack apps, and polished business sites. Available for hire and freelance.",
      },
      { property: "og:title", content: "Leo Trencev — Software Engineer & Web Developer" },
      {
        property: "og:description",
        content:
          "Selected work, stack, and contact. Software engineering student building real things.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AppProvider>
      <main className="relative bg-background text-foreground">
        <LoadingScreen />
        <CursorGlow />
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Stack />
        <Proof />
        <Contact />
        <Footer />
      </main>
    </AppProvider>
  );
}
