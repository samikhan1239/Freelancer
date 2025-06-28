"use client"

import { motion } from "framer-motion"

export const AdvancedAnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic Mesh Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(0,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147,51,234,0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(34,197,94,0.15) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(251,146,60,0.15) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating Neural Network */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated Code Rain */}
      <div className="absolute inset-0">
        {["01", "10", "11", "00", "AI", "ML", "JS", "PY"].map((code, ) => (
          <motion.div
            key={code}
            className="absolute text-green-400/20 font-mono text-sm font-bold"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: -50,
            }}
            animate={{
              y: (typeof window !== "undefined" ? window.innerHeight : 1000) + 50,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
