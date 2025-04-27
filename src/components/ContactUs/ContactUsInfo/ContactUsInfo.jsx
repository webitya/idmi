"use client"

import { motion } from "framer-motion"
import { Phone, Email, LocationOn, AccessTime, Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"

const ContactUsInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Reach Out to Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <LocationOn className="text-primary mt-1 mr-3" />
              <div>
                <p className="font-medium dark:text-white">Office Address</p>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Design Avenue, Sector 29
                  <br />
                  Gurgaon, Haryana 122001
                  <br />
                  India
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <Phone className="text-primary mr-3" />
              <div>
                <p className="font-medium dark:text-white">Phone Number</p>
                <a href="tel:1234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  1234567890
                </a>
              </div>
            </li>
            <li className="flex items-center">
              <Email className="text-primary mr-3" />
              <div>
                <p className="font-medium dark:text-white">Email Address</p>
                <a href="mailto:info@idmitsdesigns.com" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  info@idmitsdesigns.com
                </a>
              </div>
            </li>
            <li className="flex items-center">
              <AccessTime className="text-primary mr-3" />
              <div>
                <p className="font-medium dark:text-white">Business Hours</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white text-gray-600 dark:text-gray-300 p-2 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white text-gray-600 dark:text-gray-300 p-2 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white text-gray-600 dark:text-gray-300 p-2 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white text-gray-600 dark:text-gray-300 p-2 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Service Areas</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            We provide our design and construction services throughout Gurgaon and surrounding areas in Haryana,
            including:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
            <li>• Gurgaon</li>
            <li>• Delhi NCR</li>
            <li>• Faridabad</li>
            <li>• Noida</li>
            <li>• Sonipat</li>
            <li>• Rohtak</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong className="dark:text-white">Note:</strong> For project inquiries, please fill out the contact form
          with your requirements, and our team will get back to you within 24 hours.
        </p>
      </div>
    </motion.div>
  )
}

export default ContactUsInfo
