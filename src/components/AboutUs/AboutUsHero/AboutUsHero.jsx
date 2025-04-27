"use client";

import { motion } from "framer-motion";

const AboutUsHero = () => {
  return (
    <section className="py-20 mt-24 pb-20 bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block bg-[#00B2FF] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
          >
            Our Story
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            About <span className="text-[#00B2FF]">IDMITS DESIGNS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            We are a premier interior design and construction company based in
            Gurgaon, Haryana, dedicated to creating exceptional spaces that
            inspire and delight.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
