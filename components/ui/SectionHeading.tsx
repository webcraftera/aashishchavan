interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  number?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  number,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
          {number && (
            <span className="font-mono text-xs text-accent">{number}</span>
          )}
          <span className="h-px w-8 bg-accent/40" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
