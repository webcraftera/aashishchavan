import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusAreas = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Flask",
  "MongoDB",
  "GitHub",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                number="01"
                eyebrow="About"
                title="About Me"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                <p>
                  I&apos;m <span className="font-semibold text-foreground">Aashish Chavan</span>, a Software Engineer, Software Developer, Flask Developer, and the <span className="font-semibold text-foreground">CEO of WEBCRAFTERA LLP</span>.
                </p>
                <p>
                  I&apos;m passionate about building modern, scalable, and user-focused digital solutions. My work combines software engineering, web development, and emerging technologies such as <span className="font-semibold text-foreground">Artificial Intelligence and Machine Learning</span> to create practical products and impactful experiences.
                </p>
                <p>
                  My technical expertise includes <span className="font-semibold text-foreground">React, Next.js, TypeScript, Tailwind CSS, Node.js, Flask, MongoDB, and GitHub</span>. I enjoy working across the full development lifecycle—from designing intuitive interfaces and developing robust backend systems to building scalable applications and turning ideas into real-world products.
                </p>
                <p>
                  As the founder and CEO of <span className="font-semibold text-foreground">WEBCRAFTERA LLP</span>, I&apos;m focused on technology, innovation, and creating solutions that help businesses grow through modern software and digital experiences.
                </p>
                <p className="border-l-2 border-accent/40 pl-4 italic text-foreground/90">
                  I believe in building with purpose, learning continuously, and turning ideas into technology that makes a difference.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center rounded-3xl border border-border-subtle bg-surface p-8 card-hover sm:p-10">
                <div className="relative h-44 w-44 overflow-hidden rounded-full ring-2 ring-border-subtle ring-offset-4 ring-offset-surface sm:h-52 sm:w-52">
                  <Image
                    src="/images/profile.png"
                    alt="Aashish Chavan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-6 text-xl font-bold tracking-tight">Aashish Chavan</p>
                <p className="mt-1 text-sm text-text-secondary">CEO, WEBCRAFTERA LLP</p>

                <h3 className="mt-10 w-full font-mono text-xs uppercase tracking-[0.2em] text-text-tertiary">
                  Focus Areas
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-lg border border-border-subtle bg-surface-2 px-3 py-1.5 text-sm text-text-secondary transition-all hover:border-accent/30 hover:text-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div className="mt-8 w-full space-y-4 border-t border-border-subtle pt-6">
                  {[
                    { label: "Full-Stack Development", value: "Frontend to backend, end to end" },
                    { label: "AI & Machine Learning", value: "Building intelligent solutions" },
                    { label: "Product Development", value: "From idea to production" },
                    { label: "Technology Leadership", value: "Founder & CEO, WEBCRAFTERA LLP" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-sm text-text-secondary">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
