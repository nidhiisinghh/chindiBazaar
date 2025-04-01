import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Upload, Percent, ShoppingBag } from "lucide-react"

export default function SellWithUsPage() {
  return (
    <div className="min-h-screen bg-[#FED9DA]/10 pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Turn Your Closet into
            <span className="text-[#4C0112]"> Cash</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of sellers on Chindi Bazaar and give your pre-loved clothes a second life while making money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4C0112] hover:bg-[#4C0112]/90">
              <Link href="/auth/signup?seller=true">Start Selling</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#4C0112] text-[#4C0112]">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-4xl font-bold text-[#4C0112] mb-2">5,000+</h3>
            <p className="text-gray-600">Active Sellers</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-4xl font-bold text-[#4C0112] mb-2">₹25L+</h3>
            <p className="text-gray-600">Paid to Sellers</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-4xl font-bold text-[#4C0112] mb-2">50,000+</h3>
            <p className="text-gray-600">Items Sold</p>
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mb-16 scroll-mt-28">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#FED9DA] rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="text-[#4C0112]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. List Your Items</h3>
              <p className="text-gray-600">
                Take photos, set your price, and create a listing in minutes. Our platform makes it easy to showcase your clothes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#FED9DA] rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="text-[#4C0112]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Ship to Buyers</h3>
              <p className="text-gray-600">
                When your item sells, package it and ship it to the buyer. We provide shipping labels to make it hassle-free.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#FED9DA] rounded-full flex items-center justify-center mx-auto mb-6">
                <Percent className="text-[#4C0112]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Get Paid</h3>
              <p className="text-gray-600">
                Receive up to 80% of the selling price directly to your bank account or use your earnings as store credit.
              </p>
            </div>
          </div>
        </div>

        {/* Why Sell With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sell on Chindi Bazaar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                <CheckCircle2 className="text-[#4C0112] mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">No Upfront Fees</h3>
                  <p className="text-gray-600">
                    You only pay a small commission when your item sells. No listing fees, no hidden charges.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm\

