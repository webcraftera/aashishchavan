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
import { Code2, Cloud, Workflow, Boxes, Brain, Sparkles, Terminal, Bot } from "lucide-react";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TechItem = { name: string; icon: IconType };

const categories: { label: string; items: TechItem[] }[] = [
  {
    label: "Frontend Development",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    label: "Backend Development",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
    ],
  },
  {
    label: "AI & Machine Learning",
    items: [
      { name: "Python", icon: SiPython },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },
  {
    label: "Generative AI",
    items: [
      { name: "LLMs", icon: Bot },
      { name: "Prompt Engineering", icon: Sparkles },
      { name: "RAG", icon: Brain },
      { name: "Embeddings", icon: Boxes },
      { name: "Vector Databases", icon: Boxes },
      { name: "AI Agents", icon: Brain },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "DevOps & Deployment",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Cloud Platforms", icon: Cloud },
      { name: "CI/CD", icon: Workflow },
    ],
  },
  {
    label: "Tools & APIs",
    items: [
      { name: "REST APIs", icon: Code2 },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: Terminal },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="03"
            eyebrow="Tech Stack"
            title="Technologies I Work With"
            description="A comprehensive toolkit spanning frontend, backend, AI/ML, databases, DevOps, and beyond."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {categories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.05}>
              <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:gap-10">
                <div className="shrink-0 sm:w-44">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-tertiary">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-2.5 rounded-xl border border-border-subtle bg-surface px-4 py-2.5 card-hover"
                    >
                      <item.icon className="h-5 w-5 text-text-secondary transition-colors group-hover:text-accent" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
