"use client"

export const Footer = () => {
  return (
    <footer className="py-12 bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
          ⚡ NEXUS
        </div>
        <p className="text-gray-400 mb-6">Full Stack + Machine Learning Developer</p>
        <div className="flex justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-purple-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Contact
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-6">© 2024 NEXUS. Building the future with AI and code.</p>
      </div>
    </footer>
  )
}
