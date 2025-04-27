"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", name: "All" },
    { id: "interior", name: "Interior" },
    { id: "construction", name: "Construction" },
    { id: "renovation", name: "Renovation" },
    { id: "architecture", name: "Architecture" },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Apartment Design",
      category: "interior",
      image: "/img3.webp",
      description: "A complete interior redesign of a 3-bedroom apartment in Gurgaon.",
      client: "Private Residence",
      year: "2023",
    },
    {
      id: 2,
      title: "Luxury Villa Construction",
      category: "construction",
      image: "/img3.webp",
      description: "Custom-built luxury villa with modern amenities and sustainable features.",
      client: "Private Client",
      year: "2022",
    },
    {
      id: 3,
      title: "Office Space Renovation",
      category: "renovation",
      image: "/img3.webp",
      description: "Complete renovation of a 5000 sq ft corporate office space.",
      client: "Tech Solutions Inc.",
      year: "2023",
    },
    {
      id: 4,
      title: "Minimalist Home Design",
      category: "interior",
      image: "/img3.webp",
      description: "Minimalist interior design for a contemporary home.",
      client: "Private Residence",
      year: "2022",
    },
    {
      id: 5,
      title: "Commercial Building",
      category: "construction",
      image: "/img3.webp",
      description: "Design and construction of a multi-story commercial building.",
      client: "Haryana Business Group",
      year: "2021",
    },
    {
      id: 6,
      title: "Kitchen Remodeling",
      category: "renovation",
      image: "/img3.webp",
      description: "Modern kitchen renovation with custom cabinetry and high-end appliances.",
      client: "Private Residence",
      year: "2023",
    },
    {
      id: 7,
      title: "Residential Complex",
      category: "architecture",
      image: "/img3.webp",
      description: "Architectural design for a residential complex with 24 units.",
      client: "Gurgaon Developers",
      year: "2022",
    },
    {
      id: 8,
      title: "Restaurant Interior",
      category: "interior",
      image: "/img3.webp",
      description: "Complete interior design for a fine dining restaurant.",
      client: "Spice Garden Restaurant",
      year: "2023",
    },
    {
      id: 9,
      title: "Retail Store Design",
      category: "interior",
      image: "/img3.webp",
      description: "Interior design for a high-end retail clothing store.",
      client: "Fashion Forward",
      year: "2022",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of completed projects showcasing our expertise in design and construction.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                    <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Client: {project.client}</span>
                    <span>Year: {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can bring your vision to life with our expert design and construction services.
            </p>
            <div>
              <Link
                href="/contactus"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
