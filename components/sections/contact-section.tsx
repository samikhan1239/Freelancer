"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">GET IN</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to build something amazing together? Let&apos;s discuss your project!
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                info: "nexus@mldev.com",
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-500/10 to-purple-600/10",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                info: "+1 (555) ML-NEXUS",
                color: "from-cyan-500 to-cyan-600",
                bgColor: "from-cyan-500/10 to-cyan-600/10",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Location",
                info: "San Francisco, CA",
                color: "from-green-500 to-green-600",
                bgColor: "from-green-500/10 to-green-600/10",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Availability",
                info: "Mon - Fri, 9AM - 6PM EST",
                color: "from-orange-500 to-orange-600",
                bgColor: "from-orange-500/10 to-orange-600/10",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="cursor-view"
              >
                <Card
                  className={`bg-gradient-to-r ${contact.bgColor} border border-gray-700/50 backdrop-blur-sm p-6 hover:border-purple-400/50 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center text-white`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      {contact.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{contact.title}</h3>
                      <p className="text-gray-300">{contact.info}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 backdrop-blur-sm p-8 hover:border-cyan-400/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-black flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    💬
                  </motion.div>
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Let&apos;s discuss your project and bring your ideas to life
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-white font-medium mb-2">First Name</label>
                      <Input
                        placeholder="John"
                        className="bg-gray-900/80 border-gray-600/50 text-white placeholder:text-gray-400 cursor-text focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="bg-gray-900/80 border-gray-600/50 text-white placeholder:text-gray-400 cursor-text focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-900/80 border-gray-600/50 text-white placeholder:text-gray-400 cursor-text focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-white font-medium mb-2">Project Budget</label>
                    <select className="w-full p-3 bg-gray-900/80 border border-gray-600/50 rounded-md text-white focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300">
                      <option value="">Select budget range</option>
                      <option value="3000-5000">$3,000 - $5,000</option>
                      <option value="5000-8000">$5,000 - $8,000</option>
                      <option value="8000-15000">$8,000 - $15,000</option>
                      <option value="15000+">$15,000+</option>
                    </select>
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-white font-medium mb-2">Project Description</label>
                    <Textarea
                      placeholder="Tell me about your project requirements, goals, and timeline..."
                      rows={4}
                      className="bg-gray-900/80 border-gray-600/50 text-white placeholder:text-gray-400 cursor-text focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 resize-none"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-3 cursor-magnetic relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                      <span className="relative flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Follow me on social media</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            {[
              { name: "GitHub", icon: "🐙", color: "hover:text-gray-300" },
              { name: "LinkedIn", icon: "💼", color: "hover:text-blue-400" },
              { name: "Twitter", icon: "🐦", color: "hover:text-cyan-400" },
              { name: "Discord", icon: "🎮", color: "hover:text-purple-400" },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                className={`text-gray-500 ${social.color} transition-colors text-2xl cursor-view`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                  },
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
