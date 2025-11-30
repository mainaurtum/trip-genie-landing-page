"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DestinationCard } from "./destination-card"

const destinations = [
  {
    id: 1,
    image: "/taj-mahal-agra-india.jpg",
    title: "Taj Mahal Heritage Stay",
    location: "Agra, Uttar Pradesh",
    rating: 4.9,
    reviews: 324,
    pricePerNight: 3500,
    originalPrice: 4500,
    amenities: ["WiFi", "AC", "Guided Tours", "Restaurant"],
  },
  {
    id: 2,
    image: "/goa-beach-resort.jpg",
    title: "Goa Beach Paradise Resort",
    location: "Goa",
    rating: 4.8,
    reviews: 512,
    pricePerNight: 2800,
    originalPrice: 3800,
    amenities: ["Beach Access", "Pool", "Spa", "Water Sports"],
  },
  {
    id: 3,
    image: "/kerala-backwaters-houseboat.jpg",
    title: "Kerala Backwaters Houseboat",
    location: "Kerala",
    rating: 4.9,
    reviews: 287,
    pricePerNight: 4200,
    originalPrice: 5200,
    amenities: ["Private Boat", "Ayurveda", "Fishing", "Sunset Views"],
  },
  {
    id: 4,
    image: "/jaipur-pink-city-palace.jpg",
    title: "Jaipur City Palace Hotel",
    location: "Jaipur, Rajasthan",
    rating: 4.7,
    reviews: 198,
    pricePerNight: 2900,
    amenities: ["Heritage Property", "Traditional Cuisine", "City Tours"],
  },
  {
    id: 5,
    image: "/himalayan-mountain-resort.jpg",
    title: "Himalayan Mountain Resort",
    location: "Himachal Pradesh",
    rating: 4.8,
    reviews: 156,
    pricePerNight: 3200,
    originalPrice: 4000,
    amenities: ["Mountain Views", "Trekking", "Bonfire", "Hot Spring"],
  },
  {
    id: 6,
    image: "/varanasi-ganges-riverside.jpg",
    title: "Varanasi Ganges Riverside",
    location: "Varanasi, Uttar Pradesh",
    rating: 4.6,
    reviews: 203,
    pricePerNight: 1800,
    amenities: ["River View", "Spiritual Tours", "Yoga", "Meditation"],
  },
]

export default function PricingSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll)
      }
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="pricing-section"
      className="relative w-full bg-gradient-to-b from-blue-50 to-white px-4 py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            Explore amazing Indian destinations and find your perfect getaway with unbeatable prices
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          )}
        </div>

        {/* Info Text */}
        <p className="text-center text-gray-600 mt-12 font-light text-sm md:text-base">
          💡 Swipe or use arrow buttons to explore more destinations
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
