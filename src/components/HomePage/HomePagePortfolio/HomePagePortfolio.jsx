"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const HomePagePortfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const filters = [
    { id: "all", name: "All" },
    { id: "interior", name: "Interior" },
    { id: "construction", name: "Construction" },
    { id: "renovation", name: "Renovation" },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Apartment Design",
      category: "interior",
      image: "/img3.webp",
      link: "/portfolio/modern-apartment",
    },
    {
      id: 2,
      title: "Luxury Villa Construction",
      category: "construction",
      image: "/img3.webp",
      link: "/portfolio/luxury-villa",
    },
    {
      id: 3,
      title: "Office Space Renovation",
      category: "renovation",
      image: "/img3.webp",
      link: "/portfolio/office-renovation",
    },
    {
      id: 4,
      title: "Minimalist Home Design",
      category: "interior",
      image: "/img3.webp",
      link: "/portfolio/minimalist-home",
    },
    {
      id: 5,
      title: "Commercial Building",
      category: "construction",
      image: "/img3.webp",
      link: "/portfolio/commercial-building",
    },
    {
      id: 6,
      title: "Kitchen Remodeling",
      category: "renovation",
      image: "/img3.webp",
      link: "/portfolio/kitchen-remodeling",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-20" style={{ backgroundColor: "#f9fafb" }} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-lg block mb-2"
            style={{ color: "#0070f3" }}
          >
            Our Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#111827" }}
          >
            Our Recent Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
            style={{ color: "#6b7280" }}
          >
            Explore our portfolio of completed projects showcasing our expertise in construction and interior design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors border`}
                style={{
                  backgroundColor: activeFilter === filter.id ? "#0070f3" : "#ffffff",
                  color: activeFilter === filter.id ? "#ffffff" : "#374151",
                  borderColor: "#d1d5db",
                  borderWidth: "1px",
                }}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <Link href={project.link}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-gray-300 capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 rounded-md transition-colors"
            style={{
              backgroundColor: "#0070f3",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "8px",
            }}
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HomePagePortfolio
