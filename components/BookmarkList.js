'use client'
import { supabase } from '../lib/supabaseClient'

export default function BookmarkList({ bookmarks, setBookmarks }) {
  const deleteBookmark = async (id) => {
    await supabase.from('bookmarks').delete().eq('id', id)
    setBookmarks(prev => prev.filter(b => b.id !== id))
  }

 /* return (
    <ul className="w-full max-w-md mt-4">
      {bookmarks.map((bm) => (
        <li
          key={bm.id}
          className="border p-2 rounded mb-2 flex justify-between"
        >
          <a href={bm.url} target="_blank" rel="noreferrer">
            {bm.title}
          </a>

          <button
            onClick={() => deleteBookmark(bm.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )*/
 return (
  <div className="mt-6 space-y-4">
    {bookmarks.length === 0 && (
      <p className="text-center text-white/80">
        No bookmarks yet 🚀
      </p>
    )}

    {bookmarks.map((bm) => (
      <div
        key={bm.id}
        className="bg-white text-gray-800 rounded-xl p-4 shadow-lg flex justify-between items-center transition hover:scale-[1.02]"
      >
        <div className="flex flex-col">
          <span className="font-semibold text-lg">
            {bm.title}
          </span>
          <a
            href={bm.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-indigo-600 hover:underline"
          >
            {bm.url}
          </a>
        </div>

        <button
          onClick={() => deleteBookmark(bm.id)}
          className="text-red-500 font-medium hover:text-red-700 transition"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
)

}
