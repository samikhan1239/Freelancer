"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";

// Define Project interface consistent with ProjectCard
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  category: string;
  price: string;
  duration: string;
  demoUrl?: string;
  color?: string;
  stats?: Record<string, string | number>;
  featured?: boolean;
}

interface ProjectModalProps {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  setIsBookingOpen: (open: boolean) => void;
}

export const ProjectModal = ({ selectedProject, setSelectedProject, setIsBookingOpen }: ProjectModalProps) => {
  const shouldReduceMotion = useReducedMotion();

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setSelectedProject]);

  // Return null if no project is selected
  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
        role="dialog"
        aria-labelledby="project-modal-title"
        aria-modal="true"
      >
        <motion.div
          initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0, rotateY: -30 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={shouldReduceMotion ? { scale: 1, opacity: 0 } : { scale: 0.8, opacity: 0, rotateY: 30 }}
          transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
          className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <Image
              src={selectedProject.image ?? "/placeholder.svg"}
              alt={`${selectedProject.title} preview`}
              width={800}
              height={400}
              className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 cursor-pointer"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
              <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                {selectedProject.category}
              </Badge>
            </div>

            <p className="text-gray-300 text-base sm:text-lg mb-6">{selectedProject.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-purple-400/50 text-purple-300 cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Project Details</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-medium">Price:</span> {selectedProject.price}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-medium">Duration:</span> {selectedProject.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 cursor-magnetic"
                onClick={() => {
                  setSelectedProject(null);
                  setIsBookingOpen(true);
                }}
              >
                Book This Project
              </Button>
              {selectedProject.demoUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent cursor-pointer"
                >
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};