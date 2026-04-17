import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useApp } from "./AppContext";
import type { TKey } from "./AppContext";

export function About() {
  const { t } = useApp();

  const facts: { k: TKey; v: TKey }[] = [
    { k: "about.f.age", v: "about.f.age.v" },
    { k: "about.f.based", v: "about.f.based.v" },
    { k: "about.f.studying", v: "about.f.studying.v" },
    { k: "about.f.year", v: "about.f.year.v" },
    { k: "about.f.focus", v: "about.f.focus.v" },
    { k: "about.f.open", v: "about.f.open.v" },
  ];

  return (
    <section id="about" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="02"
          eyebrow={t("about.eyebrow")}
          title={
            <>
              {t("about.title.a")}
              <span className="text-accent-gradient">{t("about.title.b")}</span>
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
            <p className="text-pretty text-foreground/90">{t("about.p1")}</p>
            <p className="text-pretty">{t("about.p2")}</p>
            <p className="text-pretty">{t("about.p3")}</p>
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
                    className="flex items-center justify-between gap-4 px-4 py-3.5"
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {t(f.k)}
                    </dt>
                    <dd className="text-right text-sm font-medium text-foreground">
                      {t(f.v)}
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
