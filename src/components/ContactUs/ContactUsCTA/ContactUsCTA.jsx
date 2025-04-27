"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const ContactUsCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 relative" ref={ref}>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
          filter: "brightness(0.3)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-500"
          >
            Ready to Transform Your Space?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Contact us today to schedule a consultation and take the first step towards creating your dream space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contactus"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsCTA
