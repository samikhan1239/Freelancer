"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Award } from "lucide-react"
import Image from "next/image"
import { CardVariant, Project } from "@/components/sections/top-projects-section" // adjust import path as needed

interface ProjectCardProps {
  project: Project
  index: number
  variant: CardVariant
}

export const ProjectCard = ({ project, index, variant }: ProjectCardProps) => {
  return (
    <motion.div
      className={`group cursor-pointer ${variant === CardVariant.Center ? "max-w-2xl" : "max-w-lg"} w-full`}
      whileHover={{
        y: -20,
        rotateX: variant === CardVariant.Center ? 5 : 10,
        rotateY: variant === CardVariant.Side ? (index % 2 === 0 ? -5 : 5) : 0,
        scale: variant === CardVariant.Center ? 1.05 : 1.02,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="bg-gradient-to-br from-black/90 to-gray-900/90 border-2 border-transparent hover:border-yellow-400/50 backdrop-blur-sm overflow-hidden relative transition-all duration-500 h-full">
        {/* Holographic Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-green-400/10 opacity-0 group-hover:opacity-100"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          style={{ backgroundSize: "200% 200%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full font-black text-sm flex items-center gap-1"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 10px rgba(251,146,60,0.5)",
                  "0 0 20px rgba(251,146,60,0.8)",
                  "0 0 10px rgba(251,146,60,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-4 h-4" />
              FEATURED
            </motion.div>
          </div>
        )}

        <div className="relative overflow-hidden">
          <Image
            src={project.image ?? "/placeholder.svg"}
            alt={`${project.title} preview`}
            width={variant === CardVariant.Center ? 600 : 400}
            height={300}
            className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
              variant === CardVariant.Center ? "h-64" : "h-48"
            }`}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            role="button"
            aria-label={`Play ${project.title} demo`}
            tabIndex={0}
            onClick={() => console.log(`Play demo for ${project.title}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                console.log(`Play demo for ${project.title}`)
              }
            }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Play className="w-8 h-8 text-black" />
            </motion.div>
          </div>

          <div className="absolute top-4 right-4">
            <Badge className={`bg-gradient-to-r ${project.color} text-black font-black px-3 py-1 rounded-full`}>
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="relative z-10">
          <CardTitle className={`text-white font-black mb-2 ${variant === CardVariant.Center ? "text-2xl" : "text-xl"}`}>
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-300 font-medium">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          {/* Stats */}
          {project.stats && Object.keys(project.stats).length > 0 && (
            <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-white/5 rounded-lg">
              {Object.entries(project.stats).map(
                ([key, value]) =>
                  value !== undefined && (
                    <div key={key} className="text-center">
                      <motion.div
                        className="text-cyan-400 font-black text-lg"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
                      >
                        {value}
                      </motion.div>
                      <div className="text-gray-400 text-xs font-bold capitalize">{key}</div>
                    </div>
                  )
              )}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-300 font-bold hover:bg-cyan-400/20 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="border-gray-400/50 text-gray-400 font-bold">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>

          {/* Price and Duration */}
          <div className="flex justify-between items-center">
            <motion.span
              className={`font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent ${
                variant === CardVariant.Center ? "text-4xl" : "text-3xl"
              }`}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              {project.price}
            </motion.span>
            <span className="text-gray-400 font-bold">{project.duration}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
