import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink } from "lucide-react"

const influencers = [
  {
    id: 1,
    name: "Priya Sharma",
    handle: "@priyathrifts",
    image: "/placeholder.svg?height=300&width=300",
    followers: "256K",
    bio: "Fashion enthusiast sharing my love for sustainable thrifting and unique styles. Each piece has a story to tell!",
    collectionCount: 12,
    itemsCount: 76,
    instagram: "https://instagram.com",
    featuredCollection: {
      name: "Summer Retro",
      image: "/placeholder.svg?height=400&width=400",
      itemCount: 18,
    },
  },
  {
    id: 2,
    name: "Rohan Kapoor",
    handle: "@thriftwithrohan",
    image: "/placeholder.svg?height=300&width=300",
    followers: "189K",
    bio: "Menswear enthusiast helping guys find their style without breaking the bank. Thrifting since 2015!",
    collectionCount: 9,
    itemsCount: 54,
    instagram: "https://instagram.com",
    featuredCollection: {
      name: "Street Style",
      image: "/placeholder.svg?height=400&width=400",
      itemCount: 15,
    },
  },
  {
    id: 3,
    name: "Zara Ahmed",
    handle: "@zarasustainablechoices",
    image: "/placeholder.svg?height=300&width=300",
    followers: "312K",
    bio: "Sustainability advocate and fashion blogger. Proving that second-hand fashion can be chic, affordable, and eco-friendly.",
    collectionCount: 14,
    itemsCount: 92,
    instagram: "https://instagram.com",
    featuredCollection: {
      name: "Boho Dreams",
      image: "/placeholder.svg?height=400&width=400",
      itemCount: 21,
    },
  },
  {
    id: 4,
    name: "Arjun Mehta",
    handle: "@thriftking",
    image: "/placeholder.svg?height=300&width=300",
    followers: "178K",
    bio: "Finding hidden gems in thrift stores and giving them new life. Join me on this sustainable fashion journey!",
    collectionCount: 8,
    itemsCount: 48,
    instagram: "https://instagram.com",
    featuredCollection: {
      name: "Vintage Classics",
      image: "/placeholder.svg?height=400&width=400",
      itemCount: 14,
    },
  },
  {
    id: 5,
    name: "Neha Gupta",
    handle: "@affordablefashionista",
    image: "/placeholder.svg?height=300&width=300",
    followers: "224K",
    bio: "Student and budget-friendly fashion enthusiast. Showing that you can look good without spending a fortune!",
    collectionCount: 10,
    itemsCount: 67,
    instagram: "https://instagram.com",
    featuredCollection: {
      name: "College Chic",
      image: "/placeholder.svg?height=400&width=400",
      itemCount: 19,
    },
  },
  {
    id: 6,
    name: "Vivek Sharma",
    handle: "@viveksthriftfinds",
    image: "/placeholder.svg?height=300&width=300",
    followers: "165K",
    bio: "Fashion designer by day, thrifter by night. Sharing unique pieces and styling tips for all body types.",
    collectionCount: 7,
    itemsCount: 42,
    instagram: "https://instagram.com",
    featuredCollection: {
      name: "Designer Steals",
      image: "/placeholder.svg?height=400&width=400",
      itemCount: 12,
    },
  },
]

export default function InfluencerCollectionsPage() {
  return (
    <div className="min-h-screen bg-[#FED9DA]/10 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Influencer Collections</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover unique second-hand pieces curated by your favorite social media fashion influencers. Each collection
          tells a story and brings sustainable fashion to life.
        </p>

        {/* Influencer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {influencers.map((influencer) => (
            <div key={influencer.id} className="bg-white rounded-xl shadow-sm overflow-hidden product-card">
              <div className="flex flex-col h-full">
                {/* Influencer Header */}
                <div className="relative p-6 pb-0">
                  <div className="flex items-center">
                    <div className="relative w-20 h-20 mr-4">
                      <Image
                        src={influencer.image || "/placeholder.svg"}
                        alt={influencer.name}
                        fill
                        className="object-cover rounded-full border-4 border-[#FED9DA]"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{influencer.name}</h2>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Instagram size={14} className="mr-1" />
                        <span>{influencer.handle}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{influencer.followers} followers</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm line-clamp-3">{influencer.bio}</p>
                </div>

                {/* Featured Collection */}
                <div className="p-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Featured Collection</h3>
                  <Link
                    href={`/influencer-collections/${influencer.id}/${influencer.featuredCollection.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={influencer.featuredCollection.image || "/placeholder.svg"}
                        alt={influencer.featuredCollection.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h4 className="font-bold">{influencer.featuredCollection.name}</h4>
                          <p className="text-sm">{influencer.featuredCollection.itemCount} items</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Stats & Action */}
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex justify-between mb-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium text-[#4C0112]">{influencer.collectionCount}</span> Collections
                    </div>
                    <div>
                      <span className="font-medium text-[#4C0112]">{influencer.itemsCount}</span> Items
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-[#4C0112] hover:bg-[#4C0112]/90">
                      <Link href={`/influencer-collections/${influencer.id}`}>View Collections</Link>
                    </Button>
                    <Button asChild variant="outline" className="aspect-square p-0 border-[#4C0112] text-[#4C0112]">
                      <Link href={influencer.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apply to be an influencer */}
        <div className="mt-16 bg-gradient-to-r from-[#4C0112] to-[#5A3C3C] rounded-xl text-white p-8 shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Are you a fashion influencer?</h2>
            <p className="mb-6">
              Join our community of thrift enthusiasts and sustainability advocates. Partner with us to curate your own
              collection and earn commission on every sale.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4C0112]"
            >
              <Link href="/influencer-program">
                Join Our Influencer Program <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

