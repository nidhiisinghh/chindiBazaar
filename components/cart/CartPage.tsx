"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ChevronRight, ShieldCheck, Truck, RotateCcw } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import EmptyCartState from "@/components/cart/EmptyCartState"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
  const { toast } = useToast()

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(productId, newQuantity)
  }

  const handleRemoveItem = (productId: number) => {
    removeItem(productId)
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a coupon code.",
      })
      return
    }

    setIsApplyingCoupon(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        variant: "destructive",
        title: "Invalid coupon",
        description: "The coupon code you entered is invalid or has expired.",
      })
      setIsApplyingCoupon(false)
    }, 1000)
  }

  if (items.length === 0) {
    return <EmptyCartState />
  }

  // Calculate order summary
  const subtotal = total
  const shipping = 99
  const discount = 0
  const orderTotal = subtotal + shipping - discount

  return (
    <div className="min-h-screen bg-[#FED9DA]/10 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Cart Items ({items.length})</h2>
                <Button variant="ghost" className="text-[#4C0112] hover:text-[#4C0112]/80" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>

              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4">
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
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 rounded-l-md p-0 border-gray-300"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <div className="h-8 w-12 flex items-center justify-center border-y border-gray-300">
                            {item.quantity}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 rounded-r-md p-0 border-gray-300"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 size={16} className="mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <Truck className="text-[#4C0112] mr-3" size={24} />
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-sm text-gray-500">On orders over ₹999</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <RotateCcw className="text-[#4C0112] mr-3" size={24} />
                <div>
                  <h3 className="font-medium">Easy Returns</h3>
                  <p className="text-sm text-gray-500">15 days return policy</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <ShieldCheck className="text-[#4C0112] mr-3" size={24} />
                <div>
                  <h3 className="font-medium">Secure Checkout</h3>
                  <p className="text-sm text-gray-500">Safe & secure payment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">₹{shipping.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium text-green-600">-₹{discount.toFixed(2)}</span>
                  </div>
                )}

                <Separator className="my-2" />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-[#4C0112]">₹{orderTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Apply Coupon Code</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    className="bg-[#4C0112] hover:bg-[#4C0112]/90"
                    onClick={handleApplyCoupon}
                    disabled={isApplyingCoupon}
                  >
                    Apply
                  </Button>
                </div>
              </div>

              <Button className="w-full mt-6 bg-[#4C0112] hover:bg-[#4C0112]/90" size="lg" asChild>
                <Link href="/checkout">
                  Proceed to Checkout <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>

              <div className="mt-6 text-center">
                <Link href="/shop" className="text-[#4C0112] hover:underline text-sm">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

