"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowForward, CheckCircle } from "@mui/icons-material";

const HomePageHero = () => {
  return (
    <section className="relative mt-24 p-5 flex items-center overflow-hidden bg-gradient-to-r from-[#2B3A42] to-[#1A252E]">
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            Premium Interior Design & Construction Services
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Transform Your Space With <br /> <span className="text-yellow-400">IDMITS DESIGNS</span>
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            From concept to completion, we bring your vision to life with precision and passion. Our expert team
            delivers exceptional design and construction services in Gurgaon and across Haryana.
          </motion.p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-8 mb-12"
          >
            <div className="flex items-center text-gray-200">
              <CheckCircle className="text-yellow-400 mr-3" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center text-gray-200">
              <CheckCircle className="text-yellow-400 mr-3" />
              <span>Award-Winning Designs</span>
            </div>
            <div className="flex items-center text-gray-200">
              <CheckCircle className="text-yellow-400 mr-3" />
              <span>100% Client Satisfaction</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="/services"
              className="bg-[#2B6CB0] hover:bg-[#1E4E8C] text-white px-10 py-4 rounded-md text-lg font-semibold shadow-xl transition duration-300 ease-in-out"
            >
              Our Services
            </Link>
            <Link
              href="/contactus"
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-md text-lg font-semibold shadow-xl transition duration-300 ease-in-out"
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
  );
};

export default HomePageHero;
