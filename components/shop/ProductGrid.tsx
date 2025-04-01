"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { useToast } from "@/components/ui/use-toast"

export default function ProductGrid({ products }: { products: any[] }) {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null)
  const { addItem: addToCart } = useCart()
  const { addItem: addToWishlist, items: wishlistItems } = useWishlist()
  const { toast } = useToast()

  const isInWishlist = (productId: number) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = (product: any) => {
    addToWishlist(product)
    toast({
      title: isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isInWishlist(product.id) ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-lg overflow-hidden shadow-sm product-card"
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <div className="relative overflow-hidden">
            <Link href={`/product/${product.id}`}>
              <div className="relative aspect-[3/4]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* Quick action buttons */}
            <div
              className={cn(
                "absolute top-2 right-2 flex flex-col gap-2 transform transition-all duration-300",
                hoveredProductId === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
              )}
            >
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white hover:bg-[#BB787F] text-[#4C0112] hover:text-white shadow-md"
                onClick={() => handleToggleWishlist(product)}
              >
                <Heart size={18} className={cn(isInWishlist(product.id) ? "fill-[#BB787F] text-[#BB787F]" : "")} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white hover:bg-[#4C0112] text-[#4C0112] hover:text-white shadow-md"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart size={18} />
              </Button>
            </div>

            {/* Discount badge */}
            {product.originalPrice > product.price && (
              <Badge className="absolute top-2 left-2 bg-[#4C0112]">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </Badge>
            )}

            {/* Condition badge */}
            <Badge variant="outline" className="absolute bottom-2 left-2 bg-white text-[#4C0112] border-[#4C0112]">
              {product.condition}
            </Badge>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    <Star size={14} className="fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-800">{product.rating}</span>
                  </div>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-[#4C0112]">₹{product.price}</div>
                {product.originalPrice > product.price && (
                  <div className="text-sm text-gray-500 line-through">₹{product.originalPrice}</div>
                )}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-700">
                <span className="mr-1">{product.seller.name}</span>
                {product.seller.isVerified && (
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </div>
              <div className="text-xs font-medium text-gray-500">Size: {product.size}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

