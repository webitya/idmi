"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { LinkedIn, Twitter, Email } from "@mui/icons-material"

const AboutUsTeam = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/p2.webp",
      bio: "With over 20 years of experience in design and construction, Rajesh founded IDMITS DESIGNS with a vision to transform spaces across Haryana.",
      social: { linkedin: "#", twitter: "#", email: "rajesh@idmitsdesigns.com" },
    },
    {
      name: "Priya Sharma",
      position: "Creative Director",
      image: "/p2.webp",
      bio: "Priya brings 15 years of interior design expertise, specializing in creating harmonious and functional spaces for residential and commercial projects.",
      social: { linkedin: "#", twitter: "#", email: "priya@idmitsdesigns.com" },
    },
    {
      name: "Amit Patel",
      position: "Head of Construction",
      image: "/p2.webp",
      bio: "Amit oversees all construction projects, ensuring quality execution, timely delivery, and adherence to safety standards.",
      social: { linkedin: "#", twitter: "#", email: "amit@idmitsdesigns.com" },
    },
    {
      name: "Neha Gupta",
      position: "Senior Interior Designer",
      image: "/p2.webp",
      bio: "Neha specializes in luxury residential interiors, bringing a unique blend of elegance and functionality to every project.",
      social: { linkedin: "#", twitter: "#", email: "neha@idmitsdesigns.com" },
    },
    {
      name: "Vikram Singh",
      position: "Project Manager",
      image: "/p2.webp",
      bio: "Vikram ensures seamless coordination between design and execution teams, managing timelines and client communications.",
      social: { linkedin: "#", twitter: "#", email: "vikram@idmitsdesigns.com" },
    },
    {
      name: "Ananya Reddy",
      position: "3D Visualization Specialist",
      image: "/p2.webp",
      bio: "Ananya creates stunning 3D visualizations that help clients envision their spaces before construction begins.",
      social: { linkedin: "#", twitter: "#", email: "ananya@idmitsdesigns.com" },
    },
  ]

  return (
    <section className="py-20 bg-sky-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-amber-500 font-semibold text-lg block mb-2"
          >
            Meet Our Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800 dark:text-white"
          >
            The Experts Behind IDMITS DESIGNS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-sky-700 dark:text-gray-300 mb-12"
          >
            Our talented team of designers, architects, and construction professionals work together to bring your
            vision to life. Each member brings unique expertise and passion to every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-80">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-indigo-800 dark:text-white">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{member.position}</p>
                <p className="text-sky-700 dark:text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Email />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 bg-indigo-50 dark:bg-gray-700 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/img3.webp"
                alt="IDMITS DESIGNS Team Culture"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-white">Our Team Culture</h3>
              <p className="text-sky-700 dark:text-gray-300 mb-4">
                At IDMITS DESIGNS, we foster a collaborative and innovative environment where creativity thrives. Our
                team members are encouraged to share ideas, take initiative, and continuously develop their skills.
              </p>
              <p className="text-sky-700 dark:text-gray-300">
                We believe that a positive team culture translates into exceptional client experiences and outstanding
                project outcomes. Our diverse team brings together different perspectives, skills, and experiences to
                create truly unique and personalized spaces.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsTeam
