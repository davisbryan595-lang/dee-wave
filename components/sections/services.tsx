"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    name: "Interior Detail",
    icon: "🪑",
    image: "https://images.pexels.com/photos/14533601/pexels-photo-14533601.jpeg",
  },
  {
    name: "Exterior Detail",
    icon: "🚗",
    image: "https://images.pexels.com/photos/31104041/pexels-photo-31104041.png",
  },
  {
    name: "Full Detail Package",
    icon: "✨",
    image: "https://images.pexels.com/photos/16157554/pexels-photo-16157554.jpeg",
  },
  {
    name: "Ceramic Coating",
    icon: "💎",
    image: "https://images.pexels.com/photos/10358884/pexels-photo-10358884.jpeg",
  },
  {
    name: "Headlight Restoration",
    icon: "💡",
    image: "https://images.pexels.com/photos/33884882/pexels-photo-33884882.jpeg",
  },
  {
    name: "Paint Correction",
    icon: "🎨",
    image: "https://images.pexels.com/photos/30751893/pexels-photo-30751893.jpeg",
  },
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
    <section id="services" className="py-24 px-6 bg-navy-dark relative">
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
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,217,255,0.4)" }}
              className="service-card group relative h-72 rounded-xl overflow-hidden glass-card cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover brightness-50 group-hover:brightness-30 transition-all duration-500"
              />

              {/* Content */}
              <div className="service-card-content relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                <p className="text-gray-300 mt-3 text-sm">Professional detailing service tailored to your needs</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
