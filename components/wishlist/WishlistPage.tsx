"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Trash2, ShoppingCart } from "lucide-react"
import EmptyWishlistState from "@/components/wishlist/EmptyWishlistState"

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist()
  const { addItem: addToCart } = useCart()
  const { toast } = useToast()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#FED9DA]/10 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Wishlist</h1>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="animate-pulse">
              <div className="flex justify-between items-center mb-6">
                <div className="h-8 w-36 bg-gray-200 rounded"></div>
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
              </div>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 mb-6">
                  <div className="h-32 w-24 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-8 w-32 bg-gray-200 rounded"></div>
                      <div className="h-8 w-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return <EmptyWishlistState />
  }

  const handleRemoveFromWishlist = (productId: number) => {
    removeItem(productId)
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    })
  }

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleClearWishlist = () => {
    clearWishlist()
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    })
  }

  return (
    <div className="min-h-screen bg-[#FED9DA]/10 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Your Wishlist</h1>
          <Button variant="ghost" className="text-[#4C0112] hover:text-[#4C0112]/80" onClick={handleClearWishlist}>
            Clear All
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Saved Items ({items.length})</h2>
            <Link href="/shop" className="text-[#4C0112] hover:underline font-medium">
              Continue Shopping
            </Link>
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 border-b pb-6">
                <div className="flex-shrink-0">
                  <Link href={`/product/${item.id}`}>
                    <div className="relative w-full sm:w-24 h-32 rounded-md overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                      <Link
                        href={`/product/${item.id}`}
                        className="text-lg font-medium hover:text-[#4C0112] transition-colors"
                      >
                        {item.name}
                      </Link>
                      <div className="text-sm text-gray-500 mt-1">Size: {item.size || "Not specified"}</div>
                      <div className="text-sm text-gray-500">Seller: {item.seller?.name || "Not specified"}</div>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <div className="text-lg font-bold text-[#4C0112]">₹{item.price}</div>
                      {item.originalPrice > item.price && (
                        <div className="text-sm text-gray-500 line-through">₹{item.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end sm:justify-between items-start sm:items-center mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 pl-0 sm:pl-3"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <Trash2 size={16} className="mr-1" />
                      Remove
                    </Button>
                    <Button
                      className="bg-[#4C0112] hover:bg-[#4C0112]/90 mt-2 sm:mt-0 w-full sm:w-auto"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

