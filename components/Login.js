'use client'
import { supabase } from '../lib/supabaseClient'
import Image from "next/image"

export default function Login() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <div className="flex flex-col items-center gap-6">
 {/* Top Left Logo */}
      <div className="absolute top-6 left-8">
        <Image
          src="/bookmora-logo.jpeg"
          alt="Bookmora Logo"
          width={120}
          height={120}
          className="h-12 w-auto"
        />
      </div>
      {/* App Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">
          Bookmora
        </h1>
        <p className="text-3sm text-purple-300 -mt-1">
          Your personal bookmark vault
        </p>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform"
      >
        Continue with Google
      </button>

    </div>
  )
}
