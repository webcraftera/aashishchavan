"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (form.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Gmail Id",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "WhatsApp Number",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phoneHref}`,
    },
    {
      icon: MapPin,
      label: "Office Address",
      value: siteConfig.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                number="08"
                eyebrow="Contact"
                title="Let's Build Something Meaningful."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
                Have an idea, project, or technology challenge? Let&apos;s
                discuss how it can be turned into a practical digital solution.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group flex items-start gap-4 rounded-xl border border-border-subtle bg-surface p-4 card-hover">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-text-secondary transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-tertiary">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium transition-colors hover:text-accent break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium break-words leading-relaxed">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 card-hover"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Name"
                    error={errors.name}
                    htmlFor="name"
                  >
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClass(errors.name)}
                      aria-invalid={!!errors.name}
                    />
                  </FormField>

                  <FormField
                    label="Email"
                    error={errors.email}
                    htmlFor="email"
                  >
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@example.com"
                      className={inputClass(errors.email)}
                      aria-invalid={!!errors.email}
                    />
                  </FormField>
                </div>

                <div className="mt-5">
                  <FormField
                    label="Subject"
                    error={errors.subject}
                    htmlFor="subject"
                  >
                    <input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      className={inputClass(errors.subject)}
                      aria-invalid={!!errors.subject}
                    />
                  </FormField>
                </div>

                <div className="mt-5">
                  <FormField
                    label="Message"
                    error={errors.message}
                    htmlFor="message"
                  >
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell me about your project or idea..."
                      className={`${inputClass(errors.message)} resize-none`}
                      aria-invalid={!!errors.message}
                    />
                  </FormField>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 ring-1 ring-accent/20 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Message sent successfully. I&apos;ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

function inputClass(error?: string): string {
  return `w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-text-tertiary transition-all focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 ${
    error ? "border-red-500/50" : "border-border-subtle"
  }`;
}
