import type { Metadata } from "next"
import SignupClientPage from "./SignupClientPage"

export const metadata: Metadata = {
  title: "Sign Up | Chindi Bazaar",
  description: "Create your account on Chindi Bazaar.",
}

export default function SignupPage() {
  return <SignupClientPage />
}

