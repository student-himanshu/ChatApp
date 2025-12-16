# Gemini ChatApp

A full-stack AI chat application built using **React (Vite)** and **Node.js (Express)** that integrates **Google Gemini API** to generate AI responses and display them in the frontend.

---

## 🚀 Overview

This project demonstrates how to:
- Call the **Gemini API** from a Node.js backend
- Secure the API key using environment variables
- Send user input from frontend to backend
- Return AI-generated responses and display them in the UI

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- CSS / Tailwind (if used)

### Backend
- Node.js
- Express.js
- Google Gemini API
- dotenv

---

## 📂 How to run on VScode 

▶️ Run Project in VS Code
1️⃣ Download / Clone the Project
git clone https://github.com/YOUR_USERNAME/chatApp.git


OR
Download ZIP from GitHub and extract it.

2️⃣ Open Project in VS Code

Open VS Code

Click File → Open Folder

Select the chatApp folder

3️⃣ Create .env File (Backend)

Go to:

chatApp/server


Create a file named .env and add:

PORT=8120
GEMINI_API_KEY=your_gemini_api_key_here


⚠️ .env file is required to run the backend and is ignored by Git for security.

4️⃣ Install Backend Dependencies

Open VS Code terminal:

cd server
npm install

5️⃣ Run Backend Server
npm start


Backend will run at:

http://localhost:8120

6️⃣ Install Frontend Dependencies

Open new terminal in VS Code:

cd client
npm install

7️⃣ Run Frontend
npm run dev


Frontend will run at:

http://localhost:5173

✅ Project Running Successfully

Frontend sends user message

Backend calls Gemini API

AI response is returned and shown in UI

🧠 Simple Flow (For Readers)
User Input (React)
        ↓
Frontend (Axios)
        ↓
Backend (Express API)
        ↓
Gemini API
        ↓
AI Response
        ↓
Frontend Display

🎯 Notes

Make sure Node.js is installed

Use Node v18+

Internet connection required for Gemini API
