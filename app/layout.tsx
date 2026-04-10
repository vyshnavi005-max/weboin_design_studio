import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weboin | Premium Digital Design Agency",
  description: "Crafting high-end digital experiences, modern UI/UX design, and professional branding for ambitious brands worldwide.",
  keywords: ["Design Agency", "UI/UX", "Web Development", "Branding", "Digital Design"],
  authors: [{ name: "Weboin Design Studio" }],
  openGraph: {
    title: "Weboin | Premium Digital Design Agency",
    description: "Crafting high-end digital experiences for ambitious brands.",
    url: "https://weboin-agency.com",
    siteName: "Weboin Design Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weboin | Premium Digital Design Agency",
    description: "Crafting high-end digital experiences for ambitious brands.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth scroll-pt-24`}
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#030303] text-zinc-900 dark:text-white font-sans transition-colors duration-300">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
