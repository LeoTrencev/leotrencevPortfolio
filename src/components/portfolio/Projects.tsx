import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import crypto from "@/assets/project-crypto.jpg";
import bakery from "@/assets/project-bakery.jpg";
import fitness from "@/assets/project-fitness.jpg";
import { useApp } from "./AppContext";
import type { TKey } from "./AppContext";

type Project = {
  id: string;
  number: string;
  title: string;
  catKey: TKey;
  year: string;
  sumKey: TKey;
  roleKey: TKey;
  stack: string[];
  image: string;
  live?: string;
  github?: string;
  align: "left" | "right";
};

const projects: Project[] = [
  {
    id: "crypto",
    number: "01",
    title: "CryptoLETERA",
    catKey: "p.crypto.cat",
    year: "2024",
    sumKey: "p.crypto.sum",
    roleKey: "p.crypto.role",
    stack: ["Python", "Microservices", "Docker", "Azure", "REST APIs", "LSTM"],
    image: crypto,
    align: "left",
  },
  {
    id: "bakery",
    number: "02",
    title: "Pekara Mal Odmor",
    catKey: "p.bakery.cat",
    year: "2024",
    sumKey: "p.bakery.sum",
    roleKey: "p.bakery.role",
    stack: ["TypeScript", "React", "Tailwind", "Vercel"],
    image: bakery,
    live: "https://pekaramalodmor.vercel.app",
    align: "right",
  },
  {
    id: "fitness",
    number: "03",
    title: "AlphaFitness",
    catKey: "p.fitness.cat",
    year: "2025",
    sumKey: "p.fitness.sum",
    roleKey: "p.fitness.role",
    stack: ["TypeScript", "React", "Tailwind", "Framer Motion"],
    image: fitness,
    live: "https://alphafitnessmk.vercel.app",
    align: "left",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const reversed = project.align === "right";
  const { t } = useApp();
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
        reversed ? "lg:[&>:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative lg:col-span-7">
        <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.13_195/0.18),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <motion.img
            src={project.image}
            alt={project.title}
            width={1280}
            height={800}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-hairline bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
            <span className="font-mono text-primary">{project.number}</span>
            {project.year}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-5">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">
          {t(project.catKey)}
        </div>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {t(project.sumKey)}
        </p>

        <div className="mt-6 border-t border-hairline pt-5">
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {t("work.role")}
          </div>
          <div className="mt-1.5 text-sm text-foreground/85">
            {t(project.roleKey)}
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-2.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {t("work.stack")}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-foreground/75"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:gap-3"
            >
              {t("work.live")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              <Github className="h-4 w-4" />
              {t("work.code")}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useApp();
  return (
    <section id="work" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="01"
          eyebrow={t("work.eyebrow")}
          title={
            <>
              {t("work.title.a")}
              <span className="text-accent-gradient">{t("work.title.b")}</span>
            </>
          }
          description={t("work.desc")}
        />

        <div className="space-y-28 sm:space-y-36">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
