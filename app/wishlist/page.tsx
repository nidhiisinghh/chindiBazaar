import type { Metadata } from "next"
import WishlistPage from "@/components/wishlist/WishlistPage"

export const metadata: Metadata = {
  title: "Wishlist | Chindi Bazaar",
  description: "View and manage your saved items.",
}

export default function Wishlist() {
  return <WishlistPage />
}

