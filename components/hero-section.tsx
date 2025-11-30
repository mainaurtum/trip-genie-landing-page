"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, MapPin, Star, Clock, DollarSign, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handlePlanMyTrip = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWatchDemo = () => {
    setShowDemoModal(true)
    document.body.style.overflow = "hidden"
  }

  const handleCloseModal = () => {
    setShowDemoModal(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-screen py-12 sm:py-20 lg:py-28">
            {/* Left Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div
                className={`inline-flex items-center gap-2 w-fit mb-6 sm:mb-8 transform transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full text-xs sm:text-sm font-semibold text-blue-700 flex items-center gap-1.5 backdrop-blur-sm hover:border-blue-300/70 transition-colors">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-balance">AI-Powered Travel Planning</span>
                </div>
              </div>

              <h1
                className={`text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 sm:mb-8 transform transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Plan Perfect Trips in Minutes
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg md:text-lg lg:text-xl text-gray-600 max-w-xl text-balance leading-relaxed mb-8 sm:mb-10 font-light transform transition-all duration-1000 delay-100 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Create personalized itineraries powered by AI. Handle budgeting, collaborate with friends in real-time,
                and discover hidden gems.
              </p>

              <div
                className={`flex flex-col xs:flex-row gap-4 w-full xs:w-auto transform transition-all duration-1000 delay-200 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Button
                  onClick={handlePlanMyTrip}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-6 sm:py-7 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 flex-1 xs:flex-initial cursor-pointer"
                >
                  Plan My Trip
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                <Button
                  onClick={handleWatchDemo}
                  size="lg"
                  className="px-6 sm:px-8 py-6 sm:py-7 rounded-xl text-base sm:text-lg font-semibold bg-white border-2 border-blue-200 hover:bg-blue-50 text-gray-800 transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-lg flex-1 xs:flex-initial cursor-pointer"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Visual - Taj Mahal Destination Card */}
            <div
              className={`order-1 lg:order-2 flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative w-full max-w-sm lg:max-w-none lg:w-full group">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white/70 backdrop-blur-xl border border-amber-200/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                    <img
                      src="/taj-mahal-monument-india.jpg"
                      alt="Taj Mahal"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-sm font-semibold text-amber-900 shadow-md">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Taj Mahal</h3>
                      <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 text-amber-600" />
                        <span>Agra, India</span>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-semibold text-gray-700">Duration</span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">3-4 days</p>
                      </div>

                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100/50">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-semibold text-gray-700">Budget</span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">$500-1k</p>
                      </div>

                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-semibold text-gray-700">Season</span>
                        </div>
                        <p className="text-sm font-bold text-gray-900">Oct-Mar</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Iconic marble mausoleum symbolizing eternal love. A UNESCO World Heritage Site with breathtaking
                      architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="aspect-video bg-black flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="TripGenie Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
