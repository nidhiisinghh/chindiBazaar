import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function EmptyWishlistState() {
  return (
    <div className="min-h-screen bg-[#FED9DA]/10 pt-28 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-[#FED9DA]/50 flex items-center justify-center">
              <Heart size={40} className="text-[#4C0112]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">
            You haven't saved any items to your wishlist yet. Browse our collections and save your favorite items!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#4C0112] hover:bg-[#4C0112]/90" size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#4C0112] text-[#4C0112]" size="lg">
              <Link href="/influencer-collections">Browse Collections</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

