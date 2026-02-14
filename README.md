Smart Bookmark App

A simple and real-time bookmark manager where users can securely save and manage their bookmarks using Google OAuth.

🔗 Live Demo

https://bookmora.vercel.app/

📂 GitHub Repository


🛠 Features

Google OAuth Login – Users can sign up or log in using their Google account only (no email/password).

Add Bookmarks – Save bookmarks with URL and title.

Private Bookmarks – Bookmarks are user-specific. No user can see another user’s bookmarks.

Real-time Updates – Bookmark list updates instantly across multiple tabs without page refresh (powered by Supabase Realtime).

Delete Bookmarks – Users can delete their own bookmarks.

💻 Tech Stack

Frontend: Next.js (App Router)

Backend/Database: Supabase (Auth, Database, Realtime)

Styling: Tailwind CSS

Deployment: Vercel

🚀 How to Use

Open the live app here
.

Log in with your Google account.

Add your bookmarks using the form.

Delete bookmarks using the delete button next to each bookmark.

Open multiple tabs to see real-time updates in action.

📝 Challenges & Solutions

Challenge: Setting up Supabase Realtime so that bookmark changes appear instantly across tabs.
Solution: Used Supabase Realtime subscriptions on the bookmarks table filtered by the current user ID.

Challenge: Ensuring bookmarks are private for each user.
Solution: Added row-level security (RLS) policies in Supabase to restrict access to only the logged-in user's bookmarks.

Challenge: Google OAuth login integration.
Solution: Configured Supabase Auth with Google provider and handled session management in Next.js App Router.

📦 Installation (Optional, for local development)

Clone the repo:

git clone https://github.com/TiyaRajput123/smart-bookmark-app.git


Install dependencies:

cd smart-bookmark-app
npm install


Setup environment variables:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


Run locally:

npm run dev


Open http://localhost:3000
 in your browser.
