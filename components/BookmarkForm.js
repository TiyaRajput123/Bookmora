'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function BookmarkForm({ user, onAdd }) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const addBookmark = async () => {
    const { data, error } = await supabase
      .from('bookmarks')
      .insert([
        { title, url, user_id: user.id }
      ])
      .select()

    if (error) {
      console.log(error.message)
      return
    }

    onAdd(data[0])
    setTitle('')
    setUrl('')
  }

 return (
  <div className="flex flex-col gap-3 mb-6">
    <input
      className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg p-3 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
      placeholder="Bookmark Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <input
      className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg p-3 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
      placeholder="https://example.com"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
    />

    <button
      onClick={addBookmark}
      className="bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition rounded-lg py-3 font-semibold shadow-md"
    >
      Add Bookmark
    </button>
  </div>
)
}