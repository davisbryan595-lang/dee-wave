"use client"

import { motion } from "framer-motion"

const services = [
  { name: "Interior Detail", icon: "🪑" },
  { name: "Exterior Detail", icon: "🚗" },
  { name: "Full Detail Package", icon: "✨" },
  { name: "Ceramic Coating", icon: "💎" },
  { name: "Headlight Restoration", icon: "💡" },
  { name: "Paint Correction", icon: "🎨" },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-24 px-6 bg-navy-dark relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-32 h-1 bg-gradient-wave mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(6,182,212,0.3)" }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-cyan-bright transition-all cursor-pointer backdrop-blur"
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white">{service.name}</h3>
              <p className="text-gray-400 mt-3">Professional detailing service tailored to your needs</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
