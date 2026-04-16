import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const facts = [
  { k: "Age", v: "21" },
  { k: "Based in", v: "North Macedonia" },
  { k: "Studying", v: "Software Engineering · FINKI" },
  { k: "Year", v: "3rd" },
  { k: "Focus", v: "Full-stack web · modern frontend" },
  { k: "Open to", v: "Internships · freelance · roles" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="02"
          eyebrow="About"
          title={
            <>
              A young engineer building{" "}
              <span className="text-accent-gradient">real things.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7"
          >
            <p className="text-pretty text-foreground/90">
              I'm Leo — a 21-year-old software engineering student at FINKI,
              currently in my 3rd year. I care about clean execution, real
              products, and the small details that separate a finished site
              from a great one.
            </p>
            <p className="text-pretty">
              My work spans both ends: collaborative technical projects with
              microservices and data pipelines, and polished business-facing
              sites delivered for real clients. I like working close to the
              user — but I'm just as happy reasoning about systems behind the
              scenes.
            </p>
            <p className="text-pretty">
              I'm focused on growing into a strong full-stack engineer,
              shipping more production work, and learning fast from the people
              I build with.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-hairline bg-surface/40 p-2 backdrop-blur-md">
              <dl className="divide-y divide-hairline">
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="flex items-center justify-between px-4 py-3.5"
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {f.k}
                    </dt>
                    <dd className="text-right text-sm font-medium text-foreground">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
