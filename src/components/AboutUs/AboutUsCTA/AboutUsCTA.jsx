"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const AboutUsCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
          filter: "brightness(0.4)",
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            Ready to Start Your Project with{" "}
            <span className="text-[#00B2FF]">IDMITS DESIGNS</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-10"
          >
            Let our expert team help you transform your space into something
            extraordinary. Contact us today to schedule a consultation and take
            the first step towards your dream project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <Link
              href="/contactus"
              className="bg-[#00B2FF] hover:bg-[#0095cc] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/portfolio"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;
