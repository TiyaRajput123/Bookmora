

"use client"

import Image from "next/image"
import { supabase } from "../lib/supabaseClient"

export default function Header({ user }) {
  return (
        <header className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">

     <div className="flex items-center gap-3">
    <Image
      src="/bookmora-logo.jpeg"
      alt="Bookmora Logo"
      width={120}
      height={120}
      
  className="h-10 w-auto object-contain"
    />
 
</div>
{/* Center Brand */}
      <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-3xl font-bold text-purple-700">
          Bookmora
        </h1>
        <p className="text-2xs bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent -mt-1" 
>
          Your personal bookmark vault
        </p>
      </div>

      {user && (
        <button
          onClick={() => supabase.auth.signOut()}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      )}

    </header>
  )
}
