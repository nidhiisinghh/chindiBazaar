"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const collections = [
  {
    id: 1,
    name: "Summer Essentials",
    description: "Light, breezy pieces for those hot summer days",
    image: "/placeholder.svg?height=600&width=800",
    items: 24,
  },
  {
    id: 2,
    name: "Work Wardrobe",
    description: "Professional pieces that make a statement",
    image: "/placeholder.svg?height=600&width=800",
    items: 18,
  },
  {
    id: 3,
    name: "Vintage Finds",
    description: "Unique pieces with history and character",
    image: "/placeholder.svg?height=600&width=800",
    items: 32,
  },
  {
    id: 4,
    name: "Casual Comfort",
    description: "Everyday pieces that feel as good as they look",
    image: "/placeholder.svg?height=600&width=800",
    items: 15,
  },
  {
    id: 5,
    name: "Party Ready",
    description: "Stand out at your next social gathering",
    image: "/placeholder.svg?height=600&width=800",
    items: 20,
  },
]

export default function FeaturedCollections() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setScrollPosition(scrollLeft)
      setMaxScroll(scrollWidth - clientWidth)
    }
  }

  const scrollTo = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "rounded-full border-[#4C0112] bg-white text-[#4C0112] hover:bg-[#4C0112] hover:text-white transition-colors shadow-md",
            { "opacity-50 cursor-not-allowed": scrollPosition <= 0 },
          )}
          onClick={() => scrollTo("left")}
          disabled={scrollPosition <= 0}
        >
          <ArrowLeft size={20} />
        </Button>
      </div>

      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "rounded-full border-[#4C0112] bg-white text-[#4C0112] hover:bg-[#4C0112] hover:text-white transition-colors shadow-md",
            { "opacity-50 cursor-not-allowed": scrollPosition >= maxScroll },
          )}
          onClick={() => scrollTo("right")}
          disabled={scrollPosition >= maxScroll}
        >
          <ArrowRight size={20} />
        </Button>
      </div>

      {/* Collections Slider */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
        onScroll={handleScroll}
      >
        {collections.map((collection) => (
          <div key={collection.id} className="min-w-[300px] md:min-w-[400px] snap-start">
            <Link href={`/collections/${collection.id}`}>
              <div className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 product-card">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{collection.description}</p>
                    <p className="text-sm font-medium">{collection.items} items</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Scroll Indicators for mobile */}
      <div className="flex justify-center space-x-2 mt-6 md:hidden">
        {collections.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index * (100 / collections.length) <= (scrollPosition / maxScroll) * 100 &&
                (index + 1) * (100 / collections.length) > (scrollPosition / maxScroll) * 100
                ? "w-6 bg-[#4C0112]"
                : "w-1.5 bg-gray-300",
            )}
          />
        ))}
      </div>
    </div>
  )
}

