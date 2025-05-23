# 🐇 RabbitCom - Modern React E-commerce Frontend

RabbitCom is a sleek and performant modern **React E-commerce frontend** built with **React 19**, **Tailwind CSS**, **Framer Motion**, and **PayPal Integration**.

> 🔗 Live Preview: [https://rabbitcom.vercel.app](https://rabbitcom.vercel.app)

---

## 🚀 Tech Stack

### 🎨 Frontend
- **React 19** – Modern React with performance improvements
- **React Router v7** – SPA routing
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Smooth animations
- **React Icons** – Prebuilt icon library
- **Lucide React** – Clean and customizable SVG icons
- **Sonner** – Minimal and beautiful toast notifications
- **@paypal/react-paypal-js** – Secure PayPal payment integration
- ** Use context ** for state management 

### 🧪 Dev Tools
- **Vite** – Fast build tool
- **ESLint** – Linting for clean and consistent code
- **PostCSS + Autoprefixer** – Automatic vendor prefixing

---
## 📸 UI Preview

| Home Page | Products |
|-----------|----------|
| ![profile01](https://github.com/user-attachments/assets/376105b7-3d76-483d-b240-169b8bcea0f5) | ![profile02](https://github.com/user-attachments/assets/1582f497-3320-42db-8b15-0e95bb999cae) |

| Product Detail | Cart |
|----------------|------|
| ![profile03](https://github.com/user-attachments/assets/7aa07373-4791-41f2-a2b0-ce7211d2fd03) | ![profile04](https://github.com/user-attachments/assets/05a1a03b-e1b2-4bcb-b3e4-3daf69002244) |

| Checkout |
|----------|
| ![profile05](https://github.com/user-attachments/assets/c660167e-edc8-4d85-a66a-70cfa864774f) |

> 💡 All images are from the production deployment on [rabbitcom.vercel.app](https://rabbitcom.vercel.app)





# SniplyBook – Bookmarking & Organizing Tool (Full-stack MERN)
SniplyBook is a full-featured MERN stack application for saving, managing, and summarizing content from the web. It features a clean dashboard, category tagging, user auth, and real-time link previews.

🔗 Live Demo: https://nextbuild-wrrp.vercel.app

🚀 Features
🔐 User Authentication (Sign up & Log in)

🔖 Bookmark content from URLs

🧠 AI summaries (auto-generated metadata)

🗃️ Categorization & tagging

🌙 Theme-aware UI with Framer Motion animations

🧰 Tech Stack
Layer	Tech
Frontend	React, TailwindCSS, Axios
Backend	Node.js, Express, Mongoose
Database	MongoDB Atlas
Auth	JWT, bcryptjs
Hosting	Vercel (Frontend), Render (Backend)



## 📸 UI Preview

| Sign Up / Login | Dashboard |
|------------------|-----------|
| ![working](https://github.com/user-attachments/assets/0f1de30c-f77e-4cf8-8bc3-92e03581b7bd) | ![working01](https://github.com/user-attachments/assets/9f01499b-6d7f-44f9-b8de-0f18aebfb014) |
| ![working02](https://github.com/user-attachments/assets/fab84ef8-4988-4170-b95e-2bf40226ca63) | ![working03](https://github.com/user-attachments/assets/6cb183c4-d8a2-4a62-bcf5-5f8562a76b09) |
| ![working04](https://github.com/user-attachments/assets/e061c29a-f3c8-4b68-af65-abb29c7bed82) | *(More features live on site)* |
	




## 📁 Folder Structure

```
SniplyBook/
├── backend/             Express backend (API & MongoDB connection)
│   ├── config/          DB connection setup
│   ├── controllers/     Route handler logic (auth, bookmarks)
│   ├── models/          Mongoose schemas
│   ├── routes/          API route definitions
│   ├── .env             Backend environment variables
│   └── server.js        Entry point
│
├── frontend/            React frontend (Vite-based)
│   ├── src/
│   │   ├── api/         Axios config
│   │   ├── pages/       Login, Signup, Dashboard, etc.
│   │   ├── utils/       Auth helpers, Toastify, etc.
│   │   └── App.jsx      Main app entry
│   ├── public/
│   ├── .env             Frontend environment variables
│   └── vite.config.js
```

---

## 📄 License

MIT License – feel free to use, modify, and contribute.




# ⚡ Abun – Dashboard UI with DnD, Charts, and Radix UI

Abun is a modern, elegant, and interactive dashboard app built with **React 19**, **Tailwind CSS**, **Radix UI**, and powerful drag-and-drop (DnD) capabilities via `@dnd-kit`. It includes components for charts, themes, modals, tooltips, and more.

> 🔗 **Live Demo:** [https://nextbuild-abun.vercel.app/](https://nextbuild-abun.vercel.app/)

---

## 🚀 Tech Stack

### 🧩 Frontend

- **React 19**
- **Tailwind CSS**
- **@dnd-kit** – Drag-and-drop interactivity
- **Radix UI** – Accessible headless UI components
- **Lucide React** – Icon library
- **Zod** – Schema validation
- **Recharts** – Chart components
- **Sonner** – Toast notifications
- **Vaul** – Drawer & sheet component
- **Next Themes** – Light/dark theme toggle
- **Class Variance Authority / Tailwind Variants / tailwind-merge** – Utility class helpers

### 🧪 Dev Tooling

- **Vite** – Lightning-fast bundler
- **ESLint** – Linting with React hooks & refresh plugins
- **PostCSS + Autoprefixer**
- **TypeScript (via @types)**

---

## 📸 UI Preview

| Dashboard View | Drag & Drop |
|----------------|-------------|
| ![work](https://github.com/user-attachments/assets/2b5526c6-4a59-4e9f-9f10-220c75fa03cb) | ![wrk01](https://github.com/user-attachments/assets/8e2d618d-47aa-4a0b-82bc-ef7b944c2151) |

---

## 🧩 Scripts

| Script      | Description                    |
|-------------|--------------------------------|
| `dev`       | Start Vite dev server          |
| `build`     | Build for production           |
| `preview`   | Preview the built site locally |
| `lint`      | Run ESLint checks              |

---

## 📂 Project Structure

```
abun/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## ✨ Features

- Drag-and-drop with reorderable panels
- Responsive, animated UI with smooth transitions
- Charts powered by `Recharts`
- Dark/light theme support
- Headless UI via `Radix`
- Clean, accessible, mobile-friendly design

---




# 🐚 SoftShell – Web3 Scrollable UI (React + Tailwind)

SoftShell is a visually sleek and minimalistic Web3 UI built with **React 19**, **Tailwind CSS**, and **Framer Motion**. It focuses on smooth transitions, scroll interactions, and modern visual presentation for decentralized platforms.

> 🔗 **Live Demo:** [https://web3-hdl3.vercel.app/](https://web3-hdl3.vercel.app/)

---

## 🚀 Tech Stack

### 🧩 Frontend

- **React 19**
- **Tailwind CSS**
- **Framer Motion** – Animations and transitions
- **React Icons** – Prebuilt icon library
- **Axios** – HTTP client for APIs
- **tailwind-scrollbar-hide** – Clean scrollbar UX

### 🧪 Dev Tooling

- **Vite** – Lightning-fast dev server & build tool
- **ESLint** – Code linting
- **PostCSS + Autoprefixer** – Vendor prefixing
- **TypeScript types** (via `@types/*`)

---

## 📸 UI Preview

| Page View 1 | Page View 2 |
|-------------|-------------|
| ![work01](https://github.com/user-attachments/assets/5596ade5-9ed4-4ea1-81ff-0d5f13994d77) | ![work02](https://github.com/user-attachments/assets/86e77ebf-064a-42cd-ad99-bef9835a92fd) |

| Page View 3 | Page View 4 |
|-------------|-------------|
| ![ks](https://github.com/user-attachments/assets/4a50d81a-890a-4c76-8847-21cc6907ff55) | ![worksss](https://github.com/user-attachments/assets/0561eed1-a49c-4f8d-a5c3-821cce4c831b) |

| Page View 5 |
|-------------|
| ![sksksks](https://github.com/user-attachments/assets/7aa9a71d-b0e4-4423-8220-bcf723184cff) |

---

## ✨ Features

- 🌐 Modern landing UI for Web3 experiences
- 🎯 Animated transitions with Framer Motion
- 🖼️ Horizontally scrollable content sections
- ⚡ Lightweight performance via Vite + Tailwind










## 📄 License

MIT License – feel free to use and modify!

---

> Made with 💙 by [Ayushi Gaur](https://github.com/gaurayushi)
