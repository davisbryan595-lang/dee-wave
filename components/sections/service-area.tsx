"use client"

import { motion } from "framer-motion"

export default function ServiceArea() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Service Area</h2>
          <p className="text-cyan-bright text-base sm:text-lg">Serving Pinellas, Pasco & Hillsborough Counties</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {["Pinellas County", "Pasco County", "Hillsborough County"].map((county, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card-hover text-center"
            >
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white">{county}</h3>
              <p className="text-gray-300 mt-2">Professional detailing service available</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
