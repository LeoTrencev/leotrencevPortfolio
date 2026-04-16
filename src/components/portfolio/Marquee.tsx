const items = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "Azure",
  "REST APIs",
  "Microservices",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-surface/30 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max marquee-track gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-2xl font-medium text-muted-foreground/60 sm:text-3xl"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
