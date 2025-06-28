"use client"

import { motion } from "framer-motion"

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 transform -skew-y-3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ABOUT</span>{" "}
              <span className="text-white">ME</span>
            </h2>

            {/* Animated Skill Bars */}
            <div className="space-y-6">
              {[
                { skill: "Machine Learning", level: 95, color: "cyan" },
                { skill: "Full Stack Development", level: 90, color: "purple" },
                { skill: "Backend Architecture", level: 88, color: "green" },
                { skill: "Frontend Design", level: 85, color: "orange" },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-view"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-bold">{item.skill}</span>
                    <span className={`text-${item.color}-400 font-bold`}>{item.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 3D Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96">
              {/* Tech Stack Pyramid */}
              {[
                { name: "Python", level: 0, color: "yellow" },
                { name: "JavaScript", level: 1, color: "blue" },
                { name: "React", level: 1, color: "cyan" },
                { name: "Node.js", level: 2, color: "green" },
                { name: "TensorFlow", level: 2, color: "orange" },
                { name: "MongoDB", level: 2, color: "green" },
                { name: "Docker", level: 3, color: "blue" },
                { name: "AWS", level: 3, color: "orange" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`absolute px-4 py-2 bg-gradient-to-r from-${tech.color}-400 to-${tech.color}-600 rounded-lg text-black font-bold text-sm cursor-grab`}
                  style={{
                    left: `${20 + (index % 3) * 30}%`,
                    top: `${20 + tech.level * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 10,
                  }}
                  drag
                  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
