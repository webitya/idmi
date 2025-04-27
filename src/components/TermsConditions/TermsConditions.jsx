"use client"

import { motion } from "framer-motion"

const TermsConditions = () => {
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
            Terms and Conditions
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
                These terms and conditions outline the rules and regulations for the use of IDMITS DESIGNS's website. By
                accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
                IDMITS DESIGNS's website if you do not accept all of the terms and conditions stated on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, IDMITS DESIGNS and/or its licensors own the intellectual property rights for
                all material on IDMITS DESIGNS. All intellectual property rights are reserved. You may view and/or print
                pages from the website for your own personal use subject to restrictions set in these terms and
                conditions.
              </p>
              <p className="mt-4">You must not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Republish material from this website</li>
                <li>Sell, rent or sub-license material from the website</li>
                <li>Reproduce, duplicate or copy material from the website</li>
                <li>
                  Redistribute content from IDMITS DESIGNS (unless content is specifically made for redistribution)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">User Comments</h2>
              <p>
                Certain parts of this website offer the opportunity for users to post and exchange opinions,
                information, material and data. IDMITS DESIGNS does not screen, edit, publish or review Comments prior
                to their appearance on the website and Comments do not reflect the views or opinions of IDMITS DESIGNS,
                its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or
                opinion.
              </p>
              <p className="mt-4">
                IDMITS DESIGNS reserves the right to monitor all Comments and to remove any Comments which it considers
                in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and
                Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Warranty Disclaimer</h2>
              <p>
                The materials on IDMITS DESIGNS's website are provided on an 'as is' basis. IDMITS DESIGNS makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mt-4">
                Further, IDMITS DESIGNS does not warrant or make any representations concerning the accuracy, likely
                results, or reliability of the use of the materials on its website or otherwise relating to such
                materials or on any sites linked to this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Limitations</h2>
              <p>
                In no event shall IDMITS DESIGNS or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on IDMITS DESIGNS's website, even if IDMITS DESIGNS or a IDMITS
                DESIGNS authorized representative has been notified orally or in writing of the possibility of such
                damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India and you
                irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Changes to Terms</h2>
              <p>
                IDMITS DESIGNS reserves the right, at its sole discretion, to modify or replace these Terms at any time.
                If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mt-4">These terms and conditions were last updated on {new Date().toLocaleDateString()}.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <div className="mt-2">
                <p>
                  <strong>IDMITS DESIGNS</strong>
                </p>
                <p>Gurgaon, Haryana, India</p>
                <p>Phone: 1234567890</p>
                <p>Email: info@idmitsdesigns.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions
