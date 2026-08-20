import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPhp,
  SiLaravel,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import {
  Monitor,
  Server,
  Brain,
  Sparkles,
  Database,
  GitBranch,
  Wrench,
  Bot,
  Boxes,
  Cloud,
  Workflow,
  Code2,
  Terminal,
  BookOpen,
  Cpu,
  Layers,
} from "lucide-react";
import type { ComponentType } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TechIcon = ComponentType<{ className?: string }>;

type TechItem = { name: string; icon: TechIcon };

type Category = {
  label: string;
  sublabel: string;
  icon: TechIcon;
  items: TechItem[];
};

const categories: Category[] = [
  {
    label: "Frontend",
    sublabel: "UI & Interfaces",
    icon: Monitor,
    items: [
      { name: "React.js",     icon: SiReact as TechIcon },
      { name: "Next.js",      icon: SiNextdotjs as TechIcon },
      { name: "TypeScript",   icon: SiTypescript as TechIcon },
      { name: "JavaScript",   icon: SiJavascript as TechIcon },
      { name: "Tailwind CSS", icon: SiTailwindcss as TechIcon },
      { name: "HTML5",        icon: SiHtml5 as TechIcon },
      { name: "CSS3",         icon: SiCss as TechIcon },
    ],
  },
  {
    label: "Backend",
    sublabel: "APIs & Services",
    icon: Server,
    items: [
      { name: "Node.js",    icon: SiNodedotjs as TechIcon },
      { name: "Express.js", icon: SiExpress as TechIcon },
      { name: "Python",     icon: SiPython as TechIcon },
      { name: "FastAPI",    icon: SiFastapi as TechIcon },
      { name: "PHP",        icon: SiPhp as TechIcon },
      { name: "Laravel",    icon: SiLaravel as TechIcon },
    ],
  },
  {
    label: "AI & ML",
    sublabel: "Intelligence Layer",
    icon: Brain,
    items: [
      { name: "Python",      icon: SiPython as TechIcon },
      { name: "NumPy",       icon: SiNumpy as TechIcon },
      { name: "Pandas",      icon: SiPandas as TechIcon },
      { name: "Scikit-learn",icon: SiScikitlearn as TechIcon },
      { name: "PyTorch",     icon: SiPytorch as TechIcon },
      { name: "TensorFlow",  icon: SiTensorflow as TechIcon },
    ],
  },
  {
    label: "Generative AI",
    sublabel: "LLMs & Agents",
    icon: Sparkles,
    items: [
      { name: "LLMs",               icon: Bot as TechIcon },
      { name: "Prompt Engineering",  icon: Cpu as TechIcon },
      { name: "RAG Pipelines",       icon: Layers as TechIcon },
      { name: "Embeddings",          icon: Boxes as TechIcon },
      { name: "AI Agents",           icon: Brain as TechIcon },
    ],
  },
  {
    label: "Databases",
    sublabel: "Data & Storage",
    icon: Database,
    items: [
      { name: "MongoDB",    icon: SiMongodb as TechIcon },
      { name: "PostgreSQL", icon: SiPostgresql as TechIcon },
      { name: "MySQL",      icon: SiMysql as TechIcon },
      { name: "Firebase",   icon: SiFirebase as TechIcon },
    ],
  },
  {
    label: "DevOps",
    sublabel: "Deploy & Scale",
    icon: GitBranch,
    items: [
      { name: "Git",            icon: SiGit as TechIcon },
      { name: "GitHub",         icon: SiGithub as TechIcon },
      { name: "Docker",         icon: SiDocker as TechIcon },
      { name: "Cloud Platforms",icon: Cloud as TechIcon },
      { name: "CI/CD",          icon: Workflow as TechIcon },
    ],
  },
  {
    label: "Tools",
    sublabel: "Workflow & Testing",
    icon: Wrench,
    items: [
      { name: "REST APIs", icon: Code2 as TechIcon },
      { name: "Postman",   icon: SiPostman as TechIcon },
      { name: "VS Code",   icon: Terminal as TechIcon },
    ],
  },
];

const learningItems = [
  "LangChain",
  "LLM Integration",
  "Kubernetes",
  "System Design",
  "Advanced ML",
  "Agentic AI",
];

const totalTechs = categories.reduce((acc, c) => acc + c.items.length, 0);

export function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <Reveal>
          <SectionHeading
            number="03"
            eyebrow="Tech Stack"
            title="Technologies I Work With"
            description="A comprehensive toolkit spanning frontend, backend, AI/ML, databases, DevOps, and beyond."
          />
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border-subtle pb-10">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold tracking-tight text-accent">
                {totalTechs}+
              </span>
              <span className="text-sm text-text-secondary">Technologies</span>
            </div>
            <div className="hidden h-4 w-px bg-border-subtle sm:block" />
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold tracking-tight">
                {categories.length}
              </span>
              <span className="text-sm text-text-secondary">Domains</span>
            </div>
            <div className="hidden h-4 w-px bg-border-subtle sm:block" />
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold tracking-tight">
                Full-Stack
              </span>
              <span className="text-sm text-text-secondary">Coverage</span>
            </div>
          </div>
        </Reveal>

        {/* Category cards grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.07}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">

                {/* Hover gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top shine line on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card header */}
                <div className="relative flex items-center justify-between border-b border-border-subtle px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-text-secondary ring-1 ring-border-subtle transition-all duration-300 group-hover:bg-accent-soft group-hover:text-accent group-hover:ring-accent/25">
                      <cat.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight">{cat.label}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                        {cat.sublabel}
                      </p>
                    </div>
                  </div>
                  <span className="flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-surface-2 px-2 font-mono text-[11px] font-semibold text-text-tertiary ring-1 ring-border-subtle transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent group-hover:ring-accent/20">
                    {cat.items.length}
                  </span>
                </div>

                {/* Tech pills */}
                <div className="relative flex flex-grow flex-wrap content-start gap-1.5 p-5">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/pill flex cursor-default items-center gap-1.5 rounded-lg border border-border-subtle bg-surface-2 px-2.5 py-1.5 transition-all duration-200 hover:border-accent/25 hover:bg-accent-soft hover:shadow-sm"
                    >
                      <item.icon className="h-3 w-3 shrink-0 text-text-tertiary transition-colors duration-200 group-hover/pill:text-accent" />
                      <span className="text-xs font-medium text-text-secondary transition-colors duration-200 group-hover/pill:text-accent">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Category index watermark */}
                <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-[11px] font-semibold text-text-tertiary/20 transition-opacity duration-300 group-hover:opacity-0">
                  {String(ci + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Exploring Now strip */}
        <Reveal delay={0.5}>
          <div className="relative mt-4 overflow-hidden rounded-2xl border border-accent/25 bg-accent-soft/25 px-5 py-5 sm:px-6">
            {/* Subtle shimmer */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex shrink-0 items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-accent">Exploring Now</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent/60">
                    Continuous Learning
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {learningItems.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 rounded-lg border border-accent/20 bg-background/60 px-3 py-1.5 backdrop-blur-sm"
                  >
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50"
                        style={{ animationDelay: `${i * 0.35}s` }}
                      />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="text-xs font-semibold text-accent">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
