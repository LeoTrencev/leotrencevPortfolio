import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML / CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Python", "REST APIs", "Java"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    label: "Tools / DevOps",
    items: ["Git", "Docker", "Docker Compose", "Azure", "Vercel", "Linux"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          eyebrow="Stack"
          title={
            <>
              Tools I reach for —{" "}
              <span className="text-accent-gradient">honest about it.</span>
            </>
          }
          description="A working stack I use across studies, side projects, and client work. No padding, no buzzwords."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-6 backdrop-blur-sm transition-colors hover:bg-surface/70"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {g.label}
                </h3>
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-hairline bg-background/40 px-2.5 py-1 font-mono text-[11px] text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
