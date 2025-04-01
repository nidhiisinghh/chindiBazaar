import type { Metadata } from "next"
import ShopPage from "@/components/shop/ShopPage"

export const metadata: Metadata = {
  title: "Shop | Chindi Bazaar",
  description: "Explore our curated collection of second-hand clothing and accessories.",
}

export default function Shop({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <ShopPage searchParams={searchParams} />
}

