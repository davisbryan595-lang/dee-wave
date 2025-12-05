"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    camera.position.z = 3

    renderer.setSize(window.innerWidth, window.innerHeight * 0.7)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create wave geometry
    const geometry = new THREE.IcosahedronGeometry(1, 30)
    const material = new THREE.MeshPhongMaterial({
      wireframe: false,
      color: 0x3b82f6,
      emissive: 0x06b6d4,
      shininess: 100,
    })
    const wave = new THREE.Mesh(geometry, material)
    scene.add(wave)

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    const light2 = new THREE.PointLight(0xf472b6, 0.5)
    light2.position.set(-5, -5, 5)
    scene.add(light2)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      wave.rotation.x += 0.003
      wave.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight * 0.7)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-navy-dark via-navy-dark to-wave-blue"
    >
      {/* 3D Canvas Background */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-wave p-1">
              <div className="w-full h-full rounded-full bg-navy-dark flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(244,114,182,0.3)",
                      "0 0 40px rgba(244,114,182,0.8)",
                      "0 0 20px rgba(244,114,182,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-4xl font-bold bg-gradient-wave bg-clip-text text-transparent"
                >
                  ≈
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          DEEWAVE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          MOBILE DETAILING
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-cyan-bright mb-12 font-light"
        >
          We Come To You — Pinellas • Pasco • Hillsborough
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-full gradient-button text-lg font-bold hover:shadow-2xl transition-all"
          >
            Book Now
          </motion.button>

          <motion.a
            href="tel:727-408-1143"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border-2 border-white-pure text-white-pure text-lg font-bold hover:bg-white-pure hover:text-navy-dark transition-all cursor-pointer"
          >
            Call 727-408-1143
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
