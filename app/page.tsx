"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { RevolutionaryCursor } from "@/components/cursor/revolutionary-cursor"
import { AdvancedAnimatedBackground } from "@/components/background/animated-background"
import { Navigation } from "@/components/navigation/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { TopProjectsSection } from "@/components/sections/top-projects-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BookingModal } from "@/components/modals/booking-modal"
import { Footer } from "@/components/footer/footer"

const topProjects = [
  {
    id: 2,
    title: "Stay Finder",
    description:
      "A real-world, full-stack Airbnb clone with modern itinerary planning and ML-optimized search, featuring animated UI and secure payment processing.",
    image: "/stayFinder.png",
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS", "Vite", "Docker", "Scikit-learn"],
    category: "Machine Learning",
    price: "$9,000",
    duration: "Apr 2025 - Aug 2025",
    color: "from-blue-500 to-cyan-500",
    featured: true,
    stats: {
      listings: "50+ Daily",
      uptime: "99%",
      retrieval: "25% Faster",
    },
  },
  {
    id: 3,
    title: "Warsi Homeopathic Clinic",
    description:
      "A full-stack platform for appointment booking and e-learning, with ML-enhanced course recommendations for 200+ patients and students.",
    image: "/clinic.png",
    tech: ["Next.js", "PostgreSQL", "Neon", "Node.js", "Tailwind CSS", "Prisma", "Cloudinary", "TensorFlow"],
    category: "Full Stack",
    price: "$7,500",
    duration: "Jan 2025 - Mar 2025",
    color: "from-teal-500 to-green-500",
    featured: true,
    stats: {
      patients: "200+",
      uptime: "99%",
      requests: "100+ Daily",
    },
  },
  {
    id: 4,
    title: "Love Sync",
    description:
      "A full-stack matrimonial site with admin-approved profiles and mutual match consent, ensuring privacy with ML-enhanced recommendations.",
    image: "/love.png",
    tech: ["Next.js", "PostgreSQL", "Neon", "Node.js", "Tailwind CSS", "Prisma", "TensorFlow"],
    category: "Full Stack",
    price: "$8,200",
    duration: "Dec 2024 - Feb 2025",
    color: "from-purple-500 to-pink-500",
    featured: true,
    stats: {
      matches: "50+ Daily",
      uptime: "99%",
      requests: "200+ Daily",
    },
  },
]

export default function Portfolio() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("hero")

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "top-projects", "about", "services", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <RevolutionaryCursor />
      <AdvancedAnimatedBackground />

      {/* Enhanced Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 via-green-400 to-orange-400 origin-left z-50"
        style={{ scaleX }}
      />

      <Navigation
        currentSection={currentSection}
        scrollToSection={scrollToSection}
        setIsBookingOpen={setIsBookingOpen}
      />

      <HeroSection scrollToSection={scrollToSection} setIsBookingOpen={setIsBookingOpen} />

      <TopProjectsSection topProjects={topProjects} />

      <AboutSection />

      <ServicesSection />

      <PortfolioSection />

      <ContactSection />

      <BookingModal isBookingOpen={isBookingOpen} setIsBookingOpen={setIsBookingOpen} />

      <Footer />
    </div>
  )
}