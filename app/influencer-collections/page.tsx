import type { Metadata } from "next"
import InfluencerCollectionsPage from "@/components/influencer/InfluencerCollectionsPage"

export const metadata: Metadata = {
  title: "Influencer Collections | Chindi Bazaar",
  description: "Discover curated collections from your favorite fashion influencers.",
}

export default function InfluencerCollections() {
  return <InfluencerCollectionsPage />
}

