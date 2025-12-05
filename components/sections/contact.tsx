"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    vehicle: "",
    service: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you! We will contact you soon.")
    setFormData({ name: "", phone: "", email: "", address: "", vehicle: "", service: "" })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-wave-blue/20 to-navy-dark">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Book Your Detail</h2>
          <p className="text-cyan-bright text-lg">Let's make your car shine like never before</p>
          <div className="w-32 h-1 bg-gradient-wave mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-6 py-3 rounded-lg bg-cyan-bright/10 border-2 border-cyan-bright/50 text-white placeholder-gray-400 focus:border-cyan-bright outline-none transition-all"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-6 py-3 rounded-lg bg-cyan-bright/10 border-2 border-cyan-bright/50 text-white placeholder-gray-400 focus:border-cyan-bright outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-6 py-3 rounded-lg bg-cyan-bright/10 border-2 border-cyan-bright/50 text-white placeholder-gray-400 focus:border-cyan-bright outline-none transition-all"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="vehicle"
              placeholder="Vehicle (Make/Model)"
              value={formData.vehicle}
              onChange={handleChange}
              required
              className="px-6 py-3 rounded-lg bg-cyan-bright/10 border-2 border-cyan-bright/50 text-white placeholder-gray-400 focus:border-cyan-bright outline-none transition-all"
            />
          </div>

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="address"
            placeholder="Service Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-6 py-3 rounded-lg bg-cyan-bright/10 border-2 border-cyan-bright/50 text-white placeholder-gray-400 focus:border-cyan-bright outline-none transition-all"
          />

          <motion.select
            whileFocus={{ scale: 1.02 }}
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-6 py-3 rounded-lg bg-cyan-bright/10 border-2 border-cyan-bright/50 text-white focus:border-cyan-bright outline-none transition-all"
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="interior">Interior Detail</option>
            <option value="exterior">Exterior Detail</option>
            <option value="full">Full Detail Package</option>
            <option value="ceramic">Ceramic Coating</option>
            <option value="headlight">Headlight Restoration</option>
            <option value="paint">Paint Correction</option>
          </motion.select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 rounded-lg gradient-button text-lg font-bold hover:shadow-2xl transition-all"
          >
            Book Your Detail
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white text-lg mb-4">Or call us directly</p>
          <a
            href="tel:727-408-1143"
            className="text-4xl font-bold text-cyan-bright hover:text-pink-foam transition-colors"
          >
            727-408-1143
          </a>
        </motion.div>
      </div>
    </section>
  )
}
