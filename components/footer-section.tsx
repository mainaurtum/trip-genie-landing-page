"use client"

import { Twitter, Instagram, Mail, Github } from "lucide-react"
import { useState } from "react"

export default function FooterSection() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 px-4 py-20 md:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">TripGenie</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Your AI-powered travel planning companion.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              {["Features", "Pricing", "Security", "Roadmap"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About", "Blog", "Contact", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
                { icon: Instagram, label: "Instagram" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onMouseEnter={() => setHoveredIcon(label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className="p-3 bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-300 hover:scale-110 aria-label={label}"
                >
                  <Icon className="w-5 h-5 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
          <p>&copy; 2025 TripGenie. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors duration-200 font-light">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
