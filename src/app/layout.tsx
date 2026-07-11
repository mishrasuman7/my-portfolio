import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suman Mishra — Full-Stack Developer & AI Engineer",
  description:
    "Full-stack developer building AI-powered products end-to-end — from browser-automation extensions and computer-vision pipelines to production backend systems on AWS.",
  keywords: [
    "Suman Mishra",
    "Full-Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Kathmandu",
    "Nepal",
    "Freelance Developer",
  ],
  authors: [{ name: "Suman Mishra" }],
  creator: "Suman Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumanmishra.dev", // TODO: update with actual domain
    siteName: "Suman Mishra — Portfolio",
    title: "Suman Mishra — Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer building AI-powered products end-to-end — from browser-automation extensions and computer-vision pipelines to production backend systems on AWS.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Mishra — Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer building AI-powered products end-to-end.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
