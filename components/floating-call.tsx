"use client"

import { motion } from "framer-motion"

export default function FloatingCall() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <a
        href="tel:727-408-1143"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-wave-dark-blue to-pink-hot text-white text-2xl font-bold shadow-2xl hover:shadow-2xl hover:shadow-pink-hot/60 transition-all glow-pink"
      >
        ☎
      </a>
    </motion.div>
  )
}
