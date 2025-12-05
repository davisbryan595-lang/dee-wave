import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeeWave Mobile Detailing | Ceramic Coating Pinellas Pasco Hillsborough FL",
  description:
    "Premium mobile car detailing serving Pinellas, Pasco & Hillsborough County. Ceramic coating, paint correction & exterior detailing. We come to you!",
  generator: "v0.app",
  openGraph: {
    title: "DeeWave Mobile Detailing",
    description: "Premium mobile car detailing in Pinellas, Pasco & Hillsborough",
    url: "https://deewave-detailing.com",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "AutoRepair"],
            name: "DeeWave Mobile Detailing",
            description: "Premium mobile car detailing service",
            telephone: "727-408-1143",
            address: {
              "@type": "PostalAddress",
              addressRegion: "FL",
              addressLocality: "Pinellas",
            },
            areaServed: ["Pinellas County, FL", "Pasco County, FL", "Hillsborough County, FL"],
          })}
        </script>
      </head>
      <body className={`font-sans antialiased bg-navy-dark text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
