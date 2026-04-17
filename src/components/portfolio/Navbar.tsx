import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Languages, Moon, Sun } from "lucide-react";
import { useApp } from "./AppContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang, theme, setTheme } = useApp();

  const links = [
    { id: "work", label: t("nav.work") },
    { id: "about", label: t("nav.about") },
    { id: "stack", label: t("nav.stack") },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-hairline px-3 py-2.5 backdrop-blur-xl transition-all duration-500 sm:px-5 sm:py-3 ${
          scrolled
            ? "bg-background/70 shadow-[0_8px_32px_-12px_oklch(0_0_0/0.4)]"
            : "bg-background/30"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 font-display text-sm font-bold text-primary">
            LT
            <span className="absolute inset-0 rounded-md ring-1 ring-primary/30 transition-all group-hover:ring-primary/60" />
          </span>
          <span className="hidden text-sm font-medium text-foreground/80 sm:block">
            Leo Trencev
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setLang(lang === "en" ? "mk" : "en")}
            aria-label="Toggle language"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-hairline bg-surface/40 px-3 text-xs font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "en" ? "EN" : "MK"}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface/40 text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#contact"
            className="group ml-1 hidden items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t("nav.available")}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
