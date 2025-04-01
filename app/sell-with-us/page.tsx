import type { Metadata } from "next"
import SellWithUsPage from "@/components/sell/SellWithUsPage"

export const metadata: Metadata = {
  title: "Sell With Us | Chindi Bazaar",
  description: "List your second-hand clothes and reach thousands of customers.",
}

export default function SellWithUs() {
  return <SellWithUsPage />
}

