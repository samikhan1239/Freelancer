"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import Image from "next/image"
import { portfolioItems } from "@/data/projects"

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Machine Learning", "Full Stack", "Backend", "Frontend"]
  const filteredProjects =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              MORE PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore my diverse portfolio of cutting-edge applications
          </p>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold cursor-magnetic relative overflow-hidden"
                      : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold transition-all duration-300"
                  }
                >
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-30"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  )}
                  <span className="relative">{category}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unique Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              // Define unique grid spans for bento layout
              const gridSpans = [
                "md:col-span-2 lg:col-span-3 md:row-span-2", // Large
                "md:col-span-2 lg:col-span-2 md:row-span-1", // Medium
                "md:col-span-2 lg:col-span-1 md:row-span-1", // Small
                "md:col-span-2 lg:col-span-2 md:row-span-2", // Tall
                "md:col-span-2 lg:col-span-3 md:row-span-1", // Wide
                "md:col-span-2 lg:col-span-1 md:row-span-2", // Narrow
              ]

              const spanClass = gridSpans[index % gridSpans.length]
              const isLarge = spanClass.includes("col-span-3")
              const isTall = spanClass.includes("row-span-2")

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${spanClass}`}
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                      rotateX: 5,
                      rotateY: 5,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card className="bg-gradient-to-br from-black/90 to-gray-900/90 border border-gray-700/30 hover:border-cyan-400/50 backdrop-blur-sm overflow-hidden h-full relative group transition-all duration-500">
                      {/* Holographic Border Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `conic-gradient(from ${index * 45}deg, transparent, ${project.color.split(" ")[1]}, transparent)`,
                          padding: "1px",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-black/90 to-gray-900/90 rounded-lg" />
                      </motion.div>

                      {/* Dynamic Background Particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-60`}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              x: [0, Math.random() * 50 - 25],
                              y: [0, Math.random() * 50 - 25],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                            isTall ? "h-48" : "h-32"
                          } ${isLarge ? "lg:h-64" : ""}`}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Floating Play Button */}
                        <motion.div
                          className="absolute inset-0 flex-bro items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2 }}
                        >
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center cursor-play shadow-lg`}
                            animate={{
                              boxShadow: [
                                "0 0 20px rgba(6,182,212,0.5)",
                                "0 0 40px rgba(6,182,212,0.8)",
                                "0 0 20px rgba(6,182,212,0.5)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Play className="w-6 h-6 text-black ml-1" />
                          </motion.div>
                        </motion.div>

                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <Badge className={`bg-gradient-to-r ${project.color} text-black font-bold text-xs px-2 py-1`}>
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="relative z-10 p-4">
                        <CardTitle className={`text-white font-black mb-2 ${isLarge ? "text-xl" : "text-lg"}`}>
                          {project.title}
                        </CardTitle>
                        <CardDescription className={`text-gray-400 ${isLarge ? "text-sm" : "text-xs"} line-clamp-2`}>
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative z-10 p-4 pt-0">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tech.slice(0, isLarge ? 4 : 2).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-purple-400/50 text-purple-300 text-xs font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > (isLarge ? 4 : 2) && (
                            <Badge variant="outline" className="border-gray-400/50 text-gray-400 text-xs">
                              +{project.tech.length - (isLarge ? 4 : 2)}
                            </Badge>
                          )}
                        </div>

                        {/* Price and Duration */}
                        <div className="flex justify-between items-center">
                          <motion.span
                            className={`font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent ${
                              isLarge ? "text-2xl" : "text-xl"
                            }`}
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                            style={{ backgroundSize: "200% 200%" }}
                          >
                            {project.price}
                          </motion.span>
                          <span className="text-gray-400 text-xs font-medium">{project.duration}</span>
                        </div>

                        {/* Hover Stats for Large Cards */}
                        {isLarge && (
                          <motion.div
                            className="mt-4 grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ y: 10 }}
                            whileInView={{ y: 0 }}
                          >
                            <div className="text-center p-2 bg-cyan-400/10 rounded-lg">
                              <div className="text-cyan-400 font-bold text-sm">98%</div>
                              <div className="text-gray-400 text-xs">Success</div>
                            </div>
                            <div className="text-center p-2 bg-purple-400/10 rounded-lg">
                              <div className="text-purple-400 font-bold text-sm">24/7</div>
                              <div className="text-gray-400 text-xs">Support</div>
                            </div>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-300 hover:to-cyan-300 text-black font-black px-8 py-3 cursor-magnetic relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 hover:opacity-30 transition-opacity duration-300"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <span className="relative">View All Projects</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}