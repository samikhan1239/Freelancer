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
    id: 1,
    title: "AI-Powered Trading Bot",
    description: "Machine learning algorithm that predicts market trends with 94% accuracy",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
    category: "Machine Learning",
    price: "$8,500",
    duration: "8-10 weeks",
    color: "from-cyan-400 to-blue-600",
    featured: true,
    stats: { accuracy: "94%", profit: "+340%", users: "10K+" },
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard",
    description: "Full-stack platform processing 1M+ data points per second",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Node.js", "Redis", "WebSocket", "D3.js"],
    category: "Full Stack",
    price: "$6,200",
    duration: "6-8 weeks",
    color: "from-purple-400 to-pink-600",
    featured: true,
    stats: { speed: "1M/sec", uptime: "99.9%", clients: "50+" },
  },
  {
    id: 3,
    title: "Neural Network API",
    description: "Scalable ML microservices architecture with auto-scaling",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "PyTorch"],
    category: "Backend",
    price: "$7,800",
    duration: "7-9 weeks",
    color: "from-green-400 to-emerald-600",
    featured: true,
    stats: { requests: "100K/min", latency: "50ms", accuracy: "97%" },
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