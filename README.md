# React Blog Application - Advanced Routing & API Integration

A professional, responsive blog application developed with React, focusing on dynamic routing and external API integration.

## 🚀 [Live Demo](https://react-app-mit-routing-3001.vercel.app/)

## 📝 Project Overview
This project was built as a comprehensive exercise to master React Router DOM and state management. It simulates a real-world blog platform where users can browse posts, read details, and explore author profiles.

## 🛠 Features & Implementation

### 1. Dynamic Routing
- Implemented `react-router-dom` to create a multi-page feel in a Single Page Application (SPA).
- Developed dynamic routes for specific blog posts (`/posts/:postId`) and user profiles (`/users/:userId`).
- Handled 404 pages using a catch-all route.

### 2. API Integration & Data Fetching
- Integrated with **JSONPlaceholder API** for real-time data.
- Configured custom fetch parameters to retrieve exactly **50 blog posts** for a richer content experience.
- Used `Promise.all` in the User Profile section to simultaneously fetch user details and all posts belonging to that specific author.

### 3. Modern UI/UX Design
- **Dark Mode Aesthetic**: A custom-designed interface using deep navy and slate tones.
- **Responsive Grid**: Built a CSS Grid system that adapts from 3-column desktop view to 1-column mobile view.
- **Interactive Cards**: Smooth hover effects and transitions to enhance user engagement.

### 4. WSL Optimization
- The project includes a specialized `vite.config.js` for developers using **Windows Subsystem for Linux (WSL)**, ensuring hot-module replacement (HMR) works perfectly across file systems.

## 📖 What I Learned
- Managing complex state across multiple components using `useState` and `useEffect`.
- Passing data through URL parameters with `useParams`.
- Handling asynchronous operations and loading states for a better user experience.
- Deploying a React application with routing to a live production environment (Vercel).

## 🚀 How to Run Locally
1. Clone the repository:
   `git clone https://github.com/BozgunBer-2506/react_app_mit_routing_3001.git`
2. Install dependencies:
   `npm install`
3. Launch development server:
   `npm run dev`

---
---
### 🌟 Happy Learning!
Authored by **The_Bozgun** | 2026