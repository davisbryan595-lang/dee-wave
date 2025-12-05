"use client"

import { useEffect, useState } from "react"
import Preloader from "@/components/preloader"
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Gallery from "@/components/sections/gallery"
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
    <main className="min-h-screen bg-navy-dark">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <WhyChoose />
      <ServiceArea />
      <Contact />
      <FloatingCall />
    </main>
  )
}
