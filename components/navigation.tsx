"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#why-choose" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-40 glass-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F373e0b424ecc4cb281370906bc1721ca%2Ff3edc27131f44d79bfc6fead08bf2b05?format=webp&width=100"
                alt="DeeWave Logo"
                width={48}
                height={48}
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white hidden sm:inline">DeeWave</span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-white font-medium text-sm lg:text-base hover:text-cyan-bright transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Call Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:727-408-1143"
              className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-wave-bright-blue to-pink-hot text-white font-semibold text-xs sm:text-sm hover:shadow-2xl hover:shadow-pink-hot/50 transition-all hidden sm:inline-block"
            >
              Call 727-408-1143
            </a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-cyan-bright transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-3 sm:gap-4 py-3 sm:py-4 border-t border-white/10">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                    className="text-white font-medium text-sm sm:text-base hover:text-cyan-bright transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="tel:727-408-1143"
                  className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-wave-bright-blue to-pink-hot text-white font-semibold text-xs sm:text-sm text-center hover:shadow-xl"
                >
                  Call 727-408-1143
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
