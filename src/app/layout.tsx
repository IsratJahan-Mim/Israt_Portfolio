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
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CANDIDATE_INFO.brand} | ${CANDIDATE_INFO.headline}`,
    template: `%s | ${CANDIDATE_INFO.brand}`,
  },
  description:
    "Portfolio of Israt Jahan Mim (MIM.) – Graphic Designer, UI/UX Designer, and Digital Marketer based in Dhaka, Bangladesh.",
  keywords: [
    "MIM.",
    "Israt Jahan Mim",
    "Graphic Designer",
    "UI/UX Designer",
    "Digital Marketer",
    "Figma",
    "SafeNest",
    "Dhaka Designer",
    "Brand Identity",
    "SEO Specialist",
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
    title: `${CANDIDATE_INFO.brand} | ${CANDIDATE_INFO.headline}`,
    description: CANDIDATE_INFO.subheadline,
    siteName: `${CANDIDATE_INFO.brand} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${CANDIDATE_INFO.brand} | ${CANDIDATE_INFO.headline}`,
    description: CANDIDATE_INFO.subheadline,
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
