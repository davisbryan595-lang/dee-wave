"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

export default function Preloader() {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-navy-dark via-navy-dark to-wave-dark-blue flex items-center justify-center z-50">
      <div className="text-center">
        {/* Spinning Wave Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="mb-8"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-wave p-1 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-navy-dark flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                <path
                  d="M20,50 Q30,30 50,30 T80,50 Q70,70 50,70 T20,50"
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <h1 className="text-4xl font-bold bg-gradient-wave bg-clip-text text-transparent mb-4">Experience</h1>
          <p className="text-xl text-cyan-bright font-light">DeeWave...</p>
        </motion.div>
      </div>
    </div>
  )
}
