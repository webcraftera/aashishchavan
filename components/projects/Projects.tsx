import { FolderOpen, ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Project } from "@/lib/types";

const projects: Project[] = [];

export function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="06"
            eyebrow="Selected Work"
            title="Projects"
            description="A collection of work, built with engineering rigor and practical intent."
          />
        </Reveal>

        {projects.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border-subtle bg-surface/40 py-24 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-2 text-text-tertiary">
                <FolderOpen className="h-7 w-7" />
              </div>
              <p className="mt-6 text-lg font-semibold">New projects are being prepared.</p>
              <p className="mt-2 max-w-md text-sm text-text-secondary">
                Real work will be showcased here soon. Check back for updates.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface card-hover">
      {project.image && (
        <div className="relative aspect-video overflow-hidden border-b border-border-subtle">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-text-secondary">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub`}
                className="text-text-secondary transition-colors hover:text-foreground"
              >
                <SiGithub className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="text-text-secondary transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <h3 className="mt-4 text-base font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-subtle px-2 py-0.5 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Read case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
