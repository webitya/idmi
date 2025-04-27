"use client";

import { motion } from "framer-motion";

const AboutUsHero = () => {
  return (
    <section className="py-32 mt-24 pb-32 bg-gradient-to-r from-[#2D3E50] to-[#1A2B37] relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: "url('/img1.webp')",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block bg-[#00B2FF] text-white px-8 py-3 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase shadow-lg"
          >
            Our Story
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-wider"
          >
            About <span className="text-[#00B2FF]">IDMITS DESIGNS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We are a premier interior design and construction company based in
            Gurgaon, Haryana, committed to delivering top-tier residential and commercial spaces. With years of expertise, we blend innovation, craftsmanship, and style to transform your vision into reality.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
