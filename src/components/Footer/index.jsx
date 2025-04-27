import Link from "next/link"
import { Phone, Email, LocationOn, Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"

const FooterEl = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">IDMITS DESIGNS</h3>
            <p className="mb-4 text-gray-300">
              Premium construction and interior design services for your dream spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <LinkedIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-300 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/interior-design" className="text-gray-300 hover:text-primary transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className="text-gray-300 hover:text-primary transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="text-gray-300 hover:text-primary transition-colors">
                  Renovation
                </Link>
              </li>
              <li>
                <Link href="/services/architecture" className="text-gray-300 hover:text-primary transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="text-gray-300 hover:text-primary transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <LocationOn className="mr-2 text-primary" />
                <span className="text-gray-300">Gurgaon, Haryana, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary" />
                <a href="tel:1234567890" className="text-gray-300 hover:text-primary transition-colors">
                  1234567890
                </a>
              </li>
              <li className="flex items-center">
                <Email className="mr-2 text-primary" />
                <a href="mailto:info@idmitsdesigns.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@idmitsdesigns.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IDMITS DESIGNS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterEl
