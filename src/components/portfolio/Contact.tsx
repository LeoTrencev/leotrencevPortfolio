import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "leotrencev@gmail.com";

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_195/0.18)_0%,transparent_70%)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Open to opportunities
        </div>

        <h2 className="text-balance font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-6xl md:text-8xl">
          Let's build{" "}
          <span className="text-accent-gradient italic">something</span>
          <br />
          worth shipping.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          Hiring, freelance projects, or just a good idea — I'd love to hear
          about it. The fastest way to reach me is email.
        </p>

        <div className="mt-12 inline-flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${email}`}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <span className="absolute inset-0 -translate-x-full bg-primary-glow transition-transform duration-500 group-hover:translate-x-0" />
            <Mail className="relative h-4 w-4" />
            <span className="relative">{email}</span>
            <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface/40 px-5 py-4 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-surface"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-primary" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://github.com/LeoTrencev"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5" />
          </a>
          <span className="h-4 w-px bg-hairline" />
          <a
            href="https://www.linkedin.com/in/leo-trenchev-2322623ba/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
