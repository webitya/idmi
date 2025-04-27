"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import DrawerEl from "../Drawer"; // Import the DrawerEl component

const NavbarEl = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control Drawer visibility
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer state
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

  return (
    <>
      {/* DrawerEl Component */}
      <DrawerEl isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />

      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
        style={{ borderBottom: scrolled ? "2px solid #f1f1f1" : "none" }}
      >
        {/* Top Bar with Contact Info */}
        {!scrolled && (
          <div className="bg-[#f8f9fa] py-2">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center space-x-6 text-sm text-[#333]">
                <a href="tel:1234567890" className="flex items-center hover:text-[#0070f3] transition">
                  <Phone style={{ fontSize: 16, marginRight: 4 }} /> 1234567890
                </a>
                <a href="mailto:info@idmitsdesigns.com" className="flex items-center hover:text-[#0070f3] transition">
                  <Email style={{ fontSize: 16, marginRight: 4 }} /> info@idmitsdesigns.com
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm text-[#333]">
                <a href="#" className="hover:text-[#0070f3] transition">Careers</a>
                <a href="#" className="hover:text-[#0070f3] transition">FAQ</a>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-extrabold text-[#0070f3]"
            >
              IDMITS DESIGNS
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.path}
                  className={`text-[#333] hover:text-[#0070f3] transition font-medium ${
                    pathname === link.path ? "font-bold text-[#0070f3]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/contactus"
                className="bg-[#0070f3] hover:bg-[#005bb5] text-white px-6 py-2 rounded-md font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDrawer}
              className="text-[#333] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarEl;
