"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutUsHistory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "IDMITS DESIGNS was established in Gurgaon with a vision to transform spaces with innovative design.",
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Expanded our team and services to include full construction capabilities.",
    },
    {
      year: "2015",
      title: "Award Recognition",
      description: "Received our first design excellence award for a luxury residential project.",
    },
    {
      year: "2018",
      title: "Commercial Success",
      description: "Completed our first major commercial project for a leading corporate client.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced 3D visualization and virtual reality design tools.",
    },
    {
      year: "2023",
      title: "Sustainability Focus",
      description: "Launched our eco-friendly design initiative focusing on sustainable materials and practices.",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb] dark:bg-[#0a0a0a]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-[#0070f3] font-semibold text-lg block mb-2"
          >
            Our Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#222] dark:text-white"
          >
            Our History & Milestones
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-[#555] dark:text-[#bbb] mb-12"
          >
            Since our founding in 2008, IDMITS DESIGNS has grown from a small design studio to a comprehensive interior
            design and construction company. Here's our journey of growth and excellence.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#d1d5db] dark:bg-[#333]"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
                    <span className="text-[#0070f3] font-bold text-xl block mb-2">{milestone.year}</span>
                    <h3 className="text-2xl font-bold mb-2 text-[#222] dark:text-white">{milestone.title}</h3>
                    <p className="text-[#666] dark:text-[#aaa]">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0070f3] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{milestone.year.substring(2)}</span>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 bg-[#eef2f7] dark:bg-[#121212] p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#222] dark:text-white">Our Vision for the Future</h3>
              <p className="text-[#555] dark:text-[#bbb] mb-4">
                At IDMITS DESIGNS, we are committed to pushing the boundaries of design and construction. Our vision is
                to become the leading design-build firm in Haryana, known for our innovative approach, sustainable
                practices, and exceptional client satisfaction.
              </p>
              <p className="text-[#555] dark:text-[#bbb]">
                We continue to invest in the latest technologies and methodologies to deliver spaces that not only meet
                but exceed our clients' expectations. Our goal is to create environments that inspire, function
                flawlessly, and stand the test of time.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/img2.webp"
                alt="IDMITS DESIGNS Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHistory;
