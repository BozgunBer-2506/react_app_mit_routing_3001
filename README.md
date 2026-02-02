# React Blog App with Routing

A blog application demonstrating React Router and API integration patterns.

## 🌐 Live Demo
https://react-app-mit-routing-3001.vercel.app/

## Overview

This application showcases modern React development practices including client-side routing, asynchronous data fetching, and state management. Built with React 18 and React Router v6, it fetches real-time data from the JSONPlaceholder API.

## Features

- **Dynamic Routing** - Navigate between pages without reload
- **API Integration** - Fetch posts and user data from JSONPlaceholder
- **Loading States** - Proper feedback during data fetching
- **Error Handling** - Graceful error messages
- **Responsive Design** - Works on mobile and desktop

## Tech Stack

- React 18
- React Router DOM v6
- Vite
- JSONPlaceholder API

## Project Structure
```
src/
├── components/       # Reusable UI components
├── pages/            # Route-based page components
├── App.jsx           # Route configuration
└── main.jsx          # Entry point
```

## Installation
```bash
# Clone repository
git clone https://github.com/BozgunBer-2506/react_app_mit_routing_3001.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Key Concepts

This project demonstrates:
- React Hooks (`useState`, `useEffect`, `useParams`)
- Async/await with fetch API
- Error boundaries and loading states
- Component composition
- URL parameter handling

## Development Notes

- Uses Vite for fast HMR
- Configured for WSL compatibility
- Deployed on Vercel with SPA routing support

---

Built by The_Bozgun | 2026