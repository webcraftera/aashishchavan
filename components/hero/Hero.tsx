"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, MapPin, Code2, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const technologies = [
  "Python", "Flask", "React", "Next.js", "TypeScript",
  "Node.js", "MongoDB", "PostgreSQL", "Docker", "FastAPI",
  "TailwindCSS", "Git",
];

const currentlyLearning = [
  "LangChain",
  "LLM Integration",
  "Kubernetes",
  "System Design",
  "Advanced ML",
];

function StatCounter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let current = 0;
      const step = value / 40;
      const interval = setInterval(() => {
        current += step;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 35);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <div>
      <p className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        {count}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-1 text-xs text-text-tertiary">{label}</p>
    </div>
  );
}

function TerminalCode() {
  const lines = [
    {
      delay: 0.7,
      parts: [
        { text: "const ", cls: "text-accent/90" },
        { text: "engineer", cls: "text-blue-300/80" },
        { text: " = {", cls: "text-white/60" },
      ],
    },
    {
      delay: 1.0,
      parts: [
        { text: "  name: ", cls: "text-white/40" },
        { text: "'Aashish Chavan',", cls: "text-orange-300/80" },
      ],
    },
    {
      delay: 1.3,
      parts: [
        { text: "  role: ", cls: "text-white/40" },
        { text: "'CEO & Engineer',", cls: "text-orange-300/80" },
      ],
    },
    {
      delay: 1.6,
      parts: [
        { text: "  stack: ", cls: "text-white/40" },
        { text: "['Flask','React','AI'],", cls: "text-orange-300/80" },
      ],
    },
    {
      delay: 1.9,
      parts: [
        { text: "  status: ", cls: "text-white/40" },
        { text: "'available'", cls: "text-green-400/90" },
      ],
    },
    {
      delay: 2.2,
      parts: [{ text: "}", cls: "text-white/60" }],
    },
  ];

  return (
    <div className="space-y-0.5 font-mono text-[11px] leading-relaxed">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: line.delay }}
          className="flex flex-wrap"
        >
          {line.parts.map((part, j) => (
            <span key={j} className={part.cls}>
              {part.text}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yCard   = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-grid animate-grid opacity-[0.12]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Animated ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-48 top-1/3 h-[700px] w-[700px] max-w-[90vw] rounded-full bg-accent blur-[130px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute -right-48 bottom-1/3 h-[600px] w-[600px] max-w-[90vw] rounded-full bg-accent blur-[120px]"
      />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: yContent, opacity: fadeOut }}
        className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">

          {/* Left: text content */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 ring-1 ring-accent/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-accent">
                  Software Engineer • Technology Entrepreneur
                </span>
              </span>
            </motion.div>

            {/* Headline – slide in per line */}
            <motion.h1
              variants={itemVariants}
              className="mt-8 font-display text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]"
            >
              <motion.span
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Building Technology.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient-accent block"
              >
                Leading Innovation.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem]"
            >
              I&apos;m Aashish Chavan — Software Engineer, Flask Developer, and CEO
              of WEBCRAFTERA LLP. I build scalable, reliable digital products that
              solve real-world problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#contact" variant="accent" className="group">
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#work" variant="secondary">
                Explore My Work
              </Button>
            </motion.div>

            {/* Animated stat counters */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-border-subtle pt-8 sm:gap-6"
            >
              <StatCounter value={3}  suffix="+" label="Years Building"    delay={700}  />
              <StatCounter value={20} suffix="+" label="Projects Shipped"  delay={900}  />
              <StatCounter value={15} suffix="+" label="Technologies"      delay={1100} />
            </motion.div>

            {/* Tech stack pills – staggered pop-in */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
                {"// Tech Stack"}
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.82 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.05 + i * 0.055 }}
                    className="rounded-md border border-border-subtle bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Currently Learning */}
            <motion.div variants={itemVariants} className="mt-5">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
                {"// Currently Exploring"}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.82 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.75 + i * 0.07 }}
                    className="inline-flex items-center gap-1.5 rounded-md border border-accent/25 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent"
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: profile card */}
          <div className="lg:col-span-5">
            <motion.div
              style={{ y: yCard }}
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-sm"
            >
              {/* Pulsing glow ring behind card */}
              <motion.div
                animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -z-10 scale-110 rounded-3xl bg-accent/[0.09] blur-2xl"
              />

              {/* Card */}
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-surface shadow-2xl ring-1 ring-border-subtle">
                <Image
                  src="/images/profile.png"
                  alt="Aashish Chavan — Software Engineer & CEO"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/22 to-black/5" />

                {/* Terminal overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.65 }}
                      className="font-mono text-[10px] tracking-wide text-white/40"
                    >
                      engineer.ts
                    </motion.span>
                  </div>

                  <TerminalCode />

                  {/* Status bar */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="font-mono text-[10px] text-white/35">
                      ~/aashishchavan
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-green-400">
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-green-400"
                      />
                      available
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating card: Location (bottom-left, floats) */}
              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.65, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 left-2 sm:-left-7 glass rounded-2xl border border-border-subtle p-3 shadow-xl animate-float"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold leading-tight">Kannad, Maharashtra</p>
                    <p className="text-[10px] text-text-tertiary">India 🇮🇳</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card: Tech stack (top-right) */}
              <motion.div
                initial={{ opacity: 0, x: 18, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.65, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-4 right-2 sm:-right-7 glass rounded-2xl border border-border-subtle p-3 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                    <Code2 className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold leading-tight">Python & Flask</p>
                    <p className="text-[10px] text-text-tertiary">Core Stack</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating chip: CEO (bottom-right, spring pop) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.55, type: "spring", stiffness: 220, damping: 18 }}
                className="absolute -bottom-4 right-2 sm:-right-4 glass rounded-xl border border-accent/20 bg-accent-soft px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3 w-3 text-accent" />
                  <span className="text-[10px] font-bold text-accent">CEO, WEBCRAFTERA</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-tertiary transition-colors hover:text-foreground lg:flex"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
