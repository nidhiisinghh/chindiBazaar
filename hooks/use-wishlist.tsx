"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type WishlistItem = {
  id: number
  name: string
  price: number
  image: string
}

type WishlistContextType = {
  items: WishlistItem[]
  addItem: (product: any) => void
  removeItem: (productId: number) => void
  clearWishlist: () => void
  isItemInWishlist: (productId: number) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem("chindi_bazaar_wishlist")
    if (storedWishlist) {
      setItems(JSON.parse(storedWishlist))
    }
  }, [])

  // Update localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("chindi_bazaar_wishlist", JSON.stringify(items))
  }, [items])

  const addItem = (product: any) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id)

      if (existingItemIndex !== -1) {
        return prevItems.filter((_, index) => index !== existingItemIndex)
      }

      return [...prevItems, product]
    })
  }

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const clearWishlist = () => {
    setItems([])
  }

  const isItemInWishlist = (productId: number) => {
    return items.some((item) => item.id === productId)
  }

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, clearWishlist, isItemInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

