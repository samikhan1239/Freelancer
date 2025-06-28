"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTypewriter } from "@/hooks/use-typewriter"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
  setIsBookingOpen: (open: boolean) => void
}

export const HeroSection = ({ scrollToSection, setIsBookingOpen }: HeroSectionProps) => {
  const typewriterText = useTypewriter("Full Stack + Machine Learning Developer", 80)

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            {/* Left Content - 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Enhanced Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full border border-cyan-400/30 backdrop-blur-sm cursor-view"
              >
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="text-cyan-400 font-bold">Available for Projects</span>
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                />
              </motion.div>

              {/* Main Title */}
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.span
                    className="block text-white mb-2"
                    animate={{ rotateX: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    I&apos;M
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    SAMI
                  </motion.span>
                </motion.h1>

                {/* Typewriter Subtitle */}
                <motion.div
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 min-h-[2.5rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="border-r-2 border-cyan-400 pr-2 animate-pulse">{typewriterText}</span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Crafting intelligent web applications with{" "}
                <motion.span
                  className="text-cyan-400 font-bold cursor-view"
                  whileHover={{ scale: 1.05, color: "#00ffff" }}
                >
                  machine learning
                </motion.span>{" "}
                at the core. From neural networks to scalable APIs, I build the future of digital experiences.
              </motion.p>

              {/* Interactive Tech Pills */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { name: "Python", icon: "🐍", color: "from-yellow-400 to-green-500" },
                  { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-500" },
                  { name: "AI/ML", icon: "🧠", color: "from-purple-400 to-pink-500" },
                  { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`px-4 py-2 bg-gradient-to-r ${tech.color} rounded-xl text-black font-bold text-sm flex items-center gap-2 cursor-grab`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      boxShadow: "0 10px 25px rgba(0,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      },
                    }}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.div className="relative group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("top-projects")}
                    className="relative bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-black text-lg px-10 py-4 rounded-2xl border-2 border-cyan-400/50 cursor-magnetic"
                  >
                    🔥 VIEW PROJECTS
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </motion.div>

                <motion.div className="relative group">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsBookingOpen(true)}
                    className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-black text-lg px-10 py-4 rounded-2xl cursor-magnetic"
                  >
                    💬 LET&apos;S BUILD
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                {[
                  { number: "50+", label: "Projects", icon: "📊", color: "text-cyan-400" },
                  { number: "95%", label: "ML Accuracy", icon: "🎯", color: "text-purple-400" },
                  { number: "24/7", label: "Support", icon: "⚡", color: "text-green-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group cursor-view"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.4,
                      },
                    }}
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.number}</div>
                    <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.5 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              {/* Advanced 3D Display */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Outer Rotating Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 via-green-400 to-orange-400 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-black/90 backdrop-blur-sm" />
                </motion.div>

                <motion.div
                  className="absolute inset-6 rounded-full border-2 border-purple-400/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-12 rounded-full border border-cyan-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Central Content */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl border border-cyan-400/20 flex flex-col items-center justify-center">
                  {/* Animated Core */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full flex items-center justify-center text-3xl font-black text-black mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 20px rgba(0,255,255,0.5)",
                        "0 0 40px rgba(147,51,234,0.8)",
                        "0 0 20px rgba(0,255,255,0.5)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ⚡
                  </motion.div>

                  {/* Live Code Display */}
                  <motion.div
                    className="text-center space-y-1"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="text-green-400 font-mono text-xs">{"> model.predict()"}</div>
                    <div className="text-cyan-400 font-mono text-xs">{"accuracy: 97.3%"}</div>
                    <div className="text-purple-400 font-mono text-xs">{"status: ready"}</div>
                  </motion.div>
                </div>

                {/* Orbiting Tech Icons */}
                {[
                  { icon: "🧠", color: "text-cyan-400", radius: 120, duration: 8 },
                  { icon: "⚡", color: "text-purple-400", radius: 140, duration: 10 },
                  { icon: "🚀", color: "text-green-400", radius: 160, duration: 12 },
                  { icon: "💎", color: "text-orange-400", radius: 180, duration: 14 },
                  { icon: "🔥", color: "text-pink-400", radius: 200, duration: 16 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-10 h-10 ${item.color} text-2xl flex items-center justify-center`}
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${item.radius}px 0px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: item.duration,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}

                {/* Floating Data Particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.3, 1, 0.3],
                      x: [0, Math.random() * 20 - 10, 0],
                      y: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Floating Terminal */}
              <motion.div
                className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-4 w-60 h-32 sm:w-72 sm:h-40 bg-black/95 rounded-xl border border-green-400/30 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-900/80 border-b border-green-400/20">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 font-mono text-xs ml-2">SAMI@terminal</span>
                </div>
                <div className="p-2 sm:p-3 font-mono text-[0.65rem] sm:text-xs space-y-1">
                  <motion.div
                    className="text-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    $ npm run build-future
                  </motion.div>
                  <motion.div
                    className="text-cyan-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    ✓ ML models trained
                  </motion.div>
                  <motion.div
                    className="text-purple-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    ✓ APIs deployed
                  </motion.div>
                  <motion.div
                    className="text-orange-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                  >
                    ✓ Ready for production
                  </motion.div>
                  <motion.div
                    className="text-green-400 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                  >
                    ${" "}
                    <motion.span
                      className="border-r border-green-400 ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center cursor-view relative"
            onClick={() => scrollToSection("top-projects")}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-400/50"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}