import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedCollections from "@/components/home/FeaturedCollections"
import TrendingItems from "@/components/home/TrendingItems"
import InfluencerPicks from "@/components/home/InfluencerPicks"
import { ShoppingBag, TrendingUp, Users, Leaf } from "lucide-react"
import Newsletter from "@/components/home/Newsletter"
import CategoryBanner from "@/components/home/CategoryBanner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chindi Bazaar | Home",
  description: "Discover affordable second-hand clothes curated by top social media influencers.",
}

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4C0112]/90 to-[#132C20]/80"></div>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container relative z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Second-Hand, <span className="text-[#BB787F]">First Choice</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover curated thrift collections from your favorite influencers and sustainable fashion enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#4C0112] hover:bg-[#4C0112]/90">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/influencer-collections">Browse Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#FED9DA]/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#4C0112] text-white mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Style</h3>
              <p className="text-[#5A3C3C]">Curated second-hand fashion at prices that won't break the bank.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#5A3C3C] text-white mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Trending Pieces</h3>
              <p className="text-[#5A3C3C]">Stay on top of fashion trends with our regularly updated collections.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#BB787F] text-white mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Influencer Approved</h3>
              <p className="text-[#5A3C3C]">
                Discover pieces curated and approved by your favorite social media influencers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#132C20] text-white mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Fashion</h3>
              <p className="text-[#5A3C3C]">
                Shop guilt-free knowing you're contributing to a more sustainable fashion industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-[#4C0112]">Collections</span>
          </h2>
          <FeaturedCollections />
        </div>
      </section>

      {/* Category Banner */}
      <CategoryBanner />

      {/* Trending Items */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Trending <span className="text-[#BB787F]">Right Now</span>
          </h2>
          <TrendingItems />
          <div className="flex justify-center mt-10">
            <Button asChild className="bg-[#5A3C3C] hover:bg-[#5A3C3C]/90">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Influencer Picks */}
      <section className="py-16 bg-[#FED9DA]/20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Influencer <span className="text-[#132C20]">Picks</span>
          </h2>
          <InfluencerPicks />
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-[#132C20] text-[#132C20] hover:bg-[#132C20] hover:text-white"
            >
              <Link href="/influencer-collections">View All Influencers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

