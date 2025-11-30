"use client"

import { Star, MapPin, Heart } from "lucide-react"
import { useState } from "react"

interface DestinationCardProps {
  id: number
  image: string
  title: string
  location: string
  rating: number
  reviews: number
  pricePerNight: number
  originalPrice?: number
  amenities: string[]
  distance?: string
}

export function DestinationCard({
  id,
  image,
  title,
  location,
  rating,
  reviews,
  pricePerNight,
  originalPrice,
  amenities,
}: DestinationCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <div className="flex-shrink-0 w-full sm:w-96 group cursor-pointer">
      <div className="space-y-3">
        {/* Image Container */}
        <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-gray-200">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-700"}`}
            />
          </button>

          {/* Discount Badge */}
          {originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Save ₹{originalPrice - pricePerNight}
            </div>
          )}

          {/* Rating Badge */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">{rating}</span>
            <span className="text-xs text-gray-600">({reviews})</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{title}</h3>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            {amenities.slice(0, 2).map((amenity, idx) => (
              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {amenity}
              </span>
            ))}
            {amenities.length > 2 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">+{amenities.length - 2}</span>
            )}
          </div>

          {/* Pricing */}
          <div className="pt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">₹{pricePerNight.toLocaleString()}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
              )}
            </div>
            <span className="text-sm text-gray-600">per night</span>
          </div>
        </div>
      </div>
    </div>
  )
}
