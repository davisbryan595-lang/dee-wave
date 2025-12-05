"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-40 bg-navy-dark/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F373e0b424ecc4cb281370906bc1721ca%2Ff3edc27131f44d79bfc6fead08bf2b05?format=webp&width=100"
              alt="DeeWave Logo"
              width={48}
              height={48}
            />
          </div>
          <span className="text-xl font-bold text-white hidden sm:inline">DeeWave</span>
        </motion.div>

        {/* Call Button */}
        <a
          href="tel:727-408-1143"
          className="px-6 py-2 rounded-full bg-wave-blue hover:bg-cyan-bright text-white font-semibold transition-all glow-cyan"
        >
          Call 727-408-1143
        </a>
      </div>
    </nav>
  )
}
