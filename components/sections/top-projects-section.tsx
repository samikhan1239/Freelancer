"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { ProjectCard } from "@/components/cards/project-card"

// Define CardVariant enum to match the ProjectCard prop
export enum CardVariant {
  Center = "center",
  Side = "side",
}

// Define the Project interface
export interface Project {
  id: number
  title: string
  description: string
  image?: string
  tech: string[]
  category: string
  price: string
  duration: string
  color: string
  featured?: boolean
  stats?: Record<string, string | number | undefined> // ✅ allow undefined
}

export const TopProjectsSection = ({ topProjects }: { topProjects: Project[] }) => {
  if (!topProjects || topProjects.length === 0) {
    return (
      <section id="top-projects" className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(251,191,36,0)", "0 0 20px rgba(251,191,36,0.5)", "0 0 0 rgba(251,191,36,0)"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Star className="w-8 h-8 text-yellow-400" />
              <h2 className="text-5xl md:text-7xl font-black">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  TOP
                </span>{" "}
                <span className="text-white">PROJECTS</span>
              </h2>
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No projects available at the moment. Check back soon!
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
       <section id="top-projects" className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Star className="w-8 h-8 text-yellow-400" />
              <h2 className="text-5xl md:text-7xl font-black">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  TOP
                </span>{" "}
                <span className="text-white">PROJECTS</span>
              </h2>
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Hexagonal Grid Layout */}
          <div className="relative">
            {/* Center Project */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <ProjectCard project={topProjects[0]} index={0} variant={CardVariant.Center} />
            </motion.div>

            {/* Side Projects */}
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {topProjects.slice(1).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} index={index + 1} variant={CardVariant.Side} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
