"use client"

import { useEffect, useState } from "react"
import Preloader from "@/components/preloader"
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Gallery from "@/components/sections/gallery"
import Pricing from "@/components/sections/pricing"
import WhyChoose from "@/components/sections/why-choose"
import ServiceArea from "@/components/sections/service-area"
import Contact from "@/components/sections/contact"
import FloatingCall from "@/components/floating-call"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background gradient accent */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-cyan-bright/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-pink-hot/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-bright/10 rounded-full blur-3xl"></div>
      </div>

      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <WhyChoose />
      <ServiceArea />
      <Contact />
      <FloatingCall />
    </main>
  )
}
