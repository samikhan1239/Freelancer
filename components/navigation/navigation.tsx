"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  currentSection: string
  scrollToSection: (sectionId: string) => void
  setIsBookingOpen: (open: boolean) => void
}

export const Navigation = ({ currentSection, scrollToSection, setIsBookingOpen }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 bg-black/10 backdrop-blur-xl border-b border-cyan-400/20"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent cursor-magnetic"
        >
          ⚡ SAMI
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["hero", "top-projects", "about", "services", "portfolio", "contact"].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize font-bold transition-all duration-300 ${
                currentSection === section ? "text-cyan-400 text-lg" : "text-white hover:text-cyan-400 hover:scale-110"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.replace("-", " ")}
            </motion.button>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-bold px-6 py-2 rounded-full border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/25 cursor-magnetic"
            >
              🚀 HIRE ME
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-cyan-400 hover:bg-cyan-400/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {["hero", "top-projects", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left text-white hover:text-cyan-400 capitalize py-2 font-bold"
                >
                  {section.replace("-", " ")}
                </button>
              ))}
              <Button
                onClick={() => {
                  setIsBookingOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold"
              >
                🚀 HIRE ME
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
