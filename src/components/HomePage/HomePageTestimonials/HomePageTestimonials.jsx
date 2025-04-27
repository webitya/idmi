"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { FormatQuote, ArrowBack, ArrowForward } from "@mui/icons-material"

const HomePageTestimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Homeowner",
      image: "/p1.webp",
      quote:
        "BuildSpace transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations. We couldn't be happier with the results!",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Business Owner",
      image: "/p1.webp",
      quote:
        "Working with BuildSpace on our office renovation was a seamless experience. They understood our vision and delivered a space that perfectly balances functionality and aesthetics. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Interior Design Enthusiast",
      image: "/p1.webp",
      quote:
        "The BuildSpace team brought creativity and innovation to our project. They listened to our ideas and enhanced them with their expertise. The final result is beyond what we imagined possible.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-lg block mb-2"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Hear from our satisfied clients about their experience working with BuildSpace.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12">
            <FormatQuote className="text-primary text-5xl absolute top-6 left-6 opacity-20" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <h4 className="text-xl font-bold dark:text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowBack />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowForward />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomePageTestimonials
