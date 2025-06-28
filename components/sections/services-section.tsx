"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Layers, Database, Code } from "lucide-react"

// Define the Service interface
interface Service {
  icon: JSX.Element
  title: string
  description: string
  features: string[]
  color: string
}

// Define services array
const services: Service[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning",
    description: "AI models that learn, predict, and optimize",
    features: ["Deep Learning", "Computer Vision", "NLP", "Predictive Analytics"],
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Full Stack Development",
    description: "End-to-end web applications",
    features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
    color: "from-purple-400 to-pink-600",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Architecture",
    description: "Scalable server-side solutions",
    features: ["Microservices", "Cloud Infrastructure", "Database Optimization", "API Security"],
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Frontend Excellence",
    description: "Beautiful, responsive user interfaces",
    features: ["React/Vue.js", "TypeScript", "UI/UX Design", "Performance Optimization"],
    color: "from-orange-400 to-red-600",
  },
]

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">MY</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive development services from ML models to full-stack applications
          </p>
        </motion.div>

        {/* Enhanced Grid Layout with Card Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateY: 10,
              }}
              className="group cursor-pointer relative"
            >
              {/* Glowing Background Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              />

              <Card className="bg-gradient-to-br from-black/70 to-gray-900/70 border-2 border-gray-700/30 hover:border-purple-400/50 backdrop-blur-sm h-full transition-all duration-500 relative overflow-hidden rounded-2xl">
                {/* Animated Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `conic-gradient(from ${index * 90}deg, transparent, ${
                      service.color.split(" ")[3] || "cyan-600"
                    }, transparent)`,
                    padding: "2px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-black/70 to-gray-900/70 rounded-2xl" />
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                <CardHeader className="relative z-10 p-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative`}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(139,92,246,0.3)",
                        "0 0 40px rgba(139,92,246,0.6)",
                        "0 0 20px rgba(139,92,246,0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Icon Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-70 blur-md`}
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  <CardTitle className="text-white text-xl font-black mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 p-6 pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}
                          animate={{
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              "0 0 5px rgba(139,92,246,0.5)",
                              "0 0 15px rgba(139,92,246,0.8)",
                              "0 0 5px rgba(139,92,246,0.5)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: idx * 0.2,
                          }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Action Button */}
                  <motion.div
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 text-black font-bold transition-transform`}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}