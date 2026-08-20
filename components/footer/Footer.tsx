import { SiInstagram, SiFacebook, SiX, SiGithub } from "react-icons/si";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { icon: SiInstagram, label: "Instagram", href: siteConfig.social.instagram },
  { icon: SiFacebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: SiX, label: "X", href: siteConfig.social.x },
  { icon: SiGithub, label: "GitHub", href: siteConfig.social.github },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 text-white" style={{ backgroundColor: "#101826" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/favicon.ico"
                alt="Aashish Chavan"
                width={28}
                height={28}
                className="rounded-full ring-1 ring-white/15"
              />
              <p className="text-lg font-semibold tracking-tight text-white">
                {siteConfig.name}
              </p>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              Software Engineer & CEO of WEBCRAFTERA LLP. Building modern web solutions with React, Next.js, Node.js, Flask, AI & Machine Learning. Turning ideas into innovative digital experiences.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/50 transition-all hover:border-accent/50 hover:bg-accent/20 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                  Gmail Id
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                  WhatsApp Number
                </p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                  Office Address
                </p>
                <p className="text-sm leading-relaxed text-white/60 break-words">
                  {siteConfig.location}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 Aashish Chavan  | All Rights Reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
