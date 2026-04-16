import { motion } from "framer-motion";
import { Rocket, Users, Layers, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Rocket,
    title: "Real, shipped work",
    body: "Live business sites in production, not tutorial clones. Every project here is something you can open in a tab right now.",
  },
  {
    icon: Users,
    title: "Team-built systems",
    body: "I've worked inside collaborative codebases — microservices, branches, code review, deployment — not just solo experiments.",
  },
  {
    icon: Layers,
    title: "Both ends of the stack",
    body: "Comfortable from frontend craft and UI polish to backend services, data, and Docker-based deployment.",
  },
  {
    icon: Sparkles,
    title: "I learn fast & ship",
    body: "I move quickly, take feedback seriously, and put the work in to raise the bar on every next project.",
  },
];

export function Proof() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="04"
          eyebrow="What I bring"
          title={
            <>
              Proof over{" "}
              <span className="text-accent-gradient">promises.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-background p-8 transition-colors hover:bg-surface/40 sm:p-10"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-surface text-primary transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_30px_-8px_oklch(0.78_0.13_195/0.6)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {it.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
