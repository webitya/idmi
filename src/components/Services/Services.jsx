"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { HomeWork, Construction, Brush, Architecture, Apartment } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: <HomeWork className="text-4xl text-primary" />,
      title: "Interior Design",
      description: "Transform your space with our expert interior design services tailored to your style and needs.",
      details: [
        "Residential interior design",
        "Commercial interior design",
        "Space planning and optimization",
        "Color scheme and material selection",
        "Custom furniture design",
        "Lighting design",
        "Accessory and art curation",
      ],
      image: "/img4.webp",
      link: "/services/interior-design",
    },
    {
      icon: <Construction className="text-4xl text-primary" />,
      title: "Construction",
      description: "Build your dream home or commercial space with our comprehensive construction services.",
      details: [
        "New construction projects",
        "Building extensions",
        "Structural modifications",
        "Foundation work",
        "Framing and carpentry",
        "Electrical and plumbing installation",
        "Roofing and exterior finishing",
      ],
      image: "/img4.webp",
      link: "/services/construction",
    },
    {
      icon: <Brush className="text-4xl text-primary" />,
      title: "Renovation",
      description: "Revitalize your existing space with our expert renovation and remodeling services.",
      details: [
        "Complete home renovations",
        "Kitchen remodeling",
        "Bathroom renovations",
        "Basement finishing",
        "Office renovations",
        "Restaurant and retail renovations",
        "Historic building restoration",
      ],
      image: "/img4.webp",
      link: "/services/renovation",
    },
    {
      icon: <Architecture className="text-4xl text-primary" />,
      title: "Architecture",
      description: "Create stunning, functional architectural designs that stand the test of time.",
      details: [
        "Architectural concept development",
        "Building design and planning",
        "3D modeling and visualization",
        "Construction documentation",
        "Permit application assistance",
        "Sustainable design solutions",
        "Building code compliance",
      ],
      image: "/img4.webp",
      link: "/services/architecture",
    },
    {
      icon: <Apartment className="text-4xl text-primary" />,
      title: "Consultation",
      description: "Get expert advice and guidance for your construction and interior design projects.",
      details: [
        "Design consultations",
        "Project feasibility studies",
        "Budget planning and cost estimation",
        "Material and finish recommendations",
        "Vendor and contractor recommendations",
        "Project timeline development",
        "Design trend analysis",
      ],
      image: "/img4.webp",
      link: "/services/consultation",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/img1.webp')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              What We Offer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We provide comprehensive design and construction services to transform your spaces into beautiful, functional environments tailored to your unique needs and preferences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className={`${index % 2 === 1 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">What We Offer:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold text-lg block mb-2"
            >
              Our Process
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 dark:text-white"
            >
              How We Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
            >
              Our streamlined process ensures a smooth experience from initial consultation to project completion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Consultation", "Design", "Execution", "Delivery"].map((title, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {title === "Consultation"
                    ? "We begin with an in-depth consultation to understand your vision, requirements, and budget."
                    : title === "Design"
                    ? "Our designers create detailed plans and 3D visualizations to bring your project to life."
                    : title === "Execution"
                    ? "Our skilled team implements the design with precision, quality materials, and craftsmanship."
                    : "We complete the project on time and ensure your complete satisfaction with the final result."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400"
            >
              Ready to Build Your Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Let's work together to create powerful spaces with strength, precision, and vision. Connect with our expert team today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contactus"
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-md shadow-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
