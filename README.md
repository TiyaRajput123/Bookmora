<h1 align="center">📚 Bookmora - Smart Bookmark App</h1>

Effortlessly save, organize, and access your bookmarks in real-time with Google OAuth authentication. 

🔗 Live Demo : https://bookmora.vercel.app/

📂 GitHub Repository : https://github.com/TiyaRajput123/Bookmora.git

🛠 Key Features

🔑 Google OAuth Login – Sign up or log in using your Google account only (no email/password required).

📌 Add Bookmarks – Save bookmarks with title and URL.

🔒 Private Bookmarks – Each user's bookmarks are private and secure.

⚡ Real-time Updates – Changes appear instantly across tabs using Supabase Realtime.

🗑 Delete Bookmarks – Remove bookmarks anytime with a single click.

💻 Tech Stack
Layer	Technology
Frontend	Next.js (App Router)
Backend/Database	Supabase (Auth, Database, Realtime)
Styling	Tailwind CSS
Deployment	Vercel
🎯 How to Use

Open the live app here
.

Log in with your Google account.

Add bookmarks using the form.

Delete bookmarks using the trash icon next to each bookmark.

Open multiple tabs to witness real-time updates.

📝 Challenges & Solutions

Challenge: Realtime updates across tabs.
Solution: Used Supabase Realtime subscriptions filtered by user ID.

Challenge: Bookmark privacy for each user.
Solution: Implemented Row-Level Security (RLS) policies in Supabase.

Challenge: Integrating Google OAuth login.
Solution: Configured Supabase Auth with Google provider and managed sessions in Next.js App Router.

📦 Installation & Local Setup

Clone the repository:

git clone https://github.com/TiyaRajput123/Bookmora.git


Install dependencies:

cd smart-bookmark-app
npm install


Configure environment variables:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


Run the application locally:

npm run dev


Open http://localhost:3000
 in your browser.
