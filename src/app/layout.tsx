import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "MaIA | Software house e soluções digitais",
    description:
      "Sites, sistemas, plataformas e soluções digitais sob medida para pessoas, startups e empresas.",
    openGraph: {
      title: "MaIA | Software house e soluções digitais",
      description: "Criamos soluções digitais que impulsionam negócios.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: "/og.png", width: 1727, height: 911, alt: "MaIA — Soluções digitais que impulsionam negócios" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "MaIA | Software house e soluções digitais",
      description: "Criamos soluções digitais que impulsionam negócios.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
