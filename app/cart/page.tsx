import type { Metadata } from "next"
import CartPage from "@/components/cart/CartPage"

export const metadata: Metadata = {
  title: "Shopping Cart | Chindi Bazaar",
  description: "View the items in your shopping cart and proceed to checkout.",
}

export default function Cart() {
  return <CartPage />
}

