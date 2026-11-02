import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CANDIDATE_INFO, SITE_URL } from "@/lib/constants";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0A14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CANDIDATE_INFO.name} | SEO & Digital Marketing Specialist`,
    template: `%s | ${CANDIDATE_INFO.name}`,
  },
  description:
    "Portfolio of Israt Jahan Mim - Information & Communication Engineering graduate specializing in SEO, digital marketing, content strategy, and social media management in Dhaka, Bangladesh.",
  keywords: [
    "Israt Jahan Mim",
    "SEO Specialist Dhaka",
    "Digital Marketing Bangladesh",
    "Social Media Manager",
    "On-Page SEO",
    "Technical SEO",
    "Figma UI Design",
  ],
  authors: [{ name: CANDIDATE_INFO.name, url: SITE_URL }],
  creator: CANDIDATE_INFO.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${CANDIDATE_INFO.name} | SEO & Digital Marketing Specialist`,
    description:
      "Information & Communication Engineering graduate specializing in SEO, digital marketing, and social media management.",
    siteName: `${CANDIDATE_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${CANDIDATE_INFO.name} | SEO & Digital Marketing Specialist`,
    description:
      "Information & Communication Engineering graduate specializing in SEO, digital marketing, and social media management.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${inter.variable}`}>
      <head>
        {/* Inline Theme Initialization Script - Prevents Theme Flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback safely
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background-primary text-content-primary">
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

