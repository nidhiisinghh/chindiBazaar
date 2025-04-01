import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section className="py-16 bg-[#5A3C3C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 text-gray-200">
            Subscribe to our newsletter for exclusive deals, style inspiration, and sustainable fashion tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Button className="bg-[#BB787F] hover:bg-[#BB787F]/90">Subscribe</Button>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}

