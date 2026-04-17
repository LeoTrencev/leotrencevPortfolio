import { Github, Instagram, Linkedin } from "lucide-react";
import { useApp } from "./AppContext";

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-hairline px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 font-display text-sm font-bold text-primary">
            LT
          </span>
          <div>
            <div className="text-sm font-medium text-foreground">
              Leo Trencev
            </div>
            <div className="text-xs text-muted-foreground">
              {t("footer.role")}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/LeoTrencev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/leo-trenchev-2322623ba/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/leotrencev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Leo Trencev. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
