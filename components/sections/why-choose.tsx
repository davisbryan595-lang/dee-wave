"use client"

import { motion } from "framer-motion"

const reasons = [
  { title: "Mobile", description: "We Come To You", icon: "🚗" },
  { title: "Insured", description: "Fully Insured", icon: "✓" },
  { title: "Eco-Friendly", description: "Sustainable Products", icon: "🌍" },
  { title: "Guaranteed", description: "100% Satisfaction", icon: "⭐" },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 px-6 bg-gradient-to-b from-navy-dark to-wave-dark-blue/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Why Choose DeeWave</h2>
          <div className="w-32 h-1 bg-gradient-wave mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ boxShadow: "0 0 30px rgba(0,217,255,0.6)" }}
              className="p-8 rounded-xl bg-cyan-bright/10 border-2 border-cyan-bright/30 hover:border-cyan-bright transition-all text-center"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-cyan-bright">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
