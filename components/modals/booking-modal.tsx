"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface BookingModalProps {
  isBookingOpen: boolean
  setIsBookingOpen: (open: boolean) => void
}

export const BookingModal = ({ isBookingOpen, setIsBookingOpen }: BookingModalProps) => {
  return (
    <AnimatePresence>
      {isBookingOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsBookingOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-white">Book a Consultation</h3>
                <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsBookingOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 cursor-text" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name</label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 cursor-text" />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 cursor-text"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <Input
                    type="tel"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 cursor-text"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Type</label>
                  <select className="w-full p-3 bg-slate-800 border border-white/20 rounded-md text-white">
                    <option value="">Select a project type</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="full-stack">Full Stack Application</option>
                    <option value="backend">Backend Development</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Budget Range</label>
                  <select className="w-full p-3 bg-slate-800 border border-white/20 rounded-md text-white">
                    <option value="">Select budget range</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000-8000">$5,000 - $8,000</option>
                    <option value="8000-15000">$8,000 - $15,000</option>
                    <option value="15000+">$15,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Description</label>
                  <Textarea
                    rows={4}
                    placeholder="Tell me about your project requirements..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 cursor-text"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg py-3 cursor-magnetic"
                >
                  Book Consultation
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}