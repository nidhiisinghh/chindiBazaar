import type { Metadata } from "next"
import ClientLoginPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Login | Chindi Bazaar",
  description: "Log in to your Chindi Bazaar account.",
}

export default function LoginPage() {
  return <ClientLoginPage />
}

