<h1 align="center">📚 Bookmora - Smart Bookmark App</h1>
<h3 align="center">Effortlessly save, organize, and access your bookmarks in real-time with Google OAuth authentication. 
</h3> 


## 💫 About Project
**Bookmora** is a **smart bookmark app** that allows users to save, manage, and organize bookmarks efficiently.  
The app focuses on **user privacy**, **real-time updates**, and a smooth **Google OAuth login experience**.  

- 🌐 **Live Demo:** [https://bookmora.vercel.app/](https://bookmora.vercel.app/)  
- 📂 **GitHub Repository:** [https://github.com/TiyaRajput123/Bookmora.git
- (https://github.com/TiyaRajput123/Bookmora.git)

---

## 💻 Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-%23000000?style=for-the-badge&logo=next.js&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-%2300F2C3?style=for-the-badge&logo=supabase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB)

---
## ⚡ Features
- ✅ **Google OAuth Login:** Users can sign up and log in using Google only  
- ✅ **Add Bookmarks:** Users can add bookmarks with a URL and title  
- ✅ **Private Bookmarks:** Each user's bookmarks are private  
- ✅ **Real-Time Updates:** Bookmarks update in real-time across tabs  
- ✅ **Delete Bookmarks:** Users can delete their own bookmarks  
- ✅ **Responsive UI:** Built with Tailwind CSS for mobile and desktop  

---

## 🛠 How I Built It
- **Google OAuth authentication** with Supabase  
- **Realtime database updates** using Supabase Realtime features  
- **Next.js App Router** for clean frontend routing  
- **Tailwind CSS** for styling and responsive design
---

## 🎯 How to Use

Open the live app here : https://bookmora.vercel.app/

Log in with your Google account.

Add bookmarks using the form.

Delete bookmarks using the trash icon next to each bookmark.

Open multiple tabs to witness real-time updates.

---

## 🏆 Challenges & Solutions
- **Challenge:** Setting up Google OAuth and ensuring secure authentication  
  **Solution:** Used Supabase Auth with proper configuration and tested multiple Google accounts  
- **Challenge:** Real-time bookmark updates across multiple tabs  
  **Solution:** Implemented Supabase Realtime subscriptions to sync data instantly  
- **Challenge:** Keeping bookmarks private per user  
  **Solution:** Created Supabase policies so each user can only access their own bookmarks  

---
## 📦 Installation & Local Setup

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
