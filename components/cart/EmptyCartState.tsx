import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export default function EmptyCartState() {
  return (
    <div className="min-h-screen bg-[#FED9DA]/10 pt-28 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-[#FED9DA]/50 flex items-center justify-center">
              <ShoppingBag size={40} className="text-[#4C0112]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            It looks like you haven't added any items to your cart yet. Explore our collection and find something you'll
            love!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#4C0112] hover:bg-[#4C0112]/90" size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#4C0112] text-[#4C0112]" size="lg">
              <Link href="/influencer-collections">Browse Collections</Link>
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">You might like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <Link
                  key={item}
                  href={`/product/${item}`}
                  className="product-card overflow-hidden rounded-lg bg-white shadow-sm"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image src="/placeholder.svg?height=160&width=120" alt="Product" fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate">Thrift Product Name</h3>
                    <p className="text-[#4C0112] font-bold text-sm">₹899</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

