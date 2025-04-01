"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Heart, User, Menu, X, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/use-auth"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { user, signOut } = useAuth()
  const { items: cartItems } = useCart()
  const { items: wishlistItems } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navbarClasses = cn("fixed top-0 w-full z-50 transition-all duration-300", {
    "bg-white shadow-md py-2": isScrolled,
    "bg-transparent py-4": !isScrolled,
  })

  const navLinkClasses = cn(
    "font-medium hover:text-[#4C0112] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4C0112] after:transition-all hover:after:w-full",
    {
      "text-[#4C0112]": isScrolled,
      "text-white": !isScrolled && !mobileMenuOpen,
    },
  )

  const iconClasses = cn("transition-colors", {
    "text-[#4C0112]": isScrolled,
    "text-white": !isScrolled && !mobileMenuOpen,
  })

  const logoClasses = cn("font-playfair text-2xl font-bold", {
    "text-[#4C0112]": isScrolled,
    "text-white": !isScrolled && !mobileMenuOpen,
  })

  const mobileMenuClasses = cn(
    "fixed inset-0 z-50 flex flex-col bg-white p-6 transform transition-transform duration-300 ease-in-out",
    {
      "translate-x-0": mobileMenuOpen,
      "translate-x-full": !mobileMenuOpen,
    },
  )

  const searchBarClasses = cn(
    "absolute top-full left-0 w-full bg-white shadow-md p-4 transform transition-all duration-300",
    {
      "translate-y-0 opacity-100": searchOpen,
      "-translate-y-4 opacity-0 pointer-events-none": !searchOpen,
    },
  )

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <>
      <header className={navbarClasses}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={logoClasses}>
            Chindi Bazaar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={navLinkClasses}>
              Home
            </Link>
            <div className="relative group">
              <button className={`flex items-center ${navLinkClasses}`}>
                Shop <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white shadow-md rounded-md p-2">
                  <Link href="/shop" className="block px-4 py-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md">
                    All Products
                  </Link>
                  <Link
                    href="/shop?category=tops"
                    className="block px-4 py-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md"
                  >
                    Tops
                  </Link>
                  <Link
                    href="/shop?category=bottoms"
                    className="block px-4 py-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md"
                  >
                    Bottoms
                  </Link>
                  <Link
                    href="/shop?category=dresses"
                    className="block px-4 py-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md"
                  >
                    Dresses
                  </Link>
                  <Link
                    href="/shop?category=outerwear"
                    className="block px-4 py-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md"
                  >
                    Outerwear
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/influencer-collections" className={navLinkClasses}>
              Influencers
            </Link>
            <Link href="/sell-with-us" className={navLinkClasses}>
              Sell
            </Link>
            <Link href="/community" className={navLinkClasses}>
              Community
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={handleSearchToggle} className={iconClasses}>
              <Search size={20} />
            </button>

            <Link href="/wishlist" className="relative">
              <Heart size={20} className={iconClasses} />
              {wishlistItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[#BB787F]">
                  {wishlistItems.length}
                </Badge>
              )}
            </Link>

            <Link href="/cart" className="relative">
              <ShoppingBag size={20} className={iconClasses} />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[#4C0112]">
                  {cartItems.length}
                </Badge>
              )}
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.image || ""} alt={user.name || ""} />
                      <AvatarFallback className="bg-[#BB787F] text-white">{user.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/listings">My Listings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={signOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/login">
                <User size={20} className={iconClasses} />
              </Link>
            )}

            <button className="md:hidden" onClick={handleMobileMenuToggle}>
              <Menu size={24} className={iconClasses} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={searchBarClasses}>
          <div className="container mx-auto">
            <div className="flex items-center">
              <Input type="text" placeholder="Search for products..." className="flex-1" />
              <Button className="ml-2 bg-[#4C0112] hover:bg-[#4C0112]/90">Search</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={mobileMenuClasses}>
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="font-playfair text-2xl font-bold text-[#4C0112]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Chindi Bazaar
          </Link>
          <button onClick={handleMobileMenuToggle}>
            <X size={24} className="text-[#4C0112]" />
          </button>
        </div>

        <div className="flex-1 flex flex-col space-y-6">
          <Link href="/" className="text-lg font-medium text-[#4C0112]" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/shop" className="text-lg font-medium text-[#4C0112]" onClick={() => setMobileMenuOpen(false)}>
            Shop
          </Link>
          <Link
            href="/influencer-collections"
            className="text-lg font-medium text-[#4C0112]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Influencers
          </Link>
          <Link
            href="/sell-with-us"
            className="text-lg font-medium text-[#4C0112]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sell
          </Link>
          <Link
            href="/community"
            className="text-lg font-medium text-[#4C0112]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Community
          </Link>
        </div>

        <div className="mt-8">
          {user ? (
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 p-2 bg-[#FED9DA]/30 rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.image || ""} alt={user.name || ""} />
                  <AvatarFallback className="bg-[#BB787F] text-white">{user.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <Link
                href="/profile"
                className="block p-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Profile
              </Link>
              <Link
                href="/profile/orders"
                className="block p-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Orders
              </Link>
              <Link
                href="/profile/listings"
                className="block p-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Listings
              </Link>
              <button
                onClick={() => {
                  signOut()
                  setMobileMenuOpen(false)
                }}
                className="block p-2 text-[#4C0112] hover:bg-[#FED9DA]/20 rounded-md text-left"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Button asChild variant="outline" className="border-[#4C0112] text-[#4C0112]">
                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild className="bg-[#4C0112] hover:bg-[#4C0112]/90">
                <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {(mobileMenuOpen || searchOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => {
            setMobileMenuOpen(false)
            setSearchOpen(false)
          }}
        />
      )}
    </>
  )
}

