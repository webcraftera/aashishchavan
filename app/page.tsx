import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { IdentityStrip } from "@/components/about/IdentityStrip";
import { About } from "@/components/about/About";
import { WhatIDo } from "@/components/what-i-do/WhatIDo";
import { TechStack } from "@/components/tech-stack/TechStack";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { Webcraftera } from "@/components/webcraftera/Webcraftera";
import { Projects } from "@/components/projects/Projects";
import { Expertise } from "@/components/expertise/Expertise";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IdentityStrip />
        <About />
        <WhatIDo />
        <TechStack />
        <Philosophy />
        <Webcraftera />
        <Projects />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
