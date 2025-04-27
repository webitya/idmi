"use client"

import { motion } from "framer-motion"

const ContactUsHero = () => {
  return (
    <section className="relative mt-24 py-20 bg-gray-900">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have questions or ready to start your project? Get in touch with our team today and let's bring your vision
            to life.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default ContactUsHero
