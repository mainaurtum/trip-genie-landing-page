"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Testimonial {
  name: string
  role: string
  avatar: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Travel Blogger",
    avatar: "/professional-woman-avatar.png",
    rating: 5,
    text: "TripGenie saved us hours of planning. The AI itineraries are spot-on and our group loved the collaboration feature!",
  },
  {
    name: "Mike Chen",
    role: "Frequent Traveler",
    avatar: "/professional-man-avatar.png",
    rating: 5,
    text: "As a frequent traveler, I'm impressed by how smart the budget tracking is. It caught spending patterns I never noticed.",
  },
  {
    name: "Emma Rodriguez",
    role: "Adventure Enthusiast",
    avatar: "/female-travel-enthusiast-avatar.jpg",
    rating: 5,
    text: "Planning a trip with friends used to be a nightmare. TripGenie made it fun and actually doable without endless arguments!",
  },
]

export default function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-purple-50/30 to-white px-4 py-20 md:py-32 overflow-hidden">
      <div className="absolute top-32 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Loved by Travelers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            See what adventurers around the world are saying about TripGenie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={containerRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visibleCards[index] ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="group relative h-full bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic font-light">{`"${testimonial.text}"`}</p>

                  <div className="flex items-center gap-4 pt-2">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
