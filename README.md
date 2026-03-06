# ✈️ Travel Planner

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-fast-purple?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-routing-red)
![License](https://img.shields.io/badge/license-MIT-green)

A modern **React travel planning application** where users can explore places, add them to favorites, and manage a TODO list for each location.

The application allows users to plan visits to parks, museums, and restaurants while tracking tasks for every place.

---

# 🌍 Live Demo

👉 https://my-city-bay.vercel.app

---

# 🚀 Features

- 📍 Browse **categories of places**
- 🗺️ View **places inside each category**
- ⭐ Add / remove **favorite places**
- ✅ Manage **TODO lists for each place**
- 🔍 **Search tasks**
- 🔄 **Sort tasks** (active / completed)
- 📊 **Task progress bar**
- ⏳ **Simulated data loading** using `useEffect`
- 💾 **LocalStorage support**
- 🧭 **React Router navigation**
- 📱 **Responsive modern UI**

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|--------|
| React | UI library |
| React Router | Routing |
| JavaScript | Application logic |
| CSS | Styling |
| Vite | Development environment |
| Vercel | Deployment |

---

# 📂 Project Structure


src
├── components
│ ├── layout
│ └── PageTitle
│
├── pages
│ ├── home
│ ├── categories
│ ├── categoryPlaces
│ ├── place
│ ├── favorites
│ ├── about
│ └── notFound
│
├── data.js
├── App.jsx
└── main.jsx


---

# 📍 Routes

| Route | Description |
|------|-------------|
| `/` | Home page with statistics |
| `/categories` | List of categories |
| `/categories/:categoryId` | Places in category |
| `/categories/:categoryId/places/:placeId` | Place page with TODO list |
| `/favorites` | Favorite places |
| `/about` | About the project |
| `*` | 404 page |

---

# 📋 TODO System

Each place has its own TODO list where users can:

- ➕ Add new tasks  
- ✔ Mark tasks as completed  
- ❌ Delete tasks  
- 🔎 Search tasks  
- 🔄 Sort tasks  
- 📊 Track completion progress  

Tasks are loaded with a **simulated API delay** using `useEffect`.

---

# 💾 Local Storage

The application saves:

- ⭐ favorite places  
- ✅ tasks  

This allows the data to **persist after page reload**.

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/LarysaSperling/myCity.git

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:5173
▲ Deploy on Vercel

This project is deployed using Vercel.

To deploy your own version:

Push the project to GitHub

Go to Vercel

Click Add New Project

Import your repository

Click Deploy

🎯 Learning Goals

This project demonstrates:

React hooks (useState, useEffect)

React Router (Routes, Route, Link, NavLink, Navigate, useParams)

Dynamic routing

State management

Conditional rendering

Local storage persistence

Responsive UI design

👩‍💻 Author

Created by Larysa Sperling as part of a React learning project.

📜 License

MIT License
