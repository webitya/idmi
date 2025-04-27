"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowForward, CheckCircle } from "@mui/icons-material"

const HomePageHero = () => {
  return (
    <section className="relative mt-24 p-5 flex items-center overflow-hidden bg-[#333333]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img1.webp')",
          filter: "brightness(0.4)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5"
          >
            Premium Interior Design & Construction Services
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
          >
            Transform Your Space With <br /> <span className="text-yellow-400">IDMITS DESIGNS</span>
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            From concept to completion, we bring your vision to life with precision and passion. Our expert team
            delivers exceptional design and construction services in Gurgaon and across Haryana.
          </motion.p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            <div className="flex items-center">
              <CheckCircle className="text-yellow-400 mr-2" />
              <span className="text-gray-200">15+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-yellow-400 mr-2" />
              <span className="text-gray-200">Award-Winning Designs</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-yellow-400 mr-2" />
              <span className="text-gray-200">100% Client Satisfaction</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/services"
              className="bg-[#2B6CB0] hover:bg-[#1E4E8C] text-white px-8 py-3 rounded-md text-lg font-bold shadow-lg transition"
            >
              Our Services
            </Link>
            <Link
              href="/contactus"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-bold shadow-lg transition"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          {/* Discover More Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <Link href="#about" className="flex items-center text-yellow-400 hover:text-yellow-500 transition">
              <span className="mr-2 font-semibold">Discover More</span>
              <ArrowForward className="animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomePageHero
