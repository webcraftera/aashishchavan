import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Aashish",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#020408",
    theme_color: "#020408",
    lang: "en-US",
    categories: ["technology", "portfolio", "business"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Contact Aashish",
        short_name: "Contact",
        description: "Get in touch with Aashish Chavan",
        url: "/#contact",
        icons: [{ src: "/favicon.ico", sizes: "32x32" }],
      },
      {
        name: "View Work",
        short_name: "Work",
        description: "See projects and expertise",
        url: "/#work",
        icons: [{ src: "/favicon.ico", sizes: "32x32" }],
      },
    ],
  };
}
