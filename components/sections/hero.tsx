"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-wave-dark-blue/30 to-transparent">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg"
          alt="Professional car washing"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="logo-container inline-block">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F373e0b424ecc4cb281370906bc1721ca%2Ff3edc27131f44d79bfc6fead08bf2b05?format=webp&width=400"
              alt="DeeWave Logo"
              width={200}
              height={200}
              className="drop-shadow-lg"
            />
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
          className="text-lg md:text-xl text-cyan-bright mb-12 font-light glow-cyan"
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
            className="px-8 py-4 rounded-full border-2 border-white-pure text-white-pure text-lg font-bold hover:bg-gradient-to-r hover:from-wave-dark-blue hover:to-pink-hot hover:border-transparent transition-all cursor-pointer glow-pink"
          >
            Call 727-408-1143
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
