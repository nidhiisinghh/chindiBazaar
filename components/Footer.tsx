import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#4C0112] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Chindi Bazaar</h3>
            <p className="mb-4 text-gray-200">
              Your one-stop solution for affordable and sustainable second-hand fashion, curated by influencers you
              love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#BB787F] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#BB787F] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#BB787F] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#BB787F] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-200 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/influencer-collections" className="text-gray-200 hover:text-white transition-colors">
                  Influencer Collections
                </Link>
              </li>
              <li>
                <Link href="/sell-with-us" className="text-gray-200 hover:text-white transition-colors">
                  Sell With Us
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-200 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-200 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-200">123 Fashion Street, Mumbai, India 400001</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <p className="text-gray-200">+91 9876543210</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <p className="text-gray-200">hello@chindibazaar.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8 pb-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-bold text-xl mb-2">Subscribe to our Newsletter</h3>
            <p className="text-gray-200 mb-4">Stay updated with the latest thrift drops and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="bg-[#BB787F] hover:bg-[#BB787F]/90">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Chindi Bazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

