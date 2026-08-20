import { ArrowUpRight, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Webcraftera() {
  const companyUrl = siteConfig.company.url || "#";

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface p-8 sm:p-12 lg:p-16 card-premium">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-[0.1]" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/[0.04] blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">05</span>
                    <span className="h-px w-8 bg-accent/40" />
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                      Leadership
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                  Leading WEBCRAFTERA LLP
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                  As the CEO of WEBCRAFTERA LLP, Aashish combines software
                  engineering expertise with business leadership to build modern
                  digital solutions.
                </p>

                <div className="mt-8">
                  <Button
                    href={companyUrl}
                    variant="accent"
                    target={companyUrl !== "#" ? "_blank" : undefined}
                    rel={companyUrl !== "#" ? "noopener noreferrer" : undefined}
                    className="group"
                  >
                    Explore WEBCRAFTERA
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border-subtle bg-surface-2 p-6">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                    <span className="text-sm font-semibold">Company</span>
                    <span className="rounded-md bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-medium text-accent">
                      LLP
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Name", value: "WEBCRAFTERA LLP" },
                      { label: "Role", value: "CEO & Founder" },
                      { label: "Focus", value: "Digital Solutions" },
                      { label: "Location", value: "Maharashtra, India" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between gap-4 text-sm">
                        <span className="shrink-0 text-xs font-mono uppercase tracking-wider text-text-tertiary">{row.label}</span>
                        <span className="text-right text-sm font-semibold">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
