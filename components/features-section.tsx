"use client"

import type React from "react"
import { Lightbulb, Wallet, Users } from "lucide-react"
import { FeatureCard } from "./feature-card"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "AI Itinerary Creator",
    description: "Get custom day-by-day itineraries powered by AI, tailored to your preferences and travel style.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <Wallet className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Smart Budget Planning",
    description: "Track expenses in real-time and get AI-powered recommendations to stay within your budget.",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Real-time Group Collaboration",
    description: "Invite friends, vote on activities, and collaborate on plans together seamlessly.",
    color: "from-purple-400 to-pink-600",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50/20 to-white px-4 py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="absolute top-10 sm:top-20 -left-20 sm:-left-32 w-40 sm:w-64 h-40 sm:h-64 bg-blue-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 sm:bottom-20 -right-20 sm:-right-32 w-40 sm:w-64 h-40 sm:h-64 bg-purple-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">
              Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-balance">Everything You Need</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Powerful features to plan, budget, and collaborate on your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
