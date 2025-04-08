"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-2">
                <div className="absolute inset-0 bg-purple-600 rounded-md opacity-20"></div>
                <div className="absolute inset-2 border-2 border-purple-600 rounded-sm"></div>
                <div className="absolute inset-4 bg-purple-600 rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">TechSoft</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium">
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium">
                Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/testimonials" className="text-gray-700 hover:text-purple-600 font-medium">
                Testimonials
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/plans" className="text-gray-700 hover:text-purple-600 font-medium">
                Discover Plans
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium">
                Contact Us
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-purple-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-purple-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/plans"
              className="text-gray-700 hover:text-purple-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover Plans
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
