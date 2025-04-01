"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string | null
  email: string
  image: string | null
}

type AuthContextType = {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("chindi_bazaar_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Mock sign in function
  const signIn = async (email: string, password: string) => {
    // In a real app, this would be an API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password.length >= 6) {
          const newUser = {
            id: "user_" + Math.random().toString(36).substr(2, 9),
            name: email.split("@")[0],
            email,
            image: null,
          }
          setUser(newUser)
          localStorage.setItem("chindi_bazaar_user", JSON.stringify(newUser))
          resolve()
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  // Mock sign up function
  const signUp = async (name: string, email: string, password: string) => {
    // In a real app, this would be an API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (name && email && password.length >= 6) {
          resolve()
        } else {
          reject(new Error("Invalid input"))
        }
      }, 1000)
    })
  }

  // Mock sign out function
  const signOut = async () => {
    // In a real app, this would be an API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(null)
        localStorage.removeItem("chindi_bazaar_user")
        resolve()
      }, 500)
    })
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

