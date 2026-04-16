import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import avatar from "@/assets/avatar-leo.png";
import heroGlow from "@/assets/hero-glow.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const word = (text: string, delay = 0) =>
    text.split(" ").map((w, i) => (
      <span key={i} className="inline-block overflow-hidden pb-[0.15em] pr-[0.25em]">
        <motion.span
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.06,
          }}
          className="inline-block"
        >
          {w}
        </motion.span>
      </span>
    ));

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      {/* Backdrop layers */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroGlow}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 grid-bg opacity-50 reveal-mask" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12">
        {/* LEFT */}
        <motion.div style={{ y: yText, opacity }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Software Engineering Student · FINKI · Year 3
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight">
            <span className="block text-gradient">{word("Leo", 0.3)}</span>
            <span className="block text-foreground">{word("Trencev.", 0.5)}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I build modern web products and real-world applications — from
            collaborative engineering systems to polished business sites that
            ship and perform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-primary-glow transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">View Projects</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-surface"
            >
              <Mail className="h-4 w-4" />
              Contact me
            </a>
            <a
              href="https://github.com/LeoTrencev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Avatar */}
        <motion.div
          style={{ y: yAvatar }}
          className="relative lg:col-span-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[460px]"
          >
            {/* Backplate glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_195/0.35)_0%,transparent_65%)] blur-2xl" />
            {/* Conic ring */}
            <div className="absolute inset-6 rounded-full bg-[conic-gradient(from_180deg,transparent,oklch(0.78_0.13_195/0.4),transparent)] opacity-60 blur-xl" />
            {/* Hairline ring */}
            <div className="absolute inset-10 rounded-full border border-primary/20" />
            <div className="absolute inset-16 rounded-full border border-hairline" />

            <div className="relative h-full w-full animate-float">
              <img
                src={avatar}
                alt="Leo Trencev avatar"
                width={1024}
                height={1024}
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_30px_60px_oklch(0_0_0/0.6)]"
              />
              {/* Blink overlay — small dark rectangles over the eyes */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <span className="absolute left-[40%] top-[34%] h-[2.2%] w-[6%] origin-center animate-blink rounded-full bg-[#0a0d10]" />
                <span
                  className="absolute right-[35%] top-[34%] h-[2.2%] w-[6%] origin-center animate-blink rounded-full bg-[#0a0d10]"
                  style={{ animationDelay: "0.05s" }}
                />
              </div>
            </div>

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="absolute -left-2 top-12 hidden items-center gap-2 rounded-full border border-hairline bg-surface-elevated/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              React · TS
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute -right-2 bottom-20 hidden items-center gap-2 rounded-full border border-hairline bg-surface-elevated/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Full-stack
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
