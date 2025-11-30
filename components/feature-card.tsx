"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  index: number
}

export function FeatureCard({ icon, title, description, color, index }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      <div className="group relative h-full bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl border border-white/60 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />

        <div className="relative z-10 space-y-4 sm:space-y-6">
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${color} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white group-hover:scale-110 group-hover:-rotate-3`}
          >
            {icon}
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>

          <div className="w-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-12 transition-all duration-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}
