"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Interior Detail",
    price: "$149",
    description: "Perfect for regular maintenance",
    features: [
      "Vacuum all carpets & mats",
      "Clean all surfaces",
      "Sanitize interior",
      "Air freshener",
    ],
  },
  {
    name: "Exterior Detail",
    price: "$199",
    description: "Shine from the outside",
    features: [
      "Hand wash & dry",
      "Wheel cleaning",
      "Tire shine",
      "Paint sealant",
    ],
    popular: true,
  },
  {
    name: "Full Detail Package",
    price: "$349",
    description: "Complete transformation",
    features: [
      "Interior + Exterior Detail",
      "Engine bay cleaning",
      "Glass treatment",
      "Undercarriage wash",
      "Priority booking",
    ],
  },
  {
    name: "Ceramic Coating",
    price: "$599",
    description: "Long-term protection",
    features: [
      "Paint preparation",
      "Ceramic coating (3 years)",
      "Glass coating",
      "Leather protection",
      "6-month touch-up included",
    ],
  },
  {
    name: "Headlight Restoration",
    price: "$99",
    description: "Restore clarity",
    features: [
      "Professional polishing",
      "Oxidation removal",
      "UV protection coating",
      "10-year warranty",
    ],
  },
  {
    name: "Paint Correction",
    price: "$449",
    description: "Flawless finish",
    features: [
      "Swirl mark removal",
      "Paint correction",
      "Ceramic topcoat",
      "Professional detailing",
    ],
  },
]

export default function Pricing() {
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
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-white-pure/80 text-base sm:text-lg">
            Professional detailing at competitive rates
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-wave-dark-blue via-white-pure to-pink-hot mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`pricing-card relative rounded-xl overflow-hidden transition-all ${
                plan.popular
                  ? "scale-100 md:scale-105 glass-card border-2 border-pink-hot shadow-2xl shadow-pink-hot/40"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-wave-bright-blue to-pink-hot text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white-pure/60 text-sm mb-4">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-wave-bright-blue to-pink-hot bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-bold transition-all mb-8 ${
                    plan.popular
                      ? "bg-gradient-to-r from-wave-dark-blue via-wave-bright-blue to-pink-hot text-white hover:shadow-2xl hover:shadow-pink-hot/50"
                      : "bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                  }`}
                >
                  Book Service
                </motion.button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-bright flex-shrink-0 mt-0.5" />
                      <span className="text-white-pure/80 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white-pure/80 text-lg mb-4">
            Looking for custom packages or fleet services?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-wave-dark-blue via-wave-bright-blue to-pink-hot text-white font-bold hover:shadow-2xl hover:shadow-pink-hot/50 transition-all"
          >
            Contact Us for Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
