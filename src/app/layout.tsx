import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "T4 Fitness | Sua evolução começa aqui",
  description:
    "T4 Fitness — a sua academia em Fortaleza. Treino, movimento e energia para você evoluir.",
  keywords:
    "academia, fitness, fortaleza, musculação, cardio, aulas, wellhub, totalpass",
  openGraph: {
    title: "T4 Fitness | Sua evolução começa aqui",
    description:
      "T4 Fitness — 7 unidades em Fortaleza com musculação, cardio, aulas e lutas.",
    type: "website",
    locale: "pt_BR",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ff6a00" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-orange-950 antialiased">{children}</body>
    </html>
  );
}
