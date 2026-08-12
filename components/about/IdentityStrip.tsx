import { Reveal } from "@/components/ui/Reveal";

const identities = [
  "Software Engineering",
  "Backend Development",
  "Product Development",
  "Technology Leadership",
];

export function IdentityStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            {identities.map((item, i) => (
              <div key={item} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-text-tertiary/40 sm:block" />
                )}
                <span className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
