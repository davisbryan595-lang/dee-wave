"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=400&width=400&query=car detail before and after ${i + 1}`,
}))

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Before & After</h2>
          <p className="text-cyan-bright text-lg">See the DeeWave transformation</p>
          <div className="w-32 h-1 bg-gradient-wave mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-gradient-wave"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Car detail ${image.id}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-3xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-3xl aspect-square border-4 border-gradient-wave rounded-xl overflow-hidden"
            >
              <Image
                src={galleryImages[selectedImage - 1].src || "/placeholder.svg"}
                alt="Gallery"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
