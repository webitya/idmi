"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { CheckCircle, Star } from "@mui/icons-material"
import Link from "next/link"

const HomePageAbout = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const benefits = [
    "Expert team of designers and builders",
    "15+ years of industry experience",
    "Customized solutions for every project",
    "High-quality materials and craftsmanship",
    "On-time and on-budget delivery",
    "Comprehensive project management",
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Team Members" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
            ref={ref}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/img2.webp"
                alt="About IDMITS DESIGNS"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-lg">Years Experience</p>
            </div>

            {/* Testimonial Badge */}
            <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg max-w-[200px]">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-500 h-4 w-4" />
                ))}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                "IDMITS transformed our space beyond our expectations!"
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">- Rahul S., Gurgaon</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.span variants={itemVariants} className="text-blue-600 font-semibold text-lg block mb-2">
              About Us
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              We Create Spaces That Inspire
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-6">
              IDMITS DESIGNS is a premier construction and interior design company based in Gurgaon, Haryana. We are
              dedicated to creating exceptional spaces that reflect your unique style and meet your specific needs. With
              over 15 years of experience, our team of experts combines creativity, technical knowledge, and attention
              to detail to deliver outstanding results.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you're looking to build a new home, renovate your existing space, or transform your interior
              design, we have the expertise and resources to bring your vision to life. Our comprehensive services cover
              everything from initial concept development to final implementation, ensuring a seamless experience from
              start to finish.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2" />
                  <span className="dark:text-white">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Link
                href="/aboutus"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors inline-block"
              >
                Learn More About Us
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{stat.number}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomePageAbout
