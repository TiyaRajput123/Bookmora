export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-2 rounded-xl shadow-lg">
        <span className="text-white text-xl font-bold">SB</span>
      </div>
      <h1 className="text-2xl font-bold tracking-wide">
        Smart<span className="text-indigo-500">Bookmark</span>
      </h1>
    </div>
  )
}
