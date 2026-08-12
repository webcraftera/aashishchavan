import {
  Code2,
  FlaskRound,
  Server,
  Globe,
  Blocks,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Building reliable and maintainable software systems.",
  },
  {
    icon: FlaskRound,
    title: "Python & Flask Development",
    description:
      "Developing scalable backend applications and APIs using Python and Flask.",
  },
  {
    icon: Server,
    title: "Backend & REST API Development",
    description: "Designing structured, secure, and efficient APIs.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Building modern, responsive, production-ready web applications.",
  },
  {
    icon: Blocks,
    title: "Software Architecture & Integrations",
    description: "Connecting systems and designing clean application architectures.",
  },
  {
    icon: Rocket,
    title: "Product Development & Technical Leadership",
    description:
      "Turning ideas into useful digital products while combining engineering and business thinking.",
  },
];

export function WhatIDo() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="What I Do"
            title="Capabilities"
            description="A focused set of engineering and development capabilities, built around practical outcomes."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 card-hover">
                <span className="absolute right-5 top-5 font-mono text-xs text-text-tertiary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/10">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
