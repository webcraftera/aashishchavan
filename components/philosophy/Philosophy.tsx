import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-[0.15]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="font-mono text-xs text-accent">04</span>
            <span className="h-px w-8 bg-accent/40" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
              Philosophy
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Build with purpose.
            <br />
            <span className="text-gradient-accent">Engineer with clarity.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            I believe great software is more than code—it is about understanding
            a problem, creating the right solution, and delivering an experience
            that people can depend on.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {["Quality", "Performance", "Usability", "Innovation"].map((value) => (
              <span
                key={value}
                className="rounded-full border border-border-subtle bg-surface/60 px-5 py-2 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all hover:border-accent/30 hover:text-foreground"
              >
                {value}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
