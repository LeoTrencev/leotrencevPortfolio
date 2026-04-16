import { motion } from "framer-motion";

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="md:col-span-4"
      >
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="font-mono text-primary">{index}</span>
          <span className="h-px w-8 bg-hairline" />
          <span>{eyebrow}</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="md:col-span-8"
      >
        <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
