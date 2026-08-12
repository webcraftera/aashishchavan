"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid animate-grid opacity-[0.15]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/[0.07] blur-[140px] animate-pulse-glow" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-border-subtle bg-surface/60 px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium text-text-secondary">
                Software Engineer • Technology Entrepreneur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Building Technology.
              <br />
              <span className="text-gradient-accent">Leading Innovation.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              I&apos;m Aashish Chavan, a Software Engineer, Software Developer,
              Flask Developer, and CEO of WEBCRAFTERA LLP. I build practical,
              scalable, and reliable digital products that solve real-world
              problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href="#contact"
                variant="accent"
                className="group"
              >
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                href="#work"
                variant="secondary"
              >
                Explore My Work
              </Button>
            </motion.div>

            {/* CEO label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-3 text-sm text-text-secondary"
            >
              <span className="font-mono text-xs text-accent">{"//"}</span>
              <span>CEO — WEBCRAFTERA LLP</span>
              <span className="h-3 w-px bg-border-subtle" />
              <span className="text-text-tertiary">Kannad, Maharashtra</span>
            </motion.div>
          </div>

          {/* Profile card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mx-auto max-w-sm"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-surface card-hover">
                {/* Profile photo */}
                <Image
                  src="/images/profile.png"
                  alt="Aashish Chavan"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />

                {/* Terminal-style overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className="font-mono text-xs text-white/60">profile.png</span>
                  </div>

                  <div className="space-y-1 font-mono text-xs text-white/70">
                    <div><span className="text-accent">const</span> engineer = {"{"}</div>
                    <div className="pl-4">name: <span className="text-white/90">&apos;Aashish Chavan&apos;</span>,</div>
                    <div className="pl-4">role: <span className="text-white/90">&apos;CEO&apos;</span>,</div>
                    <div className="pl-4">company: <span className="text-white/90">&apos;WEBCRAFTERA&apos;</span>,</div>
                    <div className="pl-4">stack: <span className="text-white/90">[&apos;Python&apos;, &apos;Flask&apos;]</span>,</div>
                    <div className="text-accent">{"}"}</div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="font-mono text-xs text-white/50">~/aashishchavan</span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      available
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl border border-border-subtle p-3.5 shadow-xl animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                    <span className="font-mono text-xs font-semibold text-accent">AC</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Aashish Chavan</p>
                    <p className="text-xs text-text-secondary">Software Engineer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-tertiary transition-colors hover:text-foreground lg:flex"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
