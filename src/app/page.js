'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import Login from '../../components/Login'
import BookmarkForm from '../../components/BookmarkForm'
import BookmarkList from '../../components/BookmarkList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Home() {
  const [user, setUser] = useState(null)
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setUser(session.user)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
  }, [])

  useEffect(() => {
    if (!user) return

    const fetchBookmarks = async () => {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', user.id)

      if (!error) setBookmarks(data)
    }

    fetchBookmarks()
  }, [user])


  useEffect(() => {
  if (!user) return;

  const channel = supabase
    .channel('bookmarks-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'bookmarks',
      },
      (payload) => {
        if (payload.new?.user_id === user.id) {
          if (payload.eventType === 'INSERT') {
            setBookmarks(prev => [...prev, payload.new])
          }

          if (payload.eventType === 'DELETE') {
            setBookmarks(prev =>
              prev.filter(b => b.id !== payload.old.id)
            )
          }
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, [user]);

 return (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">


    {!user ? (
      <div className="flex flex-col items-center justify-center flex-grow">
        <Login />
      </div>
    ) : (
      <>
        <Header user={user} />

        <main className="flex flex-col items-center flex-grow px-4 py-10">
     <div className="w-full max-w-xl bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/30">


            <h2 className="text-3xl font-bold text-center mb-6">
              Your Smart Bookmarks
            </h2>

            <BookmarkForm
              user={user}
              onAdd={(newBm) =>
                setBookmarks(prev => [...prev, newBm])
              }
            />

            <BookmarkList
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          </div>
        </main>

        <Footer />
      </>
    )}
  </div>
)
}