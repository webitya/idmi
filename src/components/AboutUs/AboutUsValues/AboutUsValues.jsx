"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Diamond, Lightbulb, Handshake, Recycling, ThumbUp, Diversity3 } from "@mui/icons-material"

const AboutUsValues = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      icon: <Diamond className="text-4xl text-pink-500" />,
      title: "Excellence",
      description: "We strive for excellence in every project, paying meticulous attention to detail and quality.",
    },
    {
      icon: <Lightbulb className="text-4xl text-yellow-500" />,
      title: "Innovation",
      description: "We embrace innovative design solutions and cutting-edge technologies to create unique spaces.",
    },
    {
      icon: <Handshake className="text-4xl text-blue-500" />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices.",
    },
    {
      icon: <Recycling className="text-4xl text-green-500" />,
      title: "Sustainability",
      description: "We are committed to environmentally responsible design and construction practices.",
    },
    {
      icon: <ThumbUp className="text-4xl text-purple-500" />,
      title: "Client Focus",
      description: "We prioritize our clients' needs and satisfaction throughout the entire project journey.",
    },
    {
      icon: <Diversity3 className="text-4xl text-orange-500" />,
      title: "Teamwork",
      description: "We believe in collaborative efforts and the power of diverse perspectives.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-lg block mb-2"
          >
            Our Core Values
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 dark:text-white"
          >
            What Drives Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
          >
            Our values form the foundation of everything we do at IDMITS DESIGNS. They guide our decisions, shape our
            culture, and define our approach to design and construction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 bg-primary text-white p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Our Mission</h3>
          <p className="text-xl max-w-3xl mx-auto text-gray-500">
            "To create exceptional spaces that enhance the quality of life for our clients through innovative design,
            quality craftsmanship, and sustainable practices."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsValues
