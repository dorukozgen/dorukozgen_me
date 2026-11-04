import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doruk Özgen — Full-Stack Developer & AI/ML Researcher",
  description:
    "Full-Stack Developer experienced in SaaS engineering, QA automation, and AI/ML research. Personal portfolio and research papers.",
  keywords: [
    "Doruk Özgen",
    "Doruk Ozgen",
    "Full-Stack Developer",
    "AI/ML Researcher",
    "Software Engineer",
    "Fleetify",
    "YZ50",
    "PaLiGemma 2",
  ],
  authors: [{ name: "Doruk Özgen", url: "https://dorukozgen.me" }],
  openGraph: {
    title: "Doruk Özgen — Full-Stack Developer & AI/ML Researcher",
    description:
      "Full-Stack Developer experienced in SaaS engineering, QA automation, and AI/ML research.",
    url: "https://dorukozgen.me",
    siteName: "Doruk Özgen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/doruk.jpg",
        width: 800,
        height: 800,
        alt: "Doruk Özgen",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Doruk Özgen",
    description:
      "Full-Stack Developer experienced in SaaS engineering, QA automation, and AI/ML research.",
    images: ["/doruk.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fafaf9] text-[#1c1917] antialiased selection:bg-[#1c1917] selection:text-[#fafaf9]">
        {children}
      </body>
    </html>
  );
}
