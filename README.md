<img width="1920" height="841" alt="Screenshot 2026-09-16 190845" src="https://github.com/user-attachments/assets/fa1c04cf-9ced-407e-8ab4-68e721cfc49f" />
# 🚀 AI-Powered Full-Stack CRM System

A premium, multi-tenant Customer Relationship Management (CRM) platform built with the **MERN Stack** and powered by **Google Gemini AI**. Designed with a modern, fintech-style sky-blue dashboard, this application helps sales teams track leads, manage pipelines via drag-and-drop, and leverage Generative AI for actionable insights and automated workflows.

## ✨ Key Features

### 🤖 AI-Powered Capabilities (Google Gemini API)
*   **AI Lead Summarization:** Automatically generates structured summaries, assigns a 0-100 risk score, and suggests priority and next best actions using strict JSON-schema outputs.
*   **AI Email Generator:** Drafts professional sales emails (subject + body) tailored to the lead's context, purpose, and desired tone.
*   **Pipeline Health Insights:** Analyzes the entire sales pipeline to return a health score, data-driven observations, and prioritized recommendations.

### 💼 Sales & Lead Management
*   **Drag-and-Drop Kanban Board:** Visually manage deals across stages (New → Qualified → Proposal → Won → Lost) with real-time database syncing and per-stage value totals.
*   **Advanced Leads Management:** Full CRUD operations with filtering, live search, sortable columns, CSV export, and bulk delete.
*   **Lead Detail Drawer:** A quick-view side panel for inline edits, AI actions, and notes without leaving the current page.

### 📊 Dashboard & Productivity
*   **Real-Time Analytics:** KPI cards, pipeline engagement charts, revenue-won trends, and leads-by-source donut charts powered by efficient MongoDB aggregation pipelines.
*   **Contacts & Notes:** Searchable contact grid with tags, and a Pinterest-style masonry layout for pinned and searchable notes.
*   **Task Management:** Follow-up tasks with due dates, overdue detection, priority tracking, and a completion progress bar.

### 🔒 Security & Architecture
*   **Multi-Tenant Architecture:** Owner-scoped database queries ensure users only see and modify their own data.
*   **Authentication:** Secure registration and login using JWT (JSON Web Tokens) and bcrypt password hashing.
*   **Clean Backend API:** Modular MVC architecture (Routes → Controllers → Services) with centralized error-handling middleware.

---

## 🛠️ Tech Stack

**Frontend:**
*   React 19
*   Tailwind CSS v4 (Custom sky-blue theme tokens)
*   Shadcn-style custom UI components
*   Axios (for API calls and interceptors)

**Backend:**
*   Node.js & Express.js
*   MongoDB & Mongoose
*   JSON Web Tokens (JWT) & Bcrypt

**AI & Third-Party:**
*   Google Gemini Flash API (Structured JSON schema mode)

---

## ⚙️ Local Setup & Installation

### Prerequisites
*   Node.js installed on your machine
*   MongoDB URI (Local or MongoDB Atlas)
*   Google Gemini API Key (Free tier via Google AI Studio)

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/ai-crm-system.git](https://github.com/yourusername/ai-crm-system.git)
cd ai-crm-system
2. Backend Setup
Bash
cd server
npm install
Create a .env file in the server directory and add the following variables:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
Start the backend server:

Bash
npm run dev
3. Frontend Setup
Bash
cd ../client
npm install
Create a .env file in the client directory:

Code snippet
REACT_APP_API_URL=http://localhost:5000/api
Start the React application:

Bash
npm start
