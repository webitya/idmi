"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HomeWork, Construction, Brush, Architecture, Apartment, ArrowForward } from "@mui/icons-material";
import Link from "next/link";

const HomePageServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const services = [
    {
      icon: <HomeWork className="text-4xl" style={{ color: "#2563eb" }} />,
      title: "Interior Design",
      description: "Transform your space with our expert interior design services tailored to your style and needs.",
      link: "/services/interior-design",
    },
    {
      icon: <Construction className="text-4xl" style={{ color: "#2563eb" }} />,
      title: "Construction",
      description: "Build your dream home or commercial space with our comprehensive construction services.",
      link: "/services/construction",
    },
    {
      icon: <Brush className="text-4xl" style={{ color: "#2563eb" }} />,
      title: "Renovation",
      description: "Revitalize your existing space with our expert renovation and remodeling services.",
      link: "/services/renovation",
    },
    {
      icon: <Architecture className="text-4xl" style={{ color: "#2563eb" }} />,
      title: "Architecture",
      description: "Create stunning, functional architectural designs that stand the test of time.",
      link: "/services/architecture",
    },
    {
      icon: <Apartment className="text-4xl" style={{ color: "#2563eb" }} />,
      title: "Consultation",
      description: "Get expert advice and guidance for your construction and interior design projects.",
      link: "/services/consultation",
    },
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-lg block mb-2"
            style={{ color: "#2563eb" }}
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
          >
            What We Offer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            We provide a comprehensive range of construction and interior design services to meet all your needs, from
            concept to completion.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center font-medium transition-colors"
                style={{ color: "#2563eb" }}
              >
                Learn More <ArrowForward className="ml-1 text-sm" />
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
            href="/services"
            className="text-white px-8 py-3 rounded-md transition-colors inline-block"
            style={{
              backgroundColor: "#2563eb",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageServices;
