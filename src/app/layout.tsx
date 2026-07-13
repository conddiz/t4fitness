import { config } from "@fortawesome/fontawesome-svg-core"
import type { Metadata, Viewport } from "next"
import { Barlow_Condensed, DM_Sans } from "next/font/google"
import type { ReactNode } from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/globals.css"

config.autoAddCss = false

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
})

const SITE_URL = "https://t4fitness.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "T4 Fitness | Academia em Fortaleza — Sua evolução começa aqui",
    template: "%s | T4 Fitness",
  },
  description:
    "Academia em Fortaleza com 7 unidades: musculação, funcional, lutas e dança. Aceitamos Wellhub e TotalPass. Sua evolução começa aqui, na T4 Fitness.",
  keywords: [
    "academia em fortaleza",
    "academia fortaleza",
    "academia 24 horas fortaleza",
    "musculação fortaleza",
    "academia barata fortaleza",
    "wellhub fortaleza",
    "totalpass fortaleza",
    "fitdance fortaleza",
    "muay thai fortaleza",
    "jiu jitsu fortaleza",
    "academia guadalajara",
    "academia antônio bezerra",
    "academia bela vista fortaleza",
    "academia granja lisboa",
    "academia potira",
    "t4 fitness",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "T4 Fitness | Academia em Fortaleza — Sua evolução começa aqui",
    description:
      "7 unidades em Fortaleza. Musculação, funcional, lutas e dança. Wellhub e TotalPass aceitos.",
    url: SITE_URL,
    siteName: "T4 Fitness",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Fachada da T4 Fitness" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "T4 Fitness | Academia em Fortaleza — Sua evolução começa aqui",
    description: "7 unidades em Fortaleza. Musculação, lutas e dança. Wellhub e TotalPass aceitos.",
    images: ["/og-cover.jpg"],
  },
}

const UNITS = [
  { name: "Guadalajara", street: "Rua Araré, 641" },
  { name: "Potira", street: "Rua Padre Alfredo Nesi, 1322" },
  { name: "Arianópolis", street: "Rua Danilo Correia, 777" },
  { name: "Parque Albano", street: "Rua Gonçalves Dias, 1988" },
  { name: "Granja Lisboa", street: "Rua Xavier da Silveira, 3949" },
  { name: "Bela Vista", street: "Rua Espírito Santo, 614" },
  { name: "Antônio Bezerra", street: "Rua Martins Neto, 810" },
]

const gymJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "T4 Fitness",
  url: SITE_URL,
  telephone: "+5585987453332",
  image: `${SITE_URL}/og-cover.jpg`,
  sameAs: ["https://www.instagram.com/t4fitness_/", "https://www.facebook.com/arenafits/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
}

const unitsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Unidades T4 Fitness em Fortaleza",
  itemListElement: UNITS.map((unit, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "ExerciseGym",
      name: `T4 Fitness ${unit.name}`,
      url: SITE_URL,
      telephone: "+5585987453332",
      address: {
        "@type": "PostalAddress",
        streetAddress: unit.street,
        addressLocality: "Fortaleza",
        addressRegion: "CE",
        addressCountry: "BR",
      },
    },
  })),
}

export const viewport: Viewport = {
  themeColor: "#ff6a00",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <body className="m-0 text-ink bg-white font-sans" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data built from static constants
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymJsonLd) }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data built from static constants
          dangerouslySetInnerHTML={{ __html: JSON.stringify(unitsJsonLd) }}
        />
      </body>
    </html>
  )
}
