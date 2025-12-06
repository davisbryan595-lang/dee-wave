"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  { id: 1, src: "https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg" },
  { id: 2, src: "https://images.pexels.com/photos/17623838/pexels-photo-17623838.jpeg" },
  { id: 3, src: "https://images.pexels.com/photos/17623850/pexels-photo-17623850.jpeg" },
  { id: 4, src: "https://images.pexels.com/photos/24800195/pexels-photo-24800195.jpeg" },
  { id: 5, src: "https://images.pexels.com/photos/31104041/pexels-photo-31104041.png" },
  { id: 6, src: "https://images.pexels.com/photos/16157554/pexels-photo-16157554.jpeg" },
  { id: 7, src: "https://images.pexels.com/photos/30751893/pexels-photo-30751893.jpeg" },
  { id: 8, src: "https://images.pexels.com/photos/33884882/pexels-photo-33884882.jpeg" },
  { id: 9, src: "https://images.pexels.com/photos/14533601/pexels-photo-14533601.jpeg" },
  { id: 10, src: "https://images.pexels.com/photos/20710959/pexels-photo-20710959.jpeg" },
  { id: 11, src: "https://images.pexels.com/photos/17156936/pexels-photo-17156936.jpeg" },
  { id: 12, src: "https://images.pexels.com/photos/9112798/pexels-photo-9112798.jpeg" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const MOBILE_INITIAL_COUNT = 4
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, MOBILE_INITIAL_COUNT)

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Before & After</h2>
          <p className="text-white-pure/80 text-lg">See the DeeWave transformation</p>
          <div className="w-32 h-1 bg-gradient-to-r from-wave-dark-blue via-white-pure to-pink-hot mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,217,255,0.5)" }}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer glass-card"
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
              className="relative w-full max-w-3xl aspect-square glass-card rounded-xl overflow-hidden"
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
