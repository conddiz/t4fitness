import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Equipamentos de Academia à Venda",
  description:
    "Venda de equipamentos profissionais de musculação para academias e investidores em Fortaleza. Máquinas seminovas revisadas: leg press, estações e mais.",
  keywords: [
    "equipamentos de academia à venda",
    "equipamentos musculação usados",
    "montar academia",
    "equipamentos fitness fortaleza",
    "leg press à venda",
    "estação de musculação",
  ],
  alternates: {
    canonical: "/investidores",
  },
  openGraph: {
    title: "Equipamentos de Academia à Venda | T4 Fitness",
    description:
      "Equipamentos profissionais de musculação seminovos e revisados para academias e investidores em Fortaleza.",
    url: "https://t4fitness.com.br/investidores",
    siteName: "T4 Fitness",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Fachada da T4 Fitness" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipamentos de Academia à Venda | T4 Fitness",
    description:
      "Equipamentos profissionais de musculação seminovos e revisados para academias e investidores em Fortaleza.",
    images: ["/og-cover.jpg"],
  },
}

interface InvestidoresLayoutProps {
  children: ReactNode
}

export default function InvestidoresLayout({ children }: InvestidoresLayoutProps) {
  return children
}
