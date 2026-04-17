import { motion } from "framer-motion";
import { Rocket, Users, Layers, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useApp } from "./AppContext";
import type { TKey } from "./AppContext";

const items: { icon: typeof Rocket; tKey: TKey; bKey: TKey }[] = [
  { icon: Rocket, tKey: "proof.1.t", bKey: "proof.1.b" },
  { icon: Users, tKey: "proof.2.t", bKey: "proof.2.b" },
  { icon: Layers, tKey: "proof.3.t", bKey: "proof.3.b" },
  { icon: Sparkles, tKey: "proof.4.t", bKey: "proof.4.b" },
];

export function Proof() {
  const { t } = useApp();
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="04"
          eyebrow={t("proof.eyebrow")}
          title={
            <>
              {t("proof.title.a")}
              <span className="text-accent-gradient">{t("proof.title.b")}</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.tKey}
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
                  {t(it.tKey)}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {t(it.bKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
