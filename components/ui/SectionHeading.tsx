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
        <div className={`flex items-center gap-3 mb-6 ${align === "center" ? "justify-center" : ""}`}>
          {number && (
            <span className="font-mono text-[11px] font-semibold text-accent tracking-wider">{number}</span>
          )}
          <span className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent" />
          <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent-soft px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
