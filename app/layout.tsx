import type React from "react"
import type { Metadata } from "next"
import { Inter, Audiowide } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
})

export const metadata: Metadata = {
  title: "Trendwaves | Agencia de Marketing de Influencers",
  description:
    "Trendwaves es una agencia de marketing que conecta marcas con resultados, combinando creatividad, estrategia y el impulso de nuestros influencers para potenciar cada servicio.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${audiowide.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
