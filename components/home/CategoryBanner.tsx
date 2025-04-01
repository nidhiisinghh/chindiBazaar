import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CategoryBanner() {
  return (
    <section className="py-10 bg-gradient-to-r from-[#4C0112] to-[#5A3C3C] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <Link href="/shop?category=tops" className="group">
            <div className="p-6 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              <h3 className="text-xl font-bold mb-2">Tops</h3>
              <p className="text-gray-200 mb-3">T-shirts, blouses, shirts and more</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#4C0112]">
                Shop Now
              </Button>
            </div>
          </Link>

          <Link href="/shop?category=bottoms" className="group">
            <div className="p-6 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              <h3 className="text-xl font-bold mb-2">Bottoms</h3>
              <p className="text-gray-200 mb-3">Jeans, trousers, skirts and more</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#4C0112]">
                Shop Now
              </Button>
            </div>
          </Link>

          <Link href="/shop?category=dresses" className="group">
            <div className="p-6 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              <h3 className="text-xl font-bold mb-2">Dresses</h3>
              <p className="text-gray-200 mb-3">Casual, formal and party dresses</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#4C0112]">
                Shop Now
              </Button>
            </div>
          </Link>

          <Link href="/shop?category=outerwear" className="group">
            <div className="p-6 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              <h3 className="text-xl font-bold mb-2">Outerwear</h3>
              <p className="text-gray-200 mb-3">Jackets, coats, sweaters and more</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#4C0112]">
                Shop Now
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

