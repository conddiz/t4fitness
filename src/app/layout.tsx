import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { ReactNode } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";

config.autoAddCss = false;

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://t4fitness.com.br"),
  title: "T4 Fitness | Sua evolução começa aqui",
  description:
    "T4 Fitness — a sua academia em Fortaleza. 7 unidades, Wellhub e TotalPass aceitos. Treino, movimento e energia para você evoluir.",
  openGraph: {
    title: "T4 Fitness | Sua evolução começa aqui",
    description:
      "7 unidades em Fortaleza. Musculação, funcional, lutas e dança. Wellhub e TotalPass aceitos.",
    url: "https://t4fitness.com.br",
    siteName: "T4 Fitness",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/unidade-exterior.jpeg", width: 1200, height: 630, alt: "Fachada de uma unidade T4 Fitness" }],
  },
  twitter: {
    card: "summary",
    title: "T4 Fitness | Sua evolução começa aqui",
    description: "7 unidades em Fortaleza. Wellhub e TotalPass aceitos.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff6a00",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <body className="m-0 text-ink bg-white font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
