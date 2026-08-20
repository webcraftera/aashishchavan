import {
  Code2,
  FlaskRound,
  Server,
  Globe,
  Blocks,
  Database,
  Plug,
  Rocket,
  Cpu,
  Layers,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const expertise = [
  { name: "Python", icon: Code2, category: "Language" },
  { name: "Flask", icon: FlaskRound, category: "Framework" },
  { name: "REST APIs", icon: Server, category: "Architecture" },
  { name: "Backend Development", icon: Cpu, category: "Engineering" },
  { name: "Web Applications", icon: Globe, category: "Development" },
  { name: "Software Architecture", icon: Blocks, category: "Design" },
  { name: "Database Integration", icon: Database, category: "Data" },
  { name: "API Integrations", icon: Plug, category: "Connectivity" },
  { name: "Product Development", icon: Rocket, category: "Product" },
  { name: "Technical Leadership", icon: Layers, category: "Leadership" },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="07"
            eyebrow="Expertise"
            title="Technical Capabilities"
            description="Deep expertise across the full software development lifecycle, from architecture to deployment."
          />
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {expertise.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.03}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface p-5 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-text-secondary transition-all duration-300 group-hover:bg-accent/15 group-hover:text-accent group-hover:shadow-md group-hover:shadow-accent/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-text-tertiary">
                      {item.category}
                    </p>
                  </div>
                </div>
                <span className="absolute right-4 top-4 font-mono text-[11px] font-semibold text-text-tertiary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
