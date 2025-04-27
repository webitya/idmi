"use client"

import { motion } from "framer-motion"

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white"
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-primary mx-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6 text-gray-700 dark:text-gray-300"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Introduction</h2>
              <p>
                At IDMITS DESIGNS, we respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we look after your personal data when you visit our website and
                tell you about your privacy rights and how the law protects you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">The Data We Collect About You</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person
                can be identified. It does not include data where the identity has been removed (anonymous data).
              </p>
              <p className="mt-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                <li>
                  Technical Data includes internet protocol (IP) address, your login data, browser type and version,
                  time zone setting and location, browser plug-in types and versions, operating system and platform, and
                  other technology on the devices you use to access this website.
                </li>
                <li>Usage Data includes information about how you use our website, products and services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <div className="mt-2">
                <p>
                  <strong>IDMITS DESIGNS</strong>
                </p>
                <p>Gurgaon, Haryana, India</p>
                <p>Phone: 1234567890</p>
                <p>Email: info@idmitsdesigns.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Changes to the Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page.
              </p>
              <p className="mt-4">This privacy policy was last updated on {new Date().toLocaleDateString()}.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
