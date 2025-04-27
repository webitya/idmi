"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Close } from "@mui/icons-material";

const DrawerEl = ({ isOpen, setIsOpen }) => {
  const closeDrawer = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
  ];

  const drawerVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white dark:bg-gray-900 z-50 shadow-xl"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-primary">IDMITS DESIGNS</h2>
                <button onClick={closeDrawer} className="text-gray-700 dark:text-gray-200 focus:outline-none">
                  <Close />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className="text-lg text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                      onClick={closeDrawer}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <Link
                  href="/contactus"
                  className="block w-full bg-primary hover:bg-primary/90 text-white text-center px-6 py-3 rounded-md transition-colors"
                  onClick={closeDrawer}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DrawerEl;
