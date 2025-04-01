"use client"

import type React from "react"

import { CartProvider } from "@/hooks/use-cart"
import { WishlistProvider } from "@/hooks/use-wishlist"
import { AuthProvider as CustomAuthProvider } from "@/hooks/use-auth"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <CustomAuthProvider>
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </CustomAuthProvider>
  )
}

