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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Book Your Detail</h2>
          <p className="text-white-pure/80 text-base sm:text-lg">Let's make your car shine like never before</p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-wave-dark-blue via-white-pure to-pink-hot mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/30 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/50 outline-none transition-all text-sm sm:text-base"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/30 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/50 outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/30 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/50 outline-none transition-all text-sm sm:text-base"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="vehicle"
              placeholder="Vehicle (Make/Model)"
              value={formData.vehicle}
              onChange={handleChange}
              required
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/30 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/50 outline-none transition-all text-sm sm:text-base"
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
            className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/30 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/50 outline-none transition-all text-sm sm:text-base"
          />

          <motion.select
            whileFocus={{ scale: 1.02 }}
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/10 backdrop-blur-xl border border-white/30 text-white focus:bg-white/20 focus:border-white/50 outline-none transition-all text-sm sm:text-base"
          >
            <option value="" disabled className="bg-navy-dark text-white">
              Select Service
            </option>
            <option value="interior" className="bg-navy-dark text-white">Interior Detail</option>
            <option value="exterior" className="bg-navy-dark text-white">Exterior Detail</option>
            <option value="full" className="bg-navy-dark text-white">Full Detail Package</option>
            <option value="ceramic" className="bg-navy-dark text-white">Ceramic Coating</option>
            <option value="headlight" className="bg-navy-dark text-white">Headlight Restoration</option>
            <option value="paint" className="bg-navy-dark text-white">Paint Correction</option>
          </motion.select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 sm:py-4 rounded-lg bg-gradient-to-r from-wave-dark-blue via-wave-bright-blue to-pink-hot text-white text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-pink-hot/50 transition-all"
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
            className="text-4xl font-bold bg-gradient-to-r from-wave-bright-blue to-pink-hot bg-clip-text text-transparent hover:shadow-lg transition-all glow-pink"
          >
            727-408-1143
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 text-center rounded-xl"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-white font-bold mb-2">Service Area</h3>
            <p className="text-white-pure/80">Tampa Bay & surrounding areas</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 text-center rounded-xl"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-white font-bold mb-2">Phone</h3>
            <a
              href="tel:727-408-1143"
              className="text-cyan-bright hover:text-white transition-colors"
            >
              727-408-1143
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 text-center rounded-xl"
          >
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-white font-bold mb-2">Hours</h3>
            <p className="text-white-pure/80">Available 7 days a week</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
