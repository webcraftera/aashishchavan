"use client";

import { useEffect, useState } from "react";
import { Menu, X, Home, User, Code2, FolderOpen, Mail } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

const navIcons: Record<string, typeof Home> = {
  "#home": Home,
  "#about": User,
  "#expertise": Code2,
  "#work": FolderOpen,
  "#contact": Mail,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "navbar-scrolled border-b border-border-subtle shadow-sm"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2.5 text-base font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            <Image
              src="/favicon.ico"
              alt="Aashish Chavan"
              width={28}
              height={28}
              className="rounded-full ring-1 ring-border-subtle shrink-0"
            />
            <span className="truncate">{siteConfig.name}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-text-secondary transition-all hover:bg-surface-2 hover:text-foreground"
              >
                {(() => {
                  const Icon = navIcons[item.href];
                  return Icon ? <Icon className="h-4 w-4" /> : null;
                })()}
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button
                href="#contact"
                variant="accent"
                className="px-4 py-2"
              >
                Let&apos;s Talk
              </Button>
            </div>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-text-secondary transition-colors hover:bg-surface-2 hover:text-foreground md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 right-0 top-16 border-b border-border-subtle navbar-scrolled">
            <div className="flex flex-col gap-1 px-4 py-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-text-secondary transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  {(() => {
                    const Icon = navIcons[item.href];
                    return Icon ? <Icon className="h-4 w-4" /> : null;
                  })()}
                  {item.label}
                </a>
              ))}
              <Button
                href="#contact"
                variant="accent"
                className="mt-2 w-full"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
