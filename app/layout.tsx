import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Aashish Chavan",
    "Software Engineer",
    "Software Developer",
    "Flask Developer",
    "Python Developer",
    "Python Flask Developer",
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer",
    "Web Application Developer",
    "REST API Developer",
    "AI Developer",
    "Machine Learning Developer",
    "WEBCRAFTERA",
    "WEBCRAFTERA LLP",
    "CEO",
    "Technology Entrepreneur",
    "Tech CEO India",
    "Software Architecture",
    "Digital Solutions",
    "Maharashtra",
    "Kannad",
    "Chhatrapati Sambhajinagar",
    "Aurangabad Maharashtra",
    "India Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@aashish_chavan1",
    site: "@aashish_chavan1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.ico",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Kannad, Chhatrapati Sambhajinagar, Maharashtra, India",
    "geo.position": "20.0889;75.1391",
    ICBM: "20.0889, 75.1391",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020408" },
    { media: "(prefers-color-scheme: light)", color: "#f0f3fa" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      jobTitle: [
        "Software Engineer",
        "Software Developer",
        "Python Developer",
        "Flask Developer",
        "Full Stack Developer",
        "CEO",
        "Technology Entrepreneur",
      ],
      description:
        "Software Engineer, Full-Stack Developer, Flask Developer, and CEO of WEBCRAFTERA LLP. Expert in React, Next.js, Python, Flask, Node.js, AI & Machine Learning. Based in Maharashtra, India.",
      image: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/profile.png`,
        width: "600",
        height: "600",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Diamond Complex, Near Bus Stand Road, Kannad",
        addressLocality: "Kannad",
        addressRegion: "Maharashtra",
        postalCode: "431103",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Software Engineering",
        "Python",
        "Flask",
        "FastAPI",
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "Artificial Intelligence",
        "Machine Learning",
        "Backend Development",
        "Full Stack Development",
        "Web Application Development",
        "Product Development",
        "Technology Leadership",
        "Software Architecture",
        "Docker",
        "Git",
        "GitHub",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Engineer",
        occupationLocation: {
          "@type": "Country",
          name: "India",
        },
        skills:
          "Python, Flask, React.js, Next.js, TypeScript, Node.js, MongoDB, REST APIs, AI & ML, Docker, PostgreSQL",
      },
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        siteConfig.social.x,
        siteConfig.social.github,
      ],
      worksFor: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.company.name,
      url: siteConfig.company.url || siteConfig.url,
      description:
        "WEBCRAFTERA LLP is a technology company focused on modern digital solutions, web applications, software products, and AI-powered services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Diamond Complex, Near Bus Stand Road, Kannad",
        addressLocality: "Kannad",
        addressRegion: "Maharashtra",
        postalCode: "431103",
        addressCountry: "IN",
      },
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      areaServed: { "@type": "Country", name: "India" },
      founder: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description:
        "Official portfolio of Aashish Chavan — Software Engineer, CEO & Flask Developer.",
      publisher: { "@id": `${siteConfig.url}/#person` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: `${siteConfig.name} — Software Engineer & CEO`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      dateModified: new Date().toISOString().split("T")[0] + "T00:00:00Z",
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: `${siteConfig.name} — Software Engineering Services`,
      url: siteConfig.url,
      description:
        "Professional software engineering, web development, Flask API development, and AI/ML solutions.",
      provider: { "@id": `${siteConfig.url}/#person` },
      areaServed: "IN",
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Engineering",
              description: "Building reliable and maintainable software systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Python & Flask Development",
              description:
                "Scalable backend applications and APIs using Python and Flask.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Application Development",
              description:
                "Modern, responsive, production-ready web applications with React and Next.js.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "REST API Development",
              description: "Structured, secure, and efficient REST APIs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Machine Learning Solutions",
              description:
                "Intelligent AI-powered applications and machine learning models.",
            },
          },
        ],
      },
    },
  ],
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
