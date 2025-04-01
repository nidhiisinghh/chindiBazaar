"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

const influencers = [
  {
    id: 1,
    name: "Priya Sharma",
    handle: "@priyathrifts",
    image: "/placeholder.svg?height=300&width=300",
    followers: "256K",
    picks: 37,
  },
  {
    id: 2,
    name: "Rohan Kapoor",
    handle: "@thriftwithrohan",
    image: "/placeholder.svg?height=300&width=300",
    followers: "189K",
    picks: 24,
  },
  {
    id: 3,
    name: "Zara Ahmed",
    handle: "@zarasustainablechoices",
    image: "/placeholder.svg?height=300&width=300",
    followers: "312K",
    picks: 45,
  },
  {
    id: 4,
    name: "Arjun Mehta",
    handle: "@thriftking",
    image: "/placeholder.svg?height=300&width=300",
    followers: "178K",
    picks: 31,
  },
]

export default function InfluencerPicks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="overflow-hidden">
      <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 md:grid md:grid-cols-4">
        {influencers.map((influencer) => (
          <Link
            key={influencer.id}
            href={`/influencer-collections/${influencer.id}`}
            className="min-w-[250px] md:min-w-0"
          >
            <div className="group product-card bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={influencer.image || "/placeholder.svg"}
                  alt={influencer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Button
                    variant="outline"
                    className="bg-white/20 border-white text-white backdrop-blur-sm hover:bg-white hover:text-[#4C0112]"
                  >
                    View Collection
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">{influencer.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Instagram size={14} className="mr-1" />
                  <span className="text-sm">{influencer.handle}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{influencer.followers} followers</span>
                  <span>{influencer.picks} picks</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

